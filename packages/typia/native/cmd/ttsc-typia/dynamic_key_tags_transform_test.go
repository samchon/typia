package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestDynamicKeyTagsTransform verifies both pattern and length constraints on dynamic property keys.
//
// Pattern-tagged and length-tagged index keys have different constraints from their string-valued entries. Separate authored key types supply the two emitted checks.
//
// 1. Separate dynamic record types carry pattern and minimum length tags; numeric, plain and template keys also contribute fixture inputs.
// 2. Generated checking contains a RegExp predicate and the lower string-length helper, rather than checking only record values.
//
// @evidence contracts/testing.md#behavioral-verification Generated checking contains a RegExp predicate and the lower string-length helper, rather than checking only record values.
// @evidence contracts/testing.md#independent-expectations The authored Pattern<"^ab+$"> and MinLength<3> belong to separate index-key types and require emitted key checks independently of their string-valued entries.
// @evidence contracts/testing.md#distinguishing-cases The assertions require pattern and lower-length helpers somewhere in the combined emission, not their runtime verdicts or every export's complete predicate. Numeric, plain and template keys are additional successfully transformed inputs.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestDynamicKeyTagsTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestDynamicKeyTagsTransform(t *testing.T) {
  project := dynamicKeyTagsProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("dynamic key tags transform failed: code=%d stderr=\n%s", code, errText)
  }
  // The key is read into a local before it is tested, so its predicate is the
  // one place the emitted text can show the check exists at all.
  if !strings.Contains(out, "RegExp(") || !strings.Contains(out, "_stringLengthGte") {
    t.Fatalf("emitted checker should test the dynamic key, not only its value:\n%s", out)
  }
}

func dynamicKeyTagsProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "dynamic-key-tags-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(dynamicKeyTagsTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(dynamicKeyTagsSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const dynamicKeyTagsTSConfig = `{
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

const dynamicKeyTagsSource = `import typia, { tags } from "typia";

interface IPatternKey {
  [key: string & tags.Pattern<"^ab+$">]: string;
}
interface ILengthKey {
  [key: string & tags.MinLength<3>]: string;
}
interface INumericKey {
  [key: number & tags.Minimum<0> & tags.Maximum<9>]: string;
}
interface IPlainKey {
  [key: string]: string;
}
interface ITemplateKey {
  [key: ` + "`" + `prefix_${string}` + "`" + `]: string;
}

export const isPatternKey = typia.createIs<IPatternKey>();
export const isLengthKey = typia.createIs<ILengthKey>();
export const isNumericKey = typia.createIs<INumericKey>();
export const isPlainKey = typia.createIs<IPlainKey>();
export const isTemplateKey = typia.createIs<ITemplateKey>();
`
