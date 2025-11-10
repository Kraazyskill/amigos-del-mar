'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Palmtree, Waves as WavesIcon, Clock, Fish } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { getMahahualDiveSites } from '@/lib/data/diveSitesMahahual'

export default function MahahualPage() {
  const { t, language } = useLanguage()
  const diveSites = getMahahualDiveSites(language || 'en')

  const features = [
    {
      icon: WavesIcon,
      title: t('mahahual.features.reef.title'),
      description: t('mahahual.features.reef.description'),
    },
    {
      icon: Clock,
      title: t('mahahual.features.access.title'),
      description: t('mahahual.features.access.description'),
    },
    {
      icon: Palmtree,
      title: t('mahahual.features.calm.title'),
      description: t('mahahual.features.calm.description'),
    },
    {
      icon: Fish,
      title: t('mahahual.features.biodiversity.title'),
      description: t('mahahual.features.biodiversity.description'),
    },
  ]


  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section
        className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center text-white overflow-hidden"
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
            <source src="/videos/mahahual-hero.mov" type="video/quicktime" />
            <source src="/videos/mahahual-hero.mov" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1920&q=80')] bg-cover bg-center" />
          </video>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm mb-4">
              <Link href="/" className="hover:text-ocean-turquoise transition-colors">
                {t('nav.home')}
              </Link>
              <ChevronRight size={16} />
              <span className="text-gray-300">{t('nav.mahahual')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              {t('mahahual.hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
              {t('mahahual.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-white" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-ocean-deep text-center">
              {t('mahahual.intro.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed">
              {t('mahahual.intro.text1')}
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed">
              {t('mahahual.intro.text2')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-gray-50" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-ocean-deep text-center mb-12"
          >
            {t('mahahual.features.title')}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-light text-center"
                style={{ wordBreak: 'break-word' }}
              >
                <div
                  className="w-16 h-16 rounded-full bg-ocean-light flex items-center justify-center mx-auto mb-4"
                  style={{ flexShrink: 0 }}
                >
                  <feature.icon size={32} className="text-ocean-blue" style={{ flexShrink: 0 }} />
                </div>
                <h3 className="text-lg font-bold text-ocean-deep mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dive Spots Overview Section */}
      <section className="py-16 lg:py-24 bg-white" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ocean-deep text-center mb-8">
              {language === 'es' ? 'Mapa de Sitios de Buceo Populares' : 'Popular Dive Spots Map'}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              {language === 'es' 
                ? 'Explora nuestros sitios de buceo más populares alrededor de Mahahual' 
                : 'Explore our most popular dive sites around Mahahual'}
            </p>
            
            {/* Overview Image */}
            <div className="rounded-xl overflow-hidden shadow-heavy">
              <img 
                src="/dive-sites/mahahual/mahahual-dive-map.jpg" 
                alt={language === 'es' ? 'Mapa de sitios de buceo de Mahahual' : 'Mahahual dive sites map'}
                className="w-full h-auto"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dive Sites Section */}
      <section className="py-16 lg:py-24 bg-gray-50" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ocean-deep mb-4">
              {t('mahahual.sites.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('mahahual.sites.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-8">
            {diveSites.map((site, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-medium overflow-hidden"
                style={{ maxWidth: '100%', overflowX: 'hidden' }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-80 lg:h-auto lg:min-h-[450px] bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full h-full object-contain"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-ocean-deep">{site.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-ocean-light text-ocean-blue rounded-full text-sm font-medium">
                          {site.depth}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {site.level}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed" style={{ wordBreak: 'break-word' }}>
                      {site.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Fish size={20} className="text-ocean-blue mt-0.5" style={{ flexShrink: 0 }} />
                        <div>
                          <span className="font-semibold text-ocean-deep">{t('site.marine')}:</span>
                          <span className="text-gray-600 ml-2" style={{ wordBreak: 'break-word' }}>{site.marine}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-ocean-deep">{site.season}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule & Pricing Section */}
      <section className="py-16 lg:py-24 bg-gray-50" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-light"
              style={{ wordBreak: 'break-word' }}
            >
              <h3 className="text-2xl font-bold text-ocean-deep mb-6">
                {t('mahahual.schedule.title')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ocean-blue mt-2" style={{ flexShrink: 0 }} />
                  <div>
                    <p className="font-semibold text-ocean-deep">{t('mahahual.schedule.dive1')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ocean-blue mt-2" style={{ flexShrink: 0 }} />
                  <div>
                    <p className="font-semibold text-ocean-deep">{t('mahahual.schedule.surface')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ocean-blue mt-2" style={{ flexShrink: 0 }} />
                  <div>
                    <p className="font-semibold text-ocean-deep">{t('mahahual.schedule.dive2')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ocean-blue mt-2" style={{ flexShrink: 0 }} />
                  <div>
                    <p className="font-semibold text-ocean-deep">{t('mahahual.schedule.return')}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic">{t('mahahual.schedule.note')}</p>
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-light"
              style={{ wordBreak: 'break-word' }}
            >
              <h3 className="text-2xl font-bold text-ocean-deep mb-6">
                {t('mahahual.pricing.title')}
              </h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <p className="font-semibold text-ocean-deep">{t('mahahual.pricing.single')}</p>
                  <p className="text-gray-600 text-sm">{t('mahahual.pricing.contact')}</p>
                </div>
                <div className="border-b border-gray-200 pb-3">
                  <p className="font-semibold text-ocean-deep">{t('mahahual.pricing.twotank')}</p>
                  <p className="text-gray-600 text-sm">{t('mahahual.pricing.contact')}</p>
                </div>
                <div className="border-b border-gray-200 pb-3">
                  <p className="font-semibold text-ocean-deep">{t('mahahual.pricing.multiday')}</p>
                  <p className="text-gray-600 text-sm">{t('mahahual.pricing.contact')}</p>
                </div>
                <div className="border-b border-gray-200 pb-3">
                  <p className="font-semibold text-ocean-deep">{t('mahahual.pricing.discovery')}</p>
                  <p className="text-gray-600 text-sm">{t('mahahual.pricing.contact')}</p>
                </div>
                <div>
                  <p className="font-semibold text-ocean-deep">{t('mahahual.pricing.courses')}</p>
                  <p className="text-gray-600 text-sm">{t('mahahual.pricing.contact')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Boat Section */}
      <section className="py-16 lg:py-24 bg-white" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-ocean-deep text-center mb-12"
          >
            {t('boat.title')}
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-ocean-blue to-ocean-deep text-white p-8 lg:p-12 rounded-2xl shadow-heavy"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">{t('boat.specs.title')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-ocean-light">🚤</span>
                      <div>
                        <p className="font-semibold">{t('boat.specs.type')}</p>
                        <p className="text-gray-200">{t('boat.specs.typeValue')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-ocean-light">☂️</span>
                      <div>
                        <p className="font-semibold">{t('boat.specs.comfort')}</p>
                        <p className="text-gray-200">{t('boat.specs.comfortValue')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-ocean-light">⚙️</span>
                      <div>
                        <p className="font-semibold">{t('boat.specs.engines')}</p>
                        <p className="text-gray-200">{t('boat.specs.enginesValue')}</p>
                        <p className="text-sm text-gray-300">{t('boat.specs.technology')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">{t('boat.capacity.title')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-ocean-light">👥</span>
                      <div>
                        <p className="font-semibold">{t('boat.capacity.capacity')}</p>
                        <p className="text-gray-200">{t('boat.capacity.capacityValue')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-ocean-light">🤿</span>
                      <div>
                        <p className="font-semibold">{t('boat.capacity.tanks')}</p>
                        <p className="text-gray-200">{t('boat.capacity.tanksValue')}</p>
                        <p className="text-sm text-gray-300">{t('boat.capacity.tanksExtra')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-ocean-light">✓</span>
                      <div>
                        <p className="font-semibold">{t('boat.capacity.safety')}</p>
                        <p className="text-gray-200">{t('boat.capacity.safetyValue')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20 text-center">
                <p className="text-lg text-gray-200">
                  {t('boat.description.mahahual')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 lg:py-24 bg-ocean-blue text-white"
        style={{ maxWidth: '100vw', overflowX: 'hidden' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-ocean-blue hover:bg-gray-100 transition-all duration-300 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
            >
              {t('mahahual.cta.button')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

