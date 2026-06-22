#!/usr/bin/env bash
# Resume Website Generator Skill — multi-agent installer
# Supports: Cursor, Claude Code, Codex, OpenCode
#
# Usage:
#   bash install.sh                 # install to all supported agents
#   bash install.sh --cursor        # Cursor only
#   bash install.sh --claude        # Claude Code only
#   bash install.sh --codex         # Codex only
#   bash install.sh --opencode      # OpenCode only
#   bash install.sh --cursor --codex
#   bash install.sh --help

set -euo pipefail

SKILL_NAME="resume-website-generator"
SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

INSTALL_CURSOR=false
INSTALL_CLAUDE=false
INSTALL_CODEX=false
INSTALL_OPENCODE=false

usage() {
  cat <<'EOF'
Resume Website Generator Skill — installer

Installs to user-scoped skill directories and renames skill.md → SKILL.md.

Usage:
  bash install.sh [options]

Options:
  --all, -a       Install to all supported agents (default when no flags)
  --cursor        Install to ~/.cursor/skills/
  --claude        Install to ~/.claude/skills/
  --codex         Install to ~/.codex/skills/
  --opencode      Install to ~/.config/opencode/skills/
  --help, -h      Show this help

Examples:
  bash install.sh
  bash install.sh --cursor --claude
  git clone https://github.com/SanbaoAI/Resume-Website-Generator-Skill.git && cd Resume-Website-Generator-Skill && bash install.sh

After install, restart your agent (or start a new session) so it discovers the skill.
EOF
}

parse_args() {
  if [[ $# -eq 0 ]]; then
    INSTALL_CURSOR=true
    INSTALL_CLAUDE=true
    INSTALL_CODEX=true
    INSTALL_OPENCODE=true
    return
  fi

  local any=false
  while [[ $# -gt 0 ]]; do
    case "$1" in
      --all|-a)
        INSTALL_CURSOR=true
        INSTALL_CLAUDE=true
        INSTALL_CODEX=true
        INSTALL_OPENCODE=true
        any=true
        ;;
      --cursor)
        INSTALL_CURSOR=true
        any=true
        ;;
      --claude)
        INSTALL_CLAUDE=true
        any=true
        ;;
      --codex)
        INSTALL_CODEX=true
        any=true
        ;;
      --opencode)
        INSTALL_OPENCODE=true
        any=true
        ;;
      --help|-h)
        usage
        exit 0
        ;;
      *)
        echo "Error: unknown option: $1" >&2
        usage >&2
        exit 1
        ;;
    esac
    shift
  done

  if [[ "$any" == false ]]; then
    echo "Error: no install target selected." >&2
    usage >&2
    exit 1
  fi
}

copy_skill() {
  local target_dir="$1"

  mkdir -p "$(dirname "$target_dir")"
  rm -rf "${target_dir}"
  mkdir -p "${target_dir}"

  if command -v rsync >/dev/null 2>&1; then
    rsync -a --exclude='.git' --exclude='install.sh' "${SOURCE_DIR}/" "${target_dir}/"
  else
    cp -R "${SOURCE_DIR}/." "${target_dir}/"
    rm -rf "${target_dir}/.git" "${target_dir}/install.sh"
  fi

  if [[ -f "${target_dir}/skill.md" ]]; then
    mv "${target_dir}/skill.md" "${target_dir}/SKILL.md"
  fi
}

agent_label() {
  case "$1" in
    cursor) echo "Cursor" ;;
    claude) echo "Claude Code" ;;
    codex) echo "Codex" ;;
    opencode) echo "OpenCode" ;;
  esac
}

main() {
  parse_args "$@"

  echo "▶ Installing Resume Website Generator Skill"
  echo "  From: ${SOURCE_DIR}"
  echo ""

  local installed=()

  if [[ "$INSTALL_CURSOR" == true ]]; then
    echo "• $(agent_label cursor)"
    copy_skill "${HOME}/.cursor/skills/${SKILL_NAME}"
    installed+=("cursor")
  fi

  if [[ "$INSTALL_CLAUDE" == true ]]; then
    echo "• $(agent_label claude)"
    copy_skill "${HOME}/.claude/skills/${SKILL_NAME}"
    installed+=("claude")
  fi

  if [[ "$INSTALL_CODEX" == true ]]; then
    echo "• $(agent_label codex)"
    copy_skill "${HOME}/.codex/skills/${SKILL_NAME}"
    installed+=("codex")
  fi

  if [[ "$INSTALL_OPENCODE" == true ]]; then
    echo "• $(agent_label opencode)"
    copy_skill "${HOME}/.config/opencode/skills/${SKILL_NAME}"
    installed+=("opencode")
  fi

  echo ""
  echo "✓ Installed to: ${installed[*]}"
  echo ""
  echo "Next steps:"
  echo "  1. Restart your agent (or open a new session)"
  echo "  2. Ask:"
  echo "     > Use resume-website-generator to build a personal website from my resume."
  echo ""
  echo "Preview example:"
  echo "  cd \"${HOME}/.cursor/skills/${SKILL_NAME}/examples/example-output-sanbao\" && npx serve ."
  echo ""
}

main "$@"
