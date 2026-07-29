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
      summary: "Every founder starts here. The gap right now isn't your idea or your effort — it's that the evidence for it mostly lives in your head.",
      move: "The single highest-leverage move from here: have <strong>5 real conversations</strong> with people who match your buyer — not friends, not family. That's what actually changes the read on this venture, fast.",
      session: "Session 1 – 2 · Phase 01: Discover & Design",
      sessionDetail: "JTBD + Buying Center, then a Discovery Plan built to run exactly that kind of conversation well — the kind that surfaces real evidence instead of polite encouragement.",
      credibility: "Right now, the biggest credibility gap with anyone who might back this — an investor, a partner, a future hire — isn't your product. It's proof someone besides you has this problem. That's a fast thing to close, not a slow one, once you know how to ask.",
    },
    momentum: {
      signal: "Gaining Real Momentum",
      title: "You've Already Started. That's Not The Problem.",
      summary: "Quiet traction is one of the most stressful places to be as a founder — you're not stalled enough to obviously quit, and not confirmed enough to confidently keep going. That's exactly what customer conversations are for: not to start over, but to find out what to keep, what to change, and what to stop. Nothing you've built is wasted. It's data — you just haven't asked it the right questions yet.",
      move: "The single highest-leverage move from here: turn your <strong>strongest interview insight</strong> into one specific, testable value proposition.",
      session: "Session 3 – 4 · Phase 01 – 02: UVP + MVP, Evidence to Strategy",
      sessionDetail: "Turns early signal into a sharp value promise and a lean MVP plan, then synthesizes what your interviews actually said into a deliberate go-to-market strategy.",
      credibility: "This is the stage where people start taking you seriously — but not yet seriously enough to write a check, sign a contract, or bet their own credibility on yours. The move from here isn't to throw out what you've made — it's testing it against real customers before spending more time or money assuming you already know the answer.",
    },
    ready: {
      signal: "Investor-Ready Signal",
      title: "You've Earned the Right to Move Fast.",
      summary: "The buyer, the workaround, and real commitment are all in place. What usually stands between here and a raise isn't more evidence — it's the room, and the story that gets you in it.",
      move: "The single highest-leverage move from here: turn your <strong>strongest proof point</strong> into a pitch that survives real investor questions.",
      session: "Session 6 – 7 · Phase 03: Traction & Launch",
      sessionDetail: "Traction + Revenue to stress-test the model, then Pitch Craft to shape your evidence into a story that earns the room.",
      credibility: "What opens doors from here isn't a bigger product — it's credibility that compounds: for funding, for partnerships, for the next hire who's trusting you with their own career. That's the part of “investor-ready” that's easy to miss.",
    },
  };

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

        <div class="rc-goal">${r.move}</div>

        <p class="rc-credibility">${r.credibility}</p>

        <div class="rc-next-move">
          <span>Guidance already built for exactly this</span>
          <strong><a href="builder-program.html" style="color:inherit;">${r.session}</a></strong>
          <p style="color:var(--gray); margin-top:6px;">${r.sessionDetail}</p>
        </div>

        ${entityNote()}

        <h3 style="margin-bottom:0.8rem;">Want to keep this?</h3>
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
    wireSnapshotForm();
    const bookCta = document.getElementById("cc-book-cta");
    if (bookCta) bookCta.addEventListener("click", () => fireEvent("clarity_to_booking", { band }));
    const briefCta = document.getElementById("cc-brief-cta");
    if (briefCta) briefCta.addEventListener("click", focusBriefSignup);
    document.getElementById("rc-restart").addEventListener("click", () => {
      state.screen = "intro"; state.step = 0; state.persona = null; state.answers = {}; state.snapshotSent = false;
      render();
    });
  }

  render();
})();
