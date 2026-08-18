#!/usr/bin/env bash
set -euo pipefail

SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CODEX_ROOT="${CODEX_HOME:-${HOME}/.codex}"
DESTINATION="${1:-${CODEX_ROOT}/skills/geo-seo}"

if [ "$(cd "$DESTINATION" 2>/dev/null && pwd || true)" = "$SOURCE_DIR" ]; then
  echo "GEO-SEO ya está en $SOURCE_DIR"
  exit 0
fi

mkdir -p "$DESTINATION"
cp -R "$SOURCE_DIR"/. "$DESTINATION"/

echo "GEO-SEO instalado en $DESTINATION"
echo "Inicia una nueva sesión de Codex para que descubra la skill."
echo "Las dependencias Python se instalan por separado desde requirements.txt si son necesarias."
