import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    globals: true,
    testTimeout: 150_000,
  },
  resolve: {
    alias: {
      "@typia/unplugin": path.resolve(
        __dirname,
        "../../packages/unplugin/src",
      ),
    },
  },
});
