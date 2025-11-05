# 🚀 Deployment Guide - Amigos del Mar

Complete guide for deploying your diving website to production.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you've completed:

### Content
- [ ] Replace all placeholder images with actual photos
- [ ] Update contact information (phone, email, address)
- [ ] Add real WhatsApp number
- [ ] Review all text content for accuracy
- [ ] Test all forms work correctly
- [ ] Verify translations in both languages

### Configuration
- [ ] Set up environment variables
- [ ] Configure custom domain (if applicable)
- [ ] Set up email service (if using contact form)
- [ ] Add Google Analytics ID (optional)
- [ ] Add Google Maps API key (optional)

### Testing
- [ ] Test on mobile devices (iOS & Android)
- [ ] Test on desktop browsers (Chrome, Firefox, Safari)
- [ ] Check all links work
- [ ] Verify forms submit correctly
- [ ] Test language switching
- [ ] Check WhatsApp button works
- [ ] Verify no horizontal scrolling on any page
- [ ] Run Lighthouse audit

### Code Quality
- [ ] No linting errors: `npm run lint`
- [ ] No TypeScript errors: `npm run type-check`
- [ ] Build succeeds: `npm run build`

## 🌟 Recommended Platform: Vercel

Vercel is the recommended platform (made by Next.js creators).

### Benefits
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Automatic deployments from Git
- ✅ Preview deployments for branches
- ✅ Zero configuration needed
- ✅ Excellent performance

### Deployment Steps

#### 1. Create Vercel Account
Visit [vercel.com](https://vercel.com) and sign up (free).

#### 2. Install Vercel CLI (Optional)
```bash
npm install -g vercel
```

#### 3. Deploy via CLI
```bash
# From project root
vercel

# Follow prompts:
# - Link to existing project or create new
# - Choose settings (defaults are fine)
# - Deploy!
```

#### 4. Deploy via Git (Recommended)

**a. Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/amigos-del-mar.git
git push -u origin main
```

**b. Import to Vercel:**
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Add environment variables (see below)
6. Click "Deploy"

#### 5. Configure Environment Variables

In Vercel dashboard → Settings → Environment Variables, add:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=529831234567
NEXT_PUBLIC_CONTACT_EMAIL=info@amigosdelmar.com
NEXT_PUBLIC_CONTACT_PHONE=+52 983 123 4567
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX (optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXXX (optional)
```

#### 6. Custom Domain

**Add Custom Domain:**
1. Go to Project Settings → Domains
2. Add your domain (e.g., `amigosdelmar.com`)
3. Follow DNS configuration instructions
4. Vercel will auto-provision SSL certificate

**DNS Configuration:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### 7. Automatic Deployments

Once connected to Git:
- Push to `main` → Auto-deploys to production
- Push to other branches → Creates preview deployments
- Pull requests → Automatic preview URLs

## 🔧 Alternative Platforms

### Netlify

**Deploy Steps:**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Connect GitHub repository
4. Configure build settings:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Railway

```bash
npm install -g railway
railway login
railway init
railway up
```

### Traditional VPS (Ubuntu/Nginx)

**1. Install Node.js:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**2. Clone and Build:**
```bash
git clone https://github.com/yourusername/amigos-del-mar.git
cd amigos-del-mar
npm install
npm run build
```

**3. Install PM2:**
```bash
npm install -g pm2
pm2 start npm --name "amigos-del-mar" -- start
pm2 save
pm2 startup
```

**4. Configure Nginx:**
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**5. SSL with Let's Encrypt:**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## 📧 Email Service Setup (Contact Form)

To make the contact form functional, integrate an email service:

### Option 1: SendGrid

```bash
npm install @sendgrid/mail
```

**Create API route: `app/api/contact/route.ts`**
```typescript
import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: Request) {
  const data = await request.json()
  
  const msg = {
    to: process.env.CONTACT_EMAIL,
    from: process.env.SENDGRID_VERIFIED_SENDER,
    subject: 'New Contact Form Submission',
    text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
  }
  
  try {
    await sgMail.send(msg)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
```

**Environment variables:**
```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
SENDGRID_VERIFIED_SENDER=noreply@yourdomain.com
CONTACT_EMAIL=info@amigosdelmar.com
```

### Option 2: Resend

```bash
npm install resend
```

### Option 3: Formspree (No Backend Needed)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form
3. Update contact form action:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

## 🔍 SEO Configuration

### Google Search Console

1. Visit [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (domain)
3. Verify ownership (DNS or file upload)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### Google Analytics

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `.env`:
```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```
4. Add Google Analytics component (optional)

### Structured Data

Add to specific pages for better SEO:

**Home page structured data:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Amigos del Mar",
  "image": "https://yourdomain.com/logo.png",
  "description": "Professional diving experiences in Mahahual and Banco Chinchorro",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mahahual",
    "addressLocality": "Mahahual",
    "addressRegion": "Quintana Roo",
    "postalCode": "77976",
    "addressCountry": "MX"
  },
  "telephone": "+52-983-123-4567",
  "email": "info@amigosdelmar.com",
  "url": "https://yourdomain.com",
  "priceRange": "$$"
}
```

## 📊 Analytics & Monitoring

### Vercel Analytics
Enable in Vercel dashboard → Analytics (free tier available)

### Google PageSpeed Insights
Test regularly: [pagespeed.web.dev](https://pagespeed.web.dev)

### Microsoft Clarity
Free heatmaps and session recordings: [clarity.microsoft.com](https://clarity.microsoft.com)

## 🔒 Security Best Practices

- ✅ Always use HTTPS
- ✅ Keep dependencies updated: `npm update`
- ✅ Use environment variables for secrets
- ✅ Enable CSRF protection on forms
- ✅ Add rate limiting to API routes
- ✅ Validate all form inputs
- ✅ Sanitize user-generated content

## 🔄 Continuous Deployment Workflow

**Recommended Git Workflow:**
```bash
main          # Production (auto-deploys)
├── develop   # Staging (preview deployments)
└── feature/* # Feature branches (preview deployments)
```

**Making Updates:**
1. Create feature branch
2. Make changes
3. Test locally
4. Push → Get preview URL
5. Review preview
6. Merge to main → Auto-deploys

## 🐛 Troubleshooting

### Build Fails

**Check build logs:**
```bash
npm run build
```

**Common issues:**
- Missing environment variables
- TypeScript errors
- Import path issues
- Image optimization errors

### Environment Variables Not Working

- Ensure they start with `NEXT_PUBLIC_` for client-side
- Redeploy after adding new variables
- Check variable names match exactly

### Images Not Loading

- Verify images exist in `/public`
- Check Next.js image domains in `next.config.mjs`
- Ensure images are optimized (< 5MB recommended)

### Performance Issues

- Enable image optimization
- Use lazy loading
- Check bundle size: `npm run build` (look for warnings)
- Optimize images before upload
- Use WebP format

## 📱 Mobile Testing

Test on real devices:
- iPhone Safari
- Android Chrome
- iPad Safari
- Various screen sizes

Online tools:
- [BrowserStack](https://www.browserstack.com)
- Chrome DevTools Device Mode
- Firefox Responsive Design Mode

## ✅ Post-Deployment Checklist

After deployment:
- [ ] Visit site and test all pages
- [ ] Test form submission
- [ ] Check mobile responsiveness
- [ ] Verify WhatsApp button works
- [ ] Test language switching
- [ ] Check SSL certificate is active
- [ ] Test on multiple browsers
- [ ] Submit sitemap to Google Search Console
- [ ] Set up analytics
- [ ] Test contact email delivery
- [ ] Monitor performance with Lighthouse
- [ ] Share with team for review

## 🎉 Success!

Your website is now live! 🚀

**Next Steps:**
1. Monitor analytics
2. Gather user feedback
3. Make iterative improvements
4. Keep content updated
5. Regular security updates

---

**Need help?** Contact: info@amigosdelmar.com

**Happy Diving! 🌊🤿**

