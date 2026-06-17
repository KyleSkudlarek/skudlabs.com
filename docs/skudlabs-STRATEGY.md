# Skud Labs — Strategy & Context (read me first for business/strategy chats)

This is the business-strategy companion to the build. If you're a strategy
session (not a coding task), read this first — it's the context for who I am,
what I'm building, and the decisions already made. Be a direct strategist and
design reviewer: push back, keep me from over-engineering or under-pricing,
prioritize the highest-probability path to money. I don't need cheerleading.

## Me

Kyle — senior software engineer, 10+ yrs, Fortune 500 (Intuit, Cigna, College
Board, Appian). UVA CS. Currently W2 at Cigna (~$185k total comp), built &
own a production AI fax-automation system (OCR + multi-stage LLM agents on
AWS) processing thousands of healthcare docs/day. ~6 free hours/day at the
day job. Goal: convert that time into consistent supplemental income.

## The goal

- Primary: reach ~$250–300k total income (W2 + side). $60k/yr side = win;
  $100k+ = the dream. Not trying to replace the W2 yet.
- Non-negotiable lifestyle constraint: **async, deliverable-based work only.**
  No one putting meetings on my calendar. Travel-compatible. Freedom to set
  my own hours is the whole point.
- Safety property: built clean so if the W2 ever ends, the income survives —
  the opposite of overemployment. No concealment, no company time/equipment.

## The vehicle: Skud Labs (one LLC, two engines)

- **Engine A — AI automation consulting for small businesses.** Audit-led,
  fixed-price, relationship-sold. Slower money, builds an owned asset
  (reputation, case studies, retainers).
- **Engine B — C2C contract work, deliverable-based only.** Recruiter inbound
  + white-label agency subcontracting, $120–150/hr. Faster cash, low sales
  effort, but builds nothing. Funds patience for Engine A.
- **Background track — interview experiment.** Light prep, 3–4 interviews at
  health-tech/AI-infra shops ($250–350k roles). Worst case: skills refreshed.
  Likely case: an offer = leverage for the Cigna staff promotion + real data
  for the 90-day decision. (Job switch is highest $/hr but costs the free-time
  asset — deliberate tradeoff, decide at day 90.)

## Offer ladder (decided)

| Offer | Price |
|---|---|
| AI Automation Audit | $500 founding (first 2–3, traded for testimonial+case study) → $1,000–1,500 standard |
| Implementation | $3,000–8,000 fixed |
| Maintenance retainer | $200–500/mo per automation |
| Fractional engineer | from $1,500/mo |
| C2C contract | $120–150/hr agency, $140–175 direct |
| **Website build** | flat $2,500–5,000 one-time |
| **Website care plan** | $100/mo (hosting + unlimited small edits + updates) |
| **Website subscription (no money down)** | $175/mo, $0 down — build + hosting + edits bundled; the Oak Harbor model, where a lot of their revenue comes from and most small-biz owners reportedly opt in. Featured above the buy-outright tiers on the site. |
| Custom software / chatbots | fixed proposal (quoted, not list-priced) |

Rules: charge from day one (never free; founding rate ≠ free). Fixed-price >
hourly — fixed price IS the async freedom. Watch the guilt-underpricing
reflex.

## Products / use cases (where the money actually is)

Don't over-fixate on document processing — it's the *legible* example, not
the most profitable. Willingness to pay is highest when the work is tied to
**revenue** or directly **replaces a salary** (budget approves fast); pure
cost-savers get haggled. Priority offers, roughly by ease-of-sale:

- **Revenue-tied automation for local service businesses** (the honey pot —
  cash-rich, unsophisticated buyers, obvious ROI): missed-call text-back,
  AI voice/receptionist, review-generation, quoting/booking. A missed lead is
  a $500–10k job — easy to justify thousands.
- **AI chatbots & assistants** (Intuit Assist / RAG credibility is the wedge):
  customer-facing site/phone assistants, support deflection, Q&A grounded in
  the client's own docs. Replaces headcount / captures after-hours demand.
- **"Glue" / integrations** — connecting CRM ↔ QuickBooks ↔ spreadsheets.
  Unglamorous, bespoke, endless, can't-DIY. Pure full-stack, AI optional.
- **Custom internal tools** replacing manual spreadsheet workflows (HolderForge
  energy). Deepest, stickiest relationships.
- **Static websites** — the OkoDaBoss / Oak Harbor model: flat build + $100/mo
  care plan. Low per-client value but **stacks** into near-passive MRR. Keep as
  a real, dedicated offer + entry point. Proven (~$300k/yr solo operator).
- **Document processing** — real but a *capability*, not the headline. Best
  bundled into integrations ("ingest the PDFs AND push to accounting").

## Site positioning & offer hierarchy (decided 2026-06-16)

Stop leading the *site* with AI automation — it's a hard, abstract, consultative
sale with no built-in recurring line. Lead with **websites** and treat everything
else as expansion. The model is a **hands-on, scaled-down Oak Harbor**: a website
studio whose senior-engineer owner can also build the software a small business
eventually needs.

**The ladder (land-and-expand):**
1. **Front door — Websites.** The easy yes: a known purchase, fixed scope, fast to
   produce, carries recurring (care plan) by default. Gets you *into the
   relationship*. ~$2.5–5k + $100/mo.
2. **Expansion — Software / automation / AI chatbots / integrations.** Once you're
   the trusted "software person," discover and quote the expensive problems. The
   real moat (most web freelancers can't build production systems; agencies cost
   5×). $3–8k+.
3. **Engine — Recurring.** Care plans + automation/maintenance retainers. The part
   that compounds, replaces the W2 over time, and survives getting fired.

**Positioning rule:** *generalist in capability, specific in offer.* Sell named
products (a website, a chatbot, an automation), never "I can build anything" —
concrete offers convert; "smart generalist builder" does not. The product ladder
gives breadth without the mushy pitch. Mental tagline: **your small business's
outsourced software person.**

**Site implication (drives the copy work):** websites get **lead/equal billing**
with automation. The hero currently reads automation-first ("Custom software & AI
that handle your busywork") → rework to lead with websites + the ladder so cold
traffic searching "small business website" sees itself. Keep the 3×2 services grid
(AI automation · chatbots & assistants · document processing · custom software /
integrations & data sync · websites that work · …) and the Plans & Pricing split
(websites priced up front, software/automation quoted).

## Delivery / hosting & billing models (don't co-mingle)

Pick one **per client** by size; never put a client's workload under your
entity with their card on it (liability + tax + exit mess).

- **Model 1 — your infra, flat fee.** Everything in *your* account
  (Cloudflare/Vercel for sites, your AWS for heavier). Client sees only your
  invoice; you pay the pennies and keep the margin (a static site costs ~$1/mo
  to run vs a $100/mo fee — the margin *is* the business). Use for: static
  sites + light automation. Fat margins, full control.
- **Model 2 — their account, you operate.** Client creates the cloud account,
  their card on it; you get a delegated IAM role to build/run. Infra bill goes
  straight to them; you charge a separate management fee. Use for: corporate
  clients, heavy/variable compute, or compliance (their data stays in-house —
  pairs with the HIPAA BAA story). Zero infra liability for you.

Architecture default = **serverless + managed services** (static front end +
Lambda/Workers + managed DB + Twilio/Resend glue + Claude API). Near-zero ops
= the async-freedom property. **AI API cost is variable**: for small biz,
bundle it into the monthly fee *with usage caps*; for corporate, pass through
on their key. The recurring fee must attach to *a system that runs on its own*,
not to *your availability* — that's the line between passive MRR and 12 bosses.

## Target clients

Boring, established, paper-heavy businesses $1–20M revenue, no tech staff —
**not startups.** Priority niches (healthcare-doc background is the wedge):
medical/dental/vet practices (prior-auth, intake — uniquely credible here),
law firms, insurance agencies, property mgmt, freight/logistics, home
services/construction, accounting firms. Healthcare needs a HIPAA BAA story
(a moat, not a blocker).

## The audit motion

Free 20-min call → one question: "Walk me through what happens from when a
customer first contacts you to when you get paid." Listen for the four tells:
retyping, copy-pasting, manual sorting/routing, chasing. Close to the $500
audit. Deliver 3–5 page report + payback math per workflow. Standing rule:
research "does an off-the-shelf tool already do this?" before recommending
custom — buy-vs-build judgment is the senior skill they pay for.

## Acquisition channels (ranked)

1. Warm network (first clients live here). 2. Local Austin networking
(chamber/BNI). 3. Referral partners (CPAs, bookkeepers, agencies — 10% fees).
4. White-label subcontracting for agencies (best async fit). 5. LinkedIn
content (specific automations). 6. Recruiter inbound (Engine B, passive once
reply template is live). 7. Cold outreach = filler, not foundation.

## C2C / recruiter play

5–6 recruiter pings/week = warm Engine-B leads. Reply to every one: "Not
leaving my W2, but I do deliverable/SOW-based contract work C2C through my
LLC, async, ~20 hrs/wk, $120–150/hr — no embedded-team/standup roles." Agency
recruiters re-tag me; slow drip that compounds. Filter hard: part-time or
project-based only, never staff-aug. LinkedIn: LLC as concurrent position,
"providing services" on, Open-to-Work (contract, recruiters-only).

## Setup status / open items

- [ ] Read employment agreement (moonlighting/IP/non-solicit) — gates public
      LinkedIn. Maybe 1-hr employment-attorney consult.
- [ ] File TX LLC + EIN + business bank account.
- [ ] MSA + SOW templates w/ async **independence clause** (own schedule,
      weekly written status, meetings by mutual agreement ≥48hr ahead).
- [ ] E&O + general liability insurance → COI; W-9 packet for agencies.
- [ ] Domain skudlabs.com, professional email, Calendly (kjs2wp).
- [ ] CPA after first client; home-office deduction (exclusive use); S-corp
      election revisit at ~$80–100k net.

## Brand

Skud Labs (two words in copy; skudlabs.com domain). Site = trust artifact for
referred leads; success = they book the call. Desert-night dark theme. Build
details live in `docs/prompt.md` / `docs/content.md`.

## Guardrails (reread monthly)

Never company time/equipment/accounts. Never bill two parties for the same
hour. Résumé-altitude only on public materials ("a Fortune 15 healthcare
company," no employer names as clients, no $ figures, nothing proprietary).
Consistency in months 2–3 beats intensity — that's the only real failure
mode. Leave one hour/day unclaimed.

## Realistic trajectory

Yr 1: $20–40k, lumpy (most quit here). Yr 2: $60–100k+ → total crosses $250k.
Fractional CTO / productized SaaS are year-2+ emergent moves, not starting
points. Day-90 checkpoint: decide between job offer / promotion leverage /
doubling down, using real data.
