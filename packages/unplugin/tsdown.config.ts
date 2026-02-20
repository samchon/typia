import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
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
  },
  format: ["esm"],
  target: "es2022",
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: "lib",
  external: ["typia", "typescript", "vite", "svelte"],
});
