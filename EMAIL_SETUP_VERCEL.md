# 📧 Email Setup - Vercel Options

## ✨ RECOMMENDED: Gmail SMTP (100% Free!)

This is the **easiest and completely free** option. Uses Gmail to send emails.

### 🚀 Setup (5 minutes)

#### Step 1: Get Gmail App Password

1. Go to your Google Account: [https://myaccount.google.com](https://myaccount.google.com)
2. Click **Security** (left sidebar)
3. Enable **2-Step Verification** if not already enabled
4. Scroll down to **App passwords**
5. Click **App passwords**
6. Select:
   - App: **Mail**
   - Device: **Other** (type "Amigos del Mar Website")
7. Click **Generate**
8. **Copy the 16-character password** (example: `abcd efgh ijkl mnop`)

#### Step 2: Install Nodemailer

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

#### Step 3: Update the API Route

Replace the content of `app/api/contact/route.ts` with the Gmail version:

```bash
# Delete the old file
rm app/api/contact/route.ts

# Rename the Gmail version
mv app/api/contact/route-gmail.ts app/api/contact/route.ts
```

Or manually copy the content from `app/api/contact/route-gmail.ts` to `app/api/contact/route.ts`

#### Step 4: Set Environment Variables

**For Local Development:**
Create `.env.local` in your project root:

```bash
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
NEXT_PUBLIC_WHATSAPP_NUMBER=529841516758
```

**For Vercel Production:**
1. Go to [https://vercel.com](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:
   - `GMAIL_USER` = `your-email@gmail.com`
   - `GMAIL_APP_PASSWORD` = `your-16-character-app-password`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = `529841516758`
5. Click **Save**
6. Redeploy your site

#### Step 5: Test!

1. Restart your server: `npm run dev`
2. Fill out the contact form
3. Check **hola@amigosdelmar.net** inbox

---

## 🎯 Option Comparison

### Gmail SMTP (Recommended)
✅ **100% Free**  
✅ **No account needed** (use existing Gmail)  
✅ **Unlimited emails** (within Gmail limits)  
✅ **5-minute setup**  
✅ **Works perfectly with Vercel**  
❌ Gmail daily limit: ~500 emails/day (more than enough!)

### Resend (Current Setup)
✅ **Modern & Fast**  
✅ **100 emails/day free**  
✅ **Built for Vercel**  
❌ Requires account creation  
❌ Limited free tier  

### SendGrid
✅ **100 emails/day free**  
✅ **Reliable**  
❌ Requires account & verification  
❌ More complex setup  

---

## 🔧 Which Should You Use?

**Use Gmail if:**
- You want it free forever
- You already have a Gmail account
- You get less than 500 form submissions per day
- You want the simplest setup

**Use Resend if:**
- You need detailed email analytics
- You want the most modern solution
- You're okay creating a new account

---

## 📝 Quick Setup Commands

### For Gmail Option:

```bash
# 1. Install nodemailer
npm install nodemailer @types/nodemailer

# 2. Update the API route (copy content from route-gmail.ts to route.ts)

# 3. Create .env.local with your Gmail credentials

# 4. Restart server
npm run dev
```

### For Vercel Deployment:

1. Add environment variables in Vercel dashboard
2. Redeploy

---

## 🧪 Testing

After setup, test by:
1. Filling out the contact form
2. Submitting it
3. Checking hola@amigosdelmar.net inbox
4. Email should arrive within 5-10 seconds

---

## 🔐 Security Notes

✅ **Gmail App Password** is separate from your main password  
✅ **Can be revoked** anytime in Google Account settings  
✅ **Not stored in code** (only in environment variables)  
✅ **Safe for production** use  

---

## ❓ Troubleshooting

### "Invalid login" error
- Check that 2-Step Verification is enabled
- Regenerate the app password
- Make sure you copied it exactly (16 characters, no spaces in .env.local)

### "Failed to send email"
- Check .env.local file exists
- Restart dev server after creating .env.local
- Verify Gmail credentials are correct

### Email not arriving
- Check spam folder
- Verify hola@amigosdelmar.net is correct
- Try sending to a different email to test

---

## 💡 Recommendation

**Go with Gmail!** It's free, simple, and perfect for your needs. You probably already have a Gmail account, so it's just:

1. Get app password (2 minutes)
2. Add to Vercel (2 minutes)
3. Done! ✅

The current Resend setup works too, but Gmail is easier and completely free forever.

