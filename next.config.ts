import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  distDir: process.env.PORTFOLIO_BUILD_DIR || ".next",
};

export default nextConfig;
