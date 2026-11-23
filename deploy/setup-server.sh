#!/usr/bin/env bash
set -euo pipefail
# One-time server setup for Ubuntu 24.04 (Hetzner / DigitalOcean).
# Run as root on the server:
#   DOMAIN=example.me TRAINING_USER=karwin TRAINING_PASSWORD='...' bash setup-server.sh
: "${DOMAIN:?Set DOMAIN=example.me}"
TRAINING_USER="${TRAINING_USER:-karwin}"
TRAINING_PASSWORD="${TRAINING_PASSWORD:-}"
if [ -z "$TRAINING_PASSWORD" ]; then
  read -r -s -p "Training page password: " TRAINING_PASSWORD
  echo
fi
[ -n "$TRAINING_PASSWORD" ] || { echo "Password must not be empty" >&2; exit 1; }
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y curl gnupg debian-keyring debian-archive-keyring apt-transport-https rsync ufw fail2ban

# Official Caddy apt repository (Ubuntu's archive does not always ship Caddy).
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' \
  | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' \
  > /etc/apt/sources.list.d/caddy-stable.list
apt-get update
apt-get install -y caddy

mkdir -p /srv/personal-site/current /srv/training /etc/caddy
if [ -f "$HERE/training/index.html" ]; then
  cp "$HERE/training/index.html" /srv/training/index.html
fi
if [ ! -f /srv/personal-site/current/index.html ]; then
  printf '<!doctype html><title>Coming soon</title><h1>Coming soon</h1>\n' > /srv/personal-site/current/index.html
fi

HASH="$(caddy hash-password --plaintext "$TRAINING_PASSWORD")"

cat > /etc/caddy/Caddyfile <<EOF
{
  email admin@$DOMAIN
}

$DOMAIN {
  encode zstd gzip
  root * /srv/personal-site/current

  handle_path /training/* {
    basic_auth {
      $TRAINING_USER $HASH
    }
    root * /srv/training
    file_server
    header Cache-Control "no-store"
    header X-Robots-Tag "noindex, nofollow"
  }

  handle {
    try_files {path} {path}.html {path}/ /404.html
    file_server
  }
}

www.$DOMAIN {
  redir https://$DOMAIN{uri} permanent
}
EOF

chown -R caddy:caddy /srv/personal-site /srv/training
chmod -R a+rX /srv/personal-site /srv/training

ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable || true

caddy validate --config /etc/caddy/Caddyfile
systemctl enable caddy
systemctl restart caddy
systemctl status caddy --no-pager | head -12

echo
echo "Server ready. Public root: /srv/personal-site/current"
echo "Training root: /srv/training (basic auth user: $TRAINING_USER)"
echo "Next: point $DOMAIN and www.$DOMAIN to this server, then deploy from your Mac."
