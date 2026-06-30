import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

/**
 * Verifies typia.random resolves string length defaults against length tags.
 *
 * An unconstrained string draws from `5..10`, but the default minimum collapses
 * toward an explicit `MaxLength` below it — a `MaxLength<3>` string is emitted
 * at exactly length 3, never `0..3` — while a lone `MinLength` keeps the `+5`
 * span. The arithmetic is easy to regress into off-by-one or default-leak bugs,
 * so the draws are pinned at both ends of `Math.random`.
 *
 * 1. Draw each tagged string at the minimum and maximum of `Math.random`.
 * 2. Require the unconstrained string to span `5..10`.
 * 3. Require `MaxLength` below the default to clamp both ends to the cap.
 * 4. Require `MinLength` alone and a `MinLength`/`MaxLength` pair to honor both.
 */
export const test_random_string_length = (): void => {
  const minimum: ILengths = withRandom(0, () => typia.random<ILengths>());
  assertLengths("random minimum", minimum, {
    plain: 5,
    short: 3,
    wide: 5,
    floor: 7,
    bounded: 2,
  });

  const maximum: ILengths = withRandom(1 - Number.EPSILON, () =>
    typia.random<ILengths>(),
  );
  assertLengths("random maximum", maximum, {
    plain: 10,
    short: 3,
    wide: 8,
    floor: 12,
    bounded: 4,
  });

  const create = typia.createRandom<ILengths>();
  const createdMinimum: ILengths = withRandom(0, () => create());
  assertLengths("createRandom minimum", createdMinimum, {
    plain: 5,
    short: 3,
    wide: 5,
    floor: 7,
    bounded: 2,
  });

  const createdMaximum: ILengths = withRandom(1 - Number.EPSILON, () =>
    create(),
  );
  assertLengths("createRandom maximum", createdMaximum, {
    plain: 10,
    short: 3,
    wide: 8,
    floor: 12,
    bounded: 4,
  });
};

interface ILengths {
  plain: string;
  short: string & tags.MaxLength<3>;
  wide: string & tags.MaxLength<8>;
  floor: string & tags.MinLength<7>;
  bounded: string & tags.MinLength<2> & tags.MaxLength<4>;
}

const assertLengths = (
  prefix: string,
  value: ILengths,
  expected: {
    plain: number;
    short: number;
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
    `${prefix} short length`,
    value.short.length,
    expected.short,
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
