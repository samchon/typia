import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

/**
 * Verifies typia.random resolves array length defaults against item-count tags.
 *
 * An unconstrained non-recursive array draws from `1..6`. Unlike strings, whose
 * default minimum is 5, the array minimum is 1, so a `MaxItems` above 1 only
 * caps the maximum (`MaxItems<8>` stays `1..8`) while a `MaxItems` of 0
 * collapses the whole range. A lone `MinItems` keeps the `+5` span. The
 * arithmetic mirrors `_randomString` and is just as easy to regress, so the
 * draws are pinned at both ends of `Math.random`.
 *
 * 1. Draw each tagged array at the minimum and maximum of `Math.random`.
 * 2. Require the unconstrained array to span `1..6`.
 * 3. Require `MaxItems` to cap only the maximum, keeping the minimum at 1.
 * 4. Require `MinItems` alone and a `MinItems`/`MaxItems` pair to honor both.
 */
export const test_random_array_length = (): void => {
  const minimum: ILengths = withRandom(0, () => typia.random<ILengths>());
  assertLengths("random minimum", minimum, {
    plain: 1,
    capped: 1,
    wide: 1,
    floor: 3,
    bounded: 2,
  });

  const maximum: ILengths = withRandom(1 - Number.EPSILON, () =>
    typia.random<ILengths>(),
  );
  assertLengths("random maximum", maximum, {
    plain: 6,
    capped: 3,
    wide: 8,
    floor: 8,
    bounded: 4,
  });

  const create = typia.createRandom<ILengths>();
  const createdMinimum: ILengths = withRandom(0, () => create());
  assertLengths("createRandom minimum", createdMinimum, {
    plain: 1,
    capped: 1,
    wide: 1,
    floor: 3,
    bounded: 2,
  });

  const createdMaximum: ILengths = withRandom(1 - Number.EPSILON, () =>
    create(),
  );
  assertLengths("createRandom maximum", createdMaximum, {
    plain: 6,
    capped: 3,
    wide: 8,
    floor: 8,
    bounded: 4,
  });
};

interface ILengths {
  plain: number[];
  capped: number[] & tags.MaxItems<3>;
  wide: number[] & tags.MaxItems<8>;
  floor: number[] & tags.MinItems<3>;
  bounded: number[] & tags.MinItems<2> & tags.MaxItems<4>;
}

const assertLengths = (
  prefix: string,
  value: ILengths,
  expected: {
    plain: number;
    capped: number;
    wide: number;
    floor: number;
    bounded: number;
  },
): void => {
  TestValidator.equals(
    `${prefix} plain length`,
    value.plain.length,
    expected.plain,
  );
  TestValidator.equals(
    `${prefix} capped length`,
    value.capped.length,
    expected.capped,
  );
  TestValidator.equals(
    `${prefix} wide length`,
    value.wide.length,
    expected.wide,
  );
  TestValidator.equals(
    `${prefix} floor length`,
    value.floor.length,
    expected.floor,
  );
  TestValidator.equals(
    `${prefix} bounded length`,
    value.bounded.length,
    expected.bounded,
  );
};

const withRandom = <T>(value: number, closure: () => T): T => {
  const old: () => number = Math.random;
  Math.random = () => value;
  try {
    return closure();
  } finally {
    Math.random = old;
  }
};
