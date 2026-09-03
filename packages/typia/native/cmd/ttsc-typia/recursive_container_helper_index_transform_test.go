package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestRecursiveContainerHelperIndexTransform verifies recursive container helpers
// remain callable when ordinary containers precede them in collection order.
func TestRecursiveContainerHelperIndexTransform(t *testing.T) {
  project := recursiveContainerHelperIndexProject(t)
  js := recursiveContainerHelperIndexTransform(t, project)
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
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
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
  ordinary: string[];
  value: JsonValue;
}

type RecursiveTuple = [string, RecursiveTuple | null];
interface TupleWitness {
  ordinary: [number];
  value: RecursiveTuple;
}

type RandomArray = Array<string | RandomArray>;
interface RandomArrayWitness {
  ordinary: string[];
  value: RandomArray;
}

export const isArray = typia.createIs<ArrayWitness>();
export const isTuple = typia.createIs<TupleWitness>();
export const stringifyArray = typia.json.createStringify<ArrayWitness>();
export const stringifyTuple = typia.json.createStringify<TupleWitness>();
export const camelArray = typia.notations.createCamel<ArrayWitness>();
export const camelTuple = typia.notations.createCamel<TupleWitness>();
export const cloneArray = typia.plain.createClone<ArrayWitness>();
export const cloneTuple = typia.plain.createClone<TupleWitness>();
export const classifyArray = typia.plain.createClassify<ArrayWitness>();
export const classifyTuple = typia.plain.createClassify<TupleWitness>();
export const pruneArray = typia.plain.createPrune<ArrayWitness>();
export const pruneTuple = typia.plain.createPrune<TupleWitness>();
export const randomArray = typia.createRandom<RandomArrayWitness>({
  array: () => [],
  string: () => "generated",
});
export const randomTuple = typia.createRandom<TupleWitness>({
  boolean: () => false,
  number: () => 1,
  string: () => "generated",
});
`

const recursiveContainerHelperIndexRuntimeRunner = `const mod = require("./main.cjs");

const arrayValue = { ordinary: ["a"], value: [1, { nested: [true, null] }] };
const tupleValue = { ordinary: [1], value: ["root", ["child", null]] };

const expect = (label, actual, expected) => {
  if (actual !== expected) {
    throw new Error(label + ": expected " + expected + ", got " + actual);
  }
};

expect("is array", mod.isArray(arrayValue), true);
expect("is tuple", mod.isTuple(tupleValue), true);
expect("stringify array", mod.stringifyArray(arrayValue), JSON.stringify(arrayValue));
expect("stringify tuple", mod.stringifyTuple(tupleValue), JSON.stringify(tupleValue));
expect("notation array", mod.camelArray(arrayValue).value[1].nested[0], true);
expect("notation tuple", mod.camelTuple(tupleValue).value[1][0], "child");
expect("clone array", mod.cloneArray(arrayValue).value[1].nested[1], null);
expect("clone tuple", mod.cloneTuple(tupleValue).value[1][0], "child");
expect("classify array", mod.classifyArray(arrayValue).value[1].nested[0], true);
expect("classify tuple", mod.classifyTuple(tupleValue).value[1][0], "child");

const prunedArray = { ...arrayValue, extra: true };
mod.pruneArray(prunedArray);
expect("prune array", "extra" in prunedArray, false);
const prunedTuple = { ...tupleValue, extra: true };
mod.pruneTuple(prunedTuple);
expect("prune tuple", "extra" in prunedTuple, false);

const generatedArray = mod.randomArray();
expect("random array", Array.isArray(generatedArray.value), true);
const generatedTuple = mod.randomTuple();
expect("random tuple", generatedTuple.value[0], "generated");
`

const recursiveContainerHelperIndexFeatureStub = `module.exports._jsonStringifyNumber = (value) => Number.isFinite(value) ? value : null;
module.exports._jsonStringifyString = (value) => JSON.stringify(value);
module.exports._randomArray = () => [];
module.exports._randomNumber = () => 1;
module.exports._randomPick = (values) => values[0];
module.exports._throwTypeGuardError = (props) => { throw Object.assign(new Error(props.expected), props); };
`
