package main

import (
  "fmt"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestIntersectionNonsensibleBackstop pins the intersection boundary of issue
// #1967. The only sound `&` is `Base & TaggedObject…` — a real base (primitive,
// array, tuple, object) carrying phantom/tag marker objects that drop away,
// leaving the base validated. Intersecting two genuine constraint carriers
// (`array & array`, `array & tuple`, `tuple & tuple`, template & template, a
// real data object onto a non-object base) is a misuse with no sound result, so
// it must keep raising a clear `nonsensible` diagnostic.
//
// The accepted rows pin the positive side (Base & tag) so a future change cannot
// quietly collapse the boundary.
func TestIntersectionNonsensibleBackstop(t *testing.T) {
  rejected := []struct {
    name string
    decl string
  }{
    // non-object & non-object: two real constraint carriers.
    {"array_and_array_any", `string[] & any[]`},
    {"array_and_array_literals", `("a" | "b")[] & ("b" | "c")[]`},
    {"array_and_array_disjoint", `string[] & number[]`},
    {"array_and_array_objects", `{ a: string }[] & { b: number }[]`},
    {"array_and_tuple", `string[] & ["a", "b"]`},
    {"tuple_and_tuple", `[string] & [number]`},
    {"tuple_and_tuple_length", `[string, string] & [string]`},
    {"template_and_template", "`${string}art${string}` & `${string}bar${string}`"},
    {"template_and_template_anchored", "`a${string}` & `${string}b`"},
    {"template_and_array", "(`${string}a${string}`) & string[]"},
    // a required string-keyed property is real data (even a literal brand), not
    // an unambiguous phantom — declines on any base.
    {"primitive_required_literal", `string & { __brand: "UserId" }`},
    {"number_required_literal", `number & { __brand: "Age" }`},
    {"array_required_literal", `string[] & { __brand: "Tagged" }`},
    {"primitive_and_data_object", `string & { data: number }`},
    {"primitive_and_nested_object", `string & { nested: { a: string } }`},
    {"number_and_data_object", `number & { a: string }`},
    {"array_and_data_object", `string[] & { a: string }`},
    // Only phantom brand objects (no real base) plus a type tag — every member
    // drops away, leaving nothing to validate, so the tag cannot stand alone.
    {"only_brands_and_tag", `{ [sym]: "A" } & { [sym2]: "B" } & tags.Type<"int32">`},
  }
  for _, tc := range rejected {
    tc := tc
    t.Run("reject_"+tc.name, func(t *testing.T) {
      project := intersectionBackstopProject(t, tc.name, tc.decl)
      _, errText, code := ttscTypiaTestCapture(func() int {
        return runBuild([]string{"--cwd", project, "--tsconfig", "tsconfig.json", "--emit"})
      })
      if code == 0 {
        t.Fatalf("%q was unexpectedly accepted; the nonsensible backstop must reject it", tc.decl)
      }
      _ = errText
    })
  }

  accepted := []struct {
    name string
    decl string
  }{
    // Base & tag — the phantom marker (unique symbol or optional) drops, leaving
    // the base. Symbol brands are the zod / type-fest / Effect nominal pattern.
    {"string_symbol_brand", `string & { [sym]: "UserId" }`},
    {"string_optional_tag", `string & { tag?: number }`},
    {"number_symbol_brand", `number & { [sym]: "Age" }`},
    {"array_symbol_brand", `string[] & { [sym]: "Tagged" }`},
    {"array_optional_tag", `string[] & { tag?: string }`},
    {"tuple_optional_tag", `[string, number] & { tag?: string }`},
    // typia's own tags are always honored — even intersected onto an object.
    {"primitive_typia_tag", `number & tags.Type<"int32">`},
    {"object_typia_tag", `{ a: string } & tags.JsonSchemaPlugin<{ "x-tag": true }>`},
    // An empty marker object drops (TS `string & {}` is `string`); multiple and
    // nested phantom markers all strip; a tag distributed over a literal union
    // narrows each member rather than collapsing the union.
    {"empty_object_brand", `string & {}`},
    {"multi_phantom_brand", `string & { [sym]: "A" } & { tag?: number }`},
    {"nested_phantom_brand", `(string & { [sym]: "A" }) & { [sym2]: "B" }`},
    {"union_literal_typia_tag", `(1 | 2 | 3) & tags.Type<"int32">`},
  }
  for _, tc := range accepted {
    tc := tc
    t.Run("accept_"+tc.name, func(t *testing.T) {
      project := intersectionBackstopProject(t, tc.name, tc.decl)
      _, errText, code := ttscTypiaTestCapture(func() int {
        return runBuild([]string{"--cwd", project, "--tsconfig", "tsconfig.json", "--emit"})
      })
      if code != 0 {
        t.Fatalf("%q should be accepted as a phantom-brand strip: code=%d stderr=\n%s", tc.decl, code, errText)
      }
    })
  }
}

// Unlike the sibling suites sharing atomicIntersectionSchemaTSConfig, this
// test runs a full `--emit` build, and the fixture imports the real "typia"
// package whose exports ship TypeScript source — so packages/typia/src/**
// joins the program as emittable input. outDir keeps that emit inside the
// fixture directory (removed by t.Cleanup) instead of writing .js beside
// typia's own sources, and tsgo then demands rootDir name the program's
// common source directory explicitly (TS5011): "../../.." resolves to
// packages/typia from a fixture at native/.tmp-ttsc-typia-tests/<name>/.
const intersectionBackstopTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "dist",
    "rootDir": "../../.."
  },
  "include": ["src"]
}
`

func intersectionBackstopProject(t *testing.T, name string, decl string) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "backstop-"+strings.ReplaceAll(name, "_", "-")+"-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(intersectionBackstopTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  source := fmt.Sprintf(`import typia, { tags } from "typia";

declare const sym: unique symbol;
declare const sym2: unique symbol;
type Probe = %s;

export const check = typia.createIs<Probe>();
`, decl)
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(source), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}
