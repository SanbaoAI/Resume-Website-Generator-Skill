# Stage 02 — Analyze Resume

## Purpose

Transform raw resume data into a **strategic candidate profile** — understanding who this person is professionally, what makes them distinctive, and what narrative the website should tell.

This is qualitative analysis, not data extraction.

---

## Input

| Input | Required | Description |
|-------|----------|-------------|
| `{ARTIFACTS_DIR}/resume-data.json` | Yes | Structured resume from Stage 01 |
| [templates/brief-template.md](../templates/brief-template.md) | Yes | Output structure template |
| [rules/design-principles.md](../rules/design-principles.md) | Reference | Brand and narrative principles |

---

## Output

**File:** `{ARTIFACTS_DIR}/candidate-analysis.md`

Use [templates/brief-template.md](../templates/brief-template.md) as the document structure.

---

## Rules

1. **Infer, don't invent** — derive insights from resume evidence; mark assumptions explicitly
2. **Identify the primary professional identity** — one clear sentence: "X is a [role] who [differentiator]"
3. **Extract proof points** — top 3–5 measurable achievements with metrics where available
4. **Map audience** — who will visit this site (recruiters, hiring managers, clients, collaborators)
5. **Define tone** — 3–5 brand keywords (e.g., "precise," "human-centered," "systems-thinking")
6. **Spot gaps** — note missing portfolio links, weak summary, thin project descriptions
7. **Career arc** — identify progression pattern (specialist → generalist, IC → lead, industry pivot)
8. **No design decisions yet** — no colors, fonts, layouts, or section ordering
9. **No code**

---

## Checklist

- [ ] Read complete `resume-data.json`
- [ ] Primary professional identity defined (one sentence)
- [ ] Target audience identified (primary + secondary)
- [ ] Brand keywords selected (3–5 adjectives)
- [ ] Top proof points listed with evidence from resume
- [ ] Career narrative arc described
- [ ] Strengths and differentiators articulated
- [ ] Content gaps and risks documented
- [ ] Competitive positioning noted (what makes them stand out in their field)
- [ ] Template sections fully populated (no `[TBD]` placeholders)
- [ ] File saved to `{ARTIFACTS_DIR}/candidate-analysis.md`

---

## Prompt

```
You are executing Stage 02 of the Resume Website Generator pipeline.

TASK: Analyze the candidate profile from {ARTIFACTS_DIR}/resume-data.json and produce a strategic brief.

INPUT:
- resume-data.json (Stage 01 output)
- templates/brief-template.md (output structure)
- rules/design-principles.md (narrative principles)

RULES:
- Use the brief template structure exactly
- Base every claim on resume evidence; label inferences as "Inferred:"
- Define ONE primary professional identity sentence
- Identify 3-5 brand keywords that will guide visual design in later stages
- List top proof points with metrics where available
- Document content gaps that may affect website quality
- Do NOT make design decisions (no colors, fonts, layouts)
- Output markdown only

STEPS:
1. Read resume-data.json completely
2. Identify professional identity, audience, and narrative arc
3. Extract proof points and differentiators
4. Fill every section of brief-template.md
5. Write to {ARTIFACTS_DIR}/candidate-analysis.md

End with a 2-sentence executive summary of who this person is and what story the website should tell.
```

---

## Expected Result

A complete `candidate-analysis.md` containing:

- **Executive Summary** — 2–3 sentences on professional identity
- **Primary Identity** — "Jane Chen is a senior product designer who transforms complex B2B workflows into intuitive experiences"
- **Target Audience** — recruiters at design-forward companies, hiring managers seeking design systems expertise
- **Brand Keywords** — precise, warm, systematic, editorial, confident
- **Proof Points** — 3–5 achievements with metrics
- **Career Arc** — progression from visual design → product design → design systems lead
- **Content Gaps** — e.g., "No case study links for top 2 projects"
- **Website Narrative** — the story arc the site should follow

**Gate to proceed:** Every template section is populated with specific, evidence-based content.

**Next stage:** [03-Information-Architecture.md](03-Information-Architecture.md)
