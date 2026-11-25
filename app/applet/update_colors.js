const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /#0B0C10/g, to: '#10131B' },
  { from: /#111318/g, to: '#151925' },
  { from: /#15171D/g, to: '#1D222E' },
  { from: /#292B33/g, to: '#343946' },
  { from: /#F5BD21/g, to: '#B9F36B' },
  { from: /#E4AE1B/g, to: '#CAFF8B' },
  { from: /#F7F7F8/g, to: '#F8FAFC' },
  { from: /#A5A7B0/g, to: '#929AAB' },
];

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.isFile() && (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let updated = content;
      for (const r of replacements) {
        updated = updated.replace(r.from, r.to);
      }
      if (updated !== content) {
        fs.writeFileSync(fullPath, updated, 'utf8');
        console.log(`Updated colors in: ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Color theme migration completed successfully.');
