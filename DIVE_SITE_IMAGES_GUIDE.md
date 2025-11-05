# 📸 Dive Site Images - Current Mapping

## 🏝️ Mahahual Dive Sites (9 sites)

Current images used from your gallery:

1. **40 Cañones** → `/gallery/coral.jpg`
2. **Acuari** → `/gallery/reef.jpg`
3. **Chinchorrito** → `/gallery/coralswithfish.jpg`
4. **Escalones** → `/gallery/orangereef.jpg`
5. **Faro Viejo** → `/gallery/minifish.jpg`
6. **La Rampa** → `/gallery/turtle.jpg`
7. **Los Arcos** → `/gallery/moraine.jpg`
8. **Puerto Angel** → `/gallery/fishes.jpg`
9. **Rio Bermejo** → `/gallery/shark.jpg`

---

## 🌊 Banco Chinchorro Dive Sites (10 sites)

Current images used from your gallery:

1. **Aquario 1 & 2** → `/gallery/seaturtle.jpg`
2. **Baliza** → `/gallery/coralswithfish.jpg`
3. **Gata** → `/gallery/littlesharks.jpg`
4. **El Selitarie** → `/gallery/sharkinreef.jpg`
5. **Gonzales 1 & 2** → `/gallery/reef.jpg`
6. **Gran Mure** → `/gallery/sharkback.jpg`
7. **Reina del Sur** → `/gallery/turtleinreef.jpg`
8. **SS 40 Cannons** → `/gallery/boatwreck.jpg`
9. **SS Inger Skou** → `/gallery/divercamaramen.jpg`
10. **Teresitas** → `/gallery/fishswarm.jpg`

---

## 🚤 Boat Information Added

**La Chula** boat section now appears on BOTH pages with:
- Vessel specifications
- Engine details
- Capacity (14 divers + crew)
- Tank storage (30 racks + 2 extra)
- Safety equipment
- Professional description

---

## 🔄 To Replace Images

If you have specific photos for each dive site:

### Option 1: Use Existing Gallery Photos
The images are already linked from your `/gallery/` folder. Just make sure each image matches the dive site well.

### Option 2: Add New Site-Specific Photos

**1. Create a folder:**
```
E:\Amigos del Mar\public\dive-sites\
  ├── mahahual\
  └── banco-chinchorro\
```

**2. Place site-specific photos:**
```
public/dive-sites/
  ├── mahahual/
  │   ├── 40-canones.jpg
  │   ├── acuari.jpg
  │   ├── chinchorrito.jpg
  │   etc.
  └── banco-chinchorro/
      ├── aquario.jpg
      ├── baliza.jpg
      ├── gata.jpg
      etc.
```

**3. Update the pages:**

**Mahahual** (`app/mahahual/page.tsx`):
```typescript
{
  name: '40 Cañones',
  image: '/dive-sites/mahahual/40-canones.jpg',  // ← New path
  ...
}
```

**Banco Chinchorro** (`app/banco-chinchorro/page.tsx`):
```typescript
{
  name: 'Aquario 1 & 2',
  image: '/dive-sites/banco-chinchorro/aquario.jpg',  // ← New path
  ...
}
```

---

## ✏️ To Update Site Details

Edit the dive site descriptions, depths, or marine life in:
- **Mahahual**: `app/mahahual/page.tsx` (line 34+)
- **Banco Chinchorro**: `app/banco-chinchorro/page.tsx` (line 34+)

Each site has:
- `name` - Dive site name
- `depth` - Depth range
- `level` - Difficulty (Beginner/Intermediate/Advanced/All Levels)
- `description` - What makes it special
- `marine` - Marine life you'll see
- `season` - Best time to visit
- `image` - Photo path

---

## 🎯 Quick Reference

**File locations:**
- Mahahual page: `app/mahahual/page.tsx`
- Banco Chinchorro page: `app/banco-chinchorro/page.tsx`
- Current images: `public/gallery/`
- New images: `public/dive-sites/` (if you create it)

**What's updated:**
- ✅ Mahahual: 9 real dive sites
- ✅ Banco Chinchorro: 10 real dive sites
- ✅ Boat section: Added to both pages
- ✅ All using your gallery photos
- ✅ Ready to customize further

---

**Your tour pages now show all your actual dive sites!** 🎉🤿

