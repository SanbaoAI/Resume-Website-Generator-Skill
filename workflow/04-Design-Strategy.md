# Stage 04 — Design Strategy

## Purpose

Define the **creative direction** for the personal website — the visual narrative, mood, layout philosophy, and differentiation strategy that separates this site from generic resume templates.

This stage answers: *"What should this site feel like?"*

---

## Input

| Input | Required | Description |
|-------|----------|-------------|
| `{ARTIFACTS_DIR}/candidate-analysis.md` | Yes | Brand keywords, audience, narrative |
| `{ARTIFACTS_DIR}/information-architecture.md` | Yes | Section structure |
| [rules/design-principles.md](../rules/design-principles.md) | Yes | Non-negotiable design standards |
| [rules/design-taste.md](../rules/design-taste.md) | **Yes** | Design Read, three dials, anti-slop |
| [rules/color-system.md](../rules/color-system.md) | Reference | Color philosophy |
| [rules/typography.md](../rules/typography.md) | Reference | Type philosophy |
| [rules/layout-system.md](../rules/layout-system.md) | **Yes** | Layout patterns (name-first hero, floating nav) |
| `.shared/ui-ux-pro-max/` or `.cursor/commands/ui-ux-pro-max.md` | If available | Design system search |

---

## UI/UX Pro Max Step (if available)

Before writing `design-strategy.md`, run:

```bash
python3 .shared/ui-ux-pro-max/scripts/search.py \
  "{PRIMARY_ROLE} portfolio personal website professional minimal" \
  --design-system -p "{CANDIDATE_NAME}" -f markdown
```

Save output to `{ARTIFACTS_DIR}/ux-pro-max-design-system.md`.

Also run:

```bash
python3 .shared/ui-ux-pro-max/scripts/search.py \
  "hero portfolio name social-proof stats" --domain landing -n 3
```

Use results to inform layout philosophy, color direction, and typography direction below.
If ui-ux-pro-max is not installed, use `rules/layout-system.md` as authority.

---

## Output

**File:** `{ARTIFACTS_DIR}/design-strategy.md`

---

## Rules

0. **Design Read first** — one line in `design-strategy.md` per [rules/design-taste.md](../rules/design-taste.md) §0
1. **Three dials** — set DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY (baseline `7 / 5 / 4` or resume preset from design-taste §1)
2. **One design concept** — commit to a single cohesive direction; no "Option A / Option B"
3. **Mood board in words** — describe the visual feel using references (e.g., "Linear.app meets Kinfolk magazine")
4. **Layout philosophy** — MUST commit to **Name-first hero + floating pill nav** per [rules/layout-system.md](../rules/layout-system.md); also choose content pattern: editorial asymmetric, card stack, or timeline
5. **Color direction** — specify palette intent (not hex yet): e.g., "warm neutral base + single accent"; rotate palette family per [rules/design-taste.md](../rules/design-taste.md) §4
6. **Typography direction** — specify pairing intent; avoid Inter/Fraunces defaults unless Design Read justifies
7. **Photography/imagery** — specify treatment: no photo, abstract shapes, subtle texture, or professional headshot with specific crop style
8. **Differentiation** — explicitly state what makes this site NOT look like a template AND visibly different from another same-role candidate
9. **Responsive strategy** — how the design adapts (stack, reflow, hide/show)
10. **Motion philosophy** — must align with MOTION_INTENSITY dial and [rules/animation.md](../rules/animation.md)
11. **Accessibility commitment** — contrast targets, motion preferences
12. **Slop rejection** — explicitly reject ≥3 patterns from design-taste §2 for this candidate
13. **No hex codes or px values yet** — those belong in Stage 5
14. **No code**

---

## Checklist

- [ ] Design Read written (one line: audience + vibe + aesthetic family)
- [ ] Three dials set (VARIANCE / MOTION / DENSITY) with rationale
- [ ] Design concept name and one-line description
- [ ] Mood references (2–3 real websites or brands as inspiration)
- [ ] Layout philosophy selected (name-first hero + floating nav confirmed)
- [ ] ux-pro-max design system saved (if available)
- [ ] Hero stats metrics identified (4 proof points from resume)
- [ ] Color direction described (warm/cool, light/dark, accent strategy)
- [ ] Typography direction described (headline + body pairing intent)
- [ ] Imagery strategy defined
- [ ] Differentiation statement (what avoids template look)
- [ ] Section-by-section design intent (how each IA section should feel)
- [ ] Responsive behavior strategy
- [ ] Motion philosophy aligned with [rules/animation.md](../rules/animation.md)
- [ ] Anti-patterns explicitly rejected for this project
- [ ] File saved to `{ARTIFACTS_DIR}/design-strategy.md`

---

## Prompt

```
You are executing Stage 04 of the Resume Website Generator pipeline.

TASK: Create a design strategy for {CANDIDATE_NAME}'s personal website.

INPUT:
- {ARTIFACTS_DIR}/candidate-analysis.md (brand keywords: {BRAND_KEYWORDS})
- {ARTIFACTS_DIR}/information-architecture.md
- rules/design-principles.md, rules/layout-system.md, rules/design-taste.md
- rules/color-system.md, rules/typography.md
- {ARTIFACTS_DIR}/ux-pro-max-design-system.md (if generated)

RULES:
- Start with Design Read + three dials (see rules/design-taste.md)
- Layout MUST use Name-first hero + floating pill nav (see rules/layout-system.md)
- Identify 4 hero stats metrics from resume proof points
- Commit to ONE design concept — no alternatives
- Reference 2-3 real websites/brands as mood inspiration (name them)
- Describe layout, color, typography, imagery, and motion directionally — NO hex codes, NO font file names, NO pixel values
- For each IA section, describe the intended visual feel in 1-2 sentences
- Explicitly list 3 anti-patterns you will avoid for this candidate
- Align with brand keywords from candidate analysis
- Output markdown only

OUTPUT STRUCTURE:
0. Design Read (one line)
1. Three Dials (VARIANCE / MOTION / DENSITY + rationale)
2. Design Concept (name + description)
3. Mood References
4. Layout Philosophy
5. Color Direction
6. Typography Direction
7. Imagery Strategy
8. Motion Philosophy
9. Section Design Intent (per IA section)
10. Responsive Strategy
11. Differentiation Statement
12. Rejected Anti-Patterns (≥3 from design-taste §2)

Write to {ARTIFACTS_DIR}/design-strategy.md
```

---

## Expected Result

A design strategy document like:

```
Concept: "Quiet Confidence"
Description: An editorial single-page experience that lets work speak through
typography and whitespace, inspired by Linear and Cereal magazine.

Layout: Asymmetric editorial — large left-aligned headlines, generous right margin,
content breathes in a 12-column grid with intentional empty columns.

Color: Warm off-white base (# direction: ivory/stone), near-black text,
single muted terracotta accent for CTAs and links.

Typography: Distinctive geometric sans for headlines (think: sharp, modern),
humanist sans for body (warm, readable at 18px+).

Differentiation: No skill bars, no card grid, no sidebar — experience told as
a vertical timeline with pull quotes from achievements.
```

**Gate to proceed:** Single committed concept with section-level intent for every P0/P1 IA section.

**Next stage:** [05-Design-System.md](05-Design-System.md)
