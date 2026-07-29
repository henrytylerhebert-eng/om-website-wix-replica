// OM Builder Readiness Check — sandbox concept, client-side only, no backend.
// Mirrors the "Assumption or Evidence?" mechanic from the internal Great Tech
// Startup Game diagnostic, reframed around Builder 1.0 fit + funding-readiness
// literacy. Every outcome ends in the same CTA: Book a Call — per Destin's
// site-wide CTA rule, the point of the call is mutual clarity, not a filter.

(function () {
  const app = document.getElementById("rc-app");
  if (!app) return;

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
  ];

  const RESULTS = {
    foundation: {
      signal: "Building the Foundation",
      title: "You're Building the Foundation — And That's Exactly Where Builder Starts.",
      summary: "Every founder starts here. The gap right now isn't your idea or your effort — it's that the evidence for it mostly lives in your head.",
      session: "Session 1 – 2 · Phase 01: Discover & Design",
      sessionDetail: "JTBD + Buying Center, then a Discovery Plan built to surface real evidence instead of polite encouragement.",
      goal: "Set this goal before your first session: have <strong>5 real conversations</strong> with people who match your buyer — not friends, not family.",
      credibility: "Right now, your biggest credibility gap isn't your product — it's proof that someone besides you has this problem. Builder gives you the reps and the language to go get that proof, so the next conversation you have — with an investor, a partner, a customer — you're not guessing anymore.",
    },
    momentum: {
      signal: "Gaining Real Momentum",
      title: "You've Got Real Signal — Now Make It Undeniable.",
      summary: "You're past the assumption stage. What's missing isn't more ideas — it's turning what you've already learned into something sharp enough to test.",
      session: "Session 3 – 4 · Phase 01 – 02: UVP + MVP, Evidence to Strategy",
      sessionDetail: "Turn early signal into a sharp value promise and a lean MVP plan, then synthesize what your interviews actually said into a deliberate go-to-market strategy.",
      goal: "Set this goal before your first session: turn your <strong>strongest interview insight</strong> into one specific, testable value proposition.",
      credibility: "This is the stage where people start taking you seriously — but not yet seriously enough to write a check, sign a contract, or bet their own credibility on yours. Builder is built to close exactly that gap, for you and for everyone who's deciding whether to stand behind you.",
    },
    ready: {
      signal: "Investor-Ready Signal",
      title: "You've Earned the Right to Move Fast.",
      summary: "The buyer, the workaround, and real commitment are all in place. What usually stands between here and a raise isn't more evidence — it's the room, and the story that gets you in it.",
      session: "Session 6 – 7 · Phase 03: Traction & Launch",
      sessionDetail: "Traction + Revenue to stress-test the model, then Pitch Craft to shape your evidence into a story that earns the room.",
      goal: "Set this goal before your first session: turn your <strong>strongest proof point</strong> into a pitch that survives real investor questions.",
      credibility: "What opens doors from here isn't a bigger product — it's credibility that compounds: for funding, for partnerships, for the next hire who's trusting you with their own career. That's the part of “investor-ready” that's easy to miss.",
    },
  };

  const state = { step: 0, persona: null, answers: {} };
  const TOTAL_STEPS = 1 + QUESTIONS.length; // persona + questions, result is separate

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

  function render() {
    if (state.step === 0) return renderPersona();
    if (state.step <= QUESTIONS.length) return renderQuestion(state.step - 1);
    return renderResult();
  }

  function progressFill(stepIndex) {
    return Math.round((stepIndex / TOTAL_STEPS) * 100);
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
    if (next) next.addEventListener("click", () => { state.step = 1; render(); });
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
    document.getElementById("rc-back").addEventListener("click", () => { state.step -= 1; render(); });
    const next = document.getElementById("rc-next");
    if (next) next.addEventListener("click", () => { state.step += 1; render(); });
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

        <div class="rc-next-move">
          <span>Where you'd start in Builder</span>
          <strong>${r.session}</strong>
          <p style="color:var(--gray); margin-top:6px;">${r.sessionDetail}</p>
        </div>

        <div class="rc-goal">${r.goal}</div>

        <p class="rc-credibility">${r.credibility}</p>

        <p class="rc-call-line">Whatever you picked above — a short call is how we both find out if Builder is the right fit, right now. No pressure, no pitch. Just clarity on both sides.</p>

        <div class="cta-row">
          <a class="btn btn-blue" href="contact.html">Book a Call</a>
          <a class="btn btn-ghost-navy" href="builder-program.html">See the Full Builder Program</a>
        </div>
        <div class="rc-nav" style="margin-top:1.2rem;">
          <button type="button" class="btn btn-ghost-navy" id="rc-restart">Retake the check</button>
          <span></span>
        </div>
      </div>
    `;
    document.getElementById("rc-restart").addEventListener("click", () => {
      state.step = 0; state.persona = null; state.answers = {};
      render();
    });
  }

  render();
})();
