# Deployment Guide - Production PWA

This guide walks you through deploying your portfolio as a production-grade Progressive Web App.

## Prerequisites

- [ ] All PWA icons generated and placed in `/public/icons/`
- [ ] Contact information updated with real URLs
- [ ] Domain name ready (optional but recommended)
- [ ] HTTPS hosting (required for PWA features)

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel --prod
```

### Step 4: Configure Custom Domain (Optional)
```bash
vercel domains add yourdomain.com
```

### Step 5: Verify PWA
- Open Chrome DevTools
- Go to Lighthouse tab
- Run PWA audit
- Should score 100/100

## Option 2: Deploy to Netlify

### Step 1: Install Netlify CLI
```bash
npm i -g netlify-cli
```

### Step 2: Build Your App
```bash
npm run build
```

### Step 3: Deploy
```bash
netlify deploy --prod
```

### Step 4: Add Custom Domain
```bash
netlify domains:add yourdomain.com
```

## Option 3: Deploy to Cloudflare Pages

### Step 1: Build Your App
```bash
npm run build
```

### Step 2: Push to GitHub

### Step 3: Connect to Cloudflare Pages
- Go to Cloudflare Pages
- Connect your GitHub repository
- Build command: `npm run build`
- Output directory: `dist`

## Option 4: Deploy to Firebase Hosting

### Step 1: Install Firebase CLI
```bash
npm i -g firebase-tools
```

### Step 2: Login to Firebase
```bash
firebase login
```

### Step 3: Initialize Firebase
```bash
firebase init hosting
```

Configuration:
- Public directory: `dist`
- Single-page app: `Yes`
- Automatic builds: `No`

### Step 4: Build and Deploy
```bash
npm run build
firebase deploy
```

## Post-Deployment Checklist

### 1. Test PWA Installation
- [ ] Visit your site on Chrome (desktop)
- [ ] Click install icon in address bar
- [ ] App should install successfully

### 2. Test Mobile Installation
- [ ] Visit site on mobile Chrome/Safari
- [ ] Add to Home Screen prompt appears
- [ ] App opens in standalone mode

### 3. Test Offline Functionality
- [ ] Open Chrome DevTools
- [ ] Go to Network tab
- [ ] Check "Offline" checkbox
- [ ] Refresh page
- [ ] Should load from cache

### 4. Test Service Worker
- [ ] DevTools → Application → Service Workers
- [ ] Should show "activated and running"
- [ ] Status should be green

### 5. Run Lighthouse Audit
```
Performance: Target 95+
Accessibility: Target 100
Best Practices: Target 100
SEO: Target 100
PWA: Target 100 (All checks passed)
```

### 6. Verify Manifest
- [ ] DevTools → Application → Manifest
- [ ] All fields populated correctly
- [ ] Icons showing properly
- [ ] Theme color correct

### 7. Test on Multiple Devices
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Tablet (both orientations)

## Environment Variables

If you need API keys or environment variables:

### Vercel
```bash
vercel env add VARIABLE_NAME
```

### Netlify
```bash
netlify env:set VARIABLE_NAME value
```

### Cloudflare Pages
Add in Dashboard → Settings → Environment Variables

## Custom Domain Setup

### DNS Records (Generic)
```
Type: A
Name: @
Value: [Your hosting IP]

Type: CNAME
Name: www
Value: yourdomain.com
```

### SSL Certificate
All recommended platforms provide automatic SSL:
- Vercel: Automatic
- Netlify: Automatic
- Cloudflare: Automatic
- Firebase: Automatic

## Performance Optimization

### 1. Enable Compression
Most platforms enable this by default, but verify:
- Gzip compression
- Brotli compression (better)

### 2. CDN Configuration
Ensure your hosting uses a global CDN:
- ✅ Vercel (Edge Network)
- ✅ Netlify (CDN)
- ✅ Cloudflare (Global CDN)
- ✅ Firebase (CDN)

### 3. Cache Headers
Add to your `_headers` file (already included):
```
/*
  Cache-Control: public, max-age=0, must-revalidate

/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

## Monitoring & Analytics

### Add Google Analytics (Optional)
```html
<!-- Add to index.html before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Web Vitals Monitoring
Consider adding:
- Vercel Analytics (free on Vercel)
- Google Analytics 4
- Microsoft Clarity

## Troubleshooting

### PWA Not Installing
1. Check HTTPS is enabled
2. Verify manifest.json is accessible
3. Check service worker is registered
4. Review DevTools console for errors

### Service Worker Not Updating
```javascript
// Force update in DevTools
Application → Service Workers → Update on reload (checkbox)
```

### Icons Not Showing
1. Verify icons exist in `/public/icons/`
2. Check correct sizes (72, 96, 128, 144, 152, 192, 384, 512)
3. Clear cache and hard reload

### Offline Not Working
1. Check service worker status
2. Verify caching strategy in vite.config.ts
3. Test with DevTools offline mode

## Security Best Practices

Already implemented:
- ✅ Security headers in `_headers`
- ✅ Content Security Policy
- ✅ X-Frame-Options
- ✅ XSS Protection
- ✅ HTTPS only (when deployed)

## SEO Optimization

Already implemented:
- ✅ Meta tags
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Semantic HTML
- ✅ robots.txt
- ✅ Sitemap ready

## Final Steps

1. **Submit to Google Search Console**
   - Verify ownership
   - Submit sitemap
   - Monitor indexing

2. **Test with Real Users**
   - Share link with friends
   - Get feedback
   - Monitor analytics

3. **Update Contact Links**
   - Replace placeholder URLs
   - Test all links work
   - Verify WhatsApp link opens correctly

## Support

If you encounter issues:
1. Check DevTools console
2. Run Lighthouse audit
3. Review service worker status
4. Check hosting platform docs

---

🎉 **Congratulations!** Your production-grade PWA is now live!
