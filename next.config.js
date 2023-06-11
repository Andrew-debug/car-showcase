/** @type {import('next').NextConfig} **/
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
  typescript: { ignoreBuildErrors: true },
  env: {
    NEXT_PUBLIC_RAPID_API_KEY: process.env.NEXT_PUBLIC_RAPID_API_KEY,
    NEXT_PUBLIC_IMAGIN_API_KEY: process.env.NEXT_PUBLIC_IMAGIN_API_KEY,
  },
};

module.exports = nextConfig;
