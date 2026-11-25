// Builds the client-facing page into dist/. Only dist/ is ever meant to be served.
// Internal files (README.md, REVIEW_CHECKLIST.md, proposal.config.mjs, scripts/) are never copied.
import { mkdir, rm, writeFile, cp, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
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
// Cache busting: the stylesheet URL changes whenever its content does, so browsers never pair new HTML with old CSS.
const cssHash = createHash('sha1').update(await readFile(path.join(root, 'src/assets/styles.css'))).digest('hex').slice(0, 10);
await writeFile(path.join(dist, 'index.html'), renderPage(cfg).replace('href="assets/styles.css"', `href="assets/styles.css?v=${cssHash}"`));
await cp(path.join(root, 'CNAME'), path.join(dist, 'CNAME'));
// Collaboration Hub concept: unlinked page for live demos, at /hub-concept/. Fictional data only.
await cp(path.join(root, 'src/concept'), path.join(dist, 'hub-concept'), { recursive: true });
await writeFile(path.join(dist, '.nojekyll'), '');
// Search engines and AI crawlers: off. No sitemap, no llms.txt, no structured data are published.
const aiBots = ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'ClaudeBot', 'Claude-Web', 'anthropic-ai', 'Claude-SearchBot', 'Google-Extended',
  'PerplexityBot', 'Perplexity-User', 'CCBot', 'Bytespider', 'Applebot-Extended', 'Meta-ExternalAgent', 'Amazonbot', 'cohere-ai', 'DuckAssistBot'];
await writeFile(path.join(dist, 'robots.txt'), [
  '# Private client proposal. Not for search engines or AI systems.',
  ...aiBots.flatMap((b) => [`User-agent: ${b}`, 'Disallow: /', '']),
  'User-agent: *', 'Disallow: /', '',
].join('\n'));
console.log(`Built dist/index.html (${cfg.draft ? 'DRAFT' : 'final'}). Open placeholders: ${open.length}`);
