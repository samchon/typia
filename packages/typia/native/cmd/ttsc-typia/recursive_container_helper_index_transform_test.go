package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestRecursiveContainerHelperIndexTransform verifies recursive helper calls and declarations share one identity.
//
// Issue #2385 places an ordinary array before a self-referential JSON array.
// Collection position and recursive index then diverge, leaving generated
// calls such as `_ia0` without declarations. The same indexing rule is shared
// by recursive tuples and every feature programmer that emits their helpers.
//
//  1. Transform check, stringify, notation, plain, and random operations over recursive arrays and tuples.
//  2. Execute recursive values after an ordinary container has displaced collection order.
//  3. Require normal feature results rather than missing-helper exceptions.
func TestRecursiveContainerHelperIndexTransform(t *testing.T) {
  project := recursiveContainerHelperIndexProject(t)
  js := recursiveContainerHelperIndexTransform(t, project)
  for _, helper := range []string{"_ia0", "_aa0", "_va0", "_ra0", "_it0"} {
    if !strings.Contains(js, helper) {
      t.Fatalf("recursive container fixture did not emit %q:\n%s", helper, js)
    }
  }
  recursiveContainerHelperIndexRunRuntimeCases(t, project, js)
}

func recursiveContainerHelperIndexProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "recursive-container-helper-index-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(recursiveContainerHelperIndexTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(recursiveContainerHelperIndexSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func recursiveContainerHelperIndexTransform(t *testing.T, project string) string {
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
    t.Fatalf("recursive container helper transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func recursiveContainerHelperIndexRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(filepath.Join(runtimeDir, "feature-stub.cjs"), []byte(recursiveContainerHelperIndexFeatureStub), 0o644); err != nil {
    t.Fatalf("write feature stub: %v", err)
  }
  for _, helper := range []string{
    "_jsonStringifyNumber",
    "_jsonStringifyString",
    "_randomArray",
    "_randomNumber",
    "_randomPick",
    "_throwTypeGuardError",
  } {
    js = strings.ReplaceAll(
      js,
      `require("typia/lib/internal/`+helper+`")`,
      `require("./feature-stub.cjs")`,
    )
  }
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(ttscTypiaTestRewriteCommonJS(t, js)), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(recursiveContainerHelperIndexRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("recursive container helper runtime cases failed: %v\n%s", err, output)
  }
}

const recursiveContainerHelperIndexTSConfig = `{
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

const recursiveContainerHelperIndexSource = `import typia from "typia";

type JsonPrimitive = string | number | boolean | null;
type JsonArray = JsonValue[];
type JsonObject = { [key: string]: JsonValue };
type JsonValue = JsonPrimitive | JsonArray | JsonObject;

interface ArrayWitness {
  strings: string[];
  value: JsonValue;
}
interface ArrayControl {
  value: JsonValue;
  strings: string[];
}

type RandomArray = Array<string | RandomArray>;
interface RandomArrayWitness {
  ordinary: string[];
  value: RandomArray;
}

type RecursiveTuple = [string, RecursiveTuple | null];
interface TupleWitness {
  ordinary: [number];
  value: RecursiveTuple;
}
interface TupleControl {
  value: RecursiveTuple;
  ordinary: [number];
}

export const isArray = typia.createIs<ArrayWitness>();
export const isArrayDirect = (input: unknown) => typia.is<ArrayWitness>(input);
export const assertArray = typia.createAssert<ArrayWitness>();
export const validateArray = typia.createValidate<ArrayWitness>();
export const equalsArray = typia.createEquals<ArrayWitness>();
export const isArrayControl = typia.createIs<ArrayControl>();

export const isTuple = typia.createIs<TupleWitness>();
export const validateTuple = typia.createValidate<TupleWitness>();
export const isTupleControl = typia.createIs<TupleControl>();

export const stringifyArray = typia.json.createStringify<ArrayWitness>();
export const camelArray = typia.notations.createCamel<ArrayWitness>();
export const cloneArray = typia.plain.createClone<ArrayWitness>();
export const classifyArray = typia.plain.createClassify<ArrayWitness>();
export const pruneArray = typia.plain.createPrune<ArrayWitness>();
export const stringifyTuple = typia.json.createStringify<TupleWitness>();
export const camelTuple = typia.notations.createCamel<TupleWitness>();
export const cloneTuple = typia.plain.createClone<TupleWitness>();
export const classifyTuple = typia.plain.createClassify<TupleWitness>();
export const pruneTuple = typia.plain.createPrune<TupleWitness>();
export const randomTuple = typia.createRandom<TupleWitness>({
  boolean: () => false,
  number: () => 1,
  string: () => "generated",
});
export const randomArray = typia.createRandom<RandomArrayWitness>({
  array: () => [],
  string: () => "generated",
});
`

const recursiveContainerHelperIndexRuntimeRunner = `const mod = require("./main.cjs");

const arrayValue = { strings: ["a"], value: [1, { nested: [true, null] }] };
const arrayControl = { value: [1, { nested: [true, null] }], strings: ["a"] };
const tupleValue = { ordinary: [1], value: ["root", ["child", null]] };
const tupleControl = { value: ["root", ["child", null]], ordinary: [1] };

const expect = (label, actual, expected) => {
  if (actual !== expected) {
    throw new Error(label + ": expected " + expected + ", got " + actual);
  }
};

expect("array factory valid", mod.isArray(arrayValue), true);
expect("array direct valid", mod.isArrayDirect(arrayValue), true);
expect("array missing sibling", mod.isArray({ value: [1] }), false);
expect("array recursive invalid", mod.isArray({ strings: ["a"], value: Symbol() }), false);
expect("array reversed control", mod.isArrayControl(arrayControl), true);
expect("array equals exact", mod.equalsArray(arrayValue), true);
expect("array equals extra", mod.equalsArray({ ...arrayValue, extra: true }), false);

const validArray = mod.validateArray(arrayValue);
if (validArray.success !== true) throw new Error("validate array rejected valid input");
const invalidArray = mod.validateArray({ value: [1] });
if (invalidArray.success !== false || invalidArray.errors.length === 0) {
  throw new Error("validate array did not return ordinary errors");
}
mod.assertArray(arrayValue);
try {
  mod.assertArray({ value: [1] });
  throw new Error("assert array accepted invalid input");
} catch (error) {
  if (error instanceof ReferenceError) throw error;
}

expect("tuple factory valid", mod.isTuple(tupleValue), true);
expect("tuple empty recursion", mod.isTuple({ ordinary: [1], value: ["root", null] }), true);
expect("tuple recursive invalid", mod.isTuple({ ordinary: [1], value: ["root", [1, null]] }), false);
expect("tuple ordinary invalid", mod.isTuple({ ordinary: [], value: ["root", null] }), false);
expect("tuple reversed control", mod.isTupleControl(tupleControl), true);
const invalidTuple = mod.validateTuple({ ordinary: [1], value: ["root", [1, null]] });
if (invalidTuple.success !== false || invalidTuple.errors.length === 0) {
  throw new Error("validate tuple did not return ordinary errors");
}

expect("json stringify", mod.stringifyArray(arrayValue), JSON.stringify(arrayValue));
expect("notation recursive value", mod.camelArray(arrayValue).value[1].nested[0], true);
expect("clone recursive value", mod.cloneArray(arrayValue).value[1].nested[1], null);
expect("classify recursive value", mod.classifyArray(arrayValue).value[1].nested[0], true);

const pruned = { ...arrayValue, extra: true };
mod.pruneArray(pruned);
expect("prune root extra", "extra" in pruned, false);
expect("prune recursive value", pruned.value[1].nested[0], true);

expect("json stringify tuple", mod.stringifyTuple(tupleValue), JSON.stringify(tupleValue));
expect("notation recursive tuple", mod.camelTuple(tupleValue).value[1][0], "child");
expect("clone recursive tuple", mod.cloneTuple(tupleValue).value[1][0], "child");
expect("classify recursive tuple", mod.classifyTuple(tupleValue).value[1][0], "child");
const prunedTuple = { ...tupleValue, extra: true };
mod.pruneTuple(prunedTuple);
expect("prune tuple extra", "extra" in prunedTuple, false);
expect("prune recursive tuple", prunedTuple.value[1][0], "child");

const generated = mod.randomTuple();
expect("random ordinary tuple", generated.ordinary[0], 1);
expect("random recursive tuple head", generated.value[0], "generated");
if (generated.value[1] !== null) {
  expect("random recursive tuple tail", generated.value[1][0], "generated");
}

const generatedArray = mod.randomArray();
if (Array.isArray(generatedArray.ordinary) === false || Array.isArray(generatedArray.value) === false) {
  throw new Error("random recursive array result: " + JSON.stringify(generatedArray));
}
`

const recursiveContainerHelperIndexFeatureStub = `module.exports._jsonStringifyNumber = (value) => Number.isFinite(value) ? value : null;
module.exports._jsonStringifyString = (value) => JSON.stringify(value);
module.exports._randomArray = () => [];
module.exports._randomNumber = () => 1;
module.exports._randomPick = (values) => values[0];
module.exports._throwTypeGuardError = (props) => { throw Object.assign(new Error(props.expected), props); };
`
