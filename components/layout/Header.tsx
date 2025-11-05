'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { t, language, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false)
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [pathname, isMenuOpen])

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/banco-chinchorro', label: t('nav.bancoChinchorro') },
    { href: '/mahahual', label: t('nav.mahahual') },
    { href: '/gallery', label: t('nav.gallery') },
    { href: '/contact', label: t('nav.contact') },
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-ocean-blue/95 backdrop-blur-md shadow-md'
          : 'bg-ocean-blue/90 backdrop-blur-sm'
      )}
      style={{
        maxWidth: '100vw',
        overflowX: 'hidden',
      }}
    >
      <nav className="container-safe mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-32 relative">
          {/* Mobile Menu Button - Left Side */}
          <div className="lg:hidden absolute left-0" style={{ flexShrink: 0 }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
              aria-label={isMenuOpen ? t('nav.close') : t('nav.menu')}
              style={{ flexShrink: 0 }}
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>

          {/* Desktop Navigation - Left Side */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-medium transition-colors relative py-2',
                  pathname === link.href
                    ? 'text-white border-b-2 border-white'
                    : 'text-white/90 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo - Absolutely Centered */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 hover:opacity-90 transition-opacity"
            style={{ flexShrink: 0 }}
          >
            <Image 
              src="/logo.png" 
              alt="Amigos del Mar" 
              width={240} 
              height={95}
              priority
              style={{ flexShrink: 0, maxHeight: '110px', width: 'auto', height: 'auto' }}
            />
          </Link>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-medium transition-colors relative py-2',
                  pathname === link.href
                    ? 'text-white border-b-2 border-white'
                    : 'text-white/90 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-white"
              aria-label={`${t('lang.switchTo')} ${language === 'en' ? t('lang.spanish') : t('lang.english')}`}
              style={{ flexShrink: 0 }}
            >
              <Globe size={20} style={{ flexShrink: 0 }} />
              <span className="font-medium text-sm uppercase">{language}</span>
            </button>
          </div>

          {/* Language Toggle - Mobile (Right Side) */}
          <div className="lg:hidden absolute right-0" style={{ flexShrink: 0 }}>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-white"
              aria-label={`${t('lang.switchTo')} ${language === 'en' ? t('lang.spanish') : t('lang.english')}`}
              style={{ flexShrink: 0 }}
            >
              <Globe size={20} style={{ flexShrink: 0 }} />
              <span className="font-medium text-sm uppercase">{language}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-ocean-deep border-t border-white/20"
            style={{
              maxWidth: '100vw',
              overflowX: 'hidden',
              overflowY: 'auto',
            }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-3 rounded-lg font-medium transition-colors',
                    pathname === link.href
                      ? 'bg-white text-ocean-blue'
                      : 'text-white hover:bg-white/10'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

