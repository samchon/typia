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
};
module.exports = config;
