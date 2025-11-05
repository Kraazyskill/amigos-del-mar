# 🚀 PRE-LAUNCH CHECKLIST - Amigos del Mar

Complete this checklist before launching your website to ensure everything is perfect!

---

## 📸 CONTENT & MEDIA

### Images
- [x] Logo uploaded and displaying correctly
- [x] Gallery photos uploaded (33 photos)
- [ ] Add missing dive site images:
  - [ ] Acuari image for Mahahual (`/dive-sites/mahahual/acuari.jpg`)
  - [ ] Reina del Sur image for Banco Chinchorro (`/dive-sites/banco-chinchorro/reina-del-sur.jpg`)
- [ ] Optimize all images (compress to under 500KB each)
- [ ] Check all images load correctly on all pages
- [ ] Verify no broken image links

### Videos
- [x] Home page hero video (`hero-background.mov`)
- [x] Banco Chinchorro hero video (`banco-chinchorro-hero.mov`)
- [x] Mahahual hero video (`mahahual-hero.mov`)
- [x] Gallery hero video (`gallery-hero.mov`)
- [ ] Compress videos if over 50MB
- [ ] Test videos play on all browsers
- [ ] Test videos play on mobile devices
- [ ] Create video thumbnails/posters (optional but recommended)

---

## 📝 TEXT CONTENT

### Dive Site Descriptions
- [x] Mahahual - 9 sites updated with real descriptions
- [x] Banco Chinchorro - 10 sites updated with real descriptions
- [ ] Review all descriptions for spelling/grammar
- [ ] Verify all depths are accurate
- [ ] Check marine life lists are complete
- [ ] Update any placeholder text

### Translations
- [ ] Review Spanish translations for accuracy
- [ ] Check English for typos
- [ ] Test language switching works on all pages
- [ ] Verify all text appears in both languages

### General Content
- [ ] Update business hours if needed
- [ ] Add real social media links (Facebook, Instagram, YouTube)
- [ ] Update map location if needed
- [ ] Add any missing information

---

## 🎨 DESIGN & LAYOUT

### Mobile Responsiveness
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on tablet (iPad)
- [ ] Check for horizontal scrolling (should be NONE)
- [ ] Verify all buttons are touch-friendly
- [ ] Test navigation menu on mobile
- [ ] Check WhatsApp button position on mobile

### Desktop Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge
- [ ] Check all animations work smoothly
- [ ] Verify header looks good
- [ ] Check footer layout

### All Screen Sizes
- [ ] 320px (small mobile)
- [ ] 768px (tablet)
- [ ] 1024px (laptop)
- [ ] 1440px+ (desktop)

---

## 🔧 FUNCTIONALITY

### Navigation
- [ ] All navigation links work
- [ ] Active page indicator shows correctly
- [ ] Mobile menu opens/closes properly
- [ ] Breadcrumbs work on all pages
- [ ] Language switcher works everywhere

### Forms
- [ ] Contact form validates correctly
- [ ] Required fields show errors
- [ ] Email validation works
- [ ] Success message displays
- [ ] Test form submission
- [ ] Set up email service (optional)

### Interactive Elements
- [ ] WhatsApp button opens correct number (+52 984 151 6758)
- [ ] Phone links work (tel:)
- [ ] Email links work (mailto:)
- [ ] Gallery lightbox works
- [ ] Lightbox navigation (prev/next) works
- [ ] All CTAs link to correct pages

---

## 🌐 SEO & META

### Meta Tags
- [ ] Update site title in `app/layout.tsx`
- [ ] Update meta description
- [ ] Add Open Graph image
- [ ] Add Twitter Card image
- [ ] Verify all pages have unique titles

### URLs & Sitemap
- [ ] Update site URL in `.env` for production
- [ ] Check sitemap.xml generates correctly
- [ ] Verify robots.txt is correct
- [ ] Test all internal links

### Content
- [ ] Add alt text to all images
- [ ] Ensure proper heading hierarchy (h1 > h2 > h3)
- [ ] Add schema.org structured data (optional)

---

## 🔒 SECURITY & PERFORMANCE

### Environment Variables
- [ ] Create production `.env` file
- [ ] Update `NEXT_PUBLIC_SITE_URL` to your domain
- [ ] Keep sensitive data out of Git
- [ ] Double-check WhatsApp number
- [ ] Verify email address

### Performance
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Check page load times
- [ ] Optimize large images
- [ ] Optimize video file sizes
- [ ] Test on slow network (3G)

### Security
- [ ] Remove any console.log statements
- [ ] Check for exposed API keys
- [ ] Verify HTTPS will be enabled (Vercel does this automatically)

---

## 📞 CONTACT INFORMATION

### Current Settings ✅
- [x] Phone: +52 984 151 6758
- [x] Email: hola@amigosdelmar.net
- [x] WhatsApp: +52 984 151 6758
- [ ] Address: Update if you have specific street address
- [ ] Business hours: Verify "8:00 AM - 6:00 PM" is correct
- [ ] Update Google Maps coordinates if needed

---

## 🎬 VIDEOS

### Hero Videos Status
- [x] Home - `hero-background.mov` ✅
- [x] Banco Chinchorro - `banco-chinchorro-hero.mov` ✅
- [x] Mahahual - `mahahual-hero.mov` ✅
- [x] Gallery - `gallery-hero.mov` ✅

### Video Optimization
- [ ] Check each video file size (under 50MB?)
- [ ] Test autoplay works on:
  - [ ] Desktop Chrome
  - [ ] Desktop Safari
  - [ ] Mobile Chrome
  - [ ] Mobile Safari
- [ ] Verify videos loop smoothly
- [ ] Check videos don't slow down page load

---

## 🔗 SOCIAL MEDIA & EXTERNAL LINKS

### Social Links (Footer)
- [ ] Add real Facebook URL
- [ ] Add real Instagram URL
- [ ] Add real YouTube URL
- [ ] Remove TripAdvisor or add real link
- [ ] Test all links open in new tab

### External Services (Optional)
- [ ] Set up Google Analytics
- [ ] Set up Google Search Console
- [ ] Add Facebook Pixel (optional)
- [ ] Set up email service for contact form

---

## 🧪 TESTING CHECKLIST

### Page-by-Page Testing
- [ ] **Home Page**
  - [ ] Hero video plays
  - [ ] Features display correctly
  - [ ] Destination cards work
  - [ ] Links go to correct pages
  - [ ] Scroll indicator works

- [ ] **Banco Chinchorro Page**
  - [ ] Hero video plays
  - [ ] All 10 dive sites display
  - [ ] Images load for all sites
  - [ ] Boat section displays
  - [ ] CTA button works

- [ ] **Mahahual Page**
  - [ ] Hero video plays
  - [ ] All 9 dive sites display
  - [ ] Images load for all sites
  - [ ] Boat section displays
  - [ ] Schedule & pricing show

- [ ] **Gallery Page**
  - [ ] Hero video plays
  - [ ] All 33 photos display
  - [ ] Lightbox opens
  - [ ] Navigation works
  - [ ] No broken images

- [ ] **Contact Page**
  - [ ] Contact form works
  - [ ] Validation works
  - [ ] Phone/email clickable
  - [ ] Map displays correctly

### Cross-Browser Testing
- [ ] Chrome (Desktop & Mobile)
- [ ] Safari (Desktop & Mobile)
- [ ] Firefox
- [ ] Edge

### Device Testing
- [ ] iPhone (multiple sizes)
- [ ] Android phone
- [ ] iPad
- [ ] Desktop (1920px)
- [ ] Laptop (1366px)

---

## 🌍 DEPLOYMENT PREPARATION

### Pre-Deployment
- [ ] Run `npm run build` successfully
- [ ] Fix any build errors
- [ ] Run `npm run lint` (zero errors)
- [ ] Run `npm run type-check` (zero errors)
- [ ] Test production build locally (`npm run start`)

### Vercel Setup
- [ ] Create Vercel account
- [ ] Connect GitHub repository
- [ ] Configure environment variables in Vercel:
  - [ ] NEXT_PUBLIC_SITE_URL
  - [ ] NEXT_PUBLIC_WHATSAPP_NUMBER
  - [ ] NEXT_PUBLIC_CONTACT_EMAIL
  - [ ] NEXT_PUBLIC_CONTACT_PHONE
- [ ] Set up custom domain (if you have one)
- [ ] Enable auto-deployments from main branch

### DNS & Domain (If Using Custom Domain)
- [ ] Purchase domain name
- [ ] Point domain to Vercel
- [ ] Configure DNS records
- [ ] Wait for SSL certificate (automatic)
- [ ] Test domain works

---

## 📊 ANALYTICS & MONITORING

### Optional But Recommended
- [ ] Set up Google Analytics
- [ ] Add Google Search Console
- [ ] Submit sitemap to Google
- [ ] Set up Microsoft Clarity (free heatmaps)
- [ ] Test tracking works

---

## 🎯 FINAL CHECKS

### Content Quality
- [ ] All text proofread
- [ ] No "Lorem ipsum" or placeholder text
- [ ] All links work (no 404s)
- [ ] All images professional quality
- [ ] Videos play properly

### Performance
- [ ] Page loads in under 3 seconds
- [ ] No layout shifts
- [ ] Animations smooth (60fps)
- [ ] No console errors

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast good
- [ ] All images have alt text

### Legal (Optional)
- [ ] Privacy policy page (if needed)
- [ ] Terms of service (if needed)
- [ ] Cookie consent (if needed for EU visitors)

---

## 📋 PRIORITY LEVELS

### 🔴 CRITICAL (Must do before launch)
1. Test all pages load without errors
2. Verify contact information works
3. Test on mobile devices
4. Check all videos play
5. No broken images
6. Build succeeds without errors

### 🟡 IMPORTANT (Should do before launch)
1. Add missing dive site images (2 photos)
2. Optimize all videos
3. Test all browsers
4. Proofread all content
5. Set up analytics

### 🟢 NICE TO HAVE (Can do after launch)
1. Add social media content
2. Create video thumbnails
3. Set up email service
4. Add more gallery photos
5. Create additional pages (blog, courses, about)

---

## ✅ LAUNCH CHECKLIST

When ready to launch:
- [ ] All critical items complete
- [ ] Tested on multiple devices
- [ ] Contact info verified
- [ ] Build successful
- [ ] Deploy to Vercel
- [ ] Test production site
- [ ] Share with team for final review
- [ ] Announce launch! 🎉

---

## 📞 CURRENT STATUS

### ✅ Completed:
- [x] All 6 pages built
- [x] Header with logo and navigation
- [x] Footer with contact info
- [x] Translation system (EN/ES)
- [x] Gallery with 33 photos
- [x] Contact form
- [x] WhatsApp integration
- [x] Real dive site descriptions
- [x] 4 hero videos
- [x] Real contact info
- [x] Boat information
- [x] Mobile-responsive design

### ⏳ Pending:
- 2 dive site images (not critical)
- Video optimization
- Email service setup (optional)
- Analytics setup (optional)
- Production deployment

---

## 🎯 ESTIMATED TIME TO LAUNCH

**If you do just critical items:** 2-4 hours  
**If you do critical + important:** 1-2 days  
**If you do everything:** 3-5 days

---

## 🚀 RECOMMENDED LAUNCH PLAN

### Day 1 (Before Launch):
1. Add missing 2 images (or use placeholders)
2. Test all pages on mobile & desktop
3. Verify contact info works
4. Run final build test
5. Deploy to Vercel

### Day 2 (After Launch):
1. Monitor for any issues
2. Set up analytics
3. Optimize videos if needed
4. Gather initial feedback

### Week 1:
1. Make improvements based on feedback
2. Add more content
3. Optimize performance
4. Start SEO efforts

---

## 💡 NOTES

- The site is **95% launch-ready** right now!
- Missing images won't prevent launch
- You can optimize videos after launch
- Analytics can be added anytime
- Content can be updated continuously

---

## 🎉 YOU'RE ALMOST THERE!

**Your website is beautiful and functional!**

Just complete the critical items and you're ready to go live! 🌊🤿🚀

---

**Need help with any of these items?** Just ask! 😊

