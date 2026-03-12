import { defineConfig } from "tsdown";

const config: ReturnType<typeof defineConfig> = defineConfig({
  entry: ["src/*.ts"],
  define: {
    "import.meta.vitest": "undefined",
  },
  clean: true,
  format: ["esm"],
  external: ["typescript", /^typia/],
  shims: true,
  target: "es2023",
  dts: true,
  sourcemap: true,
  hash: false,
  unused: {
    level: "error",
  },
  publint: true,
});

export default config;
