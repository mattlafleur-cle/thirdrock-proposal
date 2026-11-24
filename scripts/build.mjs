// Builds the client-facing page into dist/. Only dist/ is ever meant to be served.
// Internal files (README.md, REVIEW_CHECKLIST.md, proposal.config.mjs, scripts/) are never copied.
import { mkdir, rm, writeFile, cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cfg from '../proposal.config.mjs';
import { renderPage, openPlaceholders } from '../src/page.mjs';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, 'dist');
const open = openPlaceholders(cfg).filter((s) => !s.startsWith('contact.bookingUrl'));

if (!cfg.draft && open.length) {
  console.error(`Refusing to build a final (draft: false) page with ${open.length} open placeholder(s):\n- ${open.join('\n- ')}`);
  process.exit(1);
}

await rm(dist, { recursive: true, force: true });
await mkdir(path.join(dist, 'assets'), { recursive: true });
await cp(path.join(root, 'src/assets'), path.join(dist, 'assets'), { recursive: true });
await writeFile(path.join(dist, 'index.html'), renderPage(cfg));
await cp(path.join(root, 'CNAME'), path.join(dist, 'CNAME'));
await writeFile(path.join(dist, '.nojekyll'), '');
await writeFile(path.join(dist, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
console.log(`Built dist/index.html (${cfg.draft ? 'DRAFT' : 'final'}). Open placeholders: ${open.length}`);
