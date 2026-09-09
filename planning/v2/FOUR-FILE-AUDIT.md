# OM Working Mock Site 2.0: four-file candidate audit

**Audit date:** 2026-09-09  
**Branch:** `codex/om/mock-site-v2`  
**Candidate snapshot:** `95e783db2cc21321b26b00f685b3ee1ee3b3081f`  
**Compared with:** `om-working-mock-site-v1.0` / `fac0f4729f64c0eabd7e0ba7527eabef6b9cb874`  
**Status:** Draft candidate only. Not approved public copy. Not deployed.

## Outcome

The four-file candidate contains useful structural and accessibility work, but it is not a valid Homepage 2.0 implementation yet. It fails protected-hero rules, omits the required economic-development and no-equity opening, mixes approved proof with unsupported operating claims, and introduces a navigation pattern on only one page.

Recommended disposition:

- Keep the protected hero rotation, approved hero video, reduced-motion handling, visible focus treatment, approved founder video embeds, Startup Circle copy, and approved nontechnical-founder statistic.
- Rework the homepage into the approved four-element hero followed immediately by the economic-development and no-equity module.
- Remove or hold unverified service, access, hours, asset, and process claims.
- Do not promote the Clarity Check into the hero or global navigation until its separate approval and destination questions are resolved.

## Findings by file

### `index.html`

#### Blockers

1. **Protected hero structure changed.** Lines 49-50 use `Book a 20-minute conversation` and add a Clarity Check CTA. The protected hero allows only the approved video, `For founders who…`, one rotating approved ending, and `Book a call`. The secondary button is a fifth hero element.
2. **Required opening messages are absent.** No economic-development statement or `OM takes no equity.` statement appears immediately after the hero, or anywhere else on the candidate homepage.
3. **Booking destination is not established.** Both conversation CTAs point to `contact.html`, but the approved booking workflow, destination, intake process, and response expectation remain `Unknown`.
4. **Operating claims exceed current clearance.** Lines 90-105, 171, 191-192, 228, and 313-315 describe service scope, cohort practices, workspace, coaching, introductions, and mentor access beyond the cleared record. Mentor access is also a recorded conflict.
5. **The GlowSens quotation was silently edited.** Line 198 replaces the source-record hyphen with an em dash. Quoted testimony must remain exact unless an edit is explicitly approved.
6. **Mentor presentation needs reconciliation.** Lines 241-260 use photos and shortened expertise labels. The public roster clears names and exact expertise areas as of 2026-07-02, but this candidate's abbreviated labels are not the approved roster text and the photo reuse/currentness check was not established in this audit.
7. **Visible internal placeholders remain.** The photo `TBD` block at lines 104-105 is useful for planning but cannot appear in a release candidate.
8. **Office hours remain unverified.** Line 313 needs a current authoritative source before release.

#### Supported material worth retaining

- The fixed hero phrase and the five approved rotating endings are present.
- The approved hero video uses the cleared YouTube ID `yk1Ij-wW_P0`.
- GlowSens, Mallard Bay, and Keepers video embeds are approved public media assets. Surrounding outcome claims still require separate evidence.
- The Startup Circle cadence/format copy is approved public; its next date remains `Unknown`.
- `Over 70% of the founders we work with don't have technical backgrounds` is approved public in the claims registry.
- The address, phone, social handles, and `Momentum for Startups` are cleared records, subject to a currentness refresh before release.

#### Copy and experience concerns

- The ten-section sequence is too broad for the first 2.0 pass and repeats evidence/progress language without first establishing OM's approved identity.
- Multiple new-copy modules use em or en dashes, which violates the suite's new-copy rule. Locked source copy and exact testimony are exceptions.
- Synthetic founder-moment lines are visually presented as quotations without an attributed source. They should be plain scenario labels, not quote styling.
- `Investor readiness`, `traction`, `validation`, and funding language need definition and evidence discipline.
- Privacy and Cookies links still use `#`, so the footer contains dead-end destinations.
- No meta description is present. Search and analytics baselines remain `Unknown`; no measurements were found.

### `clarity-check.html`

#### Blockers

1. **The file contradicts its own product boundary.** The banner says the Clarity Check is not linked in global navigation, while the candidate homepage links it directly from the hero.
2. **The global CTA changes to `Get Started`.** Line 34 conflicts with the protected `Book a call` label.
3. **Navigation is inconsistent across the replica.** The Ecosystem dropdown and reordered links appear here but not on the homepage or the other pages.

#### Mechanical note

The Google Fonts query contains an unescaped `&` in HTML. It should be `&amp;display=swap` when the file is revised.

### `main.js`

#### Keep

- The five approved hero endings replace the old placeholders.
- Reduced-motion visitors receive a static first line instead of rotation.
- Analytics dispatch is consent-gated and fails closed when consent is absent.

#### Rework or hold

1. The third protected ending uses a straight apostrophe instead of the canon's exact curly apostrophe. Protected text should be byte-consistent with the approved record.
2. The dropdown behavior lacks Escape-key closing and focus-return handling. The mobile navigation toggle also does not expose its open state through `aria-expanded`.
3. The analytics code is scaffolding only. No sitewide consent banner, analytics provider, booking completion event, or baseline was verified. The event labels also do not yet implement the proposed measurement contract (`primary_cta_click`, `booking_started`, `booking_completed`, and related events).

### `styles.css`

#### Keep

- Visible `:focus-visible` treatment.
- Reduced-motion removal of scrolling, rotator transitions, and hover movement.

#### Rework or verify

1. The dropdown styles support markup added only to `clarity-check.html`; this is not a coherent global navigation implementation.
2. The dropdown and mobile states need rendered keyboard, zoom, overflow, and touch testing before acceptance.
3. These styles are global and therefore may affect pages outside the four-file change even though the new dropdown markup is not present there.

## Checks completed

- Repository, remote, branch, and commit verified.
- Git diff reviewed against the 1.0 commit: 304 insertions and 197 deletions across exactly four files.
- `git diff --check`: pass before snapshot commit.
- `node --check main.js`: pass.
- `node --check clarity-check.js`: pass.
- Local HTML file and asset destinations referenced by the two changed HTML files: no missing local files found.
- Duplicate IDs in `index.html` and `clarity-check.html`: none found.
- Source-order hero, claim, CTA, and copy-lint review: completed with blockers above.
- GitHub Pages source: confirmed as `main` at repository root; this branch is not the live deployment source.

## Checks not completed

- Rendered desktop review: NOT RUN.
- Rendered mobile review: NOT RUN.
- Keyboard and screen-reader inspection: NOT RUN.
- Video caption/transcript review: NOT RUN.
- Live destination and booking completion test: BLOCKED by unknown booking destination and lack of submission authority.
- Analytics verification: NOT RUN. No measurements found.
- Exact currentness refresh for contact details, mentor roster, photos, office hours, service access, and operating policies: NOT RUN or BLOCKED as identified above.

## Decision

**Draft only / blocked for release.** The files are preserved as a version-controlled candidate input. Homepage 2.0 should be implemented from the separate page contract, not by treating this snapshot as approved copy.
