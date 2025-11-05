# 📄 How to Add PDFs to Your Pages

## 📁 Step 1: Place Your PDF Files

Put your PDF files in the **`public/pdfs`** folder:

```
E:\Amigos del Mar\public\pdfs\
```

### Example Files:
```
public/pdfs/
  ├── banco-chinchorro-map.pdf
  ├── mahahual-dive-sites.pdf
  ├── dive-guide.pdf
  └── price-list.pdf
```

---

## 🎯 Step 2: How to Use PDFs

There are **3 ways** to add PDFs to your pages:

### Option 1: Download Button (Recommended)
Visitors click a button to download the PDF.

```typescript
<a 
  href="/pdfs/banco-chinchorro-map.pdf" 
  download
  className="px-6 py-3 bg-ocean-blue text-white rounded-lg"
>
  Download Dive Map (PDF)
</a>
```

### Option 2: Open in New Tab
Opens PDF in browser's PDF viewer.

```typescript
<a 
  href="/pdfs/banco-chinchorro-map.pdf" 
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-ocean-blue text-white rounded-lg"
>
  View Dive Map (PDF)
</a>
```

### Option 3: Embed PDF on Page
Shows PDF directly on the page (not recommended for mobile).

```typescript
<iframe 
  src="/pdfs/banco-chinchorro-map.pdf" 
  width="100%" 
  height="600px"
  className="rounded-lg"
/>
```

---

## 🏝️ Adding to Banco Chinchorro Page

**File:** `app/banco-chinchorro/page.tsx`

**Add a download section before or after the dive sites:**

```typescript
{/* PDF Download Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold text-ocean-deep mb-6">
      Dive Site Map & Information
    </h2>
    <p className="text-gray-600 mb-8">
      Download our detailed dive site map and guide
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="/pdfs/banco-chinchorro-map.pdf" 
        download
        className="px-8 py-4 bg-ocean-blue hover:bg-ocean-turquoise text-white rounded-lg font-semibold transition-colors"
      >
        📥 Download Dive Map (PDF)
      </a>
      <a 
        href="/pdfs/banco-chinchorro-guide.pdf" 
        download
        className="px-8 py-4 bg-white border-2 border-ocean-blue text-ocean-blue hover:bg-ocean-light rounded-lg font-semibold transition-colors"
      >
        📥 Download Dive Guide (PDF)
      </a>
    </div>
  </div>
</section>
```

---

## 🏖️ Adding to Mahahual Page

**File:** `app/mahahual/page.tsx`

**Same approach - add a download section:**

```typescript
{/* PDF Download Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold text-ocean-deep mb-6">
      Local Dive Sites Map
    </h2>
    <p className="text-gray-600 mb-8">
      Download our Mahahual dive site map
    </p>
    <a 
      href="/pdfs/mahahual-dive-sites.pdf" 
      download
      className="inline-block px-8 py-4 bg-ocean-blue hover:bg-ocean-turquoise text-white rounded-lg font-semibold transition-colors"
    >
      📥 Download Map (PDF)
    </a>
  </div>
</section>
```

---

## 🎨 Beautiful PDF Download Card

For a more premium look:

```typescript
<div className="bg-white p-8 rounded-xl shadow-medium max-w-md mx-auto">
  <div className="w-16 h-16 bg-ocean-light rounded-full flex items-center justify-center mx-auto mb-4">
    <svg className="w-8 h-8 text-ocean-blue" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"/>
      <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
    </svg>
  </div>
  <h3 className="text-xl font-bold text-ocean-deep text-center mb-2">
    Dive Site Map
  </h3>
  <p className="text-gray-600 text-center mb-6">
    Detailed map with all dive sites and depths
  </p>
  <a 
    href="/pdfs/banco-chinchorro-map.pdf" 
    download
    className="block w-full px-6 py-3 bg-ocean-blue hover:bg-ocean-turquoise text-white text-center rounded-lg font-semibold transition-colors"
  >
    Download PDF
  </a>
  <p className="text-gray-400 text-sm text-center mt-3">
    Size: 2.5 MB
  </p>
</div>
```

---

## 📋 Complete Example: Where to Insert

**In `app/banco-chinchorro/page.tsx`, add AFTER the dive sites section:**

Find this part (around line 200+):
```typescript
      </section>

      {/* Trip Details Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
```

**Insert BEFORE Trip Details:**
```typescript
      </section>

      {/* PDF DOWNLOAD SECTION - ADD THIS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ocean-deep mb-6">
            Download Resources
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pdfs/banco-chinchorro-map.pdf" 
              download
              className="px-8 py-4 bg-ocean-blue hover:bg-ocean-turquoise text-white rounded-lg font-semibold transition-colors"
            >
              📥 Download Dive Map
            </a>
          </div>
        </div>
      </section>

      {/* Trip Details Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
```

---

## 💡 Best Practices

### File Naming:
```
✅ banco-chinchorro-map.pdf
✅ mahahual-dive-sites.pdf
✅ dive-guide-2024.pdf
❌ Map.pdf (not descriptive)
❌ Dive Sites (1).pdf (has spaces)
```

### File Size:
- **Target**: Under 5MB
- **Maximum**: 10MB
- Use PDF compression tools if needed

### Mobile Friendly:
- Use download buttons instead of embedded PDFs
- Embedded PDFs don't work well on mobile
- Download is better UX

---

## ✅ Quick Checklist

- [ ] Create `public/pdfs/` folder
- [ ] Place your PDF files inside
- [ ] Choose display method (download/open/embed)
- [ ] Add code to Banco Chinchorro page
- [ ] Add code to Mahahual page
- [ ] Test download links work
- [ ] Test on mobile devices

---

## 🎯 Example: Both Pages

### Banco Chinchorro - Multiple PDFs:
```typescript
<a href="/pdfs/chinchorro-map.pdf" download>Map</a>
<a href="/pdfs/chinchorro-guide.pdf" download>Guide</a>
<a href="/pdfs/chinchorro-species.pdf" download>Marine Life</a>
```

### Mahahual - Single PDF:
```typescript
<a href="/pdfs/mahahual-sites.pdf" download>
  Download Dive Sites Map
</a>
```

---

**Your PDFs are ready to be added!** 📄🤿

Just place them in `/public/pdfs/` and I'll help you add them to the pages!

