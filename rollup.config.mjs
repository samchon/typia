import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commomnjs from "@rollup/plugin-commonjs";
import autoExternal from "rollup-plugin-auto-external";
import nodeExternals from 'rollup-plugin-node-externals'
import { globSync } from "tinyglobby";

export default {
  input: globSync("./src/**/*.ts"),
  output: {
    dir: "./lib",
    format: "esm",
    sourcemap: true,
    entryFileNames: (chunkInfo) => {
      const ext = `mjs`;
      const nodeModulesDir = `node_modules`;
      if (chunkInfo.name.includes(nodeModulesDir)) {
        throw new Error(`Invalid chunk name: ${chunkInfo.name}`);
      }
      return `[name].${ext}`;
    },
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  plugins: [
    {
      name: "add-js-to-samchon-openapi",
      renderChunk(code) {
        return code.replace(/import (.+) from "(.+)"/g, (m, m1, m2) => {
          if(m2.startWith('@samchon/openapi/lib')) {
            return `import ${m1} from "${m2}.mjs"`
          }
          return m;
        })
      },
      resolveId(id) {
        if (id.startsWith("@samchon/openapi/lib")) {
          return {
            id: id + ".mjs",
            external: true,
          }
        }
      },
    },
    nodeResolve(),
    autoExternal(),
    nodeExternals(),
    commomnjs(),
    typescript({
      tsconfig: "tsconfig.json",
      module: "ESNext",
      target: "ESNext",
    }),
  ],
};
