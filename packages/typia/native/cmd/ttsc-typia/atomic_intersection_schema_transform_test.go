package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestAtomicIntersectionSchemaTransform verifies primitive intersections do
// not fall back to an unconstrained JSON schema.
//
// `T & { __meta?: object }` should keep the primitive `T` branch and discard
// the optional-object metadata branch. `Wrapper<boolean>` reaches the factory
// as `(false & OptionalObject) | (true & OptionalObject)`, so optional-object
// constraints must also stay neutral during union/never pruning.
//
//  1. Transform the AtomicIntersection fixture into JavaScript.
//  2. Decode the emitted schema literal AST without executing JavaScript.
//  3. Assert the three tuple element component schemas are boolean, number,
//     and string, never an empty unconstrained schema.
//
// @evidence contracts/testing.md#behavioral-verification The three tuple references resolve to boolean, number and string schemas in authored order; missing components, wrong tuple size and unconstrained schemas fail.
// @evidence contracts/testing.md#independent-expectations Expected primitive types, discriminator literals and member names come from the authored TypeScript type, not a previous transform snapshot. AST literal decoding interprets the emitted result but does not execute JavaScript.
// @evidence contracts/testing.md#distinguishing-cases The three tuple references resolve to boolean, number and string schemas in authored order; missing components, wrong tuple size and unconstrained schemas fail.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestAtomicIntersectionSchemaTransform as a unit test. It runs the transform in process and parses its result through the in-memory TypeScript parser; no compiler or JavaScript subprocess is launched.
func TestAtomicIntersectionSchemaTransform(t *testing.T) {
  project := atomicIntersectionSchemaProject(t)
  js := atomicIntersectionSchemaTransform(t, project)
  unit := ttscTypiaTestSchemaLiteral(t, js)
  schemas := ttscTypiaTestSchemaPath(t, unit, "components", "schemas").(map[string]any)
  tuple := schemas["AtomicIntersection"].(map[string]any)
  ttscTypiaTestSchemaEqual(t, tuple["type"], "array")
  items, ok := tuple["prefixItems"].([]any)
  if !ok || len(items) != 3 {
    t.Fatalf("expected three tuple components, got %#v", tuple)
  }
  for index, typ := range []string{"boolean", "number", "string"} {
    ref, ok := items[index].(map[string]any)["$ref"].(string)
    if !ok {
      t.Fatalf("missing tuple reference %#v", items[index])
    }
    name := ref[strings.LastIndex(ref, "/")+1:]
    target, ok := schemas[name].(map[string]any)
    if !ok {
      t.Fatalf("missing tuple component %s", ref)
    }
    ttscTypiaTestSchemaEqual(t, target["type"], typ)
  }
}

func atomicIntersectionSchemaProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "atomic-intersection-schema-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(atomicIntersectionSchemaTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(atomicIntersectionSchemaSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func atomicIntersectionSchemaTransform(t *testing.T, project string) string {
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
    t.Fatalf("atomic intersection schema transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

const atomicIntersectionSchemaSource = `import typia from "typia";

export type AtomicIntersection = [
  AtomicIntersection.Wrapper<boolean>,
  AtomicIntersection.Wrapper<number>,
  AtomicIntersection.Wrapper<string>,
];

export namespace AtomicIntersection {
  export type Wrapper<T> = T & { __meta?: object };
}

export const schema = typia.json.schema<AtomicIntersection>();
`
