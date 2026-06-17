# Wireframes

> Stage 06 output template. ASCII diagrams with annotations — no visual styling.

---

## Document Meta

| Field | Value |
|-------|-------|
| Project | {CANDIDATE_NAME} Personal Website |
| Layout Philosophy | {from design-strategy.md} |
| Grid | {columns}-column, {gutter} gutter |
| Date | {DATE} |

---

## Global Layout

### Desktop (1280px)

```
┌──────────────────────────────────────────────────────────────────┐
│ [Navigation Bar — sticky, full width, --nav-height]            │
│  Logo          Nav Link  Nav Link  Nav Link  Nav Link  [CTA]   │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                     Main Content Area                      │  │
│  │              (sections stack vertically)                   │  │
│  │                                                            │  │
│  │  #hero                                                     │  │
│  │  #work                                                     │  │
│  │  #approach                                                 │  │
│  │  #experience                                               │  │
│  │  #about                                                    │  │
│  │  #contact                                                  │  │
│  │                                                            │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│ [Footer — full width]                                            │
│  Copyright · Social Links · Back to top                          │
└──────────────────────────────────────────────────────────────────┘
```

### Mobile (375px)

```
┌────────────────────────┐
│ [☰]  Logo              │
├────────────────────────┤
│                        │
│  (sections stack       │
│   full width)          │
│                        │
├────────────────────────┤
│ [Footer]               │
└────────────────────────┘
```

---

## Global Layout

### Floating Navigation (REQUIRED — not edge-to-edge)

```
Position: fixed, top: 16px, left/right: 16px
Style: pill (border-radius: full), backdrop-blur, border, shadow
Height: --nav-height

┌──────────────────────────────────────────────────────────────┐
│    ┌────────────────────────────────────────────────────┐    │
│    │ [Logo]     Link  Link  Link  Link      [CTA Btn]  │    │
│    └────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

---

## Section: Hero (#hero) — Name-First Layout (REQUIRED)

**Priority:** P0
**Pattern:** Name-first + stats bar (see rules/layout-system.md)

### Desktop (1280px)

```
┌─────────────────────────────────────────────────────────────────┐
│              [Floating Nav Pill — see above]                     │
│                                                                 │
│  Col 1-10                              Col 11-12 (decor)      │
│  ┌────────────────────────────────┐    ┌──────────┐             │
│  │ [Eyebrow Pill]                 │    │ abstract │             │
│  │                                │    │  decor   │             │
│  │ CANDIDATE NAME                 │    └──────────┘             │
│  │ ← --text-name, LARGEST (7rem)  │                            │
│  │                                │                            │
│  │ Tagline (h1)                   │                            │
│  │ ← --text-display (3rem)        │                            │
│  │                                │                            │
│  │ Subhead (max 56ch)             │                            │
│  │ [Primary CTA]  [Ghost CTA]     │                            │
│  │ ─────────────────────────────  │                            │
│  │ STAT1   STAT2   STAT3   STAT4  │ ← stats bar (4 metrics)   │
│  └────────────────────────────────┘                            │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile (375px)

```
┌──────────────────────┐
│ [Floating Nav Pill]  │
│ [Eyebrow Pill]       │
│ CANDIDATE NAME       │
│ (min 3.5rem)         │
│ Tagline (h1)         │
│ Subhead              │
│ [Primary CTA]        │
│ [Ghost CTA]          │
│ STAT1    STAT2       │
│ STAT3    STAT4       │
└──────────────────────┘
```

### Annotations

| Property | Value |
|----------|-------|
| Name sizing | `--text-name: clamp(3.5rem, 12vw, 7rem)` |
| h1 element | Tagline only (name is visual `<p>`) |
| Stats | 4 metrics from resume proof points |
| Components | StatusPill, HeroName, HeroTagline, BodyLead, PrimaryBtn, GhostBtn, StatsGrid |
| Decor | Hidden on mobile |

---

## Section: {Next Section}

**Priority:** {P0 | P1}
**Purpose:** {one sentence from IA}

### Desktop (1280px)

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  Col {start}-{end}                                               │
│  ┌─────────────────────────────────────┐                         │
│  │ [SectionLabel]                      │  Col {start}-{end}      │
│  │                                     │  ┌──────────────────┐   │
│  │ [Headline / Content Block]          │  │ [Supporting       │   │
│  │                                     │  │  Element]         │   │
│  │ [Body Text]                         │  └──────────────────┘   │
│  │                                     │                         │
│  │ [CTA or Action]                     │                         │
│  └─────────────────────────────────────┘                         │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Mobile (375px)

```
┌────────────────────────┐
│ [SectionLabel]         │
│                        │
│ [Headline]             │
│ (full width, stacked)  │
│                        │
│ [Body Text]            │
│                        │
│ [CTA]                  │
└────────────────────────┘
```

### Annotations

| Property | Value |
|----------|-------|
| Grid columns (desktop) | {col start-end} |
| Components | {list from design system} |
| Content source | {resume-data.json field} |
| Section padding top | `--space-{n}` |
| Section padding bottom | `--space-{n}` |

### Responsive Notes

| Breakpoint | Behavior |
|------------|----------|
| 375px | {changes} |
| 768px | {changes} |
| 1280px | {default layout} |

### Interactions

| Trigger | Behavior |
|---------|----------|
| {e.g., Scroll into view} | {e.g., Content fade-up animation} |
| {e.g., Hover on project} | {e.g., Subtle background shift} |

---

## Section: {Next Section}

{Repeat the section template for every IA section}

---

## Wireframe Index

| # | Section | Anchor | Desktop | Mobile | Priority |
|---|---------|--------|---------|--------|----------|
| 1 | {name} | #{id} | ✓ | ✓ | P0 |
| 2 | {name} | #{id} | ✓ | ✓ | P0 |
| 3 | {name} | #{id} | ✓ | ✓ | P1 |

---

## Ready for Stage 07

- [ ] Global layout wireframed
- [ ] Navigation states documented
- [ ] Every P0 section: desktop + mobile
- [ ] Every P1 section: at least desktop
- [ ] Grid annotations on all wireframes
- [ ] Components labeled from design system

**Next:** [07-UI-Composition.md](../workflow/07-UI-Composition.md)
