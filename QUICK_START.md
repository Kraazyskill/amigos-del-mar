# ⚡ Quick Start - Get Running in 5 Minutes!

## 🎯 Goal
Get the website running on your computer in under 5 minutes.

## ✅ Prerequisites Check

Do you have Node.js installed?
```bash
node --version
```

**If you see a version number (v18.x or higher):** ✅ You're ready!  
**If you see an error:** Download Node.js from [nodejs.org](https://nodejs.org)

---

## 🚀 4 Simple Steps

### Step 1: Open Terminal/Command Prompt

**Windows:**
- Press `Win + R`
- Type `cmd` or `powershell`
- Press Enter

**macOS:**
- Press `Cmd + Space`
- Type `terminal`
- Press Enter

### Step 2: Navigate to Project

```bash
cd "E:\Amigos del Mar"
```

### Step 3: Install Dependencies

```bash
npm install
```

⏱️ This takes about 30-60 seconds. You'll see a progress bar.

### Step 4: Start the Website

```bash
npm run dev
```

✅ **Success!** You should see:
```
- Local:        http://localhost:3000
- ready started server on [::]:3000
```

---

## 🌐 View Your Website

Open your browser and go to:
```
http://localhost:3000
```

**🎉 Congratulations!** Your website is running!

---

## 🎨 What You'll See

- **Home page** with hero section and features
- **Navigation** at the top
- **Language switcher** (EN/ES) in header
- **WhatsApp button** in bottom-right
- Click around and explore!

---

## 🛠️ Making Changes

The website will **auto-update** when you save files!

### Try This:
1. Open `app/page.tsx` in a code editor
2. Find the text "Explore the Caribbean's Hidden Depths"
3. Change it to "Welcome to Amigos del Mar"
4. Save the file
5. 🎉 Your browser refreshes automatically!

---

## 📝 Next Steps

### Update Contact Information

1. **Copy the environment file:**
```bash
copy .env.example .env
```

2. **Edit `.env` file** with your info:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=529831234567
NEXT_PUBLIC_CONTACT_EMAIL=info@amigosdelmar.com
NEXT_PUBLIC_CONTACT_PHONE=+52 983 123 4567
```

3. **Restart the server:**
- Press `Ctrl + C` to stop
- Run `npm run dev` again

### Replace Images

1. Put your photos in the `/public` folder
2. Update image URLs in the page files
3. Example: Change `https://images.unsplash.com/...` to `/your-image.jpg`

---

## 🎯 Common Tasks

### Change Text
Edit files in:
- `lib/translations/locales/en.ts` (English)
- `lib/translations/locales/es.ts` (Spanish)

### Change Colors
Edit: `tailwind.config.ts`

### Add a New Page
1. Create folder: `app/your-page/`
2. Create file: `app/your-page/page.tsx`
3. Done! Visit `/your-page`

---

## 🚫 Stopping the Server

Press `Ctrl + C` in the terminal

---

## ❓ Troubleshooting

### "Port 3000 is already in use"
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <number> /F

# Or use a different port
npm run dev -- -p 3001
```

### "Cannot find module"
```bash
npm install
```

### "Command not found"
Make sure Node.js is installed: [nodejs.org](https://nodejs.org)

---

## 📚 Learn More

- **Full Setup Guide:** Read `SETUP.md`
- **Project Overview:** Read `README.md`
- **Deploy to Web:** Read `DEPLOYMENT.md`

---

## 🎉 You're Ready!

Your diving website is running locally! 

**What's working:**
- ✅ All 6 pages
- ✅ Language switching (EN/ES)
- ✅ Mobile-responsive design
- ✅ Contact form
- ✅ Gallery with lightbox
- ✅ WhatsApp button
- ✅ Smooth animations

**Next:** Replace placeholder images with your real diving photos!

---

## 📞 Need Help?

- Check `SETUP.md` for detailed instructions
- Check `README.md` for project info
- Email: info@amigosdelmar.com

---

**Happy diving! 🌊🤿**

