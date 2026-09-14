# OM Website 2.0 — developer review handoff

Status: local candidate, pending Tyler / relevant OM owner review. Live Wix is unchanged.

Latest update: a full copy-location audit filled the homepage story teaser, Membership/Builder/About routes, statewide story and event cards, and shared footer copy. The **Copy and placement check** lists all 13 page contracts and distinguishes written draft copy from missing source inventories. The latest Events direction and all seven testimonials are preserved.

## Open and review

Extract the entire ZIP, then open `index.html` in a browser. Keep the `assets` folder beside it. No install, account, or internet connection is needed for the handoff itself; external source links need internet.

1. Start with **Global Shell**: navigation, shared layout rules, and the two closing actions.
2. Follow the sidebar through Homepage, Membership, Programs and its five detail reviews, Events, Mentors, Alumni, Ecosystem, and About OM.
3. Compare each existing page's Wix screenshot with the numbered, named-location redlines. Scroll the image or open it full size. Strikethrough can describe a superseded direction; it is not always a verbatim screenshot quotation.
4. Read the copy panels in order. Use **Copy text** to copy a section. **Copy view** hides evidence and build notes for an editorial read-through.
5. Expand **Build notes & sources** for implementation instructions and unresolved facts. Amber content panels are internal holds, not text to publish.
6. Resolve the inputs in **Review notes & sources** before implementing public changes.

## What is included

- Global shell and 13 page/detail contracts, in site order.
- Eight refreshed screenshots of the existing Wix pages. The five new detail reviews do not pretend to be already-built pages.
- Proposed public copy separated from developer instructions and pending content inventories.
- Seven verbatim selected testimonials in their intended page contexts; original records are bundled in `source-testimonials.json`.
- Exact six homepage hero rotations, Membership-first navigation, and shared Apply Now / Schedule a Call closing actions.
- Source-linked page contracts, bounded QA receipt, and an improvement record.

The named mentor-roster refresh assignment is removed. This does not authorize a new roster or a replacement person. The previously removed participation reassurance remains out of the handoff.

## Copy and publication boundaries

New copy is proposed. A selected quote is not evidence of publication permission. Booking/application URLs, current program terms, final stage labels, partner/event inventories, and relevant profile/asset permissions remain owner inputs. Historical screenshots show current source material to change, not newly approved website copy.

The hero review is a static text specimen; it does not simulate the video or rotation behavior. CTA labels are specimens, not working booking forms. The handoff has no analytics baseline. No measurements found.

## Files and maintenance

- `content.mjs`: editable copy, order, source references, and section notes.
- `build.mjs`: generates `index.html` and `page-contracts.json`.
- `review.css` / `review.js`: handoff styling and navigation/copy controls.
- `source-testimonials.json`: exact source excerpts and attribution records; do not rewrite them as marketing copy.
- `verify.py`: bounded source, structure, asset, CTA, and copy checks.
- `copy-coverage.json`: ordered section-level copy and pending-content inventory, also shown in the HTML review notes.
- `rendered-checks.json` / `qa-receipt.json`: specific local checks and limitations.
- `review-notes.md`: corrections and remaining gates.

To regenerate locally, run `node build.mjs`, then `python3 verify.py` from this folder. The original OM skill copy checker is used when installed at its recorded local path. If absent, the receipt explicitly records that check as not run. Re-run browser review after any content or layout change; an older rendered receipt does not certify a newer artifact.

The package deliberately excludes raw meeting transcripts and older handoff files. Source-register paths identify the owner's internal records; those internal files are not bundled.
