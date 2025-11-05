'use client'

import Link from 'next/link'
import { Home } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div
      className="min-h-[60vh] flex items-center justify-center bg-gray-50"
      style={{ maxWidth: '100vw', overflowX: 'hidden' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-9xl font-bold text-ocean-blue">404</h1>
          <h2 className="text-3xl lg:text-4xl font-bold text-ocean-deep">
            {t('error.pageNotFound')}
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            {t('error.something')}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ocean-blue hover:bg-ocean-turquoise text-white font-semibold rounded-lg transition-colors"
          >
            <Home size={20} style={{ flexShrink: 0 }} />
            {t('error.goHome')}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

