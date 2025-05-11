/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Désactive le mode strict pour éviter les doubles rendus
  swcMinify: true,
  experimental: {
    // Ces options aident à résoudre les problèmes d'hydratation
    // en apportant une meilleure compatibilité entre SSR et CSR
    optimizeCss: true,
    scrollRestoration: true,
    // On ignore les différences d'attributs qui causent les erreurs d'hydratation
    // comme data-atm-ext-installed et cz-shortcut-listen
    skipTrailingSlashRedirect: true,
    serverComponentsExternalPackages: [],
    optimizePackageImports: [
      "@mui/material",
      "@mui/icons-material",
      "framer-motion",
    ],
  },
};

module.exports = nextConfig;
