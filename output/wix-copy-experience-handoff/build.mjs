import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  revision,
  sources,
  pages,
  heroLines,
  navLabels,
  closeCopy,
  footerCopy,
} from "./content.mjs";

const root = path.dirname(fileURLToPath(import.meta.url));
const bankPath = path.join(root, "source-testimonials.json");
if (!fs.existsSync(bankPath)) {
  const original = JSON.parse(
    fs.readFileSync(
      "/Users/tylerhebert/.codex/skills/om-website-strategist/references/testimonials.json",
      "utf8",
    ),
  );
  const used = new Set(
    pages.flatMap((p) =>
      p.modules.filter((m) => m.quoteId).map((m) => m.quoteId),
    ),
  );
  fs.writeFileSync(
    bankPath,
    JSON.stringify(
      {
        version: original.version,
        source:
          "OM website skill suite original testimonial bank; received 2026-09-09",
        records: original.records.filter((q) => used.has(q.id)),
      },
      null,
      2,
    ) + "\n",
  );
}
const bank = JSON.parse(fs.readFileSync(bankPath, "utf8"));
const quotes = Object.fromEntries(bank.records.map((q) => [q.id, q]));
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const words = (s) => String(s).trim().split(/\s+/).filter(Boolean).length;
const stamp = "14 September 2026";
const statusLabel = (s) =>
  ({
    locked_text: "Exact Tyler-selected copy",
    source_verbatim: "Exact source wording",
    selected_draft: "Selected testimonial",
    hold: "Content awaiting facts",
    proposed: "Proposed website copy",
  })[s] || s;
const sourceRefs = (m) =>
  (m.sourceIds || [])
    .map(
      (s) => `<a href="#source-${esc(s)}">${esc(sources[s]?.title || s)}</a>`,
    )
    .join(" · ");
function notes(m, extra = "") {
  return `<details class="build-notes"><summary>Build notes &amp; sources</summary>${m.notes ? `<p>${esc(m.notes)}</p>` : ""}${extra}<p class="sources-line">${sourceRefs(m)}</p>${m.claimIds?.length ? `<p>Claim references: ${m.claimIds.map(esc).join(", ")}</p>` : ""}</details>`;
}
const action = (label) =>
  `<span class="cta-spec" title="Website CTA label; destination to be supplied by OM">${esc(label)}</span>`;
function link(item) {
  if (item.target)
    return `<a class="copy-link" href="#${esc(item.target)}">${esc(item.linkLabel)} <span aria-hidden="true">→</span></a>`;
  if (item.url)
    return `<a class="copy-link" href="${esc(item.url)}" target="_blank" rel="noreferrer">${esc(item.linkLabel)} <span aria-hidden="true">↗</span></a>`;
  return "";
}
function module(m, number) {
  const badge = `<div class="module-bar"><span>${esc(number)} · ${statusLabel(m.status)}</span>${!m.hold ? `<button class="copy-button" type="button" data-copy="copy-${esc(m.id)}">Copy text</button>` : ""}</div>`;
  if (m.hold)
    return `<aside class="hold-module" id="${esc(m.id)}">${badge}<h3>${esc(m.title)}</h3><p>${esc(m.notes)}</p><p class="sources-line">${sourceRefs(m)}</p></aside>`;
  if (m.quoteId) {
    const q = quotes[m.quoteId];
    // User explicitly excluded the seed-round context from Jordy's page card.
    const attribution =
      m.quoteId === "T014"
        ? q.attribution_exact.replace(
            " (on closing a $1M seed round after OM's Builder Program)",
            "",
          )
        : q.attribution_exact;
    return `<article class="copy-module testimonial" id="${esc(m.id)}" data-quote-id="${m.quoteId}">${badge}<div id="copy-${esc(m.id)}" class="public-copy"><blockquote>${esc(q.quote_exact)}</blockquote><cite>${esc(attribution)}</cite></div>${notes(m, `<p>${esc(m.reason)}</p><p><b>${m.quoteId}</b> · User-supplied original. Quote publication permission: ${esc(q.publication_permission_status)}. Current identity/title checks and original-source confirmation remain pending. This record supports an individual account only.</p>${m.quoteId === "T014" ? "<p>The separate seed-round context is retained in the source record and intentionally omitted from the display at Tyler’s direction.</p>" : ""}`)}</article>`;
  }
  if (m.hero)
    return `<article class="copy-module hero-module" id="${m.id}">${badge}<div id="copy-${m.id}" class="public-copy"><p class="hero-fixed">For founders who…</p><h3 class="hero-phrase">${esc(heroLines[0])}</h3>${action("Book a Call")}</div><details class="rotation-list"><summary>All six exact rotations</summary><ol>${heroLines.map((l) => `<li>${esc(l)}</li>`).join("")}</ol></details>${notes(m, "<p>The review shows one static phrase. The approved video belongs behind the homepage hero in Wix; this text specimen does not simulate the video or animation.</p>")}</article>`;
  const cardHtml = m.cards
    ? `<div class="copy-cards ${m.group === "benefits" ? "benefits" : m.group === "routes" ? "routes" : ""}">${m.cards.map((card) => `<div class="copy-card"><h4>${esc(card.title)}</h4><p>${esc(card.body)}</p>${link(card)}</div>`).join("")}</div>`
    : "";
  return `<article class="copy-module" id="${esc(m.id)}" data-copy-status="${esc(m.status)}">${badge}<div id="copy-${esc(m.id)}" class="public-copy">${m.eyebrow ? `<p class="eyebrow">${esc(m.eyebrow)}</p>` : ""}<h3>${esc(m.title)}</h3>${m.body ? `<p>${esc(m.body)}</p>` : ""}${cardHtml}${link(m)}${m.links?.length ? `<div class="copy-actions">${m.links.map(link).join("")}</div>` : ""}${m.action ? `<div class="copy-actions">${action(m.action)}</div>` : ""}</div>${notes(m)}</article>`;
}
function closing(p) {
  return `<article class="closing-copy copy-module" data-page-close="${p.id}"><div class="module-bar"><span>Final section · shared website copy</span><button class="copy-button" type="button" data-copy="copy-close-${p.id}">Copy text</button></div><div id="copy-close-${p.id}" class="public-copy"><h3>${closeCopy.title}</h3><p>${closeCopy.body}</p><div class="copy-actions">${closeCopy.actions.map(action).join("")}</div></div><p class="closing-note">CTA labels shown for implementation. Application and booking URLs remain to be supplied; the handoff submits no form.</p></article>`;
}
function capture(p) {
  if (!p.capture)
    return `<p class="new-page-note">New detail-page draft under Programs. Its existing Wix reference is shown in the <a href="#programs">Programs review</a>. No screenshot is presented as an already-built detail page.</p>`;
  return `<details class="page-evidence" open><summary>Current Wix screenshot &amp; requested changes</summary><div class="evidence-layout"><figure><div class="capture-scroll" tabindex="0" aria-label="Scroll the full ${esc(p.label)} screenshot"><img src="assets/${p.capture}" alt="Current Wix ${esc(p.label)} page captured after scrolling on ${stamp}" loading="lazy"></div><figcaption>Current Wix capture · ${stamp} · scroll image or <a class="capture-open" href="assets/${p.capture}" target="_blank" data-title="${esc(p.label)}">open full size</a>. <a href="https://robertehebert.wixstudio.com/opportunity-machine${p.livePath}" target="_blank" rel="noreferrer">View live reference ↗</a></figcaption></figure><div class="redlines"><p class="redline-key">Section locations are named below. Strikethrough covers superseded wording or direction; not every line is a literal screenshot quote.</p>${p.redlines.map((r, i) => `<article><span class="redline-number">${i + 1}</span><div><h3>${esc(r.location)}</h3><p class="before"><s>${esc(r.before)}</s></p><p>${esc(r.after)}</p></div></article>`).join("")}</div></div></details>`;
}
function page(p) {
  return `<section id="${p.id}" class="page-review" data-page="${p.id}"><header class="page-heading"><p class="eyebrow">${p.number} / ${p.parent ? "Programs detail" : "Website page"}</p><h2>${esc(p.label)}</h2><p class="page-question">${esc(p.question)}</p></header><details class="page-contract"><summary>Page purpose, sequence &amp; decision basis</summary><p><b>Primary audience:</b> ${esc(p.audience)}. <b>Goal:</b> ${esc(p.goal)}.</p><p>${esc(p.rationale)}</p><p class="anchor-source">${esc(p.sourceNote)}</p><ol>${p.modules.map((m) => `<li><a href="#${m.id}">${esc(m.quoteId ? `${m.quoteId} · founder account` : m.title)}</a>${m.hold ? " (awaiting facts)" : ""}</li>`).join("")}<li>Apply Now + Schedule a Call</li></ol></details>${capture(p)}<div class="copy-section-heading"><p class="eyebrow">Recommended page order</p><p>Website copy appears in the panels below. Developer instructions are under each panel.</p></div>${p.modules.map((m, i) => module(m, `${p.number}.${String(i + 1).padStart(2, "0")}`)).join("")}${closing(p)}</section>`;
}

const global = `<section id="global-shell" class="page-review global-review" data-page="global-shell"><header class="page-heading"><p class="eyebrow">00 / Global Shell</p><h2>The shared site structure</h2><p class="page-question">Give every page a clear place and a clear next action.</p></header><div class="shell-spec"><h3>Header navigation</h3><div class="nav-spec"><b>OM</b>${navLabels.map((n) => `<span>${esc(n)}</span>`).join("")}${action("Book a Call")}</div><ol><li>OM logo links to Home. Membership is the first navigation item. Programs owns its detail pages.</li><li>Events, Mentors, Alumni, Ecosystem, and About OM each lead to one page. Community is folded into Ecosystem; ETI stays under Programs.</li><li>On mobile, use a menu with the same order and an accessible close control. Keep Book a Call easy to find.</li><li>Remove the outdated closure notice. A future notice needs a current message and expiry date.</li></ol></div><div class="global-grid"><article><h3>Visual rhythm</h3><p>Light backgrounds, dark text, navy accents. Use real photography beside the copy. Avoid light-blue video washes and background grids. Preserve each outside organization’s logo proportions.</p></article><article><h3>Copy hierarchy</h3><p>One clear heading and short explanation per section. Program cards explain the founder’s question and the work involved. Detail lives on the linked page.</p></article><article><h3>Proof placement</h3><p>One attributed account beside the experience it supports. Keep the seven selected quotes verbatim. Avoid a repeated testimonial carousel.</p></article><article><h3>Shared footer</h3><p>Repeat the navigation order. Retain current, verified contact details and legal/social links. Do not carry forward old program names or invent contact information.</p></article></div>${closing({ id: "global-shell" })}<details class="build-notes"><summary>Global implementation details</summary><p>Use the site’s approved Futura fonts where provisioned. This review uses system fonts for portability. Set a consistent content width, 16px minimum body type, clear focus styles, and a single-column mobile reading order. These dimensions are implementation recommendations, not claimed transcript quotations.</p><p>Internal links in the handoff navigate review sections. Final Wix slugs and redirects must be mapped by the developer. Unknown booking/application URLs stay out of production until supplied.</p></details></section>`;
const nav = `<nav aria-label="Page tree"><a class="tree-link" href="#global-shell"><small>00</small> Global Shell</a>${pages.map((p) => `<a class="tree-link ${p.parent ? "child" : ""}" href="#${p.id}"><small>${p.number}</small> ${esc(p.label)}</a>`).join("")}<a class="tree-link" href="#review-register"><small>09</small> Review notes &amp; sources</a></nav>`;
const sourceTable = Object.entries(sources)
  .map(
    ([id, s]) =>
      `<article id="source-${id}"><h3>${esc(s.title)}</h3><p>${esc(s.status)}</p>${s.locator.startsWith("https:") || s.locator === "source-testimonials.json" ? `<a href="${esc(s.locator)}" target="_blank" rel="noreferrer">Open source ↗</a>` : `<p class="source-locator">${esc(s.locator)}</p>`}</article>`,
  )
  .join("");
const end = `<section id="review-register" class="page-review" data-page="review-register"><header class="page-heading"><p class="eyebrow">09 / Review notes</p><h2>What changed and what still needs input</h2></header><div class="global-grid"><article><h3>Changes in this revision</h3><ul><li>Actual copy for every supported page section, in website order.</li><li>Five Programs detail contracts and seven quotes in their intended contexts.</li><li>Eight refreshed Wix screenshots with named-location redlines.</li><li>Removed the requested mentor-roster assignment and the previously removed reassurance.</li><li>Corrected About mission placement; exact source wording restored.</li></ul></article><article><h3>Remaining owner inputs</h3><ul><li>Booking and application URLs; current terms and call flow.</li><li>Current program details, including ETI and mentor access.</li><li>Final stage labels and homepage typography.</li><li>Named partner/event inventories and permissions.</li><li>Current profile/asset facts and testimonial publication clearance.</li></ul></article></div><div class="skills-note"><h3>How the OM skills shaped this review</h3><p>Website Strategist established source boundaries; Page Architect ordered each page; Web Copy Builder turned supported direction into short public copy; Testimonial Selector preserved the source accounts and their context. Journey review checked the routes through the handoff. The local improvement record captures the placement errors corrected here.</p><p>Peer patterns P02/P08 informed founder routing; P04 informed program comparison; P05 informed the mentor explanation; P06 informed relationship labels; P01 informed organizational purpose. These come from the submitted studies, not fresh conversion research. No measurements found.</p></div><details class="build-notes"><summary>Verification scope and review status</summary><p>New copy is proposed. Exact hero phrases and source quotations are preserved separately. Source and placement checks are recorded in <a href="qa-receipt.json">qa-receipt.json</a>. <a href="page-contracts.json">Page contracts</a> contain source references and unresolved items. Rendered desktop/mobile checks are recorded after the browser review.</p><p>The suite’s September 9 seed checker still requires five older hero endings and the removed reassurance. This review follows Tyler’s later explicit six-line wording and removal. The skill files and original claim records have not been rewritten to hide that difference.</p></details><h3 class="source-heading">Source register</h3><div class="source-grid">${sourceTable}</div></section>`;
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>OM Website 2.0 | Copy &amp; Developer Handoff</title><link rel="icon" href="data:,"><link rel="stylesheet" href="styles.css"><script src="app.js" defer></script></head><body><a class="skip-link" href="#main">Skip to handoff</a><header class="topbar"><a class="brand" href="#overview">OM <span>Website 2.0</span></a><div class="topbar-actions"><button id="copy-view" type="button" aria-pressed="false">Copy view</button><button id="print-review" type="button">Print / PDF</button><button class="menu-button" type="button" aria-expanded="false" aria-controls="page-tree">Pages</button></div></header><aside id="page-tree" class="page-tree"><p class="eyebrow">Developer review tree</p>${nav}<p class="tree-note">Candidate copy · local review<br>${stamp}</p></aside><main id="main"><section id="overview" class="overview"><p class="eyebrow">${esc(revision)}</p><h1>The words, the order,<br>and the changes to make.</h1><p class="lede">Review each page from top to bottom. Compare the current Wix capture, read the proposed website copy, then open the notes for placement and source details.</p><div class="review-legend"><span>Proposed website copy</span><span>Exact source wording</span><span>Content awaiting facts</span></div><p class="scope-note">This is a developer handoff. Booking labels are specimens; review links navigate this document. Live Wix has not been changed.</p><div class="overview-links"><a href="#global-shell">Start with Global Shell →</a><a href="#review-register">Review changes &amp; open inputs →</a></div></section>${global}${pages.map(page).join("")}${end}<footer class="handoff-footer">OM Website 2.0 · ${stamp} · Local candidate handoff</footer></main><dialog id="capture-dialog" aria-labelledby="capture-title"><div class="dialog-toolbar"><h2 id="capture-title">Wix capture</h2><button type="button" id="close-capture">Close</button></div><div class="dialog-image"><img alt=""></div></dialog><div id="copy-announcement" class="sr-only" role="status" aria-live="polite"></div></body></html>`;
const footerMarkup = `<article id="global-footer" class="copy-module"><div class="module-bar"><span>Shared footer · proposed website copy</span><button class="copy-button" type="button" data-copy="copy-global-footer">Copy text</button></div><div id="copy-global-footer" class="public-copy"><h3>${esc(footerCopy.title)}</h3><p>${esc(footerCopy.body)}</p><h4>${esc(footerCopy.navigationHeading)}</h4><div class="nav-spec">${navLabels.map(n=>`<span>${esc(n)}</span>`).join("")}</div><h4>${esc(footerCopy.contactHeading)}</h4>${action(footerCopy.action)}</div><details class="build-notes"><summary>Footer placement &amp; remaining facts</summary><p>Use this shared footer after the two-action closing section on every page. Footer navigation follows the header order and uses the same destinations. Retain current verified contact details, social links, and legal links; those factual values are not invented here.</p><p>${sourceRefs(footerCopy)}</p></details></article>`;
const coverage = {
  revision,
  status: "draft_copy_placement_review_not_publication_approval",
  global: {id: "global-shell", written: ["Header navigation", "Shared closing copy", "Footer copy"], pending: ["Booking/application destinations", "Current contact details, social and legal links"]},
  pages: pages.map(p=>({
    id:p.id, label:p.label,
    copy_modules:p.modules.filter(m=>!m.hold).length,
    cards:p.modules.reduce((n,m)=>n+(m.cards?.length||0),0),
    sections:p.modules.map((m,i)=>({id:m.id,order:i+1,status:m.hold?"awaiting_source_content":m.quoteId?"exact_testimonial":m.status,title:m.title||m.quoteId})),
    missing_content:p.modules.flatMap(m=>m.hold?[{id:m.id,label:m.title}]: (m.pendingInputs||[]).map(label=>({id:m.id,label}))),
    publication_status:"pending",
  })),
};
const coverageMarkup = `<section id="copy-coverage" class="coverage-panel"><h3>Copy and placement check</h3><p>Draft copy is written in the sections linked below. This is not a claim that every factual inventory, asset, or publication approval is complete. The last column identifies content that still needs source material.</p><div class="coverage-scroll" tabindex="0" aria-label="Scroll copy coverage table"><table><thead><tr><th scope="col">Page</th><th scope="col">Written copy</th><th scope="col">Content still needed</th></tr></thead><tbody><tr><th scope="row"><a href="#global-shell">Global Shell</a></th><td>Header, closing section, <a href="#global-footer">footer</a></td><td>Current contact/legal details and booking/application URLs</td></tr>${coverage.pages.map(p=>`<tr><th scope="row"><a href="#${p.id}">${esc(p.label)}</a></th><td>${p.copy_modules} modules${p.cards?` · ${p.cards} cards`:""}<br>Shared closing copy follows</td><td>${p.missing_content.length?p.missing_content.map(h=>`<a href="#${h.id}">${esc(h.label)}</a>`).join("<br>"):"No source-content placeholder"}</td></tr>`).join("")}</tbody></table></div><p>Current program terms, eligibility, permissions, and final destination checks remain separate release gates even where all draft words are written. <a href="copy-coverage.json">Open the section-by-section placement record</a>.</p></section>`;
fs.writeFileSync(path.join(root,"copy-coverage.json"),JSON.stringify(coverage,null,2)+"\n");
fs.writeFileSync(
  path.join(root, "index.html"),
  html
    .replace('href="styles.css"', 'href="review.css"')
    .replace('src="app.js"', 'src="review.js"')
    .replace('<details class="build-notes"><summary>Global implementation details', `${footerMarkup}<details class="build-notes"><summary>Global implementation details`)
    .replace('<h3 class="source-heading">', `${coverageMarkup}<h3 class="source-heading">`)
    .replace('href="#review-register">Review changes &amp; open inputs →', 'href="#copy-coverage">Copy coverage &amp; open inputs →'),
);
const contracts = pages.map((p) => ({
  schema_version: "om-handoff-review-2.0",
  id: p.id,
  page_type: p.parent ? "program_detail" : p.id,
  status: "candidate_pending_review",
  goal: p.goal,
  canon_version: "1.2.0",
  primary_audience: p.audience,
  primary_question: p.question,
  supporting_questions: [
    "What support is relevant?",
    "What happens?",
    "What source supports this?",
    "What is my next action?",
  ],
  maintenance_owner: "Tyler / relevant OM content owner",
  input_basis: p.sourceNote,
  target: { environment: "local_handoff", url: `index.html#${p.id}` },
  parent: p.parent || null,
  hero:
    p.id === "homepage"
      ? {
          elements: [
            "approved_video",
            "fixed_phrase",
            "rotating_statement",
            "primary_cta",
          ],
          fixed_text: "For founders who…",
          rotating_endings: heroLines,
          cta_label: "Book a Call",
          cta_destination: null,
          visual_approval: "pending",
        }
      : null,
  sections: p.modules.map((m, i) => ({
    ...m,
    order: i + 1,
    mobile_order: i + 1,
    headline: m.title || null,
    word_count: m.quoteId
      ? words(quotes[m.quoteId].quote_exact)
      : words([m.title, m.body].join(" ")),
    approval_status:
      m.status === "locked_text" ? "approved_text_only" : "pending_review",
    claim_ids: [`${p.id}.${m.id}.draft-basis`],
    external_claim_references: m.claimIds || [],
    ...(m.quoteId ? { quote_exact: quotes[m.quoteId].quote_exact } : {}),
  })),
  claims: p.modules.map((m) => ({
    id: `${p.id}.${m.id}.draft-basis`,
    source_ids: m.sourceIds,
    kind: m.quoteId ? "attributed_experience" : "copy_basis",
    support_status: "source_bounded_draft",
    approval_status: "pending",
    note: "Traceability record for candidate copy; not a new canonical fact approval.",
  })),
  links: p.modules
    .flatMap((m) => [m, ...(m.cards || []), ...(m.links || [])])
    .filter((m) => m.target || m.url || m.action)
    .map((m, i) => ({
      id: `${p.id}-link-${i}`,
      label: m.linkLabel || m.action,
      destination: m.target ? `#${m.target}` : m.url || null,
      type: m.target
        ? "review_navigation"
        : m.url
          ? "source_link"
          : "pending_booking_destination",
      approved: false,
    })),
  testimonial_uses: p.modules
    .filter((m) => m.quoteId)
    .map((m) => ({
      quote_id: m.quoteId,
      mode: "full",
      scope: "individual_attributed_experience",
      publication_status: "pending",
      placement: "selected_by_tyler",
    })),
  shared_close: closeCopy,
  manual_reviews: {
    claim_semantics: "reviewed_as_candidate",
    quote_context: "reviewed",
    copy_style: "reviewed",
    rendered_desktop: "see_qa_receipt",
    rendered_mobile: "see_qa_receipt",
    accessibility: "see_qa_receipt_bounded_checks_only",
    live_destinations: "not_run",
  },
  page_approval: { status: "pending", by: null, source_id: null },
  publication_requested: false,
}));
fs.writeFileSync(
  path.join(root, "page-contracts.json"),
  JSON.stringify(
    {
      revision,
      source_register: sources,
      shared_footer: footerCopy,
      overrides: [
        "Later six exact hero phrases supersede seed five-phrase list",
        "User removed no-equity reassurance",
        "User removed the mentor-roster refresh instruction",
      ],
      pages: contracts,
    },
    null,
    2,
  ) + "\n",
);
console.log(
  `Built ${pages.length} page contracts, ${pages.reduce((n, p) => n + p.modules.length, 0)} content/hold modules, ${bank.records.length} selected testimonials.`,
);
