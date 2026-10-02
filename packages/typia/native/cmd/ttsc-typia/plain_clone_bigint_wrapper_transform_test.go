package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainCloneBigIntWrapperTransform verifies unboxing BigInt wrappers in clone emission.
//
// A boxed bigint stores its value behind valueOf; calling BigInt without that value cannot reconstruct the source content.
//
// 1. The wrapper fixture exercises boxed bigint while rejecting the empty-constructor spelling; primitive and deep graph clone behavior belongs to the dedicated clone cases.
// 2. The output invokes valueOf and does not emit a bare zero-argument BigInt constructor.
//
// @evidence contracts/testing.md#behavioral-verification The output invokes valueOf and does not emit a bare zero-argument BigInt constructor.
// @evidence contracts/testing.md#independent-expectations A boxed bigint stores its value behind valueOf; calling BigInt without that value cannot reconstruct the source content.
// @evidence contracts/testing.md#distinguishing-cases The wrapper fixture exercises boxed bigint while rejecting the empty-constructor spelling; primitive and deep graph clone behavior belongs to the dedicated clone cases.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestPlainCloneBigIntWrapperTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestPlainCloneBigIntWrapperTransform(t *testing.T) {
  project := plainCloneBigIntWrapperProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("bigint wrapper clone transform failed: code=%d stderr=\n%s", code, errText)
  }
  if !strings.Contains(out, ".valueOf()") {
    t.Fatalf("bigint wrapper clone should unbox through valueOf:\n%s", out)
  }
  if strings.Contains(out, "BigInt()") {
    t.Fatalf("bigint wrapper clone must not emit a bare BigInt() call:\n%s", out)
  }
}

func plainCloneBigIntWrapperProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "plain-clone-bigint-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(plainCloneBigIntWrapperTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(plainCloneBigIntWrapperSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const plainCloneBigIntWrapperTSConfig = `{
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

const plainCloneBigIntWrapperSource = `import typia from "typia";

interface BoxedRecord {
  big_value: BigInt;
}

export const cloneInterface = typia.plain.createClone<BigInt>();
export const cloneUnion = typia.plain.createClone<bigint | BigInt>();
export const assertCloneInterface = typia.plain.createAssertClone<BigInt>();
export const camelRecord = typia.notations.createCamel<BoxedRecord>();
`
