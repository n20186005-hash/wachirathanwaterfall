const fs = require('fs');
const css = fs.readFileSync('dist/_astro/cookie-settings.CWUMdohu.css', 'utf8');
const checks = ['bg-teak', 'text-ivory', 'fixed', 'top-0', 'hero-glow', 'z-50', 'backdrop-blur', 'grid-cols', 'bg-teakDeep', 'rounded-3xl', 'shadow'];
console.log('CSS total length:', css.length);
checks.forEach(k => console.log((css.includes(k) ? 'YES ' : 'NO  ') + k));
// count rules
const rules = (css.match(/\{/g) || []).length;
console.log('approx rule count (braces):', rules);
// look for any obvious truncation
console.log('ends with:', JSON.stringify(css.slice(-80)));
