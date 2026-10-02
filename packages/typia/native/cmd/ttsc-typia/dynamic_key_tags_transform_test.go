package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestDynamicKeyTagsTransform verifies both pattern and length constraints on dynamic property keys.
//
// A constrained index key must satisfy both its key pattern and length tag independently of the value type. The authored key intersection supplies these two requirements.
//
// 1. Dynamic record keys combine pattern and minimum length; untagged key/native property behavior is owned by adjacent key and property cases.
// 2. Generated checking contains a RegExp predicate and the lower string-length helper, rather than checking only record values.
//
// @evidence contracts/testing.md#behavioral-verification Generated checking contains a RegExp predicate and the lower string-length helper, rather than checking only record values.
// @evidence contracts/testing.md#independent-expectations A constrained index key must satisfy both its key pattern and length tag independently of the value type. The authored key intersection supplies these two requirements.
// @evidence contracts/testing.md#distinguishing-cases Dynamic record keys combine pattern and minimum length; untagged key/native property behavior is owned by adjacent key and property cases.
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
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "dynamic-key-tags-")
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
