import { TestValidator } from "@nestia/e2e";
import typia, { IRandomGenerator } from "typia";

/**
 * Verifies every recursion escape stops at the same depth, over many draws.
 *
 * `test_random_recursive_terminates` draws each shape once and asks whether it
 * is finite. That was a weak oracle for the nullable and optional escapes,
 * because before they were bounded their depth was geometric: each level was a
 * coin flip, so a single draw exceeded the bound a fraction of a percent of the
 * time and the suite went red at random rather than reporting the defect. A
 * probe that a broken build passes 99 times in 100 cannot hold a bound.
 *
 * Many draws turn the same question into an answerable one. The bound itself is
 * not a measurement of the implementation: one constant decides when a
 * recursive value stops descending, so all three escapes have to stop at the
 * same depth. An escape that stopped at its own depth would mean the constant
 * had been copied, which is the failure this pins.
 *
 * 1. Draw each escape many times, forcing every container to hold one element so
 *    depth keeps climbing rather than ending by luck.
 * 2. Require the deepest chain of all three to be identical.
 * 3. Require that depth to sit at the cutoff, so a raised or lowered constant is a
 *    visible change rather than a silent one.
 */
export const test_random_recursive_depth_bound = (): void => {
  const grow: Partial<IRandomGenerator> = {
    array: (schema) =>
      new Array(1).fill(null).map((_, i) => schema.element(i, 1)),
  };

  // Geometric decay makes one draw uninformative: at a coin flip per level, an
  // unbounded chain passes a depth-6 check about 99 % of the time. Over this
  // many draws it passes essentially never.
  const COUNT = 3000;
  let nullable: number = 0;
  let optional: number = 0;
  let array: number = 0;
  for (let i = 0; i < COUNT; ++i) {
    nullable = Math.max(nullable, nullableDepth(typia.random<INullable>(grow)));
    optional = Math.max(optional, optionalDepth(typia.random<IOptional>(grow)));
    array = Math.max(array, arrayDepth(typia.random<IArray>(grow)));
  }

  TestValidator.equals(
    "every escape stops at the same depth",
    [nullable, optional],
    [array, array],
  );
  TestValidator.equals(
    "the shared depth is the cutoff",
    [nullable, optional, array],
    [6, 6, 6],
  );
};

interface INullable {
  value: string;
  self: INullable | null;
}

interface IOptional {
  value: string;
  self?: IOptional;
}

interface IArray {
  value: string;
  self: IArray[];
}

const nullableDepth = (node: INullable): number =>
  node.self === null ? 0 : 1 + nullableDepth(node.self);

const optionalDepth = (node: IOptional): number =>
  node.self === undefined ? 0 : 1 + optionalDepth(node.self);

const arrayDepth = (node: IArray): number =>
  node.self.length === 0 ? 0 : 1 + arrayDepth(node.self[0]!);
