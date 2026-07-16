package main

import (
  "os"
  "os/exec"
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
//  2. Execute validate/is entrypoints and require the container tags to
//     reject violating inputs with the usual per-tag expected strings.
//  3. Require the untagged any-element array to keep accepting everything
//     (the short circuit itself must survive).
func TestAnyArrayTypeTagsTransform(t *testing.T) {
  project := anyArrayTypeTagsProject(t)
  js := anyArrayTypeTagsTransform(t, project)
  if !strings.Contains(js, "MinItems") {
    t.Fatalf("tagged any-array fixture was not emitted:\n%s", js)
  }
  anyArrayTypeTagsRunRuntimeCases(t, project, js)
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

func anyArrayTypeTagsRunRuntimeCases(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, js)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(anyArrayTypeTagsRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("any-array tags runtime cases failed: %v\n%s", err, output)
  }
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

const anyArrayTypeTagsRuntimeRunner = `const mod = require("./main.cjs");

const expectSuccess = (label, result) => {
  if (result.success !== true) {
    throw new Error(label + " unexpectedly failed: " + JSON.stringify(result.errors));
  }
};
const expectFailure = (label, result, expectedFragment) => {
  if (result.success !== false) {
    throw new Error(label + " unexpectedly passed");
  }
  if (
    expectedFragment !== undefined &&
    result.errors.every((error) => error.expected.includes(expectedFragment) === false)
  ) {
    throw new Error(
      label + " did not report " + expectedFragment + ": " + JSON.stringify(result.errors),
    );
  }
};

// 1. Tagged unknown[]: both tags enforced, element contents free.
expectSuccess("tagged valid", mod.validateTagged(["anything", "SUCCESS"]));
expectSuccess("tagged valid mixed", mod.validateTagged([1, { x: true }, "FAILURE"]));
expectFailure("tagged too short", mod.validateTagged(["SUCCESS"]), "MinItems<2>");
expectFailure("tagged no status", mod.validateTagged(["a", "b"]), "ContainsStatus");
expectFailure("tagged non-array", mod.validateTagged("nope"));
if (mod.isTagged(["a", "b"]) !== false) {
  throw new Error("is accepted an array violating the custom predicate");
}
if (mod.isTagged(["a", "SUCCESS"]) !== true) {
  throw new Error("is rejected a valid tagged array");
}

// 2. Untagged any[]: the wholesale skip must survive.
expectSuccess("plain any empty", mod.validatePlainAny([]));
expectSuccess("plain any mixed", mod.validatePlainAny([1, "x", null, undefined]));
expectFailure("plain any non-array", mod.validatePlainAny({}));

// 3. Concrete element control behaves identically for the shared cases.
expectFailure("concrete too short", mod.validateConcrete(["SUCCESS"]), "MinItems<2>");
expectFailure("concrete no status", mod.validateConcrete(["a", "b"]), "ContainsStatus");
expectSuccess("concrete valid", mod.validateConcrete(["a", "SUCCESS"]));

// 4. Complete branches backtrack across wrapper predicates and element types.
expectSuccess("union via tagged any", mod.validateUnion({ list: [1, 2] }));
expectSuccess("union via string branch", mod.validateUnion({ list: ["solo"] }));
expectFailure("union no valid branch", mod.validateUnion({ list: [1] }), "MinItems<2>");
expectSuccess("reversed union via tagged any", mod.validateUnionReversed({ list: [1, 2] }));
expectSuccess("reversed union via string branch", mod.validateUnionReversed({ list: ["solo"] }));
expectFailure("reversed union no valid branch", mod.validateUnionReversed({ list: [1] }), "MinItems<2>");
if (mod.isUnion({ list: [1] }) !== false || mod.isUnion({ list: [1, 2] }) !== true) {
  throw new Error("is did not honor the complete tagged union branches");
}
if (mod.equalsUnion({ list: [1] }) !== false || mod.equalsUnion({ list: ["solo"] }) !== true) {
  throw new Error("equals did not honor the complete tagged union branches");
}
let asserted = false;
try {
  mod.assertUnion({ list: [1] });
} catch (error) {
  asserted = String(error && error.message).includes("MinItems<2>");
}
if (asserted !== true) {
  throw new Error("assert did not attribute the failed wrapper tag");
}

expectSuccess("tuple branch", mod.validateTupleUnion({ list: [1] }));
expectSuccess("tuple union tagged any", mod.validateTupleUnion({ list: [1, 2] }));
expectSuccess("tagged alternative string", mod.validateTaggedAlternatives({ list: ["solo"] }));
expectSuccess("tagged alternative any", mod.validateTaggedAlternatives({ list: [1, 2] }));
expectSuccess("tagged alternative empty", mod.validateTaggedAlternatives({ list: [] }));
expectFailure("tagged alternatives reject", mod.validateTaggedAlternatives({ list: [1] }), "MinItems<2>");

const stringified = mod.stringifyUnion({ list: ["solo"] });
if (stringified.success !== true || JSON.parse(stringified.data).list[0] !== "solo") {
  throw new Error("validated stringify rejected a later valid branch: " + JSON.stringify(stringified));
}
expectFailure("validated stringify no valid branch", mod.stringifyUnion({ list: [1] }), "MinItems<2>");
const unionSchema = JSON.stringify(mod.schemaUnion);
if (unionSchema.includes('"minItems":2') === false) {
  throw new Error("array union schema lost MinItems: " + unionSchema);
}
`
