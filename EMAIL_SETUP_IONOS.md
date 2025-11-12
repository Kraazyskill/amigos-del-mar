# 📧 IONOS Email Setup Guide for Contact Form

## ✅ Perfect Choice!

Using your IONOS email (hola@amigosdelmar.net) is ideal because:
- ✅ Professional - emails come from your domain
- ✅ Reliable - IONOS has excellent deliverability
- ✅ Already paid for - no extra costs
- ✅ No daily limits
- ✅ Better for business credibility

---

## 🔑 Step 1: Get Your IONOS SMTP Settings

### Option A: Use Your Regular Email Password
- **Email:** heiko@amigosdelmar.net
- **Password:** Your regular IONOS email password

### Option B: Create an App Password (More Secure - Recommended)
1. Log into IONOS: https://www.ionos.com/
2. Go to **Email & Office** → **Email Settings**
3. Select your email: heiko@amigosdelmar.net
4. Look for **App Passwords** or **Application-Specific Passwords**
5. Create new password for "Website Contact Form"
6. Save the generated password

---

## 📝 Step 2: IONOS SMTP Settings

Your IONOS email uses these settings:

```
SMTP Server: smtp.ionos.com
Port: 587 (TLS - Recommended)
Security: STARTTLS
Authentication: Required
Username: heiko@amigosdelmar.net
Password: [Your IONOS email password]
```

**Note:** If your IONOS account is from Germany/Europe, you might use:
- Server: `smtp.ionos.de`
- Port: `587` or `465` (SSL)

---

## 🚀 Step 3: Add to Vercel Environment Variables

### In Vercel Dashboard:

1. Go to your project: https://vercel.com/
2. Click **Settings** → **Environment Variables**
3. Add these 3 variables:

| Variable Name | Value |
|--------------|-------|
| `SMTP_HOST` | `smtp.ionos.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `heiko@amigosdelmar.net` |
| `SMTP_PASSWORD` | `[your IONOS password]` |
| `SMTP_FROM_EMAIL` | `heiko@amigosdelmar.net` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `5219841516758` |

4. **Important:** Set environment for **All Environments** (Production, Preview, Development)
5. Click **Save**

---

## 🔧 Step 4: Update API Route Code

The API route needs to be updated to use IONOS settings instead of Gmail:

**File:** `app/api/contact/route.ts`

Change from:
```typescript
host: 'smtp.gmail.com',
port: 587,
auth: {
  user: process.env.GMAIL_USER,
  pass: process.env.GMAIL_APP_PASSWORD,
}
```

To:
```typescript
host: process.env.SMTP_HOST || 'smtp.ionos.com',
port: parseInt(process.env.SMTP_PORT || '587'),
auth: {
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASSWORD,
}
```

And change the "from" address:
```typescript
from: process.env.SMTP_FROM_EMAIL || 'hola@amigosdelmar.net',
```

---

## ✅ Step 5: Test Locally (Optional)

To test on your computer before deploying:

1. Create `.env.local` file in project root
2. Add:
```env
SMTP_HOST=smtp.ionos.com
SMTP_PORT=587
SMTP_USER=heiko@amigosdelmar.net
SMTP_PASSWORD=your_ionos_password_here
SMTP_FROM_EMAIL=heiko@amigosdelmar.net
NEXT_PUBLIC_WHATSAPP_NUMBER=5219841516758
```
3. Restart dev server: `npm run dev`
4. Test contact form on `localhost:3000/contact`
5. Check if email arrives at heiko@amigosdelmar.net

**⚠️ Important:** 
- Never commit `.env.local` to GitHub (already in `.gitignore`)
- Delete `.env.local` after testing if you want

---

## 🐛 Troubleshooting

### Problem: "Connection Refused" or "Authentication Failed"

**Solutions:**
1. **Check SMTP server:**
   - Try `smtp.ionos.com`
   - If doesn't work, try `smtp.ionos.de`
   - Or check IONOS dashboard for correct server

2. **Check Port:**
   - Try `587` (TLS - most common)
   - If doesn't work, try `465` (SSL)

3. **Password Issues:**
   - Make sure using correct password
   - No spaces before/after password
   - Try creating app password in IONOS

4. **Email Settings in IONOS:**
   - Make sure SMTP is enabled for your account
   - Check if "Allow less secure apps" needs to be enabled

### Problem: Emails Not Arriving

**Solutions:**
1. Check IONOS email spam folder
2. Check "Sent" folder in IONOS webmail
3. Verify `SMTP_FROM_EMAIL` matches your IONOS email exactly
4. Check Vercel deployment logs for errors

### Problem: "554 Message rejected"

**Solutions:**
- IONOS requires "From" address to match authenticated email
- Make sure `from:` in code uses `heiko@amigosdelmar.net`

---

## 📋 Quick Checklist

Before deploying:
- [ ] IONOS password verified (can log into webmail)
- [ ] Environment variables added to Vercel
- [ ] API route updated to use new env variables
- [ ] Code committed to GitHub
- [ ] Vercel redeployed
- [ ] Test form submission
- [ ] Check email received at heiko@amigosdelmar.net

---

## 🎯 What Happens When Someone Submits the Form?

1. Customer fills out form on website
2. Form sends data to `/api/contact`
3. API connects to IONOS SMTP server
4. Email sent from: `heiko@amigosdelmar.net`
5. Email sent to: `heiko@amigosdelmar.net`
6. Reply-To set to: customer's email
7. You receive email in IONOS inbox
8. Click "Reply" to respond to customer

---

## 💡 Pro Tips

1. **Test Email First:**
   - Log into IONOS webmail
   - Send yourself a test email
   - Confirms SMTP is working

2. **Save Credentials Securely:**
   - Use password manager
   - Never share SMTP password

3. **Monitor Form Submissions:**
   - Check IONOS inbox regularly
   - Set up email forwarding if needed
   - Add email notifications on phone

4. **Backup Plan:**
   - Keep WhatsApp button active
   - Include phone number on contact page
   - Customers have multiple ways to reach you

---

## 🚀 Ready to Deploy!

Once you've:
1. ✅ Updated the API route code
2. ✅ Added environment variables to Vercel
3. ✅ Deployed to Vercel

Your contact form will send emails directly to your IONOS inbox!

**Estimated Setup Time:** 10 minutes  
**Cost:** FREE (already included in IONOS hosting)

---

## 📞 Need Help?

Common IONOS resources:
- IONOS Help Center: https://www.ionos.com/help/
- Email Settings: Login → Email & Office → Email Settings
- Support: Available in IONOS dashboard

---

**Last Updated:** November 12, 2025  
**Status:** Ready to implement ✅

