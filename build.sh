#!/usr/bin/env bash
# Construye el sitio estático en _site/ (producción en la raíz, pruebas en /beta).
set -euo pipefail
rm -rf _site && mkdir -p _site
[ -d node_modules/html2canvas ] || npm install --no-save --no-audit --no-fund html2canvas@1.4.1 @fontsource/barlow-condensed@5.0.13
VER=${VER:-$(git rev-parse --short HEAD 2>/dev/null || date +%s)}
for env in prod beta; do
  [ -d "$env" ] || continue
  if [ "$env" = prod ]; then D=_site; else D=_site/beta; fi
  mkdir -p "$D/fonts" "$D/vendor" "$D/icons"
  cp src/app.js "$D/"
  sed "s/__VERSION__/$VER/" src/sw.js > "$D/sw.js"
  cp "$env/index.html" "$env/manifest.webmanifest" "$D/"
  cp node_modules/html2canvas/dist/html2canvas.min.js "$D/vendor/"
  cp src/fonts.css "$D/fonts/"
  for w in 500 600 700 800; do cp "node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-$w-normal.woff2" "$D/fonts/"; done
  base64 -d src/logo.b64 > "$D/logo.jpg"
  convert "$D/logo.jpg" -resize 192x192 "$D/icons/icon-192.png"
  convert "$D/logo.jpg" -resize 512x512 "$D/icons/icon-512.png"
  convert "$D/logo.jpg" -resize 180x180 "$D/icons/apple-touch-icon.png"
done
[ -f _site/index.html ] || printf '<!DOCTYPE html><meta charset="utf-8"><title>Sant Pere</title><p>En preparación.</p>' > _site/index.html
touch _site/.nojekyll
echo "OK $VER"
