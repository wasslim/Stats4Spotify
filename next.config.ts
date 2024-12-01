import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.scdn.co"], // Add Spotify's image domain here
  },
};

export default nextConfig;
