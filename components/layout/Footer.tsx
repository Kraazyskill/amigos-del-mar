'use client'

import Link from 'next/link'
import { Waves, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { formatEmail, formatPhone } from '@/lib/utils'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/banco-chinchorro', label: t('nav.bancoChinchorro') },
    { href: '/mahahual', label: t('nav.mahahual') },
    { href: '/gallery', label: t('nav.gallery') },
    { href: '/contact', label: t('nav.contact') },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/amigosdelmarmahahual/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/amigosdelmarscuba?igsh=NWpyOHY1NWNyYmEy', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@amigosdelmarmahahual4846?si=YXDxMfF4ca3Yavn5', label: 'YouTube' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="bg-ocean-deep text-white"
      style={{
        maxWidth: '100vw',
        overflowX: 'hidden',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Waves size={32} className="text-ocean-turquoise" style={{ flexShrink: 0 }} />
              <span className="font-bold text-xl">Amigos del Mar</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ wordBreak: 'break-word' }}>
              {t('footer.about.text')}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{t('footer.links.title')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-ocean-turquoise transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{t('footer.contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-ocean-turquoise mt-0.5" style={{ flexShrink: 0 }} />
                <span className="text-gray-300 text-sm" style={{ wordBreak: 'break-word' }}>
                  {t('contact.info.address.value')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-ocean-turquoise mt-0.5" style={{ flexShrink: 0 }} />
                <a
                  href="tel:+529841516758"
                  className="text-gray-300 hover:text-ocean-turquoise transition-colors text-sm"
                  style={{ wordBreak: 'break-all' }}
                >
                  984-151-6758
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-ocean-turquoise mt-0.5" style={{ flexShrink: 0 }} />
                <a
                  href={formatEmail('hola@amigosdelmar.net')}
                  className="text-gray-300 hover:text-ocean-turquoise transition-colors text-sm"
                  style={{ wordBreak: 'break-all' }}
                >
                  hola@amigosdelmar.net
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{t('footer.social.title')}</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-ocean-turquoise transition-colors flex items-center justify-center"
                  style={{ flexShrink: 0 }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              {t('footer.copyright', { year: currentYear })}
            </p>
            <p className="text-gray-400 text-sm text-center sm:text-right">
              Website Developed by JMW
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="mx-auto mt-4 px-4 py-2 bg-ocean-blue hover:bg-ocean-turquoise transition-colors rounded-lg text-sm font-medium block"
            aria-label={t('common.backToTop')}
          >
            {t('common.backToTop')}
          </button>
        </div>
      </div>
    </footer>
  )
}

