import { defineConfig } from "@rslib/core";
import type { RsbuildPlugin } from "@rsbuild/core";

/**
* Add .js to import statements from @samchon/openapi/lib
* esm needs extension for import statements, and bundler won't add it automatically for external packages
*
* @example
* ```ts
* import * as foo from "@samchon/openapi/lib/composers/LlmSchemaComposer";
* // will be transformed to
* import * as foo from "@samchon/openapi/lib/composers/LlmSchemaComposer.mjs";
* ```
*/
export const AddJsToSamchonOpenAPI = (extension: 'mjs' | 'js'): RsbuildPlugin => ({
  name: "add-js-to-samchon-openapi",
  setup(api) {
    api.transform(
      { test: /\.ts$/ },
      ({ code }) => {
        if(!code.includes('@samchon/openapi/lib')) {
          return code;
        }
        return code.replace(/import (.+) from "(.+)"/g, (m: string, m1: string, m2: string) => {
          if(m2?.startsWith('@samchon/openapi/lib')) {
            return `import ${m1} from "${m2}.${extension}"`;
          }
          return m;
        })
      }
    );
  }
})


export default defineConfig({
  source: {
    entry: {
      index: [
        "./src/**",
      ],
    }
  },
  lib: [
    {
      format: "cjs",
      bundle: false,
      output: {
        filename: {
          js: "[name].js",
        },
        distPath: {
          root: "./lib",
        },
        sourceMap: true,
      },
    },
    {
      format: "esm",
      bundle: false,
      dts: true,
      output: {
        filename: {
          js: "[name].mjs",
        },
        distPath: {
          root: "./lib",
        },
        sourceMap: true,
      },
      plugins: [
        AddJsToSamchonOpenAPI('mjs')
      ],
    },
  ],
});
