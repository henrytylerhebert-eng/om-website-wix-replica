# Site 2.0 Page Trees and Language Workshop

**Prepared:** 2026-09-09
**Branch:** `codex/om/mock-site-v2`
**Scope:** Structure and language decisions for every destination. No page is built from this document.
**Excluded:** Live 1.0 site changes, publication, Airtable, analytics configuration, and any unapproved public claim.

## How to read a tree

Each page has two trees.

**Current** is what the 2.0 mock actually renders today, with defects marked. **Updated** is the recommended wireframe. Node ids are stable so copy decisions can be recorded against them.

Every node carries a status:

| Status | Meaning |
| --- | --- |
| `Approved` | Cleared in the website canon. Do not reword without a new approval. |
| `Observed` | Appears on a current public or Wix page. Observation is not approval. |
| `Proposed` | Recommended copy or routing awaiting Tyler's approval. |
| `Unknown` | The responsible owner has not confirmed it. It stays out of public copy. |
| `Blocked` | A named gate must clear first. |
| `Remove` | Currently on the page and should come off. |

## Global shell

### Current navigation

```
nav (current)
├── About OM            → about.html
├── Builder Program     → builder-program.html
├── Membership          → membership.html
├── Mentors             → mentors.html
├── Community           → community.html
├── Events              → events.html
├── Ecosystem           → ecosystem.html
├── Talent              → talent.html
├── Alumni              → alumni.html
└── Book a call         → contact.html          [interim destination]
```

Nine labels, eight of which require the visitor to already know an OM program name.

### Updated navigation

```
nav (proposed)
├── Start Here                → homepage need router, or a Start Here page
├── Programs                  → builder-program.html
├── Mentors & Experts         → mentors.html
├── Technical Support         → talent.html
├── Community & Events        → community.html + events.html          [merge decision open]
├── Workspace & Membership    → membership.html
├── Founder Stories           → alumni.html
├── Impact & Acadiana         → not built                             [Proposed page]
├── About                     → about.html
└── Book a call               → one canonical scheduling flow         [Unknown]
```

`GLOBAL-NAV-01` **Proposed.** Labels a visitor can read before learning OM's vocabulary.
`GLOBAL-NAV-02` **Decision open.** Community and Events become one destination or stay two. The brief pairs them in one label; the mock has two thin pages.
`GLOBAL-NAV-03` **Remove.** `Ecosystem` leaves the top level. Its founder-useful content moves under Technical Support and Impact & Acadiana; its directory links out to LA.IO.

### Shared footer and repeated CTA

```
footer (current)
├── brand + address
├── Explore column
├── Contact column
└── legal row                                   [Privacy and Cookies both href="#"]
```

`GLOBAL-CTA-01` **Remove.** `Ready to build your momentum?` closes seven pages identically. A repeated closing question is not a next step.
`GLOBAL-CTA-02` **Proposed.** Each page closes with one action matched to that page's reader. Recommended per-page endings are in each tree below.
`GLOBAL-LEGAL-01` **Blocked.** Privacy and Cookies links resolve to `#`. Either supply the pages or remove the links before any publication.

---

## 1. Home

**Status:** Built and verified on this branch. Booking destination remains the one open gate.

### Updated tree (as built)

```
home
├── HOME-01  hero                                        [Approved, protected]
│   ├── approved video
│   ├── fixed phrase   "For founders who…"
│   ├── rotating statement (5 approved endings)
│   └── primary action "Book a call"                     [destination Unknown]
├── HOME-02  opening identity                            [Approved + Proposed]
│   ├── eyebrow   "Momentum for Startups"                [Approved]
│   ├── h2        "Startup support with a regional purpose."   [Proposed]
│   ├── line 1    "Opportunity Machine is an economic-development organization."  [Approved]
│   ├── line 2    "We support people building technology, research-driven, and innovative companies."  [Proposed]
│   └── line 3    "OM takes no equity."                  [Approved]
├── HOME-03  need router                                 [Proposed]
│   ├── 01  "I have an idea I need to test."             → call flow
│   ├── 02  "I am building and need a clearer next step." → call flow
│   ├── 03  "I need technical support."                  → talent.html
│   ├── 04  "I need experienced guidance."               → mentors.html
│   └── 05  "I am not sure where to begin."              → call flow
├── HOME-04  support summary                             [Proposed, broad]
│   └── "OM brings together programs, people, and practical support for founders building innovative companies."
├── HOME-05  founder perspectives                        [Approved media]
│   ├── GlowSens video + attributed quote
│   ├── Mallard Bay video
│   └── Keepers video
└── HOME-06  final invitation                            [Proposed]
    ├── h2 "Tell us what you're building."
    ├── "OM takes no equity."                            [Approved]
    └── action "Book a call"                             [destination Unknown]
```

### Language workshop

| Node | Line | Status | Decision |
| --- | --- | --- | --- |
| HOME-02 | `Startup support with a regional purpose.` | Proposed | Approve, or supply the regional-purpose wording OM wants to own. |
| HOME-02 | `We support people building technology, research-driven, and innovative companies.` | Proposed | Approve as the audience formulation, or replace once. It then repeats on About and Impact. |
| HOME-04 | `Practical support for the decision in front of you.` | Proposed | Approve the heading. |
| HOME-06 | `Tell us what you're building.` | Proposed | Conflicts with the Contact H1 below. Pick one owner for this sentence. |

---

## 2. About

### Current tree

```
about (current)
├── hero  h1 "About Opportunity Machine."
├── Meet the Team
├── Board of Directors
└── "Want to learn more?"
```

Three of the four blocks are the organization talking about itself. `premier` and `elite` appear in the body.

### Updated tree

```
about
├── ABOUT-01  h1 "Built to help founders move forward."           [Proposed]
├── ABOUT-02  plain definition of Opportunity Machine             [Approved core]
│   ├── "Opportunity Machine is an economic-development organization."  [Approved]
│   └── "OM takes no equity."                                     [Approved]
├── ABOUT-03  who OM is designed to support                       [Proposed]
├── ABOUT-04  how support works                                   [Blocked]
│   └── programs, people, connections, technical support, place
├── ABOUT-05  why this work matters to Acadiana                   [Proposed positioning]
├── ABOUT-06  history and founding context                        [Observed]
├── ABOUT-07  staff and governance                                [Partly Unknown]
│   ├── names                                                     [Approved public]
│   └── titles for Katherine Nebel and Theresa Nunez              [Unknown]
├── ABOUT-08  partners                                            [Blocked]
│   └── logo permission and contribution labels unresolved
└── ABOUT-09  route onward: founder support, partnership, contact [Proposed]
```

### Language workshop

| Node | Line | Status | Decision |
| --- | --- | --- | --- |
| ABOUT-01 | `Built to help founders move forward.` | Proposed | Approve or replace. |
| ABOUT-01 | `premier`, `elite` | Remove | Prestige words carry no evidence. Remove without replacement. |
| ABOUT-03 | `OM is for people building technology, research-driven, and innovative companies in Acadiana.` | Proposed | Approve, or confirm whether geography limits eligibility. Currently `Unknown`. |
| ABOUT-04 | Any list of what OM provides | Blocked | Same gate as the homepage service facts. Broad sentence only until confirmed. |
| ABOUT-05 | Regional-purpose paragraph | Proposed | Needs the approved economic-development boilerplate. Same decision as HOME-02. |
| ABOUT-07 | Staff titles | Unknown | Katherine Nebel and Theresa Nunez confirm their own titles. |

---

## 3. Technical Support (currently Talent)

**Note:** This page holds the most approved factual material of any inner page.

### Current tree

```
talent (current)
├── hero  h1 "Go from idea to launch."          [overclaims: this page does not launch a company]
├── The Programs
│   ├── Emerging Tech Internship
│   ├── Technical Expert in Residence
│   └── Other Partnerships                      [vague]
└── "Have a technical gap to fill?"
```

### Updated tree

```
technical-support
├── TECH-01  h1 "Technical support for what you need to build next."   [Proposed]
├── TECH-02  founder problem statement                                 [Approved fact available]
│   └── "Over 70% of founders we work with don't have technical backgrounds."  [Approved public, exact wording]
├── TECH-03  the support routes                                        [Approved names]
│   ├── Emerging Tech Internship
│   ├── Technical Expert in Residence
│   └── UL Lafayette collaborations
├── TECH-04  compare the routes                                        [Blocked]
│   └── need, participant, timing, commitment, next step
│       └── eligibility, capacity, timelines beyond live copy          [Unknown]
├── TECH-05  proof                                                     [Approved public]
│   └── Dryve UL Lafayette class-project collaboration via OM, exact recorded wording
├── TECH-06  separate paths                                            [Proposed]
│   ├── founders
│   ├── students
│   └── technical experts
└── TECH-07  one technical-support inquiry path                        [Unknown]
```

### Language workshop

| Node | Line | Status | Decision |
| --- | --- | --- | --- |
| TECH-01 | `Go from idea to launch.` | Remove | Promises a company launch. Replace with TECH-01 proposed H1. |
| TECH-02 | `Over 70% of founders we work with don't have technical backgrounds.` | Approved | Use verbatim. Do not round, restate, or pair with a second figure. |
| TECH-03 | `Other Partnerships` | Proposed | Name the actual collaborations or drop the card. A vague third option reads as filler. |
| TECH-04 | Route comparison table | Blocked | Confirm for each route: active or inactive, who qualifies, open or closed, how to begin, cost. |
| TECH-05 | Dryve collaboration | Approved | Exact recorded wording only. No added outcome. |
| TECH-07 | Inquiry destination | Unknown | Same booking decision as the homepage, or a distinct technical intake. |

---

## 4. Builder (Programs)

### Current tree

```
builder-program (current)
├── hero  h1 "The Universal Starting Point."
├── "Why you can't afford to skip it."           [fear framing]
│   ├── Just a Napkin Sketch.
│   ├── MVP Is Live, Seeking Traction.           ["traction"]
│   └── Revenue Is Flowing, Ready to Grow.
├── "A community that believes in you."
├── "The professional foundation."
│   ├── Validation First                          ["validated" family]
│   ├── Clarity Over Hype
│   └── Gulf South Roots
├── "Eight Sessions. One Arc."                    [session count Unknown]
│   └── 8 session titles                          [Session 3 conflicts with approved curriculum]
├── "Long-Term Momentum."
│   ├── Alumni Retention
│   ├── Post-Raise Normalcy                       [implies raises]
│   └── Support Infrastructure
├── FAQ
└── "Ready to build your momentum?"
```

### Updated tree

```
builder
├── BUILD-01  h1 "A universal starting point for founders."     [Approved once, hero only]
├── BUILD-02  who it helps and what question it addresses        [Proposed]
├── BUILD-03  how OM supports the work                          [Partly Blocked]
│   ├── education
│   ├── mentor access                                           [Unknown: access rule]
│   ├── peer learning
│   ├── technical help
│   └── workspace                                               [Unknown]
├── BUILD-04  what participants work through                    [Blocked]
│   └── approved curriculum and session titles only
├── BUILD-05  commitment                                        [Unknown]
│   └── dates, timing, cost, format, eligibility
├── BUILD-06  process proof                                     [Proposed]
│   └── decisions, tests, conversations, what changed
├── BUILD-07  Builder video                                     [Approved with revision]
│   └── corrected staff framing, no outcome guarantee
├── BUILD-08  FAQ                                               [Blocked]
└── BUILD-09  next action "Book a call" before enrollment       [Unknown destination]
```

### Language workshop

| Node | Line | Status | Decision |
| --- | --- | --- | --- |
| BUILD-01 | `A universal starting point` | Approved once | Keep in the Builder hero only. Remove the repeat later on this page and the copy on Alumni. |
| BUILD-02 | `Why you can't afford to skip it.` | Remove | Fear framing. Replace with the founder question Builder addresses. |
| BUILD-03 | `Validation First` | Remove | `validated` has no agreed meaning here. Say what participants actually do. |
| BUILD-04 | `Eight Sessions. One Arc.` | Blocked | Confirm the current session count and titles. Session 3 conflicts with the approved curriculum source. |
| BUILD-04 | `MVP Is Live, Seeking Traction.` | Remove | `traction` is on the banned list until defined. |
| BUILD-05 | Cost, dates, eligibility | Unknown | Program owner confirms. Until then the page explains Builder without offering enrollment. |
| BUILD-06 | `Post-Raise Normalcy` | Remove | Implies participants raise capital. |

---

## 5. Mentors & Experts

**Highest-risk page.** A placeholder is live and the access rule contradicts Membership.

### Current tree

```
mentors (current)
├── hero  h1 "The Mentor Ecosystem."
├── Mentor of the Month
│   └── "[Mentor Name]"                          [LIVE PLACEHOLDER]
├── Our Mentor Lineup                            [41 profile links vs 20 approved]
└── "Ready to meet your mentors?"                [implies access]
```

### Updated tree

```
mentors
├── MENT-01  h1 "Bring a challenge. Connect with relevant experience."   [Proposed]
├── MENT-02  what mentors help a founder think through                   [Proposed]
├── MENT-03  how access actually works                                   [Blocked: conflict]
│   ├── eligibility
│   ├── how to request
│   ├── how matching happens
│   └── what to expect
├── MENT-04  expertise filters organized around founder questions        [Proposed]
├── MENT-05  roster: 20 approved mentors, names and expertise as recorded [Approved]
├── MENT-06  prospective-mentor pathway                                  [Proposed]
└── MENT-07  next step                                                   [Unknown]
```

### Language workshop

| Node | Line | Status | Decision |
| --- | --- | --- | --- |
| MENT-01 | `Mentor of the Month` / `[Mentor Name]` | Remove | A live placeholder. Remove the block or fill it with a cleared, permissioned profile. |
| MENT-01 | `The Mentor Ecosystem.` | Remove | Names a system, not a reader benefit. |
| MENT-03 | Mentor page: mentorship is strictly for members who completed Builder 1.0. Membership page: members may request one-on-one mentor meetings. | Blocked | Tyler confirms one governing rule. Both statements cannot stand. |
| MENT-03 | `guarded`, `strictly`, `pre-seed success` | Remove | Control and outcome language in place of a process explanation. |
| MENT-05 | 41 live profiles | Remove | Publish the approved 20 only. The other 21 need clearance. |
| MENT-07 | `Ready to meet your mentors?` | Remove | Promises access that is unresolved. |

---

## 6. Workspace & Membership

### Current tree

```
membership (current)
├── hero  h1 "Become an OM Member."
├── "Being an OM member means…"
│   ├── Access to OM Mentors                     [conflicts with Mentors page]
│   ├── 24/7 Flexible Workspace                  [Unknown]
│   ├── Resource Libraries
│   ├── Education Programming
│   ├── Coaching & Support
│   └── Perks & Discounts                        [permissions unresolved]
└── "Ready to build your momentum?"
```

`$100 / month` appears in the body without a cleared current source.

### Updated tree

```
membership
├── MEMB-01  h1 "A place to work, connect, and keep building."   [Proposed]
├── MEMB-02  what membership is for                             [Proposed]
├── MEMB-03  what is included, grouped by founder job           [Blocked]
│   └── work, meet, learn, get guidance, participate
├── MEMB-04  who is eligible                                    [Unknown]
├── MEMB-05  workspace access, hours, amenities, rules          [Unknown]
├── MEMB-06  how membership relates to programs, events,
│            mentor access, and technical support               [Unknown]
├── MEMB-07  current price and terms                            [Unknown]
├── MEMB-08  FAQ                                                [Blocked]
└── MEMB-09  action "Book a call"                               [Unknown destination]
```

### Language workshop

| Node | Line | Status | Decision |
| --- | --- | --- | --- |
| MEMB-01 | `Become an OM Member.` | Proposed | Replace with MEMB-01. The current line asks for the transaction before explaining it. |
| MEMB-03 | `Access to OM Mentors` | Blocked | Depends on the MENT-03 access rule. |
| MEMB-05 | `24/7 Flexible Workspace` | Unknown | Confirm real hours and whether after-hours access is universal. |
| MEMB-06 | Programs without workspace membership | Unknown | The single most common founder question on this page. Confirm. |
| MEMB-07 | `$100 / month` | Unknown | Confirm price, billing unit, and what it includes, or the number comes off. |
| MEMB-03 | `Perks & Discounts` | Blocked | Partner permissions unresolved. |

---

## 7. Founder Stories (currently Alumni)

### Current tree

```
alumni (current)
├── hero  h1 "Evidence in Practice."
├── "Founder stories, in their own words"
│   ├── GlowSens                                 [Approved media]
│   ├── Mallard Bay                              [Approved media]
│   └── Keepers                                  [Approved media]
├── "Would an investor trust this?"              [investor framing]
└── "Ready to build your momentum?"
```

### Updated tree

```
founder-stories
├── STORY-01  h1 "See what founders are building."              [Proposed]
├── STORY-02  founder-first introduction                        [Proposed]
├── STORY-03  three flagship stories                            [Approved media, gated copy]
│   └── each story follows:
│       founder challenge → specific OM support → founder action
│       → documented progress → regional relevance when supported
├── STORY-04  browse by challenge or stage, not prestige        [Proposed]
├── STORY-05  how evidence and attribution are handled          [Proposed]
└── STORY-06  route onward by story type                        [Proposed]
```

### Language workshop

| Node | Line | Status | Decision |
| --- | --- | --- | --- |
| STORY-01 | `Evidence in Practice.` | Remove | Describes the page's argument, not the founders. |
| STORY-03 | Any company funding, revenue, jobs, or milestone | Blocked | Each assertion needs its own cleared record plus founder permission. Videos being approved does not clear the surrounding sentences. |
| STORY-03 | `a universal starting point` | Remove | Reserved for the Builder hero. |
| STORY-04 | `Would an investor trust this?` | Remove | Puts an investor between the founder and the story. |

---

## 8. Community & Events

**Decision open:** one destination or two. The trees below assume one page with two zones.

### Current trees

```
community (current)                    events (current)
├── h1 "Community Expectations."       ├── h1 "Strategic Events."
│   ├── Give-First Culture             ├── On the Calendar
│   ├── High-Trust Engagement          │   └── Elevate Pitch Competition
│   └── Direct Feedback                ├── Past Event Benchmarks
├── The Community Model                │   └── 400+ / $40K+ / 92%   [unsupported]
│   └── Founders/Mentors/              └── "Ready to build your momentum?"
│       Partners/Alumni
└── "Ready to build your momentum?"
```

The Community page opens with rules of conduct. The Events page opens with two H1s and three unsupported figures.

### Updated tree

```
community-and-events
├── COMM-01  h1 "Get to know other people building companies."   [Proposed]
├── COMM-02  who gathers here                                    [Proposed]
├── COMM-03  what founders do together                           [Proposed]
├── COMM-04  ways to participate                                 [Partly Unknown]
│   ├── events
│   ├── Startup Circle          quarterly format                 [Approved; next date Unknown]
│   ├── programs
│   ├── membership                                               [Unknown]
│   └── a founder conversation
├── COMM-05  one approved example of community in action         [Blocked]
├── EVENT-01 current events, ordered by date                     [Blocked: inventory]
│   └── each card: date, audience, format, location,
│       organizer role, cost, exact next action
├── EVENT-02 recurring formats, no invented next date            [Approved format]
├── EVENT-03 past events, clearly labeled past                   [Proposed]
│   └── Innovate South, April 22-24 2026                         [past, not upcoming]
├── EVENT-04 notification signup                                 [Blocked: destination]
└── COMM-06  one first step with a stated expectation            [Proposed]
```

### Language workshop

| Node | Line | Status | Decision |
| --- | --- | --- | --- |
| COMM-01 | `Community Expectations.` | Remove | Opening with conduct rules reads as gatekeeping. Expectations move to COMM-04. |
| COMM-03 | `High-Trust Engagement`, `non-negotiable` | Remove | Guarded tone. Describe what people actually do. |
| COMM-04 | Startup Circle next date | Unknown | Format is approved. Do not print a date until one exists. |
| EVENT-01 | `TBD` event content | Remove | No placeholder ships. |
| EVENT-01 | `400+`, `$40K+`, `92%` | Remove | No period, population, definition, or source. |
| EVENT-03 | Innovate South | Approved with revision | Present as past. Do not list as upcoming. |
| EVENT-04 | `Get Notified` | Blocked | Currently loops to the homepage. Connect it or remove it. |

---

## 9. Ecosystem

**Recommendation:** this page leaves the top-level navigation. Its founder-useful parts move; its directory links out.

### Current tree

```
ecosystem (current)
├── hero  h1 "OM is one room in a bigger building."   [metaphor before need]
├── Stories from across the ecosystem
│   └── NovaSpark / King Crow / Natrx / Intralox      [claims per company Unknown]
├── The platform behind the partnership
│   └── 3 LA.IO video features                        [Approved in revised form]
├── Innovation events across Louisiana
│   └── 6 events                                      [currentness Unknown]
├── Louisiana Innovation Labs
│   └── 4 lab categories                              [founder access Unknown]
├── The ecosystem directory
│   └── Accelerators / Co-Working / Investors /
│       Universities                                  [cloned shadow directory]
└── "Ready to build your momentum?"
```

### Updated tree

```
ecosystem (demoted to a supporting page)
├── ECO-01  h1 "Build here. Connect across Louisiana."     [Proposed]
├── ECO-02  founder orientation                            [Proposed]
│   └── OM can help you find where to start, including
│       when another resource fits better
├── ECO-03  need-based routes, confirmed only              [Partly Unknown]
├── ECO-04  how OM fits in the regional system             [Proposed]
├── ECO-05  curated links to live authoritative resources  [Approved concept]
│   └── LA.IO as the live directory, not a copy
├── ECO-06  partner roles with verified contribution labels [Blocked]
└── ECO-07  link to Impact & Acadiana when approved        [Proposed page]
```

### Language workshop

| Node | Line | Status | Decision |
| --- | --- | --- | --- |
| ECO-01 | `OM is one room in a bigger building.` | Remove | Makes the metaphor and the institution more prominent than the reader's need. |
| ECO-03 | Founder access to partner capital, customers, labs, pilots, or experts | Unknown | Do not imply access through logos or category names. |
| ECO-05 | `The ecosystem directory` | Remove | Do not clone LA.IO. Link to it. A copied directory goes stale and competes with the source. |
| ECO-06 | Company stories: NovaSpark, King Crow, Natrx, Intralox | Blocked | Each needs a cleared record and permission, or the block comes off. |

---

## 10. Contact

**Status:** Reframed and verified on this branch. Two decisions remain.

### Updated tree (as built, plus proposed additions)

```
contact
├── CONT-01  h1 "Start a Conversation."                    [Built]
│   └── brief's draft H1 is "Tell us what you're working on."   [conflict]
├── CONT-02  invitation copy                               [Built, Proposed]
│   └── "Program access and admission decisions happen separately."
├── CONT-03  "What are you reaching out about?" selector   [Not built, Proposed]
│   ├── founder support
│   ├── program
│   ├── technical support
│   ├── workspace
│   ├── mentor interest
│   ├── partnership
│   └── media or general
├── CONT-04  short form matched to the selected intent     [Partly built]
│   └── current form is one general form, six labelled fields
├── CONT-05  no-equity disclosure before submission        [Approved, built]
├── CONT-06  mock-site status note                         [Built]
├── CONT-07  next-step expectation                         [Unknown]
│   └── who reviews it, response channel, timing
└── CONT-08  address, phone, social identity               [Approved after currentness check]
```

### Language workshop

| Node | Line | Status | Decision |
| --- | --- | --- | --- |
| CONT-01 | `Start a Conversation.` vs `Tell us what you're working on.` vs homepage `Tell us what you're building.` | Proposed | Three near-identical sentences across two pages. Assign one to the homepage closing and one to Contact. |
| CONT-03 | Intent selector | Proposed | Approve the seven reasons, or cut to the three that have a real owner. |
| CONT-07 | Response expectation | Unknown | Name the reviewer and the realistic response window. Until then the page cannot state one. |
| CONT-08 | Office hours | Removed | Monday to Friday, 9:00 to 5:00 was on the page without a source. Restore only if confirmed. |

---

## 11. Impact & Acadiana

**Status:** Proposed destination. Not authorized for build or publication.

```
impact-and-acadiana                                        [Proposed page]
├── IMP-01  approved economic-development purpose, one paragraph  [Blocked]
├── IMP-02  the operating model                                   [Blocked]
├── IMP-03  activities and outputs, with periods and definitions  [Unknown]
├── IMP-04  company outcomes, with attribution limits             [Unknown]
├── IMP-05  regional measures, only with a defensible method      [Unknown]
├── IMP-06  founder stories connecting progress to place          [Blocked]
├── IMP-07  reports, methodology, source notes                    [Unknown]
└── IMP-08  partner pathways                                      [Proposed]
```

`IMP-00` The proof chain runs `activities → outputs → company outcomes → regional outcomes`. No page may skip a step. This destination cannot be drafted until IMP-01 has approved wording, and cannot be published until at least IMP-03 has a reporting period, population, definition, method, and owner.

---

## 12. Clarity Check

```
clarity-check (current)
├── hero  h1 "See Where You Stand."
└── interactive check                                      [built, 39KB of logic]
```

`CLAR-01` **Decision open.** The four-decision package kept Clarity Check out of the homepage hero. This page still exists and works. Decide whether it is a live route in 2.0, reachable from the need router, or held back. It is currently reachable only by direct URL.

---

## Roll-up: what blocks the most pages

| Open decision | Pages blocked | Owner |
| --- | --- | --- |
| One canonical `Book a call` destination and what happens after the click | Home, Builder, Membership, Mentors, Technical Support, Contact | Tyler |
| One mentor-access rule | Mentors, Membership, Builder, Home route 04 | Tyler |
| Membership price, eligibility, workspace hours, relationship to programs | Membership, Builder, Home | Program owner |
| Builder cost, dates, eligibility, session titles | Builder, Home route 01 | Program owner |
| Approved economic-development wording | Home, About, Ecosystem, Impact | Tyler |
| Current event inventory, stale and TBD content | Events, Community, global banner | Events owner |
| Partner list, contribution labels, logo permissions | Ecosystem, About, Membership | Tyler |
| Cleared founder-story claims and permissions | Founder Stories, Home, Ecosystem | Tyler |
| Technical program currentness and eligibility | Technical Support, Home route 03 | Program owner |
| Analytics and search baseline | all, for measurement only | Tyler |

## Language decisions ready to make now

Fourteen lines need no outside confirmation. They are wording choices only.

| Node | Line |
| --- | --- |
| `GLOBAL-CTA-01` | Retire `Ready to build your momentum?` from seven page endings. |
| `HOME-02a` | `Startup support with a regional purpose.` |
| `HOME-02b` | `We support people building technology, research-driven, and innovative companies.` |
| `HOME-06` | Which page owns `Tell us what you're building.` |
| `ABOUT-01` | `Built to help founders move forward.` |
| `ABOUT-01b` | Remove `premier` and `elite`. |
| `TECH-01` | Replace `Go from idea to launch.` |
| `MENT-00` | Remove the live `[Mentor Name]` placeholder. |
| `MENT-01` | Replace `The Mentor Ecosystem.` |
| `MEMB-01` | Replace `Become an OM Member.` |
| `STORY-01` | Replace `Evidence in Practice.` |
| `COMM-01` | Replace `Community Expectations.` |
| `ECO-01` | Replace `OM is one room in a bigger building.` |
| `CONT-01` | Settle the three near-identical invitation sentences. |

## Measurements

No analytics or search baseline was reviewed. **No measurements found.**
