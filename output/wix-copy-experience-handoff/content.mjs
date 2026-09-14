// Authoring source for the local developer handoff. Generated prose stays proposed.
export const revision = "2.0 · ordered copy review";
export const sources = {
  meeting: {
    title: "Tyler / Destin raw website meeting",
    locator:
      "/Users/tylerhebert/.codex/attachments/6986cea3-991b-4e24-83b4-879337eeb869/pasted-text.txt",
    status:
      "User-supplied discussion; strategy evidence, not blanket publication approval",
  },
  decisions: {
    title: "Later Tyler decisions in this conversation",
    locator:
      "Exact six hero lines; Membership benefits and CTAs; program descriptions; ETI naming; testimonial placements; remove no-equity reassurance",
    status: "Controls the specifically changed field",
  },
  programs: {
    title: "Tyler-supplied proposed program descriptions",
    locator:
      "This conversation: Builder 1.0, Builder 2.0, Mentor Program, ETI, Pitch Prep, Beta Testing",
    status: "Candidate operating copy, pending current program-owner review",
  },
  events_direction: {
    title: "Tyler’s Events positioning update",
    locator: "This conversation, 14 September 2026: intentional networking, founder exposure, peer interaction; Innovate South as OM’s flagship event alongside Mix & Jingle; three connection-focused headings",
    status: "User-confirmed direction and flagship designation; rewritten descriptions remain proposed. Does not confirm current dates, attendance, registration, or individual results.",
  },
  innovate_site: {
    title: "Innovate South official website",
    locator: "https://www.innovatesouth.org/",
    status: "Checked 14 September 2026 for event format, audience, and destination. The site still displays April 22–24, 2026; no date, ticket availability, or registration claim carried into this draft.",
  },
  novaspark_story: {
    title: "LA.IO: NovaSpark story",
    locator: "https://la.io/stories/la-io-inside-innovation-novaspark/",
    status: "Primary editorial page checked 14 September 2026. Source-reported company activity; publication date not displayed. No OM involvement or measured regional effect asserted.",
  },
  kingcrow_story: {
    title: "LA.IO: King Crow Studios story",
    locator: "https://la.io/stories/la-io-inside-innovation-king-crow-studios/",
    status: "Primary editorial page checked 14 September 2026. Source-reported company activity; publication date not displayed. No OM involvement or measured regional effect asserted.",
  },
  natrx_story: {
    title: "LA.IO: Natrx story",
    locator: "https://la.io/stories/natrx/",
    status: "Primary editorial page checked 14 September 2026. Source-reported company activity; publication date not displayed. No OM involvement or measured regional effect asserted.",
  },
  noew_site: {
    title: "NOEW official About page",
    locator: "https://www.noew.org/about",
    status: "Primary site checked 14 September 2026 for event identity and broad format; no dates, access rules, or official series membership carried over.",
  },
  nexus_cup: {
    title: "Nexus Technology Cup official page",
    locator: "https://www.nexusla.org/programs/tech-cup",
    status: "Primary site checked 14 September 2026 for audience and competition format. Later page sections contain placeholders; no metrics, dates, or admissions rules carried over.",
  },
  startup_prize_context: {
    title: "LED: Startup Prize context",
    locator: "https://www.opportunitylouisiana.gov/news/startup-prize-energy-launched-in-louisiana",
    status: "29 January 2026 report checked 14 September 2026. Confirms Startup Prize context in Shreveport, not current general-event logistics. Direct event-domain content did not match the event during review, so no event-destination link is activated.",
  },
  claims: {
    title: "Public claims register",
    locator:
      "/Users/tylerhebert/Documents/Work/Opportunity-Machine/04-memory-scaffold/PUBLIC-CLAIMS-REGISTRY.md",
    status: "Read for this revision; claim-level status retained",
  },
  peers: {
    title: "Submitted peer studies / curated patterns P01–P08",
    locator:
      "/Users/tylerhebert/.codex/skills/om-website-strategist/references/peer_patterns.json",
    status: "Research-derived design references; no conversion measurements",
  },
  brand: {
    title: "OM website skill suite 1.2.0",
    locator:
      "/Users/tylerhebert/.codex/skills/om-website-strategist/references/COPY_RULES.md",
    status: "Voice and layout guidance, subject to later user decisions",
  },
  testimony: {
    title: "Original OM testimonials",
    locator: "source-testimonials.json",
    status:
      "Full original text; selected for draft use; release status per record",
  },
  mission: {
    title: "OM official About page",
    locator: "https://opportunitymachine.org/about/",
    status:
      "Exact current mission opening retrieved 14 September 2026; wording preserved as source text",
  },
  institutional: {
    title: "Tyler-confirmed economic-development identity",
    locator:
      "/Users/tylerhebert/.codex/skills/om-website-strategist/references/canon.json · OM-ECON-001 · S-USER-STRATEGY",
    status:
      "User-confirmed organizational identity; does not establish government status or measured regional effects",
  },
};
export const heroLines = [
  "want to know if anyone will actually buy",
  "want experienced guidance and advice",
  "want to meet and build relationships with other founders",
  "want clearer insight into what they’re missing",
  "want to build real connections with investors",
  "want to get further faster",
];
export const navLabels = [
  "Membership",
  "Programs",
  "Events",
  "Mentors",
  "Alumni",
  "Ecosystem",
  "About OM",
];
export const closeCopy = {
  title: "Take your next step with OM.",
  body: "Ready to explore membership? Apply now. If you have questions about where to begin, schedule a call with the OM team.",
  actions: ["Apply Now", "Schedule a Call"],
};
export const footerCopy = {
  title: "Opportunity Machine",
  body: "Support for founders building technology, research-driven, and innovative companies.",
  navigationHeading: "Explore OM",
  contactHeading: "Let’s talk about what you’re building.",
  action: "Book a Call",
  sourceIds: ["mission", "decisions"],
  status: "proposed",
};
const c = (id, title, body, extra = {}) => ({
  id,
  title,
  body,
  sourceIds: ["meeting", "decisions"],
  status: "proposed",
  ...extra,
});
const quote = (id, reason) => ({
  id: `quote-${id.toLowerCase()}`,
  quoteId: id,
  reason,
  sourceIds: ["testimony", "decisions"],
  status: "selected_draft",
});
const hold = (id, title, notes) => ({
  id,
  title,
  body: "",
  notes,
  hold: true,
  sourceIds: ["meeting", "claims"],
  status: "hold",
});
const redline = (location, before, after) => ({ location, before, after });
export const pages = [
  {
    id: "homepage",
    number: "01",
    label: "Homepage",
    audience: "Founders considering their next step",
    question: "Is OM relevant to what I want to do next?",
    goal: "Clarity",
    rationale:
      "Founder recognition comes first, followed by one useful route and a specific founder account. Peer pattern P02 informs the need-based choices; it is a design hypothesis.",
    sourceNote:
      "Meeting 5:24–15:26; later exact hero corrections control the six phrases.",
    capture: "live-home.png",
    livePath: "",
    redlines: [
      redline(
        "Hero",
        "Most founders spend a year building before they know if anyone will buy.",
        "Remove the time claim and TEMP HERO copy. Use the exact fixed phrase and six rotations below.",
      ),
      redline(
        "Opening sequence",
        "Builder as the default route for every visitor",
        "Move full Builder detail under Programs. Let a founder choose by their next need.",
      ),
      redline(
        "Hero media",
        "Light-blue wash / low-contrast white text",
        "Use the approved video cut with a readable dark contrast treatment where necessary; no extra slogan, metric, or second hero CTA.",
      ),
    ],
    modules: [
      {
        id: "home-hero",
        title: "For founders who…",
        body: "",
        hero: true,
        sourceIds: ["decisions"],
        status: "locked_text",
        notes:
          "Exactly four website hero elements: approved video, fixed phrase, one rotating statement, Book a Call. Show the six phrases in the specified order without rewriting. Keep a static first phrase for reduced motion. The old equal-prominence rule conflicts with Destin’s 5:53–6:21 larger-rotation direction: typography shown here is a review option, not final approval.",
      },
      c(
        "home-recognition",
        "Make progress on the question in front of you.",
        "You may be testing an idea, working through a customer question, or deciding how to grow. OM helps founders work through those decisions with programs and experienced guidance.",
        {
          notes:
            "Place immediately below the hero. No claim about how long founders struggle; no assumption that every visitor needs Builder.",
        },
      ),
      c(
        "home-purpose",
        "Startup support with a regional purpose.",
        "Opportunity Machine is an economic development organization. Our work starts with founders and the companies they are building in Acadiana.",
        {
          sourceIds: ["institutional", "decisions"],
          claimIds: ["OM-ECON-001"],
          notes:
            "One short institutional explanation after founder recognition, outside the hero. This states purpose; it does not claim measured jobs, investment, or regional change.",
        },
      ),
      c(
        "home-routes",
        "What are you trying to do next?",
        "Choose the question closest to where you are now.",
        {
          group: "routes",
          cards: [
            {
              title: "Find out whether people will buy",
              body: "Test the assumptions behind your idea through conversations with potential customers.",
              linkLabel: "Explore Builder 1.0",
              target: "builder-1",
            },
            {
              title: "Build with other founders",
              body: "Find a group to share progress with as you work through company decisions.",
              linkLabel: "Explore Membership",
              target: "membership",
            },
            {
              title: "Get guidance on a decision",
              body: "Talk through a specific challenge and explore the support available through OM.",
              linkLabel: "Explore mentor support",
              target: "mentor-program",
            },
            {
              title: "Meet people beyond your circle",
              body: "Explore gatherings and organizations in Louisiana’s startup ecosystem.",
              linkLabel: "Explore the Ecosystem",
              target: "ecosystem",
            },
            {
              title: "Prepare for investor conversations",
              body: "Work on how you explain your company and present your pitch.",
              linkLabel: "Explore Pitch Prep",
              target: "founder-services",
            },
          ],
          notes:
            "Five need-based routes, distinct from the six protected hero statements. Use one route block only. Two columns on desktop, one on mobile; the last card may span both desktop columns. Routes indicate relevance, not eligibility or guaranteed introductions.",
        },
      ),
      quote(
        "T012",
        "Place directly after the route block. Ansley describes customer interviews and guidance; she does not establish universal access or a typical result.",
      ),
      c(
        "home-stories",
        "Hear from founders who have worked with OM.",
        "Meet Noah Bergeron and Stefan Arnold in OM’s GlowSens founder story.",
        {
          linkLabel: "Watch the GlowSens story",
          target: "story-glowsens",
          sourceIds: ["claims"],
          claimIds: ["claim.glowsens-video"],
          notes:
            "Use the cleared GlowSens video as the homepage teaser. The review link goes directly to its sourced card on Alumni, where the full three-story collection remains. Do not repeat T012 or invent a new pull quote. This replaces the unresolved instruction to pick a story.",
        },
      ),
      c(
        "home-network",
        "A connection to the wider ecosystem.",
        "Explore organizations and gatherings across Louisiana that may be relevant to the company you are building.",
        { linkLabel: "Explore the Ecosystem", target: "ecosystem" },
      ),
    ],
  },
  {
    id: "membership",
    number: "02",
    label: "Membership",
    audience: "Founders evaluating an ongoing relationship with OM",
    question: "What does being a member mean for me?",
    goal: "Clarity",
    rationale:
      "Explain the relationship and its benefits before the visitor chooses between applying and asking questions. P03 informs the access questions; no peer policy transfers to OM.",
    sourceNote:
      "Meeting 10:24–10:59 and 1:20:58–1:25:38; Tyler confirmed six benefit categories.",
    capture: "live-membership.png",
    livePath: "/membership",
    redlines: [
      redline(
        "Benefit order",
        "Workspace-first benefits / separate Access to OM Mentors card",
        "Use the six categories in the exact order below. Coaching and Support owns mentorship-related explanation.",
      ),
      redline(
        "Pricing and access",
        "Standard memberships begin at $100 / month (per person).",
        "Keep pricing out of this copy until current terms are confirmed. Preserve the price question in the FAQ review.",
      ),
      redline(
        "Page close",
        "A single signup action",
        "Show Apply Now and Schedule a Call together at the bottom of the page.",
      ),
    ],
    modules: [
      c(
        "membership-hero",
        "A membership built around your next move.",
        "Connect with other founders and explore practical support for the company you are building.",
        { eyebrow: "Founders first", action: "Book a Call" },
      ),
      c(
        "membership-meaning",
        "What being a member means",
        "Membership connects you to OM’s founder community and the support described below. Programs provide focused work on a particular company challenge. Start here to understand the relationship, then explore the program that fits your next step.",
        {
          notes:
            "Explain Membership as the ongoing relationship. Program admission, fees, and inclusion are separate owner questions; do not imply automatic admission to every program.",
        },
      ),
      c(
        "membership-benefits",
        "Membership benefits",
        "Explore the people and practical support connected to membership.",
        {
          group: "benefits",
          cards: [
            {
              title: "Access to the Startup Ecosystem",
              body: "Build relationships with other founders and explore organizations in the wider Louisiana startup ecosystem.",
              linkLabel: "Explore the Ecosystem",
              target: "ecosystem",
            },
            {
              title: "Programs",
              body: "Explore structured support for testing an idea and working through the next challenges of company building.",
              linkLabel: "Explore Programs",
              target: "programs",
            },
            {
              title: "Coaching and Support",
              body: "Talk through the questions you are working on and explore guidance that fits the decision ahead.",
              linkLabel: "Explore mentor support",
              target: "mentor-program",
            },
            {
              title: "Perks and Discounts",
              body: "Explore member perks and discounts, and check which are relevant to the tools your company needs.",
            },
            {
              title: "Resource Libraries",
              body: "Find reference materials to support your thinking as you work through company questions.",
            },
            {
              title: "24/7 Flexible Workspace",
              body: "Use flexible workspace as a place to focus on your company and spend time around other founders.",
            },
          ],
          notes:
            "Category names/order are confirmed. These descriptive sentences are proposed from those categories. Confirm current perks, library inventory, space terms, access eligibility, and program inclusion before release. Desktop 3 × 2; mobile follows this exact sequence. Do not restore the removed no-equity reassurance.",
        },
      ),
      quote(
        "T014",
        "Place beneath the benefits, next to the explanation of Coaching and Support. Keep Jordy’s separate seed-round note out of the displayed attribution.",
      ),
      c(
        "membership-next",
        "Find the right place to begin.",
        "Explore Programs to see what each experience involves. If you are unsure which support fits your company, start with a call.",
        { linkLabel: "Explore Programs", target: "programs" },
      ),
      c(
        "membership-call-faq",
        "What happens on an interest call?",
        "Tell us what you are building and the question you want to work through. We’ll discuss whether membership or a program could fit, and what the next step would involve.",
        {
          notes:
            "Proposed explanation of the agreed intake/interest-call role. Tyler must confirm the actual call flow. No duration, response time, booking availability, or admission promise is invented.",
        },
      ),
      hold(
        "membership-terms",
        "Participation terms to resolve",
        "No existing Membership FAQ inventory was found in the local page reference. Retain the Builder FAQ inventory in Builder 1.0 detail. Before publishing Membership policy answers, resolve: What does membership cost? Which programs are included? What workspace access is included? How does mentor access work? What happens after I apply? The interest-call answer above is proposed from Tyler’s requested addition.",
      ),
    ],
  },
  {
    id: "programs",
    number: "03",
    label: "Programs",
    audience: "Founders choosing a type of support",
    question: "Which program fits the work I need to do?",
    goal: "Clarity",
    rationale:
      "Use a consistent card format: who it is for, what happens, and what the work helps clarify. P04 informs comparison. Avoid a mandatory program ladder.",
    sourceNote:
      "Meeting 48:15–1:17:17; later Tyler program descriptions and ETI correction.",
    capture: "live-builder-program.png",
    livePath: "/builder-program",
    redlines: [
      redline(
        "Hero / navigation",
        "The universal starting point",
        "Rename Builder Program navigation to Programs. Use the portfolio headline below.",
      ),
      redline(
        "Body",
        "Session-by-session curriculum / generic support panels",
        "Use individual program cards and concise linked detail. Keep the cohort experience separate.",
      ),
      redline(
        "Taxonomy",
        "Talent / technical support as a new primary navigation item",
        "Put ETI in Programs. Put Pitch Prep and Beta Testing under Founder Services. Hold Tech Transfer.",
      ),
    ],
    modules: [
      c(
        "programs-hero",
        "Programs built for every stage of growth.",
        "Find support for the work in front of you, from testing an idea to working through customer acquisition and growth.",
        { action: "Book a Call" },
      ),
      c(
        "programs-stage",
        "Start with where you are now.",
        "Explore the work that fits your company, then open a program to learn more.",
        {
          cards: [
            {
              title: "You are exploring an idea",
              body: "Work on the problem, the customer, and what you need to test.",
              linkLabel: "Explore Builder 1.0",
              target: "builder-1",
            },
            {
              title: "Your product is live",
              body: "Work through customer questions, product feedback, or a specific company decision.",
              linkLabel: "Explore focused support",
              target: "founder-services",
            },
            {
              title: "You are working on growth",
              body: "Look more closely at customer acquisition and how your company operates.",
              linkLabel: "Explore Builder 2.0",
              target: "builder-2",
            },
          ],
          notes:
            "Plain-language candidate route labels replace unresolved identity labels in this preview. Visionary and Scaler remain working concepts; Early Mover was tentative. Destin approves final labels and stage-to-program mapping. Labels are not admission tiers.",
        },
      ),
      c(
        "programs-core",
        "Explore the programs",
        "Choose a program to see the founder questions it addresses and the work involved.",
        {
          cards: [
            {
              title: "Builder 1.0",
              body: "For founders testing an idea or revisiting assumptions. Work through customer conversations with a cohort, then use what you learn to decide what to build.",
              linkLabel: "Explore Builder 1.0",
              target: "builder-1",
            },
            {
              title: "Builder 2.0",
              body: "For OM members building on Builder 1.0 evidence. Work on customer acquisition, company economics, and execution.",
              linkLabel: "Explore Builder 2.0",
              target: "builder-2",
            },
            {
              title: "Mentor Program",
              body: "For founders continuing after Builder. Bring a specific question and explore experienced guidance on the decision ahead.",
              linkLabel: "Explore the Mentor Program",
              target: "mentor-program",
            },
            {
              title: "Emerging Tech Intern Program (ETI)",
              body: "For founders working on an early product. Explore technical collaboration to build and test an initial version with customers.",
              linkLabel: "Explore ETI",
              target: "eti",
            },
          ],
          sourceIds: ["programs", "decisions"],
          notes:
            "Four program cards, 2 × 2 on desktop, one column on mobile. ETI copy remains Catherine-review candidate. A detail link is secondary navigation; Book a Call is the conversion action. Do not add schedules, prices, or availability to these cards.",
        },
      ),
      c(
        "programs-cohort",
        "Build alongside other founders.",
        "Build alongside people working through real company questions of their own. Bring a decision, a setback, or a win to the room. Share what you are learning and hear how other founders are approaching the work. Recognize one another’s wins and check back on the next steps you set. The relationships you build can continue after the cohort ends.",
        {
          notes:
            "Adds explicit shared wins and accountability to the existing candidate copy. Use a separate full-width cohort band with a real approved group photo. Do not apply the cohort format to every service or use the CrossFit analogy.",
        },
      ),
      c(
        "programs-progression",
        "Continue with the next challenge.",
        "Builder 1.0 focuses on the evidence behind an idea. Builder 2.0 builds on that work with a closer look at the company’s economics and how it reaches customers.",
        {
          sourceIds: ["programs"],
          notes:
            "This describes the two Builder experiences only, not a mandatory path through all OM support. Confirm invitation and eligibility rules.",
        },
      ),
      quote(
        "T006",
        "Katie’s account belongs beside the Builder 1.0 / 2.0 explanation. Do not repeat it on every program detail.",
      ),
      c(
        "programs-services",
        "Focused help for a specific next step.",
        "Pitch Prep helps you communicate your company. Beta Testing helps you plan a test and learn from user behavior.",
        {
          sourceIds: ["programs"],
          linkLabel: "Explore Founder Services",
          target: "founder-services",
        },
      ),
      hold(
        "programs-tech-transfer",
        "Tech Transfer",
        "Do not display a public card or coming-soon message. Catherine must define the audience, university connection, process, current availability, and founder experience first.",
      ),
      c(
        "programs-events",
        "Meet founders beyond the program.",
        "Explore OM events for founder conversations and opportunities to meet people working on companies of their own.",
        {
          target: "events",
          linkLabel: "Explore Events",
          notes: "Meeting 1:02:37: keep Events discoverable from Programs with a link to the separate Events page. Use a secondary section after the portfolio, not a fifth program card.",
        },
      ),
    ],
  },
  {
    id: "builder-1",
    number: "03.1",
    label: "Builder 1.0",
    parent: "programs",
    audience: "Founders testing an idea or revisiting its assumptions",
    question: "What will I work on in Builder 1.0?",
    goal: "Clarity",
    sourceNote:
      "Tyler-supplied Builder 1.0 description; meeting 1:15:23–1:17:17.",
    rationale:
      "Explain the work and cohort experience before operating details. This is a proposed detail destination under Programs.",
    modules: [
      c(
        "b1-hero",
        "Test the idea. Learn what deserves to be built.",
        "Builder 1.0 brings founders together to test assumptions, talk with customers, and work through the questions behind a company.",
        { sourceIds: ["programs"], action: "Book a Call" },
      ),
      c(
        "b1-work",
        "Turn assumptions into something you can test.",
        "Work through practical challenges with feedback and support. Customer conversations help you examine the problem and the people who experience it. Practice frameworks you can return to as your company develops. Use what you learn to make a more informed decision about what to build next.",
        { sourceIds: ["programs", "meeting"] },
      ),
      quote(
        "T002",
        "Sarah’s Builder account follows the actual program explanation. This is now inside the Builder 1.0 detail contract, not the Programs card row.",
      ),
      c(
        "b1-format",
        "A weekly cohort experience",
        "Builder 1.0 meets once a week for approximately 10 weeks. You work alongside other founders, share what you are learning, and keep moving through the questions behind your company.",
        {
          sourceIds: ["programs"],
          notes:
            "Duration and cadence came from Tyler’s proposed description. Confirm for the current offering; no cohort date or intake status is asserted.",
        },
      ),
      c(
        "b1-meetup",
        "Finish with direct mentor feedback.",
        "Builder 1.0 culminates in a Mentor Meetup. Three experienced OM mentors provide feedback on your idea and help you identify your next steps.",
        {
          sourceIds: ["programs"],
          notes:
            "Confirm current Mentor Meetup format and mentor count. This is candidate copy, not an entitlement to ongoing mentor access.",
        },
      ),
      c(
        "b1-question",
        "Questions about Builder 1.0",
        "If you want a clearer understanding of your customers or the assumptions behind your company, start with a conversation about Builder 1.0.",
        {
          notes:
            "This introduces one FAQ group after Mentor Meetup; it is not a sixth FAQ. Place the next five question-and-answer pairs beneath this heading in their current order. Answers are proposed revisions; current participation rules remain subject to owner review.",
        },
      ),
      c(
        "b1-faq-idea",
        "Do I need a finished idea?",
        "Builder 1.0 helps founders examine early ideas and the assumptions behind them. Bring the problem you want to explore to a conversation with OM.",
        {
          sourceIds: ["programs"],
          notes:
            "Existing Builder FAQ question. Confirm current eligibility; do not promise acceptance of every idea.",
        },
      ),
      c(
        "b1-faq-technical",
        "Do I need to be technical?",
        "You can start a conversation with OM without a technical background. If your next question involves building a product, ask about the technical support available through ETI.",
        {
          sourceIds: ["programs"],
          linkLabel: "Explore ETI",
          target: "eti",
          notes:
            "Existing Builder FAQ question. This answer describes the conversation route; it does not grant Builder or ETI eligibility.",
        },
      ),
      c(
        "b1-faq-evidence",
        "What if I find out my idea doesn’t work?",
        "That evidence can help you decide whether to revise the idea, test a different approach, or explore another problem. The work gives you something concrete to use in that decision.",
        {
          sourceIds: ["programs"],
          notes:
            "Existing question; proposed answer removes the old unsupported promise about leaving with savings intact.",
        },
      ),
      c(
        "b1-faq-time",
        "How much time does it take?",
        "Builder 1.0 meets once a week for approximately 10 weeks. The program includes customer conversations and practical challenges.",
        {
          sourceIds: ["programs"],
          notes:
            "Existing question. Proposed answer; the program owner must confirm current workload and cadence before public release.",
        },
      ),
      c(
        "b1-faq-call",
        "What happens on the interest call?",
        "Tell us what you are building and the question you want to work through. We’ll discuss whether Builder fits your next step and what participation would involve.",
        {
          notes:
            "Existing question. Current call duration and routing are unconfirmed; the prior twenty-minute detail is not repeated.",
        },
      ),
    ],
  },
  {
    id: "builder-2",
    number: "03.2",
    label: "Builder 2.0",
    parent: "programs",
    audience: "OM members progressing beyond Builder 1.0",
    question: "What comes after the first round of evidence?",
    goal: "Clarity",
    sourceNote:
      "Tyler-supplied Builder 2.0 description; meeting 1:04:49–1:05:20.",
    rationale:
      "Make the next work explicit without implying automatic progression.",
    modules: [
      c(
        "b2-hero",
        "Build on the evidence. Work on the company.",
        "Builder 2.0 is an invitation-based program for OM members ready to build on the evidence developed in Builder 1.0.",
        {
          sourceIds: ["programs"],
          action: "Book a Call",
          notes:
            "Invitation, membership, and entry requirements require program-owner confirmation.",
        },
      ),
      c(
        "b2-work",
        "Look closely at how the company works.",
        "Work on customer acquisition and unit economics: what it costs to reach and serve a customer, and what that customer brings into the business. Explore execution and AI-native startup development as part of the next stage of company building.",
        {
          sourceIds: ["programs"],
          notes:
            "Confirm active curriculum before release. Keep AI detail here rather than expanding the Builder 1.0 page into an AI syllabus.",
        },
      ),
      c(
        "b2-next",
        "Choose the work that matters next.",
        "Use the experience to examine how your company reaches customers and where to focus your effort. Talk with OM about whether Builder 2.0 fits the questions you are working through.",
        { sourceIds: ["programs"] },
      ),
    ],
  },
  {
    id: "mentor-program",
    number: "03.3",
    label: "Mentor Program",
    parent: "programs",
    audience: "Founders continuing to build after Builder",
    question: "How could experienced guidance help with this decision?",
    goal: "Clarity",
    sourceNote:
      "Tyler-supplied Mentor Program description; meeting 1:17:21–1:20:31.",
    rationale:
      "Programs explains the experience; Mentors introduces the people. Keep the two routes connected.",
    modules: [
      c(
        "mp-hero",
        "Bring the decision you are working on.",
        "The Mentor Program gives founders experienced guidance as they continue building after Builder. Start with a question specific to your company.",
        { sourceIds: ["programs"], action: "Book a Call" },
      ),
      c(
        "mp-work",
        "Keep the conversation practical.",
        "Work through the challenge in front of you with a mentor’s perspective. Conversations focus on what you are building and the decisions you need to make.",
        {
          sourceIds: ["programs"],
          notes:
            "Matching, eligibility, availability, and meeting format remain under review. Do not promise an assigned mentor, number of sessions, or response time.",
        },
      ),
      c(
        "mp-people",
        "Meet the people behind the guidance.",
        "Explore OM’s mentor profiles to learn about the experience people bring to founder conversations.",
        { target: "mentors", linkLabel: "Meet the mentors" },
      ),
    ],
  },
  {
    id: "eti",
    number: "03.4",
    label: "ETI",
    parent: "programs",
    audience: "Founders exploring technical help for an early product",
    question: "How can technical collaboration help me test my idea?",
    goal: "Clarity",
    sourceNote:
      "Tyler’s corrected name and supplied program copy; meeting 27:28–28:05; claim.etip-talent-page is a historical registry identifier only.",
    rationale:
      "Keep ETI under Programs. Describe the founder’s work; let the program owner resolve the exact current arrangement.",
    modules: [
      c(
        "eti-hero",
        "Build an early product you can test.",
        "The Emerging Tech Intern Program (ETI) pairs founders with UL computer science students to build and test an initial version of a product.",
        {
          sourceIds: ["programs", "decisions"],
          action: "Book a Call",
          notes:
            "Name is Tyler-confirmed. Description is his candidate text; Catherine must confirm current university relationship, eligible student disciplines, founder requirements, technical scope, and intake before release.",
        },
      ),
      c(
        "eti-work",
        "Put the idea in front of customers.",
        "Work alongside technical talent to turn an early concept into something customers can try. Use customer discovery and feedback to learn how people respond and what to test next.",
        {
          sourceIds: ["programs"],
          notes:
            "Do not promise a completed product, a student placement, hiring, laboratory access, funding, or an agreed timeline. No new operating specificity beyond Tyler’s supplied description.",
        },
      ),
      c(
        "eti-fit",
        "Talk through the technical work ahead.",
        "Tell OM what you want to build and what you need to learn from customers. Ask whether ETI could fit your company’s next step.",
        { sourceIds: ["programs"] },
      ),
    ],
  },
  {
    id: "founder-services",
    number: "03.5",
    label: "Founder Services",
    parent: "programs",
    audience: "Founders seeking focused help",
    question: "Can I get help with a specific pitch or test?",
    goal: "Clarity",
    sourceNote: "Meeting 1:08:05–1:10:02; Tyler-supplied service descriptions.",
    rationale:
      "Services address a specific task. Do not present these as cohort admissions.",
    modules: [
      c(
        "services-hero",
        "Focused support for the work in front of you.",
        "Work on a pitch or plan a test with support shaped around a specific company question.",
        { sourceIds: ["programs"], action: "Book a Call" },
      ),
      c(
        "services-pitch",
        "Pitch Prep",
        "Prepare for a conversation with investors, mentors, or another audience. Pitch Prep includes pitch-deck consulting, deck design, presentation preparation, and feedback to help you explain your company clearly.",
        {
          sourceIds: ["programs"],
          notes:
            "Confirm current scope and fees. Do not equate pitch support with investment readiness, introductions, or funding.",
        },
      ),
      c(
        "services-beta",
        "Beta Testing",
        "Define what you need to learn, decide how to test it, and document what users do. A beta-test report gives you a record of what happened and evidence to consider when deciding what to do next.",
        {
          sourceIds: ["programs"],
          notes:
            "Confirm deliverable, responsibilities, testing recruitment, timing, and fees. Do not add user recruitment or technical delivery as assumed inclusions.",
        },
      ),
    ],
  },
  {
    id: "events",
    number: "04",
    label: "Events",
    audience: "Founders seeking relevant connections, exposure, and peer interaction",
    question: "Where can I meet people who understand what I’m building?",
    goal: "Access",
    sourceNote:
      "Tyler’s 14 September Events update controls the positioning and flagship designation. Meeting 31:44–31:56 and later testimonial placements remain relevant. Current event logistics are not approved by this copy revision.",
    rationale:
      "Explain the founder reason to attend first, then show the three connection benefits. Feature Innovate South as OM’s flagship, follow with Sarah’s exact account, then Mix & Jingle and Startup Circle. The limited statewide event group stays on Ecosystem.",
    capture: "live-events.png",
    livePath: "/events",
    redlines: [
      redline(
        "Hero",
        "We do not host generic workshops or low-value social mixers…",
        "Use Meet the right people, on purpose. Explain intentional networking, founder exposure, and peer interaction. Place the three connection-benefit cards directly below the hero.",
      ),
      redline(
        "Metrics strip",
        "400+ annual registrants / $40k+ matching grants / 92% RSVP conversion",
        "Remove these numbers until each has a current approved source.",
      ),
      redline(
        "Upcoming event card",
        "Date and time is TBD / Elevate Pitch Competition",
        "Lead the named-event section with Innovate South, labeled OM’s flagship event, and link to innovatesouth.org. Place Sarah’s account directly below it, then Mix & Jingle and Startup Circle. Keep these evergreen descriptions separate from a dated registration list.",
      ),
    ],
    modules: [
      c(
        "events-hero",
        "Meet the right people, on purpose",
        "Every OM event is built around intentional networking, founder exposure, and peer interaction. Share what you’re building, meet people who can help with your next step, and learn from other founders.",
        {
          action: "Book a Call",
          sourceIds: ["events_direction"],
          notes: "Tyler’s chosen headline is retained. The supporting copy explains the purpose of the events; it does not guarantee a particular introduction, investor meeting, or timing. Keep the existing Book a Call header action and shared membership close.",
        },
      ),
      c(
        "events-benefits",
        "What these connections can lead to",
        "Come with a question, a company you’re building, or an interest in supporting founders.",
        {
          group: "benefits",
          sourceIds: ["events_direction"],
          cards: [
            {
              title: "Find Your People",
              body: "Connect with other founders, technical talent, and people supporting the innovation ecosystem.",
            },
            {
              title: "Make Real Connections",
              body: "Talk with people who are building, scaling, or exploring what comes next. Share what you’re working on and hear what others are learning.",
            },
            {
              title: "Walk Away Energized",
              body: "Turn a good conversation into a next step. Exchange contact information, find an idea to put to work, and plan a follow-up.",
            },
          ],
          notes: "Use three equal-width cards on desktop and one column on mobile, immediately below the hero. Retain Tyler’s three headings. The descriptions replace the guaranteed mapped-out plan with practical actions a founder can take; no numeric networking or fundraising promise.",
        },
      ),
      c(
        "events-innovate",
        "Innovate South",
        "Innovate South brings founders, technical talent, investors, and innovation supporters together in Lafayette for talks, intentional networking, and a pitch competition. From first-time founders to experienced tech leaders, it is a place to share what you’re building and make connections around what comes next.",
        {
          eyebrow: "OM’s flagship event",
          sourceIds: ["events_direction", "innovate_site", "claims"],
          claimIds: ["claim.innovate-south-event"],
          url: "https://www.innovatesouth.org/",
          linkLabel: "Visit Innovate South",
          notes:
            "Feature this event first in a full-width card with its cleared logo and real event photography when supplied. Tyler identified Innovate South as OM’s flagship; this does not assert sole organizer status. Link to the official homepage, not its older registration links. Sarah’s original account follows immediately. Do not reuse the displayed April 2026 dates as an upcoming event.",
        },
      ),
      quote(
        "T003",
        "Keep this directly after the Innovate South card. Sarah is describing her own pitch-competition experience.",
      ),
      c(
        "events-mix",
        "Mix & Jingle",
        "Mix & Jingle brings founders together to share what they’re working on, meet people in the startup community, and get to know one another. Make room for a conversation, hear a new perspective, and find someone to stay in touch with.",
        {
          sourceIds: ["events_direction", "claims"],
          claimIds: ["claim.mixjingle-event"],
          notes: "Place after Innovate South and Sarah’s testimonial. Tyler’s latest direction supports the networking and peer purpose. The underlying registry still holds current cadence and the next date; do not add registration, pitch practice, prizes, or specific attendee promises without current confirmation.",
        },
      ),
      c(
        "events-circle",
        "Startup Circle",
        "Startup Circle brings founders together to check in with one another and share what they are working through. Contact OM to learn about participation.",
        {
          sourceIds: ["claims"],
          claimIds: ["claim.startup-circle-event"],
          notes:
            "The claims register records approval for staff-invited format and quarterly cadence. This draft omits cadence to avoid an unnecessary current schedule claim; do not add a public signup button when participation is invite-based.",
        },
      ),
      hold(
        "events-current",
        "Current event details",
        "For each upcoming event, supply current date, time, audience, venue, price, organizer, and registration destination. Remove stale or unconfirmed event tiles from the public list. Keep the general named-event descriptions separate from an upcoming schedule.",
      ),
    ],
  },
  {
    id: "mentors",
    number: "05",
    label: "Mentors",
    audience: "Founders seeking experienced perspectives",
    question: "Who is involved and how do I ask about support?",
    goal: "Clarity",
    sourceNote:
      "Meeting 1:17:21–1:20:31. The roster-refresh assignment has been removed at Tyler’s request.",
    rationale:
      "P05 informs clear expertise and request expectations. A concise human roster precedes a conversation route.",
    capture: "live-mentors.png",
    livePath: "/mentors",
    redlines: [
      redline(
        "Opening access policy",
        "Unconfirmed membership or mentor-access requirements",
        "Describe the support, then route access questions to OM until the current policy is resolved.",
      ),
      redline(
        "Filters",
        "Mentor specialty taxonomy",
        "Remove categorical filtering for this version. Use concise expertise on each card.",
      ),
      redline(
        "Profile layout",
        "Long directory cards / repeated profile imagery",
        "Use photo, name, and one accurate expertise line. Keep current approved profile copy; do not invent people or credentials.",
      ),
    ],
    modules: [
      c(
        "mentors-hero",
        "Experienced perspectives on your next decision.",
        "Explore the people who bring their experience to founder conversations at OM. Start with the question you want to work through.",
        { action: "Book a Call" },
      ),
      c(
        "mentors-intro",
        "Meet OM’s mentors",
        "Learn about the experience behind the people supporting founders.",
        {
          notes:
            "Follow this introduction with the approved profiles: photo, exact name, and one concise expertise line. Use three columns on desktop and one on mobile. No fabricated bios or spotlight.",
        },
      ),
      hold(
        "mentors-profiles",
        "Existing mentor profiles",
        "Retain approved existing profile wording and photo pairings. This pass does not assign a roster-refresh task or add names. New biographical copy requires source material.",
      ),
      c(
        "mentors-request",
        "Talk with OM about the support you need.",
        "Bring a specific question about your company. The OM team can discuss the support available and whether the Mentor Program is a fit.",
        {
          target: "mentor-program",
          linkLabel: "Explore the Mentor Program",
          notes:
            "No mentor booking calendar or on-demand promise. The program owner must settle access and matching before a policy answer appears.",
        },
      ),
    ],
  },
  {
    id: "alumni",
    number: "06",
    label: "Alumni / Founder Stories",
    navLabel: "Alumni",
    audience: "Founders seeking relatable firsthand experiences",
    question: "What has working with OM looked like for other founders?",
    goal: "Proof",
    sourceNote:
      "Meeting 1:25:50–1:28:38; claim.glowsens-video, claim.mallard-bay-video, claim.keepers-video.",
    rationale:
      "Current founder voices lead. Historical alumni appear afterward with an accurate relationship label. Video approval does not approve every claim about a company.",
    capture: "live-alumni.png",
    livePath: "/alumni",
    redlines: [
      redline(
        "Hero",
        "Evidence in Practice / validated testimonials",
        "Use founder-story language without implying the entire story bank is validated.",
      ),
      redline(
        "Content order",
        "Historical alumni as the main proof",
        "Lead with the cleared video stories and follow with a curated alumni logo group.",
      ),
      redline(
        "Broad claims",
        "Investor trust / company success attributed to OM",
        "Remove unsupported funding, scale, and causal claims. Keep the founder’s own account scoped to the source.",
      ),
    ],
    modules: [
      c(
        "stories-hero",
        "Founders, in their own words.",
        "Hear founders talk about the companies they are building and their experiences with OM.",
        { action: "Book a Call" },
      ),
      c(
        "stories-intro",
        "Watch the founder stories",
        "Explore the conversations and decisions behind each company.",
        {
          notes:
            "Use the three previously cleared videos below. Approval exists for the videos; current membership status and any new text claims remain separate. Do not label every historical subject a current member.",
        },
      ),
      c(
        "story-glowsens",
        "GlowSens",
        "Meet Noah Bergeron and Stefan Arnold in OM’s GlowSens founder story.",
        {
          sourceIds: ["claims"],
          claimIds: ["claim.glowsens-video"],
          url: "https://youtu.be/lZ1q1jHbgco",
          linkLabel: "Watch the GlowSens story",
          notes:
            "Approved video per registry. No funding or testing metric is introduced. T013 stays on Ecosystem.",
        },
      ),
      c(
        "story-mallard",
        "Mallard Bay",
        "Watch the Mallard Bay founder story and hear about the journey behind the company.",
        {
          sourceIds: ["claims"],
          claimIds: ["claim.mallard-bay-video"],
          url: "https://youtu.be/IEixV3f1pME",
          linkLabel: "Watch the Mallard Bay story",
          notes:
            "Approved video per registry. No fundraising amount or causal OM claim.",
        },
      ),
      c(
        "story-keepers",
        "Keepers",
        "Meet Carleena Andrepont in OM Founder Stories Vol. 3, featuring Keepers.",
        {
          sourceIds: ["claims"],
          claimIds: ["claim.keepers-video"],
          url: "https://youtu.be/KcOey2-8ttg",
          linkLabel: "Watch the Keepers story",
          notes:
            "Approved video per registry. Do not add current funding, intern hiring, or financial claims from the broader story packet.",
        },
      ),
      c(
        "stories-alumni",
        "Companies from OM’s alumni community",
        "Explore companies that have participated in OM’s community over time.",
        {
          notes:
            "Curated logo group follows the videos. Confirm each company relationship, current logo, rights, and official destination. Historical participation does not establish current membership or the current program focus.",
        },
      ),
      hold(
        "stories-inventory",
        "Alumni logos and new written stories",
        "Only render names/logos after owner review. For a new written story, capture founder challenge, founder action, the specific OM contribution, and what the source documents. Do not invent a milestone or paraphrase a quote into a new claim.",
      ),
    ],
  },
  {
    id: "ecosystem",
    number: "07",
    label: "Ecosystem",
    audience: "Founders exploring connections across Louisiana",
    question: "Where else can I find relevant people and support?",
    goal: "Access",
    sourceNote:
      "Meeting 21:46–26:45 and 35:47–47:36; later Tyler ecosystem and event direction.",
    rationale:
      "P06 informs explicit relationship descriptions. Separate organizations, verified partnerships, stories, and events. Keep the logo-and-link MVP.",
    capture: "live-ecosystem.png",
    livePath: "/ecosystem",
    redlines: [
      redline(
        "Hero",
        "OM is one room in a bigger building.",
        "Explain OM as one part of Louisiana’s startup ecosystem.",
      ),
      redline(
        "Map / directories",
        "Here’s the map / duplicate statewide directory",
        "Use organization logos with official links. Link to the existing LA.IO resource without rebuilding its map.",
      ),
      redline(
        "Proof and events",
        "Separate LA.IO media buckets / statewide calendar",
        "Use mixed statewide stories under Proof that it’s working, followed by a limited event-logo group.",
      ),
    ],
    modules: [
      c(
        "eco-hero",
        "Find your next connection in Louisiana’s startup ecosystem.",
        "Opportunity Machine is one part of Louisiana’s startup ecosystem. Explore people and organizations beyond OM, starting with the question you are working through and the connections relevant to your company.",
        { action: "Book a Call" },
      ),
      c(
        "eco-connect",
        "Start with the question you are working through.",
        "You may be looking for technical expertise, another founder’s perspective, or a place to share your company. Talk with OM about the question, or explore the organizations below to learn what they do.",
        {
          notes:
            "No guarantee of an introduction, investor match, customer, or lab access. This is the explanation that was previously missing.",
        },
      ),
      quote(
        "T013",
        "Founder-connection story directly after How OM connects and before the logo group. Preserve the meetup context in the supplied attribution; the quote alone does not name the meetup.",
      ),
      c(
        "eco-players",
        "Explore the wider network",
        "Discover organizations working with founders across Louisiana. Follow their links to learn about their programs and how to get involved.",
        {
          notes:
            "Approved logo + accessible organization name + official link. Do not label this entire group Partners. No interactive map, dropdown, or unmaintained exhaustive directory.",
        },
      ),
      hold(
        "eco-player-list",
        "Ecosystem player logos and links",
        "Place the owner-selected organization inventory directly beneath Explore the wider network, before Partnerships. Each item needs an accessible name, official URL, and cleared logo. This remains separate from verified partner relationships; do not silently label all players as partners.",
      ),
      c(
        "eco-partners",
        "Partnerships",
        "Learn how OM works with other organizations to support founders.",
        {
          notes:
            "Separate from Ecosystem Players. Each card needs the real organization name and one owner-confirmed relationship sentence. No invented generic partner descriptions. Exclude GAN; UL placement requires Manny / relationship-owner review.",
        },
      ),
      hold(
        "eco-partner-list",
        "Verified partnership cards",
        "Confirm the exact roster, official URLs, logo source/rights, and relationship sentence for each card. ETI operating detail stays in Programs. This copy does not establish a new partnership.",
      ),
      c(
        "eco-proof",
        "Proof that it’s working",
        "Explore stories of company building across Louisiana, told through founder conversations, videos, and reporting.",
        {
          sourceIds: ["meeting", "novaspark_story", "kingcrow_story", "natrx_story"],
          pendingInputs: ["Publication dates and thumbnail rights for the selected statewide stories"],
          cards: [
            {
              title: "NovaSpark",
              body: "Explore LA.IO’s account of NovaSpark’s work on mobile hydrogen and power generation.",
              linkLabel: "Read and watch at LA.IO",
              url: "https://la.io/stories/la-io-inside-innovation-novaspark/",
              sourceIds: ["novaspark_story"],
            },
            {
              title: "King Crow Studios",
              body: "Explore LA.IO’s story about a Louisiana studio building games and interactive software.",
              linkLabel: "Read and watch at LA.IO",
              url: "https://la.io/stories/la-io-inside-innovation-king-crow-studios/",
              sourceIds: ["kingcrow_story"],
            },
            {
              title: "Natrx",
              body: "Watch LA.IO’s story about a Louisiana company developing structures for coastal protection.",
              linkLabel: "Read and watch at LA.IO",
              url: "https://la.io/stories/natrx/",
              sourceIds: ["natrx_story"],
            },
          ],
          notes:
            "Three existing source-linked stories now have actual candidate card copy. Their pages were checked 14 September 2026; publication dates were not displayed, so do not label them as new or substitute the checked date for a publication date. These initial selections come from LA.IO, but the section accepts other sources and formats. Confirm final editorial selection and thumbnail rights. A story documents an account, not an OM result or measured statewide effect.",
        },
      ),
      c(
        "eco-events",
        "Explore Louisiana’s innovation gatherings",
        "Find gatherings across Louisiana and visit each organizer’s website for current details.",
        {
          sourceIds: ["decisions", "innovate_site", "noew_site", "nexus_cup", "startup_prize_context"],
          cards: [
            {
              title: "Innovate South",
              body: "Explore OM’s flagship event in Lafayette for founder conversations, intentional networking, and a pitch competition.",
              url: "https://www.innovatesouth.org/",
              linkLabel: "Visit Innovate South",
              sourceIds: ["events_direction", "innovate_site"],
            },
            {
              title: "New Orleans Entrepreneur Week (NOEW)",
              body: "Explore entrepreneur programming and connections across New Orleans.",
              url: "https://www.noew.org/",
              linkLabel: "Visit NOEW",
              sourceIds: ["noew_site"],
            },
            {
              title: "Startup Prize",
              body: "Learn about Startup Prize and the founder community in Shreveport.",
              sourceIds: ["decisions", "startup_prize_context"],
            },
            {
              title: "Nexus Technology Cup",
              body: "Explore a Louisiana technology competition where founders, developers, and student teams showcase what they are building.",
              url: "https://www.nexusla.org/programs/tech-cup",
              linkLabel: "Visit Nexus Technology Cup",
              sourceIds: ["nexus_cup"],
            },
          ],
          notes:
            "Four named candidate review cards replace the instruction-only list. Their presence is not approval of an official series roster. Three official destinations are checked; Startup Prize has no active link because its event domain returned unrelated commerce content during review. Keep the generic heading until LA.IO/LED confirms a branded series name. Use event-owned logos only when cleared, with no dates, prizes, or registration promises.",
        },
      ),
      hold(
        "eco-events-inventory",
        "Event logos and links",
        "Resolve the Startup Prize destination before activating its card. Confirm final inclusion, logo rights, and any branded series label for all four candidates. The text and three working source links above are draft review content, not a cleared LA.IO roster. Keep the limited logo group responsive; do not build a statewide calendar.",
      ),
    ],
  },
  {
    id: "about",
    number: "08",
    label: "About OM",
    audience: "Founders and people evaluating OM’s purpose",
    question: "What does OM exist to do, and who is behind it?",
    goal: "Clarity",
    sourceNote:
      "Meeting 28:12–31:34, specifically 29:02–29:50 for the existing mission in the About hero.",
    rationale:
      "P01 informs a clear organizational purpose. Keep founder relevance, exact mission, staff and board connected without adding regional performance claims.",
    capture: "live-about.png",
    livePath: "/about",
    redlines: [
      redline(
        "About hero paragraph",
        "Lafayette’s premier professional infrastructure / elite mentorship",
        "Replace this paragraph with the exact existing mission requested by Destin. The previous instruction to move the mission lower was incorrect.",
      ),
      redline(
        "Areas of Focus",
        "Areas of Focus taxonomy",
        "Remove this block. Use a concise description of how OM supports founders and routes to Membership / Programs.",
      ),
      redline(
        "Board layout",
        "Narrow two-column board treatment",
        "Place the board heading across the content area with consistent cards below. Use the confirmed roster and current titles.",
      ),
    ],
    modules: [
      c(
        "about-mission",
        "About Opportunity Machine",
        "Opportunity Machine’s mission is to support and elevate early-stage technology, research-driven, and innovative startups.",
        {
          sourceIds: ["mission", "meeting"],
          status: "source_verbatim",
          action: "Book a Call",
          notes:
            "Exact mission opening from OM’s official About page, retrieved 14 September 2026. Place in the About hero as Destin directed. Preserve the source wording even where it differs from the new-copy word list.",
        },
      ),
      c(
        "about-purpose",
        "Economic development that starts with founders.",
        "Opportunity Machine is an economic development organization in Acadiana. We support founders as they work through the questions behind building a company and connect with the wider startup ecosystem.",
        {
          sourceIds: ["institutional", "decisions"],
          claimIds: ["OM-ECON-001"],
          notes:
            "New proposed supporting explanation, separate from the protected mission. It makes no legal-status, public-funding, jobs, or investment claim.",
        },
      ),
      quote(
        "T001",
        "Rob’s community perspective follows the purpose explanation, before staff and board. It does not establish a measured regional effect.",
      ),
      c(
        "about-support",
        "Find the support that fits your next step.",
        "Membership connects founders to OM’s community. Programs provide focused work on a company challenge. Explore both to see where a conversation with OM could begin.",
        {
          links: [
            { target: "membership", linkLabel: "Explore Membership" },
            { target: "programs", linkLabel: "Explore Programs" },
          ],
        },
      ),
      c(
        "about-team",
        "Meet the OM team",
        "Meet the people behind OM’s work with founders.",
        {
          notes:
            "Use exact approved staff names and current titles only. The registry distinguishes staff from mentors. Check names against the official source rather than normalizing transcription spelling.",
        },
      ),
      hold(
        "about-team-cards",
        "Existing team profiles",
        "Place current owner-confirmed staff names, titles, and portraits here, directly under Meet the OM team. Retain approved profile wording. Do not combine staff cards with the board roster below or invent biographies.",
      ),
      c(
        "about-board",
        "Board of Directors",
        "Meet the people serving on OM’s board.",
        {
          notes:
            "Full-width section heading, then consistent image/name/verified-role cards. Confirm current roster, roles, and photos. This draft does not invent board profiles.",
        },
      ),
      hold(
        "about-board-cards",
        "Existing board profiles",
        "Place current owner-confirmed board names, roles, and portraits here, directly under Board of Directors. Keep this roster separate from staff. Do not treat a name on the captured Wix page as current approval or invent credentials.",
      ),
      c(
        "about-news",
        "News from OM",
        "Read about OM’s work with founders and what is happening in the community.",
        {
          notes: "Meeting 28:12–28:50 accepted the existing news articles. Retain that section after the people sections, before the shared closing CTA. Preserve original article titles, source, dates, images, and working destinations; do not turn older articles into current announcements.",
        },
      ),
      hold(
        "about-news-items",
        "Existing news articles",
        "Carry over the existing article cards after checking their original sources and links. The handoff does not invent replacement headlines or report a newly verified article inventory.",
      ),
    ],
  },
];
