const nextConfig = {
  experimental: {
    appDir: true,
  },
  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
  swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.stickpng.com",
      },
    ],
  },
  env: {
    MONGODB_URI: "mongodb+srv://nikolamirilo:veslanje123@cluster0.phoutob.mongodb.net/",
  },
};

export default nextConfig;
