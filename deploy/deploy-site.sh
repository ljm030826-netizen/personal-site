#!/usr/bin/env bash
set -euo pipefail
# Deploy the public site to the Hetzner / DigitalOcean box.
# Usage: SERVER=root@203.0.113.10 ./deploy/deploy-site.sh
: "${SERVER:?Set SERVER=user@host}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/id_ed25519}"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$HERE"
npm run build
rsync -az --delete -e "ssh -i $SSH_KEY" dist/ "$SERVER:/srv/personal-site/current/"
echo "Deployed public site to $SERVER:/srv/personal-site/current/"
