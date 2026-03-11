/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  X-XSS-Protection: 1; mode=block
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://wa.me;

/manifest.json
  Content-Type: application/manifest+json
  Cache-Control: public, max-age=86400

/service-worker.js
  Content-Type: application/javascript
  Cache-Control: no-cache

/icons/*
  Cache-Control: public, max-age=31536000, immutable
