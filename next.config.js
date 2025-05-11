/** @type {import('next').NextConfig} */
const nextConfig = {
  // Options principales
  reactStrictMode: false,

  // Options qui étaient précédemment dans experimental
  skipTrailingSlashRedirect: true,
  serverExternalPackages: [],

  // Options qui restent dans experimental
  experimental: {
    // Ces options aident à résoudre les problèmes d'hydratation
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: [
      "@mui/material",
      "@mui/icons-material",
      "framer-motion",
    ],
  },
};

module.exports = nextConfig;
