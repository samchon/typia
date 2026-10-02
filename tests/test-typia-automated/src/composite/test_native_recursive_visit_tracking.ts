import typia from "typia";

// The issue #1820 case: self recursion.
interface INode {
  id: number;
  parent: INode | null;
}
const isNode = typia.createIs<INode>();
const assertNode = typia.createAssert<INode>();
const validateNode = typia.createValidate<INode>();
const equalsNode = typia.createEquals<INode>();

// Mutual recursion.
interface IAlpha {
  a: string;
  beta: IBeta | null;
}
interface IBeta {
  b: number;
  alpha: IAlpha | null;
}
const isAlpha = typia.createIs<IAlpha>();
const validateAlpha = typia.createValidate<IAlpha>();

// Recursion through an array property.
interface ITree {
  id: number;
  children: ITree[];
}
const isTree = typia.createIs<ITree>();
const validateTree = typia.createValidate<ITree>();

// Recursion through a tuple.
type TPair = [number, TPair | null];
const isPair = typia.createIs<TPair>();
const validatePair = typia.createValidate<TPair>();

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
const isUnion = typia.createIs<IUA | IUB>();

// Recursion through dynamic record keys.
interface IGraph {
  name: string;
  nodes: Record<string, IGraph>;
}
const isGraph = typia.createIs<IGraph>();

// A recursive array as one branch of a union: exercises the hoisted union
// predicate path, which must thread the visit context as a parameter.
const isForest = typia.createIs<ITree[] | number>();
const validateForest = typia.createValidate<ITree[] | number>();

// Rebuilders: clone must reproduce cycles (structured-clone style), and the
// assert composition shares one functor with the clone emission.
const cloneNode = typia.plain.createClone<INode>();
const assertCloneNode = typia.plain.createAssertClone<INode>();
const cloneTree = typia.plain.createClone<ITree>();

// In-place walker: prune must terminate on cycles while still erasing the
// superfluous properties it reaches.
const pruneNode = typia.plain.createPrune<INode>();

// Renaming rebuilder: notations must reproduce cycles under the new keys.
interface IRenamed {
  userId: number;
  nextNode: IRenamed | null;
}
const snakeRenamed = typia.notations.createSnake<IRenamed>();

// Serializers: JSON and protobuf cannot represent cycles, so they must fail
// fast with a TypeGuardError instead of overflowing the stack — while DAG
// aliases keep serializing (duplicated output is legal).
const stringifyNode = typia.json.createStringify<INode>();
const assertStringifyNode = typia.json.createAssertStringify<INode>();

interface IProtoNode {
  id: number;
  child: IProtoNode | null;
}
const encodeNode = typia.protobuf.createEncode<IProtoNode>();
const fixture = {
  isNode,
  assertNode,
  validateNode,
  equalsNode,
  isAlpha,
  validateAlpha,
  isTree,
  validateTree,
  isPair,
  validatePair,
  isUnion,
  isGraph,
  isForest,
  validateForest,
  cloneNode,
  assertCloneNode,
  cloneTree,
  pruneNode,
  snakeRenamed,
  stringifyNode,
  assertStringifyNode,
  encodeNode,
};

/**
 * Verifies recursive visit tracking in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * recursiveVisitTrackingSource declarations; the former
 * recursiveVisitTrackingRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: cyclic is; cyclic validate; cyclic assert;
 * cyclic equals; bad is; bad validate.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from recursiveVisitTrackingRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Authored self/mutual/container cycles with valid leaves must terminate and accept; wrong cycle-internal leaves and surplus equality keys reject. Three validation failures check literal path presence. Serializer cycles must throw, with non-circular expected text checked only for plain stringify; error identity and serializer paths are not asserted. Clone and notation checks pin cycle identity relations and literal leaf values.
 * @evidence contracts/testing.md#distinguishing-cases Preserves cyclic is; cyclic validate; cyclic assert; cyclic equals; bad is; bad validate; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_recursive_visit_tracking in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed recursiveVisitTrackingSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/recursive_visit_tracking_transform_test.go recursiveVisitTrackingRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_recursive_visit_tracking = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const expect: any = (label: any, actual: any, expected: any): any => {
    if (actual !== expected) {
      throw new Error(label + ": expected " + expected + ", got " + actual);
    }
  };
  const capture: any = (task: any): any => {
    try {
      task();
      return null;
    } catch (error: any) {
      return error;
    }
  };

  // 1. Self recursion: the issue's exact case.
  const node: any = { id: 1, parent: null };
  node.parent = node;
  expect("cyclic is", mod.isNode(node), true);
  expect("cyclic validate", mod.validateNode(node).success, true);
  expect("cyclic assert", mod.assertNode(node), node);
  expect("cyclic equals", mod.equalsNode(node), true);

  // 2. Cyclic but invalid: finite rejection with correct paths.
  const bad: any = { id: 1, parent: null };
  bad.parent = { id: "x", parent: bad };
  expect("bad is", mod.isNode(bad), false);
  const badReport: any = mod.validateNode(bad);
  expect("bad validate", badReport.success, false);
  if (badReport.errors.every((e: any): any => e.path !== "$input.parent.id")) {
    throw new Error(
      "bad validate lost the cycle-internal path: " +
        badReport.errors.map((e: any): any => e.path).join(", "),
    );
  }
  const badAssert: any = capture((): any => mod.assertNode(bad));
  if (badAssert === null) {
    throw new Error("assert accepted a cyclic invalid value");
  }

  // 3. Equals: cyclic value with a superfluous property must still fail.
  const extra: any = { id: 1, parent: null, superfluous: true };
  extra.parent = extra;
  expect("cyclic equals superfluous", mod.equalsNode(extra), false);
  expect("cyclic is ignores superfluous", mod.isNode(extra), true);

  // 4. Mutual recursion.
  const alpha: any = { a: "a", beta: null };
  const beta: any = { b: 2, alpha: alpha };
  alpha.beta = beta;
  expect("mutual is", mod.isAlpha(alpha), true);
  expect("mutual validate", mod.validateAlpha(alpha).success, true);
  beta.b = "broken";
  expect("mutual broken is", mod.isAlpha(alpha), false);
  const mutualReport: any = mod.validateAlpha(alpha);
  expect("mutual broken validate", mutualReport.success, false);
  if (mutualReport.errors.every((e: any): any => e.path !== "$input.beta.b")) {
    throw new Error(
      "mutual validate lost the path: " +
        mutualReport.errors.map((e: any): any => e.path).join(", "),
    );
  }

  // 5. Recursion through arrays.
  const tree: any = { id: 1, children: [] };
  tree.children.push(tree, { id: 2, children: [] });
  expect("tree is", mod.isTree(tree), true);
  expect("tree validate", mod.validateTree(tree).success, true);
  tree.children.push({ id: "x", children: [] });
  expect("tree broken is", mod.isTree(tree), false);
  const treeReport: any = mod.validateTree(tree);
  expect("tree broken validate", treeReport.success, false);
  if (
    treeReport.errors.every((e: any): any => e.path !== "$input.children[2].id")
  ) {
    throw new Error(
      "tree validate lost the indexed path: " +
        treeReport.errors.map((e: any): any => e.path).join(", "),
    );
  }

  // 6. Recursion through tuples.
  const pair: any = [1, null];
  pair[1] = pair;
  expect("pair is", mod.isPair(pair), true);
  expect("pair validate", mod.validatePair(pair).success, true);
  const badPair: any = [1, ["x", null]];
  expect("bad pair is", mod.isPair(badPair), false);

  // 7. Union probing with a shared cyclic value: a cyclic IUB must survive the
  //    IUA probe failing on it first.
  const ub: any = { next: null, b: 3 };
  ub.next = ub;
  expect("union cyclic b", mod.isUnion(ub), true);
  const ua: any = { next: null, a: 4 };
  ua.next = ua;
  expect("union cyclic a", mod.isUnion(ua), true);
  const neither: any = { next: null, c: 5 };
  neither.next = neither;
  expect("union cyclic neither", mod.isUnion(neither), false);

  // 8. Recursion through dynamic record keys.
  const graph: any = { name: "root", nodes: {} };
  graph.nodes.self = graph;
  graph.nodes.leaf = { name: "leaf", nodes: {} };
  expect("graph is", mod.isGraph(graph), true);
  graph.nodes.bad = { name: 9, nodes: {} };
  expect("graph broken is", mod.isGraph(graph), false);

  // 9. A separately allocated subtree accepts or rejects according to its leaf.
  //    These rows do not repeat one shared subtree under multiple graph paths.
  const shared: any = { id: 7, parent: null };
  expect("dag is", mod.isNode({ id: 1, parent: shared }), true);
  const wrongShared: any = { id: "broken", parent: null };
  const dagReport: any = mod.validateNode({ id: 1, parent: wrongShared });
  expect("dag broken validate", dagReport.success, false);

  // 10. Recursive array branch inside a union.
  expect("forest number", mod.isForest(8), true);
  const forest: any = [{ id: 1, children: [] }];
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
  const cloned: any = mod.cloneNode(node);
  expect("clone new identity", cloned !== node, true);
  expect("clone cycle reproduced", cloned.parent === cloned, true);
  expect("clone value", cloned.id, 1);
  const assertCloned: any = mod.assertCloneNode(node);
  expect("assertClone cycle", assertCloned.parent === assertCloned, true);
  const clonedTree: any = mod.cloneTree(tree2());
  expect("clone tree cycle", clonedTree.children[0] === clonedTree, true);
  expect("clone tree leaf identity", clonedTree.children[1].id, 2);
  function tree2(): any {
    const value: any = { id: 1, children: [] };
    value.children.push(value, { id: 2, children: [] });
    return value;
  }

  // 13. Prune terminates on cycles and still erases superfluous properties.
  const prunable: any = { id: 1, parent: null, superfluous: "x" };
  prunable.parent = prunable;
  mod.pruneNode(prunable);
  expect("prune terminated and erased", "superfluous" in prunable, false);
  expect("prune kept cycle", prunable.parent === prunable, true);

  // 14. Notations reproduce cycles under the renamed keys.
  const renamed: any = { userId: 9, nextNode: null };
  renamed.nextNode = renamed;
  const snaked: any = mod.snakeRenamed(renamed);
  expect("snake renamed key", snaked.user_id, 9);
  expect("snake cycle reproduced", snaked.next_node === snaked, true);

  // 15. JSON stringify: cycles fail fast, DAG aliases keep serializing.
  const circularError: any = capture((): any => mod.stringifyNode(node));
  if (circularError === null) {
    throw new Error("stringify accepted a circular value");
  }
  if (String(circularError.expected).includes("non-circular") === false) {
    throw new Error(
      "stringify cycle error lost its expected text: " + circularError.expected,
    );
  }
  const sharedLeaf: any = { id: 7, parent: null };
  expect(
    "stringify DAG",
    typeof mod.stringifyNode({ id: 1, parent: sharedLeaf }),
    "string",
  );
  const assertStringifyError: any = capture((): any =>
    mod.assertStringifyNode(node),
  );
  if (assertStringifyError === null) {
    throw new Error("assertStringify accepted a circular value");
  }

  // 16. Protobuf encode: cycles fail fast, acyclic recursive values encode.
  const protoCycle: any = { id: 1, child: null };
  protoCycle.child = protoCycle;
  const protoError: any = capture((): any => mod.encodeNode(protoCycle));
  if (protoError === null) {
    throw new Error("protobuf encode accepted a circular value");
  }
  const protoOk: any = capture((): any =>
    mod.encodeNode({ id: 1, child: { id: 2, child: null } }),
  );
  if (protoOk !== null) {
    throw new Error(
      "protobuf encode rejected an acyclic recursive value: " + protoOk,
    );
  }
};
