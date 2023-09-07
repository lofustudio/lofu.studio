const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["tygr.dev"]
    }
}

module.exports = withContentlayer(nextConfig)
