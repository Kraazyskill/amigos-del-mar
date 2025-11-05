# 🎬 Video Setup Guide - Complete Instructions

## ✅ Video Sections Added!

I've added video placeholder sections to all 4 pages:
1. ✅ Home page
2. ✅ Banco Chinchorro page
3. ✅ Mahahual page
4. ✅ Contact page

---

## 📁 Where to Place Videos

Save your video files here:
```
E:\Amigos del Mar\public\videos\
```

I've created the folder for you!

---

## 🎥 Video Files Needed

You need **4 videos total** (one for each page):

### 1. Home Page Video
**File name:** `home-hero.mp4`  
**Content:** Overview of diving in Mahahual, best moments, happy divers  
**Duration:** 30-60 seconds  
**Optional thumbnail:** `home-hero-thumbnail.jpg`

### 2. Banco Chinchorro Video
**File name:** `banco-chinchorro.mp4`  
**Content:** Diving at Chinchorro, shipwrecks, sharks, wall dives  
**Duration:** 1-2 minutes  
**Optional thumbnail:** `banco-chinchorro-thumbnail.jpg`

### 3. Mahahual Video
**File name:** `mahahual.mp4`  
**Content:** Local reef diving, turtles, coral formations  
**Duration:** 1-2 minutes  
**Optional thumbnail:** `mahahual-thumbnail.jpg`

### 4. Contact Page Video
**File name:** `contact.mp4`  
**Content:** About your company, boat, equipment, team  
**Duration:** 30-90 seconds  
**Optional thumbnail:** `contact-thumbnail.jpg`

---

## 🎯 Two Options to Add Videos

### Option A: Self-Hosted Videos (MP4 Files)

**Step 1:** Place your MP4 files in `/public/videos/`

**Step 2:** Update each page - uncomment these lines:

**Home Page** (`app/page.tsx` around line 275):
```typescript
// Remove the comment marks from this line:
<VideoPlayer src="/videos/home-hero.mp4" poster="/videos/home-hero-thumbnail.jpg" />
```

**Banco Chinchorro** (`app/banco-chinchorro/page.tsx` around line 212):
```typescript
<VideoPlayer src="/videos/banco-chinchorro.mp4" poster="/videos/banco-chinchorro-thumbnail.jpg" />
```

**Mahahual** (`app/mahahual/page.tsx` around line 203):
```typescript
<VideoPlayer src="/videos/mahahual.mp4" poster="/videos/mahahual-thumbnail.jpg" />
```

**Contact** (`app/contact/page.tsx` around line 168):
```typescript
<VideoPlayer src="/videos/contact.mp4" poster="/videos/contact-thumbnail.jpg" />
```

**Step 3:** Delete the placeholder div (the blue box with "Your Video Goes Here")

---

### Option B: YouTube Videos (Embed)

**Step 1:** Upload videos to YouTube

**Step 2:** Get the video ID from the URL:
```
YouTube URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ
Video ID: dQw4w9WgXcQ (the part after v=)
```

**Step 3:** Update each page - uncomment and add your ID:

**Home Page**:
```typescript
<YouTubeEmbed videoId="YOUR_VIDEO_ID" title="Diving in Mahahual" />
```

**Banco Chinchorro**:
```typescript
<YouTubeEmbed videoId="YOUR_VIDEO_ID" title="Banco Chinchorro Diving" />
```

**Mahahual**:
```typescript
<YouTubeEmbed videoId="YOUR_VIDEO_ID" title="Mahahual Reef Diving" />
```

**Contact**:
```typescript
<YouTubeEmbed videoId="YOUR_VIDEO_ID" title="About Amigos del Mar" />
```

**Step 4:** Delete the placeholder div

---

## 🔧 How to Activate Videos

### For Self-Hosted (MP4):

**1. Open the page file** (e.g., `app/page.tsx`)

**2. Find the video section** (search for "Video Section")

**3. You'll see this:**
```typescript
{/* Replace with your video component once uploaded */}
{/* <VideoPlayer src="/videos/home-hero.mp4" poster="/videos/home-hero-thumbnail.jpg" /> */}

{/* Placeholder - Remove this when you add your video */}
<div className="w-full h-full flex items-center...">
  ...
</div>
```

**4. Change to this:**
```typescript
{/* Video player with your video */}
<VideoPlayer src="/videos/home-hero.mp4" poster="/videos/home-hero-thumbnail.jpg" />
```

**5. Delete everything from `{/* Placeholder...` to the closing `</div>`**

**6. Add the import** at the top of the file:
```typescript
import VideoPlayer from '@/components/ui/VideoPlayer'
```

---

### For YouTube Embed:

**1. Open the page file**

**2. Find the video section**

**3. Change to:**
```typescript
<YouTubeEmbed videoId="dQw4w9WgXcQ" title="Your Title" />
```

**4. Delete the placeholder**

**5. Add the import:**
```typescript
import YouTubeEmbed from '@/components/ui/YouTubeEmbed'
```

---

## 📝 Complete Example

### Home Page with Self-Hosted Video:

**File:** `app/page.tsx`

**Add import at top:**
```typescript
import VideoPlayer from '@/components/ui/VideoPlayer'
```

**Replace video section:**
```typescript
<div className="aspect-video rounded-xl overflow-hidden shadow-heavy">
  <VideoPlayer 
    src="/videos/home-hero.mp4" 
    poster="/videos/home-hero-thumbnail.jpg"
    controls={true}
  />
</div>
```

---

### Home Page with YouTube:

**Add import:**
```typescript
import YouTubeEmbed from '@/components/ui/YouTubeEmbed'
```

**Replace video section:**
```typescript
<div className="aspect-video rounded-xl overflow-hidden shadow-heavy">
  <YouTubeEmbed 
    videoId="dQw4w9WgXcQ" 
    title="Diving in Mahahual"
  />
</div>
```

---

## 🎨 Video Specifications

### For Best Quality:

**Resolution:**
- 1920x1080 (1080p) - Best
- 1280x720 (720p) - Good
- Minimum: 854x480 (480p)

**Format:**
- MP4 with H.264 codec
- AAC audio

**File Size:**
- Target: 10-30MB
- Maximum: 50MB
- Compress if larger!

**Aspect Ratio:**
- 16:9 (widescreen) - Required

---

## 🛠️ Video Compression Tools

### Free Tools:
- **HandBrake** - [handbrake.fr](https://handbrake.fr/)
  - Best free tool
  - Preset: "Web/Gmail Large 3 Minutes 720p30"
  
- **CloudConvert** - [cloudconvert.com](https://cloudconvert.com/)
  - Online converter
  - No download needed

### Online Tools:
- **Clipchamp** - [clipchamp.com](https://clipchamp.com/)
- **Kapwing** - [kapwing.com](https://kapwing.com/)

### Settings to Use:
- Format: MP4
- Codec: H.264
- Resolution: 1280x720 or 1920x1080
- Bitrate: 2-5 Mbps
- Audio: AAC, 128kbps

---

## 📸 Creating Thumbnails

### Why Thumbnails?
- Shows while video loads
- Lets visitors see what video is about
- Better user experience

### How to Create:
1. **Play video** to a good moment
2. **Screenshot** that frame
3. **Save as JPG** (same name as video + `-thumbnail`)
4. Example: `home-hero-thumbnail.jpg`

---

## ✅ Quick Checklist

**Self-Hosted Videos:**
- [ ] Create/edit 4 videos
- [ ] Compress to under 50MB each
- [ ] Save as MP4 format
- [ ] Place in `/public/videos/`
- [ ] Create 4 thumbnails (optional)
- [ ] Update each page file
- [ ] Add VideoPlayer import
- [ ] Remove placeholder divs
- [ ] Test in browser

**YouTube Videos:**
- [ ] Upload 4 videos to YouTube
- [ ] Get 4 video IDs
- [ ] Update each page file
- [ ] Add YouTubeEmbed import
- [ ] Add video IDs
- [ ] Remove placeholder divs
- [ ] Test in browser

---

## 🎬 Where Videos Appear

### Home Page
**Location:** After destinations, before final CTA  
**Purpose:** Showcase overall diving experience

### Banco Chinchorro
**Location:** After introduction, before features  
**Purpose:** Show what Chinchorro diving looks like

### Mahahual
**Location:** After introduction, before features  
**Purpose:** Showcase local reef diving

### Contact
**Location:** After hero, before contact form  
**Purpose:** About us / why choose us

---

## 💡 Need Help?

**Videos too large?**
- Compress with HandBrake
- Target 720p instead of 1080p
- Or use YouTube (easier for large files)

**Videos not playing?**
- Check file format is MP4
- Try opening video in browser directly: `http://localhost:3000/videos/your-video.mp4`
- Make sure file name matches exactly

**Prefer YouTube?**
- Much easier for large files
- No storage limits
- Professional player
- Just need the video ID!

---

## 🚀 Quick Start

**Fastest way (YouTube):**
1. Upload videos to YouTube
2. Get video IDs
3. Tell me the IDs
4. I'll update all pages for you!

**Self-hosted:**
1. Place 4 MP4 files in `/public/videos/`
2. Tell me when done
3. I'll activate them on all pages!

---

**Your video sections are ready and waiting!** 🎉🎬

Just add your videos and they'll display beautifully on all pages!

