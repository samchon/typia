package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestTupleOptionalCompareCloneTransform pins optional-trailing tuple semantics
// across is / compare.equals / plain.clone / plain.classify.
//
// Issue #2202: for a tuple with an omitted optional trailing element, `is`
// correctly validates with a length range (`1 <= length && 2 >= length`), but
// `compare.equals` emitted a hard `x.length === 2` gate and `plain.clone` /
// `plain.classify` materialized the absent element as a phantom `undefined`
// (`[input[0], input[1]]`). So `equals(["a"], ["a"])` was false (reflexivity
// broken; disagrees with `is`) and `clone(["a"])` was `["a", undefined]`
// (length 2), not deep-equal to its input. The three must honor the same
// optional-trailing semantics as `is`.
//
//  1. Transform is / equals / clone / classify over `[string, number?]` and
//     `[string, number?, boolean?]`, plus fully-required and rest controls.
//  2. Require equals reflexive over omitted-optional values, clone/classify to
//     produce the correct length with no phantom slot, and `equals(x, clone(x))`
//     to hold for every is-valid x.
//  3. Require fully-populated tuples and rest tuples to be unchanged.
func TestTupleOptionalCompareCloneTransform(t *testing.T) {
  project := tupleOptionalCompareCloneProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("tuple optional compare/clone transform failed: code=%d stderr=\n%s", code, errText)
  }
  tupleOptionalCompareCloneRunRuntimeCases(t, project, out)
}

func tupleOptionalCompareCloneProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "tuple-optional-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(tupleOptionalCompareCloneTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(tupleOptionalCompareCloneSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func tupleOptionalCompareCloneRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(tupleOptionalCompareCloneRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("tuple optional compare/clone runtime cases failed: %v\n%s", err, output)
  }
}

const tupleOptionalCompareCloneTSConfig = `{
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

const tupleOptionalCompareCloneSource = `import typia from "typia";

export const isPair = typia.createIs<[string, number?]>();
export const equalsPair = typia.compare.createEquals<[string, number?]>();
export const clonePair = typia.plain.createClone<[string, number?]>();
export const classifyPair = typia.plain.createClassify<[string, number?]>();

export const isTriple = typia.createIs<[string, number?, boolean?]>();
export const equalsTriple = typia.compare.createEquals<[string, number?, boolean?]>();
export const cloneTriple = typia.plain.createClone<[string, number?, boolean?]>();
export const classifyTriple = typia.plain.createClassify<[string, number?, boolean?]>();

// boundary: a tuple whose only element is optional.
export const equalsSolo = typia.compare.createEquals<[number?]>();
export const cloneSolo = typia.plain.createClone<[number?]>();

// boundary: an optional trailing element that is itself a nested tuple.
export const equalsNested = typia.compare.createEquals<[string, [number, boolean]?]>();
export const cloneNested = typia.plain.createClone<[string, [number, boolean]?]>();

// control: a fully-required tuple must stay byte-identical.
export const equalsFixed = typia.compare.createEquals<[string, number]>();
export const cloneFixed = typia.plain.createClone<[string, number]>();

// control: a rest tuple must stay byte-identical.
export const equalsRest = typia.compare.createEquals<[string, ...number[]]>();
export const cloneRest = typia.plain.createClone<[string, ...number[]]>();
`

const tupleOptionalCompareCloneRuntimeRunner = `const mod = require("./main.cjs");

const expect = (label, actual, expected) => {
  if (actual !== expected) {
    throw new Error(label + ": expected " + expected + ", got " + actual);
  }
};

// A clone must be a distinct array, deep-equal to expected, with no phantom
// trailing slot (length matches, and the first out-of-range index is absent).
const expectClone = (label, result, expected) => {
  if (!Array.isArray(result)) throw new Error(label + ": not an array");
  if (result.length !== expected.length)
    throw new Error(label + ": length " + result.length + " !== " + expected.length);
  if (expected.length in result)
    throw new Error(label + ": phantom slot at index " + expected.length);
  for (let i = 0; i < expected.length; ++i)
    if (result[i] !== expected[i])
      throw new Error(label + ": [" + i + "] " + result[i] + " !== " + expected[i]);
};

// --- is: the reference range semantics (unchanged) ---
expect("is pair omitted", mod.isPair(["a"]), true);
expect("is pair present", mod.isPair(["a", 1]), true);
expect("is pair too long", mod.isPair(["a", 1, 2]), false);
expect("is triple omitted", mod.isTriple(["a"]), true);

// --- equals: reflexive over omitted optional; matches is ---
expect("equals pair omitted reflexive", mod.equalsPair(["a"], ["a"]), true);
expect("equals pair omitted vs present", mod.equalsPair(["a"], ["a", 1]), false);
expect("equals pair present reflexive", mod.equalsPair(["a", 1], ["a", 1]), true);
expect("equals pair present differ", mod.equalsPair(["a", 1], ["a", 2]), false);
expect("equals triple omitted reflexive", mod.equalsTriple(["a"], ["a"]), true);
expect("equals triple mid present reflexive", mod.equalsTriple(["a", 1], ["a", 1]), true);
expect("equals triple full reflexive", mod.equalsTriple(["a", 1, true], ["a", 1, true]), true);
expect("equals triple omitted vs present", mod.equalsTriple(["a"], ["a", 1]), false);

// --- clone: correct length, no phantom undefined ---
expectClone("clone pair omitted", mod.clonePair(["a"]), ["a"]);
expectClone("clone pair present", mod.clonePair(["a", 1]), ["a", 1]);
expectClone("clone triple omitted", mod.cloneTriple(["a"]), ["a"]);
expectClone("clone triple mid present", mod.cloneTriple(["a", 1]), ["a", 1]);
expectClone("clone triple full", mod.cloneTriple(["a", 1, true]), ["a", 1, true]);

// --- classify: same tuple-inline path as clone ---
expectClone("classify pair omitted", mod.classifyPair(["a"]), ["a"]);
expectClone("classify triple omitted", mod.classifyTriple(["a"]), ["a"]);

// --- equals(x, clone(x)) holds for every is-valid x ---
for (const x of [["a"], ["a", 1]]) {
  if (mod.isPair(x)) expect("equals pair (x, clone x) " + JSON.stringify(x), mod.equalsPair(x, mod.clonePair(x)), true);
}
for (const x of [["a"], ["a", 1], ["a", 1, true]]) {
  if (mod.isTriple(x)) expect("equals triple (x, clone x) " + JSON.stringify(x), mod.equalsTriple(x, mod.cloneTriple(x)), true);
}

// --- boundary: only-optional tuple ---
expect("equals solo empty reflexive", mod.equalsSolo([], []), true);
expect("equals solo empty vs present", mod.equalsSolo([], [1]), false);
expect("equals solo present reflexive", mod.equalsSolo([1], [1]), true);
expectClone("clone solo empty", mod.cloneSolo([]), []);
expectClone("clone solo present", mod.cloneSolo([1]), [1]);

// --- boundary: nested tuple as the optional trailing element ---
expect("equals nested omitted reflexive", mod.equalsNested(["a"], ["a"]), true);
expect("equals nested present reflexive", mod.equalsNested(["a", [1, true]], ["a", [1, true]]), true);
expect("equals nested omitted vs present", mod.equalsNested(["a"], ["a", [1, true]]), false);
expectClone("clone nested omitted", mod.cloneNested(["a"]), ["a"]);
{
  const nested = mod.cloneNested(["a", [1, true]]);
  if (nested.length !== 2) throw new Error("clone nested present: outer length " + nested.length);
  if (1 in nested === false) throw new Error("clone nested present: missing inner tuple");
  expectClone("clone nested inner", nested[1], [1, true]);
}

// --- controls: fully-required and rest tuples unchanged ---
expect("equals fixed reflexive", mod.equalsFixed(["a", 1], ["a", 1]), true);
expect("equals fixed differ", mod.equalsFixed(["a", 1], ["a", 2]), false);
expectClone("clone fixed", mod.cloneFixed(["a", 1]), ["a", 1]);

expect("equals rest solo", mod.equalsRest(["a"], ["a"]), true);
expect("equals rest multi", mod.equalsRest(["a", 1, 2], ["a", 1, 2]), true);
expect("equals rest length differ", mod.equalsRest(["a", 1], ["a", 1, 2]), false);
expectClone("clone rest solo", mod.cloneRest(["a"]), ["a"]);
expectClone("clone rest multi", mod.cloneRest(["a", 1, 2]), ["a", 1, 2]);
`
