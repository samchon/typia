package main

import (
  "bytes"
  "os"
  "path/filepath"
  "runtime"
  "testing"
)

// ttscTypiaTestTypecheck requires a fixture project to be free of TypeScript
// errors, which is what makes an `@ts-expect-error` in a fixture load-bearing.
//
// It runs the build command in no-emit mode with the rewrite disabled, so the
// only diagnostics it can report are the program's own. It used to shell out to
// `pnpm exec ttsc --noEmit -p tsconfig.json`, which reported nothing and exited
// 0 for a fixture under `.tmp-ttsc-typia-tests` — `const value: number = "bad"`
// passed — so every caller was asserting against an oracle that could not fail.
// `runBuild` is the same program these tests already drive, and
// build_reports_semantic_diagnostics_test.go pins that it surfaces semantic
// diagnostics as status 2.
func ttscTypiaTestTypecheck(t *testing.T, project string) {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--noEmit",
      "--rewrite-mode", "none",
    })
  })
  if code != 0 {
    t.Fatalf("fixture typecheck failed: code=%d\nstdout=%s\nstderr=%s", code, out, errText)
  }
}

// ttscTypiaTestWriteFactoryStub installs a typia whose declaration file sits at
// the path the transformer's identity test accepts, so a fixture that also
// carries an ambient or augmenting `declare module "typia"` differs from a
// plain one only in that declaration.
func ttscTypiaTestWriteFactoryStub(t *testing.T, project string) {
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
  function createAssert<T>(): (input: unknown) => T;
  function createIs<T>(): (input: unknown) => input is T;
}
declare const typia: {
  createAssert: typeof typia.createAssert;
  createIs: typeof typia.createIs;
};
export default typia;
export declare function createAssert<T>(): (input: unknown) => T;
export declare function createIs<T>(): (input: unknown) => input is T;
`,
    filepath.Join("lib", "module.js"):      "exports.createAssert = () => () => undefined;\nexports.createIs = () => () => false;\n",
    filepath.Join("lib", "transform.js"):   "module.exports = {};\n",
    filepath.Join("lib", "transform.d.ts"): "export {};\n",
  }
  for name, body := range files {
    if err := os.WriteFile(filepath.Join(root, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write typia stub %s: %v", name, err)
    }
  }
}

func ttscTypiaTestRepoRoot(t *testing.T) string {
  t.Helper()
  _, file, _, ok := runtime.Caller(0)
  if !ok {
    t.Fatal("runtime.Caller failed")
  }
  dir := filepath.Dir(file)
  for {
    if _, err := os.Stat(filepath.Join(dir, "pnpm-workspace.yaml")); err == nil {
      return dir
    }
    next := filepath.Dir(dir)
    if next == dir {
      t.Fatalf("repo root not found from %s", file)
    }
    dir = next
  }
}

func ttscTypiaTestCapture(run func() int) (string, string, int) {
  var out bytes.Buffer
  var err bytes.Buffer
  oldStdout := stdout
  oldStderr := stderr
  stdout = &out
  stderr = &err
  defer func() {
    stdout = oldStdout
    stderr = oldStderr
  }()
  code := run()
  return out.String(), err.String(), code
}

const atomicIntersectionSchemaTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const finiteOptionNumberLeafTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const notationDynamicKeysTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`
