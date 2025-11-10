'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Lightbox from '@/components/ui/Lightbox'
import { getGalleryItems } from '@/lib/data/galleryItems'

export default function GalleryPage() {
  const { t, language } = useLanguage()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const galleryItems = getGalleryItems(language || 'en')

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section
        className="relative min-h-[300px] lg:min-h-[400px] flex items-center justify-center text-white overflow-hidden mt-24 lg:mt-32"
        style={{ maxWidth: '100vw', overflowX: 'hidden' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70 z-0">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              minWidth: '100%',
              minHeight: '100%',
              opacity: 0.7,
            }}
          >
            <source src="/videos/gallery-hero.mov" type="video/quicktime" />
            <source src="/videos/gallery-hero.mov" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1920&q=80')] bg-cover bg-center" />
          </video>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              {t('gallery.hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
              {t('gallery.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24 bg-white" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-light hover:shadow-heavy transition-shadow duration-300"
                onClick={() => openLightbox(index)}
                style={{
                  aspectRatio: '4/3',
                  maxWidth: '100%',
                  overflowX: 'hidden',
                }}
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.src})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-semibold text-sm" style={{ wordBreak: 'break-word' }}>
                      {item.alt}
                    </p>
                    {item.location && (
                      <p className="text-gray-300 text-xs mt-1" style={{ wordBreak: 'break-word' }}>
                        {item.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={galleryItems}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  )
}

