import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Amigos del Mar - Premium Diving in Mahahual',
    short_name: 'Amigos del Mar',
    description: 'Professional diving experiences in Mahahual and Banco Chinchorro, Mexico',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#084e90',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

