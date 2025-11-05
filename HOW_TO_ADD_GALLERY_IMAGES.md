# 📸 How to Add Gallery Images

## 📁 Step 1: Place Your Images

Put your diving photos in the **`public/gallery`** folder:

```
E:\Amigos del Mar\public\gallery\
```

### Organization Options:

**Option A - All in one folder:**
```
public/gallery/
  ├── photo1.jpg
  ├── photo2.jpg
  ├── photo3.jpg
  └── photo4.jpg
```

**Option B - Organized by category (recommended):**
```
public/gallery/
  ├── banco-chinchorro/
  │   ├── 40-cannons.jpg
  │   ├── the-wall.jpg
  │   └── shipwreck.jpg
  ├── mahahual/
  │   ├── el-arco.jpg
  │   ├── reef.jpg
  │   └── beach.jpg
  └── marine-life/
      ├── turtle.jpg
      ├── rays.jpg
      └── fish-school.jpg
```

---

## 🎯 Step 2: Update Gallery Page

Edit: `app/gallery/page.tsx`

**Find the `galleryItems` array (around line 13):**

```typescript
const galleryItems = [
  {
    type: 'photo',
    category: 'chinchorro',
    src: 'https://images.unsplash.com/...',  // ← Replace these!
    alt: 'Banco Chinchorro Coral Reef',
    location: 'Banco Chinchorro',
  },
  // ... more items
]
```

**Replace with your images:**

```typescript
const galleryItems = [
  {
    type: 'photo',
    category: 'chinchorro',
    src: '/gallery/banco-chinchorro/40-cannons.jpg',  // Your image!
    alt: '40 Cannons Dive Site',
    location: 'Banco Chinchorro',
  },
  {
    type: 'photo',
    category: 'chinchorro',
    src: '/gallery/banco-chinchorro/the-wall.jpg',
    alt: 'The Wall Dive Site',
    location: 'Banco Chinchorro',
  },
  {
    type: 'photo',
    category: 'mahahual',
    src: '/gallery/mahahual/el-arco.jpg',
    alt: 'El Arco Reef',
    location: 'Mahahual',
  },
  {
    type: 'photo',
    category: 'marine',
    src: '/gallery/marine-life/turtle.jpg',
    alt: 'Sea Turtle',
    location: 'Caribbean Sea',
  },
  // Add as many as you want!
]
```

---

## 📝 Complete Example

Here's a full example with 6 photos:

```typescript
const galleryItems = [
  // Banco Chinchorro Photos
  {
    type: 'photo',
    category: 'chinchorro',
    src: '/gallery/chinchorro-reef.jpg',
    alt: 'Pristine coral reef at Banco Chinchorro',
    location: 'Banco Chinchorro',
  },
  {
    type: 'photo',
    category: 'chinchorro',
    src: '/gallery/shipwreck.jpg',
    alt: 'Historic shipwreck with cannons',
    location: 'Banco Chinchorro - 40 Cannons',
  },
  
  // Mahahual Photos
  {
    type: 'photo',
    category: 'mahahual',
    src: '/gallery/mahahual-beach.jpg',
    alt: 'Beautiful Mahahual beach',
    location: 'Mahahual',
  },
  {
    type: 'photo',
    category: 'mahahual',
    src: '/gallery/local-reef.jpg',
    alt: 'Colorful local reef diving',
    location: 'Mahahual - El Arco',
  },
  
  // Marine Life Photos
  {
    type: 'photo',
    category: 'marine',
    src: '/gallery/sea-turtle.jpg',
    alt: 'Green sea turtle swimming',
    location: 'Caribbean Sea',
  },
  {
    type: 'photo',
    category: 'marine',
    src: '/gallery/tropical-fish.jpg',
    alt: 'School of tropical fish',
    location: 'Mesoamerican Reef',
  },
]
```

---

## 🎨 Image Specifications

### Recommended Settings:

**Format:**
- JPG for photos (smaller file size)
- PNG if you need transparency

**Dimensions:**
- **Width**: 1200-1600px
- **Height**: 900-1200px
- **Aspect Ratio**: 4:3 or 3:2 (horizontal)

**File Size:**
- **Target**: 200-500KB per image
- **Maximum**: 1MB
- Use tools like [TinyPNG](https://tinypng.com) to compress

**Quality:**
- High enough for viewing
- Compressed for fast loading
- Next.js will auto-optimize them!

---

## 🏷️ Categories Explained

Use these category values for filtering:

- **`'chinchorro'`** - Shows in "Banco Chinchorro" filter
- **`'mahahual'`** - Shows in "Mahahual" filter
- **`'marine'`** - Shows in "Marine Life" filter

You can also use:
- **`'photos'`** - General photos
- **`'videos'`** - For video files (if you add video support)

---

## ✅ Quick Checklist

- [ ] Create `public/gallery/` folder
- [ ] Place your photos inside
- [ ] Open `app/gallery/page.tsx`
- [ ] Find the `galleryItems` array
- [ ] Replace placeholder URLs with `/gallery/your-image.jpg`
- [ ] Update `alt` text to describe each image
- [ ] Update `location` for each photo
- [ ] Save the file
- [ ] Refresh browser - images appear!

---

## 💡 Pro Tips

### Naming Convention:
Use descriptive, lowercase names with hyphens:
```
✅ Good: sea-turtle-swimming.jpg
✅ Good: banco-chinchorro-reef.jpg
❌ Avoid: IMG_1234.jpg
❌ Avoid: Photo 1.jpg (spaces)
```

### Alt Text:
Be descriptive for SEO and accessibility:
```
✅ Good: "Colorful coral reef with tropical fish at Banco Chinchorro"
✅ Good: "Scuba diver exploring shipwreck with cannons"
❌ Avoid: "Photo 1"
```

### File Size:
Compress images before uploading:
- Use [TinyPNG](https://tinypng.com)
- Or [Squoosh](https://squoosh.app)
- Or [ImageOptim](https://imageoptim.com) (Mac)

### Add More Categories:
You can create custom categories by editing the filter buttons in `app/gallery/page.tsx`

---

## 🎬 Adding Videos (Optional)

Want to add videos too? Update an item like this:

```typescript
{
  type: 'video',  // Change to 'video'
  category: 'chinchorro',
  src: '/gallery/dive-video.mp4',  // Video file
  thumbnail: '/gallery/dive-video-thumb.jpg',  // Thumbnail image
  alt: 'Diving at Banco Chinchorro',
  location: 'Banco Chinchorro',
}
```

---

## 📞 Need Help?

If images don't show:
1. Check file path exactly matches (case-sensitive!)
2. Make sure images are in `public/gallery/`
3. Try hard refresh: `Ctrl + Shift + R`
4. Check browser console for errors (F12)

---

## 🎯 Example: Adding 20 Photos

```typescript
const galleryItems = [
  // Banco Chinchorro (8 photos)
  {
    type: 'photo',
    category: 'chinchorro',
    src: '/gallery/chinchorro/40-cannons-1.jpg',
    alt: 'Coral-covered cannons at famous dive site',
    location: 'Banco Chinchorro - 40 Cannons',
  },
  {
    type: 'photo',
    category: 'chinchorro',
    src: '/gallery/chinchorro/40-cannons-2.jpg',
    alt: 'Ancient Spanish galleon cannons',
    location: 'Banco Chinchorro - 40 Cannons',
  },
  // ... add more Chinchorro photos
  
  // Mahahual (7 photos)
  {
    type: 'photo',
    category: 'mahahual',
    src: '/gallery/mahahual/el-arco-1.jpg',
    alt: 'Natural coral arch formation',
    location: 'Mahahual - El Arco',
  },
  // ... add more Mahahual photos
  
  // Marine Life (5 photos)
  {
    type: 'photo',
    category: 'marine',
    src: '/gallery/marine/sea-turtle.jpg',
    alt: 'Green sea turtle gliding through water',
    location: 'Caribbean Sea',
  },
  // ... add more marine life photos
]
```

---

**Your gallery is ready for your amazing diving photos!** 🎉📸

Just place images in `/public/gallery/` and update the gallery page!

