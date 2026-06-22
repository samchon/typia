package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestIntersectionBrandTransform verifies the brand / nominal category of issue
// #1967: a primitive intersected with a phantom marker object validates as the
// bare primitive.
//
// Only unambiguously-phantom markers are honored: a unique-symbol key — the
// canonical nominal brand of zod / type-fest / Effect (`string & { [sym]: T }`,
// #933) — and an optional property. A required string-keyed property is real
// data and stays nonsensible (the backstop test pins that). `is`, `validate`,
// `assert`, and `json.schema` must all agree that the honored brand is its bare
// primitive.
//
//  1. Transform the fixture to JavaScript.
//  2. Execute `is` / `validate` / `assert` positives and negatives through Node.
//  3. Assert the emitted JSON schemas are the bare primitive (no brand property).
func TestIntersectionBrandTransform(t *testing.T) {
  project := intersectionBrandProject(t)
  js := intersectionBrandTransform(t, project)
  intersectionBrandRunRuntimeCases(t, project, js)
}

func intersectionBrandProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "intersection-brand-")
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
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(intersectionBrandSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func intersectionBrandTransform(t *testing.T, project string) string {
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
    t.Fatalf("brand intersection transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func intersectionBrandRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(intersectionBrandRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("brand intersection runtime cases failed: %v\n%s", err, output)
  }
}

const intersectionBrandSource = `import typia from "typia";

declare const sym: unique symbol;

// Only the unambiguously-phantom markers are honored: a unique-symbol key (zod /
// type-fest / Effect brands) or an optional property. A required string-keyed
// property is real data and stays nonsensible (covered by the backstop test).
type SymbolString = string & { [sym]: "UserId" };
type OptionalString = string & { __brand?: "UserId" };
type SymbolNumber = number & { [sym]: "Age" };
type OptionalNumber = number & { __brand?: "Age" };

export const isSymbolString = typia.createIs<SymbolString>();
export const isOptionalString = typia.createIs<OptionalString>();
export const isSymbolNumber = typia.createIs<SymbolNumber>();
export const isOptionalNumber = typia.createIs<OptionalNumber>();

export const validateSymbolString = typia.createValidate<SymbolString>();
export const assertSymbolNumber = typia.createAssert<SymbolNumber>();

export const schemaSymbolString = typia.json.schema<SymbolString>();
export const schemaSymbolNumber = typia.json.schema<SymbolNumber>();
`

const intersectionBrandRuntimeRunner = `const mod = require("./main.cjs");

const check = (label, actual, expected) => {
  if (actual !== expected) {
    throw new Error(label + ": expected " + JSON.stringify(expected) + ", got " + JSON.stringify(actual));
  }
};

// Every honored brand validates as its bare primitive.
check("symbolString accepts string", mod.isSymbolString("abc"), true);
check("symbolString rejects number", mod.isSymbolString(123), false);
check("optionalString accepts string", mod.isOptionalString("abc"), true);
check("optionalString rejects number", mod.isOptionalString(123), false);
check("symbolNumber accepts number", mod.isSymbolNumber(42), true);
check("symbolNumber rejects string", mod.isSymbolNumber("x"), false);
check("optionalNumber accepts number", mod.isOptionalNumber(42), true);
check("optionalNumber rejects string", mod.isOptionalNumber("x"), false);

check("validate symbolString success", mod.validateSymbolString("abc").success, true);
check("validate symbolString failure", mod.validateSymbolString(123).success, false);
check("assert symbolNumber returns value", mod.assertSymbolNumber(7), 7);

let threw = false;
try { mod.assertSymbolNumber("x"); } catch { threw = true; }
check("assert symbolNumber throws on string", threw, true);

// json.schema is the bare primitive — no brand property leaks in.
const root = (unit) => {
  let s = unit.schema;
  while (s && s.$ref) {
    s = unit.components.schemas[s.$ref.split("/").at(-1)];
  }
  return s;
};
const stringSchema = root(mod.schemaSymbolString);
check("schema symbolString type", stringSchema.type, "string");
if ("properties" in stringSchema || "required" in stringSchema || "allOf" in stringSchema) {
  throw new Error("brand schema leaked an object/brand shape: " + JSON.stringify(stringSchema));
}
const numberSchema = root(mod.schemaSymbolNumber);
check("schema symbolNumber type", numberSchema.type, "number");

console.log("ok");
`
