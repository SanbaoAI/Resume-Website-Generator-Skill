# Design Principles

Non-negotiable standards for every stage from Information Architecture (03) through Quality Review (09).

---

## North Star

The generated website must feel like a **premium product website** — the kind of site a well-funded startup or Apple would publish for a key team member — not a document converted to HTML.

---

## Core Principles

### 1. Typography First

Type is the primary design element. Headlines carry identity; body text carries trust.

- Use a distinctive display font paired with a highly readable body font
- Minimum body size: 16px mobile, 18px desktop
- Line height: 1.5–1.7 for body, 1.1–1.2 for display
- Maximum line length: 65 characters for body text
- Typographic scale must have clear, perceptible steps — not uniform sizes

### 2. Whitespace Is Structure

Empty space is not wasted space. It creates hierarchy, rhythm, and premium feel.

- Section padding: minimum 48px mobile, 96px desktop
- Between related elements: 16–24px
- Between unrelated groups: 32–48px
- Never fill space just because it's empty

### 3. Visual Hierarchy

Every section has one clear focal point. The eye should know where to go.

- One primary action per viewport
- Size, weight, and color establish priority — not decoration
- Section labels (overlines) create rhythm and wayfinding
- Pull quotes and metrics break monotony in long sections

### 4. Editorial Layout

Think magazine, not form. Content flows in narrative chapters.

- Asymmetric layouts preferred over centered-everything
- Use grid intentionally — content can span 5, 7, or 8 columns, not always 12
- Negative space on one side creates tension and focus
- Avoid boxing everything in cards

### 5. Brand Identity

Every site should feel unique to the person, not the tool that built it.

- Derive color and type choices from brand keywords in candidate analysis
- One accent color used with restraint
- Consistent voice in microcopy (CTAs, labels, transitions)
- No two generated sites should look identical

### 6. Minimalism With Intent

Remove until it breaks, then add one thing back.

- Every element must earn its place
- No decorative icons without function
- No gradients unless central to the design concept
- No borders on everything — use spacing to separate

### 7. Modern SaaS Quality Bar

Reference quality level: Linear, Vercel, Stripe, Apple product pages.

- Clean navigation with subtle scroll behavior
- Smooth, purposeful micro-interactions
- Professional but not corporate
- Technical but not cold

---

## Layout Patterns (Preferred)

| Pattern | Use When |
|---------|----------|
| Asymmetric editorial | Default for most candidates |
| Split-screen narrative | Strong visual portfolio available |
| Full-bleed typographic | Writer, researcher, strategist |
| Timeline vertical | Experience-heavy careers |
| Feature showcase | 2–3 strong projects to highlight |

## Layout Patterns (Avoid)

| Pattern | Why |
|---------|-----|
| Sidebar + content | Resume template aesthetic |
| Three-column card grid | Generic portfolio template |
| Dashboard with stat cards | Unless candidate is analytics executive |
| Tabbed content | Hides information, hurts SEO |
| Accordion-heavy | Lazy IA, poor scanning |

---

## Content Principles

### Lead With Impact

Hero headline = professional identity in ≤ 8 words. Not a job title alone.

- Bad: "Senior Product Designer"
- Good: "Designing clarity for complex systems"

### Show, Don't List

Transform resume bullets into evidence:

- Bad: "Proficient in Figma, Sketch, Adobe XD"
- Good: "Led design system migration across 4 products using Figma component architecture"

### One CTA

Every page has one primary call-to-action. Secondary links are fine; competing CTAs are not.

---

## Responsive Principles

- Mobile-first design and implementation
- Content priority preserved at every breakpoint — don't hide important content on mobile
- Navigation adapts gracefully (hamburger or bottom bar)
- Typography scales with `clamp()` — never fixed px for headlines
- Touch targets minimum 44×44px

---

## Accessibility Principles

Accessibility is design quality, not compliance checkbox.

- WCAG 2.1 AA minimum
- Semantic HTML from the start
- Focus states as visible as hover states
- `prefers-reduced-motion` disables all non-essential animation
- Color is never the only indicator of meaning

---

## Anti-Patterns (Automatic Rejection)

These patterns fail Stage 09 review if detected:

1. **Bootstrap default styling** — unmodified Bootstrap components
2. **Skill progress bars** — "HTML ████████░░ 80%"
3. **Rainbow tag clouds** — multicolored skill pills
4. **Stock photo hero** — generic handshake/office photo
5. **"Download CV" as primary CTA** — this is a website, not a PDF viewer
6. **Card grid for everything** — boxed content with identical shadows
7. **Timeline with dots and lines as the only design** — lazy timeline component
8. **Lorem ipsum** — anywhere, any stage
9. **Comic Sans, Papyrus, or novelty fonts** — unless explicitly requested
10. **Auto-playing media** — never

---

## Quality Gut Check

Before delivering, ask:

1. Would I share this URL proudly if I were the candidate?
2. Does it look designed, not generated?
3. Can a visitor understand who this person is in 3 seconds?
4. Does it work on a phone without frustration?
5. Could this sit alongside Linear.app or apple.com/design without embarrassment?

If any answer is "no," iterate.
