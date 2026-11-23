#!/usr/bin/env bash
set -euo pipefail
# Install a per-user LaunchAgent that watches iCloud and pushes the training report.
# Usage: SERVER=root@203.0.113.10 ./deploy/install-watcher.sh
: "${SERVER:?Set SERVER=user@host}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/id_ed25519}"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PLIST="$HOME/Library/LaunchAgents/com.jiaming.training-sync.plist"

if ! command -v fswatch >/dev/null 2>&1; then
  echo "Install fswatch first: brew install fswatch" >&2
  exit 1
fi

mkdir -p "$HOME/Library/LaunchAgents" "$HOME/Library/Logs"
cat > "$PLIST" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>com.jiaming.training-sync</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/zsh</string>
    <string>-lc</string>
    <string>SERVER='$SERVER' SSH_KEY='$SSH_KEY' '$HERE/watch-training.sh'</string>
  </array>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><true/>
  <key>StandardOutPath</key><string>$HOME/Library/Logs/training-sync.log</string>
  <key>StandardErrorPath</key><string>$HOME/Library/Logs/training-sync.err</string>
</dict>
</plist>
EOF

launchctl bootout "gui/$(id -u)" "$PLIST" 2>/dev/null || true
launchctl bootstrap "gui/$(id -u)" "$PLIST"
echo "Installed $PLIST"
echo "Logs: $HOME/Library/Logs/training-sync.log"
