import glob from "fast-glob";
import { exec } from "node:child_process";
import { copyFile } from "node:fs/promises";
import { promisify } from "node:util";
import { defineConfig } from "tsup";

const outDir = "lib" as const;

export default defineConfig((options) => ({
  entry: ["src/**/*.ts"],
  outDir,
  clean: true,
  format: ["cjs", "esm"],
  sourcemap: true,
  splitting: true,
  /**
   * because tsup's dts causes out of memory, we use tsc
   * @link https://github.com/egoist/tsup/issues/920
   */
  dts: false,
  async onSuccess() {
    const pexec = promisify(exec);
    try {
      await pexec("tsc --emitDeclarationOnly --declaration");
      const files = await glob(`${outDir}/**/*.d.ts`);
      await Promise.all(
        /**
         * rename `.d.ts` to `.d.mts` for `.cjs` projects
         * or to `.d.cjs` for `"type": "module"` projects
         */
        files.map((file) => copyFile(file, file.replace(".d.ts", ".d.mts"))),
      );
    } catch (err) {
      console.error();
      console.error("Typescript compilation error:");
      console.error();
      console.error(err.stdout);
      throw err;
    }
  },
  ...options,
}));
