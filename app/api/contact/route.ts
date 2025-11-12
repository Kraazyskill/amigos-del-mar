import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, language, certification, interests, divers, date, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format the interests array
    const formattedInterests = interests && interests.length > 0 
      ? interests.join(', ') 
      : 'Not specified'

    // Create transporter using IONOS SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ionos.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER, // hola@amigosdelmar.net
        pass: process.env.SMTP_PASSWORD, // IONOS email password
      },
    })

    // Email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0B4F6C;">New Contact Form Submission</h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0B4F6C; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        </div>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0B4F6C; margin-top: 0;">Diving Details</h3>
          <p><strong>Preferred Language:</strong> ${language === 'es' ? 'Spanish' : 'English'}</p>
          <p><strong>Certification Level:</strong> ${certification}</p>
          <p><strong>Interests:</strong> ${formattedInterests}</p>
          <p><strong>Number of Divers:</strong> ${divers || '1'}</p>
          <p><strong>Preferred Date:</strong> ${date || 'Flexible'}</p>
        </div>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0B4F6C; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>

        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          This email was sent from the Amigos del Mar contact form.
        </p>
      </div>
    `

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || 'heiko@amigosdelmar.net',
      to: 'heiko@amigosdelmar.net',
      replyTo: email,
      subject: `New Contact Form: ${name}`,
      html: emailHtml,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
