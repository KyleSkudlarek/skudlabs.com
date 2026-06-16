# Skud Labs

Trust-artifact website for **Skud Labs** — Kyle's solo consultancy (AI automation,
custom software, web). This pass covers the **hero** section. To view it, open
`index.html` in a browser.

## Start here — what each doc is

| File | What it is |
|------|------------|
| `README.md` | This file — the map to everything else. |
| [`docs/prompt.md`](docs/prompt.md) | The **brief**: goals, audience, visual direction, palette, copy guardrails, and the fidelity-layer working method. The spec everything follows. |
| [`docs/content.md`](docs/content.md) | Approved **page structure + hero copy**. Source of truth for the words. |
| [`docs/NOTES.md`](docs/NOTES.md) | Running **build log**: which layer is approved, decisions made, directions rejected. |
| [`docs/PROCESS.md`](docs/PROCESS.md) | The **build method** (generalized) + **exactly how to replay it with Fable 5**. |

## Project layout

```
README.md               this file (start here)
index.html              the hero page
docs/                   project docs (prompt, content, NOTES, PROCESS — see table above)
assets/
  css/                  styles.css
  fonts/                offline woff2 (Oswald, Space Grotesk, Caveat)
  img/                  production SVGs (logo, desert ridge, illustration, satellite)
  inspiration/          source/mood references (logo/, hero/)
reference/  resume/      research material (Oak Harbor scrape, résumé)
```

## Status

- **Full one-page site built.** Latest: **`layout-v1`** — all sections live (hero, credibility strip, problem, services, how it works, recent work, who it's for, about, FAQ, final CTA, footer) on the desert-night theme, one-page scroll with nav jumps. Copy locked at `copy-fullpage`; hero at `hero-v7`.
- **Still to come:** Phase 3 (per-section style/art polish), Phase 4 (scroll-reveal motion), Phase 5 (wire the `#book` contact/booking destination). Recent-work cards use **mock testimonials** — replace with real ones.
- Rollback points: one git tag per approved layer (`layer-1-approved` … `layer-6-approved`), `hero-v1` … `hero-v7`, `copy-fullpage`, `layout-v1`. Restore any with `git checkout <tag>`.

## Replaying the build (e.g., with Fable 5)

See **[`docs/PROCESS.md`](docs/PROCESS.md) → "Replay"** for the exact prompt to paste and the branch step.
