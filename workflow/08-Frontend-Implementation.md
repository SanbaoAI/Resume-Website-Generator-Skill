# Stage 08 — Frontend Implementation

## Purpose

Implement the **production-ready frontend** by translating all design artifacts into semantic, accessible, responsive code.

This is the **first stage where HTML, CSS, and JavaScript are permitted**.

---

## Input

| Input | Required | Description |
|-------|----------|-------------|
| `{ARTIFACTS_DIR}/layout-spec.md` | **Yes** | Layout authority from Stage 06 |
| `{ARTIFACTS_DIR}/ui-composition.md` | Yes | Visual + content spec (primary guide) |
| `{ARTIFACTS_DIR}/design-system.md` | Yes | Tokens and components |
| `{ARTIFACTS_DIR}/wireframes.md` | Yes | Layout reference |
| `{ARTIFACTS_DIR}/resume-data.json` | Yes | Content verification |
| [rules/layout-system.md](../rules/layout-system.md) | **Yes** | Layout patterns |
| [rules/frontend-rules.md](../rules/frontend-rules.md) | Yes | Engineering standards |
| [rules/i18n.md](../rules/i18n.md) | If bilingual | zh/en language toggle |
| [rules/animation.md](../rules/animation.md) | Reference | Motion implementation |

---

## Output

**Directory:** `{WEBSITE_DIR}/`

```
{WEBSITE_DIR}/
├── index.html
├── styles/
│   ├── tokens.css        # From design-system.md custom properties
│   ├── base.css          # Reset, typography defaults, focus styles
│   ├── layout.css        # Grid, section layout, responsive
│   └── components.css    # Buttons, nav, cards, timeline, etc.
├── scripts/
│   ├── i18n.js           # If bilingual: SITE_I18N + toggle (see rules/i18n.md)
│   └── main.js           # Nav, scroll, animations, interactions
└── assets/
    └── (images, favicon)
```

---

## Rules

1. **Follow layout-spec.md + ui-composition.md exactly** — zero layout decisions in code
2. **Name-first hero required** — implement `--text-name` as largest element; tagline = single `<h1>`; name = `<p>` with aria-label
3. **Floating pill nav required** — `top: --space-4`, `border-radius: full`, backdrop-blur; NOT `top: 0` edge-to-edge
4. **Stats bar in hero** — 4 metrics, responsive 2×2 → 4-column grid
5. **Section header blocks** — every section: label + h2 + subtitle before content
6. **Project cards** — elevated cards with hover (border, shadow, translateY)
7. **Semantic HTML5** — landmarks, one `<h1>` (tagline only)
3. **CSS custom properties** — all values from design system tokens; include `--text-name: clamp(3.5rem, 12vw, 7rem)`
4. **Mobile-first responsive** — 375px base, then 768px, 1024px, 1280px
5. **Accessibility** — WCAG 2.1 AA
6. **Performance** — no unnecessary JS libraries; lazy-load images; minimal DOM; no render-blocking resources beyond fonts
7. **No frameworks by default** — vanilla HTML/CSS/JS unless user requested a framework
8. **No Bootstrap, no uncustomized Tailwind** — if using Tailwind, every utility must map to design tokens via config
9. **Smooth scroll** — anchor navigation with `scroll-behavior: smooth` and JS fallback
10. **Floating pill navigation** — scroll state transition (per ui-composition spec)
11. **Favicon** — include a simple SVG favicon
12. **Valid HTML** — no unclosed tags, proper nesting, lang attribute on `<html>`
13. **Bilingual (optional)** — if enabled per [rules/i18n.md](../rules/i18n.md): `i18n.js`, nav lang toggle, `data-i18n*` on all UI strings, both locales complete

---

## Checklist

### Structure
- [ ] `index.html` with semantic landmarks and single h1
- [ ] Skip-to-content link as first focusable element
- [ ] All sections from IA present with correct anchor IDs
- [ ] Meta tags: title, description, viewport, OG tags

### Styles
- [ ] `tokens.css` matches design-system.md custom properties exactly
- [ ] `base.css` with reset, font loading, focus-visible styles
- [ ] `layout.css` with grid system and section spacing
- [ ] `components.css` with all specified components and states
- [ ] Mobile-first media queries at 768px and 1280px
- [ ] No hardcoded colors/sizes outside tokens

### Scripts
- [ ] Mobile navigation toggle
- [ ] Sticky nav scroll behavior
- [ ] Entrance animations (respecting prefers-reduced-motion)
- [ ] Smooth anchor scrolling
- [ ] No console errors
- [ ] (If bilingual) `i18n.js` + lang toggle; both zh/en verified

### Accessibility
- [ ] All images have alt text
- [ ] Focus order is logical
- [ ] Color contrast passes AA
- [ ] Interactive elements ≥ 44px touch target
- [ ] aria labels on icon-only buttons

### Content
- [ ] All text matches ui-composition.md and resume-data.json
- [ ] No Lorem ipsum or placeholder content
- [ ] All links functional (mailto:, https:)

### Quality
- [ ] Site renders correctly at 375px, 768px, 1280px
- [ ] No horizontal scroll on mobile
- [ ] Fonts load correctly

---

## Prompt

```
You are executing Stage 08 of the Resume Website Generator pipeline.

TASK: Implement the production frontend for {CANDIDATE_NAME}'s personal website.

INPUT (read ALL before writing code):
- {ARTIFACTS_DIR}/layout-spec.md (LAYOUT AUTHORITY)
- {ARTIFACTS_DIR}/ui-composition.md (PRIMARY)
- {ARTIFACTS_DIR}/design-system.md
- {ARTIFACTS_DIR}/wireframes.md
- {ARTIFACTS_DIR}/resume-data.json
- rules/layout-system.md
- rules/frontend-rules.md
- rules/i18n.md (if bilingual or demo site)

LAYOUT IMPLEMENTATION (non-negotiable):
1. tokens.css: include --text-name: clamp(3.5rem, 12vw, 7rem)
2. Hero: eyebrow → name (largest) → h1 tagline → subhead → dual CTA → stats bar
3. Nav: floating pill (.site-header { top: --space-4; } .site-header__inner { border-radius: full; blur; })
4. Every section: .section-header with label + h2 + subtitle
5. Projects: .project cards with hover states
6. SVG icons only, no emoji

RULES:
- Vanilla HTML/CSS/JS unless user specified a framework
- Implement EVERY section from ui-composition.md in order
- Copy CSS custom properties from design-system.md into styles/tokens.css
- Mobile-first responsive design
- WCAG 2.1 AA accessibility
- Respect prefers-reduced-motion
- No Bootstrap, no generic templates
- No design decisions — if ambiguous, note it and follow the closest spec

IMPLEMENTATION ORDER:
1. Create tokens.css from design system
2. Create base.css (reset, typography, focus)
3. Create layout.css (grid, sections)
4. Create components.css (all components with states)
5. Build index.html (semantic structure, all content, data-i18n* if bilingual)
6. Create i18n.js (if bilingual) then main.js (nav, scroll, animations, initSiteI18n)
7. Add favicon and meta tags
8. Verify at 375px, 768px, 1280px viewports; toggle both languages if i18n enabled

Write all files to {WEBSITE_DIR}/

After implementation, list any spec ambiguities encountered.
```

---

## Expected Result

A complete, runnable static website:

- Open `{WEBSITE_DIR}/index.html` in a browser → fully rendered personal site
- Responsive at all breakpoints
- Smooth navigation and subtle animations
- Premium visual quality matching the design artifacts
- Zero placeholder content

**Preview command:**

```bash
cd {WEBSITE_DIR} && npx serve .
```

**Gate to proceed:** Site renders completely with all sections, passes basic accessibility checks, no console errors.

**Next stage:** [09-Quality-Review.md](09-Quality-Review.md)
