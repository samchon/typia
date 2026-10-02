package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestNotationPascalCaseTransform verifies Pascal spelling with normalized component case.
//
// Pascal notation uppercases each component head while normalizing the remainder; preserving every original uppercase character would violate that convention.
//
// 1. Separator and uppercase source forms are paired with correct target keys and specifically forbidden unlowercased outputs.
// 2. The output contains expected Pascal keys and excludes the authored unnormalized uppercase key spellings.
//
// @evidence contracts/testing.md#behavioral-verification The output contains expected Pascal keys and excludes the authored unnormalized uppercase key spellings.
// @evidence contracts/testing.md#independent-expectations Pascal notation uppercases each component head while normalizing the remainder; preserving every original uppercase character would violate that convention.
// @evidence contracts/testing.md#distinguishing-cases Separator and uppercase source forms are paired with correct target keys and specifically forbidden unlowercased outputs.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestNotationPascalCaseTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestNotationPascalCaseTransform(t *testing.T) {
  project := notationPascalCaseProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("pascal notation transform failed: code=%d stderr=\n%s", code, errText)
  }
  for _, key := range []string{"MaxCount", "HttpPort", "UserId", "FoobarBaz", "InnerValue"} {
    if !strings.Contains(out, key) {
      t.Fatalf("emitted converter should contain PascalCase key %q:\n%s", key, out)
    }
  }
  for _, bug := range []string{"MAXCOUNT", "HTTPPORT", "FooBarBaz", "INNERVALUE"} {
    if strings.Contains(out, bug) {
      t.Fatalf("emitted converter must not keep the un-lowercased key %q:\n%s", bug, out)
    }
  }
}

func notationPascalCaseProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "notation-pascal-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(notationPascalCaseTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(notationPascalCaseSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const notationPascalCaseTSConfig = `{
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

const notationPascalCaseSource = `import typia from "typia";

interface SourceRecord {
  MAX_COUNT: number;
  HTTP_PORT: number;
  USER_ID: number;
  fooBar_baz: number;
  _MAX_COUNT: number;
  userID: number;
  ID: number;
  nested: { INNER_VALUE: number };
}

type DynamicRecord = Record<string, { DEEP_VALUE: number }>;

export const toPascal = typia.notations.createPascal<SourceRecord>();
export const isPascal = typia.notations.createIsPascal<SourceRecord>();
export const assertPascal = typia.notations.createAssertPascal<SourceRecord>();
export const validatePascal =
  typia.notations.createValidatePascal<SourceRecord>();
export const toPascalDynamic = typia.notations.createPascal<DynamicRecord>();
`
