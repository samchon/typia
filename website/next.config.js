const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

/** @type {import('next').NextConfig} */
const config = {
  ...withNextra(),
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  rewrites: async () => [
    {
      source: "/api",
      destination: "/api/index.html",
    },
  ],
};
module.exports = config;
