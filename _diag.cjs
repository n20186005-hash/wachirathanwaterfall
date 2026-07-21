const fs = require('fs');
const path = require('path');

const astroDir = 'dist/_astro';
const cssFiles = fs.readdirSync(astroDir).filter(f => f.endsWith('.css'));
console.log('=== CSS FILES IN dist/_astro ===');
cssFiles.forEach(f => {
  const st = fs.statSync(path.join(astroDir, f));
  console.log(f, st.size, 'bytes');
});

console.log('\n=== LINKS in dist/zh/index.html ===');
const h = fs.readFileSync('dist/zh/index.html', 'utf8');
const links = [...h.matchAll(/<link[^>]*>/g)].map(m => m[0]);
links.forEach(l => console.log(l));
console.log('\nstylesheet count:', links.filter(l => l.includes('stylesheet')).length);
console.log('style blocks:', (h.match(/<style/g) || []).length);
console.log('_astro refs in body:', (h.match(/_astro/g) || []).length);

// Check which css contains the header bg-teak class
console.log('\n=== which css has header/nav styles (bg-teak, fixed, top-0) ===');
cssFiles.forEach(f => {
  const c = fs.readFileSync(path.join(astroDir, f), 'utf8');
  const has = c.includes('bg-teak') || c.includes('.fixed') || c.includes('top-0');
  console.log(f, '->', has ? 'HAS layout/nav css' : 'no');
});
