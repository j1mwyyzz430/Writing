const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const sandbox = {};
vm.runInNewContext(fs.readFileSync('assets/stories.js', 'utf8'), sandbox);
const stories = sandbox.STORIES;
const baseFields = ['times','whos','places','causes','reactions','regrets','endings','lessons','futureActions','feelings'];
test('all 10 stories have complete, bilingual selectable paths', () => {
  assert.equal(stories.length, 10);
  for (const story of stories) {
    assert.ok(story.contexts.length);
    for (const context of story.contexts) {
      assert.ok(context.branches.length);
      for (const branch of context.branches) {
        for (const field of [...baseFields,'faces','thoughts','results']) {
          const options = branch[field] || context[field];
          assert.ok(options?.length, `${story.id}/${context.id}/${branch.id}/${field}`);
          for (const item of options) {
            assert.ok(item.zh && item.en, `Missing translation: ${JSON.stringify(item)}`);
            for (const forbidden of context.forbidden) {
              assert.ok(!item.zh.includes(forbidden), `${story.id}/${context.id}/${branch.id}/${field}: ${item.zh} contradicts ${forbidden}`);
            }
          }
        }
        for (const result of branch.results) {
          for (const key of ['introObj','introObjEn','introEvent','introEventEn']) assert.ok(result[key]);
          for (const word of context.forbidden) {
            assert.ok(!result.introObj.includes(word) && !result.introEvent.includes(word));
          }
        }
        for (const word of context.forbidden) assert.ok(!branch.action.includes(word));
      }
    }
  }
});
test('painting and report paths cannot offer a different person or work', () => {
  const work = stories.find(s => s.id === 'S5');
  assert.equal(work.contexts.length, 4);
  for (const context of work.contexts) {
    const report = context.id.endsWith('report');
    const sister = context.id.startsWith('sister');
    for (const branch of context.branches) {
      const text = JSON.stringify(branch);
      assert.ok(!text.includes(sister ? '哥哥' : '姐姐'));
      if (!sister) assert.ok(!/\b(she|her|hers)\b/i.test(text), `Female English pronoun in ${context.id}`);
      if (sister) assert.ok(!/\b(he|him|his)\b/i.test(text), `Male English pronoun in ${context.id}`);
      if (report) assert.ok(!/水彩畫|畫紙|參賽作品/.test(text));
      else assert.ok(!text.includes('報告'));
    }
  }
});
test('a broken toy does not offer an injury remedy', () => {
  for (const context of stories[1].contexts) {
    const branch = context.branches.find(b => b.id === 'B');
    assert.ok(!/藥膏|塗|扶起|弄傷/.test(JSON.stringify([branch.endings,branch.regrets])));
  }
});
test('a hamster never has puppy action choices', () => {
  const hamster = stories[8].contexts.find(c => c.id === 'hamster');
  assert.equal(hamster.branches.length, 1);
  const {forbidden, ...visibleChoices} = hamster;
  assert.ok(!/小狗|狗糧/.test(JSON.stringify(visibleChoices)));
});
test('student page has no teacher tools, remote scripts or font requests', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  const app = fs.readFileSync('assets/app.js', 'utf8');
  assert.ok(!/viewTeacher|tabBtnTeacher|AppsScript|FormApp/.test(html + app));
  assert.ok(!/<script[^>]+src="https?:|@import/.test(html));
  assert.ok(!/fetch\(|XMLHttpRequest|sendBeacon|localStorage/.test(app));
});
