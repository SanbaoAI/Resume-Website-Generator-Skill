# Stage 07 — UI Composition

## Purpose

Produce a **detailed visual and layout specification** that bridges wireframes and code — specifying exact content, typography, color, spacing, **layout structure**, and micro-interactions for every section.

Stage 8 implements this document verbatim. **Incomplete layout specs here = generic output in code.**

---

## Input

| Input | Required | Description |
|-------|----------|-------------|
| `{ARTIFACTS_DIR}/layout-spec.md` | **Yes** | Layout authority from Stage 06 |
| `{ARTIFACTS_DIR}/wireframes.md` | Yes | ASCII wireframes |
| `{ARTIFACTS_DIR}/design-system.md` | Yes | Tokens and components |
| `{ARTIFACTS_DIR}/resume-data.json` | Yes | Actual content |
| `{ARTIFACTS_DIR}/design-strategy.md` | Yes | Visual intent |
| [rules/layout-system.md](../rules/layout-system.md) | **Yes** | Layout patterns |
| [rules/animation.md](../rules/animation.md) | Reference | Motion |

---

## Output

**File:** `{ARTIFACTS_DIR}/ui-composition.md`

---

## Rules

### Layout (highest priority)

1. **Follow `layout-spec.md` exactly** — no layout decisions in Stage 8
2. **Name-first hero** — document name element, tagline h1, stats bar, dual CTA per layout spec
3. **Floating pill nav** — document position, border-radius, blur, shadow tokens
4. **Section header block** — label + h2 + subtitle spec for every section
5. **4 breakpoints** — document layout changes at 375, 768, 1024, 1280 for each section

### Visual

6. **Real content** from `resume-data.json` — optimize wording for web (shorter, punchier, metric-first) but never fabricate facts
7. **Token references** for every visual property
8. **Content optimization** — transform resume bullets into web copy:
   - Lead with metrics: "98% 量产合格率" not "负责质量管理工作"
   - Active voice, ≤ 25 words per bullet
   - Section subtitles: one compelling sentence per section
9. **SVG icons only** — no emoji as UI icons
10. **Animation specs** — trigger, duration, easing; respect `prefers-reduced-motion`
11. **Accessibility** — heading hierarchy (tagline = single h1, name = visual only), ARIA, focus order
12. **No HTML/CSS/JS code**

---

## Checklist

- [ ] `layout-spec.md` read and referenced throughout
- [ ] Hero: name size token, tagline h1, 4 stats, 2 CTAs, eyebrow — all specified
- [ ] Nav: floating pill with all states
- [ ] Every section: header block (label + title + subtitle) before content
- [ ] Projects: card hover spec (border, shadow, translateY)
- [ ] Content optimized for web (not raw resume paste)
- [ ] All typography/color/spacing use design system tokens
- [ ] 4 breakpoints per section
- [ ] SEO metadata
- [ ] Accessibility annotations
- [ ] File saved

---

## Prompt

```
You are executing Stage 07 of the Resume Website Generator pipeline.

TASK: Create a complete UI composition specification for {CANDIDATE_NAME}'s personal website.

CRITICAL INPUT (read in this order):
1. {ARTIFACTS_DIR}/layout-spec.md — LAYOUT AUTHORITY, follow exactly
2. {ARTIFACTS_DIR}/wireframes.md
3. {ARTIFACTS_DIR}/design-system.md
4. {ARTIFACTS_DIR}/resume-data.json
5. rules/layout-system.md

LAYOUT RULES (non-negotiable):
- Hero: Name-first. Name = largest element (--text-name clamp). Tagline = h1.
- Hero: Stats bar with 4 metrics. Dual CTA (primary + ghost).
- Nav: Floating pill (top: --space-4, border-radius: full, blur, NOT edge-to-edge).
- Every section: Label + h2 Title + Subtitle sentence BEFORE content.
- Projects: Card stack with hover (accent border, shadow-md, translateY -2px).
- Experience: Timeline 2-column. About: 2-column split. Contact: card container.

CONTENT OPTIMIZATION (required):
- Do NOT paste raw resume text. Rewrite for web:
  · Headlines: ≤ 8 words, impact-first
  · Subheads: ≤ 30 words, value proposition
  · Bullets: metric-first, active voice, ≤ 25 words each
  · Section subtitles: 1 compelling sentence summarizing the section
  · Stats: extract 4 real numbers from resume proof points
- Never fabricate facts not in resume-data.json

For EACH section specify:
1. Layout (grid columns per breakpoint: 375/768/1024/1280)
2. Section header block (label text, h2 text, subtitle text)
3. Content (exact optimized text)
4. Typography (token → element mapping)
5. Color (token → element mapping)
6. Spacing (token → gap/padding mapping)
7. Components (from design system)
8. Hover/interaction specs
9. Animation (trigger, duration, easing, properties)
10. Accessibility (heading level, ARIA, focus)

GLOBAL SPECS:
- Page title, meta description, OG tags
- Nav: all states (default, scrolled, mobile)
- Footer

Write to {ARTIFACTS_DIR}/ui-composition.md

SELF-CHECK before saving:
□ Name is specified as largest type (--text-name)
□ Stats bar has 4 metrics with sources
□ Nav is floating pill, not edge-to-edge
□ Every section has subtitle
□ No emoji icons
□ Content is web-optimized, not raw resume
```

---

## Expected Result

### Hero spec example

```
## Hero (#hero)

Layout: Name-first. Col 1-10 content, col 11-12 decor (desktop only).
Breakpoints: see layout-spec.md

Section header: N/A (hero IS the header)

Content:
- Eyebrow: "AI 产研负责人 · 北京 · 开放机会"
- Name (visual, aria-label="Sanbao AI"): "Sanbao AI"
- Tagline (h1): "把 AI 变成可盈利的产品引擎"
- Subhead: "12 年从技术架构到 AI 产品商业化的全链路实战。精通 Agent 全体系工程化，主导多个 0-1 盈利项目——每一个都实现了盈利。"
- CTA Primary: "开始交流" → #contact
- CTA Ghost: "查看项目" → #work
- Stats: 12+ 年经验 | 5+ 盈利项目 | 98% 量产合格率 | 3层 AgentOS架构

Typography:
- Eyebrow: --text-caption, pill border, --radius-full
- Name: --text-name (clamp 3.5rem→7rem), --font-display, weight 700, letter-spacing -0.04em
- Tagline (h1): --text-display, --font-display, weight 600
- Subhead: --text-body-lg, --color-text-secondary, max-width 56ch

Spacing:
- Eyebrow → Name: --space-4
- Name → Tagline: --space-6
- Tagline → Subhead: --space-6
- Subhead → CTAs: --space-8
- CTAs → Stats: --space-10
- Section padding: --space-24 top (account for floating nav), --space-16 bottom

Accessibility:
- Only ONE h1 (tagline). Name is <p> with aria-label.
- Stats have aria-label="核心数据"
```

**Gate to proceed:** Layout spec followed verbatim; content web-optimized; all sections complete.

**Next stage:** [08-Frontend-Implementation.md](08-Frontend-Implementation.md)
