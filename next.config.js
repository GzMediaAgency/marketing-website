/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: true,
  },
};

module.exports = nextConfig;
