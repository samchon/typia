import { TestValidator } from "@nestia/e2e";
import typia, { IRandomGenerator } from "typia";

/**
 * Verifies tuple rest elements spread a possibly-empty array.
 *
 * A `...X[]` rest must generate a real spread of zero-or-more `X`, not a single
 * value, and — when `X` is the recursive owner — that spread is the escape the
 * depth cutoff uses to stop: it empties once the depth limit is reached, so a
 * recursive rest element terminates instead of overflowing the stack.
 *
 * 1. Generate a non-recursive `[number, ...string[]]` and require a number head
 *    with every rest member a string.
 * 2. Force the recursive rest generator to keep emitting one element per level.
 * 3. Require the recursive value to be finite and to pass `typia.assert`.
 * 4. Generate a top-level rest tuple whose element is independently recursive,
 *    which has no surrounding `_depth`, and require it not to throw.
 *
 * @evidence contracts/testing.md#behavioral-verification Generates plain, recursive and independently recursive-element rest tuples, checks generated assertion postconditions, direct element types, recursive depth1..8 and top-level array representation.
 * @evidence contracts/testing.md#independent-expectations Runtime typeof checks and private restDepth supply independent partial shape/cutoff oracles. Generated assert remains correlated and the top-level Array.isArray check does not prove every recursive element field.
 * @evidence contracts/testing.md#distinguishing-cases Number-led string rest, string-led recursive tuple rest and top-level rest of recursive objects preserve their separate cases and binding-failure sensitivity.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_tuple_rest in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_random_tuple_rest = (): void => {
  const plain = typia.random<IPlainRest>();
  typia.assert<IPlainRest>(plain);
  TestValidator.predicate(
    "plain rest spreads strings after a number",
    () =>
      typeof plain[0] === "number" &&
      (plain as unknown[]).slice(1).every((value) => typeof value === "string"),
  );

  const grow: Partial<IRandomGenerator> = {
    array: (schema) =>
      new Array(1).fill(null).map((_, i) => schema.element(i, 1)),
  };
  const recursive = typia.random<IRecursiveRest>(grow);
  typia.assert<IRecursiveRest>(recursive);
  TestValidator.predicate(
    "recursive rest terminates at the cutoff",
    () => restDepth(recursive) >= 1 && restDepth(recursive) <= 8,
  );

  // The element recurses through its own helper, so the rest spread must not
  // reference the `_depth` cutoff that a top-level tuple has no binding for.
  const owned = typia.random<IOwnedRest>();
  typia.assert<IOwnedRest>(owned);
  TestValidator.predicate("top-level rest of recursive element", () =>
    Array.isArray(owned),
  );
};

interface IOwnedNode {
  value: string;
  children: IOwnedNode[];
}

type IPlainRest = [number, ...string[]];
type IRecursiveRest = [string, ...IRecursiveRest[]];
type IOwnedRest = [string, ...IOwnedNode[]];

const restDepth = (node: unknown): number =>
  Array.isArray(node) && node.length > 1 ? 1 + restDepth(node[1]) : 0;
