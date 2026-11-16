/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: [
    '192.168.1.4',
    '192.168.1.4:3000',
  ],
};

export default nextConfig;