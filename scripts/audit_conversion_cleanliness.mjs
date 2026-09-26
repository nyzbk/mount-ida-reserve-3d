import fs from 'fs';
import path from 'path';

const FORBIDDEN_WORDS = [
  'webgl',
  'three.js',
  'threejs',
  'three js',
  'pbr',
  '60 fps',
  '60fps',
  'scrubber',
  '180 кадров',
  '180 кадр',
  '180 frames',
  'polygon',
  'polygons',
  'mesh',
  'vertex',
  'shader',
  '3d model',
  'blender'
];

const SCAN_DIRS = ['src', 'index.html'];

let violations = [];

function checkText(text, filePath) {
  const lower = text.toLowerCase();
  for (const word of FORBIDDEN_WORDS) {
    if (lower.includes(word)) {
      // Find line number
      const lines = text.split('\n');
      lines.forEach((line, index) => {
        if (line.toLowerCase().includes(word)) {
          violations.push({
            file: filePath,
            line: index + 1,
            word,
            snippet: line.trim()
          });
        }
      });
    }
  }
}

function scanDir(currentPath) {
  const stat = fs.statSync(currentPath);
  if (stat.isDirectory()) {
    const files = fs.readdirSync(currentPath);
    for (const file of files) {
      if (file === 'node_modules' || file === 'dist' || file === '.git') continue;
      scanDir(path.join(currentPath, file));
    }
  } else if (stat.isFile()) {
    const ext = path.extname(currentPath);
    if (['.ts', '.tsx', '.js', '.jsx', '.html', '.md'].includes(ext)) {
      const content = fs.readFileSync(currentPath, 'utf8');
      checkText(content, currentPath);
    }
  }
}

for (const target of SCAN_DIRS) {
  const p = path.resolve(process.cwd(), target);
  if (fs.existsSync(p)) {
    scanDir(p);
  }
}

console.log('--- 0% Technical Jargon Audit (Z.A.E.B.A.L. Standard) ---');
if (violations.length > 0) {
  console.error(`❌ FOUND ${violations.length} VIOLATIONS OF ZERO-JARGON POLICY:`);
  violations.forEach(v => {
    console.error(`  - ${v.file}:${v.line} -> forbidden term "${v.word}": "${v.snippet}"`);
  });
  process.exit(1);
} else {
  console.log('✅ PERFECT: 0% developer jargon found across public client codebase.');
}
