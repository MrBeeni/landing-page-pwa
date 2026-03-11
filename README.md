# Muhammad Mubeen - Portfolio

A modern, production-grade Progressive Web App (PWA) portfolio for Muhammad Mubeen, Full Stack Developer.

## Features

✅ **Production-Ready PWA**
- Service Worker for offline functionality
- Web App Manifest for installability
- App-like experience on mobile and desktop
- Offline fallback page
- Install prompt for add to home screen

✅ **Modern Tech Stack**
- React 18.3
- TypeScript
- Tailwind CSS v4
- Vite 6
- Lucide React Icons

✅ **Performance Optimized**
- Code splitting
- Asset caching
- Lazy loading
- Optimized images
- Fast initial load

✅ **6 Premium Themes**
1. Green Tech Theme
2. Blue Modern Theme
3. Purple Violet Theme
4. Dark Developer Theme
5. Soft Gradient Theme
6. Minimal Black & White Theme

✅ **Fully Responsive**
- Mobile-first design
- Tablet optimized
- Desktop layouts
- Touch-friendly interactions

✅ **SEO Optimized**
- Meta tags
- Open Graph tags
- Twitter Card tags
- Semantic HTML
- Robots.txt
- Security headers

## Sections

1. **Hero** - Name, tagline, and CTAs
2. **About** - Professional summary
3. **Services** - 4 service offerings with icons
4. **Projects** - Featured work showcase
5. **Contact** - Multiple contact methods
6. **Footer** - Availability status

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 2. Add PWA Icons
Generate and add icons to `/public/icons/`:
- icon-72x72.png
- icon-96x96.png
- icon-128x128.png
- icon-144x144.png
- icon-152x152.png
- icon-192x192.png
- icon-384x384.png
- icon-512x512.png

**Icon Generator Tools:**
- https://realfavicongenerator.net/
- https://www.pwabuilder.com/imageGenerator

### 3. Add Screenshots (Optional)
Add to `/public/screenshots/`:
- desktop.png (1280x720 or 1920x1080)
- mobile.png (750x1334 or 1080x1920)

### 4. Update Contact Information
Edit `/src/app/components/Contact.tsx` to add your actual:
- GitHub URL
- LinkedIn URL
- Upwork URL

### 5. Development
```bash
npm run dev
```

### 6. Build for Production
```bash
npm run build
```

### 7. Test PWA Locally
```bash
npm run build
npx serve dist
```

Then open Chrome DevTools → Application → Service Workers to verify PWA installation.

## Deployment Checklist

- [ ] Add all PWA icons (72x72 to 512x512)
- [ ] Add screenshots for app stores
- [ ] Update manifest.json with your domain
- [ ] Update meta tags in index.html
- [ ] Update contact links (GitHub, LinkedIn, Upwork)
- [ ] Deploy to HTTPS (required for PWA)
- [ ] Test service worker registration
- [ ] Test offline functionality
- [ ] Test install prompt
- [ ] Verify on Lighthouse (should score 90+ PWA)

## Recommended Hosting

- **Vercel** - Automatic PWA support, global CDN
- **Netlify** - Easy deployment, PWA-ready
- **Cloudflare Pages** - Fast, secure, free SSL
- **Firebase Hosting** - Google's platform, PWA optimized

## PWA Testing

1. **Chrome DevTools**
   - Application → Service Workers
   - Application → Manifest
   - Lighthouse → PWA audit

2. **Mobile Testing**
   - iOS Safari - Add to Home Screen
   - Android Chrome - Install App prompt

3. **Offline Testing**
   - DevTools → Network → Offline
   - Verify app still loads

## Browser Support

- ✅ Chrome (Desktop & Mobile)
- ✅ Safari (iOS 11.3+)
- ✅ Firefox
- ✅ Edge
- ✅ Samsung Internet

## Performance Metrics

Target scores (Lighthouse):
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100
- PWA: 100

## License

© 2026 Muhammad Mubeen. All rights reserved.

## Contact

- **Email**: mubeen4429@gmail.com
- **Phone**: +923148131429
- **WhatsApp**: +923148131429

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
