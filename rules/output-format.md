# Output Format Rules

Artifact schemas and file conventions for all pipeline stages.

---

## Directory Convention

Every pipeline run produces:

```
output/{candidate-slug}/
├── artifacts/
│   ├── resume-data.json
│   ├── candidate-analysis.md
│   ├── information-architecture.md
│   ├── design-strategy.md
│   ├── design-system.md
│   ├── wireframes.md
│   ├── ui-composition.md
│   └── review-report.md
└── website/
    ├── index.html
    ├── styles/
    │   ├── tokens.css
    │   ├── base.css
    │   ├── layout.css
    │   └── components.css
    ├── scripts/
    │   └── main.js
    └── assets/
        └── favicon.svg
```

**Slug rules:** lowercase, hyphenated, ASCII only. Example: `jane-chen`, `marcus-okonkwo`.

---

## Stage 01: resume-data.json Schema

```json
{
  "meta": {
    "source_file": "string",
    "source_format": "pdf | docx | doc | markdown | text",
    "extracted_at": "ISO 8601 datetime",
    "page_count": "number | null",
    "extraction_notes": ["string"]
  },
  "personal": {
    "full_name": "string",
    "headline": "string | null",
    "location": "string | null",
    "email": "string | null",
    "phone": "string | null",
    "links": [
      {
        "type": "linkedin | github | portfolio | twitter | email | other",
        "url": "string",
        "label": "string"
      }
    ]
  },
  "summary": "string | null",
  "experience": [
    {
      "company": "string",
      "title": "string",
      "location": "string | null",
      "start_date": "YYYY-MM | YYYY-MM-DD",
      "end_date": "YYYY-MM | YYYY-MM-DD | present",
      "description": "string | null",
      "highlights": ["string"],
      "confidence": "high | medium | low"
    }
  ],
  "education": [
    {
      "institution": "string",
      "degree": "string",
      "field": "string | null",
      "start_date": "YYYY-MM | null",
      "end_date": "YYYY-MM | null",
      "gpa": "string | null",
      "honors": ["string"],
      "confidence": "high | medium | low"
    }
  ],
  "skills": {
    "technical": ["string"],
    "tools": ["string"],
    "soft": ["string"],
    "languages_spoken": ["string"]
  },
  "projects": [
    {
      "name": "string",
      "description": "string",
      "url": "string | null",
      "technologies": ["string"],
      "highlights": ["string"]
    }
  ],
  "certifications": [
    {
      "name": "string",
      "issuer": "string",
      "date": "YYYY-MM | null",
      "url": "string | null"
    }
  ],
  "awards": [
    {
      "name": "string",
      "issuer": "string | null",
      "date": "YYYY-MM | null",
      "description": "string | null"
    }
  ],
  "languages": [
    {
      "language": "string",
      "proficiency": "string | null"
    }
  ],
  "publications": [
    {
      "title": "string",
      "publisher": "string | null",
      "date": "YYYY-MM | null",
      "url": "string | null"
    }
  ]
}
```

---

## Stage 02: candidate-analysis.md

Follow [templates/brief-template.md](../templates/brief-template.md) structure exactly.

**Format:** Markdown with tables and structured sections.
**No code blocks** except inline examples.

---

## Stage 03: information-architecture.md

Required sections:

1. Site Overview (type, primary CTA, visitor flow)
2. Navigation (desktop + mobile)
3. Section Inventory (ordered, with priority, anchor ID, word budget)
4. Content Mapping Table
5. Scroll Narrative
6. Omissions & Rationale
7. Footer Specification

---

## Stage 04: design-strategy.md

Required sections:

1. Design Concept (name + description)
2. Mood References
3. Layout Philosophy
4. Color Direction (no hex)
5. Typography Direction (no font names)
6. Imagery Strategy
7. Motion Philosophy
8. Section Design Intent
9. Responsive Strategy
10. Differentiation Statement
11. Rejected Anti-Patterns

---

## Stage 05: design-system.md

Follow [templates/design-system-template.md](../templates/design-system-template.md).

Must include copy-paste-ready CSS custom properties block.

---

## Stage 06: wireframes.md + layout-spec.md

Follow [templates/wireframe-template.md](../templates/wireframe-template.md) and [templates/layout-spec-template.md](../templates/layout-spec-template.md).

**layout-spec.md is mandatory.** Must document name-first hero, floating nav, stats bar, and per-section layout patterns per [rules/layout-system.md](layout-system.md).

ASCII diagrams only. No images, no HTML.

---

## Stage 07: ui-composition.md

Per-section specification format:

```markdown
## {Section Name} (#{anchor-id})

**Semantic:** {HTML element + ARIA}
**Content:** {exact text}
**Typography:** {token mappings}
**Color:** {token mappings}
**Spacing:** {token mappings}
**Layout:** {grid columns, alignment}
**Components:** {design system components used}
**Imagery:** {if any}
**Animation:** {spec}
**Accessibility:** {heading level, focus, alt text}
**Responsive:** {breakpoint changes}
```

Plus global specs: SEO metadata, navigation, footer.

---

## Stage 08: website/

Production code following [rules/frontend-rules.md](frontend-rules.md).

---

## Stage 09: review-report.md

Follow [templates/review-template.md](../templates/review-template.md).

Must include numeric scores and weighted total.

---

## File Naming

| Rule | Example |
|------|---------|
| Artifacts: kebab-case | `candidate-analysis.md` |
| CSS: kebab-case | `tokens.css` |
| JS: camelCase file ok | `main.js` |
| HTML: lowercase | `index.html` |
| Assets: kebab-case | `favicon.svg` |
| No spaces in filenames | ✓ |
| No version numbers in filenames | ✓ |

---

## Markdown Conventions

- Use `#` for document title, `##` for major sections, `###` for subsections
- Use tables for structured data
- Use code blocks for CSS, JSON, ASCII diagrams
- No HTML in markdown artifacts (Stages 02–07)
- Dates in ISO format: `2026-06-17`

---

## Validation Gates

| Stage | Gate Criteria |
|-------|---------------|
| 01 | Valid JSON, all resume sections represented |
| 02 | All brief template sections populated |
| 03 | ≤ 5 nav items, all P0 sections mapped |
| 04 | Single committed concept, section intents defined |
| 05 | All tokens with exact values, contrast passes AA |
| 06 | All P0 sections: desktop + mobile wireframes; layout-spec complete; name-first hero specified |
| 07 | All sections spec'd with real content and tokens |
| 08 | Site renders, no placeholders, responsive |
| 09 | Score ≥ 85, zero critical issues |
