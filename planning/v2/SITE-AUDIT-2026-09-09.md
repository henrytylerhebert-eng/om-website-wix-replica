# Site audit: the remaining suite skills

**Prepared:** 2026-09-09
**Skills applied:** `om-message-coverage-auditor`, `om-visitor-router`, `om-journey-auditor`, `om-seo-geo-architect`, `om-opportunity-audit`, `om-founder-story-builder`, `om-positioning-guard` extended to all pages
**Review type:** Synthetic desk review against page source, canon, sources and the coverage reference. **Not** participant observation and, except where stated, not a rendered inspection.

---

## 1. Message coverage

The two user-confirmed messages are `Opportunity Machine is an economic-development organization.` and `OM takes no equity.` The coverage reference sets a required placement per page type.

**They appear on two of twelve pages.**

| Page | Type | Economic purpose | No equity | Verdict |
| --- | --- | --- | --- | --- |
| `index.html` | homepage | Present, opening experience | Present, immediately after the protected hero, and again at the closing action | **PASS** |
| `contact.html` | booking | Absent, and the reference marks it "where useful" | Present, before intake submission | **PASS** |
| `about.html` | about | **Absent** | **Absent** | **FAIL.** The reference requires economic purpose in the opening experience and no equity in an operating-model section. This is the page whose whole job is institutional definition. |
| `builder-program.html` | program | **Absent** | **Absent** | **FAIL, highest consequence.** The reference requires no equity in the participation summary and again before application submission. This is where enrollment happens. |
| `membership.html` | workspace | **Absent** | **Absent** | **FAIL.** The page carries an `Apply Now` action and a monthly price with no equity disclosure anywhere. Rental fees and eligibility are also not kept separate from startup support, which the reference requires. |
| `ecosystem.html` | partners | **Absent** | **Absent** | **FAIL.** The reference requires economic purpose in the opening experience and forbids implying partner cash invests in startups. |
| `mentors.html` | supporting | Absent | Absent | **NOT MANDATED** by page type, but mentor access is a participation decision. Recommend the participation-summary placement. |
| `talent.html` | supporting | Absent | Absent | NOT MANDATED |
| `community.html` | supporting | Absent | Absent | NOT MANDATED |
| `events.html` | supporting | Absent | Absent | NOT MANDATED |
| `alumni.html` | supporting | Absent | Absent | NOT MANDATED |
| `clarity-check.html` | tool | Absent | Absent | NOT MANDATED. Needs its own contract; it produces per-visitor output. |

**Proposed correction.** Four placements, in consequence order: Builder participation summary, Membership before `Apply Now`, About opening, Ecosystem opening. The repetition rule explicitly preserves useful repetition across entry routes, so this is not redundancy to be trimmed.

**Exit check honoured:** source order only. No claim is made about pixel prominence, fold position, or any conversion effect.

---

## 2. Visitor routes

One record per homepage need. Destination status is stated separately from label approval.

| Visitor need | Route | Source-backed support | Unanswered access question | Next action | Destination status |
| --- | --- | --- | --- | --- | --- |
| `I have an idea I need to test.` | Conversation first | Builder starts at the idea stage, `OM-IDEA-001`, **pending** publication | Is Builder currently open, and at what cost? | Book a call | **Interim.** Local contact mock. |
| `I am building and need a clearer next step.` | Conversation first | None required; the route promises only a conversation | None | Book a call | **Interim** |
| `I need technical support.` | Technical Support page | Three named programs, **approved**. The 70% statement, **approved**. Dryve collaboration, **approved**. | Which routes are open now, who qualifies, is there a cost? | Read, then one inquiry path | **Unknown.** The inquiry path does not exist. |
| `I need experienced guidance.` | Mentors page as explanation only | A mentor network exists. The roster of 20 is **approved**. | Who may request a session? The two pages contradict each other. | Read only | **Blocked.** Do not present a booking action here. |
| `I am not sure where to begin.` | Conversation first | None required | None | Book a call | **Interim** |

Two routes the homepage does not serve, and the guard requires them to be discoverable rather than primary:

- **Prospective mentors and experts.** No route exists from the homepage. Mentors page has no contributor pathway.
- **Partners, funders and officials.** No route exists. This is the gap the proposed Impact and Acadiana destination fills.

**Exit check honoured:** no route admits a visitor, books a session, or promises access.

---

## 3. Journey desk review

Labelled **synthetic desk review**. No participant was observed. Rendered evidence exists only for Home and Contact.

| Task | Can the visitor recognise relevance? | Understand the mechanism? | Learn participation economics? | Find a route? | Know what happens next? |
| --- | --- | --- | --- | --- | --- |
| "I have an idea, is OM for me?" | **Yes.** Hero and identity module do this well. | **Partly.** The broad support sentence is deliberately vague. | **Partly.** No equity is stated; fees are Unknown. | **Yes.** Route 01. | **No.** The call flow does not state who responds or when. |
| "I need technical help" | Yes | **Yes.** Talent names three concrete routes. | **No.** Cost and eligibility absent. | Yes | **No.** No inquiry path exists. |
| "I want a mentor" | Yes | **No.** Two pages state different access rules. | No | Route exists, leads to a contradiction | **No** |
| "What does membership cost?" | Yes | Partly | **Disputed.** A price is published without a cleared source. | Yes | **No.** `Apply Now` has no verified destination. |
| "I am a partner, why should I care?" | **No.** No page addresses this reader in its opening. | No | n/a | **No route** | **No** |

**Failure locations, in order:** the post-click expectation on every route; the mentor-access contradiction; the technical-support inquiry path; the partner route's total absence.

**Exit check honoured:** no unresolved operating policy or link is marked passed, and no simulated persona is presented as research.

---

## 4. Search-answer sets

`om-seo-geo-architect` proposes title, H1 and description **as a set**. Every search question below is a **hypothesis**; no query or interview data exists. No ranking, volume or citation claim is made.

| Page | Title | H1 | Description status | Target question, hypothesis |
| --- | --- | --- | --- | --- |
| Home | `Opportunity Machine \| Startup Support in Lafayette, Louisiana` | Protected hero, combined | Draftable now from approved claims | "Where can a founder in Lafayette get help building a company?" |
| About | `About Opportunity Machine \| Lafayette Startup Support` | Pending `ABOUT-01` | **Blocked** until the economic-development wording is settled | "What is Opportunity Machine?" |
| Technical Support | `Technical Support for Startups \| Opportunity Machine` | Pending `TECH-01` | **Blocked** on program currentness | "Who can help a non-technical founder build a product?" |
| Builder | `Builder Program \| Opportunity Machine` | `BUILD-01`, approved once | **Blocked** on cost, dates, eligibility | "What does the Builder program involve and cost?" |
| Mentors | `Startup Mentors \| Opportunity Machine` | Pending `MENT-01` | **Blocked** on the access rule | "How do I get a startup mentor in Acadiana?" |
| Membership | `Opportunity Machine Membership \| Lafayette` | Pending `MEMB-01` | **Blocked** on price and eligibility | "What does OM membership include?" |
| Founder Stories | `Founder Stories \| Opportunity Machine` | Pending `STORY-01` | **Blocked** on story clearance | "What companies came out of OM?" |
| Community & Events | `Startup Events in Lafayette \| Opportunity Machine` | Pending `COMM-01` | **Blocked** on event inventory | "What startup events are happening in Lafayette?" |
| Ecosystem | `Startup Ecosystem Resources in Louisiana \| Opportunity Machine` | Pending `ECO-01` | **Blocked.** See the geography note. | "Where does OM fit in Louisiana's startup ecosystem?" |
| Contact | `Contact Opportunity Machine \| Lafayette, Louisiana` | Pending `CONT-01` | Draftable, minus a response-time promise | "How do I contact Opportunity Machine?" |
| Impact & Acadiana | Not proposed | Not proposed | **Blocked.** Page not authorised. | "What has OM done for the region?" |
| Clarity Check | Not proposed | `See Where You Stand.` | Needs its own contract first | Unresolved |

**Geography.** `ECO-01` and `ABOUT-03` both widen location language beyond `OM-PLACE-001`, which records Downtown Lafayette and is itself pending. Structured data is **not** proposed for any page: the rule is to describe visible verified information only, and eleven pages have no settled visible copy yet.

**Exit check honoured:** no claim that any of this guarantees discovery, citation, ranking or a rich result. Crawl and index behaviour has not been verified on an authorised site.

---

## 5. Opportunity audit

Strongest competing explanation tried on each. Severity is qualitative with a reason; no predictive score and no financial cost is attached to an unmeasured problem.

| # | Observation | Label | Consequence | Proposed change | Class |
| --- | --- | --- | --- | --- | --- |
| 1 | The two protected messages reach two of twelve pages. | Source finding | The clearest distinction between OM and a coworking space or a conventional accelerator is invisible on the four pages where a visitor actually decides. | Four placements, section 1. | M1 |
| 2 | Every route ends in the same conversation with no stated follow-up. | Source finding | The site's single action is also its least explained moment. A visitor cannot tell whether they just applied for something. | State who responds and in what channel, once the owner is named. | Blocked on owner |
| 3 | `alumni.html` asserts its testimonials are `validated`. | Source finding | A false statement about the evidence itself. Competing explanation: the author meant the videos, which genuinely are cleared. That reading does not survive the plural noun. | Remove the word. Say the videos are cleared for public use, which is true and is already on the page. | M2 |
| 4 | Nine flagged blocks already say `pending sourcing` in the mock. | Source finding | This is the correct pattern and it is being applied unevenly. `events.html` withholds metrics properly while `membership.html` publishes an unsourced price. | Extend the pending-sourcing pattern to price, hours and mentor access. | M1 |
| 5 | Builder describes eight sessions with named deliverables. | Hypothesis | Competing explanation: specificity is what makes a program credible, and removing it leaves a vague page. The stronger reading is that a deliverable stated as what you "leave with" is a guarantee, and guarantees need evidence. Removing the weak claim beats adding a disclaimer. | Convert deliverables to what participants work on. | M1 |
| 6 | `ecosystem.html` reproduces a directory that LA.IO maintains. | Source finding | Two maintenance costs and a guaranteed drift. Competing explanation: an on-site directory keeps visitors on the page. Not worth a stale directory. | Link out. | M1 |
| 7 | The proposed navigation adds an `Impact & Acadiana` label for a page that does not exist. | Source finding | A nav label pointing nowhere is worse than an absent one. | Ship the label only with the page. | M0 |
| 8 | Seven pages end with the same question. | Source finding | A repeated question is not a next step, and it trains a reader to skip the ending. | `GLOBAL-CTA-02`, one action per page. | M1 |
| 9 | Clarity Check is fully built, works, and is reachable only by direct URL. | Source finding | Real built functionality sitting unlinked. Competing explanation: keeping it out of the hero was deliberate and correct. That does not require hiding it entirely. | Decide `CLAR-01`. A route from need 01 is the obvious candidate. | M1 |

**No material change** to report on: the protected hero, the approved claim set, and the contact page's disclosure order. All three are correct as they stand.

---

## 6. Founder story model

`om-founder-story-builder` builds only the supported sequence. For all three approved videos, most of the sequence is missing.

Required: **founder challenge → specific OM contribution → founder action → documented change → regional relevance where documented.**

| Company | Available now | Missing |
| --- | --- | --- |
| GlowSens | Approved video. Two bank records from Noah Bergeron and one from Stefan Arnold, all with unknown source and permission. An attribution note places their meeting at an OM Startup Circle. | Challenge, OM's specific contribution, founder action, any documented change. Permission for every quotation. |
| Mallard Bay | Approved video only. | The entire sequence. |
| Keepers | Approved video only. | The entire sequence. |

**Release status: none of the three is buildable as a story.** What exists is three cleared videos, which is enough for the homepage treatment now in place — video, company name, neutral invitation — and not enough for a story page.

The one documented item worth noting: Stefan Arnold and Noah Bergeron meeting through an OM Startup Circle is a **specific OM contribution** with a source. It is the strongest story seed in the bank, and it needs the founders' permission before it can be told.

**Exit check honoured:** no financial milestone, no job attribution, no generic triumph ending, and no implication that a selected bank makes founder success typical.

---

## 7. Positioning guard, all pages

The four gated wording decisions and two tensions are recorded in `PRE-DECISION-AUDIT.md`. Extending the seven checks to whole pages adds:

- **`about.html` fails `economics`.** No participation economics appear anywhere, and it is the page a funder reads.
- **`membership.html` fails `economics` in the other direction.** It leads with a price and never states the policy that price sits inside.
- **`ecosystem.html` fails `purpose`.** It explains OM's position in a system without explaining why the work matters regionally, which is the one thing that page is well placed to carry.
- **`builder-program.html` fails `proof`.** Its proof is a list of deliverables rather than decisions, tests and what changed.
- **`community.html` fails `recognition`.** It opens with conduct expectations, so the first thing a prospective member reads is a rule.
- **`index.html` and `contact.html` pass all seven.**

**Exit check honoured:** no page rewrite here alters locked copy or an operating fact.

---

## Checks not run

Rendered inspection of any page other than Home and Contact. Participant observation. Query or interview data for any search hypothesis. Crawl and index verification. Live form submission. Any assistive-technology walkthrough.

## Measurements

No analytics or search baseline was reviewed. **No measurements found.**
