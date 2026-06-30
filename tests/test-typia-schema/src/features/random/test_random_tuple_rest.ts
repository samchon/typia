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
