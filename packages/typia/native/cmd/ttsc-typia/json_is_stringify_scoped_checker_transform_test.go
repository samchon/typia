package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestJsonIsStringifyScopedCheckerTransform verifies scoped checker and toJSON handling in checked stringification.
//
// Checked stringify validates the value being serialized, including declared toJSON projections, and nested helper references need their own emitted bindings.
//
// 1. The fixture combines toJSON-bearing and nested checked serialization shapes; unchecked serialization branches are owned by the constant/atomic union case.
// 2. Emission retains toJSON handling and materializes scoped is helpers for validation before serialization.
//
// @evidence contracts/testing.md#behavioral-verification Emission retains toJSON handling and materializes scoped is helpers for validation before serialization.
// @evidence contracts/testing.md#independent-expectations Checked stringify validates the value being serialized, including declared toJSON projections, and nested helper references need their own emitted bindings.
// @evidence contracts/testing.md#distinguishing-cases The fixture combines toJSON-bearing and nested checked serialization shapes; unchecked serialization branches are owned by the constant/atomic union case.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestJsonIsStringifyScopedCheckerTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestJsonIsStringifyScopedCheckerTransform(t *testing.T) {
  project := jsonIsStringifyScopedCheckerProject(t)
  js := jsonIsStringifyScopedCheckerTransform(t, project)
  if !strings.Contains(js, "toJSON") {
    t.Fatalf("stringify fixture did not exercise toJSON emission:\n%s", js)
  }
  if !strings.Contains(js, "const _si") {
    t.Fatalf("validated stringify did not emit scoped is-check helpers:\n%s", js)
  }
}

func jsonIsStringifyScopedCheckerProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "json-is-stringify-scoped-checker-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(jsonIsStringifyScopedCheckerTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(jsonIsStringifyScopedCheckerSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func jsonIsStringifyScopedCheckerTransform(t *testing.T, project string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("json isStringify transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

const jsonIsStringifyScopedCheckerTSConfig = `{
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

const jsonIsStringifyScopedCheckerSource = `import typia from "typia";

interface JsonAlpha {
  data: {
    value: string;
  };
}

interface JsonBeta {
  data: {
    count: number;
  };
}

interface JsonBacked {
  id: string;
  toJSON(): JsonAlpha | JsonBeta;
}

interface Payload {
  item: JsonBacked;
  children: Payload[];
}

export const stringifyPayload = (input: unknown): string | null =>
  typia.json.isStringify<Payload>(input);
`
