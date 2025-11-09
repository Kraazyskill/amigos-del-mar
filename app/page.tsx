'use client'

import { motion } from 'framer-motion'
import { Award, Wrench, Users, MapPin, TrendingUp, Shield, Waves } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Award,
      title: t('home.features.sdi.title'),
      description: t('home.features.sdi.description'),
    },
    {
      icon: Wrench,
      title: t('home.features.equipment.title'),
      description: t('home.features.equipment.description'),
    },
    {
      icon: Users,
      title: t('home.features.boutique.title'),
      description: t('home.features.boutique.description'),
    },
    {
      icon: TrendingUp,
      title: t('home.features.levels.title'),
      description: t('home.features.levels.description'),
    },
    {
      icon: Shield,
      title: t('home.features.safety.title'),
      description: t('home.features.safety.description'),
    },
    {
      icon: Waves,
      title: t('home.features.bestsites.title'),
      description: t('home.features.bestsites.description'),
    },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] lg:min-h-[90vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          maxWidth: '100vw',
          overflowX: 'hidden',
        }}
      >
        {/* Background Video with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/70 to-ocean-deep/80 z-0">
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
            <source src="/videos/hero-background.mov" type="video/quicktime" />
            <source src="/videos/hero-background.mov" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80')] bg-cover bg-center" />
          </video>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto text-balance">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex items-center justify-center pt-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 rounded-lg font-semibold text-lg border-2 border-white hover:-translate-y-1 text-center mx-auto"
                style={{ display: 'inline-block' }}
              >
                {t('home.hero.cta.primary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 lg:py-24 bg-white" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-ocean-deep">
              {t('home.welcome.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed">
              {t('home.welcome.text')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-gray-50" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-ocean-deep text-center mb-12"
            >
              {t('home.features.title')}
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 lg:p-8 rounded-xl shadow-light hover:shadow-medium transition-all duration-300"
                  style={{
                    maxWidth: '100%',
                    overflowX: 'hidden',
                    wordBreak: 'break-word',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full bg-ocean-light flex items-center justify-center mb-4"
                    style={{ flexShrink: 0 }}
                  >
                    <feature.icon size={32} className="text-ocean-blue" style={{ flexShrink: 0 }} />
                  </div>
                  <h3 className="text-xl font-bold text-ocean-deep mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 lg:py-24 bg-white" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-ocean-deep mb-4">
                {t('home.destinations.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t('home.destinations.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Banco Chinchorro Card */}
              <motion.div
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-heavy transition-all duration-500"
                style={{
                  minHeight: '400px',
                  maxWidth: '100%',
                  overflowX: 'hidden',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('/destinations/banco-chinchorro-card.png')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
                
                <div className="relative z-20 p-8 h-full flex flex-col justify-end text-white">
                  <h3 className="text-3xl font-bold mb-3">{t('home.destinations.chinchorro.title')}</h3>
                  <p className="text-gray-200 mb-6 leading-relaxed" style={{ wordBreak: 'break-word' }}>
                    {t('home.destinations.chinchorro.description')}
                  </p>
                  <Link
                    href="/banco-chinchorro"
                    className="inline-block px-8 py-4 bg-white text-ocean-blue hover:bg-ocean-turquoise hover:text-white transition-all duration-300 rounded-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 self-start"
                  >
                    {t('home.destinations.chinchorro.cta')}
                  </Link>
                </div>
              </motion.div>

              {/* Mahahual Card */}
              <motion.div
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-heavy transition-all duration-500"
                style={{
                  minHeight: '400px',
                  maxWidth: '100%',
                  overflowX: 'hidden',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('/destinations/mahahual-card.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
                
                <div className="relative z-20 p-8 h-full flex flex-col justify-end text-white">
                  <h3 className="text-3xl font-bold mb-3">{t('home.destinations.mahahual.title')}</h3>
                  <p className="text-gray-200 mb-6 leading-relaxed" style={{ wordBreak: 'break-word' }}>
                    {t('home.destinations.mahahual.description')}
                  </p>
                  <Link
                    href="/mahahual"
                    className="inline-block px-8 py-4 bg-white text-ocean-blue hover:bg-ocean-turquoise hover:text-white transition-all duration-300 rounded-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 self-start"
                  >
                    {t('home.destinations.mahahual.cta')}
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-16 lg:py-24 bg-ocean-blue text-white"
        style={{ maxWidth: '100vw', overflowX: 'hidden' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold">
              {t('home.cta.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-100">
              {t('home.cta.subtitle')}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-ocean-blue hover:bg-gray-100 transition-colors rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
              >
                {t('home.cta.button')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

