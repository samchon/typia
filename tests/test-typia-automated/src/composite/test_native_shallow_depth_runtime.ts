import typia from "typia";

interface Outer {
  kind: "outer";
  inner: {
    value: string;
  };
}

interface Tree {
  value: string;
  children: Tree[];
}

const outerDepth1 = (input: unknown): boolean => typia.shallow<Outer, 1>(input);

const treeDepth2 = (input: unknown): boolean => typia.shallow<Tree, 2>(input);

/**
 * Verifies direct shallow respects nested depth boundaries.
 *
 * Depth limits stop nested inspection, but retain the checks above that limit.
 * Both unchecked deep leaves and rejected outer fields are needed to
 * distinguish bounded inspection from a full validator or a predicate accepting
 * everything.
 *
 * 1. Transform the original typed factory or direct call sites in this suite.
 * 2. Execute the preserved inputs and assert their runtime results.
 *
 * @evidence contracts/testing.md#behavioral-verification direct shallow respects nested depth boundaries; the body executes real transformed callbacks and retains the original runner assertions.
 * @evidence contracts/testing.md#independent-expectations The declared depth argument determines which fields are inspected. Handwritten boolean expectations distinguish the outer checks from deliberately unchecked nested leaves; emitted output does not supply the expected verdict.
 * @evidence contracts/testing.md#distinguishing-cases At depth one the outer discriminant and inner presence are checked but wrong deep leaf is accepted; depth two accepts empty and deep recursive trees, rejects wrong root and primitive, and terminates.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_shallow_depth_runtime in the automated composite population; private fixture declarations and callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary The real native transform must replace direct or factory shallow calls with executable bounded checks. Textual helper presence cannot prove that the generated predicate inspects precisely the requested levels.
 * @evidence contracts/e2e.md#shared-execution These call sites share the automated suite project and its single worker, with no per-case compiler project, CLI invocation or subprocess.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh seed graphs; the suite owns and closes the shared worker after success or failure. No foreign API is replaced.
 * @evidence contracts/e2e.md#preserved-coverage Original shallow_depth_runtime_test.go runtime inputs and assertions execute here unchanged in meaning.
 */
export const test_native_shallow_depth_runtime = (): void => {
  const outerCases: Array<[string, unknown, boolean]> = [
    ["matching outer", { kind: "outer", inner: { value: "x" } }, true],
    [
      "wrong deep leaf accepted at depth 1",
      { kind: "outer", inner: { value: 123 } },
      true,
    ],
    [
      "wrong discriminant rejected",
      { kind: "nope", inner: { value: "x" } },
      false,
    ],
    ["missing inner rejected", { kind: "outer" }, false],
    ["non object rejected", 7, false],
  ];
  for (const [name, input, expected] of outerCases) {
    const actual = outerDepth1(input);
    if (actual !== expected) {
      throw new Error(
        "outer/" + name + ": expected " + expected + " but got " + actual,
      );
    }
  }

  const deepTree = {
    value: "root",
    children: [{ value: "a", children: [{ value: "b", children: [] }] }],
  };
  const shallowWrong = { value: 1, children: [] };
  const treeCases: Array<[string, unknown, boolean]> = [
    ["valid shallow tree", { value: "x", children: [] }, true],
    ["valid deep tree terminates", deepTree, true],
    ["wrong root value rejected", shallowWrong, false],
    ["non object rejected", "tree", false],
  ];
  for (const [name, input, expected] of treeCases) {
    const actual = treeDepth2(input);
    if (actual !== expected) {
      throw new Error(
        "tree/" + name + ": expected " + expected + " but got " + actual,
      );
    }
  }
};
