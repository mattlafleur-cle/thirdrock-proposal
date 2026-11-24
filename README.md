# ThirdRockMD proposal (No Alumni)

A single, client-specific proposal page for ThirdRockMD. Static HTML and CSS, no dependencies.

## Run and preview locally

Requires Node 18 or newer.

```bash
npm run serve     # builds dist/ and serves it at http://localhost:4400
npm run check     # builds, runs content and safety checks, lists every open placeholder
npm run build     # builds dist/ only
```

## Where to edit

| What | File |
| --- | --- |
| Prices, dates, participant counts, terms, contact links, draft banner | `proposal.config.mjs` |
| Page copy and structure | `src/page.mjs` |
| Design | `src/assets/styles.css` |
| What must be approved before sharing | `internal/REVIEW_CHECKLIST.md` (git-ignored) |

Placeholders are written as `tbd('...')` in the config. They render as highlighted "To be confirmed" markers and
cannot be mistaken for final terms. Replace each with a plain string. Set `draft: false` to remove the draft banner;
the build then refuses to finish while any placeholder remains.

Only `dist/` is client facing. This README, `internal/REVIEW_CHECKLIST.md` (git-ignored), the config, and `scripts/` are never copied into it.

## Search engines and AI: turned off

- Every page carries `noindex, nofollow, noarchive, nosnippet, noimageindex` (plus Google- and Bing-specific tags) and
  `noai, noimageai`, and sends no referrer.
- `robots.txt` disallows all crawlers, with named rules for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, CCBot,
  Google-Extended, and others).
- No sitemap, `llms.txt`, structured data, Open Graph tags, or canonical tags are published. `npm run check` enforces this.
- Limits: these are instructions that reputable crawlers honor, not access control. They do not stop a person with the
  link, and this public GitHub repository itself can still appear in search results.

## Confidentiality and access control (read before publishing)

- **The GitHub repository `mattlafleur-cle/thirdrock-proposal` is public.** Anything committed and pushed, including
  this README and the draft config, is visible to anyone who finds the repository. Keep internal notes
  and sensitive background out of the repository, or make the repository private before pushing.
- **An unlisted URL is not access control.** The page carries `noindex`, but anyone with the link can open it, and links
  get forwarded. Do not put sensitive client information on the page unless real access control is configured at the
  hosting layer, for example Cloudflare Access in front of the domain, or a host that supports authentication.
  GitHub Pages itself offers no password protection on this plan.
- Client-specific confidential terms are kept in `internal/banned-terms.txt` (git-ignored). `npm run check` blocks
  them from reaching the page. The `internal/` folder also holds the review checklist and is never committed.

## Publishing (not done yet)

Nothing has been pushed or published. When approved:

1. Repository Settings, Pages: change the source to **GitHub Actions** (or keep "Deploy from a branch" and publish
   the contents of `dist/`). A small workflow can be added to build and deploy `dist/` on each push.
2. The custom domain `www.thirdrockcollaborative.com` is already set in `CNAME`; DNS is configured at Hostinger.
3. Tick **Enforce HTTPS** once GitHub issues the certificate.
