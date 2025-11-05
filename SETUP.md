# ⚙️ Setup Guide - Amigos del Mar

Complete setup guide for developers working on this project.

## 📋 System Requirements

### Required
- **Node.js**: 18.x or higher ([download](https://nodejs.org))
- **npm**: 9.x or higher (comes with Node.js)
- **Code Editor**: VS Code recommended
- **Git**: For version control

### Recommended
- **VS Code Extensions**:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features

### Optional
- **pnpm** or **yarn** as alternative package managers
- **GitHub Desktop** for easier Git operations
- **Vercel CLI** for deployment

## 🚀 Quick Start (5 Minutes)

```bash
# 1. Clone or download the project
# (If you already have the files, skip this)

# 2. Navigate to project folder
cd "E:\Amigos del Mar"

# 3. Install dependencies
npm install

# 4. Copy environment file
copy .env.example .env

# 5. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser! 🎉

## 📦 Installation Details

### Step 1: Install Node.js

**Windows:**
1. Download from [nodejs.org](https://nodejs.org)
2. Run installer
3. Verify installation:
```bash
node --version  # Should show v18.x or higher
npm --version   # Should show v9.x or higher
```

**macOS:**
```bash
# Using Homebrew
brew install node

# Or download from nodejs.org
```

**Linux:**
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify
node --version
npm --version
```

### Step 2: Install Dependencies

Navigate to project folder and run:

```bash
npm install
```

This installs all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- And more...

**Expected output:**
```
added 324 packages in 45s
```

### Step 3: Configure Environment Variables

**Create `.env` file:**
```bash
# Windows
copy .env.example .env

# macOS/Linux
cp .env.example .env
```

**Edit `.env` file:**
```env
# Required - Update these with real values
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=529831234567
NEXT_PUBLIC_CONTACT_EMAIL=info@amigosdelmar.com
NEXT_PUBLIC_CONTACT_PHONE=+52 983 123 4567

# Optional - Add when ready
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
```

**Important Notes:**
- ✅ Use `NEXT_PUBLIC_` prefix for client-side variables
- ✅ Never commit `.env` to Git (already in `.gitignore`)
- ✅ Update `NEXT_PUBLIC_SITE_URL` to your domain in production

## 🎯 Development Workflow

### Starting Development Server

```bash
npm run dev
```

Server starts at [http://localhost:3000](http://localhost:3000)

**Features:**
- ✅ Hot Module Replacement (instant updates)
- ✅ Fast Refresh (preserves state)
- ✅ Error overlay
- ✅ TypeScript checking

### Building for Production

```bash
npm run build
```

**What it does:**
- Compiles TypeScript
- Bundles JavaScript
- Optimizes images
- Generates static pages
- Creates production build in `.next` folder

**Expected output:**
```
Route (app)                              Size     First Load JS
┌ ○ /                                    5.2 kB         95.1 kB
├ ○ /banco-chinchorro                    4.8 kB         94.7 kB
├ ○ /contact                             6.1 kB         96.0 kB
├ ○ /gallery                             5.5 kB         95.4 kB
└ ○ /mahahual                            4.9 kB         94.8 kB
```

### Running Production Build Locally

```bash
npm run build
npm run start
```

Server starts at [http://localhost:3000](http://localhost:3000) in production mode.

### Code Quality Checks

**Linting:**
```bash
npm run lint
```
Checks code for errors and style issues.

**Type Checking:**
```bash
npm run type-check
```
Validates TypeScript types without building.

**Before Committing:**
```bash
# Run all checks
npm run lint && npm run type-check && npm run build
```

## 📁 Understanding Project Structure

### Key Folders

**`/app`** - Next.js App Router
- Each folder = route
- `page.tsx` = page component
- `layout.tsx` = shared layout
- Server and client components

**`/components`** - Reusable React components
- `layout/` - Header, Footer
- `ui/` - Buttons, modals, etc.

**`/contexts`** - React Context providers
- `LanguageContext.tsx` - Translation system

**`/lib`** - Utilities and helpers
- `translations/` - EN/ES translations
- `utils.ts` - Helper functions

**`/public`** - Static assets
- Images, icons, fonts
- Directly accessible at `/filename`

### Key Files

**`package.json`** - Dependencies and scripts
**`tsconfig.json`** - TypeScript configuration
**`tailwind.config.ts`** - Tailwind CSS setup
**`next.config.mjs`** - Next.js configuration
**`.env`** - Environment variables (not in Git)
**`.env.example`** - Template for environment variables

## 🎨 Customization Guide

### Changing Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  ocean: {
    blue: '#084e90',      // Change primary color
    deep: '#002766',      // Change heading color
    light: '#e6f7ff',     // Change light background
    turquoise: '#40a9ff', // Change accent color
  },
  whatsapp: '#25D366',    // WhatsApp green
}
```

### Adding Translations

**1. Add English translation:**
`lib/translations/locales/en.ts`
```typescript
export const en = {
  // ... existing translations
  'mypage.title': 'My New Page',
  'mypage.subtitle': 'Welcome to my page',
}
```

**2. Add Spanish translation:**
`lib/translations/locales/es.ts`
```typescript
export const es = {
  // ... existing translations
  'mypage.title': 'Mi Nueva Página',
  'mypage.subtitle': 'Bienvenido a mi página',
}
```

**3. Use in components:**
```typescript
import { useLanguage } from '@/contexts/LanguageContext'

function MyPage() {
  const { t } = useLanguage()
  return <h1>{t('mypage.title')}</h1>
}
```

### Updating Contact Information

**Option 1: Environment Variables (Recommended)**
Edit `.env`:
```env
NEXT_PUBLIC_CONTACT_EMAIL=newemail@domain.com
NEXT_PUBLIC_CONTACT_PHONE=+52 999 888 7777
NEXT_PUBLIC_WHATSAPP_NUMBER=529998887777
```

**Option 2: Direct in Components**
Edit `components/layout/Footer.tsx` and `app/contact/page.tsx`

### Adding New Pages

**1. Create page folder:**
```bash
mkdir app/my-new-page
```

**2. Create page component:**
`app/my-new-page/page.tsx`
```typescript
'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function MyNewPage() {
  const { t } = useLanguage()
  
  return (
    <div>
      <h1>{t('mypage.title')}</h1>
    </div>
  )
}
```

**3. Add to navigation:**
Edit `components/layout/Header.tsx`:
```typescript
const navLinks = [
  // ... existing links
  { href: '/my-new-page', label: t('nav.myNewPage') },
]
```

**4. Add translations:**
Add `nav.myNewPage` to both `en.ts` and `es.ts`

## 🖼️ Working with Images

### Adding Images

**1. Place in `/public` folder:**
```
public/
  ├── hero-background.jpg
  ├── logo.png
  └── gallery/
      ├── photo1.jpg
      └── photo2.jpg
```

**2. Use in components:**
```typescript
import Image from 'next/image'

<Image
  src="/hero-background.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority // for above-the-fold images
/>
```

### Image Optimization Tips

- ✅ Use WebP format when possible
- ✅ Compress before uploading (use [tinypng.com](https://tinypng.com))
- ✅ Max size: 1920x1080 for backgrounds
- ✅ Use Next.js `<Image>` component (automatic optimization)
- ✅ Add descriptive `alt` text for SEO

### Background Images

**Using CSS (Tailwind):**
```typescript
<div className="bg-[url('/image.jpg')] bg-cover bg-center">
  Content
</div>
```

**Using inline styles:**
```typescript
<div style={{ backgroundImage: 'url(/image.jpg)' }}>
  Content
</div>
```

## 🌐 Translation System

### How It Works

**1. Translations stored in:**
- `/lib/translations/locales/en.ts` (English)
- `/lib/translations/locales/es.ts` (Spanish)

**2. Context provider:**
`/contexts/LanguageContext.tsx` manages:
- Current language
- Language switching
- Translation function `t()`

**3. Usage in components:**
```typescript
const { t, language, setLanguage } = useLanguage()

// Get translation
const title = t('home.hero.title')

// Get current language
console.log(language) // 'en' or 'es'

// Change language
setLanguage('es')
```

### Adding New Translation Keys

**Required in BOTH files:**
```typescript
// en.ts
'feature.new.title': 'New Feature'

// es.ts
'feature.new.title': 'Nueva Característica'
```

**Nested structure:**
```typescript
'contact': {
  'form': {
    'title': 'Contact Us',
    'submit': 'Send'
  }
}
```

**With parameters:**
```typescript
// Translation
'validation.minLength': 'Must be at least {min} characters'

// Usage
t('validation.minLength', { min: '5' })
// Output: "Must be at least 5 characters"
```

## 🔧 Troubleshooting

### Port Already in Use

**Error:** `Port 3000 is already in use`

**Solution:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found

**Error:** `Cannot find module 'package-name'`

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

**Error:** TypeScript errors during build

**Solution:**
```bash
# Check types
npm run type-check

# Fix errors shown, then build again
npm run build
```

### Hot Reload Not Working

**Solution:**
1. Restart dev server
2. Clear `.next` folder: `rm -rf .next`
3. Hard refresh browser: Ctrl+Shift+R

### Environment Variables Not Loading

**Solution:**
1. Ensure variables start with `NEXT_PUBLIC_`
2. Restart dev server after changing `.env`
3. Check file is named exactly `.env`

## 🎓 Learning Resources

### Next.js
- [Official Docs](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Examples](https://github.com/vercel/next.js/tree/canary/examples)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Tailwind CSS
- [Official Docs](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/)
- [Tailwind Components](https://tailwindcomponents.com/)

### Framer Motion
- [Docs](https://www.framer.com/motion/)
- [Examples](https://www.framer.com/motion/examples/)

## 💡 Best Practices

### Code Style
- ✅ Use TypeScript strict mode
- ✅ Use functional components
- ✅ Use `const` over `let`
- ✅ Use semantic HTML
- ✅ Add proper ARIA labels
- ✅ Use Tailwind classes over inline styles

### Performance
- ✅ Use Next.js `<Image>` component
- ✅ Lazy load below-the-fold images
- ✅ Use `'use client'` only when needed
- ✅ Minimize bundle size
- ✅ Use dynamic imports for heavy components

### Accessibility
- ✅ Add alt text to images
- ✅ Use proper heading hierarchy (h1 → h2 → h3)
- ✅ Ensure 4.5:1 color contrast
- ✅ Make interactive elements keyboard accessible
- ✅ Add ARIA labels to icon buttons

### Mobile-First
- ✅ Design for mobile first
- ✅ Test on real devices
- ✅ Ensure no horizontal scroll
- ✅ Use `maxWidth: '100vw'` on containers
- ✅ Add `wordBreak: 'break-word'` for long text

## 📞 Getting Help

### Common Issues
Check `DEPLOYMENT.md` troubleshooting section

### Documentation
- This file (SETUP.md)
- README.md (project overview)
- DEPLOYMENT.md (deployment guide)

### Contact
- Email: info@amigosdelmar.com
- GitHub Issues (if using GitHub)

## ✅ Checklist for New Developers

- [ ] Node.js 18+ installed
- [ ] Project dependencies installed (`npm install`)
- [ ] `.env` file created and configured
- [ ] Development server runs (`npm run dev`)
- [ ] Can access site at localhost:3000
- [ ] Understand folder structure
- [ ] Know how to add translations
- [ ] Can run build successfully
- [ ] Read README.md
- [ ] Familiar with Git workflow

## 🎉 You're Ready!

You should now be able to:
- ✅ Run the development server
- ✅ Make changes and see them instantly
- ✅ Add new pages and components
- ✅ Update translations
- ✅ Customize colors and styles
- ✅ Build for production
- ✅ Troubleshoot common issues

**Happy coding! 🚀**

---

**Next Steps:**
1. Explore the codebase
2. Make a small change
3. Test your changes
4. Read DEPLOYMENT.md when ready to deploy

**Need help?** Check README.md or contact: info@amigosdelmar.com

