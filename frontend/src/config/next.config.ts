/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: [
            '@material-ui/core',
        ]
    }
}

export default nextConfig;