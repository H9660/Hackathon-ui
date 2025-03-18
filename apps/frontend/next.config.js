
export const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/',  // 🔥 Redirecting `/` to `/home`
            permanent: true,
          },
        ];
      },
};

