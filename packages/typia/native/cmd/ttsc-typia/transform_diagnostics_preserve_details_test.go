package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"

  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

// TestTypiaTransformDiagnosticFallbacks checks the authored operation results described below.
//
// A missing diagnostic needs a stable fallback, while a global error has no source coordinate to invent.
//
// 1. Nil and populated global diagnostic inputs distinguish fallback creation from preserving an actual message.
// 2. Nil diagnostic input uses the documented fallback; global diagnostics keep zero/absent location and format their own code/message.
//
// @evidence contracts/testing.md#behavioral-verification Nil diagnostic input uses the documented fallback; global diagnostics keep zero/absent location and format their own code/message.
// @evidence contracts/testing.md#independent-expectations A missing diagnostic needs a stable fallback, while a global error has no source coordinate to invent.
// @evidence contracts/testing.md#distinguishing-cases Nil and populated global diagnostic inputs distinguish fallback creation from preserving an actual message.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestTypiaTransformDiagnosticFallbacks as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestTypiaTransformDiagnosticFallbacks(t *testing.T) {
  fallback := typiaTransformDiagnosticFrom(nil)
  if fallback.Message != typiaTransformDiagnosticFallbackMessage {
    t.Fatalf("nil diagnostic fallback mismatch: %+v", fallback)
  }

  global := typiaTransformDiagnosticFrom(&nativecontext.ITypiaDiagnostic{
    Code:    "typia.global",
    Message: "global transform failure",
  })
  if global.File != "" || global.Line != 0 || global.Column != 0 {
    t.Fatalf("global diagnostic should not invent a location: %+v", global)
  }
  formatted := global.String(t.TempDir())
  if !strings.Contains(formatted, "error TS(typia.global): global transform failure") {
    t.Fatalf("global diagnostic did not format code/message: %s", formatted)
  }
}

func transformDiagnosticProject(t *testing.T) string {
  t.Helper()
  dir := t.TempDir()
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(transformDiagnosticTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  transformDiagnosticWriteTypiaStub(t, dir)
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(transformDiagnosticSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func transformDiagnosticWriteTypiaStub(t *testing.T, project string) {
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
    path := filepath.Join(root, name)
    if err := os.WriteFile(path, []byte(body), 0o644); err != nil {
      t.Fatalf("write typia stub %s: %v", name, err)
    }
  }
}

const transformDiagnosticTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src"]
}
`

const transformDiagnosticSource = `import typia from "typia";
export function generic<T>(input: T): boolean {
  return typia.is<T>(input);
}
`
