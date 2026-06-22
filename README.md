# Skud Labs

Trust-artifact website for **Skud Labs** — Kyle's solo consultancy (AI automation,
custom software, web). The full single-page site is built (hero → services →
pricing → contact). **Live at [skudlabs.com](https://skudlabs.com)** (see
[Deployment](#deployment)). To view locally, open `index.html` in a browser.

## Start here — what each doc is

| File | What it is |
|------|------------|
| `README.md` | This file — the map to everything else. |
| [`docs/prompt.md`](docs/prompt.md) | The **brief**: goals, audience, visual direction, palette, copy guardrails, and the fidelity-layer working method. The spec everything follows. |
| [`docs/content.md`](docs/content.md) | Approved **page structure + hero copy**. Source of truth for the words. |
| [`docs/NOTES.md`](docs/NOTES.md) | Running **build log**: which layer is approved, decisions made, directions rejected. |
| [`docs/PROCESS.md`](docs/PROCESS.md) | The **build method** (generalized) + **exactly how to replay it with Fable 5**. |
| [`docs/skudlabs-STRATEGY.md`](docs/skudlabs-STRATEGY.md) | The **business strategy**: who Kyle is, the offer ladder + pricing, target clients, acquisition channels, revenue projection. **Read first for any strategy/positioning/pricing chat** (not a coding task). |

## Project layout

```
README.md               this file (start here)
index.html              the full single-page site
amplify.yml             build spec — deploys ONLY index.html + assets/ (see Deployment)
docs/                   project docs (prompt, content, NOTES, PROCESS, STRATEGY — see table above)
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
- **Websites-first + contact/polish pass.** Latest: **`hero-cascade-v1`** — hero back to a staggered cascade (big website top-left, smaller assistant beneath-right, document/automation tile bottom-left). Before that: **`todo-batch-v3`** — hero triangled (website + chatbot on top, big document/automation tile bottom), pricing restructured (one $4k lump-sum site + $25/mo hosting, $175/mo most-popular plan, new Custom AI chatbot card, web app $8k+). Earlier: `todo-batch-v2` (triangle hero, emblem favicon), `todo-batch-v1` (contact section, chat launcher, hi-fi portfolio, nav/hero), `websites-led-v1`, `motion-v1`, `layout-v1`, `copy-fullpage`, `hero-v7`.
- **Placeholders to fill** (see `TODO.md`): real contact email/phone, form backend, the real chatbot, real client work.
- **Still to come:** Phase 5 — wire the `#book` contact/booking destination (the real conversion dependency). Recent-work cards use **mock testimonials** — replace with real ones. Optional: hidden comet easter egg (logo click).
- Rollback points: one git tag per approved layer (`layer-1-approved` … `layer-6-approved`), `hero-v1` … `hero-v7`, `copy-fullpage`, `layout-v1`, `motion-v1`. Restore any with `git checkout <tag>`.

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

## Replaying the build (e.g., with Fable 5)

See **[`docs/PROCESS.md`](docs/PROCESS.md) → "Replay"** for the exact prompt to paste and the branch step.
