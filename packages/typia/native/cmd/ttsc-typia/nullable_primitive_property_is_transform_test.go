package main

import (
  "bytes"
  "os"
  "os/exec"
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
//  3. Execute the emitted validator against primitive, null, missing, and
//     undefined runtime cases.
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
  nullablePrimitivePropertyRunRuntimeCases(
    t,
    project,
    nullablePrimitivePropertyTransform(t, project, "js"),
  )
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

func nullablePrimitivePropertyRunRuntimeCases(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  if err := os.WriteFile(filepath.Join(runtimeDir, "typia-stub.cjs"), []byte("module.exports = {};\n"), 0o644); err != nil {
    t.Fatalf("write typia stub: %v", err)
  }
  runtimeJS := strings.ReplaceAll(js, `require("typia")`, `require("./typia-stub.cjs")`)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(nullablePrimitivePropertyRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = project
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("nullable primitive runtime cases failed: %v\n%s", err, output)
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

const nullablePrimitivePropertyRuntimeRunner = `const { isNullablePrimitive } = require("./main.cjs");

const valid = {
  number: 1,
  string: "alpha",
  boolean: true,
  reversedNumber: 2,
  nested: { value: "nested" },
  array: [{ value: false }],
};
const allNull = {
  number: null,
  string: null,
  boolean: null,
  reversedNumber: null,
  nested: { value: null },
  array: [{ value: null }],
};
const cases = [
  ["valid primitives", valid, true],
  ["all nullable fields are null", allNull, true],
  ["wrong number primitive", { ...valid, number: "1" }, false],
  ["wrong string primitive", { ...valid, string: 1 }, false],
  ["wrong boolean primitive", { ...valid, boolean: "true" }, false],
  ["wrong reversed primitive", { ...valid, reversedNumber: false }, false],
  ["wrong nested nullable primitive", { ...valid, nested: { value: 1 } }, false],
  ["wrong array nullable primitive", { ...valid, array: [{ value: "false" }] }, false],
  ["missing required property", (() => {
    const next = { ...valid };
    delete next.number;
    return next;
  })(), false],
  ["present undefined required property", { ...valid, number: undefined }, false],
  ["present undefined nested property", { ...valid, nested: { value: undefined } }, false],
  ["present undefined array property", { ...valid, array: [{ value: undefined }] }, false],
];

for (const [name, input, expected] of cases) {
  const actual = isNullablePrimitive(input);
  if (actual !== expected) {
    throw new Error(name + ": expected " + expected + " but got " + actual);
  }
}
`
