package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// playgroundPayloadCase is one row of the #1887 regression matrix for the
// playground host: the tsconfig the site writes into MemFS, the payload it hands
// the plugin alongside it, and whether typia's `functional` option is on.
//
// The rows are stated independently of typia's CLI hosts on purpose. The
// playground previously carried a byte-identical copy of the CLI's tsconfig
// scrape, and its test pinned that copy against the other copy -- so both could
// be, and were, wrong together. The oracle here is ttsc's plugin payload
// contract, which is what the site actually sends.
type playgroundPayloadCase struct {
  name        string
  base        string
  leafPlugins string
  payload     string
  functional  bool
}

// playgroundPayloadCases returns the matrix the playground host must satisfy.
func playgroundPayloadCases() []playgroundPayloadCase {
  return []playgroundPayloadCase{
    {
      // The shape the site generates today: the resolved entry, inline, with the
      // options the playground's UI selected.
      name:        "option inline on typia's entry",
      leafPlugins: `[{ "transform": "typia/lib/transform", "functional": true }]`,
      payload:     `[{"config":{"transform":"typia/lib/transform","functional":true},"name":"typia","stage":"transform"}]`,
      functional:  true,
    },
    {
      name: "option commented out with a line comment",
      leafPlugins: `[{
        "transform": "typia/lib/transform"
        // "functional": true
      }]`,
      payload:    `[{"config":{"transform":"typia/lib/transform"},"name":"typia","stage":"transform"}]`,
      functional: false,
    },
    {
      name: "option commented out with a block comment",
      leafPlugins: `[{
        "transform": "typia/lib/transform"
        /* "functional": true */
      }]`,
      payload:    `[{"config":{"transform":"typia/lib/transform"},"name":"typia","stage":"transform"}]`,
      functional: false,
    },
    {
      name: "option owned by another plugin's entry",
      leafPlugins: `[
        { "transform": "other/lib/transform", "functional": true },
        { "transform": "typia/lib/transform" }
      ]`,
      payload: `[
        {"config":{"transform":"other/lib/transform","functional":true},"name":"other","stage":"transform"},
        {"config":{"transform":"typia/lib/transform"},"name":"typia","stage":"transform"}
      ]`,
      functional: false,
    },
    {
      name: "option declared in a base tsconfig the leaf extends",
      base: `{
  "compilerOptions": {
    "plugins": [{ "transform": "typia/lib/transform", "functional": true }]
  }
}
`,
      payload:    `[{"config":{"transform":"typia/lib/transform","functional":true},"name":"typia","stage":"transform"}]`,
      functional: true,
    },
  }
}

// playgroundPayloadProject materializes one row as a real project on disk.
func playgroundPayloadProject(t *testing.T, tc playgroundPayloadCase) string {
  t.Helper()
  project := t.TempDir()
  src := filepath.Join(project, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }

  extends := ""
  if tc.base != "" {
    if err := os.WriteFile(filepath.Join(project, "tsconfig.base.json"), []byte(tc.base), 0o644); err != nil {
      t.Fatalf("write base tsconfig: %v", err)
    }
    extends = `"extends": "./tsconfig.base.json",
  `
  }
  plugins := ""
  if tc.leafPlugins != "" {
    plugins = `,
    "plugins": ` + tc.leafPlugins
  }
  config := `{
  ` + extends + `"compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "rootDir": "src",
    "outDir": "dist"` + plugins + `
  },
  "include": ["src"]
}
`
  if err := os.WriteFile(filepath.Join(project, "tsconfig.json"), []byte(config), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  playgroundPayloadWriteTypiaStub(t, project)
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(playgroundPayloadSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return project
}

// playgroundPayloadWriteTypiaStub installs a declaration-only typia the fixture
// can import. The playground wasm links typia's transform directly, so the stub
// only has to satisfy module resolution and the type checker.
func playgroundPayloadWriteTypiaStub(t *testing.T, project string) {
  t.Helper()
  root := filepath.Join(project, "node_modules", "typia")
  lib := filepath.Join(root, "lib")
  if err := os.MkdirAll(lib, 0o755); err != nil {
    t.Fatalf("mkdir typia stub: %v", err)
  }
  files := map[string]string{
    "package.json": `{
  "name": "typia",
  "version": "0.0.0-test",
  "main": "./lib/module.js",
  "types": "./lib/module.d.ts",
  "exports": {
    ".": {
      "types": "./lib/module.d.ts",
      "default": "./lib/module.js"
    },
    "./lib/transform": "./lib/transform.js"
  },
  "ttsc": {
    "plugin": { "transform": "typia/lib/transform" }
  }
}
`,
    filepath.Join("lib", "module.d.ts"): `declare namespace typia {
  function is<T>(input: unknown): input is T;
}
declare const typia: {
  is: typeof typia.is;
};
export default typia;
export declare function is<T>(input: unknown): input is T;
`,
    filepath.Join("lib", "module.js"):      "exports.is = () => false;\n",
    filepath.Join("lib", "transform.js"):   "module.exports = {};\n",
    filepath.Join("lib", "transform.d.ts"): "export {};\n",
  }
  for name, body := range files {
    if err := os.WriteFile(filepath.Join(root, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write typia stub %s: %v", name, err)
    }
  }
}

// playgroundPayloadAssert checks one host's output against the row's expected
// option state.
func playgroundPayloadAssert(t *testing.T, tc playgroundPayloadCase, output string) {
  t.Helper()
  checked := strings.Contains(output, playgroundPayloadFunctionalNeedle)
  if checked == tc.functional {
    return
  }
  if tc.functional {
    t.Fatalf("functional is configured on but the validator skipped the function property:\n%s", output)
  }
  t.Fatalf("functional is not configured but the validator checked the function property:\n%s", output)
}

// playgroundPayloadFunctionalNeedle is the guard typia emits for the
// function-typed property only when `functional` is enabled.
const playgroundPayloadFunctionalNeedle = `"function" === typeof input.cb`

const playgroundPayloadSource = `import typia from "typia";
export interface IX {
  value: number;
  cb: () => void;
}
export const check = (input: unknown): boolean => typia.is<IX>(input);
`
