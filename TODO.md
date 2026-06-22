# TODO

## ▶ Next tranche — "make the live site convert" (proposed 2026-06-22)
The site is now **live on skudlabs.com**. Biggest gap is no working conversion path:
the form posts nowhere and contact details are fake. In rough priority:

1. **Wire the conversion path (the #1 dependency).** ◑ In progress (2026-06-22):
   - [x] **Calendly booking** is LIVE: primary CTAs (nav, hero) point to the `#book`
     band's "Book a call" button, which opens `calendly.com/kjs2wp` in a new tab; also
     added as a "Book a call" item in the contact-methods column. (Dropped the inline
     embed — the panel-in-panel looked off; a clean link-out is tidier.)
   - [x] Contact form front-end rebuilt: honeypot, validation, AJAX submit,
     success/error states. Wired to POST JSON to an **AWS Lambda Function URL + SES**
     (Kyle's chosen handler). Form degrades to an "email me" message until the URL is set.
   - [ ] **Kyle's action:** deploy the Lambda + SES per `aws/contact-lambda/README.md`,
     then paste the Function URL into `CONTACT_ENDPOINT` in `assets/js/main.js` and push.
     Until then the live form stays gracefully inert (no dead POST).
2. **Real contact details.** Stand up a professional email (replace `hello@skudlabs.com`)
   and swap the placeholder phone `(512) 555-1234`.
3. **Mock testimonials are now public.** Live site is showing **fake** Recent-Work
   testimonials — decide: replace with real ones, soften to "sample work," or remove
   until real ones exist. Fake testimonials on a trust-artifact site are a credibility risk.
4. **(Parallel design track)** Fable 5 hero replay — see `docs/PROCESS.md → Replay`.

## Done — 2026-06-22
- [x] **Deployed to production** — AWS Amplify, git-connected CI/CD, custom domain
  `skudlabs.com` + `www` with auto-managed HTTPS; `amplify.yml` ships only the public
  assets. See README → Deployment.

## Done — 2026-06-16
**Batch 1 (`todo-batch-v1`):** contact section (email/phone/form + chatbot placeholder) + floating chat launcher · stylized nav · credibility stat swap · $175 plan · hi-fi portfolio · Oak-Harbor-style hero · favicon.

**Batch 2 (`todo-batch-v2`):**
- [x] Hero visual → triangle layout (chatbot + automation on top, wider website below)
- [x] Pricing → lump-sum starts at **$4,000**; **$175/mo** marked most popular with **12-month minimum** (no "cancel anytime") + benefit bullets (hosting, 24/7 support, custom design, edits, SEO)
- [x] Favicon → now the **actual navbar emblem** (moon on the correct/left side), lifted from `skud-labs-logo.svg`

**Batch 3 (`todo-batch-v3`):**
- [x] Hero rearranged — website top-left, chatbot top-right, big document/automation tile bottom; more top↔bottom spacing
- [x] Pricing → one **Lump-sum website** ($4,000 + $25/mo hosting, Oak-Harbor inclusions); web app back to **$8,000+**; new third card **Custom AI chatbot** ($3,500+ setup, from $99/mo)

## Still needs your real values (placeholders are live on the site)
- [ ] Contact **email** — placeholder `hello@skudlabs.com`
- [ ] Contact **phone** — placeholder `(512) 555-1234`
- [ ] Contact **form backend** — front-end wired; needs Kyle to deploy the Lambda+SES
  (`aws/contact-lambda/README.md`) and paste the Function URL into `main.js`
- [ ] **Live chatbot** — styled "coming soon" placeholder until you build it
- [ ] **Real client testimonials/work** — Recent Work cards still use mock data
- [ ] Confirm final **prices** ($4k / $6.5k / $9k+ tiers, $175/mo, $100/mo care)
