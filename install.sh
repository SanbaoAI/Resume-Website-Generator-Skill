#!/usr/bin/env bash
# Resume Website Generator Skill — one-line installer for Cursor
# Usage: bash install.sh   OR   curl -fsSL <url>/install.sh | bash

set -euo pipefail

SKILL_NAME="resume-website-generator"
SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_DIR="${HOME}/.cursor/skills/${SKILL_NAME}"

echo "▶ Installing Resume Website Generator Skill..."
echo "  From: ${SOURCE_DIR}"
echo "  To:   ${TARGET_DIR}"

mkdir -p "${HOME}/.cursor/skills"
rm -rf "${TARGET_DIR}"
cp -R "${SOURCE_DIR}" "${TARGET_DIR}"

# Cursor requires SKILL.md (uppercase)
if [[ -f "${TARGET_DIR}/skill.md" ]]; then
  mv "${TARGET_DIR}/skill.md" "${TARGET_DIR}/SKILL.md"
fi

# Remove installer from installed copy (optional cleanup)
rm -f "${TARGET_DIR}/install.sh"

echo ""
echo "✓ Installed successfully!"
echo ""
echo "  In Cursor, say:"
echo "  > 使用 resume-website-generator skill，把我的简历转成个人网站"
echo ""
echo "  Preview example:"
echo "  cd \"${TARGET_DIR}/examples/example-output/website\" && npx serve ."
echo ""
