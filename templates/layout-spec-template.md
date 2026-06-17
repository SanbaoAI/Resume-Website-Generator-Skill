# Layout Specification Template

> Stage 06–07 output supplement. Attach to `wireframes.md` or embed in `ui-composition.md`.

---

## Global Layout

| Property | Value |
|----------|-------|
| Page type | Single-page portfolio |
| Nav pattern | Floating pill |
| Nav position | `fixed; top: --space-4; left/right: --space-4` |
| Content max-width | `--content-max-width` (1200px) |
| Grid | 12-column, left-aligned editorial |
| Hero pattern | **Name-first** with stats bar |

---

## Hero Layout Spec (#hero)

### Element Stack

| # | Element | Component | Typography Token | Grid (Desktop) |
|---|---------|-----------|------------------|----------------|
| 1 | Eyebrow badge | StatusPill | `--text-caption` | col 1-10 |
| 2 | **Candidate name** | HeroName | `--text-name` | col 1-10 |
| 3 | Tagline | HeroTagline (h1) | `--text-display` | col 1-10 |
| 4 | Subhead | BodyLead | `--text-body-lg` | col 1-8 |
| 5 | CTA group | PrimaryBtn + GhostBtn | — | col 1-10 |
| 6 | Stats bar | StatsGrid (4 items) | `--text-h2` + `--text-caption` | col 1-12 |
| 7 | Decor (optional) | AbstractCircle | — | col 11-12, desktop only |

### Name Sizing (REQUIRED)

```css
--text-name: clamp(3.5rem, 12vw, 7rem);
font-weight: 700;
letter-spacing: -0.04em;
line-height: 0.95;
```

### Stats Bar Metrics

Extract exactly 4 metrics from resume proof points:

| # | Value | Label | Source |
|---|-------|-------|--------|
| 1 | {e.g. 12+} | {e.g. 年经验} | {resume field} |
| 2 | {e.g. 5+} | {e.g. 盈利项目} | {resume field} |
| 3 | {e.g. 98%} | {e.g. 量产合格率} | {resume field} |
| 4 | {e.g. 3层} | {e.g. AgentOS架构} | {resume field} |

### Responsive

| Breakpoint | Changes |
|------------|---------|
| 375px | Stats 2×2 grid; decor hidden; name min 3.5rem |
| 768px | Stats 4-column row |
| 1024px | Decor visible; hero 2-col grid (content + decor) |
| 1280px | Full layout as spec |

---

## Navigation Layout Spec

### Desktop

```
┌──────────────────────────────────────────────────────────┐
│  ┌────────────────────────────────────────────────────┐  │
│  │ Sanbao AI    项目  方法论  经历  关于        [联系我]   │  │
│  └────────────────────────────────────────────────────┘  │
│         ↑ floating pill, border-radius: full             │
└──────────────────────────────────────────────────────────┘
```

### States

| State | Visual |
|-------|--------|
| Default | bg white/82%, blur, border, shadow-sm |
| Scrolled | shadow-md, border slightly darker |
| Mobile open | Panel below pill, same border-radius md |

---

## Section: {Section Name} (#{anchor})

### Header Block

- Label: `{SECTION_LABEL}`
- Title (h2): `{TITLE}`
- Subtitle: `{ONE_SENTENCE}`

### Content Layout

| Breakpoint | Layout | Columns |
|------------|--------|---------|
| 375px | {stack / single col} | full |
| 768px | {grid spec} | {cols} |
| 1280px | {grid spec} | {cols} |

### ASCII Wireframe (Desktop)

```
{Paste ASCII diagram here}
```

### ASCII Wireframe (Mobile)

```
{Paste ASCII diagram here}
```

### Components Used

- {ComponentName}: {placement}

### Hover / Interaction

| Element | Trigger | Effect |
|---------|---------|--------|
| {element} | {hover/scroll/click} | {effect, duration token} |

---

## Section Index

| # | Section | Layout Pattern | Desktop | Mobile |
|---|---------|----------------|---------|--------|
| 1 | Hero | Name-first + stats | ✓ | ✓ |
| 2 | Work | Card stack | ✓ | ✓ |
| 3 | Approach | 3-column pillars | ✓ | ✓ |
| 4 | Experience | Timeline 2-col | ✓ | ✓ |
| 5 | About | 2-col split | ✓ | ✓ |
| 6 | Contact | Card container | ✓ | ✓ |

---

## Layout Checklist

- [ ] Name is largest element (`--text-name` ≥ 3.5rem mobile)
- [ ] Floating pill nav specified (not edge-to-edge)
- [ ] Stats bar with 4 real metrics
- [ ] Every section has header block (label + title + subtitle)
- [ ] Project cards have hover spec
- [ ] 4 breakpoints documented per section
- [ ] No layout anti-patterns from `rules/layout-system.md`
