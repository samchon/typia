package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestReflectLiteralsEmptyUnionTransform pins issue #2377: the literal set of an
// empty union is the empty array, not a transform error.
//
// The programmer admits a type argument by counting the members it can render,
// and it renders three kinds -- constant literals, the `boolean` atomic, and
// `null`. `null` is a `MetadataSchema` flag rather than a bucket, so it was
// missing from the count, which made two admissible arguments look like "no
// constant literal type found": `never`, whose union is empty on both sides of
// the comparison, and `null`, which the public
// `literals<T extends Atomic.Type | null>()` signature documents. `never` is
// vacuously literal-only and `literals<never>(): never[]` has exactly one
// inhabitant, so both must transform and run.
//
//  1. Transform a module whose `reflect.literals` arguments span every spelling
//     of the empty union a caller reaches -- the keyword, an alias, an
//     exhaustive `Exclude`, an empty `Extract` -- plus `null`, a fully mixed
//     literal union, and the plain `boolean` atomic.
//  2. Execute the emitted CommonJS.
//  3. Assert `never` yields `[]`, `null` yields `[null]`, and the arguments that
//     already worked keep their exact members and order, including the sort the
//     guide documents.
func TestReflectLiteralsEmptyUnionTransform(t *testing.T) {
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "reflect-literals-empty-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(atomicIntersectionSchemaTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(reflectLiteralsEmptyUnionSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  ttscTypiaTestTypecheck(t, dir)

  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", dir,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("reflect.literals empty union transform failed: code=%d stderr=\n%s", code, errText)
  }

  runtimeDir := filepath.Join(dir, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, out)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(reflectLiteralsEmptyUnionRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("reflect.literals empty union runtime cases failed: %v\n%s", err, output)
  }
}

const reflectLiteralsEmptyUnionSource = `import typia from "typia";

type Color = "red" | "green" | "blue";
type Empty = never;

// The empty union: no member on either side of the admission comparison. Every
// spelling a caller reaches it through has to transform, not only the keyword:
// an alias hides it behind a name, and a conditional or an exhaustive Exclude
// is how a generic caller produces one without writing "never" at all.
export const empty = typia.reflect.literals<never>();
export const emptyAlias = typia.reflect.literals<Empty>();
export const emptyExclude = typia.reflect.literals<Exclude<Color, Color>>();
export const emptyExtract = typia.reflect.literals<Extract<Color, "cyan">>();

// A union whose only member is the nullable flag, which carries no bucket.
export const onlyNull = typia.reflect.literals<null>();

// Controls that already transformed: the flag must join the count without
// displacing a constant, a boolean atomic, or their order.
export const mixed = typia.reflect.literals<"a" | 1 | true | null>();
export const booleanAtomic = typia.reflect.literals<boolean>();
export const booleanAtomicNull = typia.reflect.literals<boolean | null>();

// Declaration order deliberately disagrees with the emitted order: values of
// one primitive type are sorted (iterate_metadata_sort), which is the behavior
// the reflect.literals guide states.
export const sorted = typia.reflect.literals<"b" | "a" | 10 | 2>();
`

const reflectLiteralsEmptyUnionRunner = `const mod = require("./main.cjs");

const check = (label, actual, expected) => {
  if (Array.isArray(actual) === false) {
    throw new Error(label + ": expected an array, got " + JSON.stringify(actual));
  }
  if (
    actual.length !== expected.length ||
    actual.some((item, index) => item !== expected[index])
  ) {
    throw new Error(
      label +
        ": expected " +
        JSON.stringify(expected) +
        ", got " +
        JSON.stringify(actual),
    );
  }
};

check("never", mod.empty, []);
check("never alias", mod.emptyAlias, []);
check("exhaustive Exclude", mod.emptyExclude, []);
check("empty Extract", mod.emptyExtract, []);
check("null", mod.onlyNull, [null]);
check("mixed", mod.mixed, ["a", 1, true, null]);
check("booleanAtomic", mod.booleanAtomic, [true, false]);
check("booleanAtomicNull", mod.booleanAtomicNull, [true, false, null]);
check("sorted", mod.sorted, ["a", "b", 2, 10]);

console.log("ok");
`
