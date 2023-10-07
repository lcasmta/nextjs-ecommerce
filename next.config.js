/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatters: [{
      hostname: "images.unsplash.com"
    }]
  },
    experimental: {
      serverActions: true,
    },
  };
  
  module.exports = nextConfig;
  