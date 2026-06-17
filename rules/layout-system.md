# Layout System Rules

Mandatory layout standards for Stages 03–08. These rules prevent generic resume-template layouts and enforce premium portfolio-site structure.

**Read this file before Stage 03, 06, 07, and 08.**

---

## Layout North Star

A resume website is a **personal brand landing page**, not a document viewer.

The visitor must know **who this person is** within 2 seconds — through a **large name**, a **sharp tagline**, and **proof metrics** — before scrolling.

Reference quality: Linear, Vercel, Anthropic team pages, premium portfolio sites — NOT LinkedIn, NOT Novoresume, NOT Wix templates.

---

## Mandatory Page Structure

Every generated site MUST follow this section order:

```
1. Floating Navigation (pill/bar)
2. Hero — Name-first landing
3. Selected Work / Projects
4. Approach / Philosophy
5. Experience Timeline
6. About + Skills
7. Contact
8. Footer
```

No sidebar. No three-column resume layout. No tabbed sections.

---

## Hero Layout (Name-First) — REQUIRED

The Hero is the most critical layout decision. **The candidate's name must be the largest element on the page.**

### Hierarchy (top to bottom)

| Order | Element | Role | Size Intent |
|-------|---------|------|-------------|
| 1 | Eyebrow badge | Status / role / location | Small pill, `--text-caption` |
| 2 | **Candidate Name** | Primary visual anchor | **Largest** — `--text-name` clamp(3.5rem, 12vw, 7rem) |
| 3 | Tagline (h1) | Professional identity | Second largest — `--text-display` |
| 4 | Subhead | Value proposition (1–2 sentences) | `--text-body-lg`, max 56ch |
| 5 | CTA group | Primary + secondary actions | Button row, gap `--space-3` |
| 6 | Stats bar | Social proof / metrics | 4-column grid desktop, 2×2 mobile |

### Hero ASCII Reference (Desktop 1280px)

```
┌─────────────────────────────────────────────────────────────────┐
│  [Floating Nav Pill — centered, top: 16px, border-radius: full]   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Col 1-10                                                       │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ [Eyebrow Pill] AI 产研负责人 · 北京 · 开放机会            │   │
│  │                                                         │   │
│  │ Sanbao AI                          ← NAME: 7rem, bold         │   │
│  │                                                         │   │
│  │ 把 AI 变成可盈利的产品引擎    ← h1 TAGLINE: 3rem        │   │
│  │                                                         │   │
│  │ Subhead paragraph (max 56ch, secondary color)           │   │
│  │                                                         │   │
│  │ [Primary CTA]  [Ghost CTA]                              │   │
│  │                                                         │   │
│  │ ─────────────────────────────────────────────────────── │   │
│  │  12+        5+         98%        3层                  │   │
│  │  年经验     盈利项目   量产合格率  AgentOS架构          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Hero Rules

1. **Name is NOT the nav logo size** — name in hero must be 4–8× larger than nav logo
2. **Tagline is h1** — name is visual-only (`<p>` or `<span>` with `aria-label`), tagline gets semantic `<h1>`
3. **Stats bar is mandatory** — extract 4 metrics from resume proof points (years, projects, percentages, scale)
4. **Two CTAs** — primary (contact) + secondary (view work), never "Download CV"
5. **No stock photo hero** — optional abstract decor element only (circle, gradient blob) in col 11-12
6. **Eyebrow shows availability** — "开放机会" / "Open to work" / role + city

### Hero Mobile (375px)

- Name scales via `clamp()`, never below 3.5rem
- Stats: 2×2 grid
- CTAs: stack or wrap, full-width on very narrow screens
- Decor element: hidden

---

## Navigation Layout — Floating Pill (REQUIRED)

Do NOT use edge-to-edge sticky navbars. Use a **floating pill navigation**.

```
Position: fixed
Top: 16px (--space-4)
Left/Right: 16px (--space-4)
Max-width: same as content container
Background: white/82% + backdrop-blur
Border: 1px solid --color-border
Border-radius: 9999px (full pill)
Height: 56px (--nav-height)
Shadow: subtle elevation
```

### Nav Content

```
[Logo: Candidate Name]          [Link] [Link] [Link] [Link]  [CTA Button]
```

- Logo: candidate surname or full name, `--text-body` size (NOT hero size)
- Max 4 text links + 1 CTA button
- Mobile: hamburger → dropdown panel below pill (same border-radius style)

---

## Section Layout Patterns

### Section Header Pattern (all sections)

Every content section starts with a **Section Header Block**:

```
[Section Label — overline, accent color, uppercase]
[Section Title — h2, max 24ch]
[Section Subtitle — optional, 1 sentence, --text-body-lg, secondary color, max 50ch]
[16-40px gap]
[Section Content]
```

Never jump directly to content without a labeled header.

### Projects Section — Card Stack (NOT plain list)

Use **elevated cards** with hover interaction, NOT a flat bordered list.

```
Desktop: single-column card stack with gap --space-6
         OR 2-column grid if 4+ projects

Each card:
  - Padding: --space-8
  - Background: --color-bg-elevated
  - Border: 1px --color-border
  - Border-radius: --radius-md
  - Hover: border-color → accent, shadow-md, translateY(-2px)

Card internal layout:
  [Meta row: company · date · category tag pill]
  [Title — h3]
  [Description — max 65ch]
  [Metrics row — 2-3 proof points with dot markers]
```

### Approach Section — 3-Column Pillars

```
Desktop: 3 equal columns, gap --space-6
Mobile: single column stack

Each pillar:
  - Icon (SVG, 24px, NOT emoji) in accent-muted box
  - Title h3
  - Body text
  - Border: 1px, border-radius --radius-md
  - Hover: border-color shift (no layout scale)
```

### Experience Section — Timeline (NOT card grid)

```
Desktop: 2-column — [Period: 140px] [Content: 1fr]
Mobile: stacked

Each item:
  - Period on left (caption, tertiary color)
  - Role title (h3) + company (caption) + bullet highlights
  - Separator: bottom border between items (NOT dots-and-lines clipart)
  - Max 3 bullets per role (most impactful)
```

### About Section — 2-Column Split

```
Desktop: 1.3fr narrative + 1fr skills
Mobile: stacked

Left: 2 paragraphs + highlight callout block (accent-muted bg, left border)
Right: skill tags in pill format (border-radius: full, flex-wrap)
```

### Contact Section — Card Container

```
Contact content inside a card:
  - Padding: --space-10
  - Border-radius: --radius-lg
  - Max-width: 640px
  - Email: large display size, clickable
  - Phone: secondary
  - Channels: caption list below divider
```

---

## Grid System

| Breakpoint | Columns | Margin | Gutter | Max Width |
|------------|---------|--------|--------|-----------|
| 375px+ | 4 | 20px | 16px | 100% |
| 768px+ | 8 | 32px | 24px | 100% |
| 1280px+ | 12 | 48px | 24px | 1200px |

### Column Usage Rules

- Hero content: span col 1–10 (leave col 11–12 empty or decor)
- Section headers: span col 1–8
- Full-width content (timeline, cards): span col 1–12
- Never center everything in col 4–9 — use left-aligned editorial layout

---

## Spacing Rhythm

| Context | Token |
|---------|-------|
| Between sections | `--space-16` mobile, `--space-24` desktop |
| Section header → content | `--space-10` |
| Hero name → tagline | `--space-6` |
| Tagline → subhead | `--space-6` |
| Subhead → CTAs | `--space-8` |
| CTAs → stats bar | `--space-10` |
| Card internal padding | `--space-8` |
| Between cards | `--space-4` to `--space-6` |

---

## Responsive Breakpoints (test all 4)

| Width | Must Pass |
|-------|-----------|
| 375px | No horizontal scroll, name readable, nav hamburger works |
| 768px | 2-col grids activate, timeline side-by-side |
| 1024px | 3-col approach grid, hero decor visible |
| 1440px | Content max-width capped, margins increase |

---

## Layout Anti-Patterns (Auto-Reject)

| Pattern | Why Rejected |
|---------|--------------|
| Name same size as body text | Visitor can't identify person instantly |
| Headline as h1 with no large name | Resume-template pattern |
| Edge-to-edge navbar at top:0 | Generic Bootstrap/blog look |
| Sidebar + content column | Classic resume template |
| Skill progress bars | Cliché |
| 3-column equal card grid for projects | Generic portfolio template |
| Centered everything | No editorial tension |
| "Download CV" as primary CTA | This is a website, not a file host |
| Emoji as section icons | Unprofessional (use SVG) |
| Stats missing from hero | No social proof above the fold |

---

## UI/UX Pro Max Integration (Stage 04–05)

When `.shared/ui-ux-pro-max/` or `.cursor/commands/ui-ux-pro-max.md` is available in the project, run BEFORE Stage 05:

```bash
python3 .shared/ui-ux-pro-max/scripts/search.py \
  "{role} portfolio personal website professional minimal" \
  --design-system -p "{CANDIDATE_NAME}" -f markdown
```

Save output to `{ARTIFACTS_DIR}/ux-pro-max-design-system.md` and use it to inform:
- Color palette (Stage 05)
- Typography pairing (Stage 05)
- Landing pattern (Stage 06 wireframes)
- Layout effects (Stage 07)

Supplementary searches:

```bash
# Landing structure
python3 .shared/ui-ux-pro-max/scripts/search.py \
  "hero portfolio name social-proof stats" --domain landing -n 3

# UX checklist
python3 .shared/ui-ux-pro-max/scripts/search.py \
  "animation accessibility cursor hover" --domain ux -n 5
```

If ui-ux-pro-max is not installed, follow this file as the layout authority.

---

## Layout Quality Gate (Stage 06–07)

Before proceeding to Stage 08, verify:

- [ ] Hero uses Name-first layout with stats bar
- [ ] Navigation is floating pill, not edge-to-edge
- [ ] Every section has Label + Title + optional Subtitle
- [ ] Projects use card stack with hover spec
- [ ] Name token is at least 3.5rem on mobile, 5rem+ on desktop
- [ ] 4 breakpoints documented in wireframes
- [ ] No layout anti-patterns present
