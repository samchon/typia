import cp from "child_process";
import esbuild from "esbuild";
import { rimraf } from "rimraf";

/** clean lib */
rimraf("./lib");

/** build for esm */
const mjsBuild = esbuild.build({
  entryPoints: ["./src/**/*.ts"],
  outdir: "./lib",
  outExtension: {
    ".js": ".mjs",
  },
  sourcemap: true,
  treeShaking: false,
  minify: false,
  bundle: false,
  platform: "node",
  format: "esm",
});

/** build for cjs */
const cjsBuild = esbuild.build({
  entryPoints: ["./src/**/*.ts"],
  outdir: "./lib",
  outExtension: {
    ".js": ".js",
  },
  sourcemap: true,
  treeShaking: false,
  minify: false,
  bundle: false,
  platform: "node",
  format: "cjs",
});

await Promise.all([mjsBuild, cjsBuild]);

const dtsCommand = "tsc --emitDeclarationOnly";
console.info(dtsCommand);
cp.execSync(dtsCommand);
