# Animation Rules

Standards for Stages 05 (Design System), 07 (UI Composition), and 08 (Frontend Implementation).

---

## Philosophy

Motion should feel **invisible until noticed** — purposeful, not decorative. Premium sites animate with restraint.

Reference quality: Linear.app page loads, Apple product page scrolls, Stripe homepage subtleties.

---

## Motion Tokens

Define in design system (Stage 05):

| Token | Typical Value | Use |
|-------|---------------|-----|
| `--motion-duration-fast` | 150ms | Hover, color transitions |
| `--motion-duration` | 300ms | Standard transitions, toggles |
| `--motion-duration-slow` | 500–600ms | Entrance animations |
| `--motion-ease` | cubic-bezier(0.25, 0.1, 0.25, 1) | Default |
| `--motion-ease-out` | cubic-bezier(0.0, 0.0, 0.2, 1) | Entrances |
| `--motion-ease-in-out` | cubic-bezier(0.4, 0.0, 0.2, 1) | State changes |

---

## Allowed Animations

### 1. Entrance Animations (On Scroll)

Elements fade and slide into view when entering the viewport.

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--motion-duration-slow) var(--motion-ease-out),
              transform var(--motion-duration-slow) var(--motion-ease-out);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Rules:**
- Trigger via Intersection Observer (threshold: 0.15)
- Stagger children by 50–100ms
- Animate only `opacity` and `transform` (GPU-composited)
- Max translate: 20–30px
- Run once — do not re-animate on scroll back up

### 2. Hero Load Sequence

On page load, hero elements appear in sequence:

| Element | Delay |
|---------|-------|
| Section label | 0ms |
| Headline | 0ms |
| Subhead | 100ms |
| CTA | 200ms |

Total sequence: ≤ 500ms. Page feels loaded, not theatrical.

### 3. Hover Transitions

Interactive elements respond to hover:

| Element | Animation |
|---------|-----------|
| Buttons | Background color shift, `--motion-duration-fast` |
| Links | Underline reveal, `--motion-duration-fast` |
| Nav links | Color shift or underline, `--motion-duration-fast` |
| Cards (if used) | Subtle translateY(-2px) + shadow, `--motion-duration` |

### 4. Navigation Scroll Behavior

| State | Animation |
|-------|-----------|
| Scroll past threshold | Nav background fades in, `--motion-duration` |
| Mobile menu open | Slide/fade menu panel, `--motion-duration` |
| Anchor scroll | Smooth scroll to section (CSS `scroll-behavior: smooth` with JS fallback) |

### 5. Micro-Feedback

| Interaction | Animation |
|-------------|-----------|
| Button active | Scale 0.98, `--motion-duration-fast` |
| Copy email click | Brief color flash or "Copied" text fade-in |
| Back to top | Smooth scroll, native behavior |

---

## Prohibited Animations

| Pattern | Why |
|---------|-----|
| Parallax scrolling | Dated, performance cost, accessibility issues |
| Auto-playing carousels | Accessibility, user control |
| Infinite loops / spinners (decorative) | Distracting, performance |
| Bounce effects | Not premium |
| Full-page transitions | Over-engineered for a single page |
| Mouse-follow effects | Gimmicky |
| Typewriter text | Cliché |
| Particle effects | Not appropriate for professional sites |
| Animation duration > 800ms | Feels sluggish |
| Animating width/height/top/left | Causes layout reflow; use transform |

---

## Reduced Motion

**Mandatory.** All animations must respect user preference.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }
}
```

In JavaScript:

```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  initScrollAnimations();
}
```

When reduced motion is active:
- All elements visible immediately
- No entrance animations
- Hover transitions still allowed (instant or very fast)
- Smooth scroll disabled

---

## Performance Rules

1. **Only animate `opacity` and `transform`** — these are GPU-composited
2. **Use `will-change` sparingly** — only on elements about to animate, remove after
3. **Intersection Observer** — not scroll event listeners
4. **No `setInterval` animations** — use CSS transitions or `requestAnimationFrame`
5. **Total animation JS < 3KB**

---

## Animation Spec Format (Stage 07)

When specifying animations in ui-composition.md:

```
Animation: fade-up on scroll
Trigger: Intersection Observer, threshold 0.15
Properties: opacity 0→1, translateY 20px→0
Duration: --motion-duration-slow
Easing: --motion-ease-out
Delay: 0ms (stagger children +100ms each)
Reduced motion: disable (show immediately)
```

---

## Scroll Behavior

```css
html {
  scroll-behavior: smooth;
}

/* Offset for fixed nav */
section[id] {
  scroll-margin-top: var(--nav-height);
}
```

JS fallback for browsers without CSS smooth scroll:

```javascript
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
```
