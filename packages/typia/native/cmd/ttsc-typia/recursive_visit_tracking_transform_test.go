package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestRecursiveVisitTrackingTransform verifies cycle-safe validators.
//
// Issue #1820: generated validators walked recursive values without visit
// tracking, so any runtime cycle overflowed the stack. Recursive type graphs
// are the only way the generated function call graph can cycle, so the
// transform now threads a per-invocation `_vctx` context through validators
// of recursive types and guards each recursive function with a lazy WeakSet:
// a value already being checked (or proven) short-circuits to true — the
// coinductive reading — and a failed check removes its entry so union-branch
// probing cannot poison sibling checks of the same value.
//
//  1. Self-recursive, mutually recursive, recursive-array, and
//     recursive-tuple cycles validate successfully across is / assert /
//     validate / equals.
//  2. Cyclic but invalid values are rejected finitely with correct error
//     paths, and assert throws instead of overflowing.
//  3. Union probing of one shared cyclic value across recursive branches
//     stays correct (delete-on-fail), and DAG aliases revalidate per path.
//  4. Repeat invocations stay independent (per-invocation context).
//  5. Non-recursive types keep their emission free of any `_vctx` text.
func TestRecursiveVisitTrackingTransform(t *testing.T) {
  project := recursiveVisitTrackingProject(t)
  js := recursiveVisitTrackingTransform(t, project)
  if !strings.Contains(js, "_vctx") {
    t.Fatalf("recursive fixtures did not emit visit tracking:\n%s", js)
  }
  recursiveVisitTrackingRunRuntimeCases(t, project, js)

  flat := recursiveVisitTrackingFlatControl(t)
  if strings.Contains(flat, "_vctx") {
    t.Fatalf("non-recursive emission must stay untouched by visit tracking:\n%s", flat)
  }
}

func recursiveVisitTrackingProject(t *testing.T) string {
  t.Helper()
  return recursiveVisitTrackingWrite(t, "visit-", recursiveVisitTrackingSource)
}

func recursiveVisitTrackingFlatControl(t *testing.T) string {
  t.Helper()
  project := recursiveVisitTrackingWrite(t, "visit-flat-", recursiveVisitTrackingFlatSource)
  return recursiveVisitTrackingTransform(t, project)
}

func recursiveVisitTrackingWrite(t *testing.T, prefix string, source string) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, prefix)
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(recursiveVisitTrackingTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(source), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func recursiveVisitTrackingTransform(t *testing.T, project string) string {
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
    t.Fatalf("visit tracking transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func recursiveVisitTrackingRunRuntimeCases(t *testing.T, project string, js string) {
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
  extras := map[string]string{
    "throw-type-guard-error-stub.cjs":   recursiveVisitTrackingThrowStub,
    "protobuf-sizer-stub.cjs":           recursiveVisitTrackingProtobufSizerStub,
    "protobuf-writer-stub.cjs":          recursiveVisitTrackingProtobufWriterStub,
    "json-stringify-number-stub.cjs":    recursiveVisitTrackingNumberStub,
  }
  for name, content := range extras {
    if err := os.WriteFile(filepath.Join(runtimeDir, name), []byte(content), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  js = strings.ReplaceAll(js, `require("typia/lib/internal/_throwTypeGuardError")`, `require("./throw-type-guard-error-stub.cjs")`)
  js = strings.ReplaceAll(js, `require("typia/lib/internal/_ProtobufSizer")`, `require("./protobuf-sizer-stub.cjs")`)
  js = strings.ReplaceAll(js, `require("typia/lib/internal/_ProtobufWriter")`, `require("./protobuf-writer-stub.cjs")`)
  js = strings.ReplaceAll(js, `require("typia/lib/internal/_jsonStringifyNumber")`, `require("./json-stringify-number-stub.cjs")`)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, js)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(recursiveVisitTrackingRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("visit tracking runtime cases failed: %v\n%s", err, output)
  }
}

const recursiveVisitTrackingTSConfig = `{
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

const recursiveVisitTrackingSource = `import typia from "typia";

// The issue #1820 case: self recursion.
interface INode {
  id: number;
  parent: INode | null;
}
export const isNode = typia.createIs<INode>();
export const assertNode = typia.createAssert<INode>();
export const validateNode = typia.createValidate<INode>();
export const equalsNode = typia.createEquals<INode>();

// Mutual recursion.
interface IAlpha {
  a: string;
  beta: IBeta | null;
}
interface IBeta {
  b: number;
  alpha: IAlpha | null;
}
export const isAlpha = typia.createIs<IAlpha>();
export const validateAlpha = typia.createValidate<IAlpha>();

// Recursion through an array property.
interface ITree {
  id: number;
  children: ITree[];
}
export const isTree = typia.createIs<ITree>();
export const validateTree = typia.createValidate<ITree>();

// Recursion through a tuple.
type TPair = [number, TPair | null];
export const isPair = typia.createIs<TPair>();
export const validatePair = typia.createValidate<TPair>();

// Non-discriminated union of two recursive shapes: probing one branch with a
// shared cyclic value must not poison the other branch (delete-on-fail).
interface IUA {
  next: IUA | null;
  a: number;
}
interface IUB {
  next: IUB | null;
  b: number;
}
export const isUnion = typia.createIs<IUA | IUB>();

// Recursion through dynamic record keys.
interface IGraph {
  name: string;
  nodes: Record<string, IGraph>;
}
export const isGraph = typia.createIs<IGraph>();

// A recursive array as one branch of a union: exercises the hoisted union
// predicate path, which must thread the visit context as a parameter.
export const isForest = typia.createIs<ITree[] | number>();
export const validateForest = typia.createValidate<ITree[] | number>();

// Rebuilders: clone must reproduce cycles (structured-clone style), and the
// assert composition shares one functor with the clone emission.
export const cloneNode = typia.misc.createClone<INode>();
export const assertCloneNode = typia.misc.createAssertClone<INode>();
export const cloneTree = typia.misc.createClone<ITree>();

// In-place walker: prune must terminate on cycles while still erasing the
// superfluous properties it reaches.
export const pruneNode = typia.misc.createPrune<INode>();

// Renaming rebuilder: notations must reproduce cycles under the new keys.
interface IRenamed {
  userId: number;
  nextNode: IRenamed | null;
}
export const snakeRenamed = typia.notations.createSnake<IRenamed>();

// Serializers: JSON and protobuf cannot represent cycles, so they must fail
// fast with a TypeGuardError instead of overflowing the stack — while DAG
// aliases keep serializing (duplicated output is legal).
export const stringifyNode = typia.json.createStringify<INode>();
export const assertStringifyNode = typia.json.createAssertStringify<INode>();

interface IProtoNode {
  id: number;
  child: IProtoNode | null;
}
export const encodeNode = typia.protobuf.createEncode<IProtoNode>();
`

const recursiveVisitTrackingFlatSource = `import typia from "typia";

interface IFlat {
  id: number;
  name: string;
  tags: string[];
}
export const isFlat = typia.createIs<IFlat>();
export const validateFlat = typia.createValidate<IFlat>();
`

const recursiveVisitTrackingRuntimeRunner = `const mod = require("./main.cjs");

const expect = (label, actual, expected) => {
  if (actual !== expected) {
    throw new Error(label + ": expected " + expected + ", got " + actual);
  }
};
const capture = (task) => {
  try {
    task();
    return null;
  } catch (error) {
    return error;
  }
};

// 1. Self recursion: the issue's exact case.
const node = { id: 1, parent: null };
node.parent = node;
expect("cyclic is", mod.isNode(node), true);
expect("cyclic validate", mod.validateNode(node).success, true);
expect("cyclic assert", mod.assertNode(node), node);
expect("cyclic equals", mod.equalsNode(node), true);

// 2. Cyclic but invalid: finite rejection with correct paths.
const bad = { id: 1, parent: null };
bad.parent = { id: "x", parent: bad };
expect("bad is", mod.isNode(bad), false);
const badReport = mod.validateNode(bad);
expect("bad validate", badReport.success, false);
if (badReport.errors.every((e) => e.path !== "$input.parent.id")) {
  throw new Error("bad validate lost the cycle-internal path: " +
    badReport.errors.map((e) => e.path).join(", "));
}
const badAssert = capture(() => mod.assertNode(bad));
if (badAssert === null) {
  throw new Error("assert accepted a cyclic invalid value");
}

// 3. Equals: cyclic value with a superfluous property must still fail.
const extra = { id: 1, parent: null, superfluous: true };
extra.parent = extra;
expect("cyclic equals superfluous", mod.equalsNode(extra), false);
expect("cyclic is ignores superfluous", mod.isNode(extra), true);

// 4. Mutual recursion.
const alpha = { a: "a", beta: null };
const beta = { b: 2, alpha: alpha };
alpha.beta = beta;
expect("mutual is", mod.isAlpha(alpha), true);
expect("mutual validate", mod.validateAlpha(alpha).success, true);
beta.b = "broken";
expect("mutual broken is", mod.isAlpha(alpha), false);
const mutualReport = mod.validateAlpha(alpha);
expect("mutual broken validate", mutualReport.success, false);
if (mutualReport.errors.every((e) => e.path !== "$input.beta.b")) {
  throw new Error("mutual validate lost the path: " +
    mutualReport.errors.map((e) => e.path).join(", "));
}

// 5. Recursion through arrays.
const tree = { id: 1, children: [] };
tree.children.push(tree, { id: 2, children: [] });
expect("tree is", mod.isTree(tree), true);
expect("tree validate", mod.validateTree(tree).success, true);
tree.children.push({ id: "x", children: [] });
expect("tree broken is", mod.isTree(tree), false);
const treeReport = mod.validateTree(tree);
expect("tree broken validate", treeReport.success, false);
if (treeReport.errors.every((e) => e.path !== "$input.children[2].id")) {
  throw new Error("tree validate lost the indexed path: " +
    treeReport.errors.map((e) => e.path).join(", "));
}

// 6. Recursion through tuples.
const pair = [1, null];
pair[1] = pair;
expect("pair is", mod.isPair(pair), true);
expect("pair validate", mod.validatePair(pair).success, true);
const badPair = [1, ["x", null]];
expect("bad pair is", mod.isPair(badPair), false);

// 7. Union probing with a shared cyclic value: a cyclic IUB must survive the
//    IUA probe failing on it first.
const ub = { next: null, b: 3 };
ub.next = ub;
expect("union cyclic b", mod.isUnion(ub), true);
const ua = { next: null, a: 4 };
ua.next = ua;
expect("union cyclic a", mod.isUnion(ua), true);
const neither = { next: null, c: 5 };
neither.next = neither;
expect("union cyclic neither", mod.isUnion(neither), false);

// 8. Recursion through dynamic record keys.
const graph = { name: "root", nodes: {} };
graph.nodes.self = graph;
graph.nodes.leaf = { name: "leaf", nodes: {} };
expect("graph is", mod.isGraph(graph), true);
graph.nodes.bad = { name: 9, nodes: {} };
expect("graph broken is", mod.isGraph(graph), false);

// 9. DAG aliases: valid shared subtrees pass; an invalid shared subtree is
//    reported at every path it appears under (delete-on-fail re-walks).
const shared = { id: 7, parent: null };
expect("dag is", mod.isNode({ id: 1, parent: shared }), true);
const wrongShared = { id: "broken", parent: null };
const dagReport = mod.validateNode({ id: 1, parent: wrongShared });
expect("dag broken validate", dagReport.success, false);

// 10. Recursive array branch inside a union.
expect("forest number", mod.isForest(8), true);
const forest = [{ id: 1, children: [] }];
forest[0].children.push(forest[0]);
expect("forest cyclic", mod.isForest(forest), true);
expect("forest cyclic validate", mod.validateForest(forest).success, true);
forest.push({ id: "x", children: [] });
expect("forest broken", mod.isForest(forest), false);

// 11. Repeat invocations stay independent.
expect("repeat 1", mod.isNode(node), true);
expect("repeat 2", mod.isNode(node), true);
expect("repeat bad", mod.isNode(bad), false);
expect("repeat good after bad", mod.isNode(node), true);

// 12. Clone reproduces cycles with fresh identity (structured-clone style).
const cloned = mod.cloneNode(node);
expect("clone new identity", cloned !== node, true);
expect("clone cycle reproduced", cloned.parent === cloned, true);
expect("clone value", cloned.id, 1);
const assertCloned = mod.assertCloneNode(node);
expect("assertClone cycle", assertCloned.parent === assertCloned, true);
const clonedTree = mod.cloneTree(tree2());
expect("clone tree cycle", clonedTree.children[0] === clonedTree, true);
expect("clone tree leaf identity", clonedTree.children[1].id, 2);
function tree2() {
  const value = { id: 1, children: [] };
  value.children.push(value, { id: 2, children: [] });
  return value;
}

// 13. Prune terminates on cycles and still erases superfluous properties.
const prunable = { id: 1, parent: null, superfluous: "x" };
prunable.parent = prunable;
mod.pruneNode(prunable);
expect("prune terminated and erased", "superfluous" in prunable, false);
expect("prune kept cycle", prunable.parent === prunable, true);

// 14. Notations reproduce cycles under the renamed keys.
const renamed = { userId: 9, nextNode: null };
renamed.nextNode = renamed;
const snaked = mod.snakeRenamed(renamed);
expect("snake renamed key", snaked.user_id, 9);
expect("snake cycle reproduced", snaked.next_node === snaked, true);

// 15. JSON stringify: cycles fail fast, DAG aliases keep serializing.
const circularError = capture(() => mod.stringifyNode(node));
if (circularError === null) {
  throw new Error("stringify accepted a circular value");
}
if (String(circularError.expected).includes("non-circular") === false) {
  throw new Error("stringify cycle error lost its expected text: " + circularError.expected);
}
const sharedLeaf = { id: 7, parent: null };
expect(
  "stringify DAG",
  typeof mod.stringifyNode({ id: 1, parent: sharedLeaf }),
  "string",
);
const assertStringifyError = capture(() => mod.assertStringifyNode(node));
if (assertStringifyError === null) {
  throw new Error("assertStringify accepted a circular value");
}

// 16. Protobuf encode: cycles fail fast, acyclic recursive values encode.
const protoCycle = { id: 1, child: null };
protoCycle.child = protoCycle;
const protoError = capture(() => mod.encodeNode(protoCycle));
if (protoError === null) {
  throw new Error("protobuf encode accepted a circular value");
}
const protoOk = capture(() => mod.encodeNode({ id: 1, child: { id: 2, child: null } }));
if (protoOk !== null) {
  throw new Error("protobuf encode rejected an acyclic recursive value: " + protoOk);
}
`

const recursiveVisitTrackingNumberStub = `module.exports._jsonStringifyNumber = (value) => String(value);
`

const recursiveVisitTrackingThrowStub = `module.exports._throwTypeGuardError = (props) => {
  const error = new Error("typia.json.stringify: " + props.expected);
  error.method = props.method;
  error.expected = props.expected;
  error.value = props.value;
  throw error;
};
`

const recursiveVisitTrackingProtobufSizerStub = `class ProtobufSizer {
  constructor() {
    return new Proxy(this, { get: () => () => 0 });
  }
}
module.exports._ProtobufSizer = ProtobufSizer;
module.exports.ProtobufSizer = ProtobufSizer;
`

const recursiveVisitTrackingProtobufWriterStub = `class ProtobufWriter {
  constructor() {
    return new Proxy(this, { get: () => () => new Uint8Array() });
  }
}
module.exports._ProtobufWriter = ProtobufWriter;
module.exports.ProtobufWriter = ProtobufWriter;
`
