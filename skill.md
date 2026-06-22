---
name: resume-website-generator
description: >-
  Transform PDF, DOC, or Markdown resumes into premium modern personal websites
  through a 9-stage design pipeline. Use when the user wants a resume website,
  portfolio site from a CV, personal brand site, or asks to convert a resume
  into a responsive frontend. Never skip intermediate design artifacts.
version: 1.3.0
author: Resume Website Generator Skill
license: MIT
---

# Resume Website Generator

Transform a PDF/DOC/Markdown resume into a premium modern personal website.

This is **not** a simple HTML converter. It is a reusable design workflow that produces intermediate artifacts before any frontend code.

## When to Use

Apply this skill when the user:

- Uploads or references a resume (PDF, DOCX, DOC, MD, TXT)
- Asks for a personal website, portfolio site, or "resume as a website"
- Wants a premium, editorial, SaaS-quality personal brand presence
- Needs a responsive, accessible, production-ready frontend

Do **not** apply when the user only wants PDF formatting, a one-page HTML dump, or a generic Bootstrap template.

## Core Constraint

**Never generate HTML, JSX, Vue, or CSS in Stage 1–7.**

Frontend implementation begins only at [Stage 8](workflow/08-Frontend-Implementation.md), after these artifacts exist:

1. Structured resume data (`resume-data.json`)
2. Candidate analysis (`candidate-analysis.md`)
3. Information architecture (`information-architecture.md`)
4. Design strategy (`design-strategy.md`)
5. Design system (`design-system.md`)
6. Wireframes + layout spec (`wireframes.md` + `layout-spec.md`)
7. UI composition spec (`ui-composition.md`)

## Pipeline Overview

```
Resume File (PDF/DOC/MD)
        ↓
[01] Extract Resume          → resume-data.json
        ↓
[02] Analyze Resume          → candidate-analysis.md
        ↓
[03] Information Architecture → information-architecture.md
        ↓
[04] Design Strategy         → design-strategy.md
        ↓
[05] Design System           → design-system.md
        ↓
[06] Wireframe + Layout Spec  → wireframes.md + layout-spec.md
        ↓
[07] UI Composition          → ui-composition.md
        ↓
[08] Frontend Implementation → website/ (production code)
        ↓
[09] Quality Review          → review-report.md (+ fixes)
```

## Execution Instructions for AI Agents

### 1. Initialize

Read [system-prompt.md](system-prompt.md) and adopt the role: **Staff Product Designer + Design System Architect + Senior Frontend Engineer**.

Create an output directory for this run:

```
output/<candidate-slug>/
├── artifacts/
│   ├── resume-data.json
│   ├── candidate-analysis.md
│   ├── information-architecture.md
│   ├── design-strategy.md
│   ├── design-system.md
│   ├── wireframes.md
│   ├── layout-spec.md
│   ├── ui-composition.md
│   ├── ux-pro-max-design-system.md  (optional, if ui-ux-pro-max installed)
│   └── review-report.md
└── website/
    ├── index.html
    ├── styles/
    ├── scripts/
    └── assets/
```

Use the candidate's name (slugified) as `<candidate-slug>`.

### 2. Run Stages Sequentially

For each stage `01` through `09`:

1. Open the corresponding file in `workflow/`
2. Read **Purpose**, **Input**, **Output**, **Rules**
3. Complete the **Checklist**
4. Execute the **Prompt** (adapt variables to the current candidate)
5. Verify **Expected Result** before proceeding

**Do not skip stages.** If a prior artifact is missing, go back and create it.

### 3. Apply Rules Globally

Reference these rule files at every stage:

| File | Apply When |
|------|------------|
| [rules/layout-system.md](rules/layout-system.md) | **Stages 3–8 (mandatory)** |
| [rules/design-taste.md](rules/design-taste.md) | **Stages 4–9 (anti-slop taste)** |
| [rules/design-principles.md](rules/design-principles.md) | Stages 3–9 |
| [rules/typography.md](rules/typography.md) | Stages 5–8 |
| [rules/spacing.md](rules/spacing.md) | Stages 5–8 |
| [rules/color-system.md](rules/color-system.md) | Stages 4–8 |
| [rules/animation.md](rules/animation.md) | Stages 6–8 |
| [rules/frontend-rules.md](rules/frontend-rules.md) | Stage 8 |
| [rules/i18n.md](rules/i18n.md) | Stage 8 (bilingual sites) |
| [rules/output-format.md](rules/output-format.md) | All stages |

### 3b. UI/UX Pro Max Integration (if installed)

If the project has `.shared/ui-ux-pro-max/` or `.cursor/commands/ui-ux-pro-max.md`:

**At Stage 04**, run before writing design strategy:

```bash
python3 .shared/ui-ux-pro-max/scripts/search.py \
  "{role} portfolio personal website professional" \
  --design-system -p "{CANDIDATE_NAME}" -f markdown
```

Save to `{ARTIFACTS_DIR}/ux-pro-max-design-system.md`.

**At Stage 06**, supplement with:

```bash
python3 .shared/ui-ux-pro-max/scripts/search.py \
  "hero portfolio name social-proof stats" --domain landing -n 3
```

### 4. Use Templates

| Stage | Template |
|-------|----------|
| 2–4 | [templates/brief-template.md](templates/brief-template.md) |
| 5 | [templates/design-system-template.md](templates/design-system-template.md) |
| 6 | [templates/wireframe-template.md](templates/wireframe-template.md) + [templates/layout-spec-template.md](templates/layout-spec-template.md) |
| 9 | [templates/review-template.md](templates/review-template.md) |

### 5. Quality Gate (Stage 9)

After Stage 8, run [workflow/09-Quality-Review.md](workflow/09-Quality-Review.md).

If the review score is below 85/100 or any **Critical** issue exists:

1. Document issues in `review-report.md`
2. Return to the earliest affected stage
3. Regenerate downstream artifacts
4. Re-implement frontend
5. Re-run review (max 2 improvement loops)

### 6. Deliverables to User

Present:

- Link or path to `website/` (runnable static site)
- Summary of design decisions from `design-strategy.md`
- Review score from `review-report.md`
- Instructions to preview locally (`npx serve website/` or open `index.html`)

### 6b. Privacy & Example Data

When publishing as Skill **example** or open-source demo:

- **Never include real names, phones, or emails** from the user's resume
- Replace with fictional persona (see `examples/example-input-sanbao.md`)
- Mark example sites with "示例站点 · 信息虚构" in eyebrow
- Link to user's public profile (e.g. GitHub) instead of real contact if provided
- **Enable zh/en toggle** on all public demo sites ([rules/i18n.md](rules/i18n.md))

### 6c. Bilingual Sites (Optional)

When the user wants 中英文切换 or the resume targets both domestic and international audiences:

1. Read [rules/i18n.md](rules/i18n.md) at Stage 08
2. Provide full zh + en copy in `ui-composition.md` before coding
3. Ship `scripts/i18n.js` + nav lang toggle; persist preference in `localStorage`

Skip i18n for explicitly single-language requests.

## Layout Contract (Non-Negotiable)

Every generated site MUST implement these layout decisions (see [rules/layout-system.md](rules/layout-system.md)):

1. **Name-first Hero** — candidate name is the largest element (`--text-name: clamp(3.5rem, 12vw, 7rem)`)
2. **Floating pill navigation** — NOT edge-to-edge `top:0` navbar
3. **Stats bar** — 4 proof-point metrics in hero
4. **Section header blocks** — label + title + subtitle before every section
5. **Project card stack** — elevated cards with hover, NOT flat resume list
6. **Web-optimized copy** — rewrite resume text for web (metric-first, active voice)

## Design Philosophy (Non-Negotiable)

The generated website must resemble **premium product websites**, not resume templates.

**Prioritize:** typography, whitespace, visual hierarchy, brand identity, grid system, responsive design, accessibility, micro-interactions, minimalism, editorial layout, modern SaaS design, Apple-level visual polish.

**Avoid:** generic resume templates, Bootstrap aesthetics, dashboard layouts, card-grid LinkedIn clones, excessive gradients, stock-photo hero sections, rainbow skill bars, AI-default slop (purple mesh heroes, Inter+slate everywhere, beige+brass "premium" palette on every site).

**Taste discipline:** Read [rules/design-taste.md](rules/design-taste.md) at Stage 04. Output a **Design Read** + **three dials** (VARIANCE / MOTION / DENSITY). Run the **Pre-Flight Checklist** at Stage 09. Inspired by [taste-skill](https://github.com/Leonxlnx/taste-skill).

## Reference Example

Study the complete pipeline output in [examples/](examples/):

- **Public demo (fictional):** [examples/example-input-sanbao.md](examples/example-input-sanbao.md) → [examples/example-output-sanbao/](examples/example-output-sanbao/)
- Identity: [SanbaoAI on GitHub](https://github.com/SanbaoAI) — no real personal info
- Features: Name-first Hero, taste-skill 反 Slop 设计, 珊瑚色暗色主题, **中英文切换**

Legacy example (Jane Chen designer): `examples/example-input.md`

## Stage Index

| # | File | Primary Output |
|---|------|----------------|
| 01 | [workflow/01-Extract-Resume.md](workflow/01-Extract-Resume.md) | `resume-data.json` |
| 02 | [workflow/02-Analyze-Resume.md](workflow/02-Analyze-Resume.md) | `candidate-analysis.md` |
| 03 | [workflow/03-Information-Architecture.md](workflow/03-Information-Architecture.md) | `information-architecture.md` |
| 04 | [workflow/04-Design-Strategy.md](workflow/04-Design-Strategy.md) | `design-strategy.md` |
| 05 | [workflow/05-Design-System.md](workflow/05-Design-System.md) | `design-system.md` |
| 06 | [workflow/06-Wireframe.md](workflow/06-Wireframe.md) | `wireframes.md` + `layout-spec.md` |
| 07 | [workflow/07-UI-Composition.md](workflow/07-UI-Composition.md) | `ui-composition.md` |
| 08 | [workflow/08-Frontend-Implementation.md](workflow/08-Frontend-Implementation.md) | `website/` |
| 09 | [workflow/09-Quality-Review.md](workflow/09-Quality-Review.md) | `review-report.md` |

## Agent Compatibility

This skill is agent-agnostic. Any AI coding agent can execute it by:

1. Loading `skill.md` + `system-prompt.md` into context
2. Following workflow files in order
3. Writing artifacts to disk between stages
4. Using rules and templates as constraints

For Cursor: one-line install:

```bash
bash install.sh
```

(From this folder, or `bash Resume-Website-Generator-Skill/install.sh` from your project root.)

For Claude Code / Codex / Gemini CLI: point the agent at this repository root and instruct it to execute `skill.md`.
