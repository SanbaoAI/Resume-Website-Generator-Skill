# Stage 06 — Wireframe & Layout Specification

## Purpose

Create **structural wireframes AND a complete layout specification** for every page section — defining where everything goes, how the name dominates the hero, how navigation floats, and how each section responds across 4 breakpoints.

Wireframes answer: *"Where does everything go?"*
Layout spec answers: *"Exactly how big, how spaced, and how structured?"*

**This is the most critical stage for visual quality.** Weak layout prompts here produce generic resume templates in Stage 8.

---

## Input

| Input | Required | Description |
|-------|----------|-------------|
| `{ARTIFACTS_DIR}/information-architecture.md` | Yes | Section structure and content |
| `{ARTIFACTS_DIR}/design-system.md` | Yes | Grid and component inventory |
| `{ARTIFACTS_DIR}/design-strategy.md` | Yes | Layout philosophy |
| [rules/layout-system.md](../rules/layout-system.md) | **Yes — mandatory** | Name-first hero, floating nav, section patterns |
| [templates/wireframe-template.md](../templates/wireframe-template.md) | Yes | Wireframe structure |
| [templates/layout-spec-template.md](../templates/layout-spec-template.md) | Yes | Layout spec structure |

---

## Output

**Files:**
- `{ARTIFACTS_DIR}/wireframes.md` — ASCII wireframes per section
- `{ARTIFACTS_DIR}/layout-spec.md` — Detailed layout specification (use layout-spec-template)

---

## Rules

### Non-Negotiable Layout Decisions

1. **Name-first Hero** — candidate name is the LARGEST element; see [rules/layout-system.md](../rules/layout-system.md#hero-layout-name-first--required)
2. **Floating pill navigation** — NOT edge-to-edge `top:0` navbar
3. **Stats bar in Hero** — exactly 4 metrics from resume proof points
4. **Section header block** — every section: Label + Title + Subtitle before content
5. **Project card stack** — elevated cards with hover spec, NOT flat list
6. **Two CTAs in Hero** — primary (contact) + secondary (view work)

### Wireframe Rules

7. **ASCII diagrams** — no Figma, no images, no HTML
8. **Every IA section** — desktop (1280px) + mobile (375px) minimum
9. **4 breakpoints** — document changes at 375, 768, 1024, 1280
10. **Grid column annotations** — on every wireframe block
11. **Real candidate content** — no Lorem ipsum
12. **Component labels** — match design system component names
13. **No colors or fonts** — structure only

---

## Checklist

- [ ] Read `rules/layout-system.md` completely before starting
- [ ] Hero wireframe: name-first with size annotation (`--text-name` clamp)
- [ ] Hero wireframe: stats bar with 4 real metrics
- [ ] Hero wireframe: eyebrow badge + dual CTA
- [ ] Navigation wireframe: floating pill (not edge-to-edge)
- [ ] Nav states: default, scrolled, mobile open
- [ ] Every P0 section: desktop + mobile wireframe
- [ ] Every section: header block (label + title + subtitle)
- [ ] Projects: card stack layout with hover annotation
- [ ] `layout-spec.md` created from template with all sections
- [ ] 4 breakpoints documented per section
- [ ] Layout anti-pattern scan passed (see layout-system.md)
- [ ] Files saved

---

## Prompt

```
You are executing Stage 06 of the Resume Website Generator pipeline.

TASK: Create wireframes AND a complete layout specification for {CANDIDATE_NAME}'s personal website.

CRITICAL: Read rules/layout-system.md FIRST. This is the layout authority.

INPUT:
- {ARTIFACTS_DIR}/information-architecture.md
- {ARTIFACTS_DIR}/design-system.md
- {ARTIFACTS_DIR}/design-strategy.md
- {ARTIFACTS_DIR}/candidate-analysis.md (for stats metrics)
- rules/layout-system.md (MANDATORY)
- templates/wireframe-template.md
- templates/layout-spec-template.md

MANDATORY LAYOUT DECISIONS (do not deviate):

1. HERO = Name-first layout:
   - Eyebrow pill (role · city · status)
   - CANDIDATE NAME at --text-name: clamp(3.5rem, 12vw, 7rem) — LARGEST element
   - Tagline as h1 at --text-display
   - Subhead (max 56ch)
   - [Primary CTA] + [Ghost CTA]
   - Stats bar: 4 real metrics from resume proof points
   - Optional decor element desktop only (col 11-12)

2. NAV = Floating pill:
   - fixed, top: 16px, left/right: 16px
   - border-radius: full, backdrop-blur, border, shadow
   - NOT edge-to-edge top:0 navbar

3. EVERY SECTION = Header block first:
   - Section label (overline) + h2 title + subtitle sentence
   - Then section content

4. PROJECTS = Card stack:
   - Elevated cards, padding --space-8, border-radius --radius-md
   - Hover: accent border + shadow + translateY(-2px)
   - Card: meta row + title + description + metrics row

5. EXPERIENCE = Timeline (period left, content right)

6. ABOUT = 2-column (narrative + skills pills)

7. CONTACT = Card container (max-width 640px)

OUTPUT TWO FILES:

### File 1: {ARTIFACTS_DIR}/wireframes.md
For each section:
- Section name + anchor
- Desktop ASCII wireframe (1280px) with grid column annotations
- Mobile ASCII wireframe (375px)
- Component list
- Responsive notes (375 / 768 / 1024 / 1280)
- Interaction annotations

### File 2: {ARTIFACTS_DIR}/layout-spec.md
Use templates/layout-spec-template.md:
- Global layout decisions
- Hero element stack table with typography tokens and grid columns
- Name sizing spec (exact clamp values)
- Stats bar: 4 metrics with resume sources
- Navigation spec with states
- Per-section layout pattern + breakpoint table
- Layout checklist (all items checked)

ANTI-PATTERNS — REJECT if any appear:
- Name same size as nav logo
- Edge-to-edge navbar
- Sidebar layout
- Skill progress bars
- Plain list instead of project cards
- Missing stats bar
- "Download CV" CTA
- Centered everything with no editorial asymmetry

Before finishing, run the Layout Quality Gate from rules/layout-system.md and confirm all items pass.
```

---

## Expected Result

### wireframes.md — Hero example

```
## Hero (#hero) — Name-first Layout

### Desktop (1280px)
┌─────────────────────────────────────────────────────────────────┐
│         ┌──────────────────────────────────────────────┐          │
│         │ Sanbao AI    项目·方法论·经历·关于    [联系我]  │ ← pill  │
│         └──────────────────────────────────────────────┘          │
│                                                                 │
│  Col 1-10                              Col 11-12                │
│  ┌────────────────────────────────┐    ┌──────────┐             │
│  │ [● AI 产研负责人 · 北京]       │    │ (decor)  │             │
│  │                                │    └──────────┘             │
│  │ Sanbao AI  ← 7rem, boldest          │                            │
│  │                                │                            │
│  │ 把 AI 变成可盈利的产品引擎      │ ← h1, 3rem                 │
│  │                                │                            │
│  │ Subhead (56ch max)             │                            │
│  │ [开始交流]  [查看项目]         │                            │
│  │ ─────────────────────────────  │                            │
│  │ 12+      5+      98%     3层   │ ← stats bar               │
│  │ 年经验   盈利    合格率   架构  │                            │
│  └────────────────────────────────┘                            │
└─────────────────────────────────────────────────────────────────┘

Grid: name col 1-10, decor col 11-12
Components: StatusPill, HeroName, HeroTagline, BodyLead, PrimaryBtn, GhostBtn, StatsGrid
```

### layout-spec.md — must include

- `--text-name: clamp(3.5rem, 12vw, 7rem)` documented
- 4 stats with resume sources
- Floating nav CSS properties (top, border-radius, blur)
- Per-section breakpoint table

**Gate to proceed:** Layout Quality Gate in `rules/layout-system.md` — all items checked.

**Next stage:** [07-UI-Composition.md](07-UI-Composition.md)
