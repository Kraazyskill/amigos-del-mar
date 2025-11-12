# 📧 Email Setup Guide

## Contact Form Email Configuration

Your contact form is now set up to send emails to **hola@amigosdelmar.net** using Resend.

### 🚀 Quick Setup (5 minutes)

#### Step 1: Create a Resend Account
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Verify your email address

#### Step 2: Get Your API Key
1. Log in to Resend dashboard
2. Go to **API Keys** section
3. Click **Create API Key**
4. Name it "Amigos del Mar Production"
5. Copy the API key (starts with `re_`)

#### Step 3: Add API Key to Your Project

Create a file called `.env.local` in your project root with:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
NEXT_PUBLIC_WHATSAPP_NUMBER=529841516758
```

**Important:** Replace `re_your_actual_api_key_here` with your actual Resend API key!

#### Step 4: Restart Your Server

If you're running locally:
```bash
# Stop the server (Ctrl+C in PowerShell)
# Then restart:
npm run dev
```

If deployed on Vercel:
1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add:
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key
5. Click **Save**
6. Redeploy your site

---

## 📧 How It Works

When someone submits the contact form:

1. ✅ Form validates required fields
2. ✅ Sends data to `/api/contact` endpoint
3. ✅ API sends beautifully formatted email to **hola@amigosdelmar.net**
4. ✅ Email includes:
   - Customer's name, email, phone
   - Diving preferences (certification, interests)
   - Number of divers and preferred date
   - Their message
5. ✅ You can reply directly to the customer (Reply-To is set to their email)

---

## 🧪 Testing the Form

### Before Setting Up API Key
- Form will show error (expected - no API key yet)

### After Setting Up API Key
1. Fill out the contact form
2. Submit it
3. Check **hola@amigosdelmar.net** inbox
4. You should receive a formatted email within seconds!

---

## 🔧 Troubleshooting

### "Failed to send email" error
- Check that your `.env.local` file exists
- Verify the API key is correct (starts with `re_`)
- Restart your dev server after adding `.env.local`

### Email not arriving
- Check your spam folder
- Verify the Resend dashboard shows the email was sent
- Make sure hola@amigosdelmar.net is correct

### For Production (Vercel)
- Make sure environment variable is added in Vercel dashboard
- Redeploy after adding the environment variable

---

## 🎨 Email Format

Customers will receive a professional email with:
- Company branding colors
- Organized sections (Contact Info, Diving Details, Message)
- Easy-to-read formatting
- Their email as Reply-To address (so you can reply directly)

---

## 💰 Cost

**Resend Free Tier:**
- 100 emails/day
- 3,000 emails/month
- Perfect for a dive shop!

If you need more, paid plans start at $20/month for 50,000 emails.

---

## 🔐 Security

- ✅ API key stored in environment variables (not in code)
- ✅ Form validation on frontend and backend
- ✅ No email exposed to public
- ✅ Reply-To set to customer's email for easy responses

---

## 📝 Next Steps

1. Create Resend account
2. Get API key
3. Add to `.env.local` file
4. Restart server
5. Test the form!

**Need help?** The API route is at: `app/api/contact/route.ts`

