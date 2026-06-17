# Resume Website Generator Skill

Transform a PDF, DOC, or Markdown resume into a **premium modern personal website** — through a structured 9-stage design pipeline, not a direct HTML conversion.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## What This Is

This repository is a **complete, agent-executable Skill** for AI coding assistants (Cursor, Claude Code, Codex, Gemini CLI, etc.).

It encodes the workflow of a Staff Product Designer + Design System Architect + Senior Frontend Engineer:

```
Resume → Extract → Analyze → IA → Strategy → Design System → Wireframe → UI Spec → Frontend → Review
```

Every stage produces an intermediate artifact. Frontend code is generated **only after** design artifacts exist.

## Quick Start

### For AI Agents

1. Load [skill.md](skill.md) and [system-prompt.md](system-prompt.md) into your context
2. Accept a resume file (PDF, DOCX, MD) from the user
3. Execute workflow stages `01` → `09` in [workflow/](workflow/)
4. Write outputs to `output/<candidate-slug>/`
5. Deliver the `website/` folder and `review-report.md`

### For Cursor Users

**One-line install:**

```bash
bash Resume-Website-Generator-Skill/install.sh
```

Or from inside the skill folder:

```bash
bash install.sh
```

Then ask Cursor:

> Use the resume-website-generator skill to build a personal website from my resume.

### For Manual / CLI Agents

```bash
# Point your agent at this repo and instruct:
# "Execute skill.md using my resume at ./my-resume.pdf"

# Preview the example output:
cd examples/example-output/website
npx serve .
# or: python3 -m http.server 8080
```

## Project Structure

```
Resume-Website-Generator-Skill/
├── README.md                 # This file
├── skill.md                  # Main skill entry (rename to SKILL.md for Cursor)
├── system-prompt.md          # Agent persona and operating contract
├── workflow/                 # 9 pipeline stages
│   ├── 01-Extract-Resume.md
│   ├── 02-Analyze-Resume.md
│   ├── 03-Information-Architecture.md
│   ├── 04-Design-Strategy.md
│   ├── 05-Design-System.md
│   ├── 06-Wireframe.md
│   ├── 07-UI-Composition.md
│   ├── 08-Frontend-Implementation.md
│   └── 09-Quality-Review.md
├── templates/                # Artifact templates
│   ├── brief-template.md
│   ├── design-system-template.md
│   ├── wireframe-template.md
│   ├── layout-spec-template.md
│   └── review-template.md
├── rules/                    # Design and engineering constraints
│   ├── layout-system.md      # ★ Name-first hero, floating nav, section patterns
│   ├── design-principles.md
│   ├── frontend-rules.md
│   ├── typography.md
│   ├── spacing.md
│   ├── color-system.md
│   ├── animation.md
│   └── output-format.md
└── examples/
    ├── example-input.pdf     # Sample resume (PDF)
    ├── example-input.md      # Same content in Markdown
    └── example-output/
        └── website/          # Reference implementation
```

## Pipeline Stages

| Stage | Input | Output | Code? |
|-------|-------|--------|-------|
| 01 Extract | PDF/DOC/MD | `resume-data.json` | No |
| 02 Analyze | JSON | `candidate-analysis.md` | No |
| 03 IA | Analysis + JSON | `information-architecture.md` | No |
| 04 Strategy | IA + Analysis | `design-strategy.md` | No |
| 05 Design System | Strategy | `design-system.md` | No |
| 06 Wireframe | Design System + IA | `wireframes.md` | No |
| 07 UI Composition | Wireframes + DS | `ui-composition.md` | No |
| 08 Frontend | All artifacts | `website/` | **Yes** |
| 09 Review | Website + artifacts | `review-report.md` | Fixes only |

## Design Philosophy

Generated sites should feel like **premium product websites**:

- Editorial typography and generous whitespace
- Strong visual hierarchy and brand identity
- Responsive, accessible, minimal
- Subtle micro-interactions
- Modern SaaS / Apple-level polish

**Avoid:** Bootstrap defaults, dashboard layouts, generic resume templates, skill progress bars, rainbow tag clouds.

See [rules/design-principles.md](rules/design-principles.md) for the full specification.

## Rules & Templates

- **Rules** in `rules/` constrain every design and engineering decision
- **Templates** in `templates/` define exact artifact formats
- **Workflows** in `workflow/` contain stage-specific prompts and checklists

Agents must read relevant rule files at each stage (listed in [skill.md](skill.md)).

## Example

Input: [examples/example-input.md](examples/example-input.md) / [examples/example-input.pdf](examples/example-input.pdf)

Output: [examples/example-output/website/](examples/example-output/website/)

The example demonstrates the expected quality bar for a Product Designer candidate.

## Output Directory Convention

Each run creates:

```
output/jane-chen/
├── artifacts/
│   ├── resume-data.json
│   ├── candidate-analysis.md
│   ├── information-architecture.md
│   ├── design-strategy.md
│   ├── design-system.md
│   ├── wireframes.md
│   ├── ui-composition.md
│   └── review-report.md
└── website/
    ├── index.html
    ├── styles/
    ├── scripts/
    └── assets/
```

## Quality Gate

Stage 9 scores the site 0–100 across eight dimensions. Minimum passing score: **85/100**.

If below threshold, the agent automatically loops back to fix upstream artifacts (max 2 loops).

See [workflow/09-Quality-Review.md](workflow/09-Quality-Review.md).

## Contributing

Contributions welcome:

- Additional workflow refinements
- New example outputs for different professions (engineer, researcher, executive)
- Framework-specific Stage 8 variants (Next.js, Astro, etc.)

## License

MIT — use freely in personal and commercial agent workflows.

## Credits

Built as an open-source agent skill for the AI-assisted design-to-code era.
