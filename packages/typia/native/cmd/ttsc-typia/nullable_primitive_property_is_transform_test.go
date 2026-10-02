package main

import (
  "bytes"
  "os"
  "path/filepath"
  "runtime"
  "strings"
  "testing"
)

// TestNullablePrimitivePropertyIsTransform verifies null alternatives on required primitive property checks.
//
// A required primitive-or-null property admits either value category and excludes missing/undefined; neither union order nor nesting changes that TypeScript meaning.
//
// 1. Three primitive kinds, reversed union spelling and nested properties pin the generated disjunction. Missing/undefined runtime outcomes are not executed here.
// 2. Emission contains null-or-primitive guards for number, string and boolean members, reversed number spelling and nested value fields.
//
// @evidence contracts/testing.md#behavioral-verification Emission contains null-or-primitive guards for number, string and boolean members, reversed number spelling and nested value fields.
// @evidence contracts/testing.md#independent-expectations A required primitive-or-null property admits either value category and excludes missing/undefined; neither union order nor nesting changes that TypeScript meaning.
// @evidence contracts/testing.md#distinguishing-cases Three primitive kinds, reversed union spelling and nested properties pin the generated disjunction. Missing/undefined runtime outcomes are not executed here.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestNullablePrimitivePropertyIsTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestNullablePrimitivePropertyIsTransform(t *testing.T) {
  project := nullablePrimitivePropertyProject(t)
  out := nullablePrimitivePropertyTransform(t, project, "ts")

  nullablePrimitivePropertyContainsAll(t, out, []string{
    `null === input.number || "number" === typeof input.number`,
    `null === input.string || "string" === typeof input.string`,
    `null === input.boolean || "boolean" === typeof input.boolean`,
    `null === input.reversedNumber || "number" === typeof input.reversedNumber`,
    `null === input.value || "string" === typeof input.value`,
    `null === input.value || "boolean" === typeof input.value`,
  })
}

func nullablePrimitivePropertyProject(t *testing.T) string {
  t.Helper()
  root := nullablePrimitivePropertyRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "nullable-primitive-is-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(nullablePrimitivePropertyTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(nullablePrimitivePropertySource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func nullablePrimitivePropertyRepoRoot(t *testing.T) string {
  t.Helper()
  _, file, _, ok := runtime.Caller(0)
  if !ok {
    t.Fatal("runtime.Caller failed")
  }
  dir := filepath.Dir(file)
  for {
    if _, err := os.Stat(filepath.Join(dir, "pnpm-workspace.yaml")); err == nil {
      return dir
    }
    next := filepath.Dir(dir)
    if next == dir {
      t.Fatalf("repo root not found from %s", file)
    }
    dir = next
  }
}

func nullablePrimitivePropertyCapture(run func() int) (string, string, int) {
  var out bytes.Buffer
  var err bytes.Buffer
  oldStdout := stdout
  oldStderr := stderr
  stdout = &out
  stderr = &err
  defer func() {
    stdout = oldStdout
    stderr = oldStderr
  }()
  code := run()
  return out.String(), err.String(), code
}

func nullablePrimitivePropertyTransform(t *testing.T, project string, output string) string {
  t.Helper()
  out, errText, code := nullablePrimitivePropertyCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", output,
    })
  })
  if code != 0 {
    t.Fatalf("nullable primitive transform failed: output=%s code=%d stderr=\n%s", output, code, errText)
  }
  return out
}

func nullablePrimitivePropertyContainsAll(t *testing.T, text string, expected []string) {
  t.Helper()
  for _, needle := range expected {
    if !strings.Contains(text, needle) {
      t.Fatalf("expected transform output to contain %q:\n%s", needle, text)
    }
  }
}

const nullablePrimitivePropertyTSConfig = `{
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

const nullablePrimitivePropertySource = `import typia from "typia";

interface NullablePrimitiveProperties {
  number: number | null;
  string: string | null;
  boolean: boolean | null;
  reversedNumber: null | number;
  nested: {
    value: string | null;
  };
  array: Array<{
    value: boolean | null;
  }>;
}

export const isNullablePrimitive = (input: unknown): boolean =>
  typia.is<NullablePrimitiveProperties>(input);
`
