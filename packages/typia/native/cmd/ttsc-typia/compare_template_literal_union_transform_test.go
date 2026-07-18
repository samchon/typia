package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestCompareTemplateLiteralUnionTransform verifies template-literal object
// union members retain their runtime domains during equality dispatch.
//
// The #2225 first-match fallback must use the same structural template
// membership decision as is and clone. Weakening both template domains to
// `typeof string` routes valid `b_*` values through the `a_*` comparator and
// drops `b`.
//
//  1. Transform direct and factory is, clone, and equals calls for a tag-free
//     template-literal object union and the same union nested in an object.
//  2. Prove is accepts both witnesses and clone selects the `b_*` member while
//     preserving their different `b` values.
//  3. Exercise equal, cross-member, invalid-discriminator, nested, literal-
//     discriminated, non-discriminable, and non-union controls at runtime.
func TestCompareTemplateLiteralUnionTransform(t *testing.T) {
  project := compareTemplateLiteralUnionProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("compare template-literal union transform failed: code=%d stderr=\n%s", code, errText)
  }
  compareTemplateLiteralUnionRunRuntimeCases(t, project, out)
}

func compareTemplateLiteralUnionProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "compare-template-literal-union-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(compareTemplateLiteralUnionTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(compareTemplateLiteralUnionSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func compareTemplateLiteralUnionRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(filepath.Join(runtimeDir, "throw-type-guard-error-stub.cjs"), []byte(compareTemplateLiteralUnionThrowStub), 0o644); err != nil {
    t.Fatalf("write throw stub: %v", err)
  }
  js = strings.ReplaceAll(js, `require("typia/lib/internal/_throwTypeGuardError")`, `require("./throw-type-guard-error-stub.cjs")`)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, js)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(compareTemplateLiteralUnionRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("compare template-literal union runtime cases failed: %v\n%s", err, output)
  }
}

const compareTemplateLiteralUnionTSConfig = `{
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

const compareTemplateLiteralUnionThrowStub = `module.exports._throwTypeGuardError = (props) => {
  const error = new Error("guard: " + props.expected);
  error.name = "TypeGuardError";
  throw error;
};
`

const compareTemplateLiteralUnionSource = `import typia from "typia";

type TemplateUnion =
  | { kind: ` + "`a_${string}`" + `; common: string }
  | { kind: ` + "`b_${string}`" + `; common: string; b?: string };
type Nested = { value: TemplateUnion };

export const isTemplate = typia.createIs<TemplateUnion>();
export const cloneTemplate = typia.plain.createClone<TemplateUnion>();
export const eqTemplateFactory = typia.compare.createEquals<TemplateUnion>();
export const eqTemplateDirect = (x: TemplateUnion, y: TemplateUnion) =>
  typia.compare.equals<TemplateUnion>(x, y);

export const isNested = typia.createIs<Nested>();
export const cloneNested = typia.plain.createClone<Nested>();
export const eqNestedFactory = typia.compare.createEquals<Nested>();
export const eqNestedDirect = (x: Nested, y: Nested) =>
  typia.compare.equals<Nested>(x, y);

export const eqLiteral = typia.compare.createEquals<
  { kind: "a"; value: number } | { kind: "b"; value: string }
>();
export const eqOptional = typia.compare.createEquals<
  { a?: number } | { b?: string }
>();
export const eqPlain = typia.compare.createEquals<{
  kind: string;
  common: string;
  b?: string;
}>();
`

const compareTemplateLiteralUnionRuntimeRunner = `const mod = require("./main.cjs");

let failures = 0;
const expect = (label, actual, expected) => {
  if (actual !== expected) {
    console.log("FAIL " + label + ": expected " + expected + ", got " + actual);
    failures++;
  }
};
const expectJson = (label, actual, expected) =>
  expect(label, JSON.stringify(actual), JSON.stringify(expected));

const left = { kind: "b_x", common: "same", b: "left" };
const right = { kind: "b_x", common: "same", b: "right" };
expect("is left b member", mod.isTemplate(left), true);
expect("is right b member", mod.isTemplate(right), true);
expectJson("clone left preserves b", mod.cloneTemplate(left), left);
expectJson("clone right preserves b", mod.cloneTemplate(right), right);
expect("factory different b", mod.eqTemplateFactory(left, right), false);
expect("direct different b", mod.eqTemplateDirect(left, right), false);

expect("factory equal b", mod.eqTemplateFactory(
  { kind: "b_x", common: "same", b: "same" },
  { kind: "b_x", common: "same", b: "same" },
), true);
expect("direct equal b", mod.eqTemplateDirect(
  { kind: "b_x", common: "same", b: "same" },
  { kind: "b_x", common: "same", b: "same" },
), true);
expect("a member different common", mod.eqTemplateFactory(
  { kind: "a_x", common: "left" },
  { kind: "a_x", common: "right" },
), false);
expect("a member equal", mod.eqTemplateFactory(
  { kind: "a_x", common: "same" },
  { kind: "a_x", common: "same" },
), true);
expect("a versus b", mod.eqTemplateFactory(
  { kind: "a_x", common: "same" },
  { kind: "b_x", common: "same" },
), false);

const invalidLeft = { kind: "c_x", common: "same" };
const invalidRight = { kind: "c_x", common: "same" };
expect("is rejects invalid discriminator", mod.isTemplate(invalidLeft), false);
expect("factory rejects invalid discriminator", mod.eqTemplateFactory(invalidLeft, invalidRight), false);
expect("direct rejects invalid discriminator", mod.eqTemplateDirect(invalidLeft, invalidRight), false);

const nestedLeft = { value: left };
const nestedRight = { value: right };
expect("nested is left", mod.isNested(nestedLeft), true);
expect("nested is right", mod.isNested(nestedRight), true);
expectJson("nested clone left preserves b", mod.cloneNested(nestedLeft), nestedLeft);
expectJson("nested clone right preserves b", mod.cloneNested(nestedRight), nestedRight);
expect("nested factory different b", mod.eqNestedFactory(nestedLeft, nestedRight), false);
expect("nested direct different b", mod.eqNestedDirect(nestedLeft, nestedRight), false);
expect("nested factory equal b", mod.eqNestedFactory(
  { value: { kind: "b_x", common: "same", b: "same" } },
  { value: { kind: "b_x", common: "same", b: "same" } },
), true);
expect("nested invalid discriminator", mod.eqNestedFactory(
  { value: invalidLeft },
  { value: invalidRight },
), false);

expect("literal member different", mod.eqLiteral(
  { kind: "a", value: 1 },
  { kind: "a", value: 2 },
), false);
expect("literal cross member", mod.eqLiteral(
  { kind: "a", value: 1 },
  { kind: "b", value: "1" },
), false);
expect("optional member different", mod.eqOptional({ a: 1 }, { a: 2 }), false);
expect("optional second payload follows first match", mod.eqOptional({ b: "left" }, { b: "right" }), true);
expect("plain different", mod.eqPlain(
  { kind: "b_x", common: "same", b: "left" },
  { kind: "b_x", common: "same", b: "right" },
), false);
expect("plain equal", mod.eqPlain(
  { kind: "b_x", common: "same", b: "same" },
  { kind: "b_x", common: "same", b: "same" },
), true);

if (failures > 0) {
  throw new Error(failures + " assertion(s) failed");
}
console.log("all compare template-literal union cases passed");
`
