package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestRecursiveVisitTrackingTransform verifies visitation context only for recursive validation.
//
// A recursive traversal needs shared visitation state to terminate cycles. A flat traversal has no recursive cycle and must avoid that state and its extra work.
//
// 1. The recursive fixture is paired with a non-recursive shape transformed through the same operation, testing both inclusion and exclusion of visitation state.
// 2. Recursive fixture emission contains _vctx while the flat control contains none, distinguishing required cycle state from unnecessary non-recursive overhead.
//
// @evidence contracts/testing.md#behavioral-verification Recursive fixture emission contains _vctx while the flat control contains none, distinguishing required cycle state from unnecessary non-recursive overhead.
// @evidence contracts/testing.md#independent-expectations Recursion can revisit an object identity and requires visitation state; a flat graph cannot form such a traversal cycle and does not need that context. These assertions own conditional state emission, not runtime cycle outcomes.
// @evidence contracts/testing.md#distinguishing-cases The recursive fixture is paired with a non-recursive shape transformed through the same operation, testing both inclusion and exclusion of visitation state.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestRecursiveVisitTrackingTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestRecursiveVisitTrackingTransform(t *testing.T) {
  project := recursiveVisitTrackingProject(t)
  js := recursiveVisitTrackingTransform(t, project)
  if !strings.Contains(js, "_vctx") {
    t.Fatalf("recursive fixtures did not emit visit tracking:\n%s", js)
  }

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
  dir := ttscTypiaTestFixtureDirectory(t, prefix)
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
export const cloneNode = typia.plain.createClone<INode>();
export const assertCloneNode = typia.plain.createAssertClone<INode>();
export const cloneTree = typia.plain.createClone<ITree>();

// In-place walker: prune must terminate on cycles while still erasing the
// superfluous properties it reaches.
export const pruneNode = typia.plain.createPrune<INode>();

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
