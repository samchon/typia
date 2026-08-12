package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestRecursiveConditionalAliasNameTransform pins the transform over a type
// whose resolved graph names itself (issue #2331).
//
// `Primitive<T>` instantiated at the self-recursive union `type Node = Date |
// Node[]` resolves to a union `X = string & Format<"date-time"> | X[]`, whose
// array member's sole type argument is `X` itself. The name builders walked
// union member -> array reference -> type argument and arrived back at the type
// whose name was still being composed, so they recursed until the plugin process
// died of a Go stack overflow: no diagnostic, no emit, and ttsc taken with it.
// `Primitive` is only one witness -- any self-recursive conditional alias
// produces the same graph -- so the fixture pins the bare `Rec<T>` form too.
//
// The names the fix produces have to stay usable, not merely terminate: the
// cycle's placeholder is the type's own symbol with its arguments unexpanded, so
// a JSON schema component keeps a short key instead of being named after a
// several-hundred-character structural dump of the elided rendering.
//
//  1. Transform is / assert / json.schema over `Primitive<Node>`, the bare
//     recursive conditional alias, and the recursive-JsonValue object, beside
//     controls (named recursive union, self-recursive array alias, recursive
//     interface) that already transformed and must keep their names.
//  2. Require the emit to carry a recursive array validator rather than an
//     inlined expansion.
//  3. Execute the emitted validators over positive, negative, nested and
//     boundary values, and require the recursive schema to self-reference
//     through a bounded component name.
func TestRecursiveConditionalAliasNameTransform(t *testing.T) {
  project := recursiveConditionalAliasNameProject(t)
  transform := func() (string, string, int) {
    return ttscTypiaTestCapture(func() int {
      return runTransform([]string{
        "--cwd", project,
        "--tsconfig", "tsconfig.json",
        "--file", "src/main.ts",
        "--output", "js",
      })
    })
  }

  out, errText, code := transform()
  if code != 0 {
    t.Fatalf("recursive conditional alias transform failed: code=%d stderr=\n%s", code, errText)
  }
  if strings.Contains(out, "_ia0") == false {
    t.Fatalf("expected a recursive array validator in the emit, got:\n%s", out)
  }

  // The cycle guard is a map, and the name it settles on becomes a helper
  // identifier and a schema component key. Map iteration order must not reach
  // either, so the same source has to emit the same bytes.
  repeat, repeatErr, repeatCode := transform()
  if repeatCode != 0 {
    t.Fatalf("recursive conditional alias repeat transform failed: code=%d stderr=\n%s", repeatCode, repeatErr)
  }
  if repeat != out {
    t.Fatalf("repeat transform emitted different bytes:\nfirst:\n%s\nsecond:\n%s", out, repeat)
  }

  recursiveConditionalAliasNameRunRuntimeCases(t, project, out)
}

func recursiveConditionalAliasNameProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "recursive-conditional-alias-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(recursiveConditionalAliasNameTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(recursiveConditionalAliasNameSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func recursiveConditionalAliasNameRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(filepath.Join(runtimeDir, "is-format-date-time-stub.cjs"), []byte(recursiveConditionalAliasNameFormatStub), 0o644); err != nil {
    t.Fatalf("write format stub: %v", err)
  }
  js = strings.ReplaceAll(js, `require("typia/lib/internal/_isFormatDateTime")`, `require("./is-format-date-time-stub.cjs")`)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, js)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(recursiveConditionalAliasNameRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("recursive conditional alias runtime cases failed: %v\n%s", err, output)
  }
}

const recursiveConditionalAliasNameTSConfig = `{
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

// The shipped helper validates the RFC 3339 date-time shape; the runtime cases
// only need it to separate a date-time string from a plain one, and a stable
// predicate keeps a failure reproducible.
const recursiveConditionalAliasNameFormatStub = `module.exports._isFormatDateTime = (value) =>
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/.test(value);
`

const recursiveConditionalAliasNameSource = `import typia, { Primitive, tags } from "typia";

// 1. the reported case: Primitive over a self-recursive union carrying Date.
//    Primitive rewrites the Date arm to a date-time string and keeps the array
//    arm pointing back at the whole union.
type Node = Date | Node[];
export const isPrimitiveNode = typia.createIs<Primitive<Node>>();
export const assertPrimitiveNode = typia.createAssert<Primitive<Node>>();
export const schemaPrimitiveNode = typia.json.schema<Primitive<Node>>();

// 2. the same graph without Primitive: any self-recursive conditional alias
//    instantiates to a union whose array member's type argument is that union
type Rec<T> = T extends Date
  ? string
  : T extends (infer U)[]
    ? Rec<U>[]
    : never;
export const isRec = typia.createIs<Rec<Node>>();

// 3. the second report: the recursion sits behind an object property
interface JsonObject {
  [key: string]: JsonValue;
}
type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];
interface Output {
  at: Date;
  payload: JsonValue;
}
export const isOutput = typia.createIs<Primitive<Output>>();

// controls: recursions that already named themselves through an alias or a
// declaration must keep transforming and must not take the cycle placeholder
type Named = (string & tags.Format<"date-time">) | Named[];
export const isNamed = typia.createIs<Named>();
export const schemaNamed = typia.json.schema<Named>();

type SelfArray = SelfArray[];
export const isSelfArray = typia.createIs<SelfArray>();

interface ICategory {
  name: string;
  children: ICategory[];
}
export const isCategory = typia.createIs<ICategory>();
export const schemaCategory = typia.json.schema<ICategory>();
`

const recursiveConditionalAliasNameRuntimeRunner = `const mod = require("./main.cjs");

let failures = 0;
const expect = (label, actual, expected) => {
  if (actual !== expected) {
    console.log("FAIL " + label + ": expected " + expected + ", got " + actual);
    failures++;
  }
};

const DATE = "2020-01-01T00:00:00.000Z";

// --- 1. Primitive<Node>: date-time string or (recursively) an array of those ---
expect("primitive top date-time", mod.isPrimitiveNode(DATE), true);
expect("primitive top plain string", mod.isPrimitiveNode("nope"), false);
expect("primitive top number", mod.isPrimitiveNode(1), false);
expect("primitive top null", mod.isPrimitiveNode(null), false);
expect("primitive top Date instance", mod.isPrimitiveNode(new Date(0)), false);
expect("primitive empty array", mod.isPrimitiveNode([]), true);
expect("primitive flat array", mod.isPrimitiveNode([DATE, DATE]), true);
expect("primitive flat array bad member", mod.isPrimitiveNode([DATE, "nope"]), false);
expect("primitive nested array", mod.isPrimitiveNode([[[DATE]], []]), true);
expect("primitive nested bad leaf", mod.isPrimitiveNode([[[1]]]), false);
expect("primitive nested Date instance", mod.isPrimitiveNode([[new Date(0)]]), false);

// depth boundary: the emitted validator recurses through one function, so a
// deep value must not need a deeper emit
let deep = [DATE];
for (let i = 0; i < 64; ++i) deep = [deep];
expect("primitive deeply nested", mod.isPrimitiveNode(deep), true);
let deepBad = [1];
for (let i = 0; i < 64; ++i) deepBad = [deepBad];
expect("primitive deeply nested bad leaf", mod.isPrimitiveNode(deepBad), false);

// the emitted recursive validator must not be fooled by a self-referencing value
const cyclic = [];
cyclic.push(cyclic);
expect("primitive cyclic value terminates", mod.isPrimitiveNode(cyclic), true);

// --- 1b. assert reports the arm, and passes what is valid ---
expect("assert passes", JSON.stringify(mod.assertPrimitiveNode([DATE])), JSON.stringify([DATE]));
let assertPath = "";
let assertExpected = "";
try {
  mod.assertPrimitiveNode(["nope"]);
  failures++;
  console.log("FAIL assert should have thrown");
} catch (exp) {
  assertPath = String(exp.path);
  assertExpected = String(exp.expected);
}
expect("assert names the path", assertPath, "$input[0]");
// The expected string is the same name the fix has to keep readable: the arm
// itself, not a structural dump of the cycle it sits in.
expect("assert names the arm", assertExpected.includes('Format<"date-time">'), true);
expect("assert expectation is bounded", assertExpected.length <= 64, true);

// --- 2. the bare recursive conditional alias: string or (recursively) arrays ---
expect("rec top string", mod.isRec("anything"), true);
expect("rec top number", mod.isRec(1), false);
expect("rec nested array", mod.isRec([["a"], []]), true);
expect("rec nested bad leaf", mod.isRec([[1]]), false);

// --- 3. the recursion behind an object property ---
expect("output valid", mod.isOutput({ at: DATE, payload: { a: [1, "b", null, { c: true }] } }), true);
expect("output bad date", mod.isOutput({ at: "nope", payload: 1 }), false);
expect("output missing key", mod.isOutput({ payload: 1 }), false);
expect("output bad payload", mod.isOutput({ at: DATE, payload: undefined }), false);

// --- controls: the recursions that already worked ---
expect("named recursive union", mod.isNamed([[DATE]]), true);
expect("named recursive union bad leaf", mod.isNamed([["nope"]]), false);
expect("self array alias", mod.isSelfArray([[], [[]]]), true);
expect("self array alias bad leaf", mod.isSelfArray([1]), false);
expect("category valid", mod.isCategory({ name: "a", children: [{ name: "b", children: [] }] }), true);
expect("category bad child", mod.isCategory({ name: "a", children: [{ name: 1, children: [] }] }), false);

// --- the schema names the cycle without dumping its structural expansion ---
const unit = mod.schemaPrimitiveNode;
const keys = Object.keys(unit.components.schemas || {});
expect("schema has one component", keys.length, 1);
const key = keys[0];
if (key !== undefined) {
  // The pre-fix walk could only have produced a name built from the checker's
  // elided rendering, which runs to several hundred characters; the placeholder
  // keeps it in the same range as an ordinary named component.
  expect("component name is bounded", key.length <= 64, true);
  expect("component is an array", unit.components.schemas[key].type, "array");
  const items = unit.components.schemas[key].items;
  const refs = (items.oneOf || []).filter((elem) => elem.$ref !== undefined);
  expect("array items reference the component itself", refs.length === 1 && refs[0].$ref === "#/components/schemas/" + key, true);
  expect("array items keep the date-time arm", (items.oneOf || []).some((elem) => elem.format === "date-time"), true);
}

// controls: a recursion reached through a declaration names every component it
// emits from that declaration, so the placeholder never applies to one
expect("category component name", Object.keys(mod.schemaCategory.components.schemas || {})[0], "ICategory");
const namedKeys = Object.keys(mod.schemaNamed.components.schemas || {});
expect(
  "named recursion names every component from its declaration",
  namedKeys.length !== 0 && namedKeys.every((elem) => elem.includes("Named")),
  true,
);

if (failures > 0) {
  throw new Error(failures + " assertion(s) failed");
}
console.log("all recursive-conditional-alias cases passed");
`
