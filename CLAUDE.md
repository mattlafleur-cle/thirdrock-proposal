# CLAUDE.md

This repository is public. Keep this file and every committed file free of confidential client information.

## Rules
- Client-confidential notes, the review checklist, and the confidential-terms list live only in `internal/` (git-ignored). Never commit them.
- No em dashes or en dashes in any page or file.
- Do not invent facts, prices, credentials, or testimonials. Commercial terms come only from `proposal.config.mjs`, as approved by the owner.
- Pages stay out of search engines and AI crawlers (robots meta tags and robots.txt). Do not add sitemaps, structured data, or Open Graph tags.
- Do not send, post, or share anything outside the repository without the owner's approval.

## How it works
- `proposal.config.mjs`: all terms, dates, prices, and contact links.
- `src/page.mjs`: page copy and structure. `src/assets/styles.css`: design.
- `src/concept/`: an illustrative concept page published at `/hub-concept/` (fictional data only).
- `npm run check` builds `dist/` and runs content checks. `npm run serve` previews at http://localhost:4400.
- Pushing to `main` deploys `dist/` to GitHub Pages via `.github/workflows/deploy.yml` (custom domain in `CNAME`).
- The stylesheet URL is content-hashed at build time; give replaced images new filenames.

## Style
Plain, warm, direct English. Lead with the point. When reporting back, end with "Confidence: X%."
