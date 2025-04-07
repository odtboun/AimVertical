/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],  // Add this if we ever need to load images from external URLs
    dangerouslyAllowSVG: true,  // Since we might use SVG images
    contentDispositionType: 'attachment',
    minimumCacheTTL: 60,
  },
  webpack: (config, { isServer }) => {
    // Exclude migration scripts from the build
    config.module.rules.push({
      test: /migrations\/.*\.ts$/,
      loader: 'ignore-loader',
    });
    return config;
  },
};

module.exports = nextConfig; 