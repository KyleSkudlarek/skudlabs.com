# CLAUDE.md — working agreement for this repo

## Orientation (read before starting work)
- **[README.md](README.md)** is the map. Read it first. It links every doc and
  documents [Deployment](README.md#deployment).
- For any **strategy / positioning / pricing / business** discussion (not a coding
  task), read **[docs/skudlabs-STRATEGY.md](docs/skudlabs-STRATEGY.md)** first — it's
  the source of truth for who Kyle is, the offer ladder, target clients, and goals.
  Be a direct strategist: push back, prevent over-engineering/under-pricing, no
  cheerleading.
- For **build/design** work: read **[docs/DESIGN.md](docs/DESIGN.md)** (palette,
  type, frozen assets, motion/copy rules, rejected directions). The copy source
  of truth is `index.html` itself.

## Site conventions (the load-bearing ones — details in docs/DESIGN.md)
- **Frozen art:** the SVGs in `assets/img/` (logo, desert ridge, automation
  flow, satellite, favicon) are approved — never regenerate or edit without asking.
- **Fonts are offline** woff2 in `assets/fonts/` — no CDN loads anywhere.
- **Motion:** transform/opacity only; honor `prefers-reduced-motion`; degrade
  without JS.
- **Copy voice:** plain, first person, no em-dashes, no upsell framing;
  employers anonymized; "hand-coded" is the positioning word.
- **Testing:** headless Chrome clamps window width to ~500px — verify real
  mobile via an iframe wrapper; check fold-sensitive changes at several
  viewport heights.

## Auto-commit at the end of each work tranche (durable authorization)
At the **end of a tranche of work** (a prompt → response cycle that produced file
changes forming a coherent unit), **proactively commit and push without waiting to be
asked.** Specifically:
1. Briefly summarize what changed in the chat.
2. Stage the related files, write a clear conventional-commit message (end with the
   `Co-Authored-By` trailer), and **commit + `git push origin main`.**
3. Confirm the push in the response.

Rules:
- **Target branch = `main`.** It's the established convention here *and* the Amplify
  deploy branch — see the deploy implication below. (Don't open a separate branch/PR
  unless Kyle asks; this is a solo repo.)
- **`main` auto-deploys to production.** A push to `main` triggers an Amplify build and
  publishes to skudlabs.com. Changes to `index.html`/`assets/` go **live immediately**;
  changes to docs/README/TODO/strategy do not affect the site (they aren't deployed).
  If a site change isn't ready to be public, say so and **hold the commit** (or note it)
  rather than auto-pushing.
- **Skip** trivial/no-op turns, pure Q&A/strategy chats with no file changes, and
  anything Kyle says to keep local. Never commit secrets or anything under "NOT
  deployed" that contains private info you shouldn't push.
- Kyle can always override per-change: "don't commit this" / "keep it local."

## Site safety invariant
Only `index.html` + `assets/` (minus `assets/inspiration/`) are ever deployed (see
`amplify.yml` `artifacts`). When adding files that should be **public**, add an explicit
`cp` line in `amplify.yml`. Default is private — don't change `baseDirectory` to the repo
root, which would publish `docs/`, `resume/`, etc.
