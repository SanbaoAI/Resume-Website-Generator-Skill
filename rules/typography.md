# Typography Rules

Standards for Stages 05 (Design System), 07 (UI Composition), and 08 (Frontend Implementation).

---

## Font Selection

### Display / Headline Font

Choose ONE distinctive font for headlines. It carries brand identity.

**Preferred categories:**
- Geometric sans: Instrument Sans, Satoshi, General Sans, Syne
- Neo-grotesque: Inter (if used only for display at large sizes), Helvetica Now
- Serif display: Fraunces, Newsreader, Playfair Display (editorial feel)
- Humanist: DM Sans, Outfit, Plus Jakarta Sans

**Avoid:**
- Arial, Helvetica (unmodified system defaults)
- Roboto (overused in generic templates)
- Comic Sans, Papyrus, Impact
- More than 2 font families total

### Body Font

Choose ONE highly readable font for body text.

**Preferred:**
- Inter, Source Sans 3, IBM Plex Sans, Literata, Lora (serif body for editorial)

**Requirements:**
- Excellent hinting at 16–18px
- Full character set including proper quotes and dashes
- At least weights 400, 500, 600 available

### Pairing Rules

| Display Type | Body Pairing |
|--------------|--------------|
| Geometric sans | Humanist sans or serif |
| Serif display | Sans-serif body |
| Bold sans display | Light-regular sans body |

Maximum contrast between display and body — not similarity.

---

## Type Scale

Define minimum 6 levels. Use `clamp()` for fluid scaling on display sizes.

| Level | Token | Mobile | Desktop | Weight | Line Height | Use |
|-------|-------|--------|---------|--------|-------------|-----|
| Display | `--text-display` | 2.5rem | 4–4.5rem | 600–700 | 1.05–1.15 | Hero headline |
| H1 | `--text-h1` | 2rem | 3rem | 600 | 1.15–1.2 | Section titles |
| H2 | `--text-h2` | 1.5rem | 2rem | 600 | 1.2–1.3 | Subsections |
| H3 | `--text-h3` | 1.25rem | 1.5rem | 500–600 | 1.3 | Card titles |
| Body LG | `--text-body-lg` | 1.125rem | 1.25rem | 400 | 1.6–1.7 | Lead text |
| Body | `--text-body` | 1rem | 1.125rem | 400 | 1.6–1.7 | Paragraphs |
| Caption | `--text-caption` | 0.875rem | 0.875rem | 400–500 | 1.5 | Metadata |
| Overline | `--text-overline` | 0.75rem | 0.8125rem | 500–600 | 1.4 | Section labels |

### Scale Rules

- Each step must be visually distinct (minimum 1.25 ratio between adjacent levels)
- Display uses `clamp(min, preferred, max)` for fluid scaling
- Body never below 16px (1rem)
- Overline/caption never below 12px (0.75rem)

---

## Letter Spacing

| Level | Letter Spacing |
|-------|----------------|
| Display | -0.02em to -0.03em (tight) |
| H1–H2 | -0.01em to -0.02em |
| Body | 0 (default) |
| Overline | 0.05em to 0.1em (wide, uppercase) |
| Caption | 0.01em |

---

## Text Color Application

| Content Type | Token |
|--------------|-------|
| Headlines | `--color-text-primary` |
| Body text | `--color-text-primary` |
| Secondary text | `--color-text-secondary` |
| Labels, metadata | `--color-text-tertiary` or `--color-text-secondary` |
| Links | `--color-accent` |
| Link hover | `--color-accent-hover` or underline |

Never use opacity to create text hierarchy — use designated color tokens.

---

## Line Length

| Content | Max Width |
|---------|-----------|
| Body paragraphs | 65ch (540–640px) |
| Lead/intro text | 55ch |
| Headlines | No max (grid controls width) |
| Captions | No constraint |

Apply via `max-width: 65ch` on text containers, not global.

---

## Section Labels (Overlines)

Section labels create rhythm and wayfinding. Every major section should have one.

```css
.section-label {
  font: var(--text-overline) var(--font-body);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
}
```

---

## Special Treatments

### Pull Quotes

Use for key achievements or metrics from the resume:

- Display font or body at `--text-h3` size
- Left border or accent color marker
- `--color-text-primary` with optional `--color-accent` border

### Metrics / Numbers

Large impact numbers from proof points:

- Display font at `--text-h1` or larger
- `--color-accent` or `--color-text-primary`
- Accompanied by caption label

---

## Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Display:wght@600;700&family=Body:wght@400;500;600&display=swap" rel="stylesheet">
```

- Always use `display=swap` to prevent invisible text
- Preconnect to Google Fonts domains
- Load only weights actually used (typically 400, 500, 600, 700)
- Maximum 2 font families

---

## Accessibility

- Never use font size below 12px for any content
- Never use light weight (300 or below) on small text
- Never rely on color alone for text hierarchy
- Ensure placeholder text meets contrast requirements
- `text-transform: uppercase` only on overlines — never on body paragraphs
