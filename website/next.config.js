const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

/** @type {import('next').NextConfig} */
const config = {
  ...withNextra(),
  exportTrailingSlash: true,
  images: {
    unoptimized: true,
  },
  rewrites: async () => {
    return [
      {
        source: "/api",
        destination: "/api/index.html",
      },
    ];
  },
};
module.exports = config;
