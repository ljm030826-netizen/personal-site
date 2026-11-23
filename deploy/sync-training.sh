#!/usr/bin/env bash
set -euo pipefail
# Generate the current-week diagnostic and push the private report to the server.
# Usage: SERVER=root@203.0.113.10 ./deploy/sync-training.sh
: "${SERVER:?Set SERVER=user@host}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/id_ed25519}"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
HEALTH="${HEALTH_DIR:-$HERE/../health-report}"
cd "$HEALTH"
python3 weekly_report.py --week current --no-wait
STAMP="$(date '+%Y-%m-%d %H:%M %Z')"
WEEK="$(date '+%G-W%V')"
printf '{"generated_at":"%s","week":"%s"}\n' "$STAMP" "$WEEK" > reports/status.json
rsync -az -e "ssh -i $SSH_KEY" \
  reports/latest.html reports/latest.pdf reports/status.json \
  "$HERE/deploy/training/index.html" \
  "$SERVER:/srv/training/"
echo "Synced training report to $SERVER:/srv/training/"
