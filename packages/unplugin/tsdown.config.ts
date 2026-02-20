import { defineConfig } from "tsdown";

const entries = {
  index: "src/index.ts",
  api: "src/api.ts",
  vite: "src/vite.ts",
  webpack: "src/webpack.ts",
  rollup: "src/rollup.ts",
  esbuild: "src/esbuild.ts",
  next: "src/next.ts",
  bun: "src/bun.ts",
  rspack: "src/rspack.ts",
  farm: "src/farm.ts",
  rolldown: "src/rolldown.ts",
};

export default defineConfig({
  entry: entries,
  format: ["esm"],
  target: "es2022",
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: "lib",
  external: ["typia", "typescript", "vite", "svelte"],
  // Use hash in filenames only for chunks, not entry points
  hash: false,
});
