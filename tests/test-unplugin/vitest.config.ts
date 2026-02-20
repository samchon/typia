import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    testTimeout: 150000,
    include: ["src/**/*.spec.ts"],
  },
});
