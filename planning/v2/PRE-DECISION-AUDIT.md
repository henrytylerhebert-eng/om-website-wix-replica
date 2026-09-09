# Pre-decision audit: what has run, and what gates the fourteen

**Prepared:** 2026-09-09
**Question:** Have all suite skills run, and is that a gate on the fourteen wording decisions?
**Short answer:** No, and partly yes. Four of sixteen skills have genuinely run. Two of the un-run ones change what the right wording is. One structural gate matters more than any of them.

## Skill inventory

| Skill | State | Evidence |
| --- | --- | --- |
 | `om-website-canon` | **Run** | Canon read, claims and unknowns respected throughout |
| `om-page-architect` | **Run, 1 of 12 pages** | `homepage-v2-page.json` exists and is approved. No other page has a contract. |
| `om-website-strategist` | **Run** | Its `qa.py` ran at draft and release; the copy lint was applied to every proposed line |
| `om-improvement-loop` | **Run** | Four records: `OM-V2-M1-001`, `M1-003`, `M2-001`, `M2-002` |
| `om-peer-pattern-finder` | Run upstream | Peer patterns cited per page in the 2026-09-09 brief, sourced to S-PEERS-A and S-PEERS-B. Not re-run. |
| `om-web-copy-builder` | Partial | Home and Contact only. Its stated input is an approved page contract. |
| `om-seo-geo-architect` | Partial | Home has a title and meta proposal. The other eleven have brief-level drafts only. |
| `om-positioning-guard` | **Not run** | — |
| `om-visitor-router` | **Not run** | The five labels were approved without the router's route-by-route record |
| `om-journey-auditor` | **Not run** | — |
| `om-message-coverage-auditor` | **Not run** | — |
| `om-opportunity-audit` | **Not run** | — |
| `om-proof-auditor` | **Not run** | — |
| `om-proof-library` | **Not run** | — |
| `om-testimonial-selector` | **Not run** | — |
| `om-founder-story-builder` | Not applicable yet | Founder Stories is not built |

## The structural gate, which matters more than the skill list

`om-page-architect` produces a page contract; `om-web-copy-builder` takes **an approved page contract** as its input. Eleven of twelve destinations have no contract. The page trees are a pre-contract artifact: they establish structure and surface the open questions, which is what they were for.

So nine of the fourteen decisions are H1 replacements for pages that have no contract yet. Deciding them now is not wasted, because the tree already fixes each page's job and audience. But it does invert the suite's sequence, and `om-seo-geo-architect` is explicit that title, H1, description, entity consistency and internal-link purpose are proposed **as a set**. Deciding an H1 alone settles about a third of that set and leaves the rest to be reconciled later.

**Recommendation.** Two of the fourteen are not H1s and have no dependency at all: `GLOBAL-CTA-01` and `CONT-01`. Decide those now. For the nine H1s, either accept that the title and description follow later, or let a contract pass run first for the four pages that carry the most traffic intent: Technical Support, Builder, Mentors, Membership.

## Positioning-guard findings on the fourteen

Run as a desk review against the contract, canon and governance. Not a rendered inspection and not participant research.

### These four are gated on something the trees already flagged

| Node | Proposed line | Finding |
| --- | --- | --- |
| `MENT-01` | `Bring a challenge. Connect with relevant experience.` | **Promises the thing that is Unknown.** "Connect with relevant experience" tells the reader a connection will happen, while the mentor-access rule at `MENT-03` is unresolved and contradicts itself across two pages. The router skill's exit check is that a route must not promise access automatically. Decide `MENT-03` first, or choose a formulation that describes the mentor network without promising a connection. |
| `ECO-01` | `Build here. Connect across Louisiana.` | **Broadens geography without a policy.** The SEO/GEO rule is to keep location factual and not widen geographic eligibility. Canon carries `OM-PLACE-001`, Downtown Lafayette, as pending, and eligibility geography is Unknown. "Across Louisiana" reads as statewide reach. |
| `ABOUT-01` | `Built to help founders move forward.` | **Addresses the secondary audience.** The brief assigns About a primary audience of partners, funders, stakeholders and prospective mentors, with founders seeking institutional trust second. This H1 speaks only to founders. Either the H1 serves the institutional reader or About's primary audience designation changes. One of the two has to move. |
| `GLOBAL-CTA-01` | Retire `Ready to build your momentum?` | **Deletes without replacing.** Seven pages currently end with it. The guard requires every page to keep a primary founder route. As written this decision removes seven endings and supplies none. It needs a paired per-page replacement, which is `GLOBAL-CTA-02`. Decide them together. |

### These two carry a tension worth naming, not a block

| Node | Proposed line | Finding |
| --- | --- | --- |
| `MEMB-01` | `A place to work, connect, and keep building.` | Leads with Place. The sitewide rule is not to lead with coworking inventory and to treat the building as supporting infrastructure. On a workspace page, Place is arguably the correct lens, and governance allows a page to need only one. Flagged so the choice is deliberate. |
| `ABOUT-03` | `…innovative companies in Acadiana.` | Conflicts with an already approved claim. `OM-AUDIENCE-001` was approved today without geography, and its recorded limitation is that it does not establish a geographic limit. Adding "in Acadiana" on About creates a second, narrower version of an approved sentence. That is a new claim needing its own approval, not a wording tweak. |

### These eight pass the guard as written

`HOME-02a`, `HOME-02b` and `HOME-06` are recorded and approved. `ABOUT-01b` removing `premier` and `elite`, `TECH-01`, `MENT-00` removing the placeholder, `STORY-01` and `COMM-01` all pass recognition, need, economics and purpose, and none asserts a measured effect, an eligibility rule, or an access promise.

## The overdue lane that has nothing to do with the fourteen

`om-proof-auditor`, `om-testimonial-selector` and `om-proof-library` have never run. The uncleared homepage quotation in `OM-V2-M2-002` was found by accident during a contract reconciliation, not by a pass designed to find it, so the current state of proof content across the other eleven pages is simply unknown.

Governance already anticipated this exact failure mode in two places: the $1M seed-round note attached to Jordy Davidson's quotation is recorded as a separate user-supplied contextual claim rather than words spoken, and Stefan Arnold's short quote is recorded as not identifying the meetup, with that context living in the attribution note. The homepage quote merged two speakers into one utterance, which is the same conflation the canon had already written down.

One nuance to correct in `OM-V2-M2-002`: governance says unknown publication permission is not permission denied, and that it blocks release rather than internal work. The removal was still right, because that sentence matched no record at all, which is a different and larger problem than unknown permission.

**This lane is independent of the fourteen and can run in parallel.**

## What is genuinely not a gate

`om-journey-auditor` needs rendered evidence and its exit check refuses to pass an unresolved operating policy or link. With the booking destination Unknown and ten operating facts open, it would block on inputs that do not exist yet. `om-message-coverage-auditor` and `om-opportunity-audit` both read a settled draft. All three belong after the wording, not before.

## Checks not run

Rendered inspection of any page other than Home and Contact. Participant observation of any kind. Query or interview data for any search hypothesis. Crawl and index verification.

## Measurements

No analytics or search baseline was reviewed. **No measurements found.**
