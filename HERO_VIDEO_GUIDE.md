# 🎬 Hero Video Background Guide

## ✅ Hero Section Updated!

Your home page hero section now uses a **video background** instead of a static image!

---

## 📁 Where to Place Your Video

Save your hero video here:
```
E:\Amigos del Mar\public\videos\hero-background.mp4
```

**File name must be exactly:** `hero-background.mp4`

---

## 🎥 Video Specifications

### Critical Requirements:
- **Format**: MP4 (H.264 codec)
- **Aspect Ratio**: 16:9 (widescreen)
- **Resolution**: 1920x1080 or 1280x720
- **Duration**: 10-30 seconds (will loop)
- **File Size**: 10-30MB (compressed!)

### Video Settings:
- ✅ **Autoplay**: Yes (plays automatically)
- ✅ **Muted**: Yes (required for autoplay)
- ✅ **Loop**: Yes (replays continuously)
- ✅ **No controls**: Clean background look

---

## 🎨 What Makes a Good Hero Video

### Perfect Content:
- ✅ Underwater diving scenes
- ✅ Colorful coral reefs
- ✅ Divers swimming
- ✅ Tropical fish schools
- ✅ Sea turtles gliding
- ✅ Clear water, good visibility

### Avoid:
- ❌ Dark/murky footage
- ❌ Shaky camera work
- ❌ Too much action (distracting)
- ❌ Text or watermarks
- ❌ Low quality/pixelated

### Pro Tips:
- Use slow, smooth underwater footage
- Beautiful, cinematic shots
- Good lighting/visibility
- Stable camera (GoPro on gimbal is perfect)

---

## 📐 How It Works

The video will:
1. **Autoplay** when page loads (muted)
2. **Loop** continuously
3. **Cover** the entire hero section
4. **Play behind** the text and buttons
5. **Have a dark overlay** (70-80%) so text is readable
6. Show at **40% opacity** for subtle effect

---

## 🔧 Current Settings

**File:** `app/page.tsx` (lines 71-86)

```typescript
<video
  autoPlay          // Starts automatically
  muted             // No sound (required for autoplay)
  loop              // Replays forever
  playsInline       // Works on mobile
  className="..."
  style={{
    minWidth: '100%',
    minHeight: '100%',
  }}
>
  <source src="/videos/hero-background.mp4" type="video/mp4" />
</video>
```

**Overlay:** Dark blue gradient (70-80% opacity)  
**Video opacity:** 40% (subtle effect)

---

## 📱 Mobile Performance

The video works on:
- ✅ Desktop browsers
- ✅ Mobile browsers (iOS/Android)
- ✅ Tablets

**Note:** Video will autoplay on most devices, but some mobile browsers may require user interaction first.

---

## 🎯 Recommended Video Length

- **10-15 seconds**: Best for short, impactful clips
- **20-30 seconds**: Good for variety
- **Max 45 seconds**: Longer than this feels repetitive

The video will loop seamlessly!

---

## 🗜️ Compressing Your Video

If your video is too large:

### Using HandBrake (Free):
1. Download: [handbrake.fr](https://handbrake.fr/)
2. Load your video
3. Choose preset: "Web/Gmail Large 3 Minutes 720p30"
4. Target file size: 20-30MB
5. Export!

### Online Tool:
1. Visit: [cloudconvert.com](https://cloudconvert.com/)
2. Upload your video
3. Convert to MP4
4. Set quality: 720p, 2-3 Mbps
5. Download!

---

## 🔄 Fallback System

If the video doesn't load:
- Shows the original underwater image instead
- No blank screen
- Smooth fallback experience

---

## ✅ Quick Steps

1. **Get/create your hero video** (diving footage)
2. **Compress to 10-30MB** if needed
3. **Save as:** `hero-background.mp4`
4. **Place in:** `E:\Amigos del Mar\public\videos\`
5. **Refresh browser** - Video plays automatically! 🎉

---

## 🎬 Example Video Content

### Perfect 15-Second Hero Video:
```
0:00-0:05 - Slow pan over colorful coral reef
0:05-0:10 - Diver swimming gracefully with turtles
0:10-0:15 - School of tropical fish, zoom out to wide shot
[Loops back to start]
```

### Good 30-Second Hero Video:
```
0:00-0:10 - Underwater reef panorama
0:10-0:20 - Close-ups of marine life (turtle, fish, coral)
0:20-0:30 - Divers exploring, wide underwater vista
[Loops back to start]
```

---

## 👀 How to Test

1. **Place video** in `/public/videos/hero-background.mp4`
2. **Refresh home page**: `http://localhost:3000`
3. **Video should:**
   - Start playing automatically
   - Loop continuously
   - Play behind the text
   - Look cinematic and professional

---

## 🎨 Adjust Video Opacity

Want the video more/less visible?

**File:** `app/page.tsx` (line 76)

```typescript
className="... opacity-40"  // Current (subtle)
```

**More visible:**
```typescript
className="... opacity-60"  // Video is brighter
```

**Less visible:**
```typescript
className="... opacity-30"  // More subtle
```

---

## 🎯 Perfect Result

When done correctly:
- ✅ Beautiful underwater video plays in background
- ✅ Text remains perfectly readable
- ✅ Autoplay, muted, looping
- ✅ Works on all devices
- ✅ Professional, premium feel

---

**Your hero section is ready for a video background!** 🌊🎥

Just add `hero-background.mp4` to `/public/videos/` and it will play automatically!

