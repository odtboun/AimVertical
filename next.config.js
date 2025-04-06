/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],  // Add this if we ever need to load images from external URLs
    dangerouslyAllowSVG: true,  // Since we might use SVG images
    contentDispositionType: 'attachment',
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig; 