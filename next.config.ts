import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: "/2026-vibe-a-thon",
  assetPrefix: "/2026-vibe-a-thon",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
