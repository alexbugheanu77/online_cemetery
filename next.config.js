/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  experimental: {
    allowedDevOrigins: ['localhost', '127.0.0.1', '192.168.139.1'],
  },
};

module.exports = nextConfig;
