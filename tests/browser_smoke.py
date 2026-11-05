"""Run against the local site with: python3 tests/browser_smoke.py"""
import json
import pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]
OUT = ROOT / 'test-results'
OUT.mkdir(exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path='/usr/bin/chromium', headless=True, args=['--no-sandbox'])
    context = browser.new_context(viewport={'width': 1280, 'height': 900}, permissions=['clipboard-read', 'clipboard-write'])
    page = context.new_page()
    errors, remote_requests = [], []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('request', lambda r: remote_requests.append(r.url) if not r.url.startswith('http://127.0.0.1:8000/') else None)
    page.goto('http://127.0.0.1:8000/', wait_until='networkidle')
    assert page.locator('#tabBtnTeacher, #viewTeacher').count() == 0
    assert page.locator('[data-story]').count() == 10
    # Actual clicks through the reported brother/sister + painting/report bug.
    page.locator('[data-story="4"]').click()
    page.locator('#nextStepBtn').click()
    assert page.locator('[data-context]').count() == 4
    page.locator('[data-context="3"]').click()  # brother's report
    page.locator('#nextStepBtn').click()
    page.locator('[data-branch="1"]').click()
    page.locator('#nextStepBtn').click()
    assert '哥哥' in page.locator('[data-question="bgWho"]').inner_text()
    assert '姐姐' not in page.locator('#stepContentContainer').inner_text()
    page.locator('#nextStepBtn').click()
    assert '報告' in page.locator('[data-question="p2Result"]').inner_text()
    page.locator('#tabBtnMap').click()
    essay = page.locator('#scaffoldParagraphsList').inner_text()
    assert '哥哥' in essay and '報告' in essay and '姐姐' not in essay and '她' not in essay
    assert not any(word in essay.lower().split() for word in ['she', 'her', 'hers'])
    page.evaluate("window.scrollTo({top: 0, behavior: 'instant'})")
    assert page.locator('#viewMap .gf-card').first.evaluate("e => getComputedStyle(e).backgroundColor") != 'rgb(255, 255, 255)'
    page.screenshot(path=str(OUT / 'desktop-map.png'), full_page=True)
    # Every selectable combination of story/context/action/result, including all
    # alternative moods, thoughts, endings, causes, times and lessons.
    summary = page.evaluate('''() => {
      let paths = 0, results = 0, alternatives = 0;
      STORIES.forEach((story, s) => {
        applyStoryAndBranchDefaults(s, 0);
        story.contexts.forEach((context, c) => {
          applyContext(c);
          context.branches.forEach((branch, b) => {
            applyBranch(b); paths++;
            branch.results.forEach((result, r) => {
              applyResult(r); results++;
              if (formState.introEvent !== result.introEvent || formState.introObj !== result.introObj) throw Error('Stale intro');
              Object.keys(FIELD_LISTS).forEach(field => {
                optionsFor(field).forEach((option, i) => {
                  chooseFieldOption(field, i); alternatives++;
                  if (coherenceErrors().length) throw Error(JSON.stringify(coherenceErrors()));
                  if (getEn(formState[field]).includes('not automatically translated')) throw Error('Missing translation ' + field);
                });
              });
              // Return to THIS result after testing other results.
              applyResult(r);
              for (let step = 1; step <= STEPS.length; step++) goToStep(step);
              switchTab('map');
              const text = document.querySelector('#scaffoldParagraphsList').innerText;
              for (const token of context.forbidden) if (text.includes(token)) throw Error(story.id + '/' + context.id + ': ' + token);
              if (document.querySelectorAll('#scaffoldParagraphsList > div').length !== 5) throw Error('Missing paragraphs');
              const copy = outlineText();
              if (!copy.includes(paragraphText(paragraphData()[4]))) throw Error('Missing essay in copy');
            });
          });
        });
      });
      return {paths, results, alternatives};
    }''')
    # Change parents AFTER typing custom text: all dependent data must reset.
    page.evaluate("applyStoryAndBranchDefaults(4, 0); applyContext(3); editCustomField('p2Ending', '哥哥，我會負責。'); applyContext(0); refresh();")
    assert '哥哥' not in page.locator('#scaffoldParagraphsList').inner_text()
    # Custom sibling mismatches receive feedback and cannot be presented as a valid essay.
    page.evaluate("switchTab('form'); goToStep(6)")
    page.locator('#custom-p2Ending').fill('我向哥哥和他道歉')
    assert page.locator('#custom-p2Ending').get_attribute('aria-invalid') == 'true'
    page.locator('#tabBtnMap').click()
    assert page.locator('#viewMap').is_hidden()
    page.locator('#custom-p2Ending').fill('我誠懇地向姐姐和她道歉')
    assert page.locator('#custom-p2Ending').get_attribute('aria-invalid') == 'false'
    # Editable text is displayed as text throughout map/scaffold/copy; it must
    # never become HTML, including after navigation rerenders the input value.
    attack = '<img src=x onerror="window.__xss=1"> & "test"'
    page.evaluate("applyStoryAndBranchDefaults(0,0); refresh(); switchTab('form'); goToStep(3)")
    page.locator('#custom-p1Thought').fill(attack)
    page.evaluate('goToStep(4); goToStep(3)')
    assert page.locator('#custom-p1Thought').input_value() == attack
    page.locator('#tabBtnMap').click()
    assert page.locator('#scaffoldParagraphsList img').count() == 0
    assert page.evaluate('window.__xss') is None
    assert attack in page.locator('#scaffoldParagraphsList').inner_text()
    page.locator('button[onclick="copyOutlineText()"]').click()
    clipboard = page.evaluate('navigator.clipboard.readText()')
    assert '【五段式範文 Essay】' in clipboard and attack in clipboard
    # A false clipboard success must not be shown when permission/fallback fails.
    page.evaluate("navigator.clipboard.writeText = async () => { throw Error('denied'); }; document.execCommand = () => false;")
    page.locator('button[onclick="copyOutlineText()"]').click()
    assert '未成功' in page.locator('#copyToast').inner_text()
    page.evaluate("switchTab('form'); toggleEnglishHints(); switchTab('map')")
    assert page.locator('#scaffoldParagraphsList .italic').count() == 0
    # Print from the form shows the map, not a blank sheet.
    page.evaluate("switchTab('form')")
    page.emulate_media(media='print')
    assert page.locator('#viewForm').is_hidden() and page.locator('#viewMap').is_visible()
    page.emulate_media(media='screen')
    # Phone width, all seven sections and map: no horizontal scrolling.
    page.set_viewport_size({'width': 390, 'height': 844})
    page.evaluate("applyStoryAndBranchDefaults(4,0); refresh();")
    for step in range(1, 8):
        page.evaluate('(step) => goToStep(step)', step)
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), f'mobile step {step} overflows'
    page.evaluate("switchTab('map')")
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), 'mobile map overflows'
    page.evaluate("window.scrollTo({top: 0, behavior: 'instant'})")
    page.screenshot(path=str(OUT / 'mobile-map.png'), full_page=True)
    assert not errors, errors
    assert not remote_requests, remote_requests
    (OUT / 'browser-summary.json').write_text(json.dumps(summary, indent=2))
    print('Browser smoke tests passed:', json.dumps(summary))
    print('No JavaScript errors, external network requests or student-data submissions.')
    browser.close()
