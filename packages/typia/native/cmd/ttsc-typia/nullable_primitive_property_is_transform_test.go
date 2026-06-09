package main

import (
  "bytes"
  "os"
  "path/filepath"
  "runtime"
  "strings"
  "testing"
)

// TestNullablePrimitivePropertyIsTransform verifies nullable primitive
// properties keep their null guard in typia.is().
//
// The object-property checker must not collapse `primitive | null` to the
// primitive `typeof` branch. Required nullable properties exercise the branch
// reported in #1806 because no optional-property shortcut can accept the value.
//
//  1. Transform a fixture with required number, string, and boolean nullable
//     properties.
//  2. Assert each property keeps both the primitive guard and the null guard.
//  3. Cover normal and reversed union order plus nested object and array entries.
func TestNullablePrimitivePropertyIsTransform(t *testing.T) {
  project := nullablePrimitivePropertyProject(t)
  out, errText, code := nullablePrimitivePropertyCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "ts",
    })
  })
  if code != 0 {
    t.Fatalf("nullable primitive transform failed: code=%d stderr=\n%s", code, errText)
  }

  nullablePrimitivePropertyContainsAll(t, out, []string{
    `"number" === typeof input.number`,
    `null === input.number`,
    `"string" === typeof input.string`,
    `null === input.string`,
    `"boolean" === typeof input.boolean`,
    `null === input.boolean`,
    `"number" === typeof input.reversedNumber`,
    `null === input.reversedNumber`,
    `"string" === typeof input.value`,
    `null === input.value`,
    `"boolean" === typeof input.value`,
  })
  if strings.Count(out, `null === input.value`) < 2 {
    t.Fatalf("expected nested and array nullable value guards, output:\n%s", out)
  }
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
    "skipLibCheck": true,
    "rootDir": "src",
    "outDir": "dist"
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
export const createIsNullablePrimitive =
  typia.createIs<NullablePrimitiveProperties>();
`
