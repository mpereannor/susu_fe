/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  swSrc: 'service-worker.js',
})

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPWA(nextConfig)
