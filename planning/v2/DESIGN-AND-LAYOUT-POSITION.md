# What the lookalikes taught, and the layout we apply as a result

**Prepared:** 2026-09-10
**Skill:** `om-peer-pattern-finder`, re-run against the record rather than the brief
**Short answer:** The peer record teaches **which questions to answer**, not how anything should look. It contains no design evidence at all. The global layout we apply comes from OM's own July brief, and ten of twelve pages currently contradict it.

## 1. What the peer record actually is

`peer_patterns.json` holds **eight curated pattern records**, P01 to P08, covering thirteen organizations. Every one of the eight carries the same five limits:

| Field | Value on all eight records |
| --- | --- |
| `evidence_status` | `reported_in_supplied_studies` |
| `live_page_verified_this_run` | `false` |
| `visual_audit_status` | **`not_tested`** |
| `conversion_evidence` | `unknown` |
| `exact_deep_links` | `null` |

So: **no peer page has been opened.** The records are secondhand from two supplied studies. `S-PEERS-A` is marked `[Unverified]`. Governance records that the two reports share **one research dependency group**, that their counts of 174 and 152 may not be summed, that the unique combined count and research independence are unknown, and that their page patterns are "references to inspect, not measured conversion winners."

`exact_deep_links: null` means we cannot go and look at a specific peer page without first finding it again.

## 2. What we learned, pattern by pattern

| ID | Task | Adaptation on record | Status here |
| --- | --- | --- | --- |
| P02 + P08 | Visitor routing, human start | Route by a visitor question, including uncertainty about where to begin | **APPLIED IN THE BUILD.** The homepage need router, five need statements including "I am not sure where to begin." Built and rendered-checked. Contract status is candidate, pending review, per `3122d6b`. |
| P01 | Regional purpose | Connect startup support to the purpose of the organization | **APPLIED IN THE BUILD.** The identity module immediately after the hero. Contract status is candidate, pending review. |
| P07 | Regional reporting | Separate program activity, company change, and regional measures | **APPLIED at contract level.** It is the governance proof chain and the structure of `page-impact-acadiana-v2.json`, sections `imp_activities`, `imp_company`, `imp_regional`. |
| P03 | Workspace access | Answer whether participation requires renting space | **BLOCKED.** This is `MEMB-06`, Unknown. |
| P05 | Mentor access | Explain expertise, request process, eligibility, expectations | **BLOCKED.** This is `MENT-03`, a live contradiction. |
| P04 | Program comparison | Compare participation requirements in one consistent format | **BLOCKED.** `TECH-04` and the Builder commitment section. |
| P06 | Regional connections | Explain the concrete role of each regional relationship | **BLOCKED.** `ECO-06`, partner labels unresolved. |

**Three applied, four blocked.** And the pattern in the pattern: **every unapplied peer lesson is blocked on the same ten operating facts, not on design or layout.** The lookalikes are not telling OM to look different. They are telling OM to answer the questions it currently cannot answer. P03 is the clearest case: the peer record explicitly says OM's own answer is unknown and the peer's policy must not be copied.

That is the honest learning, and it is worth more than a layout: **there is no design change that substitutes for the missing facts.**

## 3. Design and layout: nothing peer-derived is applicable

`visual_audit_status` is `not_tested` on all eight records. No peer typography, palette, spacing, grid, component or page-length observation exists anywhere in this repository or in the suite. Any statement of the form "peers do X visually, so OM should" would be invented.

The visual system in use comes from **OM's own sources**, not the lookalikes:

- **Palette and type:** `S-VISUAL`, the OM Startup Social Graphics reference. Navy `#243746`, blue `#0090CC`, cool gray `#76777A`, Futura PT. Font files are not distributed; the mock uses Jost as the web stand-in. `contrast_status` was `not_tested` and is now tested and failing, which is `OM-V2-M2-001`.
- **Layout preferences:** `S-JULY-BRIEF`, recorded in `canon.protected_layout.visual_preferences` as five rules: light backgrounds, dark text, dark-blue components, no grid backgrounds, text beside images rather than transparent overlays.

Those five are the only layout rules on record, and they are OM's, not a peer's.

## 4. The finding: the mock contradicts its own layout rule

Measured across all twelve pages:

| Rule on record | State of the mock |
| --- | --- |
| Light backgrounds | **FAIL on 10 of 12 pages.** Only `index.html` and `clarity-check.html` open on a light hero. About, Builder, Membership, Mentors, Talent, Community, Events, Ecosystem, Alumni and Contact all open `hero on-dark`. |
| Dark text | Follows on light sections; inverted on the dark ones, which is consistent within them. |
| Dark-blue components | Followed. Buttons, card top borders and accents use the brand blue. |
| No grid backgrounds | **Followed.** The three gradients in the stylesheet are two navy section grounds and one timeline rule. No grid imagery anywhere. |
| Text beside images, not transparent overlays | Followed where an image and text meet. `index.html` uses a side-by-side hero split; no page overlays text on an image. |

Builder runs four dark sections, Mentors, Community and Ecosystem three each. The dark treatment is the default rather than the accent, which is the inverse of the recorded preference.

## 5. The global layout we apply

The rebuilt homepage already demonstrates the correct reading, so this is a rule extracted from something built and rendered-checked rather than a new proposal. The homepage contract itself is a candidate pending review, so the layout rule below is a proposal too:

1. **Light ground is the default.** Dark is an accent, at most two bands per page. `index.html` uses exactly two: the support summary and the closing invitation. Every page opens light.
2. **The opening experience carries the identity module on light ground.** Plain visible text, never dependent on animation or a carousel, per the coverage rule.
3. **Dark-blue components on light ground**, with the AA-corrected token for small text and control grounds once `OM-V2-M2-001` is approved. The brand blue stays as fill, card borders and large display type, where it already passes.
4. **Text beside media, never over it.** The homepage hero split is the reference implementation.
5. **No grid backgrounds.** Already true; keep it.
6. **One closing action per page, matched to that page's reader.** This replaces the same closing question repeated verbatim on seven pages, which is `GLOBAL-CTA-01` and `GLOBAL-CTA-02`.
7. **Section order follows the page contract's `mobile_order`.** Twelve contracts now carry it.

Rules 1 and 6 are the two that change existing pages. Both are recorded as `OM-V2-M1-005`.

## 6. What would make the peer record worth more

It currently cannot support a design decision, and it does not need to for the work in front of us. If it should support one later, the record itself names the gap: `exact_deep_links` is null and `live_page_verified_this_run` is false on every entry. A rendered inspection of a named peer page, recorded with a deep link and a date, is the smallest useful step. Until then the eight records stay what they say they are, reported in supplied studies.

**No conversion claim is made for any pattern above.** `conversion_evidence` is `unknown` on all eight records, and nothing here has been tested with a visitor.

## Measurements

No analytics or search baseline was reviewed. **No measurements found.**

## Provenance note

This document was written at 08:09 on 2026-09-10, minutes before commit `3122d6b`, which downgraded the Homepage 2.0 contract from approved to candidate pending review on Tyler's instruction. Three "approved" references above have been corrected to say applied in the build with a candidate contract status. Nothing in the peer analysis depended on that approval.
