# Quality Review Report

> Stage 09 output template. Evidence-based scoring and issue tracking.

---

## Document Meta

| Field | Value |
|-------|-------|
| Project | {CANDIDATE_NAME} Personal Website |
| Review Date | {DATE} |
| Reviewer | Resume Website Generator — Stage 09 |
| Review Loop | {1 | 2} of 2 max |
| Website Path | `{WEBSITE_DIR}/` |

---

## Overall Result

| Metric | Value |
|--------|-------|
| **Overall Score** | **{score}/100** |
| **Status** | **{APPROVED | NEEDS IMPROVEMENT | NEEDS USER INPUT}** |
| Passing Threshold | 85/100 |

---

## Dimension Scores

| Dimension | Score | Weight | Weighted | Justification |
|-----------|-------|--------|----------|---------------|
| Visual Hierarchy | {0-100} | 15% | {calc} | {1 sentence evidence} |
| Typography | {0-100} | 15% | {calc} | {evidence} |
| Whitespace & Layout | {0-100} | 15% | {calc} | {evidence} |
| Brand Identity | {0-100} | 10% | {calc} | {evidence} |
| Responsiveness | {0-100} | 10% | {calc} | {evidence} |
| Accessibility | {0-100} | 15% | {calc} | {evidence} |
| Content & Narrative | {0-100} | 10% | {calc} | {evidence} |
| Micro-interactions | {0-100} | 10% | {calc} | {evidence} |
| **Total** | | **100%** | **{overall}** | |

---

## Issues

### Critical (Must Fix)

| # | Issue | Location | Evidence | Fix Target Stage |
|---|-------|----------|----------|------------------|
| {n} | {description} | {file/section} | {specific evidence} | {stage #} |

{If none: "No critical issues found."}

### Major (Should Fix)

| # | Issue | Location | Evidence | Fix Target Stage |
|---|-------|----------|----------|------------------|
| {n} | {description} | {file/section} | {evidence} | {stage #} |

### Minor (Polish)

| # | Issue | Location | Evidence |
|---|-------|----------|----------|
| {n} | {description} | {file/section} | {evidence} |

---

## Anti-Pattern Scan

| Anti-Pattern | Detected? | Notes |
|--------------|-----------|-------|
| Bootstrap / generic framework look | {Yes/No} | |
| Resume template sidebar layout | {Yes/No} | |
| Skill progress bars | {Yes/No} | |
| Rainbow tag cloud | {Yes/No} | |
| Stock photo hero | {Yes/No} | |
| Dashboard stat cards | {Yes/No} | |
| Excessive box shadows | {Yes/No} | |
| Lorem ipsum / placeholder content | {Yes/No} | |
| AI purple mesh gradient hero | {Yes/No} | |
| Inter + slate default pairing (unjustified) | {Yes/No} | |
| Em dashes in UI copy | {Yes/No} | |
| Beige + brass default palette (unjustified) | {Yes/No} | |

---

## Pre-Flight Taste Gate (design-taste §8)

| # | Check | Pass? | Notes |
|---|-------|-------|-------|
| 1 | Design Read + three dials in strategy | {✓/✗} | |
| 2 | Name-first hero + 4 real stats | {✓/✗} | |
| 3 | Floating pill nav | {✓/✗} | |
| 4 | Eyebrow count ≤ ceil(sections/3) | {✓/✗} | |
| 5 | ≥4 layout families (6+ sections) | {✓/✗} | |
| 6 | Single accent locked sitewide | {✓/✗} | |
| 7 | No skill bars / slop patterns | {✓/✗} | |
| 8 | Font pairing not lazy default | {✓/✗} | |
| 9 | One contact CTA label | {✓/✗} | |
| 10 | Theme lock (no mid-scroll flip) | {✓/✗} | |
| 11 | Motion matches dial; reduced-motion OK | {✓/✗} | |
| 12 | Content matches resume-data.json | {✓/✗} | |

**Pre-flight result:** {ALL PASS | FAIL — list failed checks}

---

## Artifact Consistency

| Check | Pass? | Notes |
|-------|-------|-------|
| Content matches `resume-data.json` | {✓/✗} | |
| Layout matches `wireframes.md` | {✓/✗} | |
| Visual spec matches `ui-composition.md` | {✓/✗} | |
| Tokens match `design-system.md` | {✓/✗} | |
| Narrative matches `candidate-analysis.md` | {✓/✗} | |
| IA structure matches `information-architecture.md` | {✓/✗} | |

---

## Accessibility Audit

| Check | Pass? | Notes |
|-------|-------|-------|
| Single `<h1>` on page | {✓/✗} | |
| Logical heading hierarchy | {✓/✗} | |
| All images have alt text | {✓/✗} | |
| Color contrast ≥ 4.5:1 (body) | {✓/✗} | |
| Color contrast ≥ 3:1 (large text) | {✓/✗} | |
| Focus indicators visible | {✓/✗} | |
| Skip-to-content link present | {✓/✗} | |
| Keyboard navigation works | {✓/✗} | |
| Touch targets ≥ 44px | {✓/✗} | |
| `prefers-reduced-motion` respected | {✓/✗} | |
| `lang` attribute on `<html>` | {✓/✗} | |
| Form inputs labeled (if any) | {✓/✗} | |

---

## Responsive Audit

| Viewport | Pass? | Issues |
|----------|-------|--------|
| 375px (mobile) | {✓/✗} | {issues} |
| 768px (tablet) | {✓/✗} | {issues} |
| 1280px (desktop) | {✓/✗} | {issues} |
| No horizontal scroll | {✓/✗} | |
| Text readable without zoom | {✓/✗} | |

---

## Content Accuracy

| Resume Field | Website Location | Accurate? |
|--------------|------------------|-----------|
| {field} | {section} | {✓/✗} |

{Verify all key facts: name, title, dates, companies, metrics, links}

---

## Improvement Plan

{if score < 85 or Critical issues exist}

| Step | Action | Target Stage | Status |
|------|--------|--------------|--------|
| 1 | {fix description} | {stage} | {Done/Pending} |
| 2 | {fix description} | {stage} | {Done/Pending} |
| 3 | Re-implement frontend | 08 | {Done/Pending} |
| 4 | Re-run review | 09 | {Done/Pending} |

---

## Final Verdict

**Status:** {APPROVED | NEEDS USER INPUT}

**Summary:**

{2-3 sentences summarizing quality, standout strengths, and any remaining minor issues.}

**Delivery Instructions:**

```bash
cd {WEBSITE_DIR} && npx serve .
```

**Pipeline complete.** ✓
