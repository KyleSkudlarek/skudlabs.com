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
- [ ] Layer 2 — Grayscale wireframe (two-column hero + start of "What I do").
- [ ] Layer 3 — Aesthetic & background theme (palette, Oswald, sky gradient + dawn glow).
- [ ] Layer 4 — Scene art as frozen SVGs (desert ridge + cacti; right-side illustration).
- [ ] Layer 5 — Motion (star twinkle, comet(s), gentle float; respect prefers-reduced-motion).
- [ ] Layer 6 — Logo (swap text wordmark for hand-authored SVG emblem).

## Decisions (Layer 1)

- Hero headline: **"Stop paying people to do work a computer can do."**
  (chosen over "Get back the hours…" and "Put the repetitive work on autopilot.")
- "What I do" headline: **"Put the busywork on autopilot."**
  (chosen over "Never do that by hand again.")
- Nav: **Home · Services · Work · About** (kept Home).
- Employer names anonymized by design.

## Open / carried-forward decisions

- Right-side illustration: leaning **Automation flow** (messy inputs → glowing
  olivine node → clean output). Decided at Layer 4.

## Rejected directions

- _(none yet)_
