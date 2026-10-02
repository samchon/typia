package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestInlineTypeDisplayNameTransform verifies inline schema property names without binder-internal identities.
//
// Anonymous type binder names are compiler identities rather than runtime declarations or user-facing schema names; structural inline properties still belong in the output.
//
// 1. An anonymous schema shape supplies a positive inline member and a forbidden internal-name counterpart.
// 2. Emission retains the inline schema property and contains no __type identifier.
//
// @evidence contracts/testing.md#behavioral-verification Emission retains the inline schema property and contains no __type identifier.
// @evidence contracts/testing.md#independent-expectations Anonymous type binder names are compiler identities rather than runtime declarations or user-facing schema names; structural inline properties still belong in the output.
// @evidence contracts/testing.md#distinguishing-cases An anonymous schema shape supplies a positive inline member and a forbidden internal-name counterpart.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestInlineTypeDisplayNameTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestInlineTypeDisplayNameTransform(t *testing.T) {
  project := inlineTypeDisplayNameProject(t)
  js := inlineTypeDisplayNameTransform(t, project)
  if strings.Contains(js, "__type") {
    t.Fatalf("emitted JavaScript leaked an anonymous __type identifier:\n%s", js)
  }
  if !strings.Contains(js, `"inline"`) {
    t.Fatalf("json.schemas literal lost the inline property:\n%s", js)
  }
}

func inlineTypeDisplayNameProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "inline-display-name-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(inlineTypeDisplayNameTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(inlineTypeDisplayNameSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func inlineTypeDisplayNameTransform(t *testing.T, project string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("inline display name transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

const inlineTypeDisplayNameTSConfig = `{
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

const inlineTypeDisplayNameSource = `import typia from "typia";

// The issue #1667 playground shape: nested inline type literals.
export const validateNested = typia.createValidate<{
  property: { property: string };
}>();

// Named interfaces must keep reporting their identifier names.
interface INamed {
  value: string;
}
export const validateNamed = typia.createValidate<{ child: INamed }>();

// Inline element types of arrays previously surfaced by synthetic names.
export const validateInlineArray = typia.createValidate<{
  list: { value: number }[];
}>();

// Inline unions previously surfaced as a pair of synthetic names.
export const validateInlineUnion = typia.createValidate<{
  union: { kind: "a"; a: string } | { kind: "b"; b: number };
}>();

// Containers of inline values previously wrapped the synthetic names.
export const validateInlineSet = typia.createValidate<{
  entries: Set<{ flag: boolean }>;
}>();

// Top-level inline types must render structurally at the "$input" root.
export const validateTopLevel = typia.createValidate<{ id: string }>();

// Tuples of inline objects must render each element structurally.
export const validateInlineTuple = typia.createValidate<{
  pair: [{ a: string }, { b: number }];
}>();

// Component keys are identifiers and must stay on the synthetic names.
export const schemas = typia.json.schemas<[{ inline: { id: string } }]>();
`
