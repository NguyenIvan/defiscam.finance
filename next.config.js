/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i1.adis.ws'],
    loader: 'akamai',
    path: ''
  },
}

module.exports = nextConfig
