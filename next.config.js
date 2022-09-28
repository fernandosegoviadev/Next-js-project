/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images8.alphacoders.com',
    'images.alphacoders.com',
    'images5.alphacoders.com',
    'images4.alphacoders.com'],
  },
 
}

module.exports = nextConfig
