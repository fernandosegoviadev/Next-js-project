/** @type {import('next').NextConfig} */

// const securityHeaders = [
//   {
//     key: 'X-Frame-Options',
//     value: 'SAMEORIGIN'
//   }
// ];

// module.exports = {
//   async headers() {
//     return [
//       {
//         // Apply these headers to all routes in your application.
//         source: '/home',
//         headers: securityHeaders,
//       },
//     ]
//   },
// }

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
 
}

module.exports = nextConfig
