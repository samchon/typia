import UnpluginTypia from "@typia/unplugin/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [UnpluginTypia({ cache: false })],
  test: {
    globalSetup: ["./vitest.setup.mjs"],
    globals: true,
    exclude: ["**/node_modules/**"],
    testTimeout: 300_000,
  },
});
