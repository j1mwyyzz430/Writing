# 六年級《一件讓我反省的事》學生寫作網頁

保留原有配色、卡片、寫作腦圖、中英對譯及五段句架，移除教師流程和 Google Forms 腳本。

流程：選故事 → 人物／情境 → 犯錯方式 → 背景 → 後果 → 認錯／反省 → 倒敍引子。

- 10 個故事、19 個人物／物件情境、54 條動作路徑、108 個結果。
- 人物、他／她、作品種類、寵物、默書／測驗、補救和引子按選擇配對。
- 改選人物或動作時，重設其後相關答案；按同一選項不會清掉已填內容。
- 自訂字詞按純文字顯示；與所選人物／物件明顯衝突時提示修正。
- 自訂文字不會自動翻譯；學生仍需自行核對其自由寫作內容。
- 複製包括腦圖及完整五段範文；支援列印／存為 PDF。
- 沒有帳戶、分析追蹤或資料提交。姓名及寫作內容只在當前頁面記憶體中，重新載入會清除，請先複製或列印保存。
- 所有樣式、程式和故事均由本站提供，不依賴外部 CDN。

## 本機開發

使用現有 `/workspace/Writing` checkout；雲端工作已隔離，毋須另建 Git worktree。
Node.js 24，Python 3。初次或鎖檔更新後：

```sh
cd /workspace/Writing
npm ci --ignore-scripts --no-audit --no-fund
npm test
npm run build
python3 -m http.server 8000 --bind 127.0.0.1
```

`npm run build` 產生本機 Tailwind 樣式，並把學生網站所需檔案放入 `_site/`。
`assets/stories.js` 是審核後的故事資料，`assets/app.js` 處理選項連動及安全顯示。

## 驗證

`npm test` 檢查所有故事選項、人物／作品一致性、玩具補救、寵物分支及教師功能移除。
已安裝 Python Playwright 和 `/usr/bin/chromium` 的環境，可在上述本機伺服器啟動後執行：

```sh
python3 tests/browser_smoke.py
```

瀏覽器測試涵蓋所有故事情境、結果、選項切換、哥哥／姐姐／中英代詞、自訂文字注入、剪貼簿、列印及手機寬度。
截圖和結果放在忽略的 `test-results/`。

## GitHub Pages

`.github/workflows/pages.yml` 在推送 `main` 或手動執行時先測試及建置，然後部署 `_site/`。
第一次需在儲存庫 Settings → Pages 把 Source 設為 **GitHub Actions**，或以有管理權限的既有 GitHub 連線呼叫 Pages API 設定 `build_type: workflow`。
GitHub 官方 `configure-pages` 動作不能用預設 `GITHUB_TOKEN` 自行首次開通 Pages，因此工作流程沒有假設它可以開通網站。
本工作流程只發佈網站資產，不包含學生資料、依賴目錄或測試輸出。
