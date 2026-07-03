import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies recursive arrays whose element is a union pick variants per level.
 *
 * A recursive array alias whose element is `Self | string` stores its element
 * variants as a `oneOf` on the component schema, so the random programmer has
 * to expand that `oneOf` into one candidate per variant and let the depth guard
 * cap the self-referential branch. A regression in the expansion would either
 * drop a variant or recurse without termination.
 *
 * 1. Draw the union array at the minimum of `Math.random` and require `[]`.
 * 2. Draw it at the maximum, where every level selects the recursive variant.
 * 3. Require that maximum tree to be all arrays of width 2, bottoming out at the
 *    depth cap, through both `typia.random` and `typia.createRandom`.
 */
export const test_random_recursive_union = (): void => {
  TestValidator.equals(
    "recursive union minimum",
    withRandom(0, () => typia.random<IRecursiveUnion>()),
    [],
  );

  assertMaximum(
    "random",
    withRandom(1 - Number.EPSILON, () => typia.random<IRecursiveUnion>()),
  );

  const create = typia.createRandom<IRecursiveUnion>();
  assertMaximum(
    "createRandom",
    withRandom(1 - Number.EPSILON, () => create()),
  );
};

type IRecursiveUnion = (IRecursiveUnion | string)[];

const assertMaximum = (prefix: string, value: IRecursiveUnion): void => {
  TestValidator.predicate(`${prefix} union maximum all arrays`, () =>
    everyNodeIsArray(value),
  );
  TestValidator.equals(`${prefix} union maximum width`, uniformWidth(value), 2);
  TestValidator.equals(`${prefix} union maximum depth`, arrayDepth(value), 6);
};

const everyNodeIsArray = (value: unknown): boolean =>
  Array.isArray(value) && value.every((child) => everyNodeIsArray(child));

const uniformWidth = (value: IRecursiveUnion): number => {
  const widths = new Set<number>();
  const walk = (node: IRecursiveUnion): void => {
    if (node.length === 0) {
      return;
    }
    widths.add(node.length);
    for (const child of node) {
      walk(child as IRecursiveUnion);
    }
  };
  walk(value);
  return widths.size === 1 ? [...widths][0]! : -1;
};

const arrayDepth = (value: IRecursiveUnion): number =>
  value.length === 0
    ? 0
    : 1 +
      Math.max(...value.map((child) => arrayDepth(child as IRecursiveUnion)));

const withRandom = <T>(value: number, closure: () => T): T => {
  const old: () => number = Math.random;
  Math.random = () => value;
  try {
    return closure();
  } finally {
    Math.random = old;
  }
};
