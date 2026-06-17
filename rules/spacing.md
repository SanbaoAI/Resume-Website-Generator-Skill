# Spacing Rules

Standards for Stages 05 (Design System), 06 (Wireframe), and 08 (Frontend Implementation).

---

## Base Unit

**4px base** with an 8px rhythm for most spacing decisions.

All spacing values must come from the design system token scale — no arbitrary values.

---

## Spacing Scale

| Token | Value | px | Use |
|-------|-------|----|-----|
| `--space-1` | 0.25rem | 4px | Inline icon gap, tight padding |
| `--space-2` | 0.5rem | 8px | Compact element gap |
| `--space-3` | 0.75rem | 12px | Button padding vertical, tag padding |
| `--space-4` | 1rem | 16px | Default element gap, list item gap |
| `--space-5` | 1.25rem | 20px | Medium gap |
| `--space-6` | 1.5rem | 24px | Component internal padding |
| `--space-8` | 2rem | 32px | Between related groups |
| `--space-10` | 2.5rem | 40px | Between unrelated groups |
| `--space-12` | 3rem | 48px | Section padding (mobile) |
| `--space-16` | 4rem | 64px | Section padding (tablet) |
| `--space-24` | 6rem | 96px | Section padding (desktop) |
| `--space-32` | 8rem | 128px | Hero section padding (desktop) |

---

## Application Rules

### Within Components

| Relationship | Spacing |
|--------------|---------|
| Icon → text | `--space-2` |
| Label → input | `--space-2` |
| Button padding | `--space-3` vertical, `--space-6` horizontal |
| Card internal padding | `--space-6` to `--space-8` |
| List item gap | `--space-4` |

### Between Elements in a Section

| Relationship | Spacing |
|--------------|---------|
| Section label → headline | `--space-4` to `--space-6` |
| Headline → subhead/body | `--space-6` to `--space-8` |
| Body → CTA | `--space-8` to `--space-10` |
| Paragraph → paragraph | `--space-4` |
| Content group → content group | `--space-10` to `--space-12` |

### Between Sections

| Viewport | Section Padding (top + bottom) |
|----------|-------------------------------|
| Mobile (375px) | `--space-12` to `--space-16` each |
| Tablet (768px) | `--space-16` to `--space-24` each |
| Desktop (1280px+) | `--space-24` to `--space-32` each |

Hero section gets extra top padding: add `--space-8` to `--space-16` above standard section padding.

---

## Grid Spacing

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Page margin (horizontal) | `--space-4` to `--space-6` | `--space-8` | `--space-12` to auto |
| Column gutter | `--space-4` | `--space-6` | `--space-6` to `--space-8` |
| Max content width | 100% | 100% | 1200px–1280px |

---

## Vertical Rhythm

Maintain consistent vertical rhythm across the page:

1. All sections use the same padding scale
2. Internal spacing follows the element relationship table above
3. Alternate section backgrounds create visual separation without extra padding
4. Never use `<br>` tags for spacing — use CSS margin/padding

---

## Whitespace Philosophy

### Do

- Leave empty grid columns intentionally (asymmetric layouts)
- Use generous section padding to create breathing room
- Group related items tightly, separate unrelated groups widely
- Let headlines have room to dominate their space

### Don't

- Fill every column with content
- Use equal spacing everywhere (monotonous rhythm)
- Cram content to minimize scrolling
- Add padding AND borders AND shadows to the same element

---

## Responsive Spacing

Spacing should generally decrease on smaller viewports:

```css
.section {
  padding: var(--space-12) 0;
}

@media (min-width: 768px) {
  .section {
    padding: var(--space-16) 0;
  }
}

@media (min-width: 1280px) {
  .section {
    padding: var(--space-24) 0;
  }
}
```

Exception: touch targets and interactive element padding never shrink below 44px height.

---

## Wireframe Annotations

When annotating wireframes (Stage 06), reference spacing tokens:

```
Section Label → Headline: --space-6
Headline → Body: --space-8
Body → CTA: --space-10
Section padding: --space-24 (desktop)
```

Never write arbitrary pixel values in wireframes.
