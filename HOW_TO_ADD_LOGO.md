# 🎨 How to Add Your Custom Logo

## 📁 Step 1: Place Your Logo File

Put your logo image in the **`public`** folder:

```
E:\Amigos del Mar\public\logo.png
```

### Logo Requirements:
- **Format**: PNG (with transparent background) or JPG
- **Size**: 
  - Width: 120-200px
  - Height: 40-60px (proportional)
- **File name**: `logo.png` (or `logo.jpg`, `logo.svg`)

### Recommended Specifications:
- **Transparent background** (PNG format)
- **High resolution** (2x size for retina displays)
- **White version** if your logo has colors (since header is blue)

---

## 🔧 Step 2: Update the Header Component

The logo code is in: `components/layout/Header.tsx`

**Find these lines (around line 88-93):**

```typescript
{/* Replace with your logo image: */}
{/* <Image src="/logo.png" alt="Amigos del Mar" width={120} height={40} /> */}
<Waves size={32} className="text-white" style={{ flexShrink: 0 }} />
<span className="hidden sm:inline">Amigos del Mar</span>
<span className="sm:hidden">ADM</span>
```

**Replace with:**

```typescript
<Image 
  src="/logo.png" 
  alt="Amigos del Mar" 
  width={120} 
  height={40}
  priority
  style={{ flexShrink: 0 }}
/>
```

---

## 📝 Complete Example

**If your logo is `logo.png` (120px wide, 40px tall):**

```typescript
{/* Logo - Centered */}
<Link
  href="/"
  className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-white font-bold text-xl lg:text-2xl hover:text-ocean-light transition-colors"
  style={{ flexShrink: 0 }}
>
  <Image 
    src="/logo.png" 
    alt="Amigos del Mar" 
    width={120} 
    height={40}
    priority
    style={{ flexShrink: 0 }}
  />
</Link>
```

---
## 🎯 Different Logo Sizes

### Small Logo (Mobile):
```typescript
<Image 
  src="/logo.png" 
  alt="Amigos del Mar" 
  width={80}    // Smaller for mobile
  height={30}
  className="lg:hidden"  // Only show on mobile
  priority
/>
```

### Large Logo (Desktop):
```typescript
<Image 
  src="/logo.png" 
  alt="Amigos del Mar" 
  width={150}   // Larger for desktop
  height={50}
  className="hidden lg:block"  // Only show on desktop
  priority
/>
```

---

## 🖼️ Logo with Text

Keep text alongside your logo:

```typescript
<Link
  href="/"
  className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-white font-bold text-xl lg:text-2xl hover:text-ocean-light transition-colors"
  style={{ flexShrink: 0 }}
>
  <Image 
    src="/logo.png" 
    alt="Amigos del Mar Logo" 
    width={40} 
    height={40}
    priority
    style={{ flexShrink: 0 }}
  />
  <span className="hidden sm:inline">Amigos del Mar</span>
  <span className="sm:hidden">ADM</span>
</Link>
```

---

## ✅ Quick Checklist

- [ ] Save logo as `logo.png` (or your preferred name)
- [ ] Place in `public/` folder
- [ ] Update `src="/logo.png"` in Header.tsx
- [ ] Set correct `width` and `height` (actual logo dimensions)
- [ ] Save the file
- [ ] Refresh browser - logo appears!

---

## 🎨 Logo Tips

### White/Light Logo (Best for Blue Header):
If your logo has colors, create a **white version** for the blue header.
Save as `logo-white.png` and use:
```typescript
<Image src="/logo-white.png" alt="..." width={120} height={40} priority />
```

### SVG Logo (Scalable):
For best quality at all sizes, use SVG format:
```typescript
<Image src="/logo.svg" alt="..." width={120} height={40} priority />
```

---

## 🔄 Current Setup

**Header is now:**
- ✅ Blue background (#084e90)
- ✅ Logo centered
- ✅ White text
- ✅ Navigation split on both sides (desktop)
- ✅ Mobile menu on left, language on right (mobile)

---

## 📞 Need Help?

If your logo doesn't look right:
1. Check file name matches exactly (`logo.png`)
2. Verify it's in `/public` folder
3. Adjust `width` and `height` to match your logo
4. Try hard refresh: `Ctrl + Shift + R`

---

**Your header is ready for your logo!** 🎉

