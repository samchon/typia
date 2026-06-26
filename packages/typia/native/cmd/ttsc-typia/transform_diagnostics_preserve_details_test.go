package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"

  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

// TestTypiaTransformDiagnosticFallbacks verifies diagnostic formatting is nil-safe.
//
// Issue #1972's suggested fix explicitly called out the risk of dereferencing a
// nil diagnostic file while trying to preserve details. The command adapter must
// therefore keep a useful fallback for nil/global diagnostics and still include
// code/message details when no file location exists.
//
// 1. Convert a nil transform diagnostic.
// 2. Convert a global transform diagnostic without a source file.
// 3. Format both diagnostics and assert neither path needs a file.
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

// TestTransformProjectDiagnosticsPreserveDetails verifies project JSON output.
//
// The transform command used to collapse every transform-layer diagnostic to the
// bare string "typia transform error". A generic typia call inside a generic
// function is a compact real-world trigger: it is valid TypeScript, but typia
// cannot lower the unspecialized type parameter and raises a TransformerError.
//
// 1. Build a temporary project containing `typia.is<T>(input)`.
// 2. Run `ttsc-typia transform` in project mode.
// 3. Decode the JSON envelope and assert file, line, column, code, and message.
func TestTransformProjectDiagnosticsPreserveDetails(t *testing.T) {
  project := transformDiagnosticProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
    })
  })
  if code != 3 {
    t.Fatalf("generic transform should fail with code 3, got %d\nstdout=%s\nstderr=%s", code, out, errText)
  }

  var result transformProjectOutput
  if err := json.Unmarshal([]byte(out), &result); err != nil {
    t.Fatalf("decode transform output: %v\n%s", err, out)
  }
  if len(result.Diagnostics) != 1 {
    t.Fatalf("expected one transform diagnostic, got %+v", result.Diagnostics)
  }
  diag := result.Diagnostics[0]
  if diag.File == nil || !strings.HasSuffix(filepath.ToSlash(*diag.File), "src/main.ts") {
    t.Fatalf("diagnostic file was not preserved: %+v", diag)
  }
  if diag.Line != 3 || diag.Character != 9 {
    t.Fatalf("diagnostic location mismatch: %+v", diag)
  }
  if diag.Code != "typia.is" {
    t.Fatalf("diagnostic code mismatch: %+v", diag)
  }
  if diag.MessageText == typiaTransformDiagnosticFallbackMessage ||
    !strings.Contains(diag.MessageText, "non-specified generic argument") {
    t.Fatalf("diagnostic message did not preserve detail: %+v", diag)
  }
}

// TestBuildDiagnosticsPreserveDetails verifies build stderr output.
//
// Issue #1972 named both command entrypoints. Project JSON proves the transform
// path, while build mode has a separate AddDiagnostic callback and pretty
// formatter. This test forces emit so typia's transformer actually runs.
//
// 1. Build the same generic typia fixture.
// 2. Run `ttsc-typia build --emit` into a temporary outDir.
// 3. Assert stderr contains the relative source location, typia code, and cause.
func TestBuildDiagnosticsPreserveDetails(t *testing.T) {
  project := transformDiagnosticProject(t)
  _, errText, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--emit",
      "--outDir", filepath.Join(project, "dist"),
    })
  })
  if code != 3 {
    t.Fatalf("generic build should fail with code 3, got %d\nstderr=%s", code, errText)
  }
  normalized := filepath.ToSlash(errText)
  if !strings.Contains(normalized, "src/main.ts:3:9 - error TS(typia.is):") ||
    !strings.Contains(normalized, "non-specified generic argument") {
    t.Fatalf("build diagnostic did not preserve location/code/message:\n%s", errText)
  }
  if strings.Contains(normalized, "error TS(): typia transform error") {
    t.Fatalf("build diagnostic still looks like the swallowed fallback:\n%s", errText)
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
