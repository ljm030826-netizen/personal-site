#!/usr/bin/env bash
set -euo pipefail
# Watch the Health Auto Export iCloud folder and re-sync after changes.
# Requires: brew install fswatch
SYNC="${HAE_SYNC_DIR:-$HOME/Library/Mobile Documents/iCloud~com~ifunography~HealthExport/Documents/AutoSync}"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if ! command -v fswatch >/dev/null 2>&1; then
  echo "Install fswatch first: brew install fswatch" >&2
  exit 1
fi
echo "Watching $SYNC"
fswatch -o -l 45 "$SYNC" | while read -r _; do
  echo "$(date '+%H:%M:%S') change detected"
  "$HERE/sync-training.sh" || echo "sync failed; will retry on next change" >&2
done
