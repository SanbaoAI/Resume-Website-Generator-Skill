# Frontend Rules

Engineering standards for Stage 08 (Frontend Implementation) and Stage 09 (Quality Review).

---

## Stack Defaults

When the user has no preference:

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Markup | Semantic HTML5 | Accessibility, SEO, no build step |
| Styles | CSS custom properties | Maps directly to design system tokens |
| Scripts | Vanilla ES6+ | Minimal bundle, no dependencies |
| Fonts | Google Fonts or system stack | Performance with preconnect |
| Icons | Inline SVG | No icon font loading, accessible |

---

## File Structure

```
website/
├── index.html              # Single entry point
├── styles/
│   ├── tokens.css          # Design system custom properties ONLY
│   ├── base.css            # Reset, defaults, typography base, focus
│   ├── layout.css          # Grid, containers, section spacing
│   └── components.css      # UI components and states
├── scripts/
│   └── main.js             # All interactions
└── assets/
    ├── favicon.svg
    └── (images)
```

### File Responsibilities

**tokens.css** — ONLY `:root` custom properties. No selectors, no rules.

**base.css** — Box-sizing reset, body defaults, font-family application, link defaults, focus-visible styles, skip link, `prefers-reduced-motion` media query.

**layout.css** — Container/grid classes, section wrappers, responsive breakpoints, utility classes for spacing if needed.

**components.css** — One section per component from design system. Include all states (hover, focus, active, disabled).

**main.js** — DOM ready handler, nav toggle, scroll effects, intersection observer for animations. No global pollution.

---

## HTML Standards

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{Name} — {Role}</title>
  <meta name="description" content="{from ui-composition.md}">
  <!-- Open Graph -->
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:type" content="website">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <!-- Fonts with preconnect -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="{font-url}" rel="stylesheet">
  <!-- Styles in order -->
  <link rel="stylesheet" href="styles/tokens.css">
  <link rel="stylesheet" href="styles/base.css">
  <link rel="stylesheet" href="styles/layout.css">
  <link rel="stylesheet" href="styles/components.css">
</head>
```

### Semantic Structure

```html
<body>
  <a href="#main" class="skip-link">Skip to content</a>
  <header>...</header>
  <nav aria-label="Primary">...</nav>
  <main id="main">
    <section id="hero" aria-label="Introduction">...</section>
    <section id="work" aria-label="Selected work">...</section>
    <!-- one h1 only, in hero -->
  </main>
  <footer>...</footer>
  <script src="scripts/main.js" defer></script>
</body>
```

### Rules

- One `<h1>` per page
- Heading levels never skip (h1 → h2 → h3, not h1 → h3)
- All `<section>` elements have accessible names (aria-label or aria-labelledby)
- All `<img>` have meaningful `alt` text (empty `alt=""` only for decorative)
- All interactive elements are `<button>` or `<a>` — never `<div onclick>`
- External links: `target="_blank" rel="noopener noreferrer"`

---

## CSS Standards

### Token Usage

```css
/* ✓ Correct — uses design token */
.button {
  background: var(--color-accent);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-sm);
  transition: background var(--motion-duration-fast) var(--motion-ease);
}

/* ✗ Wrong — magic numbers */
.button {
  background: #C4704B;
  padding: 12px 24px;
  border-radius: 6px;
}
```

Exception: `clamp()` values in tokens themselves, and `1px` borders.

### Mobile-First Breakpoints

```css
/* Base: mobile (375px+) */
.container { padding: var(--grid-margin-mobile); }

@media (min-width: 768px) { /* tablet */
  .container { padding: var(--grid-margin-tablet); }
}

@media (min-width: 1280px) { /* desktop */
  .container { padding: var(--grid-margin-desktop); }
}
```

### Focus Styles

```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## JavaScript Standards

### Required Features

1. **Mobile nav toggle** — aria-expanded, aria-controls
2. **Floating nav scroll state** — light/dark transition on hero exit
3. **Smooth scroll** — anchor links with offset for fixed nav
4. **Entrance animations** — Intersection Observer, respect reduced motion
5. **Current year in footer** — `new Date().getFullYear()`

### Patterns

```javascript
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollEffects();
  initAnimations();
});

// Check reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

### Prohibited

- jQuery (unnecessary weight)
- CSS/JS frameworks without user request
- Inline `<script>` blocks in HTML (except JSON-LD if needed)
- `document.write()`
- Global variable pollution
- Auto-playing animations without user interaction

---

## Performance

| Rule | Target |
|------|--------|
| Total CSS | < 30KB uncompressed |
| Total JS | < 10KB uncompressed |
| Images | WebP/AVIF preferred; max 200KB per image |
| Fonts | Max 2 families; subset weights used |
| HTTP requests | < 15 total |
| No render-blocking JS | `defer` on all scripts |

---

## SEO Minimum

- `<title>` — unique, descriptive, ≤ 60 characters
- `<meta name="description">` — compelling, ≤ 160 characters
- Open Graph tags (title, description, type)
- Semantic heading hierarchy
- Valid HTML (no unclosed tags)
- `lang` attribute on `<html>`

---

## Browser Support

Target: last 2 versions of Chrome, Firefox, Safari, Edge.

Use progressive enhancement. Site must be fully readable with CSS disabled.

---

## Deployment Readiness

The output is a static site deployable to:

- Netlify (drag & drop or git)
- Vercel (`vercel --prod`)
- GitHub Pages
- Cloudflare Pages
- Any static file server

No build step required by default. No environment variables. No server-side code.
