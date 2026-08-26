package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestReflectSchemaBigintTransform verifies the metadata a reflect operation
// hands back carries a bigint constant as a bigint.
//
// `IMetadataSchema.IValue<Atomic.Type>` declares `value: bigint` for a bigint
// constant, but this transformer lowered the whole metadata tree through
// `encoding/json` before writing it. JSON has no bigint, so that one member
// could not survive the trip: it arrived as whatever object its fields happened
// to spell. The trip was also redundant -- it marshaled structs into maps and
// lowercased each key's initial, which is what `LiteralFactory` already does
// when it reflects a struct -- so writing the tree directly both fixes the
// value and removes the step.
//
// `literals` and `schema` reach the emit by different routes, so a case on one
// says nothing about the other.
//
//  1. Reflect a bigint constant union through `schema` and through `schemas`.
//  2. Execute the emitted CommonJS.
//  3. Assert each reported value is `typeof "bigint"` and exact, and that the
//     surrounding metadata still reports the constant and its neighbors.
func TestReflectSchemaBigintTransform(t *testing.T) {
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "reflect-schema-bigint-")
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
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(reflectSchemaBigintSource), 0o644); err != nil {
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
    t.Fatalf("reflect.schema bigint transform failed: code=%d stderr=\n%s", code, errText)
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
  if err := os.WriteFile(runner, []byte(reflectSchemaBigintRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("reflect.schema bigint runtime cases failed: %v\n%s", err, output)
  }
}

const reflectSchemaBigintSource = `import typia, { tags } from "typia";

export const unit = typia.reflect.schema<1n | 9007199254740993n>();
export const collection = typia.reflect.schemas<[2n, "a" | 3]>();
export const objects = typia.reflect.schema<{ big: 7n; name: string }>();

// A tag reaches a constant by matching the child's value against the merged
// parent's, so the constant value has to compare by value. The number and
// string constants are the controls that were never at risk.
export const tagged = typia.reflect.schema<(1n | 2n) & tags.Type<"int64">>();
export const taggedNumber = typia.reflect.schema<(1 | 2) & tags.Type<"uint32">>();
`

const reflectSchemaBigintRunner = `const mod = require("./main.cjs");

const render = (value) =>
  typeof value === "bigint" ? value.toString() + "n" : JSON.stringify(value);

const constantsOf = (schema, type) => {
  const constant = (schema.constants ?? []).find((c) => c.type === type);
  return constant === undefined ? [] : constant.values.map((v) => v.value);
};

const check = (label, actual, expected) => {
  if (actual.length !== expected.length) {
    throw new Error(
      label + ": expected " + expected.map(render).join(", ") +
        ", got " + actual.map(render).join(", "),
    );
  }
  actual.forEach((item, index) => {
    if (typeof item !== typeof expected[index] || item !== expected[index]) {
      throw new Error(
        label + "[" + index + "]: expected " + render(expected[index]) +
          " (" + typeof expected[index] + "), got " + render(item) +
          " (" + typeof item + ")",
      );
    }
  });
};

check("schema", constantsOf(mod.unit.schema, "bigint"), [1n, 9007199254740993n]);
check("schemas[0]", constantsOf(mod.collection.schemas[0], "bigint"), [2n]);

// A neighboring constant kind must keep its own representation.
check("schemas[1] string", constantsOf(mod.collection.schemas[1], "string"), ["a"]);
check("schemas[1] number", constantsOf(mod.collection.schemas[1], "number"), [3]);

// The surrounding tree still reports the object and its members.
const object = mod.objects.components.objects[0];
if (object === undefined || object.properties.length !== 2) {
  throw new Error("object metadata was not emitted: " + JSON.stringify(mod.objects, (k, v) => typeof v === "bigint" ? v.toString() : v));
}
const big = object.properties.find(
  (p) => constantsOf(p.key, "string")[0] === "big",
);
if (big === undefined) {
  throw new Error("the 'big' property is missing from the object metadata");
}
check("object property", constantsOf(big.value, "bigint"), [7n]);

const tagNames = (schema, type) => {
  const constant = (schema.constants ?? []).find((c) => c.type === type);
  if (constant === undefined) {
    throw new Error("no " + type + " constant was emitted");
  }
  return constant.values.map((v) =>
    (v.tags ?? []).flat().map((t) => t.name).join(","),
  );
};

// Every member keeps the tag the intersection put on it.
const expectTags = (label, actual, expected) => {
  if (actual.length === 0 || actual.some((names) => names !== expected)) {
    throw new Error(
      label + ": expected every member tagged " + expected +
        ", got " + JSON.stringify(actual),
    );
  }
};
expectTags("bigint constant", tagNames(mod.tagged.schema, "bigint"), 'Type<"int64">');
expectTags("number constant", tagNames(mod.taggedNumber.schema, "number"), 'Type<"uint32">');

console.log("ok");
`
