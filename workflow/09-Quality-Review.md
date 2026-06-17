# Stage 09 — Quality Review

## Purpose

Review the entire pipeline output — artifacts and final website — against design principles, accessibility standards, and premium quality bar.

Produce a scored review report and **automatically improve** if quality is below threshold.

---

## Input

| Input | Required | Description |
|-------|----------|-------------|
| `{WEBSITE_DIR}/` | Yes | Implemented website |
| All `{ARTIFACTS_DIR}/` files | Yes | Complete artifact chain |
| [templates/review-template.md](../templates/review-template.md) | Yes | Report structure |
| [rules/design-principles.md](../rules/design-principles.md) | Yes | Quality standards |
| [rules/layout-system.md](../rules/layout-system.md) | **Yes** | Layout quality gate |

---

## Output

**File:** `{ARTIFACTS_DIR}/review-report.md`

Use [templates/review-template.md](../templates/review-template.md) as the document structure.

If score < 85 or any Critical issue exists → fix and re-review (max 2 loops).

---

## Rules

1. **Score 8 dimensions** — each 0–100; overall = weighted average
2. **Issue severity** — Critical (blocks launch), Major ( hurts quality), Minor (polish)
3. **Evidence-based** — cite specific elements, lines, or sections for every issue
4. **Layout gate (Critical if failed)** — name-first hero, floating pill nav, stats bar, section header blocks per `layout-spec.md` and `rules/layout-system.md`
5. **Compare against artifacts** — verify implementation matches layout-spec.md, ui-composition.md, and design-system.md
6. **Anti-pattern scan** — explicitly check for rejected patterns from design strategy
7. **Accessibility audit** — contrast, focus, semantics, keyboard, reduced motion
8. **Responsive audit** — test at 375px, 768px, 1280px
9. **Content accuracy** — compare rendered text against resume-data.json
10. **Improvement loop** — fix Critical and Major issues; return to earliest affected stage
11. **Max 2 loops** — after 2 improvement cycles, deliver with remaining issues documented

### Scoring Dimensions

| Dimension | Weight | Evaluates |
|-----------|--------|-----------|
| Visual Hierarchy | 15% | Clear scanning path, typographic scale, focal points |
| Typography | 15% | Pairing quality, readability, scale consistency |
| Whitespace & Layout | 15% | Breathing room, grid adherence, alignment |
| Brand Identity | 10% | Distinctive feel, not template-like |
| Responsiveness | 10% | All breakpoints, no overflow, touch targets |
| Accessibility | 15% | WCAG AA, focus, semantics, motion |
| Content & Narrative | 10% | Story flow, accuracy, proof points visible |
| Micro-interactions | 10% | Animation quality, nav behavior, polish |

**Passing score: ≥ 85/100**

---

## Checklist

- [ ] All 8 dimensions scored with justification
- [ ] Overall weighted score calculated
- [ ] Critical/Major/Minor issues listed with evidence
- [ ] Anti-pattern scan completed
- [ ] Layout gate: name largest element, floating pill nav, 4 stats, section subtitles
- [ ] Layout matches `layout-spec.md`
- [ ] Accessibility checklist completed
- [ ] Responsive checklist completed (375, 768, 1280)
- [ ] Content accuracy verified against resume-data.json
- [ ] Template fully populated
- [ ] If score < 85: improvement plan with target stages identified
- [ ] If improving: fixes applied and re-review conducted
- [ ] File saved to `{ARTIFACTS_DIR}/review-report.md`

---

## Prompt

```
You are executing Stage 09 of the Resume Website Generator pipeline.

TASK: Review {CANDIDATE_NAME}'s personal website and produce a quality report.

INPUT:
- {WEBSITE_DIR}/ (all frontend files)
- {ARTIFACTS_DIR}/ (all artifacts from Stages 01-07)
- templates/review-template.md
- rules/design-principles.md
- rules/frontend-rules.md

REVIEW PROCESS:
1. Open and inspect the website code and structure
2. Compare implementation against ui-composition.md and design-system.md
3. Verify content against resume-data.json
4. Score all 8 dimensions (0-100) with evidence
5. Calculate weighted overall score
6. List all issues by severity (Critical / Major / Minor)
7. Run anti-pattern scan (Bootstrap look, skill bars, card grids, etc.)
8. Complete accessibility and responsive checklists
9. Fill review-template.md completely
10. Write to {ARTIFACTS_DIR}/review-report.md

IMPROVEMENT LOOP (if overall score < 85 OR any Critical issue):
1. Identify root cause and earliest affected stage
2. Fix upstream artifact if needed
3. Update downstream artifacts
4. Fix frontend code
5. Re-run this review (max 2 total loops)

Deliver the final review report and state whether the site is APPROVED or NEEDS USER INPUT.
```

---

## Expected Result

A complete review report:

```
Overall Score: 91/100 — APPROVED

| Dimension            | Score | Weight | Weighted |
|----------------------|-------|--------|----------|
| Visual Hierarchy     | 92    | 15%    | 13.8     |
| Typography           | 95    | 15%    | 14.25    |
| Whitespace & Layout  | 90    | 15%    | 13.5     |
| Brand Identity       | 88    | 10%    | 8.8      |
| Responsiveness       | 93    | 10%    | 9.3      |
| Accessibility        | 90    | 15%    | 13.5     |
| Content & Narrative  | 87    | 10%    | 8.7      |
| Micro-interactions   | 85    | 10%    | 8.5      |

Issues:
- [Minor] Experience timeline could use more vertical spacing on mobile
- [Minor] OG image not included

Status: APPROVED — ready for delivery
```

**Gate to proceed:** Score ≥ 85, zero Critical issues → deliver to user.

**Pipeline complete.**

---

## Post-Delivery Instructions for Agent

Tell the user:

1. **Preview:** `cd {WEBSITE_DIR} && npx serve .`
2. **Deploy:** Site is static — deploy to Netlify, Vercel, GitHub Pages, or any static host
3. **Artifacts:** All design documents saved in `{ARTIFACTS_DIR}/` for future iterations
4. **Iterate:** To redesign, restart from Stage 04; to update content, restart from Stage 01
