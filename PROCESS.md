# Skud Labs — Build Process & Replay

How this site was built, and exactly how to re-run the same process from scratch
(e.g., with Fable 5).

## Method: fidelity layers (stop & approve between each)

Build in the order a designer works — words → structure → look → art → motion → logo:

1. **Copy & structure** — text only (page outline + hero copy).
2. **Grayscale wireframe** — real layout/spacing, no color/art/motion.
3. **Aesthetic** — palette + Oswald + sky gradient & dawn glow.
4. **Frozen SVG art** — desert ridge + illustration, referenced (not inlined).
5. **Motion** — star twinkle, comets, satellite, float; respect `prefers-reduced-motion`.
6. **Logo** — combined emblem + wordmark SVG, fonts embedded.

Stop after each layer for approval. Never put a later layer's polish on an
unapproved earlier one.

## Lock-in convention (rollback points)

One commit + one git tag per approved layer: `layer-1-approved` … `layer-6-approved`.
Restore any state with `git checkout <tag>`. Milestone baseline: **`hero-v1`**.

## Techniques that worked (specifics in NOTES.md)

- Generic CSS tokens at Layer 2, remapped to the real palette at Layer 3.
- Frozen SVGs referenced via `<img>` / `background` — not regenerated once approved.
- Logo font embedded as base64 in the SVG (a referenced SVG can't use page fonts).
- Verify each layer by rendering in headless Chrome (desktop + 360px mobile).
- Grid-blowout fix: `minmax(0, 1fr)` + `min-width: 0` so images don't force overflow.
- Oak Harbor's animation categories reused as technique: stars / comets / satellite.

## Replay (e.g., with Fable 5) — exactly what to send

For a clean comparison, branch first:
`git checkout -b fable5-hero layer-1-approved`

Then open a fresh session in this repo and paste:

> Read `prompt.md` (the full brief plus the Oak Harbor desert-remix add-on),
> `content.md` (approved structure + hero copy), and `NOTES.md` (decisions +
> rejected directions). Rebuild the Skud Labs hero using the fidelity-layer
> method: copy → wireframe → aesthetic → frozen SVG art → motion → logo. Stop
> for my approval after each layer, and commit + tag each approved layer. Use the
> palette and the offline fonts already in `assets/`. Build original SVG art — do
> not lift Oak Harbor's. The current build is tagged `hero-v1`; treat it as the
> baseline to match or beat, but make your own take. Start at Layer 1 and wait
> for my confirmation.
