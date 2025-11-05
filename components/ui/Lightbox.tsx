'use client'

import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

interface LightboxProps {
  images: Array<{
    src: string
    alt: string
    location?: string
  }>
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrevious }: LightboxProps) {
  const { t } = useLanguage()
  const currentImage = images[currentIndex]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrevious()
      if (e.key === 'ArrowRight') onNext()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, onNext, onPrevious])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        onClick={onClose}
        style={{
          maxWidth: '100vw',
          overflowX: 'hidden',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          aria-label={t('gallery.lightbox.close')}
          style={{ flexShrink: 0 }}
        >
          <X size={24} className="text-white" />
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onPrevious()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            aria-label={t('gallery.lightbox.previous')}
            style={{ flexShrink: 0 }}
          >
            <ChevronLeft size={32} className="text-white" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            aria-label={t('gallery.lightbox.next')}
            style={{ flexShrink: 0 }}
          >
            <ChevronRight size={32} className="text-white" />
          </button>
        )}

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-7xl max-h-[90vh] mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          
          {/* Caption */}
          <div className="mt-4 text-center">
            <p className="text-white text-lg font-semibold">{currentImage.alt}</p>
            {currentImage.location && (
              <p className="text-gray-300 text-sm mt-1">{currentImage.location}</p>
            )}
            <p className="text-gray-400 text-sm mt-2">
              {currentIndex + 1} {t('gallery.lightbox.counter')} {images.length}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

