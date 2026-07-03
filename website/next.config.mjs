import nextra from "nextra";

const withNextra = nextra({
  // ... Other Nextra config options
});

// This config is authored as `.mjs` (not `.ts`) on purpose. Next loads a
// `next.config.ts` by resolving and `require("typescript")`, and the pinned
// `typescript@7.0.1-rc` (the tsgo native preview) ships no CommonJS entry, so a
// TypeScript config fails to load with `No "exports" main defined`. A plain ESM
// config avoids that code path; `typescript.ignoreBuildErrors` covers Next's
// built-in type-check step, which also expects the classic npm compiler.
const nextConfig = withNextra({
  // ... Other Next.js config options
  output: "export",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
});

// Nextra's shiki highlighter pulls in `twoslash`, which imports the classic
// `typescript` package. Under `typescript@7.0.1-rc` (tsgo) that import fails
// with `No "exports" main defined`, breaking the build even though this site
// uses no `twoslash` code blocks. Stub the module out of the webpack graph
// while preserving Nextra's own webpack setup.
const previousWebpack = nextConfig.webpack;
nextConfig.webpack = (config, options) => {
  const resolved =
    typeof previousWebpack === "function"
      ? previousWebpack(config, options)
      : config;
  resolved.resolve = resolved.resolve ?? {};
  resolved.resolve.alias = {
    ...resolved.resolve.alias,
    twoslash: false,
  };
  return resolved;
};

export default nextConfig;
