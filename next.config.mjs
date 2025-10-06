/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [
      'encrypted-tbn0.gstatic.com',
      'raw.githubusercontent.com',
      'media.licdn.com',
      'img.logokit.com',
      'cdn.prod.website-files.com'
    ],
  },
}

export default nextConfig
