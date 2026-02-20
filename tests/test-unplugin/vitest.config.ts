import { defineConfig } from "vitest/config";
import { resolve } from "path";

const packagesDir = resolve(__dirname, "../../packages");

export default defineConfig({
  resolve: {
    alias: {
      // Force vitest to use built lib instead of src
      "@typia/core": resolve(packagesDir, "core/lib/index.js"),
      "@typia/transform": resolve(packagesDir, "transform/lib/index.js"),
      "@typia/interface": resolve(packagesDir, "interface/lib/index.js"),
      "@typia/utils": resolve(packagesDir, "utils/lib/index.js"),
    },
  },
  test: {
    globals: true,
    testTimeout: 150000,
    include: ["src/**/*.spec.ts"],
  },
});
