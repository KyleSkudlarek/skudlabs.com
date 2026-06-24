# Skudworks LLC → Skud Labs — Entity & Tax Notes

> Working notes from the entity/tax planning thread. Supersedes the forward-looking
> 2025 docs in this folder (`Steps to set up business.md`, `LLC Next Steps.md`,
> `Timeline to first client.md`, `Texas LLC Formation.md`), which were written before
> the entity existed and don't reflect the current situation.
>
> **Not legal/tax advice** — this is a game plan to hand to a CPA/EA. Last updated 2026-06-24.

---

## ✅ STATUS UPDATE (after IRS call, 2026-06-24)

- **Called the IRS Business line — confirmed the entity is taxed as a C-CORP, not an S-corp.**
  (The intended S-election apparently never took effect / a corporate classification election landed instead.)
- **No fees or penalties owed.** Confirmed by the IRS account (one unified ledger per EIN — no hidden
  "other department"). It's genuinely definitive because:
  - The scary flat ~$235/mo/shareholder penalty is an **S-corp/partnership** thing (IRC §6699/§6698) — **never applied** (you were never an S-corp).
  - A **C-corp's** late-filing penalty is **5% of *unpaid tax*/month** (§6651) → with **$0 income → $0 tax → $0 penalty.**
- **Plan (unchanged, now cleaner): dissolve the C-corp Skudworks, then form a fresh disregarded "Skud Labs LLC."**
  No abatement drama, no S-corp/5-year-bar issues (those only apply to *revoked S* elections — N/A here).

---

## Key facts & IDs (write these down)

| Item | Value |
|---|---|
| Legal name | **Skudworks LLC** (brand goal is "Skud Labs" — mismatch) |
| Entity type (state) | Domestic **single-member LLC** (TX SOS Certificate of Formation, Form 205) |
| **Federal tax classification** | **C-corporation** (confirmed by IRS, 2026-06-24) — files Form **1120** |
| State | Texas |
| **EIN** | **33-2690671** |
| **SOS file number** | **805843417** |
| Document # | 1439733340002 |
| Formation date | **Jan 5, 2025** |
| Registered agent | Kyle Skudlarek (self), 2223 Waterloo City Ln #236, Austin TX 78741 |
| Management | Member-managed; Kyle = Managing Member |
| SOS status | **"In existence"** (active at the Secretary of State) |
| 2025 activity | **Zero** — no clients, no revenue, no payroll, nothing |
| Penalties owed | **None** (confirmed) |

---

## The situation (TL;DR)

- LLC formed Jan 2025, intended as an S-corp — but the IRS has it as a **C-corp**, and there's **no penalty** because
  a zero-income C-corp's failure-to-file penalty computes to $0.
- A **C-corp is the worst setup** for a solo operator (double taxation) and still owes an annual **Form 1120** even at
  $0 (penalty $0, but technically a missing return) → **dissolve it.**
- Then **form a fresh single-member "Skud Labs LLC"**, which **defaults to disregarded** = simple Schedule C on the
  personal 1040, **no payroll, no separate federal return while dormant**, deduct freely. Keep the S-corp election in
  the back pocket for the *new* entity if/when net profit hits ~$80–100k.

---

## How to dissolve — THREE authorities, in order

The three systems gate each other, so order matters:

- **TX Comptroller** = tax gatekeeper. SOS won't terminate until you're tax-clear here. **Do first.**
- **TX Secretary of State (SOS)** = where the entity legally exists → where you legally **terminate** it.
- **IRS** = file a **final return** + close the EIN (you don't "dissolve" federally).

### Ordered steps

**1. TX Comptroller (first — all $0, via Webfile):**
- File the **Public Information Report** the Comptroller letter requests (first franchise report due **5/15/2026**;
  **no tax due** under the threshold, but the PIR is still required). *Filing this is a required step toward
  dissolution, not separate busywork.*
- Request the **Certificate of Account Status for Dissolution/Termination** (Form **05-359**) — the proof-of-clearance
  document SOS requires. Free. (Can take a little time to issue — start here.)

**2. TX Secretary of State (legally ends the entity):**
- File **Certificate of Termination (Form 651)** via SOSDirect, **attach the 05-359**, pay **$40**.
- Once accepted, Skudworks legally no longer exists.

**3. IRS (close out federal):**
- File a **final Form 1120** (C-corp), check the **"final return"** box — zero activity. Due ~3.5 months after the
  dissolution date.
- Send a short letter to **close the EIN / business account.**

### DIY difficulty
- **Steps 1 & 2: easily DIY** — forms + a $40 fee, all zero-dollar reports.
- **Step 3 (final 1120): the one worth a CPA** — a corporate return has real complexity even at zero. Reasonable split:
  **DIY the state steps, hand the final 1120 to a CPA.**
- Forming **Skud Labs LLC** can happen in parallel anytime (~$300 TX DIY) — it doesn't depend on Skudworks being dead.

---

## CPA quotes received (2026-06-24)

**Mark W. Lee, CPA — ATX.TAX (Austin)** — `mark@atx.tax`
- $250/hr consulting; flat fees for returns/formations.
- 🟢 Honest: said dissolving/reforming "may not be necessary" (was assuming S-corp + a possible DBA fix).
- Investigate 2553/CP261 status: ~$599 (needs POA) — *moot now; resolved via free IRS call.*
- **1120-S min flat fee $1,000 even for a zero return** (high). (For the C-corp it'd be a final **1120** instead.)
- Lukewarm on abatement ("limited") — moot, no penalty.
- Bare-bones LLC + S-election: $750 ($500 formation + $250 election). ⚠️ Don't want an S-election on the new LLC.
- Doesn't keep books for clients (fine). $250 for a 1-hour consult.

**Dimov Tax (national, online)** — `info@dimovtax.com`
- Reputable; didn't quote yet — sent standard intake to scope the **personal 1040** (RSUs/equity, filing status,
  spouse income, total income, crypto/foreign/rental). Gave the same correct S-election check. Answer to get a quote.

### Pricing expectations (Austin = upper half)

| Item | Pro fee (typical) | DIY option |
|---|---|---|
| Final **1120** (zero C-corp return) | ~$800–1,000 | hard to DIY well |
| Dissolve Skudworks (state) | $200–600 + **$40 SOS** | **DIY the $40 termination** |
| Form Skud Labs LLC | $300 state + $100–300 markup | **$300 DIY (easy)** |
| Annual 1040 + Schedule C + investments | $400–900/yr | TurboTax (current) |

🚩 **Watch for:** monthly bookkeeping/“fractional CFO” pushed as required (you have **no customers** — decline);
“catch-up bookkeeping” on a zero-activity entity; paying to *plan* an S-corp you're dissolving; big formation markups.
✅ **Green flags:** itemized flat fees, cheap/free diagnostic, happy to let you DIY the cheap parts, à la carte advisory.

---

## CPA screening scripts

**Concise phone intro ("what are you looking for?"):**
> Hi — I'm looking for help **dissolving an inactive single-member LLC**, **forming a new one**, and an **ongoing tax
> advisor for both my business and personal taxes** going forward. There's also a bit of **IRS/state cleanup** on the
> old entity. Is that something you handle?

**Full email opener:**
> I have a single-member TX LLC, **Skudworks LLC** (EIN 33-2690671), formed Jan 2025, **zero activity**. The IRS has it
> classified as a **C-corp** (the intended S-election never took), and confirmed **no penalties owed**. I want to
> **dissolve it cleanly** (final 1120 + TX termination) and **form a new disregarded LLC, Skud Labs.**
>
> Going forward I want **one person for the cleanup and ongoing advisory** — someone who'll get me set up to **track
> expenses and deductions properly** (home office, software subscriptions, bookkeeping) and advise as I grow. I'd also
> want **my own independent access to my accounts** and to **own my QuickBooks subscription**, with access to any tax
> records filed on my behalf. Please give me a **flat-fee quote** for the cleanup and tell me how you structure ongoing
> advisory — I don't need monthly bookkeeping yet.

**Optional personal-return add-on:**
> I currently do my own personal taxes in TurboTax and I'm comfortable with it, including investment sales (Fidelity
> 1099-Bs). But since the LLC's income/deductions flow onto my personal return as a **Schedule C**, I'm open to having
> you take over my full **personal 1040** (Schedule C + investments + W-2) so it's all handled together. Can you include
> an **optional quote for preparing my annual personal return** alongside the cleanup and advisory?

**Anti-lock-in questions:**
> - Do you use a **secure client portal**? Which one?
> - Will I get **copies of all filed returns** and confirmations as you file them?
> - What does your **engagement letter** say about **return of records / offboarding** if I leave?
> - If I use QuickBooks, do **I own the subscription** and add you as accountant, or do you host it?
> - Can I **export my data** anytime?

**Independent access (IRS + Comptroller):**
> I want my **own independent access** to my accounts, not depend on yours. Can you (1) **walk me through setting up my
> IRS Business Tax Account**, and we'll file a **Form 2848/8821** so you have your own access; and (2) **give me the
> entity's TX Comptroller Webfile number** so I can register my own login? I want to see all filings myself.

---

## CPA relationship — the model (so you're not locked in)

- You're the **client**; the entity, money, and data are **yours**. A CPA/EA is hired help, not an owner of your stuff.
- **You never hand over an IRS login** — they get access via a **2848 (POA)** or **8821** you sign (revocable anytime).
- **They never get money-movement access** to your bank — read-only visibility via accounting software at most.
- **Own these yourself = zero lock-in:** your **QuickBooks/Wave subscription** (add them as accountant), your **own
  IRS Business Tax Account + TX Comptroller Webfile login**, and a **folder with copies of every filed return.**
- Protections by default: licensing (CPA = state board, EA = IRS), AICPA duties (confidentiality, must return client
  records), the **engagement letter** (read it), and the right to fire them and walk with your data.
- **Type to hire:** small-business **CPA or EA** doing **advisory/planning** (not just once-a-year prep). EA = same IRS
  authority, often cheaper. Search: "small business CPA advisory," "self-employed/solopreneur CPA," "Schedule C."

---

## Deductions — quick reference (for the new entity / going forward)

- **You don't need to be profitable to deduct.** A real business (profit motive, not a hobby) can run a loss that even
  offsets W-2 income. The gate is profit *motive* + being operational, not profit itself.
- **A single-member LLC isn't a separate return** — it's a **Schedule C on your personal 1040** (one reason to give the
  whole 1040 to one CPA).
- **Pre-launch costs = start-up costs (IRC §195):** deduct up to $5,000 year one, amortize the rest over 15 yrs.
- **You don't need an LLC to deduct** — a sole prop takes the same Schedule C deductions. The LLC buys *liability
  protection*, not write-offs.
- **Home office:** must be **exclusive + regular use** (that space used *only* for business). Methods: simplified
  ($5/sqft, max $1,500) or actual-expense (% of home costs / rent). Can't create a loss with it.
- **Mixed activities** (Etsy, photography, Skud Labs): allocate expenses to the business that incurred them; genuinely
  separate trades each get their own Schedule C. **Hobby-loss risk** if an activity never profits.

---

## Where to check what (THREE separate systems)

| Question | System | Link / contact |
|---|---|---|
| Entity exists / type / filing history | **TX Secretary of State (SOSDirect)** | sosdirect.sos.state.tx.us → Business Organizations → Find Entity. File #805843417 |
| TX franchise standing / PIR / termination clearance | **TX Comptroller** | https://comptroller.texas.gov/taxes/franchise/account-status/ · https://mycpa.cpa.state.tx.us/coa/ |
| Federal classification / returns / balances | **IRS** | **800-829-4933**, or business account transcript at irs.gov |

---

## Key dates

| Date | Item |
|---|---|
| Jan 5, 2025 | Skudworks LLC formed |
| Mar 15 / Apr 15, 2026 | (C-corp) 1120 for 2025 technically due — **$0 penalty**; handle via final return |
| **May 15, 2026** | TX first franchise report / **PIR due** — file as part of dissolution clearance |
| 2026-06-24 | IRS call: confirmed **C-corp, no penalties owed** |

---

## Next steps (ordered)

1. ~~Confirm classification with IRS~~ ✅ **Done — C-corp, no penalty.**
2. **TX Comptroller:** file the **PIR** + request **Certificate of Account Status for Termination (05-359)**.
3. **TX SOS:** file **Certificate of Termination (Form 651)** + attach 05-359, pay **$40**.
4. **IRS:** file **final 1120** (mark "final") + letter to **close the EIN** — the part worth a CPA.
5. **Form "Skud Labs LLC"** fresh (disregarded). New EIN, business bank account, Stripe. (Can run in parallel.)
6. Engage a CPA/EA (Mark/ATX consult and/or Dimov quote) using the scripts above; lock in independent access.
7. Set up simple bookkeeping (separate account + QuickBooks Solopreneur/Wave); start tracking deductions.
8. Keep the S-corp election in the back pocket for the new entity at ~$80–100k net.
