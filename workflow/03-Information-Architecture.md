# Stage 03 — Information Architecture

## Purpose

Reorganize resume content into a **website information hierarchy** optimized for scanning, storytelling, and conversion — not a 1:1 translation of resume sections.

Define what exists on the site, how sections relate, navigation structure, and content priority.

---

## Input

| Input | Required | Description |
|-------|----------|-------------|
| `{ARTIFACTS_DIR}/resume-data.json` | Yes | Factual content |
| `{ARTIFACTS_DIR}/candidate-analysis.md` | Yes | Strategic narrative |
| [rules/design-principles.md](../rules/design-principles.md) | Reference | Editorial layout principles |
| [rules/layout-system.md](../rules/layout-system.md) | **Yes** | Mandatory page structure |

---

## Output

**File:** `{ARTIFACTS_DIR}/information-architecture.md`

---

## Rules

1. **Website ≠ Resume** — reorder, merge, or split sections for web consumption
2. **Name-first hero** — hero order: eyebrow → **large name** → tagline (h1) → subhead → dual CTA → stats bar (4 metrics). See [rules/layout-system.md](../rules/layout-system.md)
3. **Lead with impact** — tagline communicates identity in ≤ 10 words + 1 sentence subhead
4. **Progressive disclosure** — most important content above the fold; details on scroll
5. **Dual CTA in hero** — primary (contact) + secondary (view work)
6. **One primary site-wide CTA** — define the single desired visitor action (contact, view work; never "Download CV")
7. **Navigation** — floating pill nav, max 5 items; see [rules/layout-system.md](../rules/layout-system.md)
8. **Section budget** — 5–8 page sections (excluding footer); each with label + title + subtitle header block
9. **Content mapping** — every resume item maps to exactly one site location
10. **Hero stats** — define 4 proof-point metrics for stats bar
11. **Omit strategically** — irrelevant old roles, redundant skills can be deprioritized
12. **URL structure** — single-page default; document anchor IDs for each section
13. **No visual design** — structure and hierarchy only
14. **No code**

### Recommended Section Patterns by Role

| Role Type | Primary Sections |
|-----------|-----------------|
| Designer | Hero, Selected Work, Approach, Experience, About, Contact |
| Engineer | Hero, Projects, Expertise, Experience, Open Source, Contact |
| Product | Hero, Impact, Products, Experience, Philosophy, Contact |
| Researcher | Hero, Research, Publications, Teaching, About, Contact |
| Executive | Hero, Leadership, Track Record, Board/Advisory, Contact |

---

## Checklist

- [ ] Primary CTA defined with label and target
- [ ] Site type decided (single-page vs multi-page — default single-page)
- [ ] Section list with priority rank (P0 = must have, P1 = should have, P2 = nice to have)
- [ ] Each section has: purpose, content source, word budget, anchor ID
- [ ] Navigation structure defined (desktop + mobile)
- [ ] Content mapping table: resume field → site section
- [ ] Scroll narrative described (what visitor learns at each scroll depth)
- [ ] Omitted or deprioritized content justified
- [ ] Footer content specified (links, copyright, social)
- [ ] File saved to `{ARTIFACTS_DIR}/information-architecture.md`

---

## Prompt

```
You are executing Stage 03 of the Resume Website Generator pipeline.

TASK: Design the information architecture for {CANDIDATE_NAME}'s personal website.

INPUT:
- {ARTIFACTS_DIR}/resume-data.json
- {ARTIFACTS_DIR}/candidate-analysis.md
- rules/design-principles.md

RULES:
- Do NOT mirror resume section order
- Default to single-page layout with anchor navigation
- Maximum 5 nav items
- Define ONE primary CTA
- Map every resume content item to a site section
- Specify word budgets per section (headline: 3-8 words, subhead: 15-25 words, body: varies)
- No visual design decisions
- Output markdown only

OUTPUT STRUCTURE:
1. Site Overview (type, primary CTA, target visitor flow)
2. Navigation (desktop + mobile behavior)
3. Section Inventory (ordered list with priority, purpose, anchor ID, word budget)
4. Content Mapping Table (resume source → site destination)
5. Scroll Narrative (what the visitor experiences top to bottom)
6. Omissions & Rationale
7. Footer Specification

Write to {ARTIFACTS_DIR}/information-architecture.md
```

---

## Expected Result

A complete IA document specifying:

```
Site Type: Single-page
Primary CTA: "Start a conversation" → #contact
Navigation: Work · Approach · Experience · About · Contact

Sections (in order):
1. Hero (#hero) — P0 — Identity statement + CTA
2. Selected Work (#work) — P0 — 2-3 featured projects
3. Design Approach (#approach) — P1 — Philosophy + methods
4. Experience (#experience) — P0 — Timeline, 4 most recent roles
5. About (#about) — P1 — Personal narrative + skills
6. Contact (#contact) — P0 — Email + social links
```

**Gate to proceed:** Every P0 section has content sources mapped; navigation fits ≤ 5 items.

**Next stage:** [04-Design-Strategy.md](04-Design-Strategy.md)
