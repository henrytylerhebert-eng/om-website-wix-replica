# Homepage 2.0 — Four-Decision Package

**Prepared:** 2026-09-09  
**Branch:** `codex/om/mock-site-v2`  
**Scope:** Copy and experience decisions only. Do not change the live 1.0 site.  
**Excluded:** Airtable, implementation, publishing, analytics configuration, and any unapproved public claim.

## Decision standard

- **Approved** means it is already cleared in the website canon.
- **Observed** means it appears on a current public or Wix page; observation is not approval or proof that the operating detail remains current.
- **Proposed** means it is recommended copy or routing for Tyler's approval.
- **Unknown** means the website should not promise the fact until the responsible owner confirms it.

## Executive recommendation

| Item | Recommendation | Current status |
| --- | --- | --- |
| Booking destination | Keep the protected label `Book a call`, but send every instance to one actual scheduling flow. Do not send it to the membership application. | Destination and post-click process are `Unknown`. |
| Service/access facts | Use a broad support statement on the homepage. Hold prices, hours, eligibility, mentor access, cohort details, and availability until confirmed. | Current pages contain unresolved operating claims and an access conflict. |
| Economic-development copy | Use the short four-line module below immediately after the hero. | Two institutional statements are approved; the explanatory line is proposed. |
| Five visitor routes | Replace lifecycle-only labels with the five need statements below. Each route must explain the next step without promising access. | Labels and final destinations are proposed. |

---

## 1. Booking destination

### What the current Wix site does

As observed on 2026-09-09:

- The global-header `Book a Call` links to `/contact`.
- The homepage hero `Book a Call` links to `/builder-program`.
- The homepage closing `Book a Call` links to `https://form.jotform.com/220684844285060`.
- That Jotform identifies itself as `Membership Application Form`, not a booking calendar.
- `/contact` is headed `Schedule an interest call`, but its visible experience is a contact form. It does not show a selectable appointment time or explain when or how scheduling happens after submission.

### Recommendation

Use one actual scheduling URL everywhere the protected label `Book a call` appears. The destination should let the visitor choose a time or clearly complete the booking in the same flow.

Until that URL is confirmed:

- retain `Book a call` in the page contract;
- do not hard-code `/builder-program` or the membership Jotform as its destination;
- do not promise a 20-minute duration, response time, acceptance, program match, or mentor introduction;
- keep the destination status `Unknown` in the build.

If OM intends to keep the existing `/contact` form instead of a calendar, the accurate CTA is `Request a call`. That would revise the protected CTA label and therefore needs Tyler's explicit approval.

### Proposed scheduling-page handoff copy

> Tell us what you are building and choose a time to talk with the OM team. This conversation is a starting point—not an application, admission decision, or promise of program access.

### Decision required

Choose one:

1. Supply the canonical scheduling URL and keep `Book a call`; or
2. approve `Request a call` and use `/contact`, after adding a clear follow-up expectation to that page.

The final flow also needs an owner, a confirmation state, and a plain-language explanation of what happens next.

---

## 2. Current services and access

### What is safe now

The approved website canon supports OM's economic-development identity and no-equity statement. A combined service statement covering programs, mentorship, networking, and workspace is recorded but still `pending`, not approved.

### What current pages show, and what still needs confirmation

| Area | Current Wix observation | Decision gate before Homepage 2.0 promises it |
| --- | --- | --- |
| Builder 1.0 | Presented as the universal starting point, a ten-week cohort, and eight working sessions. | Confirm that Builder is the current universal starting point, current duration, current curriculum, eligibility, application status, fees, and next cohort. |
| Mentors | The mentor page says mentorship is strictly for members who completed Builder 1.0. The membership page says members can request one-on-one mentor meetings without stating that prerequisite. | Resolve the access rule. Until then, the site may explain that a mentor network exists but must not promise direct access or matching. |
| Technical support | `/talent` lists Emerging Tech Internship, Technical Expert in Residence, and other UL Lafayette partnerships. | Confirm which programs are currently active, who qualifies, whether they are open, how to begin, and whether fees or selection rules apply. |
| Membership and workspace | The membership page displays `$100 / month`, `24/7 flexible workspace`, bookable rooms, mentor access, coaching, and other benefits. | Confirm price, membership unit, workspace hours, room access, included services, eligibility, and current availability. All remain `Unknown` for Homepage 2.0. |
| Events and founder network | The Wix homepage presents workshops, founder mixers, pitch events, founder relationships, and investor connections. | Confirm current event types and frequency. Do not promise exclusive access, introductions, investors, customers, or a fixed cadence without owner confirmation. |

### Recommended interim homepage sentence

> OM brings together programs, people, and practical support for founders building innovative companies.

**Status:** Proposed. This is intentionally broad. It does not promise a particular program, access rule, schedule, price, introduction, or outcome.

### Do not publish yet

- membership price or billing basis;
- `24/7` workspace access or bookable-room terms;
- a required or guaranteed mentor-access path;
- cohort length, dates, session count, curriculum, or application status;
- direct investor, partner, customer, or mentor introductions;
- current availability of a technical-support program;
- fixed response times or guaranteed placement into a service.

### Decision required

For each of the five rows above, the operating owner should confirm: **current or inactive; who it is for; how access begins; cost; timing/availability; and the destination page or form.** Anything not confirmed remains `Unknown` and stays out of public copy.

---

## 3. Economic-development explanatory copy

### Recommended module immediately after the hero

**Eyebrow**

> Momentum for Startups

**Heading**

> Startup support with a regional purpose.

**Body**

> Opportunity Machine is an economic-development organization.  
> We support people building technology, research-driven, and innovative companies.  
> OM takes no equity.

### Claim status

- `Opportunity Machine is an economic-development organization.` — **Approved and protected.**
- `OM takes no equity.` — **Approved and protected.**
- `Momentum for Startups` — **Approved and protected.**
- The heading and middle explanatory sentence — **Proposed for Tyler's approval.**

### Why this version

It explains institutional purpose in plain language without calling OM a government agency, describing its funding structure, promising a service or admission path, or claiming measured job, company, capital, or regional outcomes.

The no-equity sentence does not imply no fees, no admission requirements, no agreements, guaranteed funding, or any rule about later outside investment.

### Decision required

Approve the heading and middle sentence as written, or provide the specific regional-purpose language OM wants to own publicly. The two protected institutional statements remain unchanged.

---

## 4. Five need-based visitor routes

### Recommended labels and destinations

| Visitor's words | What the route should explain | Proposed destination |
| --- | --- | --- |
| `I have an idea I need to test.` | How OM helps someone examine an idea before assuming a program fit. | Builder overview only if current entry rules are confirmed; otherwise the canonical call flow. |
| `I am building and need a clearer next step.` | How a founder can discuss the immediate question or decision in front of them. | Canonical call flow. |
| `I need technical support.` | The technical-support options, current eligibility, and how to begin. | `/talent`, after current program and access facts are confirmed. |
| `I need experienced guidance.` | What mentor guidance is, who can access it, and the prerequisite if one exists. | `/mentors` as an explanation page; do not imply bookable access until the rule is resolved. |
| `I am not sure where to begin.` | A low-pressure starting conversation and what happens after the click. | Canonical call flow. |

### Router rules

- Use the visitor's problem, not an internal program name, as the card headline.
- Give every card one clear next step.
- Do not send a visitor to an application unless the card explicitly says they are applying.
- Do not route `Book a call` to a general program page or membership application.
- Do not imply acceptance, guaranteed access, introductions, funding, mentor matching, or a measured result.
- On mobile, keep the order shown above so the most common uncertainty routes appear before organizational detail.

### Decision required

Approve the five labels and their route logic. Final URLs remain blocked only where the booking destination or current access fact is still `Unknown`.

---

## Approval shortcut

Tyler can approve the recommended package by replying:

> Approve the economic-development module and five visitor labels. Keep `Book a call`; I will provide the scheduling URL. Use the broad interim service sentence and keep all unresolved access facts marked Unknown.

That approval would clear the copy and route architecture for implementation on `codex/om/mock-site-v2`. It would **not** approve publication, replace the live 1.0 site, or clear any service/access fact listed as `Unknown`.

## Evidence reviewed for this package

- Approved website canon and copy/governance rules in the installed OM Website Skill Suite.
- Existing Homepage 2.0 contract, copy review, four-file audit, and run receipt on this branch.
- Current Wix homepage, contact, membership, mentors, and talent pages observed on 2026-09-09.
- Current public Opportunity Machine homepage and technical-support/mentor pages observed on 2026-09-09.
- No Airtable data was used or changed.

## Measurements

No analytics or search baseline was reviewed for this package. **No measurements found.**
