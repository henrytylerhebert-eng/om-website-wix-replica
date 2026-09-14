#!/usr/bin/env python3
"""Bounded handoff checks. Not a Wix release gate or a claim-approval tool."""
import hashlib
import importlib.util
import json
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent
errors = []
checks = []

def check(name, ok, detail=""):
    checks.append({"check": name, "status": "pass" if ok else "fail", "detail": detail})
    if not ok:
        errors.append(name + ": " + detail)

class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.refs, self.images, self.quotes = [], [], [], []
        self.in_quote = False
        self.text = ""
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if "id" in a: self.ids.append(a["id"])
        if "href" in a: self.refs.append(a["href"])
        if "src" in a and a["src"]: self.refs.append(a["src"])
        if tag == "img" and a.get("src"): self.images.append(a["src"])
        if tag == "blockquote": self.in_quote, self.text = True, ""
    def handle_data(self, data):
        if self.in_quote: self.text += data
    def handle_endtag(self, tag):
        if tag == "blockquote":
            self.quotes.append(self.text)
            self.in_quote = False

html = (ROOT / "index.html").read_text()
doc = Document()
doc.feed(html)
data = json.loads((ROOT / "page-contracts.json").read_text())
bank = json.loads((ROOT / "source-testimonials.json").read_text())
quotes = {q["id"]: q for q in bank["records"]}
expected = {
    "homepage": "T012", "membership": "T014", "programs": "T006",
    "builder-1": "T002", "events": "T003", "ecosystem": "T013", "about": "T001",
}
order = ["homepage", "membership", "programs", "builder-1", "builder-2", "mentor-program", "eti", "founder-services", "events", "mentors", "alumni", "ecosystem", "about"]
check("page_order", [p["id"] for p in data["pages"]] == order)
check("unique_dom_ids", len(doc.ids) == len(set(doc.ids)))
missing = [r for r in doc.refs if r.startswith("#") and r[1:] not in doc.ids]
check("local_anchors", not missing, str(missing))
missing_files = [r for r in doc.refs if not r.startswith(("#", "http:", "https:", "data:")) and r != "qa-receipt.json" and not (ROOT / r).is_file()]
check("local_assets", not missing_files, str(missing_files))
check("eight_page_screenshots", len(doc.images) == 8 and len(set(doc.images)) == 8)
check("selected_quote_set", set(quotes) == set(expected.values()))
check("rendered_quote_text", Counter(doc.quotes) == Counter(q["quote_exact"] for q in quotes.values()))
for q in quotes.values():
    for field in ("quote", "attribution"):
        check(f"{q['id']}_{field}_hash", hashlib.sha256(q[field + "_exact"].encode()).hexdigest() == q[field + "_sha256"])
for p in data["pages"]:
    selected = [s["quoteId"] for s in p["sections"] if s.get("quoteId")]
    check(p["id"] + "_quote_placement", selected == ([expected[p["id"]]] if p["id"] in expected else []))
    known = {c["id"] for c in p["claims"]}
    check(p["id"] + "_claim_reference_resolution", all(c in known for s in p["sections"] for c in s["claim_ids"]))
    check(p["id"] + "_source_resolution", all(sid in data["source_register"] for s in p["sections"] for sid in s["sourceIds"]))
    check(p["id"] + "_pending_status", p["page_approval"]["status"] == "pending" and not p["publication_requested"])
    check(p["id"] + "_bottom_ctas", p["shared_close"]["actions"] == ["Apply Now", "Schedule a Call"] and f'data-page-close="{p["id"]}"' in html)
hero = data["pages"][0]["hero"]
check("exact_six_hero_lines", hero["rotating_endings"] == [
    "want to know if anyone will actually buy", "want experienced guidance and advice",
    "want to meet and build relationships with other founders", "want clearer insight into what they’re missing",
    "want to build real connections with investors", "want to get further faster",
])
check("single_fixed_hero_phrase", html.count('class="hero-fixed">For founders who…') == 1)
check("named_roster_instruction_removed", "Teresa" not in html and "Theresa" not in html)
check("removed_reassurance_not_displayed", "OM takes no equity" not in html)
events = next(p for p in data["pages"] if p["id"] == "events")
event_sections = {s["id"]: s for s in events["sections"]}
check("events_founder_connection_headline", event_sections["events-hero"]["title"] == "Meet the right people, on purpose")
check("events_order_and_quote_context", list(event_sections) == ["events-hero", "events-benefits", "events-innovate", "quote-t003", "events-mix", "events-circle", "events-current"])
check("events_three_connection_headings", [c["title"] for c in event_sections["events-benefits"]["cards"]] == ["Find Your People", "Make Real Connections", "Walk Away Energized"])
check("events_flagship_and_destination", event_sections["events-innovate"]["eyebrow"] == "OM’s flagship event" and event_sections["events-innovate"]["url"] == "https://www.innovatesouth.org/")
check("events_new_direction_traceable", all("events_direction" in event_sections[s]["sourceIds"] for s in ["events-hero", "events-benefits", "events-innovate", "events-mix"]))
check("events_no_unsupplied_pitch_practice", "pitch practice" not in event_sections["events-mix"]["body"])
sections = {s["id"]: s for p in data["pages"] for s in p["sections"]}
check("homepage_named_story_and_location", sections["home-stories"].get("target") == "story-glowsens" and "Noah Bergeron and Stefan Arnold" in sections["home-stories"]["body"])
check("membership_benefit_routes", [c.get("target") for c in sections["membership-benefits"]["cards"][:3]] == ["ecosystem", "programs", "mentor-program"])
check("membership_benefit_order", [c["title"] for c in sections["membership-benefits"]["cards"]] == ["Access to the Startup Ecosystem", "Programs", "Coaching and Support", "Perks and Discounts", "Resource Libraries", "24/7 Flexible Workspace"])
check("builder_faq_group", sections["b1-question"]["title"] == "Questions about Builder 1.0" and len([sid for sid in sections if sid.startswith("b1-faq-")]) == 5)
check("builder_eti_route", sections["b1-faq-technical"].get("target") == "eti")
check("about_both_routes", [l["target"] for l in sections["about-support"]["links"]] == ["membership", "programs"])
about_ids = [s["id"] for p in data["pages"] if p["id"] == "about" for s in p["sections"]]
check("team_and_board_content_placement", about_ids.index("about-team-cards") == about_ids.index("about-team") + 1 and about_ids.index("about-board-cards") == about_ids.index("about-board") + 1)
check("ecosystem_players_not_partners", sections["eco-player-list"]["order"] == sections["eco-players"]["order"] + 1 and sections["eco-partner-list"]["order"] == sections["eco-partners"]["order"] + 1)
check("ecosystem_three_real_story_cards", [c["title"] for c in sections["eco-proof"]["cards"]] == ["NovaSpark", "King Crow Studios", "Natrx"] and all(c.get("url", "").startswith("https://la.io/stories/") for c in sections["eco-proof"]["cards"]))
check("ecosystem_four_candidate_event_cards", len(sections["eco-events"]["cards"]) == 4)
startup_prize = next(c for c in sections["eco-events"]["cards"] if c["title"] == "Startup Prize")
check("startup_prize_unverified_destination_inactive", not startup_prize.get("url") and not startup_prize.get("target") and "https://startupprize.com" not in doc.refs)
check("footer_copy_rendered", "global-footer" in doc.ids and data["shared_footer"]["body"] in html)
coverage = json.loads((ROOT / "copy-coverage.json").read_text())
check("copy_coverage_all_pages", [p["id"] for p in coverage["pages"]] == order and "copy-coverage" in doc.ids)
check("copy_coverage_order_matches", all([s["id"] for s in cp["sections"]] == [s["id"] for s in p["sections"]] for cp,p in zip(coverage["pages"],data["pages"])))
check("nested_sources_resolve", all(sid in data["source_register"] for p in data["pages"] for s in p["sections"] for c in s.get("cards", []) for sid in c.get("sourceIds", [])))
check("no_instruction_only_public_modules", all(s.get("hold") or s.get("quoteId") or s.get("hero") or s.get("body", "").strip() for p in data["pages"] for s in p["sections"]))

lint_path = Path("/Users/tylerhebert/.codex/skills/om-website-strategist/scripts/qa.py")
lint_findings, checked = [], 0
if lint_path.is_file():
    spec = importlib.util.spec_from_file_location("om_qa", lint_path)
    qa = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(qa)
    for p in data["pages"]:
        for s in p["sections"]:
            if s.get("hold") or s.get("quoteId") or s.get("status") in ("locked_text", "source_verbatim"):
                continue
            for i, part in enumerate([s] + s.get("cards", [])):
                text = " ".join(str(part.get(k) or "") for k in ("title", "body"))
                checked += 1
                for finding in qa.lint_new_copy(text):
                    lint_findings.append(f"{p['id']}/{s['id']}/{i}: {finding}")
    check("om_skill_new_copy_lint", not lint_findings, f"{checked} copy units; " + "; ".join(lint_findings))
    shared_findings = qa.lint_new_copy(" ".join(data["shared_footer"].get(k, "") for k in ["title", "body", "navigationHeading", "contactHeading", "action"]))
    shared_findings += qa.lint_new_copy(" ".join(data["pages"][0]["shared_close"][k] for k in ["title", "body"]))
    check("om_skill_shared_copy_lint", not shared_findings, str(shared_findings))
else:
    checks.append({"check": "om_skill_new_copy_lint", "status": "not_run", "detail": "Original local skill installation unavailable; do not infer a pass."})

render_file = ROOT / "rendered-checks.json"
rendered = json.loads(render_file.read_text()) if render_file.exists() else {"status": "not_run"}
if rendered.get("tested_fingerprints"):
    stale = [name for name, expected_hash in rendered["tested_fingerprints"].items()
             if hashlib.sha256((ROOT / name).read_bytes()).hexdigest() != expected_hash]
    check("rendered_receipt_matches_current_files", not stale, str(stale))
    if stale: rendered["status"] = "stale_rerun_required"
receipt = {
    "revision": data["revision"], "scope": "Local developer handoff only; not Wix publication QA",
    "static_status": "pass" if not errors else "fail", "checks": checks,
    "rendered": rendered,
    "fingerprints": {f: hashlib.sha256((ROOT / f).read_bytes()).hexdigest() for f in ["index.html", "review.css", "review.js", "content.mjs", "page-contracts.json", "source-testimonials.json", "copy-coverage.json"]},
    "old_suite_full_validator": "Not run: its seed homepage requirements conflict with later explicit user decisions. This handoff has a separate review schema.",
    "release_gates": {"page_approval": "pending", "testimonial_permission": "Unknown", "live_wix_changes": "none", "booking_and_application_destinations": "Unknown", "current_program_owner_approval": "pending", "analytics_baseline": "No measurements found"},
}
(ROOT / "qa-receipt.json").write_text(json.dumps(receipt, indent=2, ensure_ascii=False) + "\n")
print(f"{len(checks)} bounded checks; {len(errors)} failures; {checked} copy units linted.")
for error in errors: print(error)
raise SystemExit(bool(errors))
