# Color System Rules

Standards for Stages 04 (Design Strategy), 05 (Design System), and 08 (Frontend Implementation).

---

## Palette Architecture

Every site uses a structured palette with clear roles:

| Role | Purpose | Count |
|------|---------|-------|
| Background primary | Page base | 1 |
| Background secondary | Alternate sections | 1 |
| Background elevated | Cards, overlays | 1 (optional) |
| Text primary | Headlines, body | 1 |
| Text secondary | Subheads, descriptions | 1 |
| Text tertiary | Labels, metadata | 1 (optional) |
| Accent | CTAs, links, highlights | 1 |
| Accent hover | Interactive accent state | 1 |
| Border | Dividers, outlines | 1–2 |

**Total unique colors: 8–12.** Not 30.

---

## Palette Strategies

Choose ONE strategy based on design strategy (Stage 04):

### Warm Neutral (Default)

Best for: designers, writers, consultants, product people

```
Background: warm off-white (#FAF9F7, #F5F0EB, #FAFAF8)
Text: warm near-black (#1A1A1A, #2D2D2D)
Accent: muted earth (#C4704B terracotta, #6B705C sage, #B8860B gold)
```

### Cool Minimal

Best for: engineers, architects, researchers

```
Background: cool white (#FAFBFC, #F8F9FA)
Text: cool near-black (#111827, #1F2937)
Accent: single cool tone (#2563EB blue, #0891B2 cyan)
```

### Dark Mode First

Best for: developers, creative technologists

```
Background: rich dark (#0A0A0A, #111111, #1A1A2E)
Text: off-white (#F5F5F5, #E5E5E5)
Accent: vibrant pop (#FF6B6B, #00D9FF, #A78BFA)
Surface: slightly lighter dark (#1F1F1F, #252525)
```

### Monochrome + Accent

Best for: executives, strategists, minimalists

```
Background: white or near-white
Text: black scale only (#000 to #666)
Accent: ONE bold color used sparingly (< 5% of visible area)
```

---

## Color Selection Rules

1. **One accent color** — never two competing accent colors
2. **Accent used with restraint** — CTAs, links, key highlights only; not backgrounds
3. **Neutral backgrounds** — 90%+ of the page is neutral
4. **No pure black on pure white** — soften both (#1A1A1A on #FAFAFA minimum)
5. **No gradients as default** — solid colors unless design strategy explicitly calls for gradients
6. **Semantic consistency** — accent always means "interactive" or "important"

---

## Contrast Requirements (WCAG 2.1 AA)

| Element | Minimum Ratio | Standard |
|---------|---------------|----------|
| Body text (< 18px) | 4.5:1 | Required |
| Large text (≥ 18px bold or ≥ 24px) | 3:1 | Required |
| UI components & graphics | 3:1 | Required |
| Focus indicators | 3:1 | Required |
| Decorative elements | No minimum | N/A |

**Verify every text/background pair in the design system document.**

Tools: calculate manually or reference contrast ratios in design-system.md.

---

## Section Background Alternation

Create visual rhythm without borders:

```
Section 1 (Hero):     --color-bg-primary
Section 2 (Work):     --color-bg-primary
Section 3 (Approach): --color-bg-secondary
Section 4 (Experience): --color-bg-primary
Section 5 (About):    --color-bg-secondary
Section 6 (Contact):  --color-bg-primary
Footer:               --color-bg-secondary or dark variant
```

Alternate at most every other section. Never alternate every section.

---

## Link Colors

```css
a {
  color: var(--color-accent);
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 3px;
  transition: text-decoration-color var(--motion-duration-fast);
}

a:hover {
  text-decoration-color: var(--color-accent);
}

a:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

Links must be distinguishable without color alone (underline on hover minimum).

---

## Color Derivation from Brand Keywords

| Brand Keyword | Color Direction |
|---------------|-----------------|
| Warm, human, approachable | Warm neutrals + earth accent |
| Precise, technical, systematic | Cool neutrals + blue accent |
| Bold, creative, expressive | High contrast + vibrant accent |
| Calm, minimal, refined | Monochrome + subtle accent |
| Luxurious, editorial | Deep neutrals + gold/muted accent |

---

## Prohibited Color Patterns

- Rainbow multicolor tags (each tag a different color)
- Gradient text on headlines (unless design concept explicitly requires)
- AI purple/blue mesh gradient heroes (see [design-taste.md](design-taste.md) §2)
- Default warm beige + brass + espresso palette without brand justification
- Neon colors on light backgrounds without contrast verification
- Red/green as the only status indicator
- More than 12 unique colors in the entire site
- `#000000` background with `#FFFFFF` text without softening (too harsh for long reading)
- Second accent color appearing mid-page (accent lock — design-taste §4)

---

## Dark Mode (Optional)

If implementing dark mode:

- Provide toggle or respect `prefers-color-scheme`
- Invert background/text relationship
- Reduce accent saturation slightly (bright accents glare on dark backgrounds)
- Define all tokens for both modes in `:root` and `[data-theme="dark"]` or `@media (prefers-color-scheme: dark)`

If NOT implementing dark mode, document the decision in design-system.md with rationale.
