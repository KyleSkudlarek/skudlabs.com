# Skud Labs

Trust-artifact website for **Skud Labs** — Kyle's solo consultancy (AI automation,
custom software, web). The full single-page site is built (hero → services →
pricing → contact). **Live at [skudlabs.com](https://skudlabs.com)** (see
[Deployment](#deployment)). To view locally, open `index.html` in a browser.

## Start here — what each doc is

| File | What it is |
|------|------------|
| `README.md` | This file — the map to everything else. |
| `CLAUDE.md` | Working agreement + the load-bearing site conventions. |
| [`docs/DESIGN.md`](docs/DESIGN.md) | The **design reference**: palette, type, frozen assets, motion/copy rules, rejected directions. Read before design work. Copy source of truth is `index.html`. |
| [`docs/skudlabs-STRATEGY.md`](docs/skudlabs-STRATEGY.md) | The **business strategy**: who Kyle is, the offer ladder + pricing, target clients, acquisition channels, revenue projection. **Read first for any strategy/positioning/pricing chat** (not a coding task). |
| `docs/skudworks_docs/` | Kyle's business-formation study space (LLC, taxes, timeline). Not build docs — leave alone. |
| `docs/How to Design a Website for Beginners.md` | Kyle's personal design-learning notes. |

## Project layout

```
README.md               this file (start here)
index.html              the full single-page site (also the copy source of truth)
amplify.yml             build spec — deploys ONLY index.html + assets/ (see Deployment)
docs/                   project docs (DESIGN, STRATEGY, Kyle's business/study notes — see table above)
assets/
  css/                  styles.css
  fonts/                offline woff2 (Oswald, Space Grotesk, Caveat)
  img/                  production SVGs (logo, desert ridge, illustration, satellite)
  inspiration/          source/mood references (logo/, hero/) — NOT deployed
reference/  resume/      research material (Oak Harbor scrape, résumé) — NOT deployed
```

**What ships publicly:** only `index.html` + `assets/` (minus `assets/inspiration/`).
Everything else here (`docs/`, `reference/`, `resume/`, `TODO.md`, this README) lives
in the **private** GitHub repo but is never uploaded to the web server — see the
`artifacts` block in `amplify.yml`.

## Status

- **🚀 LIVE on [skudlabs.com](https://skudlabs.com) (2026-06-22)** — deployed via AWS
  Amplify with auto-deploy on every push to `main`. See [Deployment](#deployment).
- **Open items** (rough priority — the conversion path first):
  1. **Contact-form backend** — front-end is wired and gracefully inert; deploy the
     Lambda + SES per `aws/contact-lambda/README.md`, then paste the Function URL
     into `CONTACT_ENDPOINT` in `assets/js/main.js`. (Calendly booking already works.)
  2. **Real contact details** — placeholders live on the site: `hello@skudlabs.com`
     and `(512) 555-1234`.
  3. **Mock testimonials are public** — replace with real ones, soften to "sample
     work," or remove. Credibility risk on a trust-artifact site.
  4. Later: live chatbot (styled "coming soon" placeholder), real client work,
     confirm final prices ($4k site / $8k+ app / $3.5k chatbot, $175/mo, $100/mo care).
- Build history lives in git (commit log + one tag per approved state — see
  [docs/DESIGN.md](docs/DESIGN.md) → "Rollback points").

## Deployment

Hosted on **AWS Amplify** (account `641383114949`, region `us-east-1`), git-connected
to this repo for CI/CD.

- **App:** `skudlabs` (appId `d27g8egu7vpoet`), default URL `main.d27g8egu7vpoet.amplifyapp.com`.
- **Custom domain:** `skudlabs.com` + `www` — ACM cert + Route53 records auto-managed
  by Amplify (hosted zone `Z01588562H3SCOF490TC4`). HTTPS auto-renews.
- **CI/CD:** Amplify installed a **push webhook on the GitHub repo** (not a GitHub
  Action). Every push to `main` → Amplify clones the repo, runs `amplify.yml`, and
  deploys to its CDN. **`git push origin main` is the deploy.** Build logs live in the
  Amplify console (App → `main` → the build), not GitHub Actions.
- **Build spec:** `amplify.yml` assembles a `dist/` of only `index.html` + `assets/`
  (minus `inspiration/`) and deploys that. To publish a new top-level file/folder, add
  a `cp` line there — publishing is opt-in, so dev/strategy files stay private by default.
- **Cost:** ~pennies/month at this traffic (Amplify free tier).
