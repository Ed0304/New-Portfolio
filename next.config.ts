import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",

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