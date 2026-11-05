'use strict';

// Story, context, action and result are the dependency chain. Changing a parent
// resets only its dependent fields, so an old ending cannot leak into a new path.
var STEPS = [
  ['選擇故事主題', 'Choose Your Story'], ['選擇人物與情境', 'Choose People & Context'],
  ['犯錯經過', 'Choose the Action'], ['背景：時、人、地、因', 'Background'],
  ['闖禍後果', 'Consequence'], ['認錯與反省', 'Apology & Lesson'],
  ['倒敍引子', 'Flashback Introduction']
];
var FIELD_LISTS = {
  bgTime: 'times', bgWho: 'whos', bgPlace: 'places', bgCause: 'causes',
  p1Face: 'faces', p1Thought: 'thoughts', p2Result: 'results',
  p2Reaction: 'reactions', p2Thought: 'regrets', p2Ending: 'endings',
  lesson: 'lessons', futureAction: 'futureActions', introFeeling: 'feelings'
};
var LINKED_FIELDS = new Set(['bgWho', 'bgCause', 'introObj', 'introEvent', 'p1Action', 'p2Result']);
var currentStep = 1;
var showEnglish = true;
var activeTab = 'form';
var formState = {studentName: '', studentClass: '6N', storyIndex: 0, contextIndex: 0, branchIndex: 0, resultIndex: 0};
var ZH_TO_EN_MAP = Object.create(null);

function escapeHTML(value) {
  return String(value == null ? '' : value).replace(/[&<>"']/g, function(c) {
    return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c];
  });
}
function storyNow() { return STORIES[formState.storyIndex]; }
function contextNow() { return storyNow().contexts[formState.contextIndex]; }
function branchNow() { return contextNow().branches[formState.branchIndex]; }
function resultNow() { return branchNow().results[formState.resultIndex]; }
function optionsFor(field) {
  var key = FIELD_LISTS[field];
  return key ? branchNow()[key] || contextNow()[key] || [] : [];
}
function rebuildDictionary() {
  ZH_TO_EN_MAP = Object.create(null);
  Object.keys(FIELD_LISTS).forEach(function(field) {
    optionsFor(field).forEach(function(item) { ZH_TO_EN_MAP[item.zh] = item.en; });
  });
  var br = branchNow(), result = resultNow();
  ZH_TO_EN_MAP[br.action] = br.actionEn;
  ['introObj', 'introEvent'].forEach(function(key) { ZH_TO_EN_MAP[result[key]] = result[key + 'En']; });
}
function getEn(zh) { return ZH_TO_EN_MAP[zh] || 'Your own wording (not automatically translated)'; }
function setDefaults(fields) {
  fields.forEach(function(field) {
    var list = optionsFor(field);
    if (!list.length) throw new Error('Missing story options: ' + field);
    formState[field] = list[0].zh;
  });
}
function applyResult(index) {
  if (!Number.isInteger(index) || !branchNow().results[index]) return;
  formState.resultIndex = index;
  var result = resultNow();
  formState.p2Result = result.zh;
  formState.introObj = result.introObj;
  formState.introEvent = result.introEvent;
  rebuildDictionary();
}
function applyBranch(index) {
  if (!Number.isInteger(index) || !contextNow().branches[index]) return;
  formState.branchIndex = index;
  setDefaults(Object.keys(FIELD_LISTS).filter(function(field) { return field !== 'p2Result'; }));
  formState.p1Action = branchNow().action;
  applyResult(0);
}
function applyContext(index) {
  if (!Number.isInteger(index) || !storyNow().contexts[index]) return;
  formState.contextIndex = index;
  applyBranch(0);
}
function applyStoryAndBranchDefaults(index, branchIndex) {
  if (!Number.isInteger(index) || !STORIES[index]) return;
  formState.storyIndex = index;
  formState.contextIndex = 0;
  applyBranch(branchIndex || 0);
}
function refresh() {
  renderCurrentStep();
  renderMindMapAndScaffold();
}
function chooseStory(index) {
  if (index !== formState.storyIndex) applyStoryAndBranchDefaults(index, 0);
  refresh();
}
function chooseContext(index) {
  if (index !== formState.contextIndex) applyContext(index);
  refresh();
}
function chooseBranch(index) {
  if (index !== formState.branchIndex) applyBranch(index);
  refresh();
}
function chooseFieldOption(field, index) {
  var list = optionsFor(field);
  if (!Number.isInteger(index) || !list[index]) return;
  if (field === 'p2Result') applyResult(index);
  else formState[field] = list[index].zh;
  refresh();
}
function coherenceErrors() {
  var errors = [];
  Object.keys(FIELD_LISTS).forEach(function(field) {
    var text = formState[field] || '';
    if (!text.trim()) errors.push({field: field, message: '請填寫內容。(Please complete this field.)'});
    else if (!optionsFor(field).some(function(option) { return option.zh === text; })) {
      var conflict = contextNow().forbidden.find(function(word) { return text.includes(word); });
      if (conflict) errors.push({field: field, message: '「' + conflict + '」與已選人物／物件不符，請修正。(This wording conflicts with your selected context.)'});
    }
  });
  return errors;
}
function showValidation() {
  var errors = coherenceErrors();
  var notice = document.getElementById('validationNotice');
  notice.classList.toggle('hidden', !errors.length);
  notice.textContent = errors.length ? '請先檢查自訂字詞：' + errors[0].message : '';
  document.querySelectorAll('[data-custom-field]').forEach(function(input) {
    var error = errors.find(function(item) { return item.field === input.dataset.customField; });
    input.setAttribute('aria-invalid', error ? 'true' : 'false');
    var hint = document.getElementById('hint-' + input.dataset.customField);
    if (hint) hint.textContent = error ? error.message :
      (optionsFor(input.dataset.customField).some(function(item) { return item.zh === input.value; }) ? '' :
        '自訂內容請核對前後情節；英文不會自動翻譯。(Check your wording; custom text is not automatically translated.)');
  });
  return !errors.length;
}
function editCustomField(field, value) {
  if (!(field in FIELD_LISTS) || LINKED_FIELDS.has(field)) return;
  formState[field] = value.slice(0, 240);
  showValidation();
  renderMindMapAndScaffold();
}
function syncStateFromInputs() {
  formState.studentName = document.getElementById('studentName').value.trim().slice(0, 80);
  formState.studentClass = document.getElementById('studentClass').value.trim().slice(0, 80) || '6N';
  renderMindMapAndScaffold();
}
function toggleEnglishHints() {
  showEnglish = !showEnglish;
  var badge = document.getElementById('engStatusBadge');
  badge.textContent = showEnglish ? 'ON 開啟' : 'OFF 關閉';
  badge.className = 'px-2 py-0.5 text-white rounded text-[11px] ' + (showEnglish ? 'bg-emerald-600' : 'bg-slate-400');
  refresh();
}
function goToStep(step) {
  if (!Number.isInteger(step) || step < 1 || step > STEPS.length) return;
  currentStep = step;
  renderCurrentStep();
  window.scrollTo({top: 0, behavior: 'smooth'});
}
function changeStep(delta) {
  if (currentStep === STEPS.length && delta > 0) switchTab('map');
  else goToStep(Math.max(1, Math.min(STEPS.length, currentStep + delta)));
}
function english(text, classes) {
  return showEnglish ? '<div class="' + (classes || 'text-[11px] text-slate-500 mt-0.5') + '">' + escapeHTML(text) + '</div>' : '';
}
function choiceCard(content, selected, handler, attrs) {
  return '<button type="button" onclick="' + handler + '" aria-pressed="' + selected + '" ' + (attrs || '') +
    ' class="option-card text-left border-2 rounded-xl p-3 w-full ' + (selected ? 'option-selected' : 'border-slate-200') + '">' +
    '<span class="float-right ml-2 text-emerald-800" aria-hidden="true">' + (selected ? '✓' : '○') + '</span>' + content + '</button>';
}
function renderQuestionBlock(num, zh, en, field, list) {
  var curr = formState[field] || '';
  var html = '<div class="gf-card p-4 space-y-2.5" data-question="' + field + '"><div class="text-sm font-bold text-slate-900">' +
    num + '. ' + escapeHTML(zh) + (showEnglish ? ' <span class="text-xs font-semibold text-emerald-800">(' + escapeHTML(en) + ')</span>' : '') + '</div>';
  html += '<div class="grid grid-cols-1 sm:grid-cols-3 gap-2">';
  list.forEach(function(option, i) {
    html += choiceCard('<div class="font-bold text-slate-900 text-sm">' + escapeHTML(option.zh) + '</div>' + english(option.en),
      curr === option.zh, "chooseFieldOption('" + field + "'," + i + ')', 'data-option="' + i + '"');
  });
  html += '</div>';
  if (LINKED_FIELDS.has(field)) {
    html += '<p class="text-[11px] text-slate-500">🔗 已按人物、動作與後果配對；修改上游選擇會同步更新。(Linked to your selected storyline.)</p>';
  } else {
    html += '<div class="pt-1.5 flex flex-col sm:flex-row sm:items-center gap-1.5"><label for="custom-' + field +
      '" class="text-[11px] font-bold text-slate-500 whitespace-nowrap">✏️ 可修改字詞 (Edit / Custom)：</label>' +
      '<input id="custom-' + field + '" data-custom-field="' + field + '" aria-describedby="hint-' + field + '" type="text" maxlength="240" value="' + escapeHTML(curr) +
      '" oninput="editCustomField(\'' + field + '\',this.value)" class="w-full px-2.5 py-1 rounded border border-slate-300 text-xs font-bold text-emerald-950 bg-slate-50 focus:bg-white"></div>' +
      '<p id="hint-' + field + '" class="text-xs text-rose-800" aria-live="polite"></p>';
  }
  return html + '</div>';
}
function renderCurrentStep() {
  var story = storyNow(), context = contextNow(), branch = branchNow();
  document.getElementById('activeBranchIndicator').innerHTML = '<div>' + escapeHTML(story.icon + ' ' + story.title) + '</div>' +
    '<div class="text-[11px] text-emerald-700 font-medium mt-0.5">' + escapeHTML(context.label + ' ➔ ' + branch.action) + '</div>';
  var pct = Math.round(currentStep / STEPS.length * 100);
  document.getElementById('stepProgressLabel').textContent = '第 ' + currentStep + ' 區段 / 共 ' + STEPS.length + ' 區段 (Section ' + currentStep + ' of ' + STEPS.length + ')';
  document.getElementById('stepPercentLabel').textContent = pct + '% (Completed)';
  document.getElementById('stepProgressBar').style.width = pct + '%';
  for (var i = 1; i <= STEPS.length; i++) {
    var btn = document.getElementById('stepNav' + i);
    btn.className = 'py-1.5 px-2 rounded text-[11px] ' + (i === currentStep ? 'font-bold bg-[#1f6b5c] text-white shadow-sm' : i < currentStep ? 'font-semibold bg-emerald-100 text-emerald-900' : 'font-medium bg-slate-100 text-slate-600');
    if (i === currentStep) btn.setAttribute('aria-current', 'step'); else btn.removeAttribute('aria-current');
  }
  document.getElementById('prevStepBtn').style.visibility = currentStep === 1 ? 'hidden' : 'visible';
  var next = document.getElementById('nextStepBtn');
  next.textContent = currentStep === STEPS.length ? '🎉 查看我的《寫作腦圖》& 範文 (View Mind Map & Essay) →' : '下一區段 (Next Section) →';
  next.className = 'px-6 py-2.5 rounded-xl text-sm font-bold shadow-md transition ' + (currentStep === STEPS.length ? 'bg-amber-500 hover:bg-amber-600 text-slate-950' : 'bg-[#1f6b5c] hover:bg-[#175347] text-white');
  var tones = ['emerald', 'sky', 'amber', 'sky', 'rose', 'purple', 'purple'];
  var tone = tones[currentStep - 1];
  var html = '<div class="space-y-3"><div class="gf-card p-4 bg-' + tone + '-900 text-white"><div class="text-xs font-bold">區段 ' + currentStep + ' / ' + STEPS.length + '</div>' +
    '<h2 class="text-base font-bold mt-0.5">' + STEPS[currentStep - 1][0] + '</h2>' + english(STEPS[currentStep - 1][1], 'text-xs text-white') + '</div>';
  if (currentStep === 1) {
    html += '<div class="gf-card p-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">';
    STORIES.forEach(function(st, index) {
      html += choiceCard('<div class="text-2xl">' + st.icon + '</div><div class="font-bold text-sm text-slate-900">' + escapeHTML(st.title) + '</div>' +
        english(st.titleEn, 'text-xs font-semibold text-emerald-800') + '<div class="text-xs text-slate-700 mt-1">' + escapeHTML(st.desc) + '</div>' + english(st.descEn),
        index === formState.storyIndex, 'chooseStory(' + index + ')', 'data-story="' + index + '"');
    });
    html += '</div>';
  } else if (currentStep === 2) {
    html += '<div class="gf-card p-4"><p class="text-sm mb-3">請先確定人物和物件，後面的內容會一起配對。(Choose the people and object first.)</p><div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">';
    story.contexts.forEach(function(c, index) {
      html += choiceCard('<div class="font-bold text-sm">' + escapeHTML(c.label) + '</div>' + english(c.labelEn),
        index === formState.contextIndex, 'chooseContext(' + index + ')', 'data-context="' + index + '"');
    });
    html += '</div></div>';
  } else if (currentStep === 3) {
    html += '<div class="gf-card p-4 space-y-2.5 border-2 border-amber-500"><div class="text-sm font-bold">🦋 選擇犯錯方式，後果和引子會隨之更新。(Choose an action.)</div><div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">';
    context.branches.forEach(function(br, index) {
      html += choiceCard('<div class="text-xs font-bold text-amber-900">分支 (Branch) ' + br.id + '</div><div class="font-bold text-sm mt-1">' + escapeHTML(br.action) + '</div>' +
        english(br.actionEn) + '<div class="mt-2 pt-1.5 border-t text-[11px] text-rose-800">➔ ' + escapeHTML(br.results[0].zh) + '</div>',
        index === formState.branchIndex, 'chooseBranch(' + index + ')', 'data-branch="' + index + '"');
    });
    html += '</div></div>';
    html += renderQuestionBlock('1', '當時表情／心情', 'Expression / Mood', 'p1Face', optionsFor('p1Face'));
    html += renderQuestionBlock('2', '心理獨白：我心想', 'Inner Thought', 'p1Thought', optionsFor('p1Thought'));
  } else if (currentStep === 4) {
    [['時間', 'Time', 'bgTime'], ['人物', 'People', 'bgWho'], ['地點', 'Place', 'bgPlace'], ['事情起因', 'Cause', 'bgCause']].forEach(function(q, i) {
      html += renderQuestionBlock(String(i + 1), q[0], q[1], q[2], optionsFor(q[2]));
    });
  } else if (currentStep === 5) {
    [['闖禍結果', 'Direct Consequence', 'p2Result'], ['驚慌／羞愧反應', 'Reaction', 'p2Reaction'], ['後悔心理獨白', 'Regret', 'p2Thought']].forEach(function(q, i) {
      html += renderQuestionBlock(String(i + 1), q[0], q[1], q[2], optionsFor(q[2]));
    });
  } else if (currentStep === 6) {
    [['最後處理／認錯', 'Apology / Remedy', 'p2Ending'], ['明白的道理', 'Moral Lesson', 'lesson'], ['以後具體改法', 'Future Action', 'futureAction']].forEach(function(q, i) {
      html += renderQuestionBlock(String(i + 1), q[0], q[1], q[2], optionsFor(q[2]));
    });
  } else {
    html += renderQuestionBlock('1', '第一段引子「物」', 'Flashback Object', 'introObj', [{zh: resultNow().introObj, en: resultNow().introObjEn}]);
    html += renderQuestionBlock('2', '第一段引子「事」', 'Event Summary', 'introEvent', [{zh: resultNow().introEvent, en: resultNow().introEventEn}]);
    html += renderQuestionBlock('3', '第一段引子「情」', 'Feeling Now', 'introFeeling', optionsFor('introFeeling'));
  }
  document.getElementById('stepContentContainer').innerHTML = html + '</div>';
  showValidation();
}
function formatBilingualCell(text, quote) {
  return '<div class="font-bold text-slate-900 text-sm">' + escapeHTML(quote ? '「' + text + '」' : text) + '</div>' + english(getEn(text));
}
function paragraphData() {
  var f = formState, en = getEn;
  return [
    {title: '第一段：引子（倒敍法：物 ➔ 事 ➔ 情） | Paragraph 1: Flashback Intro', parts: ['每當我看見', {field:'introObj'}, '，便會想起那次', {field:'introEvent'}, '的事，至今仍感到', {field:'introFeeling'}, '。'],
      en: 'Whenever I see ' + en(f.introObj) + ', I recall the incident of ' + en(f.introEvent) + '. I still feel ' + en(f.introFeeling) + '.'},
    {title: '第二段：背景（時、人、地、因） | Paragraph 2: Background', parts: ['記得', {field:'bgTime'}, '，', {field:'bgWho'}, '在', {field:'bgPlace'}, '。當時，', {field:'bgCause'}, '。'],
      en: 'The story took place ' + en(f.bgTime) + '. The people involved: ' + en(f.bgWho) + '. The place: ' + en(f.bgPlace) + '. At that time, ' + en(f.bgCause) + '.'},
    {title: '第三段：片段一（表情＋心想＋動作） | Paragraph 3: The Mistake', parts: ['那時，我', {field:'p1Face'}, '，心想：「', {field:'p1Thought'}, '」於是，我便', {field:'p1Action'}, '。'],
      en: 'At that moment, my expression and mood: ' + en(f.p1Face) + '. I thought, “' + en(f.p1Thought) + '” Then I ' + en(f.p1Action) + '.'},
    {title: '第四段：片段二（結果＋反應＋後悔＋認錯） | Paragraph 4: Consequence & Apology', parts: ['誰知，', {field:'p2Result'}, '。我頓時', {field:'p2Reaction'}, '，心裏後悔極了：「', {field:'p2Thought'}, '」最後，我', {field:'p2Ending'}, '。'],
      en: 'Unexpectedly, ' + en(f.p2Result) + '. My reaction: ' + en(f.p2Reaction) + '. I regretted it and thought, “' + en(f.p2Thought) + '” Finally, I ' + en(f.p2Ending) + '.'},
    {title: '第五段：總結（明白道理＋以後改法） | Paragraph 5: Conclusion', parts: ['經過這件事，我明白到', {field:'lesson'}, '。以後我一定會', {field:'futureAction'}, '。'],
      en: 'Through this incident, I learned that ' + en(f.lesson) + '. From now on, I will ' + en(f.futureAction) + '.'}
  ];
}
function paragraphText(paragraph) {
  return paragraph.parts.map(function(part) { return typeof part === 'string' ? part : formState[part.field]; }).join('');
}
function renderMindMapAndScaffold() {
  document.getElementById('mapNameDisplay').textContent = formState.studentName || '＿＿＿＿';
  document.getElementById('mapClassDisplay').textContent = formState.studentClass || '6N';
  document.getElementById('mapStoryTypeBadge').textContent = storyNow().icon + ' ' + storyNow().title;
  document.getElementById('mapBranchBadge').innerHTML = '<div>' + escapeHTML(contextNow().label + '：' + formState.p1Action) + '</div>' + english(branchNow().actionEn);
  var cells = {mapIntroObj:'introObj',mapIntroEvent:'introEvent',mapIntroFeeling:'introFeeling',mapBgTime:'bgTime',mapBgWho:'bgWho',mapBgPlace:'bgPlace',mapBgCause:'bgCause',mapP1Action:'p1Action',mapP1Face:'p1Face',mapP1Thought:'p1Thought',mapP2Result:'p2Result',mapP2Reaction:'p2Reaction',mapP2Thought:'p2Thought',mapP2Ending:'p2Ending',mapConclusionLesson:'lesson',mapConclusionAction:'futureAction'};
  Object.keys(cells).forEach(function(id) { document.getElementById(id).innerHTML = formatBilingualCell(formState[cells[id]], id.includes('Thought')); });
  var paragraphs = paragraphData();
  var count = paragraphs.map(paragraphText).join('').replace(/[^\p{Script=Han}]/gu, '').length;
  document.getElementById('totalCharCountBadge').textContent = '全文共 ' + count + ' 個中文字 (Chinese characters: ' + count + ')';
  document.getElementById('scaffoldParagraphsList').innerHTML = paragraphs.map(function(p) {
    var content = p.parts.map(function(part) { return typeof part === 'string' ? escapeHTML(part) : '<span class="font-bold text-blue-700 underline">' + escapeHTML(formState[part.field]) + '</span>'; }).join('');
    return '<div class="p-3 rounded-xl bg-slate-50 border border-slate-200"><div class="text-xs font-bold text-slate-500 mb-0.5">' + escapeHTML(p.title) + '</div><div class="text-slate-900 text-sm leading-relaxed">　　' + content + '</div>' + english(p.en, 'text-xs text-slate-500 mt-1 italic') + '</div>';
  }).join('');
}
function switchTab(tab) {
  if (tab !== 'form' && tab !== 'map') return;
  if (tab === 'map' && !showValidation()) {
    activeTab = 'form';
    document.getElementById('viewForm').className = 'space-y-4';
    document.getElementById('viewMap').className = 'hidden';
    document.getElementById('validationNotice').scrollIntoView({behavior:'smooth', block:'center'});
    return;
  }
  activeTab = tab;
  renderMindMapAndScaffold();
  document.getElementById('viewForm').className = tab === 'form' ? 'space-y-4' : 'hidden';
  document.getElementById('viewMap').className = tab === 'map' ? 'space-y-5 print-area' : 'hidden';
  ['form', 'map'].forEach(function(name) {
    document.getElementById(name === 'form' ? 'tabBtnForm' : 'tabBtnMap').className = 'px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ' +
      (name === tab ? 'bg-white text-[#1f6b5c] shadow-sm' : 'bg-white/15 hover:bg-white/25 text-white');
  });
}
function outlineText() {
  var fields = ['introObj','introEvent','introFeeling','bgTime','bgWho','bgPlace','bgCause','p1Face','p1Thought','p1Action','p2Result','p2Reaction','p2Thought','p2Ending','lesson','futureAction'];
  var labels = ['物 Object','事 Event','情 Feeling','時間 Time','人物 People','地點 Place','起因 Cause','表情 Mood','心想 Thought','動作 Action','結果 Result','反應 Reaction','後悔 Regret','處理 Ending','道理 Lesson','改法 Future Action'];
  var text = '《一件讓我反省的事》寫作腦圖與範文\n姓名：' + formState.studentName + '｜班別：' + formState.studentClass + '\n\n【寫作腦圖 Mind Map】\n';
  fields.forEach(function(field, i) { text += labels[i] + '：' + formState[field] + (showEnglish ? ' (' + getEn(formState[field]) + ')' : '') + '\n'; });
  text += '\n【五段式範文 Essay】\n';
  paragraphData().forEach(function(p) { text += paragraphText(p) + '\n' + (showEnglish ? p.en + '\n' : '') + '\n'; });
  return text;
}
async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (_) {
    var temp = document.createElement('textarea');
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    var copied = false;
    try { copied = document.execCommand('copy'); } finally { temp.remove(); }
    if (!copied) return false;
  }
  return true;
}
async function copyOutlineText() {
  if (!showValidation()) return;
  var ok = await copyTextToClipboard(outlineText());
  var toast = document.getElementById('copyToast');
  toast.textContent = ok ? '✅ 已複製腦圖與完整五段範文！(Mind map and full essay copied!)' : '複製未成功，請選取文字手動複製。(Please select and copy the text manually.)';
  toast.classList.remove('hidden');
  setTimeout(function() { toast.classList.add('hidden'); }, 3000);
}
window.addEventListener('beforeprint', renderMindMapAndScaffold);
applyStoryAndBranchDefaults(0, 0);
refresh();
