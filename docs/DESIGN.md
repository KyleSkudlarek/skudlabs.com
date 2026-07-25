# Skud Labs — Design Reference

Read this before design/visual work on the site. The **copy source of truth is
`index.html`** (the live site) — there is no separate copy doc. For business/
pricing/positioning, read `skudlabs-STRATEGY.md` instead.

## What the site is

A trust artifact for referred small-business leads: a visitor should think
"credible, I get what he does, booking a call feels safe." Success = they book
the call.

## North star

Oak Harbor Web Designs (full scrape in `reference/`) — match its **caliber and
lightweight techniques**, never its art. Our theme: **Austin desert at night** —
low-poly mesas + saguaro silhouettes, starry sky, comets, one drifting
satellite, warm dawn glow on the horizon. Mood: observatory in the high desert,
Zen restraint, generous negative space; sparing Tron-ish glow only as a
secondary note. Page background descends from hero sky to "black sand" footer.

## Palette (semantic tokens in `styles.css`)

| Token | Hex | Role |
|---|---|---|
| `--eerie-black` | `#1B1B1B` | darkest ground |
| `--gunmetal` | `#112431` | sky base |
| `--seasalt` | `#FAFBFC` | headings |
| `--olivine` | `#A0B389` | primary accent, CTAs |
| `--navajo-white` | `#FEDDAA` | starlight / warm sand |
| `--jet` | `#353535` | neutral dark |
| body text | `#aeb4b8` | lifted from `#8B8B8C` for WCAG-AA on the dark sky |

## Type

- **Oswald** 400/600 — display only: wordmark contexts, eyebrows, headlines,
  statements (uppercase, condensed). Body/subheads stay system sans.
- Logo wordmark: **Space Grotesk 600**; "Est. Austin" neon script: **Caveat 700**.
- All fonts are offline woff2 in `assets/fonts/` — **never load from a CDN**.

## Frozen assets — never regenerate or edit without asking

`assets/img/`: `skud-labs-logo.svg` (fonts embedded as base64 — a referenced
SVG can't use page fonts), `desert-ridge.svg`, `automation-flow.svg`,
`satellite.svg`, `favicon.svg` (emblem crop of the logo).

## Motion rules

Transform/opacity only. Everything honors `prefers-reduced-motion` (falls back
to a calm static starfield) and degrades without JS (reveal targets only hide
once `.js` is set on the root). Ambient orbs drop at ≤620px.

## Copy voice

Plain, first person, confident. **No em-dashes, no upsell framing.**
"Hand-coded" is the positioning word. Employer names anonymized ("a Fortune 15
healthcare company"). Credentials spelled out ("B.S. in Computer Science from
the University of Virginia").

## Testing gotchas

- Headless Chrome clamps window width to ~500px — a "390px" screenshot is a
  cropped desktop render. Verify true phone widths via an iframe wrapper.
- Check hero/fold changes at multiple viewport heights (~800 / 900 / 1600):
  what peeks above the fold varies a lot, and scroll-reveal + count-up
  observers interact with the fold line.

## Rejected directions (don't relitigate)

- Desert ridge with a deep central dip → read as a "V" valley; cacti vanished
  against the dark foreground. Now: flat-topped mesas, cacti in the gaps.
- Hero tile layouts tried and dropped: 3-tall vertical cascade (loomed over the
  copy), vertical zig-zag, 2-up triangle (squished the laptop). Current: laptop
  + assistant side by side, automation tile centered beneath.
- Inline Calendly embed → panel-in-a-panel looked off; clean link-out instead.
- "Cancel anytime" on the $175/mo plan → replaced with 12-month minimum.

## Rollback points

One git tag per approved state: `layer-1-approved`…`layer-6-approved`,
`hero-v1`…`hero-v7`, `copy-fullpage`, `layout-v1`, `motion-v1`,
`websites-led-v1`, `todo-batch-v1`…`v3`, `hero-cascade-v1`.
`git checkout <tag>` to inspect any of them.
