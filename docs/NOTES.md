# Skud Labs — Build Notes

Running log of the fidelity-layer build. Tracks what's approved, decisions made,
and directions tried/rejected so we never relitigate dead ends.

## Milestone — `todo-batch-v3` (2026-06-16)

Hero + pricing refinements:
- **Hero rearranged** — website (laptop+phone) top-left, chatbot top-right, the
  bigger document-processing/automation tile spanning the bottom; larger gap
  between the top row and the bottom tile so the floating pieces don't crowd.
- **Pricing restructured toward Oak Harbor** — dropped the Starter/Business split
  for one **Lump-sum website** ($4,000 one-time + $25/mo hosting; Oak-Harbor-style
  inclusions). Web app back to **$8,000+**. Added a third card — **Custom AI
  chatbot** ($3,500+ setup, from $99/mo) — both to fill the 3-card row and as a
  flagship small-business service (RAG assistant for quotes / frontline Q&A). The
  $100/mo care plan is now an optional edits upgrade on lump-sum sites.

## Milestone — `todo-batch-v2` (2026-06-16)

Second TODO round (refinements of v1):
- **Hero → triangle.** The 3 tiles were a vertical zig-zag (read awkward); now
  chatbot + automation sit side by side on top with the wider website tile
  centered below (`.cluster-top`).
- **Pricing.** Lump-sum builds now start at **$4,000** ($4k/$6.5k/$9k+ tiers);
  the **$175/mo** subscription is the "Most popular" option, now **12-month
  minimum** (dropped "cancel anytime") with Oak-Harbor-style benefit bullets
  (hand-coded design, hosting/domain/SSL, unlimited edits, 24/7 support, SEO).
- **Favicon.** Replaced the hand-drawn one (mirrored moon) with the **actual
  emblem lifted from `skud-labs-logo.svg`** (viewBox cropped to 90×90) so it
  matches the navbar exactly.

(Also confirmed: the earlier "mobile overflow" was a false alarm — Chrome
headless clamps to a 500px min window, so 390px screenshots were just cropped.
Verified true 390px via an iframe wrapper; layout is clean.)

## Milestone — `todo-batch-v1` (2026-06-16)

Worked the `TODO.md` queue in one pass:
- **Hero rewrite** — Oak-Harbor-style category lockup: "Small business" /
  "custom web design, AI & software" (`.headline-cat`). No upsell framing, no
  em-dashes. Eyebrow trimmed to "Austin, TX".
- **Contact section** (`#contact`) — email, call/text, a chat-with-assistant
  card, and a form (not backend-wired; note tells users to email). All "Get
  started"/nav CTAs repointed `#book` → `#contact`; added Contact nav link.
- **Floating chat launcher** (`.chat-fab` + `.chat-widget`) — placeholder for the
  live AI assistant ("coming soon"); doubles as proof I build chatbots.
- **$175/mo no-downpayment plan** — featured banner above the buy-outright website
  tiers (Oak Harbor model). Demoted the $5k card badge to "Best value".
- **Credibility strip** — dropped "1,000s of docs/day" → "Hand-coded" website
  quality signal (kept 10+ yrs + Austin).
- **Navbar type** — Oswald, uppercase, tracked (was plain system font).
- **Portfolio** — higher-fidelity previews (faux nav + hero + content cards,
  themed per business) + more spacing.
- **Favicon** — `assets/img/favicon.svg`, a cactus-night roundel in the logo style.

Placeholders still to fill: real email/phone, form backend, the real chatbot.

## Milestone — `websites-led-v1` (2026-06-16)

Strategic repositioning: **websites lead, software/AI/automation = expansion,
recurring = engine** (captured in `skudlabs-STRATEGY.md` → "Site positioning &
offer hierarchy"). Built on top of a parallel session's work (6-card services
grid, priced website tiers, CSS laptop portfolio, expanded FAQ/About). Changes:
- **Hero** rewritten websites-first ("Websites that bring in customers — and the
  software that runs your business"); secondary CTA → "See plans & pricing".
- **Hero visual** swapped from the automation illustration to a three-tile
  cluster — website (laptop + phone), AI chatbot window, and the automation flow
  (the old `automation-flow.svg` reused as the third tile, not deleted).
- **Services** grid now leads with Websites; header → "From your website to the
  software behind it."
- **Final CTA** + title/meta broadened beyond automation.
Prior automation-first hero preserved at `hero-v7`.

## Milestone — `motion-v1` (2026-06-16)

Aesthetic/motion pass (Phases 3–4). Added vanilla JS (`assets/js/main.js`, no
deps) for progressive enhancement:
- **Sticky nav** — transparent over the hero, gains a blurred backdrop after
  ~48px scroll (so "Get started" follows you down without covering the sky).
- **Scroll-reveal** — section headers, cards, steps, tells, FAQ, About blocks
  fade/translate in on enter (IntersectionObserver), staggered across rows.
- **Twilight icon swap** — service-card line-icons crossfade to desert-night
  glyphs on hover (constellation / satellite-spark / crescent moon).
- **Cursor "moonlight" spotlight** — radial glow tracks the pointer across
  service + work cards (hover-capable pointers only; off on touch).
- **Ambient drift** — `.ambient` layer of soft glowing orbs + star-dust behind
  the dark sections (sits above the page gradient, below content via
  `main{z-index:1}`). Tuned brighter + faster after review (orbs ~.15–.20
  opacity, 130–150px wandering paths, 16–23s).
- **Count-up stats** — credibility numbers (10, 1,000) tick up on scroll.
- **Line-draw** — the How-it-works connector scaleX-draws as steps reveal.

All transform/opacity; everything honors `prefers-reduced-motion` and degrades
without JS (reveal targets only hide once `.js` is set; counters keep their HTML
value). Orbs drop on ≤620px.

## Milestone — `layout-v1` (2026-06-16)

Full one-page site built out below the hero (Phase 2 of the full-page plan).
Added nine sections on the locked desert-night theme: credibility strip, the
problem (four tells), services (3 cards), how it works (4 numbered steps with a
connector line), recent work (3 mock testimonial cards — replace with real),
who it's for (industry chips + HIPAA callout), about (headshot + bio + stats),
FAQ (native `<details>` accordion), final CTA band (glow), and footer. One-page
scroll: nav links jump to `#services`/`#work`/`#about`; smooth scroll on.
Background descends from the hero sky to near-black "black sand" at the footer.
Clean inline line-icons + card hover-lift; bespoke art and scroll-reveal motion
deferred to later phases. Copy locked separately at `copy-fullpage`.

Phase plan (see also full-page map in `content.md`):
Phase 1 Words (`copy-fullpage`) → **Phase 2 Structure (`layout-v1`)** →
Phase 3 Style + art per section → Phase 4 Motion + polish → Phase 5 Contact/booking.

## Milestone — `hero-v7` (2026-06-14)

Headline pivoted from a category label to **outcome-led**, so the hero converts
cold traffic (ads/flyers) as well as referrals: H1 = "Custom software & AI that
handle your busywork for you"; eyebrow brought back as "Small business · Austin,
TX" (audience + location); credibility stays in the subhead. (Prior category
lockup at `hero-v6`.)

## Milestone — `hero-v6` (2026-06-14)

Logo tagline expanded to four services — AI · Automation · Software · Web
(split the compound "AI automation" into AI + Automation).

## Milestone — `hero-v5` (2026-06-14)

Copy/CTA refinements: fixed the who/what headline line break (restored
`styles.css`, which had been omitted from the hero-v3/v4 commits — the cause of
the regression); condensed the subhead to two sentences; changed both the nav and
hero CTAs to "Get started", with the reassurance now "Chat, email, or a quick
call — no pitch, no obligation" (CTA leads to a future flexible contact page).

## Milestone — `hero-v4` (2026-06-14)

Right-side illustration reworked from a single left→right flow into an AI "bloom":
messy papers → glowing AI/software hub → four outcomes (website + app via
laptop & phone, AI support chat, a dashboard, and clean organized data).
Connectors radiate from the hub with consistent gaps at both ends.

## Milestone — `hero-v3` (2026-06-14)

Hero copy reworked: decluttered, and the headline pivoted to an Oak-Harbor-style
who/what lockup — "Small business" (olivine) over "AI automation & custom
software" (seasalt) — above a bespoke, enterprise-grade AI-driven subhead.

## Milestone — `hero-v2` (2026-06-14)

Hero composition refined: copy lifted into the sky (full-viewport hero → more
contrast and clear separation from the desert), headline downsized, eyebrow now
includes web design, and a "Location: Austin, TX" line added.

## Milestone — `hero-v1` (2026-06-14)

Full hero complete (Layers 1–6) + assets reorganized. Tagged **`hero-v1`** as the
baseline. To re-run this whole build from scratch (e.g., with Fable 5), see
`PROCESS.md` → "Replay" for the exact prompt to send.

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
- [x] **Layer 5 — Motion** — APPROVED.
- [x] **Layer 6 — Logo** — APPROVED & FROZEN. `assets/skud-labs-logo.svg`.

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

## Decisions (Layer 5)

Oak Harbor hero animation categories (studied from `reference/css/style.css`):
  1. **Stars** — 13 divs, opacity flicker (starFlicker), 2–5s, staggered, always on.
  2. **Comets** — thin rotated div, zips diagonally then dormant (shootingStar/2),
     delays 1s & 1.5s, recur ~9–10s, ease-in.
  3. **Satellite/UFO** — one small craft, slow diagonal orbit (orbit), 11–20s,
     gentle rotation, a 2nd pass delayed 10s. (Single craft, not two.)

Implemented in that style:
- Stars: two layers (`.stars-a` / `.stars-b`) twinkle out of phase (4.5s / 6s).
- Comets (`.comet-1` / `.comet-2`): navajo streaks + glow. **Start sooner per
  feedback** — delays 1s / 3s, recur 10s / 14s (echoing OH's 1s / 1.5s).
- **Satellite** (`assets/satellite.svg`, original): drifts in a slow shallow arc
  across the back, gently banking; starts at 6s (after the comets), 34s loop,
  fades in/out at the edges.
- Illustration floats gently (`translateY`, 7s).
- Ridge restructured into its own `.hero-ridge` child painted last, so it occludes
  stars/comets/satellite at the horizon; scene background = sky gradient + glow.
- `prefers-reduced-motion: reduce` → twinkle/comets/satellite/float all off,
  static starfield.

## Decisions (Layer 6)

- **`assets/skud-labs-logo.svg`** — one combined SVG: low-poly desert roundel
  (dark night disk, olivine ring, navajo moon + stars, mesas, olivine saguaro,
  dawn glow) drawn from `logo_midjourney.png`, restyled to the hero's night
  palette; + "SKUD LABS" wordmark.
- Wordmark dropped "Skudworks"/"Technologies" per the brief → reads "Skud Labs".
- Swapped into nav as `<img alt="…">`, sized to 40px tall.

### Layer 6 revision (extra flair, per feedback)
- Wordmark font → **Space Grotesk 600** (embedded base64 in the logo SVG) for a
  more geometric/techy, less-generic feel. Headline stays Oswald.
- Added **spacing** between emblem and wordmark.
- **Tagline** under wordmark: "AI AUTOMATION · SOFTWARE · WEB" (olivine). Chosen to
  keep AI prominent and signal web work too; avoided vague "digital consultant".
- **Neon flourish**: "Est. Austin" in **Caveat** (script), hovering over the
  **bottom** of the lockup (like OH's "After Dark"), per-letter `neonGlow` flicker
  on staggered delays in olivine/navajo. Static steady glow under reduced-motion.
- New fonts downloaded as offline woff2 into `assets/fonts/`
  (`caveat-v23-latin-700`, `space-grotesk-v22-latin-600`) — no CDN.
- Sizing pass (per feedback): logo enlarged in nav to **72px** (54px on phones)
  so the emblem, wordmark, and tagline all read at OH-like relative scale; tagline
  legible at standard desktop zoom. Logo **shifted left** off the content gutter
  (−16px desktop / −6px mobile) for an intentional optical break. Neon scaled to
  match and repositioned on mobile to clear the CTA.

## Open / carried-forward decisions

- Right-side illustration: leaning **Automation flow** (messy inputs → glowing
  olivine node → clean output). Decided at Layer 4.

## Rejected directions

- Desert ridge v1: back ridge with a deep central dip → read as a "V" valley /
  interior corner, not a horizon. Cacti tone too close to the foreground fill, so
  only the one tall center cactus showed. Replaced by flat-topped mesas + cacti in
  the inter-mesa gaps.
