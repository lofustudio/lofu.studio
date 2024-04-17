/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "tygr.dev" }],
    },
    async redirects() {
        return [
            {
                source: "/projects",
                destination:
                    "https://github.com/orgs/lofustudio/repositories?type=source",
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
