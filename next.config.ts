import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,

        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.credly.com",
            },
        ],
    },
};

export default nextConfig;