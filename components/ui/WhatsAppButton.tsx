'use client'

import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { formatWhatsAppLink } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const { t } = useLanguage()
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5219841516758' // +52 1 9841516758 in WhatsApp format
  const message = t('whatsapp.message')
  const link = formatWhatsAppLink(whatsappNumber, message)

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsapp.label')}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)',
        zIndex: 1000,
        cursor: 'pointer',
        flexShrink: 0,
      }}
      className="whatsapp-float"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <MessageCircle size={28} strokeWidth={2} />
      </motion.div>
    </motion.a>
  )
}

