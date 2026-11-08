package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestNotationEmptyObjectTransform verifies notation emission for an object type without properties.
//
// An arrow function whose body starts with `{` is a block, so a notation helper emitted as `input => {}` returns undefined instead of an empty object (#2536).
//
// 1. The fixture converts `{}` and `object` at the root and as a property through camel, snake and pascal notations, beside a sibling property that must still be renamed.
// 2. The output emits every empty notation helper as a parenthesized object literal, never as an empty block body, and keeps the renamed sibling property.
//
// @evidence contracts/testing.md#behavioral-verification The output emits every empty notation helper as a parenthesized object literal, never as an empty block body, and keeps the renamed sibling property.
// @evidence contracts/testing.md#independent-expectations An arrow function whose body starts with `{` is a block, so a notation helper emitted as `input => {}` returns undefined instead of an empty object (#2536).
// @evidence contracts/testing.md#distinguishing-cases The fixture converts `{}` and `object` at the root and as a property through camel, snake and pascal notations, beside a sibling property that must still be renamed.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestNotationEmptyObjectTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestNotationEmptyObjectTransform(t *testing.T) {
  project := notationEmptyObjectProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("empty object notation transform failed: code=%d stderr=\n%s", code, errText)
  }
  if strings.Contains(out, "=> {}") {
    t.Fatalf("empty object notation must not emit an empty arrow block body:\n%s", out)
  }
  if !strings.Contains(out, "=> ({})") {
    t.Fatalf("empty object notation should emit a parenthesized empty object literal:\n%s", out)
  }
  if !strings.Contains(out, "second_value") {
    t.Fatalf("sibling property of an empty object should still be renamed:\n%s", out)
  }
}

func notationEmptyObjectProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "notation-empty-object-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(notationEmptyObjectTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(notationEmptyObjectSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const notationEmptyObjectTSConfig = `{
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

const notationEmptyObjectSource = `import typia from "typia";

export const camelRoot = typia.notations.createCamel<{}>();
export const snakeProperty = typia.notations.createSnake<{ firstValue: {}; secondValue: number }>();
export const pascalObjectKeyword = typia.notations.createPascal<object>();
`
