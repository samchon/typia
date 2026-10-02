package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestJsonStringifyConstantAtomicUnionTransform verifies separate string and numeric serializer helpers for a scalar union.
//
// JSON strings require quoting/escaping while numeric values emit numeric text; a mixed literal/atomic union cannot use one serializer for both kinds.
//
// 1. Literal and broad string/number alternatives share one union, detecting loss of either serializer kind. Runtime serialized values are outside this emission case.
// 2. Generated output contains both JSON string and JSON number serializer helpers.
//
// @evidence contracts/testing.md#behavioral-verification Generated output contains both JSON string and JSON number serializer helpers.
// @evidence contracts/testing.md#independent-expectations JSON strings require quoting/escaping while numeric values emit numeric text; a mixed literal/atomic union cannot use one serializer for both kinds.
// @evidence contracts/testing.md#distinguishing-cases Literal and broad string/number alternatives share one union, detecting loss of either serializer kind. Runtime serialized values are outside this emission case.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestJsonStringifyConstantAtomicUnionTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestJsonStringifyConstantAtomicUnionTransform(t *testing.T) {
  project := jsonStringifyConstantAtomicUnionProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("stringify union transform failed: code=%d stderr=\n%s", code, errText)
  }
  if !strings.Contains(out, "_jsonStringifyString") || !strings.Contains(out, "_jsonStringifyNumber") {
    t.Fatalf("stringify union serializer was not emitted:\n%s", out)
  }
}

func jsonStringifyConstantAtomicUnionProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "json-stringify-union-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(jsonStringifyConstantAtomicUnionTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(jsonStringifyConstantAtomicUnionSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const jsonStringifyConstantAtomicUnionTSConfig = `{
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

const jsonStringifyConstantAtomicUnionSource = `import typia from "typia";

interface SerializedRecord {
  kind: "a" | "b";
  flag: 1 | 2;
  count: number;
  name: string;
}

export const stringifyRecord = typia.json.createStringify<SerializedRecord>();
`
