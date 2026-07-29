// OM Clarity Check — sandbox rebuild, 2026-07-29.
// Reconciled with the existing (previously unimplemented) "Clarity Check" spec
// in CTA-CONSISTENCY-PASS.md + ANALYTICS-CONSENT-GATING-SPEC.md: canonical CTA
// copy, consent-gated analytics events, and a "Send my Snapshot" email capture.
// Client-side only — the Snapshot capture is a demo (localStorage), not wired
// to a real mailing list. A real deploy needs: a sitewide cookie-consent
// banner (none exists yet in this replica) and a real Snapshot delivery
// backend (Mailchimp or equivalent — see NEWSLETTER-MAILCHIMP-MEMORY-PACKET.md).

(function () {
  const app = document.getElementById("cc-app");
  if (!app) return;

  // ---------------------------------------------------------------------
  // Consent-gated analytics stub — mirrors ANALYTICS-CONSENT-GATING-SPEC.md.
  // Fails safe: with no sitewide consent banner deployed yet, hasConsent()
  // always returns false, so nothing fires. Wire a real banner to set
  // localStorage 'om_consent' = 'granted' before this does anything live.
  // Rule preserved from the spec: never pass raw free-text answers as event
  // params — only the band.
  // ---------------------------------------------------------------------
  function hasConsent() {
    try { return localStorage.getItem("om_consent") === "granted"; }
    catch (e) { return false; }
  }
  function fireEvent(name, params) {
    if (!hasConsent()) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: name }, params || {}));
  }

  const PERSONAS = [
    {
      id: "technical",
      title: "The Technical Founder",
      sub: "I can build it. I need to know if it's worth building.",
      resultLead: "As a technical founder, this usually isn't a build problem — it's a proof problem. The instinct is to keep shipping; the credibility investors and customers actually check for is whether anyone asked for it first.",
    },
    {
      id: "visionary",
      title: "The Entrepreneur / Visionary",
      sub: "I see where this could go. I need the operating discipline to get there.",
      resultLead: "As a visionary, the risk was never the size of the idea — it's whether the evidence below can catch up to how far ahead you're already thinking.",
    },
    {
      id: "operator",
      title: "The Business Operator",
      sub: "I know how to run something well. I want to build my own.",
      resultLead: "As an operator, you already know how to run something well. This shows you the part that's specific to a startup: proving the thing is worth running before you scale it.",
    },
    {
      id: "student",
      title: "The Student / Future Founder",
      sub: "I want the real reps before I'm in the arena.",
      resultLead: "As a student, you're not behind — you're getting the reps most founders only learn the hard way, later, with a real company on the line.",
    },
  ];

  const QUESTIONS = [
    {
      id: "conversations",
      snapLabel: "Customer conversations so far",
      prompt: "How many real customer conversations have you had about this problem?",
      note: "Investors call this “customer discovery.” It's usually the first thing they ask about — before the deck, before the product.",
      options: [
        { id: "none", label: "None yet", score: 0 },
        { id: "1-4", label: "A handful — 1 to 4", score: 1 },
        { id: "5-14", label: "A solid sample — 5 to 14", score: 2 },
        { id: "15+", label: "15 or more", score: 3 },
      ],
    },
    {
      id: "buyer",
      snapLabel: "Can you name the exact buyer?",
      prompt: "Can you name the exact person who buys this — their role, not just a demographic?",
      note: "This is what “go-to-market clarity” means in practice: a specific person, not a category of people.",
      options: [
        { id: "general", label: "Not yet — it's more of a general audience", score: 0 },
        { id: "rough", label: "I have a rough picture", score: 1 },
        { id: "exact", label: "Yes — I can describe their role and their day", score: 2 },
      ],
    },
    {
      id: "workaround",
      snapLabel: "What they do about it today",
      prompt: "What are those people doing about this problem today?",
      note: "Every real problem already has a workaround, even a bad one. Naming it is how you position against it — instead of against nothing.",
      options: [
        { id: "unknown", label: "Honestly, I'm not sure", score: 0 },
        { id: "guess", label: "I have a guess", score: 1 },
        { id: "firsthand", label: "I've seen or heard it firsthand", score: 2 },
      ],
    },
    {
      id: "commitment",
      snapLabel: "Real commitment shown",
      prompt: "Has anyone put real skin in the game — paid, signed, or committed real time?",
      note: "This is usually the strongest signal in any pitch. Verbal interest is common; committed action is rare — and it's what gets remembered.",
      options: [
        { id: "none", label: "Not yet", score: 0 },
        { id: "verbal", label: "Strong verbal interest", score: 1 },
        { id: "concrete", label: "Yes — money, a signature, or scheduled time", score: 3 },
      ],
    },
    {
      id: "build",
      snapLabel: "How much is built",
      prompt: "How much have you already built?",
      note: "Tracked separately on purpose — a working product doesn't replace proof someone wants it, and having no build doesn't disqualify you either.",
      options: [
        { id: "idea", label: "Just an idea so far", score: 0 },
        { id: "mockup", label: "Mockups, sketches, or a landing page", score: 1 },
        { id: "working", label: "A working product or prototype", score: 2 },
      ],
    },
    {
      id: "entity",
      snapLabel: "Business entity",
      prompt: "Last one — have you set up a business entity yet, like an LLC?",
      note: "Totally optional, and it won't change your read above — this just helps OM get to know you and point you toward the right resources if and when you need them.",
      options: [
        { id: "not_yet", label: "Not yet — haven't looked into it", score: 0 },
        { id: "considering", label: "Not yet — I'm looking into it", score: 0 },
        { id: "llc", label: "Yes — an LLC", score: 0 },
        { id: "other_entity", label: "Yes — a different entity (C-corp, partnership, etc.)", score: 0 },
        { id: "skip", label: "Prefer not to say", score: 0 },
      ],
    },
  ];

  // Copy principle (per Tyler, 2026-07-29): the read should stand on its own
  // as a useful insight that makes the founder's next decision easier — not
  // "you need Builder because the quiz said so." Session pairing stays (it's
  // genuinely useful), but is framed as guidance that already exists for this
  // exact move, not a sales pitch. Momentum band draws on the launch-ready
  // Door 2 bridge language (PROGRAMS-DOOR-2-BRIDGE-COPY.md).
  const RESULTS = {
    foundation: {
      signal: "Building the Foundation",
      title: "You're Building the Foundation — And That's Exactly Where Builder Starts.",
      docTitle: "Your Idea Is Ahead of Your Evidence.",
      summary: "Every founder starts here. The gap right now isn't your idea or your effort — it's that the evidence for it mostly lives in your head.",
      move: "Have <strong>5 real conversations</strong> with people who match your buyer — not friends, not family. That's what actually changes the read on this venture, fast.",
      session: "Session 1 – 2 · Phase 01: Discover & Design",
      sessionDetail: "JTBD + Buying Center, then a Discovery Plan built to run exactly that kind of conversation well — the kind that surfaces real evidence instead of polite encouragement.",
      credibility: "Right now, the biggest credibility gap with anyone who might back this — an investor, a partner, a future hire — isn't your product. It's proof someone besides you has this problem. That's a fast thing to close, not a slow one, once you know how to ask.",
    },
    momentum: {
      signal: "Gaining Real Momentum",
      title: "You've Already Started. That's Not The Problem.",
      docTitle: "You've Already Started. That's Not The Problem.",
      summary: "Quiet traction is one of the most stressful places to be as a founder — you're not stalled enough to obviously quit, and not confirmed enough to confidently keep going. That's exactly what customer conversations are for: not to start over, but to find out what to keep, what to change, and what to stop. Nothing you've built is wasted. It's data — you just haven't asked it the right questions yet.",
      move: "Turn your <strong>strongest interview insight</strong> into one specific, testable value proposition.",
      session: "Session 3 – 4 · Phase 01 – 02: UVP + MVP, Evidence to Strategy",
      sessionDetail: "Turns early signal into a sharp value promise and a lean MVP plan, then synthesizes what your interviews actually said into a deliberate go-to-market strategy.",
      credibility: "This is the stage where people start taking you seriously — but not yet seriously enough to write a check, sign a contract, or bet their own credibility on yours. The move from here isn't to throw out what you've made — it's testing it against real customers before spending more time or money assuming you already know the answer.",
    },
    ready: {
      signal: "Investor-Ready Signal",
      title: "You've Earned the Right to Move Fast.",
      docTitle: "You've Earned the Right to Move Fast.",
      summary: "The buyer, the workaround, and real commitment are all in place. What usually stands between here and a raise isn't more evidence — it's the room, and the story that gets you in it.",
      move: "Turn your <strong>strongest proof point</strong> into a pitch that survives real investor questions.",
      session: "Session 6 – 7 · Phase 03: Traction & Launch",
      sessionDetail: "Traction + Revenue to stress-test the model, then Pitch Craft to shape your evidence into a story that earns the room.",
      credibility: "What opens doors from here isn't a bigger product — it's credibility that compounds: for funding, for partnerships, for the next hire who's trusting you with their own career. That's the part of “investor-ready” that's easy to miss.",
    },
  };

  // ---------------------------------------------------------------------
  // CLARITY SNAPSHOT — printable take-home document.
  // Design intent: the PDF has to be worth keeping even if the founder never
  // contacts OM. Page 1 mirrors back what they told us + the one move; page 2
  // is an actual working worksheet for that move; page 3 teaches the
  // evaluation standard everyone else uses. No stats, testimonials, or
  // outcome claims anywhere in it — PUBLIC-CLAIMS-REGISTRY discipline applies
  // to a downloadable artifact exactly as it does to the site.
  // ---------------------------------------------------------------------
  const SNAPSHOT = {
    foundation: {
      worksheetTitle: "Your Next Five Conversations",
      worksheetLead: "The fastest way to change the read on this venture isn't building more — it's five conversations with people who match your buyer. Here's how to run them so what you hear is actually usable.",
      blocks: [
        {
          h: "How to open",
          type: "p",
          text: "You're not selling, and it helps to say so out loud: <em>“I'm not here to pitch you anything — I'm trying to understand how you handle this today.”</em> Then stop talking. You want to hear what already happened, not what someone imagines they might do.",
        },
        {
          h: "Six questions that get you real answers",
          type: "ol",
          items: [
            "Walk me through the last time you dealt with this. What actually happened?",
            "What did you do about it — step by step?",
            "What did that cost you in time, money, or hassle?",
            "Had you looked for a better way? What did you find, and why didn't you stick with it?",
            "Who else was involved in deciding what to do?",
            "What would have to be true for you to handle it differently next time?",
          ],
        },
        {
          type: "avoid",
          k: "What quietly invalidates a conversation",
          items: [
            "Describing your solution before the questions are done — once someone knows what you want to hear, you can't unhear their politeness.",
            "Hypotheticals: “would you use this?”, “what would you pay?” Stated intent predicts very little about behavior.",
            "Counting enthusiasm as evidence. “That's a great idea” is the most common thing a founder hears right before nothing happens.",
            "Talking mostly to friends, family, or anyone who wants you to succeed.",
          ],
        },
        {
          h: "Conversation log",
          type: "table",
          headers: ["Who + their role", "Date", "What they do about it today", "What surprised me"],
          rows: 5,
        },
        {
          type: "note",
          text: "Five is roughly where patterns start to show. If four of five describe the same workaround, you've found something real. If all five describe something different, the problem isn't shared yet — which is also worth knowing before you build.",
        },
      ],
    },
    momentum: {
      worksheetTitle: "Make One Insight Testable",
      worksheetLead: "You already have signal. The work now is turning the strongest thing you heard into one claim sharp enough to be wrong — and then testing that claim instead of adding features.",
      blocks: [
        {
          h: "Write the claim in their words, not marketing language",
          type: "lines",
          items: [
            "The specific role who buys this",
            "Their situation, in the words you actually heard",
            "The progress they're trying to make",
            "What their current workaround costs them",
          ],
        },
        {
          h: "Find the deal-killer",
          type: "ol",
          items: [
            "List the three things that must be true for this to work.",
            "For each, ask: if this is false, does the venture <em>end</em> — or just get harder? Usually only one of them ends it.",
            "That's the one you test next. Not the easiest one, and not the one you're most confident about.",
          ],
        },
        {
          type: "table",
          headers: ["Assumption", "If false, does it end this?", "How confident am I, honestly?"],
          rows: 3,
        },
        {
          h: "Design one test",
          type: "lines",
          items: [
            "The assumption I'm testing",
            "What I will actually do (not build)",
            "How many people, and by when",
            "Pass looks like",
            "Fail looks like",
            "What I'll do if it fails",
          ],
        },
        {
          type: "note",
          text: "A test you cannot fail is not a test. If you can't write the fail line, you're planning a demo rather than an experiment.",
        },
      ],
    },
    ready: {
      worksheetTitle: "Pressure-Test Before the Room Does",
      worksheetLead: "The evidence is there. What decides the room now is whether your answers hold up when someone pushes on them — and whether each one traces to something checkable.",
      blocks: [
        {
          h: "The questions that get asked once the story is good",
          type: "ol",
          items: [
            "How many of those customer conversations did you run yourself?",
            "What are people doing today instead, and what does that cost them?",
            "Who has paid, signed, or scheduled time — and what exactly did they commit to?",
            "What did you believe six months ago that you no longer believe?",
            "What would make you walk away from this?",
            "What are the unit economics at your current price — not at scale?",
            "Who is the exact buyer, and who else has to say yes before money moves?",
            "What have you tried that didn't work?",
            "Why are you the right person for this specific problem?",
            "If this works, what breaks first?",
          ],
        },
        {
          type: "avoid",
          k: "Where these answers usually fail",
          items: [
            "An answer with no proof behind it is a story. Every one above should trace to something a stranger could check.",
            "Numbers at scale standing in for numbers today.",
            "Naming a market instead of naming a buyer.",
            "No real answer to #5 — if nothing would change your mind, you're defending a position rather than testing a business.",
          ],
        },
        {
          h: "Answer and proof",
          type: "table",
          headers: ["Q #", "Your answer in one sentence", "The proof behind it"],
          rows: 6,
        },
        {
          type: "note",
          text: "Run this out loud with someone who has no stake in your success. The gaps tend to show up in the pause before you answer, not on the page.",
        },
      ],
    },
  };

  // Page 3 reference: the signals themselves, plus where this visitor's own
  // answers place them. Deliberately framed as the common standard, not an
  // OM-specific scorecard.
  const SIGNAL_ROWS = [
    {
      id: "conversations",
      label: "Customer evidence",
      meaning: "Conversations with real potential buyers about what they actually did — not what they say they might do.",
      state: { none: "no", "1-4": "part", "5-14": "yes", "15+": "yes" },
    },
    {
      id: "buyer",
      label: "A named buyer",
      meaning: "A specific role you can describe, including how their day works — not a demographic or a market segment.",
      state: { general: "no", rough: "part", exact: "yes" },
    },
    {
      id: "workaround",
      label: "The current workaround",
      meaning: "What people do about this today, seen or heard firsthand. It's what you're really competing against.",
      state: { unknown: "no", guess: "part", firsthand: "yes" },
    },
    {
      id: "commitment",
      label: "Real commitment",
      meaning: "Money, a signature, access, or scheduled time. Verbal interest is common; committed action is rare and it's what gets remembered.",
      state: { none: "no", verbal: "part", concrete: "yes" },
    },
  ];

  const STATE_COPY = { yes: "In place", part: "Partly", no: "Not yet" };

  const state = { screen: "intro", step: 0, persona: null, answers: {}, snapshotSent: false };
  const TOTAL_STEPS = 1 + QUESTIONS.length; // persona + questions

  function evidenceBand(score) {
    if (score <= 3) return "foundation";
    if (score <= 7) return "momentum";
    return "ready";
  }

  function score() {
    return ["conversations", "buyer", "workaround", "commitment"].reduce(
      (sum, id) => sum + (state.answers[id] ? state.answers[id].score : 0),
      0
    );
  }

  function buildLabel() {
    const b = state.answers.build;
    if (!b) return "";
    if (b.id === "idea") return "No build yet";
    if (b.id === "mockup") return "Mockup / landing page";
    return "Working product";
  }

  // Maps this quiz's evidence/build read onto contact.html's existing
  // "I am a..." taxonomy (Founder w/ idea / early build / revenue), so a
  // Snapshot submission can be reconciled against the same segment field
  // used elsewhere in the funnel instead of inventing a third taxonomy.
  function contactFormSegment() {
    const b = state.answers.build;
    const commitment = state.answers.commitment;
    if (commitment && commitment.id === "concrete" && evidenceBand(score()) === "ready") {
      return "Founder with revenue";
    }
    if (b && (b.id === "mockup" || b.id === "working")) return "Founder with an early build";
    return "Founder with an idea";
  }

  function render() {
    if (state.screen === "intro") return renderIntro();
    if (state.screen === "persona") return renderPersona();
    if (state.screen === "questions") return renderQuestion(state.step);
    return renderResult();
  }

  function progressFill(stepIndex) {
    return Math.round((stepIndex / TOTAL_STEPS) * 100);
  }

  function renderIntro() {
    fireEvent("clarity_start", {});
    app.innerHTML = `
      <div class="rc-card center">
        <div class="rc-step-label">Before you start</div>
        <div class="rc-prompt" style="margin-top:0.6rem;">Two minutes. Six questions. One honest read.</div>
        <p class="rc-note" style="max-width:38rem; margin:0 auto 1.6rem;">No wrong answers — this isn't a test you can fail. It's the same handful of signals investors, partners, and customers already use to size up a startup, turned into something you can see for yourself.</p>
        <div class="cta-row center">
          <button type="button" class="btn btn-blue" id="cc-start">Start the Clarity Check &rarr;</button>
        </div>
      </div>
    `;
    document.getElementById("cc-start").addEventListener("click", () => {
      state.screen = "persona";
      render();
    });
  }

  function renderPersona() {
    app.innerHTML = `
      <div class="rc-card">
        <div class="rc-step-label">Before we start</div>
        <div class="rc-progress-track"><div class="rc-progress-fill" style="width:${progressFill(0)}%"></div></div>
        <div class="rc-prompt">Which describes you best today?</div>
        <p class="rc-note">There's no gate here — Builder 1.0 works for all four. This just shapes the language on your result.</p>
        <div class="rc-persona-grid">
          ${PERSONAS.map((p) => `
            <button type="button" class="rc-persona ${state.persona && state.persona.id === p.id ? "selected" : ""}" data-persona="${p.id}">
              <div class="rc-persona-title">${p.title}</div>
              <div class="rc-persona-sub">${p.sub}</div>
            </button>
          `).join("")}
        </div>
        <div class="rc-nav">
          <span></span>
          <button type="button" class="btn btn-blue" id="rc-next" ${state.persona ? "" : "disabled"}>Continue</button>
        </div>
      </div>
    `;
    app.querySelectorAll("[data-persona]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.persona = PERSONAS.find((p) => p.id === btn.dataset.persona);
        render();
      });
    });
    const next = document.getElementById("rc-next");
    if (next) next.addEventListener("click", () => { state.screen = "questions"; state.step = 0; render(); });
  }

  function renderQuestion(index) {
    const q = QUESTIONS[index];
    const selected = state.answers[q.id];
    app.innerHTML = `
      <div class="rc-card">
        <div class="rc-step-label">Question ${index + 1} of ${QUESTIONS.length}</div>
        <div class="rc-progress-track"><div class="rc-progress-fill" style="width:${progressFill(index + 1)}%"></div></div>
        <div class="rc-prompt">${q.prompt}</div>
        <p class="rc-note">${q.note}</p>
        <div class="rc-options">
          ${q.options.map((opt) => `
            <label class="rc-option ${selected && selected.id === opt.id ? "selected" : ""}" data-option="${opt.id}">
              <input type="radio" name="${q.id}" ${selected && selected.id === opt.id ? "checked" : ""} readonly>
              <span>${opt.label}</span>
            </label>
          `).join("")}
        </div>
        <div class="rc-nav">
          <button type="button" class="btn btn-ghost-navy" id="rc-back">Back</button>
          <button type="button" class="btn btn-blue" id="rc-next" ${selected ? "" : "disabled"}>
            ${index === QUESTIONS.length - 1 ? "See my read" : "Continue"}
          </button>
        </div>
      </div>
    `;
    app.querySelectorAll("[data-option]").forEach((label) => {
      label.addEventListener("click", () => {
        state.answers[q.id] = q.options.find((o) => o.id === label.dataset.option);
        render();
      });
    });
    document.getElementById("rc-back").addEventListener("click", () => {
      if (index === 0) { state.screen = "persona"; } else { state.step -= 1; }
      render();
    });
    const next = document.getElementById("rc-next");
    if (next) next.addEventListener("click", () => {
      if (index === QUESTIONS.length - 1) {
        fireEvent("clarity_complete", { band: evidenceBand(score()) });
        state.screen = "result";
      } else {
        state.step += 1;
      }
      render();
    });
  }

  function renderSnapshotBlock() {
    if (state.snapshotSent) {
      return `
        <div class="rc-goal" style="margin-bottom:1.6rem;">
          <strong>Snapshot sent (demo).</strong> In production this delivers your Clarity Snapshot by email and, if checked, adds you to the monthly Founder Brief. No real email was sent here — this build has no mailing-list backend yet.
        </div>
      `;
    }
    return `
      <form id="cc-snapshot-form" class="rc-snapshot">
        <div class="field">
          <label for="cc-email">Email</label>
          <input type="email" id="cc-email" name="email" placeholder="you@example.com" required>
        </div>
        <label style="display:flex; align-items:flex-start; gap:10px; font-size:0.92rem; color:var(--gray); margin-bottom:14px;">
          <input type="checkbox" id="cc-brief-optin" style="margin-top:3px;">
          <span>Also send me the monthly Founder Brief.</span>
        </label>
        <p class="rc-note" style="margin-bottom:1rem;">We'll only use this to send your Clarity Snapshot, plus the monthly Founder Brief if you check that box. Nothing else.</p>
        <button type="submit" class="btn btn-navy">Send my Snapshot &rarr;</button>
      </form>
    `;
  }

  function wireSnapshotForm() {
    const form = document.getElementById("cc-snapshot-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("cc-email").value;
      const briefOptin = document.getElementById("cc-brief-optin").checked;
      try {
        localStorage.setItem("cc_snapshot_demo", JSON.stringify({
          email, briefOptin, band: evidenceBand(score()), segment: contactFormSegment(),
          sentAt: "demo-no-timestamp",
        }));
      } catch (err) { /* demo only, ignore storage failures */ }
      const band = evidenceBand(score());
      fireEvent("clarity_email", { band });
      // Newsletter opt-in gets its own canonical event name, separate from
      // the Snapshot capture itself, per ANALYTICS-CONSENT-GATING-SPEC.md's
      // Newsletter Tracking Rule.
      if (briefOptin) fireEvent("brief_signup", { band });
      state.snapshotSent = true;
      render();
    });
  }

  // "Get the Brief" is a standalone CTA (per Tyler, 2026-07-29: interest call
  // + newsletter are the two things we want a visitor to do) but reuses the
  // same email field as the Snapshot capture rather than duplicating an
  // input — it scrolls to the form, checks the newsletter box, and focuses
  // the email field.
  function focusBriefSignup() {
    const optin = document.getElementById("cc-brief-optin");
    const email = document.getElementById("cc-email");
    if (optin) optin.checked = true;
    if (email) {
      email.scrollIntoView({ behavior: "smooth", block: "center" });
      email.focus();
    }
  }

  // ---------------------------------------------------------------------
  // Snapshot document builder
  // ---------------------------------------------------------------------
  function snapDate() {
    try {
      return new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    } catch (e) { return ""; }
  }

  function answerLabel(qid) {
    const a = state.answers[qid];
    if (!a) return "—";
    if (qid === "entity" && a.id === "skip") return "Preferred not to say";
    return a.label;
  }

  function renderBlock(b) {
    const head = b.h ? `<div class="snap-h2">${b.h}</div>` : "";
    if (b.type === "p") return head + `<p>${b.text}</p>`;
    if (b.type === "note") return `<p class="snap-note">${b.text}</p>`;
    if (b.type === "ol") {
      return head + `<ol class="snap-ol">${b.items.map((i) => `<li>${i}</li>`).join("")}</ol>`;
    }
    if (b.type === "avoid") {
      return `<div class="snap-avoid"><span class="snap-avoid-k">${b.k}</span><ul>${
        b.items.map((i) => `<li>${i}</li>`).join("")
      }</ul></div>`;
    }
    if (b.type === "lines") {
      return head + `<div class="snap-lines">${
        b.items.map((i) => `<div class="snap-line"><span class="snap-line-k">${i}</span><span class="snap-rule"></span></div>`).join("")
      }</div>`;
    }
    if (b.type === "table") {
      const emptyRow = `<tr class="snap-fill">${b.headers.map(() => "<td></td>").join("")}</tr>`;
      return head + `<table class="snap-table"><thead><tr>${
        b.headers.map((h) => `<th>${h}</th>`).join("")
      }</tr></thead><tbody>${emptyRow.repeat(b.rows)}</tbody></table>`;
    }
    return "";
  }

  function signalTable() {
    const rows = SIGNAL_ROWS.map((sig) => {
      const a = state.answers[sig.id];
      const st = a ? (sig.state[a.id] || "no") : "no";
      return `<tr>
        <td class="snap-a">${sig.label}</td>
        <td class="snap-q">${sig.meaning}</td>
        <td><span class="snap-state is-${st}">${STATE_COPY[st]}</span></td>
      </tr>`;
    }).join("");
    const buildRow = `<tr>
      <td class="snap-a">Build maturity<br><em style="font-weight:400;color:var(--gray);font-size:0.78rem;">tracked separately</em></td>
      <td class="snap-q">How much exists today. Deliberately kept apart from the signals above — a working product doesn't substitute for proof someone wants it, and having nothing built doesn't count against you.</td>
      <td><span class="snap-state is-no" style="color:var(--navy);">${buildLabel()}</span></td>
    </tr>`;
    return `<table class="snap-table"><thead><tr>
      <th style="width:22%;">Signal</th><th>What it means in practice</th><th style="width:16%;">Where you are today</th>
    </tr></thead><tbody>${rows}${buildRow}</tbody></table>`;
  }

  function buildSnapshotDoc() {
    const doc = document.getElementById("snapshot-doc");
    if (!doc) return;
    const band = evidenceBand(score());
    const r = RESULTS[band];
    const s = SNAPSHOT[band];
    const persona = state.persona;

    const mirrorRows = QUESTIONS.map((q) =>
      `<tr><td class="snap-q">${q.snapLabel}</td><td class="snap-a">${answerLabel(q.id)}</td></tr>`
    ).join("");

    const foot = `<div class="snap-foot">
      <span>Opportunity Machine · 314 Jefferson St, Lafayette, LA 70501 · opportunitymachine.org</span>
      <span>Internal sandbox draft — not approved OM collateral</span>
    </div>`;

    doc.innerHTML = `
      <div class="snap-page">
        <div class="snap-masthead">
          <img src="assets/om-logo-reversed.png" alt="Opportunity Machine">
          <div class="snap-doctitle">Clarity Snapshot<br>${snapDate()}</div>
        </div>

        <div class="snap-doc-h1">${r.docTitle}</div>
        <p class="snap-lead">${r.summary}</p>

        <div class="snap-read">
          <div><span class="k">Venture signal</span><span class="v">${r.signal}</span></div>
          <div><span class="k">Build status</span><span class="v">${buildLabel()}</span></div>
        </div>

        <div class="snap-move">
          <span class="snap-move-k">Your single highest-leverage move</span>
          <p>${r.move}</p>
        </div>

        <div class="snap-h2">What you told us</div>
        <table class="snap-table"><tbody>${mirrorRows}</tbody></table>

        <div class="snap-h2">Why this is the move</div>
        <p>${r.credibility}</p>
        ${persona ? `<p style="margin-top:9px;">${persona.resultLead}</p>` : ""}

        ${foot}
      </div>

      <div class="snap-page">
        <div class="snap-runhead"><span>${s.worksheetTitle}</span><span>Clarity Snapshot · Page 2</span></div>
        <p class="snap-lead">${s.worksheetLead}</p>
        ${s.blocks.map(renderBlock).join("")}
        ${foot}
      </div>

      <div class="snap-page">
        <div class="snap-runhead"><span>What People Evaluating You Look At</span><span>Clarity Snapshot · Page 3</span></div>
        <p class="snap-lead">These are the signals investors, partners, and serious customers tend to check — at any stage, in any industry. None of them are OM's invention, and none of them require anyone's permission to start working on. Here's where your own answers put you today.</p>

        ${signalTable()}

        <div class="snap-h2">One we didn't ask — but you should be able to answer</div>
        <p><strong>What would make you walk away from this idea?</strong> Being able to name the evidence that would change your mind is, on its own, a strong signal to anyone evaluating you: it shows you're testing a belief rather than defending one. Worth writing down before your next conversation.</p>
        <div class="snap-lines"><div class="snap-line"><span class="snap-rule"></span></div><div class="snap-line"><span class="snap-rule"></span></div></div>

        <div class="snap-close">
          <div class="snap-close-h">If it'd help to talk it through</div>
          <p style="margin-bottom:10px;">If you'd rather not do this part alone, <strong>${r.session}</strong> of Builder 1.0 is built around this exact move. But nothing on the previous page requires a program, or us — start there either way.</p>
          <p class="snap-contact">
            <strong>Book a 20-minute conversation:</strong> opportunitymachine.org<br>
            <strong>Call:</strong> (337) 769-4085 &nbsp;·&nbsp; <strong>Email:</strong> info@opportunitymachine.org<br>
            <strong>The Acadiana Founder Brief:</strong> one email a month, unsubscribe anytime.
          </p>
        </div>

        ${foot}
      </div>
    `;
  }

  function entityNote() {
    const entity = state.answers.entity;
    if (!entity || (entity.id !== "not_yet" && entity.id !== "considering")) return "";
    return `<p class="rc-note" style="margin-bottom:1.6rem;">No entity yet? That's normal at this stage — most founders form one during Builder, not before it. We'll flag the right resource for it when the time is right.</p>`;
  }

  function renderResult() {
    const band = evidenceBand(score());
    const r = RESULTS[band];
    const persona = state.persona;
    app.innerHTML = `
      <div class="rc-card rc-result">
        <div class="rc-result-kicker">Your Honest Read</div>
        <p class="rc-note" style="margin-bottom:1.2rem;">${persona ? persona.resultLead : ""}</p>
        <h2>${r.title}</h2>
        <p class="rc-result-summary">${r.summary}</p>

        <div class="rc-signal-row">
          <div class="rc-signal">
            <span>Venture Signal</span>
            <strong>${r.signal}</strong>
          </div>
          <div class="rc-signal">
            <span>Build Status</span>
            <strong>${buildLabel()}</strong>
          </div>
        </div>

        <div class="rc-goal"><span class="rc-goal-k">The single highest-leverage move from here</span>${r.move}</div>

        <p class="rc-credibility">${r.credibility}</p>

        <div class="rc-next-move">
          <span>Guidance already built for exactly this</span>
          <strong><a href="builder-program.html" style="color:inherit;">${r.session}</a></strong>
          <p style="color:var(--gray); margin-top:6px;">${r.sessionDetail}</p>
        </div>

        ${entityNote()}

        <h3 style="margin-bottom:0.8rem;">Take this with you</h3>
        <p class="rc-note" style="margin-bottom:1rem;">Your Clarity Snapshot is a 3-page working document: this read, a worksheet for the move above, and a plain-language reference on what people evaluating you are actually looking at. No email required — it's yours either way.</p>
        <div class="snap-dl-row">
          <button type="button" class="btn btn-navy" id="cc-download">Download your Snapshot (PDF)</button>
          <span class="rc-note" style="margin:0;">Opens your print dialog — choose “Save as PDF.”</span>
        </div>
        ${renderSnapshotBlock()}

        <p class="rc-call-line" style="margin-top:1.8rem;">Whatever you picked above — a short call is how we both find out if Builder is the right fit, right now. No pressure, no pitch. Just clarity on both sides.</p>

        <div class="cta-row">
          <a class="btn btn-blue" href="contact.html" id="cc-book-cta">Book a 20-minute conversation &rarr;</a>
          <button type="button" class="btn btn-ghost-navy" id="cc-brief-cta">Get the Brief &rarr;</button>
        </div>
        <div class="rc-nav" style="margin-top:1.2rem;">
          <button type="button" class="btn btn-ghost-navy" id="rc-restart">Retake the check</button>
          <span></span>
        </div>
      </div>
    `;
    // Keep the printable document in sync with the current answers, so the
    // download is always accurate even after a retake.
    buildSnapshotDoc();
    wireSnapshotForm();

    const dl = document.getElementById("cc-download");
    if (dl) dl.addEventListener("click", () => {
      // New event name — not in CTA-CONSISTENCY-PASS.md's matrix yet; needs a
      // row added there before this ships (per that file's own rule).
      fireEvent("clarity_snapshot_download", { band });
      window.print();
    });

    const bookCta = document.getElementById("cc-book-cta");
    if (bookCta) bookCta.addEventListener("click", () => fireEvent("clarity_to_booking", { band }));
    const briefCta = document.getElementById("cc-brief-cta");
    if (briefCta) briefCta.addEventListener("click", focusBriefSignup);
    document.getElementById("rc-restart").addEventListener("click", () => {
      state.screen = "intro"; state.step = 0; state.persona = null; state.answers = {}; state.snapshotSent = false;
      render();
    });
  }

  // ---------------------------------------------------------------------
  // Layout review aid: ?preview=snapshot renders the printable document
  // on screen with representative answers, so the PDF layout can be checked
  // without printing. Add &band=foundation|momentum|ready to switch playbooks.
  // Review-only — no effect on the normal visitor flow.
  // ---------------------------------------------------------------------
  function maybePreviewSnapshot() {
    const params = new URLSearchParams(location.search);
    if (params.get("preview") !== "snapshot") return false;

    const band = params.get("band") || "foundation";
    const SAMPLES = {
      foundation: { conversations: "none", buyer: "general", workaround: "unknown", commitment: "none", build: "idea", entity: "not_yet" },
      momentum: { conversations: "5-14", buyer: "rough", workaround: "firsthand", commitment: "verbal", build: "mockup", entity: "llc" },
      ready: { conversations: "15+", buyer: "exact", workaround: "firsthand", commitment: "concrete", build: "working", entity: "other_entity" },
    };
    const sample = SAMPLES[band] || SAMPLES.foundation;

    state.persona = PERSONAS[0];
    QUESTIONS.forEach((q) => {
      state.answers[q.id] = q.options.find((o) => o.id === sample[q.id]) || q.options[0];
    });

    buildSnapshotDoc();
    document.body.classList.add("snapshot-preview");
    return true;
  }

  if (!maybePreviewSnapshot()) render();
})();
