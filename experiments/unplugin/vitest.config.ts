import UnpluginTypia from "@typia/unplugin/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [UnpluginTypia({ cache: false })],
  test: {
    globals: true,
    exclude: ["**/node_modules/**"],
  },
});
