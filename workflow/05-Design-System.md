# Stage 05 — Design System

## Purpose

Translate the design strategy into a **complete, implementable design system** — tokens, typography scale, color palette, spacing, grid, components, and states.

This artifact is the single source of truth for Stage 8 frontend implementation.

---

## Input

| Input | Required | Description |
|-------|----------|-------------|
| `{ARTIFACTS_DIR}/design-strategy.md` | Yes | Creative direction + Design Read + three dials |
| [rules/design-taste.md](../rules/design-taste.md) | Yes | Accent lock, shape consistency, palette rotation |
| `{ARTIFACTS_DIR}/information-architecture.md` | Yes | Components needed per section |
| [templates/design-system-template.md](../templates/design-system-template.md) | Yes | Output structure |
| [rules/typography.md](../rules/typography.md) | Yes | Type standards |
| [rules/spacing.md](../rules/spacing.md) | Yes | Spacing scale |
| [rules/color-system.md](../rules/color-system.md) | Yes | Color standards |
| [rules/animation.md](../rules/animation.md) | Reference | Motion tokens |

---

## Output

**File:** `{ARTIFACTS_DIR}/design-system.md`

Use [templates/design-system-template.md](../templates/design-system-template.md) as the document structure.

---

## Rules

1. **Every value must be implementable** — exact hex codes, px/rem values, font stacks with fallbacks
2. **CSS custom properties** — define all tokens as `--token-name` pairs ready for `tokens.css`
3. **Typography scale** — minimum 7 levels (**name**, display, h1, h2, h3, body, caption); `--text-name: clamp(3.5rem, 12vw, 7rem)` required
4. **Spacing scale** — use 4px or 8px base; minimum 8 steps
5. **Color palette** — primary, secondary, accent, neutral scale (50–950 or equivalent), semantic colors (success, error), surface colors
6. **Contrast** — all text/background pairs must meet WCAG AA (4.5:1 body, 3:1 large text)
7. **Taste tokens** — document corner-radius system, accent lock, and font pairing rationale per design-taste; no second accent color
8. **Grid** — define columns, gutters, margins per breakpoint (375, 768, 1280, 1440)
9. **Components** — specify every UI component needed: buttons, links, nav, cards, timeline items, tags, form inputs, footer
10. **States** — default, hover, focus, active, disabled for interactive elements
11. **Border radius, shadows, borders** — define sparingly; prefer flat/minimal
12. **No HTML/JSX** — token definitions and component specs in markdown only
13. **Google Fonts or system stacks** — specify exact font names and loading strategy

---

## Checklist

- [ ] Design tokens table complete (colors, spacing, typography, radius, shadows, motion)
- [ ] CSS custom properties block ready to copy into `tokens.css`
- [ ] Typography scale with all 6+ levels defined
- [ ] Color palette with contrast ratios documented
- [ ] Spacing scale (8+ steps)
- [ ] Grid specification for 4 breakpoints
- [ ] `--text-name` token defined (clamp 3.5rem → 7rem)
- [ ] Floating nav + HeroName + StatsGrid + GhostButton components specified
- [ ] Component specs for all needed UI elements
- [ ] Interactive states defined (hover, focus, active)
- [ ] Icon style specified (if applicable)
- [ ] Dark mode decision documented (implement or explicitly skip with rationale)
- [ ] Template fully populated
- [ ] File saved to `{ARTIFACTS_DIR}/design-system.md`

---

## Prompt

```
You are executing Stage 05 of the Resume Website Generator pipeline.

TASK: Generate a complete design system for {CANDIDATE_NAME}'s personal website.

INPUT:
- {ARTIFACTS_DIR}/design-strategy.md
- {ARTIFACTS_DIR}/information-architecture.md
- templates/design-system-template.md
- rules/typography.md, rules/spacing.md, rules/color-system.md, rules/animation.md

RULES:
- Follow design-system-template.md structure exactly
- Provide exact implementable values (hex, rem, px, font names)
- Generate a CSS custom properties block for tokens.css
- Verify WCAG AA contrast for all text/background pairs
- Define components needed for each IA section
- Include hover, focus, and active states for all interactive elements
- Keep shadows and border-radius minimal
- No HTML or component code — specification only

STEPS:
1. Read design strategy and IA to identify required components
2. Define color palette from strategy direction
3. Build typography scale (6+ levels)
4. Define spacing, grid, and layout tokens
5. Specify each component with anatomy, tokens used, and states
6. Output CSS custom properties block
7. Write to {ARTIFACTS_DIR}/design-system.md
```

---

## Expected Result

A complete design system including:

```css
/* Excerpt — full block in design-system.md */
:root {
  --color-bg-primary: #FAF9F7;
  --color-text-primary: #1A1A1A;
  --color-accent: #C4704B;
  --font-display: 'Instrument Sans', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --text-display: clamp(2.5rem, 5vw, 4.5rem);
  --space-4: 1rem;
  --grid-columns: 12;
  --grid-gutter: 1.5rem;
  --motion-duration: 300ms;
  --motion-ease: cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

Plus component specs for: Primary Button, Text Link, Nav Link, Section Label, Timeline Item, Project Card, Contact Form, Footer.

**Gate to proceed:** All IA sections have supporting components defined; contrast ratios pass AA.

**Next stage:** [06-Wireframe.md](06-Wireframe.md)
