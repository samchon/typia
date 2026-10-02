package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestAnyArrayTypeTagsTransform verifies wrapper tags survive any elements.
//
// Issue #1933: the any-element short circuit in CheckerProgrammer dropped the
// per-element exploration together with the array's validating wrapper tags,
// so `unknown[] & MinItems<2>` (or a custom predicate) silently accepted
// everything. Tags constrain the container, not the elements, so they must
// keep firing while element checks stay skipped.
//
//  1. Transform a fixture mixing tagged `unknown[]`, an untagged `any[]`
//     control, a `string[]` control, and a tagged-any union branch.
//  2. Inspect each emitted validator's own array and container predicates.
//  3. Require the untagged any-element array to keep its array guard without
//     element, minimum-length or custom-status restrictions.
//
// @evidence contracts/testing.md#behavioral-verification Tagged unknown-array and concrete-array exports retain the minimum length and custom status predicate. Eight union exports retain their tagged list minimum; the untagged any-array output has its array guard and no element or container restriction.
// @evidence contracts/testing.md#independent-expectations MinItems<2> constrains the container length regardless of its element type; the authored custom tag requires one SUCCESS or FAILURE element. An untagged any[] constrains only array identity. Output predicates are derived from these type contracts, without certifying JavaScript execution.
// @evidence contracts/testing.md#distinguishing-cases The unknown-array positive is paired with concrete strings and untagged any[] controls. Union ordering, string and tuple alternatives, two tagged alternatives and validator/serializer operation families have separate export-local assertions.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestAnyArrayTypeTagsTransform as a unit test. It transforms the temporary fixture in process and inspects each emitted export without a compiler or JavaScript subprocess; runtime counterexamples belong to the maintained TypeScript execution suite.
func TestAnyArrayTypeTagsTransform(t *testing.T) {
  project := anyArrayTypeTagsProject(t)
  js := anyArrayTypeTagsTransform(t, project)
  for _, name := range []string{"validateTagged", "isTagged", "validateConcrete"} {
    emitted := anyArrayTypeTagsExport(t, js, name)
    for _, guard := range []string{"Array.isArray(input)", "2 <= input.length", `input.some(elem => elem === "SUCCESS" || elem === "FAILURE")`} {
      if !strings.Contains(emitted, guard) {
        t.Fatalf("%s lost container predicate %q:\n%s", name, guard, emitted)
      }
    }
  }
  plain := anyArrayTypeTagsExport(t, js, "validatePlainAny")
  if !strings.Contains(plain, "Array.isArray(input)") || strings.Contains(plain, "input.length") || strings.Contains(plain, "input.some") || strings.Contains(plain, "input.every") {
    t.Fatalf("untagged any-array must retain the array guard without element/container restrictions:\n%s", plain)
  }
  for _, name := range []string{"validateUnion", "validateUnionReversed", "isUnion", "assertUnion", "equalsUnion", "validateTupleUnion", "validateTaggedAlternatives", "stringifyUnion"} {
    emitted := anyArrayTypeTagsExport(t, js, name)
    if !strings.Contains(emitted, "2 <= entire.length") {
      t.Fatalf("%s lost its tagged array union branch:\n%s", name, emitted)
    }
  }
}

func anyArrayTypeTagsExport(t *testing.T, output, name string) string {
  t.Helper()
  start := strings.LastIndex(output, "exports."+name+" = ")
  if start < 0 {
    t.Fatalf("missing emitted export %s", name)
  }
  segment := output[start:]
  if end := strings.Index(segment[1:], "\nexports."); end >= 0 {
    segment = segment[:end+1]
  }
  return segment
}

func anyArrayTypeTagsProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "any-array-tags-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(anyArrayTypeTagsTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(anyArrayTypeTagsSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func anyArrayTypeTagsTransform(t *testing.T, project string) string {
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
    t.Fatalf("any-array tags transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

const anyArrayTypeTagsTSConfig = `{
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

const anyArrayTypeTagsSource = `import typia, { tags } from "typia";

type ContainsStatus = tags.TagBase<{
  kind: "containsStatus";
  target: "array";
  value: undefined;
  validate: '$input.some((elem) => elem === "SUCCESS" || elem === "FAILURE")';
}>;

// The issue #1933 case: tags on an unknown-element array must keep firing.
export const validateTagged = typia.createValidate<
  unknown[] & tags.MinItems<2> & ContainsStatus
>();
export const isTagged = typia.createIs<
  unknown[] & tags.MinItems<2> & ContainsStatus
>();

// Control: untagged any-element arrays keep accepting everything.
export const validatePlainAny = typia.createValidate<any[]>();

// Control: the same tags on a concrete element type behave identically.
export const validateConcrete = typia.createValidate<
  string[] & tags.MinItems<2> & ContainsStatus
>();

// Union branch: a tagged any-element array beside another array variant. The
// wrapper predicate participates in complete-branch selection (#2040).
export const validateUnion = typia.createValidate<
  { list: (unknown[] & tags.MinItems<2>) | string[] }
>();
export const validateUnionReversed = typia.createValidate<
  { list: string[] | (unknown[] & tags.MinItems<2>) }
>();
export const isUnion = typia.createIs<
  { list: (unknown[] & tags.MinItems<2>) | string[] }
>();
export const assertUnion = typia.createAssert<
  { list: (unknown[] & tags.MinItems<2>) | string[] }
>();
export const equalsUnion = typia.createEquals<
  { list: (unknown[] & tags.MinItems<2>) | string[] }
>();
export const validateTupleUnion = typia.createValidate<
  { list: (unknown[] & tags.MinItems<2>) | [number] }
>();
export const validateTaggedAlternatives = typia.createValidate<
  { list: (unknown[] & tags.MinItems<2>) | (string[] & tags.MaxItems<1>) }
>();
export const stringifyUnion = typia.json.createValidateStringify<
  { list: (unknown[] & tags.MinItems<2>) | string[] }
>();
export const schemaUnion = typia.json.schemas<[
  (unknown[] & tags.MinItems<2>) | string[],
]>();
`
