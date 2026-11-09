package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainCloneEmptyObjectTransform verifies clone emission for an object type without properties.
//
// An arrow function whose body starts with `{` is a block, so a clone helper emitted as `input => {}` returns undefined instead of an empty object (#2536).
//
// 1. The fixture clones `{}` and `object` at the root, as a property, as a Map value and through isClone/assertClone, beside a sibling property that must still be copied.
// 2. The output emits every empty clone helper as a parenthesized object literal, never as an empty block body, and keeps the sibling property assignment.
//
// @evidence contracts/testing.md#behavioral-verification The output emits every empty clone helper as a parenthesized object literal, never as an empty block body, and keeps the sibling property assignment.
// @evidence contracts/testing.md#independent-expectations An arrow function whose body starts with `{` is a block, so a clone helper emitted as `input => {}` returns undefined instead of an empty object (#2536).
// @evidence contracts/testing.md#distinguishing-cases The fixture clones `{}` and `object` at the root, as a property, as a Map value and through isClone/assertClone, beside a sibling property that must still be copied.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestPlainCloneEmptyObjectTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestPlainCloneEmptyObjectTransform(t *testing.T) {
  project := plainCloneEmptyObjectProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("empty object clone transform failed: code=%d stderr=\n%s", code, errText)
  }
  if strings.Contains(out, "=> {}") {
    t.Fatalf("empty object clone must not emit an empty arrow block body:\n%s", out)
  }
  if !strings.Contains(out, "=> ({})") {
    t.Fatalf("empty object clone should emit a parenthesized empty object literal:\n%s", out)
  }
  if !strings.Contains(out, "b: input.b") {
    t.Fatalf("sibling property of an empty object should still be cloned:\n%s", out)
  }
}

func plainCloneEmptyObjectProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "plain-clone-empty-object-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(plainCloneEmptyObjectTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(plainCloneEmptyObjectSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const plainCloneEmptyObjectTSConfig = `{
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

const plainCloneEmptyObjectSource = `import typia from "typia";

export const cloneRoot = typia.plain.createClone<{}>();
export const cloneObjectKeyword = typia.plain.createClone<object>();
export const cloneProperty = typia.plain.createClone<{ a: {}; b: number }>();
export const cloneMapValue = typia.plain.createClone<Map<string, {}>>();
export const isClone = typia.plain.createIsClone<{}>();
export const assertClone = typia.plain.createAssertClone<{ a: object }>();
`
