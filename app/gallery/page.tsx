'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Lightbox from '@/components/ui/Lightbox'

export default function GalleryPage() {
  const { t } = useLanguage()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Your diving photos from Mahahual and Banco Chinchorro
  const galleryItems = [
    {
      type: 'photo',
      src: '/gallery/seaturtle.jpg',
      alt: 'Sea turtle swimming gracefully',
      location: 'Caribbean Sea',
    },
    {
      type: 'photo',
      src: '/gallery/turtle.jpg',
      alt: 'Sea turtle closeup',
      location: 'Mahahual',
    },
    {
      type: 'photo',
      src: '/gallery/turtleinreef.jpg',
      alt: 'Sea turtle in coral reef',
      location: 'Mahahual',
    },
    {
      type: 'photo',
      src: '/gallery/shark.jpg',
      alt: 'Shark encounter',
      location: 'Banco Chinchorro',
    },
    {
      type: 'photo',
      src: '/gallery/sharkback.jpg',
      alt: 'Shark from above',
      location: 'Banco Chinchorro',
    },
    {
      type: 'photo',
      src: '/gallery/sharkside.jpg',
      alt: 'Shark side view',
      location: 'Caribbean Sea',
    },
    {
      type: 'photo',
      src: '/gallery/sharkinreef.jpg',
      alt: 'Shark swimming in coral reef',
      location: 'Banco Chinchorro',
    },
    {
      type: 'photo',
      src: '/gallery/sharkdiver.jpg',
      alt: 'Diver with shark',
      location: 'Banco Chinchorro',
    },
    {
      type: 'photo',
      src: '/gallery/diverwithshark.jpg',
      alt: 'Diver encountering shark',
      location: 'Banco Chinchorro',
    },
    {
      type: 'photo',
      src: '/gallery/littlesharks.jpg',
      alt: 'Small sharks swimming',
      location: 'Caribbean Sea',
    },
    {
      type: 'photo',
      src: '/gallery/stingrayback.jpg',
      alt: 'Stingray from above',
      location: 'Mahahual',
    },
    {
      type: 'photo',
      src: '/gallery/tigerstingray.jpg',
      alt: 'Tiger stingray',
      location: 'Caribbean Sea',
    },
    {
      type: 'photo',
      src: '/gallery/stingraywithshark.jpg',
      alt: 'Stingray and shark together',
      location: 'Banco Chinchorro',
    },
    {
      type: 'photo',
      src: '/gallery/coral.jpg',
      alt: 'Beautiful coral formations',
      location: 'Mahahual',
    },
    {
      type: 'photo',
      src: '/gallery/reef.jpg',
      alt: 'Vibrant coral reef',
      location: 'Mesoamerican Reef',
    },
    {
      type: 'photo',
      src: '/gallery/orangereef.jpg',
      alt: 'Orange coral reef',
      location: 'Banco Chinchorro',
    },
    {
      type: 'photo',
      src: '/gallery/coralswithfish.jpg',
      alt: 'Corals with tropical fish',
      location: 'Mahahual',
    },
    {
      type: 'photo',
      src: '/gallery/diverincorals.jpg',
      alt: 'Diver exploring coral formations',
      location: 'Banco Chinchorro',
    },
    {
      type: 'photo',
      src: '/gallery/fishes.jpg',
      alt: 'Tropical fish swimming',
      location: 'Caribbean Sea',
    },
    {
      type: 'photo',
      src: '/gallery/fishswarm.jpg',
      alt: 'Large school of fish',
      location: 'Banco Chinchorro',
    },
    {
      type: 'photo',
      src: '/gallery/fishswarm%20%282%29.jpg',
      alt: 'Fish school formation',
      location: 'Mahahual',
    },
    {
      type: 'photo',
      src: '/gallery/diverinswarm.jpg',
      alt: 'Diver surrounded by fish',
      location: 'Banco Chinchorro',
    },
    {
      type: 'photo',
      src: '/gallery/fishclose.jpg',
      alt: 'Fish closeup detail',
      location: 'Mahahual',
    },
    {
      type: 'photo',
      src: '/gallery/minifish.jpg',
      alt: 'Small tropical fish',
      location: 'Caribbean Sea',
    },
    {
      type: 'photo',
      src: '/gallery/merofish.jpg',
      alt: 'Grouper fish',
      location: 'Banco Chinchorro',
    },
    {
      type: 'photo',
      src: '/gallery/diverwithfish.jpg',
      alt: 'Diver with tropical fish',
      location: 'Mahahual',
    },
    {
      type: 'photo',
      src: '/gallery/divers.jpg',
      alt: 'Group of divers exploring',
      location: 'Banco Chinchorro',
    },
    {
      type: 'photo',
      src: '/gallery/divercamaramen.jpg',
      alt: 'Diver with camera',
      location: 'Mahahual',
    },
    {
      type: 'photo',
      src: '/gallery/boatwreck.jpg',
      alt: 'Historic boat wreck',
      location: 'Banco Chinchorro',
    },
    {
      type: 'photo',
      src: '/gallery/moraine.jpg',
      alt: 'Moray eel',
      location: 'Caribbean Sea',
    },
    {
      type: 'photo',
      src: '/gallery/Big%20Brain.jpg',
      alt: 'Brain coral formation',
      location: 'Banco Chinchorro',
    },
    {
      type: 'photo',
      src: '/gallery/DSC05712.jpg',
      alt: 'Underwater scene',
      location: 'Mahahual',
    },
    {
      type: 'photo',
      src: '/gallery/shop.jpg',
      alt: 'Dive shop',
      location: 'Mahahual',
    },
  ]

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
        className="relative min-h-[300px] lg:min-h-[400px] flex items-center justify-center text-white overflow-hidden"
        style={{ maxWidth: '100vw', overflowX: 'hidden' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/80 to-ocean-deep/90 z-0">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            style={{
              minWidth: '100%',
              minHeight: '100%',
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

