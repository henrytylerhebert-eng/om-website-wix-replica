# Proof ledger

**Prepared:** 2026-09-09
**Skills applied:** `om-proof-auditor`, `om-testimonial-selector`, `om-proof-library`
**Scope:** Every page in this repository. Claim kind, support, permission, decision, and the exact evidence needed.
**Method:** Desk review of page text against `canon.json`, `sources.json` and `testimonials.json`. Not participant research and not a rendered inspection.

## Correction to the page trees

`PAGE-TREES-V2.md` imported the 2026-09-09 brief's diagnosis of the **Wix site** and presented parts of it as the state of this **mock**. That was wrong in three places, and the mock is in better shape than the trees implied.

| Trees row | Actual mock state |
| --- | --- |
| Events shows `400+`, `$40K+`, `92%` | **Not in the mock.** `events.html` renders "Benchmarks pending sourcing" and "Event metrics return once sourced with an as-of date". Those figures are on the Wix site. |
| Events has `TBD` content | **Not in the mock.** The only `TBD` string is `JTBD`, the Jobs To Be Done framework name in a Builder session title. |
| `Get Notified` loops to the homepage | **Not in the mock.** No such control exists here. Wix only. |
| Mentors publishes 41 profiles | **26 in the mock**, against an approved roster of 20. The 41 is the Wix figure. |

The mock also carries its own claim-flag review aid, toggled with the `c` key, with nine flagged blocks tagged `Stat pending sourcing`, `Impact numbers pending`, `Benchmarks pending sourcing` and `Placeholder, awaiting real spotlight`. Somebody already did a claim-guarding pass here. From this point on, every row below states whether it is a **mock** finding or **Wix only**.

## Testimonial position

The bank holds **15 statements from 10 speakers**. Across all 15 records:

- `publication_permission_status`: unknown
- `original_source_status`: unknown
- `editing_permission_status`: not_granted
- `publication_approval.status`: pending

Per governance, unknown permission is **not** permission denied, and it blocks release rather than internal work. So drafting continues; nothing quotable ships.

`om-testimonial-selector` output for every page that wants a quote: **no eligible record.** Not because the statements are weak, but because no record has a confirmed original source or granted permission. The three GlowSens-adjacent records are `T004` and `T005` (Noah Bergeron) and `T013` (Stefan Arnold), each a single speaker and a different sentence.

Two context separations the canon already fixed, and which must not be re-merged:

1. Jordy Davidson's $1M seed-round figure is a **user-supplied contextual claim**, not words in his quotation.
2. Stefan Arnold's short quote does **not** identify the meetup. That context lives in the attribution note.

The uncleared homepage quotation removed in `OM-V2-M2-002` merged two speakers into one utterance, which is the same conflation in a third form.

## Claim ledger

Kinds are categories, not quality tiers. `UNKNOWN` means support is missing, `DISPUTED` means sources conflict, `BLOCKED` means a release dependency stands.

### Approved and usable as written

| Page | Claim | Kind | Decision |
| --- | --- | --- | --- |
| talent, builder | `Over 70% of the founders we work with don't have technical backgrounds.` | institutional fact | **APPROVED.** Exact wording only. Appears on two pages; that is one claim used twice, not two data points. |
| talent | Dryve UL Lafayette class-project collaboration via OM | activity | **APPROVED** exactly as recorded. No added outcome. |
| index, alumni | GlowSens, Mallard Bay, Keepers videos | attributed experience, media | **APPROVED as media.** Clearance covers the embed, not the sentences around it. |
| index, about | `Opportunity Machine is an economic-development organization.` | institutional fact | **APPROVED.** Establishes no agency status, funding share, or regional effect. |
| index, about, contact | `OM takes no equity.` | institutional fact | **APPROVED.** Establishes no absence of fees, conditions, or eligibility rules. |
| index | `We support people building technology, research-driven, and innovative companies.` | institutional fact | **APPROVED** today as `OM-AUDIENCE-001`, without geography. |
| index | `OM brings together programs, people, and practical support for founders building innovative companies.` | institutional fact | **APPROVED** today as `OM-SERVICES-BROAD-001`. |

### Mock findings, highest risk first

| Page | Text | Kind | Support | Decision |
| --- | --- | --- | --- | --- |
| `alumni.html` | `validated testimonials` | clearance claim | **DISPUTED** | **BLOCKED, remove now.** The page asserts its testimonials are validated. Zero of 15 records have a confirmed source or granted permission. This is a false statement about the evidence itself, which is worse than an unsupported claim about OM. |
| `alumni.html` | `The Results` and `We do not deal in speculative projections.` | outcome framing | UNKNOWN | **BLOCKED.** Promises results the page then does not evidence. Nothing on the page reports a measured result. |
| `alumni.html` | `Noah Bergeron and Stefan Arnold built parallel founder paths through Builder` | company milestone, participation | UNKNOWN | **BLOCKED.** A participation and narrative claim about two named people. Needs a record and their permission. |
| `mentors.html` | 26 published profiles | activity | **DISPUTED** | **BLOCKED.** Approved roster is 20. Six profiles beyond it need clearance or removal. |
| `membership.html` | `Standard memberships begin at $100 / month (per person).` | operating fact | UNKNOWN | **BLOCKED.** Canon unknown `U-FEES`. Needs price, billing unit, inclusions, and an as-of date. |
| `membership.html` | `24/7 Flexible Workspace` | operating fact | UNKNOWN | **BLOCKED.** Canon unknown `U-ACCESS`. |
| `membership.html` | `Access to OM Mentors` | operating rule | **DISPUTED** | **BLOCKED.** Contradicts the Mentors page. Canon unknown `U-ACCESS`. |
| `membership.html` | `Apply Now` beside `Book a Call` | route | UNKNOWN | **BLOCKED.** A secondary application action needs a verified offer and destination. Neither exists. |
| `builder-program.html` | `Validate your assumptions`, `Validated assumptions & a GTM strategy` | output | UNKNOWN | **REMOVE.** `validated` has no agreed definition here and implies an external standard was met. |
| `builder-program.html` | `MVP Is Live, Seeking Traction`, `Traction + Revenue`, `Prove the math` | output | UNKNOWN | **REMOVE or define.** `traction` is on the banned list until defined. |
| `builder-program.html` | `An investor-ready pitch`, `A shipped, working MVP` | output guarantee | UNKNOWN | **BLOCKED.** States what a participant leaves with. That is a guaranteed deliverable claim. |
| `builder-program.html` | Session titles, eight sessions | operating fact | **DISPUTED** | **BLOCKED.** Session 3 conflicts with the approved curriculum source. Canon unknown `U-COHORT`. |
| `about.html` | `premier`, `elite`, `proven frameworks` | positioning | UNKNOWN | **REMOVE.** Prestige and proof words with no comparative evidence. `om-positioning-guard` forbids describing peer differences as superiority without comparative evidence. |
| `community.html` | `OM is not here to hand out funding; we are here to build the viability that makes funding possible.` | operating claim in quotation styling | UNKNOWN | **BLOCKED.** Unattributed blockquote. Asserts what OM does and does not do, with no source record. |
| `community.html` | `always aimed at moving the needle` | absolute | UNKNOWN | **REMOVE.** `always` is an absolute the copy rules prohibit. |
| `ecosystem.html` | `the live, always-current version` describing LA.IO | third-party claim | UNKNOWN | **REMOVE the absolute.** OM cannot warrant another organization's data currency. Link to it without characterising its freshness. |
| `ecosystem.html` | NovaSpark, King Crow Studios, Natrx, Intralox stories | company milestone | UNKNOWN | **BLOCKED.** Each needs its own record and permission. |
| `talent.html` | `Go from idea to launch.` | outcome | UNKNOWN | **REMOVE.** Promises a launch this page does not deliver. |
| `mentors.html` | `[Mentor Name]` spotlight | placeholder | n/a | **REMOVE before any public build.** Self-labelled `Placeholder, awaiting real spotlight`, so it is not passed off as real. |

### Clean

| Page | Note |
| --- | --- |
| `events.html` | **PASS.** Metrics are withheld behind "Benchmarks pending sourcing" with an as-of-date requirement stated. This is the pattern the other pages should copy. |
| `index.html` | **PASS** after the `OM-V2-M2-002` removal. No claim on the page lacks a record. |
| `contact.html` | **PASS.** No claims beyond approved contact identity and the no-equity disclosure. |
| `clarity-check.html` | Not audited for claims. The interactive logic produces per-visitor output rather than public claims, and needs its own pass. |

## Exact evidence needed, by owner

| Evidence | Unblocks | Owner |
| --- | --- | --- |
| One testimonial with confirmed original source and written publication permission | Any quotation anywhere | Tyler |
| Membership price, billing unit, inclusions, as-of date | 3 membership rows | Program owner |
| Workspace hours and access rule | 1 membership row | Program owner |
| One governing mentor-access rule | 2 rows across two pages | Tyler |
| Approved roster decision for the 6 extra mentor profiles | 1 mentors row | Tyler |
| Current Builder session titles and count, reconciled to the curriculum source | 2 builder rows | Program owner |
| A definition for `traction` and `validated`, or their removal | 5 builder rows | Tyler |
| Records and permissions for 4 ecosystem company stories and 2 alumni founder claims | 6 rows | Tyler |

## Exit checks

`om-proof-auditor`: publication does not pass on source existence or testimonial praise alone. No row above is marked publishable on that basis.
`om-testimonial-selector`: no uncleared testimonial enters a release-ready page. None is proposed for any page.
`om-proof-library`: every stored quote matches the original snapshot. No quotation was edited, spliced, or normalised in this pass; the one uncleared quotation was removed rather than rewritten.

## Measurements

No analytics or search baseline was reviewed. **No measurements found.**
