/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use Webpack instead of Turbopack
  webpack: (config) => {
    return config
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable strict mode for better error checking
  reactStrictMode: true,
  // Power off Turbopack explicitly
  experimental: {
    turbotrace: undefined,
  },
}

export default nextConfig

