const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = {
  ...withNextra(),
  exportTrailingSlash: true,
  images: {
    unoptimized: true,
  },
};