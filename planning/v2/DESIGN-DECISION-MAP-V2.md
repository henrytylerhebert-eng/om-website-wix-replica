# Mock Site 2.0 Design Decision Map

**Purpose:** Show how the OM skill suite turns brand, source, and peer-research inputs into the 2.0 mock's information architecture. This is a candidate design plan, not a live-site specification or a claim-approval record.

## Decision method

1. **Canon and source boundary first.** The strategist checks whether a statement is user-confirmed, claim-register approved, pending, or unknown. Unknown service, access, price, destination, permission, and metric details stay out of public candidate copy.
2. **Visitor question second.** The page architect gives each page one primary visitor question and one primary action. The visitor router keeps a person from needing to know OM program names before getting help.
3. **Peer pattern third.** The peer pattern finder supplies a reported pattern for the communication problem, never a claim that the pattern converts better or that OM operates like the peer. The supplied studies were not visually refreshed in this run, so they guide structure rather than visual imitation.
4. **Proof and route review fourth.** The positioning guard checks purpose, no-equity, founder relevance, and service boundaries. The proof and journey checks then keep evidence, access, and destinations visible as gates.
5. **Human decision last.** Candidate wording or layout becomes approved only when Tyler records exact-version approval. The 2.0 homepage is currently candidate/pending review.

## Global layout applied across the site

```
Global shell
├── Founder-first navigation: Start Here, Programs, Mentors and Experts,
│   Technical Support, Community and Events, Workspace and Membership,
│   Founder Stories, About
├── One primary action per page, matched to the visitor's question
├── Page opening: visitor need before OM terminology or institutional detail
├── Page middle: explanation or comparison only when facts are current
├── Proof: claim-matched media or records only, never inferred outcomes
└── Page ending: an action with a verified destination, otherwise held as Unknown
```

The implementation uses the existing OM light-background, dark-text, navy/blue component direction. It does **not** copy a peer's visual layout, interaction, brand language, prices, access rules, or operating model. Reported peer patterns are P01 through P08 in the suite's `peer_patterns.json`; their reported organizations are examples, not performance evidence.

## Page-by-page application

| Page | Visitor question and design move | Reported peer pattern | OM decision and gate |
| --- | --- | --- | --- |
| **Home** | “Can OM help me and where do I begin?” Preserve the locked four-part hero, then immediately clarify OM's economic-development purpose and no-equity policy. Route by five plain-language needs. | P01 regional purpose; P02 visitor routing; P08 human start | Hero, economic-development statement, and no-equity statement are grounded. Need labels and broad support copy are candidate/pending review. Booking remains interim until its canonical destination is known. |
| **About** | “What is OM and why does it exist?” Start with founder purpose rather than institutional prestige, then explain role, people, and regional purpose. | P01 regional purpose | Do not list current services, staff titles, partners, or geography limits until confirmed. Remove prestige language now. |
| **Technical Support** | “I need technical help. Which route fits?” Replace launch promise with a problem-first entry, then distinguish internship, expert, and university-collaboration routes. | P04 program comparison; P05 mentor access | The nontechnical-founder statistic, program names, and Dryve collaboration are claim-register grounded. Eligibility, availability, timing, cost, and inquiry route remain Unknown. |
| **Builder** | “Is Builder the right place to start?” Explain the founder question and work involved before enrollment or stage labels. | P04 program comparison | Current curriculum, session count, price, dates, eligibility, and mentor/workspace access must be confirmed before comparison or application content. “Book a call” is a holding action only. |
| **Mentors and Experts** | “Can relevant experience help with my challenge, and how does access work?” Show expertise by founder question, not a generic ecosystem. | P05 mentor access | Remove placeholder and unapproved roster entries. Publish only cleared records. A single mentor-access rule must resolve the conflict with Membership before a request path is described. |
| **Workspace and Membership** | “Do I need a workspace, and what does membership include?” Lead with the job to be done, then group benefits only after terms are current. | P03 workspace access | No price, hours, mentor access, membership-to-program relationship, or partner-perk claim until an owner confirms it. |
| **Founder Stories** | “What have founders experienced, in their own words?” Put founders and documented media first; organize later by challenge or stage rather than prestige. | No specific peer pattern selected; proof-safe storytelling is the governing mechanism | The three videos are cleared media. Quotes, funding, revenue, jobs, and causal outcomes remain blocked pending individual claims and permissions. |
| **Community and Events** | “Who can I meet and what is happening?” Explain participation before conduct rules, then separate current events, recurring formats, and clearly dated past events. | P02 visitor routing | Startup Circle's format is grounded; its next date is Unknown. Do not show unsourced benchmarks, event inventory, or notification form until current and routed. |
| **Ecosystem** | “Where does OM fit, and when is another resource better?” Keep this supporting rather than primary navigation; send directory needs to the live authority. | P06 regional connections | Do not imply access to capital, labs, customers, pilots, or experts through partner names or logos. Link to LA.IO rather than maintain a shadow directory. |
| **Contact** | “What happens if I reach out?” Offer a short, intent-based conversation route and put no-equity before submission. | P08 human start | The current mock form is display-only. Confirm recipient, response expectation, privacy, and canonical booking destination before it becomes a real intake. |
| **Impact and Acadiana** | “How does OM's work connect to the region?” Make the evidence chain visible: activities → outputs → company change → regional measures. | P07 regional reporting | This is a proposed page only. It cannot be built from reputation language or totals; each metric needs period, population, definition, method, owner, and approval. |
| **Clarity Check** | “Where should I begin?” Treat the interactive tool as a deliberate route, not a hidden side path. | P02 visitor routing; P08 human start | Decide whether it is a visible 2.0 route, a need-router option, or held. Claim audit and privacy handling are still Unknown. |

## What the lookalike research changes and does not change

It changes the **shape of the experience**: plain-language routing, problem-first pages, transparent access explanations, one maintained directory authority, and an evidence chain for regional purpose.

It does not change OM's facts or give us permission to import peer operations. The studies report 152 and 174 organizations separately; their overlap is unknown. They contain no verified conversion results, comprehensive responsive audit, or visual-design approval. No measurement baseline was reviewed for OM. **No measurements found.**

## Immediate sequence for the working session

1. Review Home's four candidate decisions and booking handoff.
2. Confirm the shared global shell and navigation labels.
3. Work Technical Support, Builder, Mentors, and Membership as one connected access-and-service decision set.
4. Then move through the remaining pages using their row above as the decision checklist.

Each completed page should receive: an approved or pending page contract, source-linked claims, an exact action/destination state, a peer-pattern rationale where relevant, and fresh QA. No page becomes release-ready merely because its draft record QA passes.
