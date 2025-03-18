/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Forward `/api` requests
        destination: "http://localhost:5000/api/:path*", // Your backend URL
      },
    ];
  },
};

export default nextConfig
