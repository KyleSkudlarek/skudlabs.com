# Skud Labs — Build Notes

Running log of the fidelity-layer build. Tracks what's approved, decisions made,
and directions tried/rejected so we never relitigate dead ends.

## Process / state convention

We build in fidelity layers (words → structure → look → art → motion → logo),
stopping for approval between each (see `prompt.md`).

- **Lock-in = one commit + one git tag per approved layer:** `layer-1-approved`,
  `layer-2-approved`, …
- **Roll back** to any locked state: `git checkout layer-N-approved`
  (or branch from it: `git checkout -b redo-layer-N layer-N-approved`).
- Approved copy/structure lives in `content.md`. Rejected directions live below
  so we don't repeat them.

## Layer status

- [x] **Layer 1 — Structure & copy** — APPROVED. See `content.md`.
- [x] **Layer 2 — Grayscale wireframe** — APPROVED. `index.html` + `styles.css`.
- [x] **Layer 3 — Aesthetic & background theme** — APPROVED.
- [x] **Layer 4 — Scene art (frozen SVGs)** — APPROVED & FROZEN.
      `assets/desert-ridge.svg`, `assets/automation-flow.svg`.
- [ ] Layer 5 — Motion (star twinkle, comet(s), gentle float; respect prefers-reduced-motion).
- [ ] Layer 6 — Logo (swap text wordmark for hand-authored SVG emblem).

## Decisions (Layer 1)

- Hero headline: **"Stop paying people to do work a computer can do."**
  (chosen over "Get back the hours…" and "Put the repetitive work on autopilot.")
- "What I do" headline: **"Put the busywork on autopilot."**
  (chosen over "Never do that by hand again.")
- Nav: **Home · Services · Work · About** (kept Home).
- Employer names anonymized by design.

## Decisions (Layer 2)

- Grayscale only; flat `#1c1c1c` background stands in for the sky.
- Neutral system font for now — Oswald + real palette deferred to Layer 3
  (typography personality is a Layer 3 concern per the brief).
- CSS tokens (`--bg`, `--fg`, `--accent`, …) are generic so Layer 3 remaps them
  without touching markup.
- Two-column hero collapses to single column (text → illustration) at ≤860px;
  nav wraps at ≤620px.
- Placeholder boxes: right-side illustration (Layer 4) sits in the grid; the
  sky/desert scene is a **full-bleed background layer behind the hero content**
  (matches Oak Harbor), with a horizon band near the bottom — not a block below
  the hero. (Revised per feedback.)

## Decisions (Layer 3)

- Real palette wired via semantic tokens (`--bg`, `--accent`, …) → brief colors.
  Body copy lifted to `#aeb4b8` (from `#8B8B8C`) to clear WCAG-AA on the dark sky.
- **Oswald** loaded offline (400/600), used for display only — wordmark, eyebrows,
  headline, statement (uppercase, condensed). Body/subhead stay system sans.
- Sky = layered CSS gradient (deep eerie/gunmetal top → warmer toward horizon)
  + **dawn-glow** radial bloom at the horizon line (navajo-white over soft orange).
- **Static starfield** via radial-gradient dots (denser up top, a few navajo-tinted).
  No twinkle/motion yet — that's Layer 5.
- Olivine CTA with restrained glow (box-shadow), navajo-white focus ring.
- Desert ridge + right-side illustration still simplified placeholders (Layer 4).

## Decisions (Layer 4)

- **`desert-ridge.svg`** — three depth layers (far mesas lightest → near foreground
  = page base) + saguaro cacti standing in the gaps between mesas so they rise
  into the glowing sky. Referenced via `background-image` on `.hero-scene` (front
  layer, `100% auto`, bottom) so the dawn glow blooms behind the crest. NOT inlined.
- **`automation-flow.svg`** — messy invoice stack → glowing olivine hexagon node
  (spark + soft glow) → clean table with a check badge. `<img>` with real alt.
- First ridge attempt read as a central "V" valley and only 1 cactus showed
  (others lost against the dark foreground) — redesigned with flat-topped mesas
  and gap-standing cacti. (Rejected direction logged below.)
- **Fixed mobile overflow**: the illustration's intrinsic 480px width was acting
  as the grid column's automatic minimum → hero couldn't shrink below ~480px on
  phones. Fix = `grid-template-columns: minmax(0, …)` + `min-width: 0` on
  `.hero-copy`/`.hero-art`. Verified clean at 360px (in-iframe render).
- **Gotcha:** XML comments can't contain `--`; `--bg` in an SVG comment broke the
  file in strict parsers (libxml2/browsers) though Python's minidom allowed it.

## Open / carried-forward decisions

- Right-side illustration: leaning **Automation flow** (messy inputs → glowing
  olivine node → clean output). Decided at Layer 4.

## Rejected directions

- Desert ridge v1: back ridge with a deep central dip → read as a "V" valley /
  interior corner, not a horizon. Cacti tone too close to the foreground fill, so
  only the one tall center cactus showed. Replaced by flat-topped mesas + cacti in
  the inter-mesa gaps.
