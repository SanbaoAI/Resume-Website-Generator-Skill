# Design System

> Stage 05 output template. All values must be exact and implementable.

---

## Document Meta

| Field | Value |
|-------|-------|
| Project | {CANDIDATE_NAME} Personal Website |
| Design Concept | {from design-strategy.md} |
| Version | 1.0 |
| Date | {DATE} |

---

## 1. Design Tokens

### 1.1 Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | #{hex} | Page background |
| `--color-bg-secondary` | #{hex} | Alternate section background |
| `--color-bg-elevated` | #{hex} | Cards, modals |
| `--color-text-primary` | #{hex} | Headlines, body |
| `--color-text-secondary` | #{hex} | Subheads, captions |
| `--color-text-tertiary` | #{hex} | Muted labels |
| `--color-accent` | #{hex} | CTAs, links, highlights |
| `--color-accent-hover` | #{hex} | Accent hover state |
| `--color-border` | #{hex} | Dividers, borders |
| `--color-border-subtle` | #{hex} | Light separators |

**Contrast Ratios:**

| Pair | Ratio | WCAG AA |
|------|-------|---------|
| `--color-text-primary` on `--color-bg-primary` | {ratio}:1 | {Pass/Fail} |
| `--color-text-secondary` on `--color-bg-primary` | {ratio}:1 | {Pass/Fail} |
| `--color-accent` on `--color-bg-primary` | {ratio}:1 | {Pass/Fail} |

### 1.2 Typography Tokens

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `--text-name` | clamp(3.5rem, 12vw, 7rem) | 700 | 0.95 | -0.04em | **Candidate name (largest)** |
| `--text-display` | {clamp/rem} | {weight} | {lh} | {ls} | Hero tagline (h1) |
| `--text-h1` | {size} | {weight} | {lh} | {ls} | Section titles |
| `--text-h2` | {size} | {weight} | {lh} | {ls} | Subsection titles |
| `--text-h3` | {size} | {weight} | {lh} | {ls} | Card titles |
| `--text-body-lg` | {size} | {weight} | {lh} | {ls} | Lead paragraphs |
| `--text-body` | {size} | {weight} | {lh} | {ls} | Body text |
| `--text-caption` | {size} | {weight} | {lh} | {ls} | Labels, metadata |
| `--text-overline` | {size} | {weight} | {lh} | {ls} | Section labels |

**Font Stacks:**

| Token | Value |
|-------|-------|
| `--font-display` | '{Font Name}', {fallbacks} |
| `--font-body` | '{Font Name}', {fallbacks} |
| `--font-mono` | '{Font Name}', {fallbacks} |

**Font Loading:**

```html
<!-- Google Fonts or self-hosted link -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="{font-url}" rel="stylesheet">
```

### 1.3 Spacing Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 0.25rem (4px) | Tight inline |
| `--space-2` | 0.5rem (8px) | Icon gaps |
| `--space-3` | 0.75rem (12px) | Compact padding |
| `--space-4` | 1rem (16px) | Default gap |
| `--space-6` | 1.5rem (24px) | Component padding |
| `--space-8` | 2rem (32px) | Section inner gap |
| `--space-10` | 2.5rem (40px) | Block separation |
| `--space-12` | 3rem (48px) | Section padding mobile |
| `--space-16` | 4rem (64px) | Section padding tablet |
| `--space-24` | 6rem (96px) | Section padding desktop |
| `--space-32` | 8rem (128px) | Hero padding |

### 1.4 Layout Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--grid-columns` | 12 | Grid system |
| `--grid-gutter` | {value} | Column gap |
| `--grid-margin-mobile` | {value} | Page margin mobile |
| `--grid-margin-tablet` | {value} | Page margin tablet |
| `--grid-margin-desktop` | {value} | Page margin desktop |
| `--content-max-width` | {value} | Max content width |
| `--nav-height` | {value} | Navigation bar height |

### 1.5 Effect Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | {value} | Buttons, tags |
| `--radius-md` | {value} | Cards |
| `--radius-lg` | {value} | Large containers |
| `--shadow-sm` | {value} | Subtle elevation |
| `--shadow-md` | {value} | Cards on hover |

### 1.6 Motion Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--motion-duration-fast` | {ms} | Hover transitions |
| `--motion-duration` | {ms} | Standard transitions |
| `--motion-duration-slow` | {ms} | Entrance animations |
| `--motion-ease` | {cubic-bezier} | Default easing |
| `--motion-ease-out` | {cubic-bezier} | Exit animations |

---

## 2. CSS Custom Properties Block

Copy this block directly into `styles/tokens.css`:

```css
:root {
  /* Colors */
  --color-bg-primary: #{hex};
  --color-bg-secondary: #{hex};
  /* ... all color tokens ... */

  /* Typography */
  --font-display: '{Font}', system-ui, sans-serif;
  --font-body: '{Font}', system-ui, sans-serif;
  --text-display: clamp(2.5rem, 5vw, 4.5rem);
  /* ... all type tokens ... */

  /* Spacing */
  --space-1: 0.25rem;
  /* ... all spacing tokens ... */

  /* Layout */
  --grid-columns: 12;
  /* ... all layout tokens ... */

  /* Effects */
  --radius-sm: {value};
  /* ... all effect tokens ... */

  /* Motion */
  --motion-duration: 300ms;
  --motion-ease: cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

---

## 3. Grid System

| Breakpoint | Width | Columns | Gutter | Margin | Max Content |
|------------|-------|---------|--------|--------|-------------|
| Mobile | 375px+ | 4 | {gutter} | {margin} | 100% |
| Tablet | 768px+ | 8 | {gutter} | {margin} | 100% |
| Desktop | 1280px+ | 12 | {gutter} | {margin} | {max-width} |
| Wide | 1440px+ | 12 | {gutter} | {margin} | {max-width} |

---

## 4. Component Specifications

### 4.1 Primary Button

| Property | Value |
|----------|-------|
| Background | `--color-accent` |
| Text | `--color-bg-primary` or white |
| Font | `--text-body`, `--font-body`, weight 500 |
| Padding | `--space-3` `--space-6` |
| Border radius | `--radius-sm` |
| Min height | 44px |

**States:**

| State | Changes |
|-------|---------|
| Hover | Background → `--color-accent-hover`; transition `--motion-duration-fast` |
| Focus | 2px outline `--color-accent`, offset 2px |
| Active | Scale 0.98 |
| Disabled | Opacity 0.5; pointer-events none |

### 4.2 Text Link

{Same structure as above}

### 4.3 Nav Link

{Same structure}

### 4.4 Section Label (Overline)

{Same structure}

### 4.5 {Additional components per IA sections}

{Define each component needed: Timeline Item, Project Card, Tag, Contact Link, Footer, etc.}

---

## 5. Dark Mode

**Decision:** {Implemented | Not implemented}

**Rationale:** {Why or why not}

{if implemented, include dark mode token overrides}

---

## 6. Iconography

| Property | Value |
|----------|-------|
| Style | {Outline / Solid / Custom} |
| Size | {16px / 20px / 24px} |
| Stroke | {1.5px / 2px} |
| Source | {SVG inline / Heroicons / Custom} |

---

## Ready for Stage 06

- [ ] All tokens defined with exact values
- [ ] CSS custom properties block complete
- [ ] Contrast ratios pass WCAG AA
- [ ] All IA components specified
- [ ] Interactive states defined

**Next:** [06-Wireframe.md](../workflow/06-Wireframe.md)
