import typia from "typia";

interface Point {
  type: "point";
  x: number;
  y: number;
}

const shallowZero = (input: unknown): boolean => typia.shallow<Point, 0>(input);

interface Circle {
  type: "circle";
  radius: number;
}
interface Square {
  type: "square";
  side: number;
}
type Shape = Circle | Square;

const shallowSquare = (input: unknown): boolean => typia.shallow<Square>(input);

const discriminate = (input: Shape): string =>
  typia.shallow<Circle>(input) ? "circle" : "square";

/**
 * Verifies shallow depth zero checks only the outer object while default depth
 * checks its discriminant.
 *
 * Depth limits stop nested inspection, but retain the checks above that limit.
 * Both unchecked deep leaves and rejected outer fields are needed to
 * distinguish bounded inspection from a full validator or a predicate accepting
 * everything.
 *
 * 1. Transform the original typed factory or direct call sites in this suite.
 * 2. Execute the preserved inputs and assert their runtime results.
 *
 * @evidence contracts/testing.md#behavioral-verification shallow depth zero checks only the outer object while default depth checks its discriminant; the body executes real transformed callbacks and retains the original runner assertions.
 * @evidence contracts/testing.md#independent-expectations The declared depth argument determines which fields are inspected. Handwritten boolean expectations distinguish the outer checks from deliberately unchecked nested leaves; emitted output does not supply the expected verdict.
 * @evidence contracts/testing.md#distinguishing-cases Matching and wrong-inner objects pass at depth zero; null and primitive reject. Matching Square, wrong Circle and string distinguish default depth; both direct discrimination branches retain their result.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_shallow_depth_limit in the automated composite population; private fixture declarations and callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary The real native transform must replace direct or factory shallow calls with executable bounded checks. Textual helper presence cannot prove that the generated predicate inspects precisely the requested levels.
 * @evidence contracts/e2e.md#shared-execution These call sites share the automated suite project and its single worker, with no per-case compiler project, CLI invocation or subprocess.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh seed graphs; the suite owns and closes the shared worker after success or failure. No foreign API is replaced.
 * @evidence contracts/e2e.md#preserved-coverage Original shallow_depth_limit_transform_test.go runtime inputs and assertions execute here unchanged in meaning.
 */
export const test_native_shallow_depth_limit = (): void => {
  const zeroCases: Array<[string, unknown, boolean]> = [
    ["matching object", { type: "point", x: 1, y: 2 }, true],
    [
      "object with wrong inner fields still passes at depth 0",
      { anything: true },
      true,
    ],
    ["null is rejected", null, false],
    ["primitive is rejected", 42, false],
  ];
  for (const [name, input, expected] of zeroCases) {
    const actual = shallowZero(input);
    if (actual !== expected) {
      throw new Error(
        "zero/" + name + ": expected " + expected + " but got " + actual,
      );
    }
  }

  const surfaceCases: Array<[string, unknown, boolean]> = [
    ["matching square", { type: "square", side: 3 }, true],
    ["wrong discriminant", { type: "circle", radius: 3 }, false],
    ["non object", "square", false],
  ];
  for (const [name, input, expected] of surfaceCases) {
    const actual = shallowSquare(input);
    if (actual !== expected) {
      throw new Error(
        "surface/" + name + ": expected " + expected + " but got " + actual,
      );
    }
  }

  if (discriminate({ type: "circle", radius: 1 }) !== "circle") {
    throw new Error("discriminate: circle branch failed");
  }
  if (discriminate({ type: "square", side: 1 }) !== "square") {
    throw new Error("discriminate: square branch failed");
  }
};
