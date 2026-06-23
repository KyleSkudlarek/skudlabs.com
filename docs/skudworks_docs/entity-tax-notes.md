# Skudworks LLC → Skud Labs — Entity & Tax Notes

> Working notes from the entity/tax planning thread. Supersedes the forward-looking
> 2025 docs in this folder (`Steps to set up business.md`, `LLC Next Steps.md`,
> `Timeline to first client.md`, `Texas LLC Formation.md`), which were written before
> the entity existed and don't reflect the current situation.
>
> **Not legal/tax advice** — this is a game plan to hand to a CPA/EA. Last updated 2026-06-23.

---

## Key facts & IDs (write these down)

| Item | Value |
|---|---|
| Legal name | **Skudworks LLC** (note: brand goal is "Skud Labs" — mismatch) |
| Entity type | Domestic **single-member LLC** (confirmed via SOS Certificate of Formation, Form 205) |
| State | Texas |
| **EIN** | **33-2690671** |
| **SOS file number** | **805843417** |
| Document # | 1439733340002 |
| Formation date | **Jan 5, 2025** |
| Registered agent | Kyle Skudlarek (self), 2223 Waterloo City Ln #236, Austin TX 78741 |
| Management | Member-managed; Kyle = Managing Member |
| SOS status | **"In existence"** (active at the Secretary of State) |
| 2025 activity | **Zero** — no clients, no revenue, no payroll, nothing |

---

## The situation (TL;DR)

- An LLC was formed Jan 2025. An **S-corp election (Form 2553) may have been filed** — but it's
  **unconfirmed whether it ever took effect.** This is the single open question that drives everything.
- **An S-corp must file Form 1120-S every year it exists — even with $0 activity.** Profit is irrelevant.
  A plain (disregarded) LLC that sits has **no** filing requirement and **cannot** incur this penalty.
- If the S-election took effect, a **late 1120-S** (due 3/15/2026) is now overdue and accruing a penalty.
- The S-corp was **premature** — its tax savings only beat the overhead at ~$80–100k net profit.
  At $0–40k it's pure cost (and forces payroll the moment money is drawn — see below).

## ⚠️ Open question to resolve FIRST: did the 2553 take effect?

The SOS site and Comptroller will **never** show this — S-election status is **IRS-only**. Check via:
1. **Call IRS Business line: 800-829-4933** — give EIN, ask *"Is this EIN on file as an S-corp?"* (definitive)
2. Look for a **CP261 notice** ("Acceptance as an S-Corporation") in 2025 mail. None received ⇒ likely never took.
3. Pull the **business account transcript** at irs.gov.

- **If 2553 never took effect** → it's already a plain disregarded LLC → **no 1120-S ever required → no penalty.** Best case.
- **If it did** → file the late 1120-S + request abatement (see below), then dissolve clean.

---

## The decision / game plan

**Recommended path: dissolve Skudworks, form a fresh "Skud Labs LLC" (disregarded).** Why:
- Fixes the brand name (Skud Labs is the goal anyway).
- A new LLC **defaults to disregarded** = simple Schedule C, **no payroll, no annual federal return while dormant**, deduct freely.
- **Preserves the future S-corp option cleanly** — a brand-new entity can elect S-corp anytime later
  (when net profit hits ~$80–100k), with **no 5-year bar**.
- Sheds the Skudworks baggage (premature S-election).

**Fallback (Option C):** keep Skudworks, revoke the S-election + file Form 8832 → disregarded.
Acceptable, but Skudworks then can't be your S-corp vehicle for 5 years, and you keep the wrong name.

### Two rules that explain the recommendation
- **5-year re-election bar (IRC §1362(g))** attaches to the **specific entity that revoked** — i.e., Skudworks.
  A **new, separate "Skud Labs LLC"** (own EIN) is unaffected and can elect S-corp anytime. The bar follows the entity, not you.
- **S-corp payroll trigger:** an S-corp must run a **reasonable W-2 salary** before the owner draws money out
  while performing services. With near-zero costs, **you're profitable on client #1** — so keeping S-corp means
  **payroll machinery kicks in essentially with your first paying client.** Big reason not to keep S now.

---

## Penalty facts (the "$235/month" thing)

- **Source: IRC §6699.** ~**$235–245 per shareholder, per month** (inflation-adjusted) the 1120-S is late.
- **Caps at 12 months.** 1 shareholder max ≈ **$2,940**. (2025 return ~3 months late ≈ ~$735 as of now.)
- **This penalty ONLY exists for S-corps/partnerships** — not regular LLCs. (That's the trap.)
- **Almost certainly wipeable** via **First-Time Abatement** (clean 3-yr history) or **reasonable cause**
  (zero-revenue first year is a strong case). Dissolving does **not** by itself erase a past-due penalty — you
  file the return + abate.

---

## Where to check what (THREE separate systems)

| Question | System | Link / contact |
|---|---|---|
| Entity exists / type / filing history / registered agent | **TX Secretary of State (SOSDirect)** | sosdirect.sos.state.tx.us → Business Organizations → Find Entity (~$1/look). File #805843417 |
| TX franchise-tax standing / "right to transact business" / PIR delinquency | **TX Comptroller** | https://comptroller.texas.gov/taxes/franchise/account-status/ · search: https://mycpa.cpa.state.tx.us/coa/ |
| **S-corp election status + federal 1120-S penalty** | **IRS (only)** | Call **800-829-4933**, or CP261 letter, or business account transcript at irs.gov |

> SOS = "is it a live LLC." Comptroller = TX tax side. **IRS phone = the S-corp answer.** Only the IRS closes the loop.

---

## Can I do this myself? Yes (legally)

No law requires a CPA — you can file the 2553/revocation/8832/1120-S/dissolution yourself. A credential is only
needed for someone *else* to file *for* you or *represent* you at the IRS. **DIY-safe:** revocation letter, 8832,
TX PIR, dissolution. **Worth paying for:** IRS status confirmation + the **late 1120-S + abatement letter** (clumsy
requests get denied) + the strategic keep/revoke/dissolve call.

### To dissolve Skudworks in Texas (DIY)
1. File any final/late **1120-S** + abatement (the one step worth a pro).
2. File final **TX franchise report + PIR**, then request **Certificate of Account Status (Comptroller Form 05-359)**.
3. File **Certificate of Termination (SOS Form 651)** — **$40** — attach the 05-359.
4. **Close the EIN** (letter to IRS; check "final return" box on the 1120-S).

---

## CPA / EA — what to hire and how

- **Type:** small-business **CPA or EA** who does **advisory/planning**, not just once-a-year prep. EA = same IRS
  authority, often cheaper. Want **one person for cleanup + ongoing**.
- **Search keywords:** "small business CPA advisory," "tax planning," "self-employed / solopreneur CPA,"
  "LLC S-corp tax strategy," "Schedule C," "freelancer accountant."
- **Austin options (vet each, ask flat fee):** SDO CPA · Gray & Associates CPA · ATX.TAX (Atkins & Associates) ·
  or a local EA. (Lean toward the advisory-oriented ones for the ongoing relationship.)
- **Cost guardrails:** consult ~$150–400 (some free); cleanup flat ~$300–800. **Red flags:** quotes far above that
  without reason, or pushing a $300–500/mo bookkeeping/CFO retainer. At $1–2k/mo expenses you don't need monthly
  bookkeeping yet — a separate bank account + QuickBooks Solopreneur/Wave + a quarterly/annual touchpoint is plenty.

### Opener to send a CPA/EA
> I have a single-member TX LLC, **Skudworks LLC** (EIN 33-2690671), formed Jan 2025, **zero activity so far**.
> I think an S-election may have been filed — unsure it took. First, **confirm status, any penalties/deadlines**,
> and if there's a penalty, pursue **abatement given there was no business activity** — likely ending in
> **dissolving it** since I'm rebranding to a new LLC.
>
> Beyond that, I'm starting a software/consulting business and want an **ongoing advisor** for the basics:
> **home-office deduction** (a room used exclusively for work — what records to keep), **deductible software
> subscriptions**, clean bookkeeping setup, and tax strategy as I grow. I'd like the **same person for cleanup and
> going forward.** Please quote a **flat fee** for the cleanup and tell me how you structure ongoing advisory.
> I don't need monthly bookkeeping yet.

---

## Deductions — quick reference (for the new entity / going forward)

- **You don't need to be profitable to deduct.** A real business (profit motive, not a hobby) can run a loss that
  even offsets W-2 income. The gate is profit *motive* + being operational, not profit itself.
- **Pre-launch costs = start-up costs (IRC §195):** deduct up to $5,000 year one, amortize the rest over 15 yrs.
- **You don't need an LLC to deduct** — a sole prop takes the same Schedule C deductions. The LLC buys *liability
  protection*, not write-offs.
- **Home office:** must be **exclusive + regular use** (that space used *only* for business). Methods: simplified
  ($5/sqft, max $1,500) or actual-expense (% of home costs / rent). Can't create a loss with it.
- **Mixed activities** (Etsy, photography, Skud Labs): allocate expenses to the business that incurred them; genuinely
  separate trades each get their own Schedule C. **Hobby-loss risk** if an activity never profits — don't deduct
  against a non-business.
- **One LLC can hold multiple DBAs/ventures**, but it also blends liability across them. Fine at hobby scale; give
  Skud Labs its own entity once it carries real client risk.

---

## Key dates

| Date | Item |
|---|---|
| Jan 5, 2025 | Skudworks LLC formed |
| ~Mar 22, 2025 | 2553 S-election deadline (75 days from formation) — **status unconfirmed** |
| Mar 15, 2026 | 1120-S due for 2025 (**if** S took effect) — **now overdue** |
| May 15, 2026 | TX Franchise/PIR due — **now overdue** (~$50 late, minor) |

---

## Next steps (ordered)

1. **Confirm the S-election** — call IRS 800-829-4933 (the gate; tells you if there's a fire).
2. Run the free **Comptroller** search for TX standing.
3. **Engage a small-biz CPA/EA** (Austin list above) with the opener — cleanup + ongoing.
4. Per their advice: **clean up 2025** (late 1120-S + abatement if needed; final TX PIR), then **dissolve Skudworks**.
5. **Form "Skud Labs LLC"** fresh (disregarded). New EIN, business bank account, Stripe.
6. Set up simple bookkeeping (separate account + QuickBooks Solopreneur/Wave); start tracking deductions.
7. Keep the S-corp election in the back pocket for the new entity at ~$80–100k net.
