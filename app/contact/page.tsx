'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Check, AlertCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { formatEmail, formatPhone } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  phone: string
  language: string
  certification: string
  interests: string[]
  divers: string
  date: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export default function ContactPage() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    language: 'en',
    certification: 'openwater',
    interests: [],
    divers: '1',
    date: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t('validation.required')
    } else if (formData.name.length < 2) {
      newErrors.name = t('validation.minLength', { min: '2' })
    }

    if (!formData.email.trim()) {
      newErrors.email = t('validation.required')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('validation.email')
    }

    if (!formData.message.trim()) {
      newErrors.message = t('validation.required')
    } else if (formData.message.length < 10) {
      newErrors.message = t('validation.minLength', { min: '10' })
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call - replace with actual email service
      await new Promise((resolve) => setTimeout(resolve, 2000))
      
      // In production, send to your email service:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      // if (!response.ok) throw new Error('Failed to send')

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        language: 'en',
        certification: 'openwater',
        interests: [],
        divers: '1',
        date: '',
        message: '',
      })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section
        className="relative min-h-[300px] lg:min-h-[400px] flex items-center justify-center text-white"
        style={{ maxWidth: '100vw', overflowX: 'hidden' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/80 to-ocean-deep/90 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80')] bg-cover bg-center opacity-30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
              {t('contact.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-ocean-deep mb-6">
                {t('contact.form.title')}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6" style={{ maxWidth: '100%' }}>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('contact.form.name.placeholder')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    style={{ maxWidth: '100%', boxSizing: 'border-box' }}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('contact.form.email.placeholder')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    style={{ maxWidth: '100%', boxSizing: 'border-box' }}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t('contact.form.phone.placeholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-all"
                    style={{ maxWidth: '100%', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Language & Certification */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="language" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.language')}
                    </label>
                    <select
                      id="language"
                      value={formData.language}
                      onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-all"
                      style={{ maxWidth: '100%', boxSizing: 'border-box' }}
                    >
                      <option value="en">{t('contact.form.language.english')}</option>
                      <option value="es">{t('contact.form.language.spanish')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="certification" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.certification')}
                    </label>
                    <select
                      id="certification"
                      value={formData.certification}
                      onChange={(e) => setFormData({ ...formData, certification: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-all"
                      style={{ maxWidth: '100%', boxSizing: 'border-box' }}
                    >
                      <option value="none">{t('contact.form.certification.none')}</option>
                      <option value="openwater">{t('contact.form.certification.openwater')}</option>
                      <option value="advanced">{t('contact.form.certification.advanced')}</option>
                      <option value="rescue">{t('contact.form.certification.rescue')}</option>
                      <option value="divemaster">{t('contact.form.certification.divemaster')}</option>
                      <option value="instructor">{t('contact.form.certification.instructor')}</option>
                    </select>
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.interest')}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['chinchorro', 'mahahual', 'courses', 'other'].map((interest) => (
                      <label
                        key={interest}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestToggle(interest)}
                          className="w-4 h-4 text-ocean-blue border-gray-300 rounded focus:ring-ocean-blue"
                        />
                        <span className="text-sm text-gray-700">
                          {/* @ts-expect-error - Dynamic translation key */}
                          {t(`contact.form.interest.${interest}`)}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Divers & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="divers" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.divers')}
                    </label>
                    <input
                      type="number"
                      id="divers"
                      min="1"
                      max="20"
                      value={formData.divers}
                      onChange={(e) => setFormData({ ...formData, divers: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-all"
                      style={{ maxWidth: '100%', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.date')}
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-all"
                      style={{ maxWidth: '100%', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('contact.form.message.placeholder')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    style={{ maxWidth: '100%', boxSizing: 'border-box', wordBreak: 'break-word' }}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-ocean-blue hover:bg-ocean-turquoise disabled:bg-gray-400 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t('contact.form.submitting')}
                    </>
                  ) : (
                    <>
                      <Send size={20} style={{ flexShrink: 0 }} />
                      {t('contact.form.submit')}
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <Check size={20} className="text-green-600" style={{ flexShrink: 0 }} />
                    <p className="text-green-700">{t('contact.form.success')}</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle size={20} className="text-red-600" style={{ flexShrink: 0 }} />
                    <p className="text-red-700">{t('contact.form.error')}</p>
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-ocean-deep mb-6">
                  {t('contact.info.title')}
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-ocean-light flex items-center justify-center" style={{ flexShrink: 0 }}>
                      <MapPin size={24} className="text-ocean-blue" style={{ flexShrink: 0 }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ocean-deep mb-1">
                        {t('contact.info.address')}
                      </h3>
                      <p className="text-gray-600" style={{ wordBreak: 'break-word' }}>
                        {t('contact.info.address.value')}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-ocean-light flex items-center justify-center" style={{ flexShrink: 0 }}>
                      <Phone size={24} className="text-ocean-blue" style={{ flexShrink: 0 }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ocean-deep mb-1">
                        {t('contact.info.phone')}
                      </h3>
                      <a
                        href="tel:+529841516758"
                        className="text-ocean-blue hover:text-ocean-turquoise transition-colors"
                        style={{ wordBreak: 'break-all' }}
                      >
                        984-151-6758
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-ocean-light flex items-center justify-center" style={{ flexShrink: 0 }}>
                      <Mail size={24} className="text-ocean-blue" style={{ flexShrink: 0 }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ocean-deep mb-1">
                        {t('contact.info.email')}
                      </h3>
                      <a
                        href={formatEmail('hola@amigosdelmar.net')}
                        className="text-ocean-blue hover:text-ocean-turquoise transition-colors"
                        style={{ wordBreak: 'break-all' }}
                      >
                        hola@amigosdelmar.net
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-ocean-light flex items-center justify-center" style={{ flexShrink: 0 }}>
                      <Clock size={24} className="text-ocean-blue" style={{ flexShrink: 0 }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ocean-deep mb-1">
                        {t('contact.info.hours')}
                      </h3>
                      <p className="text-gray-600">
                        {t('contact.info.hours.value')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map - Amigos del Mar Location */}
              <div className="relative bg-gray-200 rounded-xl overflow-hidden h-64 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15115.409394950379!2d-87.71803766541757!3d18.715427443177774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5b2610bc3f6dc5%3A0xc49f107a194fcfb4!2sAMIGOS%20DEL%20MAR%20MAHAHUAL!5e0!3m2!1sde!2smx!4v1762480152486!5m2!1sde!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('contact.map.title')}
                />
                {/* Direct link to shop location */}
                <a 
                  href="https://maps.app.goo.gl/hUgshYpUu8NxG7QV9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 px-4 py-2 bg-ocean-blue hover:bg-ocean-turquoise text-white text-sm font-medium rounded-lg shadow-lg transition-colors z-10"
                >
                  {language === 'es' ? 'Abrir en Google Maps' : 'Open in Google Maps'}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

