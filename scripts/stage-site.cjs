const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const target = path.join(root, '_site');
// Publish only student assets. Dependencies, tests and tooling stay out of Pages.
fs.mkdirSync(path.join(target, 'assets'), { recursive: true });
for (const file of ['index.html', 'assets/app.js', 'assets/stories.js', 'assets/tailwind.css']) {
  fs.copyFileSync(path.join(root, file), path.join(target, file));
}
fs.writeFileSync(path.join(target, '.nojekyll'), '');
console.log('Student website staged in _site/');
