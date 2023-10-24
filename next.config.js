/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/gallery",
        permanent: true,
      },
    ];
  },

  images: {
    domains: ["https://res.cloudinary.com"],
  },
};

module.exports = nextConfig;
