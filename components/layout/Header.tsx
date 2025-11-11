'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { t, language, setLanguage } = useLanguage()

  useEffect(() => {
    console.log('🍔 Menu state changed to:', isMenuOpen);
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close menu when route changes
    console.log('🔄 Pathname changed, closing menu. New pathname:', pathname);
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

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
    <>
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
        <div className="flex items-center justify-between h-24 lg:h-32">
          {/* Logo - Left Side */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity relative z-10"
            style={{ flexShrink: 0 }}
          >
            <Image 
              src="/logo.png" 
              alt="Amigos del Mar" 
              width={180} 
              height={71}
              priority
              className="lg:w-[240px] lg:h-[95px]"
              style={{ flexShrink: 0, maxHeight: '80px', width: 'auto', height: 'auto', maxWidth: '180px' }}
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
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

          {/* Language Toggle - Right Side (Desktop) */}
          <div className="hidden lg:flex items-center" style={{ flexShrink: 0 }}>
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

          {/* Mobile: Menu Button & Language Toggle */}
          <div className="flex lg:hidden items-center gap-2 relative z-20">
            {/* Language Toggle - Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-white relative z-20"
              aria-label={`${t('lang.switchTo')} ${language === 'en' ? t('lang.spanish') : t('lang.english')}`}
              style={{ flexShrink: 0, pointerEvents: 'auto' }}
            >
              <Globe size={20} style={{ flexShrink: 0 }} />
              <span className="font-medium text-sm uppercase">{language}</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('🔘 Menu clicked! Current:', isMenuOpen, 'New:', !isMenuOpen);
                setIsMenuOpen(prev => {
                  console.log('📝 Setting menu from', prev, 'to', !prev);
                  return !prev;
                });
              }}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white relative z-20"
              aria-label={isMenuOpen ? t('nav.close') : t('nav.menu')}
              style={{ flexShrink: 0, pointerEvents: 'auto', cursor: 'pointer' }}
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>

    {/* Mobile Menu Dropdown - Full Screen Overlay */}
    {isMenuOpen && (
      <div
        className="lg:hidden shadow-2xl"
        style={{
          position: 'fixed',
          top: '96px',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          maxWidth: '100vw',
          overflowY: 'auto',
          overflowX: 'hidden',
          backgroundColor: '#40a9ff',
        }}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-6 py-4 rounded-lg font-medium transition-colors text-lg',
                pathname === link.href
                  ? 'bg-white text-ocean-blue'
                  : 'text-white hover:bg-white/20 border border-white/20'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    )}
    </>
  )
}

