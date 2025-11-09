import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Amigos del Mar | Premium Diving in Mahahual, Mexico',
  description: 'Explore the Caribbean\'s hidden depths with professional diving experiences in Mahahual and Banco Chinchorro. PADI certified instructors, modern equipment, and unforgettable underwater adventures.',
  keywords: 'diving, scuba diving, Mahahual, Banco Chinchorro, Mexico, Caribbean, PADI, dive sites, underwater, marine life',
  authors: [{ name: 'Amigos del Mar' }],
  openGraph: {
    title: 'Amigos del Mar | Premium Diving in Mahahual, Mexico',
    description: 'Explore the Caribbean\'s hidden depths with professional diving experiences in pristine waters.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_MX',
    siteName: 'Amigos del Mar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amigos del Mar | Premium Diving in Mahahual, Mexico',
    description: 'Professional diving experiences in the Caribbean\'s most beautiful waters.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <LanguageProvider>
          <Header />
          <main style={{ minHeight: '60vh', maxWidth: '100vw', overflowX: 'hidden' }}>
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
        
        {/* Image and content protection */}
        <Script id="content-protection" strategy="afterInteractive">
          {`
            // Disable right-click on images and videos
            document.addEventListener('contextmenu', function(e) {
              if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO' || e.target.style.backgroundImage) {
                e.preventDefault();
                return false;
              }
            }, false);
            
            // Disable drag on images
            document.addEventListener('dragstart', function(e) {
              if (e.target.tagName === 'IMG') {
                e.preventDefault();
                return false;
              }
            }, false);
            
            // Disable Ctrl+S / Cmd+S (save page)
            document.addEventListener('keydown', function(e) {
              if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                return false;
              }
            }, false);
            
            // Disable text selection on images (CSS)
            const style = document.createElement('style');
            style.innerHTML = 'img, video { user-select: none; -webkit-user-select: none; -moz-user-select: none; pointer-events: auto; }';
            document.head.appendChild(style);
          `}
        </Script>
      </body>
    </html>
  )
}

