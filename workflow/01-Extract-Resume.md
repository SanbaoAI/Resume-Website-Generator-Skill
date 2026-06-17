# Stage 01 — Extract Resume

## Purpose

Parse the source resume (PDF, DOC, DOCX, or Markdown) into a **structured, lossless JSON representation** that preserves all factual content without design interpretation.

This stage is pure data extraction — no styling, no reordering, no summarization that drops facts.

---

## Input

| Input | Required | Description |
|-------|----------|-------------|
| `{RESUME_SOURCE}` | Yes | File path or raw content of the resume |
| Source format | Yes | One of: `pdf`, `docx`, `doc`, `markdown`, `text` |

---

## Output

**File:** `{ARTIFACTS_DIR}/resume-data.json`

Must conform to the schema in [rules/output-format.md](../rules/output-format.md#stage-01-resume-datajson-schema).

---

## Rules

1. **Extract everything** — contact info, summary, every role, every bullet, education, certifications, projects, skills, languages, awards, publications, links
2. **Preserve original text** — do not rewrite bullets; copy verbatim into `description` fields
3. **Normalize dates** — use ISO 8601 where possible (`2021-03` / `2021-03-01`); use `"present"` for current roles
4. **Detect sections** — map source headings to schema fields even if headings are non-standard ("Experience" = work, "Employment" = work)
5. **Handle missing data** — use `null` or empty arrays; never invent content
6. **Links** — extract all URLs; classify as `linkedin`, `github`, `portfolio`, `email`, or `other`
7. **No HTML/CSS/code** in this stage
8. **Confidence flags** — mark fields with `"confidence": "high" | "medium" | "low"` when OCR or parsing is uncertain

### Format-Specific Guidance

| Format | Approach |
|--------|----------|
| PDF (text) | Extract text per page; infer structure from font size/weight if available |
| PDF (scanned) | OCR first; flag low-confidence fields |
| DOCX | Parse paragraphs and heading styles |
| Markdown | Parse headings and list structure directly |
| Plain text | Infer sections from ALL CAPS headings or separator lines |

---

## Checklist

- [ ] Source file read completely (all pages)
- [ ] Contact information extracted (name, email, phone, location, links)
- [ ] Professional summary/objective captured (if present)
- [ ] All work experiences with company, title, dates, location, bullets
- [ ] All education entries with institution, degree, dates, honors
- [ ] Skills categorized (technical, soft, tools, languages)
- [ ] Projects, certifications, awards captured (if present)
- [ ] Dates normalized to consistent format
- [ ] No fabricated content
- [ ] JSON validates against schema
- [ ] File saved to `{ARTIFACTS_DIR}/resume-data.json`

---

## Prompt

```
You are executing Stage 01 of the Resume Website Generator pipeline.

TASK: Extract structured data from the resume at {RESUME_SOURCE}.

RULES:
- Output JSON only — no markdown, no HTML, no commentary outside the JSON file
- Preserve all original text verbatim in content fields
- Normalize dates to ISO format (YYYY-MM or YYYY-MM-DD)
- Use null for missing fields; empty arrays for missing lists
- Add confidence flags where parsing is uncertain
- Follow the schema in rules/output-format.md

STEPS:
1. Identify the source format (pdf/docx/markdown/text)
2. Extract all text and structural elements
3. Map content to the resume-data.json schema
4. Validate completeness against the source document
5. Write the result to {ARTIFACTS_DIR}/resume-data.json

After writing the file, list any sections that were ambiguous or low-confidence.
```

---

## Expected Result

A valid `resume-data.json` file containing:

```json
{
  "meta": {
    "source_file": "example-input.pdf",
    "source_format": "pdf",
    "extracted_at": "2026-06-17T00:00:00Z",
    "page_count": 2,
    "extraction_notes": []
  },
  "personal": {
    "full_name": "Jane Chen",
    "headline": "Senior Product Designer",
    "location": "San Francisco, CA",
    "email": "jane@example.com",
    "phone": "+1 (415) 555-0142",
    "links": [
      { "type": "linkedin", "url": "https://linkedin.com/in/janechen", "label": "LinkedIn" },
      { "type": "portfolio", "url": "https://janechen.design", "label": "Portfolio" }
    ]
  },
  "summary": "Product designer with 8+ years...",
  "experience": [ "..." ],
  "education": [ "..." ],
  "skills": { "..." },
  "projects": [ "..." ],
  "certifications": [],
  "awards": [],
  "languages": [],
  "publications": []
}
```

**Gate to proceed:** JSON is complete, valid, and every visible section of the source resume is represented.

**Next stage:** [02-Analyze-Resume.md](02-Analyze-Resume.md)
