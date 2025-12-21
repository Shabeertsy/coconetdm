/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static exports if needed for Firebase hosting
  // output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
