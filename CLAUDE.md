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
## Deploy (the project specifics for the global auto-commit rule)
- **Target branch = `main`** — the convention here *and* the Amplify deploy branch.
  No separate branches/PRs unless Kyle asks; this is a solo repo.
- **`main` auto-deploys to production.** A push triggers an Amplify build and
  publishes to skudlabs.com. Changes to `index.html`/`assets/` go **live
  immediately**; docs/README/strategy aren't deployed and don't affect the site.
  If a site change isn't ready to be public, **hold the commit** (or note it).
- Never commit secrets or anything private under the "NOT deployed" dirs.

## Site safety invariant
Only `index.html` + `assets/` (minus `assets/inspiration/`) are ever deployed (see
`amplify.yml` `artifacts`). When adding files that should be **public**, add an explicit
`cp` line in `amplify.yml`. Default is private — don't change `baseDirectory` to the repo
root, which would publish `docs/`, `reference/`, etc.

## Doc routing (project-specific homes for the global keep-current rule)
Short operational facts → this file. Design rationale and rejected directions →
`docs/DESIGN.md`. Open tasks → README → Status (never a separate TODO file).
