# Claude Code — Skud Labs, Pass 1 (Hero only, fast iteration)

Paste this into the Claude Code panel in VS Code. Toggle PLAN MODE first
(Shift+Tab) so it proposes before it builds. Have these in the workspace:
- assets/skud-labs-logo.svg   (my desert logo — text already says "Skud Labs")
- reference/oakharbor/        (scraped Oak Harbor source + assets)
- reference/screenshots/      (my screenshots, if any)

---

We're doing a FAST first pass. I want speed and tight iteration, not a
finished site. Follow these rules the whole way:

**Workflow — stop and check with me:**
- Work in small checkpoints. After each one, STOP and wait for my approval
  before continuing. Do not build the whole thing in one autonomous run.
- Checkpoint 1: show me your design plan as text only (palette usage, type
  pairing, layout sketch, and the animation concept for each of 3
  directions). No code yet. Wait for me to react.
- Checkpoint 2: after I react, build ONLY the hero section for all three
  directions, as three separate self-contained static .html files
  (inline CSS + JS, no build step, no framework). Plain HTML I can open in
  a browser directly. Then stop.
- We'll pick a winner and iterate on it after that. Don't scaffold Astro,
  don't build other sections, don't set up deploy — none of that yet.
- Keep each hero file independent so I can compare them side by side.

**Scope of this pass:** the hero section ONLY (top nav + the full-viewport
hero with its animated background). Nothing below the fold.

## Who I am and what this site is for

I'm Kyle, a senior backend software engineer in Austin, TX with 10
years of experience at Fortune 500 companies. At my current job I built and
solely own a production AI document-processing system (OCR + multi-stage
LLM agents on AWS) that handles thousands of healthcare documents per day
at a Fortune 15 healthcare company.

I'm launching a solo consulting practice (Skud Labs) helping small
businesses automate repetitive work with AI, plus general custom software
(websites, backend APIs, integrations) and ongoing fractional engineering.

The site's single job: when a referred small-business owner lands here,
they should think "this person is credible, I understand exactly what he
does, and booking a call feels safe." It's a trust artifact for warm leads,
not a marketing funnel. Success = they click the Calendly link.

Critical positioning constraints:
- I am ONE person and the site must read that way. First person singular
  ("I", never "we"). No agency theater, no fake team, no stock photos, no
  invented testimonials or client logos. Being solo is a selling point —
  clients work directly with the engineer doing the work. Say so.
- Describe my corporate experience at résumé altitude only: "a Fortune 15
  healthcare company," never specific employer names, internal product
  names, internal metrics, or proprietary details.

## Tech stack

- Astro with Tailwind CSS. Static output only — no SSR, no database, no CMS.
- Dont fofcus on astro set up thgouh for first pass, just in case thats relevant im idnicating we will use astro so we can build from whatever html hero sections you create in case thats even relevant (i dont know)
- Single page (index) focus on hero section first


## Visual direction — THIS IS THE POINT OF THE PASS

Reference: study `reference/oakharbor/` closely (the Oak Harbor Web Designs
site). I want that **calm, dark-mode, animated SVG/geometric atmosphere** —
shooting comets, drifting satellites/UFOs, glowing particles — NOT
photorealistic, NOT a static page. The earlier drafts I got were flat and
Notion-like; this should feel alive and atmospheric while still restrained
and professional.

**My theme (differentiate from Oak Harbor, don't copy it):** an Austin-
Texas **desert at night** — a low-poly/geometric desert horizon (mesas,
saguaro silhouettes) under a deep starry sky with **constellations**, a
subtle Milky Way band, the occasional **shooting comet** and a slow-drifting
**satellite or stylized UFO**. Dark, serene, a little futuristic. Think
"observatory in the high desert," with optional restrained Tron/retro-
computing glow accents in the linework — secondary, not the main event.

**Logo:** use `assets/images/logo_skudworks_simple.svg` and `logo_midjourney.png` as inspiration. ibasically also want to have (you craete_ an svg very similar to the skudworks one, but more high def using the logo midjourney in a vector form if possible, witht he ifnal svg having both the ciruclar logo and the text together as one, of course update skudworks to skud labs and maybe drop tech technologies part).

**Palette (use these exact tokens as CSS variables):**
```
--eerie-black:  #1B1B1B
--gunmetal:     #112431   /* primary — dark blue base */
--seasalt:      #FAFBFC   /* off-white text */
--olivine:      #A0B389   /* olive green — primary accent */
--navajo-white: #FEDDAA   /* warm sand — secondary accent / starlight */
--jet:          #353535
--body-text:    #8B8B8C
```
Dark base (gunmetal / eerie-black gradient sky), off-white body text,
**olivine** as the main accent (CTAs, key strokes), **navajo-white** as the
warm starlight/sand secondary. Glow accents allowed but sparing.

**Across the 3 directions, vary the *execution* of this one theme** — e.g.
(1) wide cinematic desert horizon with a big constellation field;
(2) close, minimal — few precise constellations + one hero comet, lots of
negative sky; (3) more retro-computing — subtle grid horizon (Tron desert)
with glowing geometric accents. Different layout, type, and animation
character each; same palette and same desert-night concept.

## Animation guidance

- CSS/SVG/canvas only, self-contained, lightweight. 60fps, no jank.
- Tasteful and slow — ambient, not busy. A few comets on a loop, slow star
  twinkle, one drifting satellite. Restraint reads as premium.
- **Respect `prefers-reduced-motion`**: freeze to a calm static starfield.

## Hero content

- Nav: Skud Labs logo (left); links Services / Work / About / a "Book a
  call" button (right). Just needs to look right — links can be anchors.
- Eyebrow: AI automation & custom software · Austin, TX
- Headline (outcome-first, vary the wording per direction): the idea is
  "get back the hours your team loses to repetitive work." Confident, plain.
- Subhead (one line): senior engineer, 10 years at Fortune 500 companies,
  built production AI for a Fortune 15 healthcare company, now helping small
  businesses — without an in-house tech team.
- Primary CTA button: "Book a free 20-minute call"
- One quiet reassurance line: 20 minutes · no pitch · no obligation

## Quality floor (even in this pass)

Responsive down to 360px, visible keyboard focus on nav + CTA, semantic
landmarks, real alt text on the logo, WCAG AA contrast for text on the dark
sky. Keep CSS specificity clean so section spacing doesn't fight itself.

Start at Checkpoint 1: give me the 3 text design plans and wait.

## Hero more details

For the hero specifically, get close to the look and feel of Oak Harbor Web
Designs (in `reference/oakharbor/`) — not a copy, but the same caliber and
the same approach. Read their HTML/CSS/JS to see exactly how they build the
animated night sky (the comets, the glowing particles, the layering) and use
the same technologies and techniques they did, rather than inventing a
heavier approach. You're free to reuse generic assets from that folder
(sprites, easing, particle helpers) as a starting point.

Then make it mine:
- Keep their night-sky quality, but it's MY sky — original constellations,
  my palette tokens, my comet/satellite treatment. Improve on theirs where
  you can (smoother motion, cleaner layering).
- Replace whatever sits beneath their sky with an **Austin desert** scene —
  geometric mesas and saguaro silhouettes on the horizon, low-fi and
  serene — matching the screenshots in `assets/midjourney_inspiration/`. Follow those
  screenshots for the desert's look and composition.

Same checkpoint rule: show the plan, then build the hero, stopping for me
between. Match their level, keep it unmistakably Skud Labs.


## Theme more details

The whole page is one continuous **top-to-bottom scene** that descends from
space to desert — the background tells a story as you scroll:

- **Top (hero):** minimalist outer space — low-fi stars, a single comet,
  a drifting satellite.
- **Mid:** transition into a minimalist night sky.
- **Lower:** settle into a minimalist **Austin desert** — geometric mesas
  and small low-poly green cacti on the dunes.
- **Down to the footer:** dark "black sand" desert floor.

Each section sits on its slice of this gradient so the scene flows
continuously rather than resetting per block. Keep every element minimal and
geometric (SVG/CSS), never photorealistic.

**Aesthetic:** retro-futurism meets modern minimalism — a *Dune / Arrakis*
"future tech in the high desert" mood, with Scandinavian/Japanese-Zen
restraint (clean lines, generous negative space, calm). Cutting-edge but
serene.

**Color:** dark base (gunmetal/eerie-black sky → desert), off-white text,
**olivine** green as primary accent, **navajo-white** sand/starlight as
secondary. Sparing warm accents (sand yellows/oranges) low on the horizon
are fine. Glow used with restraint.

**Layout:** single centered column, clear sections — navbar, hero with
headline + CTA, services grid, and footer — generous whitespace throughout.
The desert portion occupies the largest share of the page.

**Micro-details:** a few tiny deliberate touches — one comet up top, small
simple cacti on the desert hills — nothing busy. Restraint reads as premium.
