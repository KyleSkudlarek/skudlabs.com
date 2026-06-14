# Skud Labs — Website Build Brief

Single source of truth for this project. Read it fully once; I'll steer you
through the build in short messages. Don't act on everything at once — follow
the WORKING METHOD and stop at each checkpoint.

---

## Assets in this workspace (real paths)

```
assets/
  fonts/                 oswald-v53-latin-600.woff2, oswald-v53-latin-regular.woff2
                         (display type — load offline, no font CDN)
  hero_inspiration/      lowfi_mobile.jpg        (my rough mobile mockup — LOOSE inspiration)
                         midjourney_website_lowfi_example_*.jpg  (mood/theme inspiration)
  images/                logo_midjourney.png, logo_skudworks_simple.svg
                         (logo inspiration — used only at the final logo layer)
reference/               (Oak Harbor Web Designs scrape — primary technique reference)
resume/                  (my résumé — context for copy; see RÉSUMÉ section)
```

If a file or path you need is missing or ambiguous, **ask me — don't guess.**

---

## Working method (most important section — follow exactly)

We build in **fidelity layers**, in the order a human designer works: words
first, then structure, then look, then art, then motion, with the logo near
the end. **Stop after each layer and wait for my approval** before the next.
Never put a later layer's polish on top of an unapproved earlier one. If I
can reject it as text, don't render it; if I can judge it in grayscale, don't
add color. Use plan mode to propose before writing files. If I interrupt,
fall back to the last approved layer. Keep a running `NOTES.md` of what each
direction tried and what I rejected, so we don't relitigate dead ends.

- **Layer 1 — Structure & copy (text only, no visual code).**
  (a) Study `reference/` (Oak Harbor) and map its page structure — the
  sequence of sections and what each does. Then propose an **adapted
  full-page outline for Skud Labs**: same general approach and rhythm, but
  fitted to my broader offering (AI automation + custom software + fractional
  engineering — NOT just websites). Borrow their structure, not their copy.
  Present as a section list / text wireframe.
  (b) Write the **hero copy** (eyebrow, headline, subhead, CTA, reassurance);
  a couple of headline options welcome. Plain, first person, résumé-altitude.
  No layout code yet. Wait.

- **Layer 2 — Hero wireframe (grayscale skeleton).** Build the hero as real
  HTML/CSS — real layout, type scale, spacing — following the approved
  structure, on a FLAT dark background with plain placeholder boxes where the
  sky/desert art will go. A simple **text wordmark** ("Skud Labs") stands in
  for the logo. No scene art, no animation. Judges bones and composition
  only. (Grayscale is *supposed* to look unfinished — hold color/art notes
  for later layers.) Wait.

- **Layer 3 — Aesthetic & background theme.** Apply the palette and
  typography personality, and iterate the **desert-night background
  treatment** — gradient sky, color, mood — still with simplified/placeholder
  art and no real animation. Where we dial in the overall feel. Wait.

- **Layer 4 — Scene art, as frozen standalone SVG files.** Build the night
  sky and desert as separate files in `assets/` (e.g. `sky.svg`,
  `desert-horizon.svg`), referenced by the hero — NOT inlined. Iterate in
  isolation; once I approve each, **freeze it** and don't regenerate it. Wait.

- **Layer 5 — Motion, last of the visuals.** Add comets, drift, star
  twinkle, the satellite — on top of the approved static hero. Respect
  `prefers-reduced-motion` (freeze to a calm static starfield). Wait.

- **Layer 6 — Logo (near the end).** Only now, replace the text wordmark with
  a hand-authored combined SVG (low-poly desert emblem + "Skud Labs"
  wordmark), drawing on `assets/images/logo_midjourney.png` and
  `logo_skudworks_simple.svg` as inspiration — higher fidelity, both emblem
  and wordmark as one SVG. Wordmark reads "Skud Labs" (drop
  "Skudworks"/"Technologies"). Save to `assets/skud-labs-logo.svg`. Freeze
  once approved. Wait.

**Scope of this pass = the HERO only** (top nav + full-viewport hero). The
Layer 1 full-page outline is produced as text only, so we have the map for
later. Don't build below-the-fold sections, scaffold Astro, or deploy yet.
Keep the hero's HTML/CSS clean and portable so it extends into the full page
in a later session.







---

## Who I am & what the site is for

I'm Kyle — a senior software engineer in Austin, TX, 10+ years at Fortune 500
companies. **Skud Labs** is my solo consulting practice: I help small
businesses automate repetitive work with AI, and I build custom software,
backend APIs, integrations, and websites. The site is a **trust artifact for
referred leads** — when a small-business owner lands here they should think
"this person is credible, I get what he does, booking a call feels safe."
Success = they book the call.



## Visual direction

The signature is a **calm, dark-mode, animated SVG/geometric night sky** in
the spirit of Oak Harbor Web Designs (`reference/`) — comets, a drifting
satellite/UFO, glowing particles. Atmospheric and alive, but restrained and
professional. Not photorealistic, not flat/Notion-like.

My theme, differentiated from Oak Harbor: an **Austin desert at night** —
low-poly/geometric desert horizon (mesas, saguaro silhouettes) under a deep
starry sky with original **constellations**, a faint Milky Way band, an
occasional **shooting comet**, and one slow-drifting **satellite/UFO**. Mood:
"observatory in the high desert," Dune/Arrakis future-tech-in-the-desert,
with Scandinavian/Japanese-Zen restraint — clean lines, generous negative
space, calm. Optional sparing Tron/retro-computing glow in the linework as a
secondary note, never the main event.

Within the hero, the background reads top-to-bottom as space → night sky →
the top edge of the desert (one continuous gradient scene, not stacked
blocks). The full descent to a "black sand" footer comes in the later
full-page session — build the hero so it can extend into that.

**Animation technique:** study how `reference/` builds its sky (stars
animated on opacity via staggered keyframes; comet as a thin rotated element
translated across a long loop; satellite on a slow orbit; sky as a single
gradient). Reuse those lightweight techniques rather than a heavier approach.
Reusing generic helpers (easing, particle utilities) is fine; swap anything
distinctive (their exact comet sprite, signature shapes) for original work so
the result is unmistakably mine. GPU-friendly transform/opacity only, ~60fps.

**Loose cues from `hero_inspiration*`** (inspiration, not a
spec)


**Across 3 directions, vary execution of this one theme:** (A) wide cinematic
horizon + big constellation field (canvas starfield + Milky Way); (B) close &
minimal — few precise constellations, one hero comet, lots of negative sky
(pure-CSS, closest to Oak Harbor's mechanism, cleaned up); (C) Tron desert —
subtle perspective grid horizon + restrained olivine glow (CSS grid + glow).
Different layout, type, and motion character; same palette and concept.

## Palette (exact tokens, as CSS variables)

```
--eerie-black:  #1B1B1B
--gunmetal:     #112431   /* primary — dark blue sky base */
--seasalt:      #FAFBFC   /* off-white text */
--olivine:      #A0B389   /* olive green — primary accent (CTA, key strokes) */
--navajo-white: #FEDDAA   /* warm sand — secondary accent / starlight */
--jet:          #353535
--body-text:    #8B8B8C
```
Dark gunmetal/eerie-black gradient sky, seasalt headings, body-text for muted
copy, olivine primary accent, navajo-white as warm starlight/sand. Sparing
warm yellow/orange low on the horizon is fine. Glow used with restraint.

## Hero content

- Nav: logo (left; text wordmark until Layer 6, `alt="Skud Labs"`); links
  Services / Work / About (anchors) + a **"Book a call"** button (olivine).
  Visible `:focus-visible` on links + CTA.
- Eyebrow: AI automation & custom software · Austin, TX
- Headline (outcome-first, vary per direction): the idea is "get back the
  hours your team loses to repetitive work." Confident, plain.
- Subhead (one line): senior engineer, 10 years at Fortune 500 companies,
  built production AI for a Fortune 15 healthcare company, now helping small
  businesses — without an in-house tech team.
- Primary CTA: "Book a free 20-minute call"
- Reassurance: 20 minutes · no pitch · no obligation

## Quality floor (even now)

Semantic `<header><nav><main>`; responsive to 360px; visible keyboard focus
on nav + CTA; real alt text; WCAG-AA text contrast on the dark sky;
`prefers-reduced-motion` → calm static starfield; clean CSS specificity so
spacing doesn't fight itself. Oswald loaded offline from `assets/fonts/`.

## RÉSUMÉ (context for copy — never reproduce verbatim)

Source in `resume/`. Use it to write credible hero/about copy in plain,
client-facing language (owners don't care what Databricks is). Pull only what
builds trust; apply the positioning guardrails above.

- 10+ years software engineer; B.S. Computer Science, University of Virginia.
- Strongest trust signal: built and runs a production AI system processing
  thousands of healthcare documents a day at a Fortune 15 healthcare company
  (OCR + LLM pipelines on AWS) — great for medical/dental/legal prospects.
- Earlier: AI assistant / RAG features at a major financial-software company;
  productionized fraud-detection ML; modernized large data pipelines.
- Breadth: backend, cloud (AWS — certified Solutions Architect), data
  engineering, applied AI/ML, full-stack/web.
- Throughline: I turn messy, manual, document-and-data-heavy work into
  reliable automation — proven where the reliability bar is highest.

## Competitor / inspiration sites (study for structure & polish, don't copy)

Oak Harbor is primary (`reference/`). For layout, flow, and the quality bar
of solo/boutique software & design studios: fourkitchens.com,
fatbirdcreative.co.nz, blackbird.digital, glidedesign.com, lunawebstudio.com,
diamond-group.co, ramotion.com, octaveagency.com, clemsonwebdesign.com,
dockyard.com, ronasit.com. Take cues on rhythm and restraint; the
desert-night identity stays mine.


---

Begin at **Layer 1** — wait for me to confirm before starting, then produce
the structure map + hero copy as text only, and stop.


------

# Add-on: Oak Harbor homage hero (desert remix) — focus for this session

This **focuses the current session** on one direction instead of three. For
now, replace the "3 directions" exploration in the brief with the single
composition below — an Oak Harbor-caliber hero, my desert-night remix. We can
branch variations later. Everything else in `BRIEF.md` still applies
(fidelity-layer method, palette, positioning, quality floor, copy guardrails).

## What I'm going for

Get close to the **caliber and structure** of the Oak Harbor hero (see
`reference/` and `assets/hero_inspiration/`), but as mine: a dark starry sky
with a **warm dawn glow sitting on the horizon line**, CSS stars + comets,
and a **low-fi desert silhouette** (mesas + saguaro cacti) across the horizon
instead of their pine treeline. Left: hero text + CTAs. Right: an original
illustration that represents *my* work (not a website mockup). Below the
hero: the start of the first content section ("What I do" + a bold statement).

Reuse Oak Harbor's lightweight *techniques*, but build **original art** —
do NOT lift their laptop/phone PNG or their UFO. The horizon silhouette and
the right-side illustration are hand-authored SVGs of mine.

## Hero composition (two-column)

```
┌────────────────────────────────────────────────────────────┐
│  [logo wordmark]      Home  Services  Work  About   [Book a call] │  ← nav
│                                                              │
│   CUSTOM AI & SOFTWARE · AUSTIN, TX        ╭───────────────╮ │  ← eyebrow
│                                            │               │ │
│   Get back the hours your                  │   RIGHT-SIDE  │ │  ← headline
│   team loses to busywork.                  │  ILLUSTRATION │ │
│                                            │  (see below)  │ │
│   One senior engineer who automates        │               │ │  ← subhead
│   the repetitive work — without an         ╰───────────────╯ │
│   in-house tech team.                                        │
│                                                              │
│   [ Book a free 20-min call ]   About me →                   │  ← CTAs
│                                                              │
│  · · · stars · · ·   ☄ comet · · · · · · · · · · · · · · · · │
│ ╱╲___ dawn glow on horizon ___╱╲___🌵__╱‾‾╲___🌵____________ │  ← desert SVG
│ ▓▓▓ darker desert foreground fading down to next section ▓▓▓ │
└────────────────────────────────────────────────────────────┘
```

- Left column: eyebrow (small-caps, tracked) · large condensed Oswald
  headline · one-line subhead · olivine pill primary CTA + quiet text link
  beside it (mirrors my `lowfi_mobile.jpg`).
- Right column: the illustration, vertically centered, floating slightly.
- On mobile: stack — text first, illustration below.

## Background layer stack (back → front)

1. **Sky gradient:** deep gunmetal/eerie-black at top → slightly warmer
   toward the horizon, with a **navajo-white/soft-orange dawn glow** blooming
   right at the horizon line (the signature Oak Harbor move).
2. **Stars:** scattered, twinkling on opacity (staggered keyframes). Denser
   up top, thinning toward the glow.
3. **Comet(s):** one or two slow shooting comets on a long loop. Optional
   faint Milky Way band.
4. **Desert horizon SVG (frozen asset):** layered low-poly mesas (gunmetal →
   eerie for depth) with a few **saguaro cactus silhouettes**; the dawn glow
   sits behind/through this ridge. This replaces their pine treeline.
5. **Foreground desert** fading downward into the next section's dark
   background (sets up the later full-page "descent to black sand").

## Right-side illustration — represents AI/software, not "websites"

Oak Harbor shows a laptop+phone because they sell websites. Mine should say
"I automate messy manual work." Options, in order of how well they fit —
**pick one and I'll build it as a frozen SVG:**

- **(Recommended) Automation flow:** a small low-poly scene of messy inputs
  (stack of papers / invoices / an inbox) flowing through a glowing
  olivine node into clean, organized output (a tidy table / check). Literally
  depicts my value prop, on-theme with the desert's geometric style.
- **Laptop, code/dashboard:** an Oak-Harbor-parallel floating laptop, but the
  screen shows a clean automation dashboard or terminal, not a website. Safe,
  familiar, reads "software."
- **Constellation-as-pipeline:** the right-side stars connect into a subtle
  node-graph/pipeline constellation — ties the illustration into the sky
  itself. Most distinctive, most abstract.

Keep it geometric/low-poly, palette-tied, with restrained glow. It floats
gently (subtle motion added at the motion layer).

## Section below the hero (start it, don't finish the page)

Mirror Oak Harbor's "WHAT WE DO / NEVER WORRY..." beat, in my voice. Just the
eyebrow + statement headline + a line or two — enough to see the transition
out of the hero. Headline options (pick/iterate):
- "WHAT I DO — Stop paying people to do work a computer can do."
- "WHAT I DO — Never do that by hand again."
- "WHAT I DO — Put the busywork on autopilot."

## How this maps to the layers (still build in order, stop between)

- **Layer 1 (copy):** finalize hero copy + the "What I do" statement. Text.
- **Layer 2 (wireframe):** grayscale two-column hero + the start of the
  statement section. Boxes for sky and the right illustration. Judge layout.
- **Layer 3 (aesthetic):** sky gradient + dawn glow, palette, Oswald type.
  Placeholder still fine for the desert ridge and illustration.
- **Layer 4 (art, frozen SVGs):** build (a) the desert-horizon ridge with
  cacti and (b) the chosen right-side illustration, each as its own frozen
  `assets/*.svg`.
- **Layer 5 (motion):** star twinkle, comet(s), gentle float on the
  illustration. Respect `prefers-reduced-motion`.
- **Layer 6 (logo):** swap the text wordmark for the real emblem.

Start at Layer 1 with the copy, and wait.