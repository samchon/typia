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

// A symbol marker is honored on a non-primitive base too — the genuinely new
// capability of #933: the array / tuple / native base is validated as itself.
type SymbolArray = string[] & { [sym]: "Tag" };
type SymbolTuple = [string, number] & { [sym]: "Tag" };
type SymbolDate = Date & { [sym]: "Tag" };

// A union / enum base carrying a phantom symbol brand validates as the bare
// union. TypeScript distributes (a | b) & Brand into (a & Brand) | (b & Brand),
// so each member is a prunable intersection; the brand must drop on every member
// rather than collapsing it to never (which would leave the union empty and
// vacuously accept everything).
type UnionSymbol = (string | number) & { [sym]: "Tag" };
enum Currency { KRW = "KRW", USD = "USD" }
type EnumSymbol = Currency & { [sym]: "Tag" };

export const isSymbolString = typia.createIs<SymbolString>();
export const isOptionalString = typia.createIs<OptionalString>();
export const isSymbolNumber = typia.createIs<SymbolNumber>();
export const isOptionalNumber = typia.createIs<OptionalNumber>();
export const isSymbolArray = typia.createIs<SymbolArray>();
export const isSymbolTuple = typia.createIs<SymbolTuple>();
export const isSymbolDate = typia.createIs<SymbolDate>();
export const isUnionSymbol = typia.createIs<UnionSymbol>();
export const isEnumSymbol = typia.createIs<EnumSymbol>();

export const validateSymbolString = typia.createValidate<SymbolString>();
export const assertSymbolNumber = typia.createAssert<SymbolNumber>();

export const schemaSymbolString = typia.json.schema<SymbolString>();
export const schemaSymbolNumber = typia.json.schema<SymbolNumber>();
export const schemaSymbolArray = typia.json.schema<SymbolArray>();
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

// Symbol marker on array / tuple bases (the net-new #933 capability) validates
// as the bare container, not as an object carrying the symbol.
check("symbolArray accepts strings", mod.isSymbolArray(["a", "b"]), true);
check("symbolArray accepts empty", mod.isSymbolArray([]), true);
check("symbolArray rejects numbers", mod.isSymbolArray([1, 2]), false);
check("symbolArray rejects non-array", mod.isSymbolArray("x"), false);
check("symbolTuple accepts pair", mod.isSymbolTuple(["a", 1]), true);
check("symbolTuple rejects short", mod.isSymbolTuple(["a"]), false);
check("symbolTuple rejects wrong slot", mod.isSymbolTuple([1, "a"]), false);
check("symbolDate accepts Date", mod.isSymbolDate(new Date()), true);
check("symbolDate rejects string", mod.isSymbolDate("2020-01-01"), false);
check("symbolDate rejects plain object", mod.isSymbolDate({}), false);

// A union / enum base intersected with a phantom symbol brand validates as the
// bare union — never accept-everything. Each distributed member drops the brand.
check("unionSymbol accepts string", mod.isUnionSymbol("abc"), true);
check("unionSymbol accepts number", mod.isUnionSymbol(42), true);
check("unionSymbol rejects boolean", mod.isUnionSymbol(true), false);
check("unionSymbol rejects object", mod.isUnionSymbol({}), false);
check("unionSymbol rejects array", mod.isUnionSymbol([1]), false);
check("enumSymbol accepts member", mod.isEnumSymbol("KRW"), true);
check("enumSymbol accepts other member", mod.isEnumSymbol("USD"), true);
check("enumSymbol rejects non-member", mod.isEnumSymbol("JPY"), false);
check("enumSymbol rejects number", mod.isEnumSymbol(1), false);

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
const arraySchema = root(mod.schemaSymbolArray);
check("schema symbolArray type", arraySchema.type, "array");
check("schema symbolArray items", arraySchema.items.type, "string");

console.log("ok");
`
