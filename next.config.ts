import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],  // Add this if we ever need to load images from external URLs
    dangerouslyAllowSVG: true,  // Since we might use SVG images
    contentDispositionType: 'attachment',
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
