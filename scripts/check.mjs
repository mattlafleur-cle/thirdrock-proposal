// Content and safety checks for the built page. Run after build: `npm run check`.
import { readFile } from 'node:fs/promises';
import cfg from '../proposal.config.mjs';
import { openPlaceholders } from '../src/page.mjs';

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');
const errors = [];

const banned = [
  [/—/, 'an em dash'],
  [/–/, 'an en dash'],
  [/\b(guarantee|guaranteed)\b/i, 'a guarantee'],
  [/HIPAA/i, 'a HIPAA claim'],
  [/password/i, 'a password gate'],
];
// Client-specific confidential terms live in internal/banned-terms.txt (git-ignored, never published).
// One case-insensitive regular expression per line; lines starting with # are comments.
try {
  const extra = (await readFile(new URL('../internal/banned-terms.txt', import.meta.url), 'utf8')).split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
  for (const pat of extra) banned.push([new RegExp(pat, 'i'), `a confidential term (${pat})`]);
} catch { console.warn('Note: internal/banned-terms.txt not found; confidential-term check skipped.'); }
for (const [re, what] of banned) if (re.test(text)) errors.push(`Page contains ${what}.`);

if (!/name="robots" content="noindex/.test(html)) errors.push('Page is missing the noindex meta tag.');
if ((html.match(/<h1[\s>]/g) || []).length !== 1) errors.push('Page must have exactly one h1.');
for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\balt=/.test(m[0])) errors.push(`Image without alt: ${m[0].slice(0, 80)}`);
for (const m of html.matchAll(/href="#([^"]+)"/g)) if (!html.includes(`id="${m[1]}"`)) errors.push(`Broken in-page link: #${m[1]}`);

const open = openPlaceholders(cfg).filter((s) => !s.startsWith('contact.bookingUrl'));
if (errors.length) {
  console.error(`${errors.length} problem(s):\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log(`Checks passed. ${cfg.draft ? 'DRAFT mode.' : 'Final mode.'} Open placeholders (${open.length}):`);
for (const s of open) console.log(`  - ${s}`);
