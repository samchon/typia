import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.random is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (… plain length; … short length; … wide length; … floor length; … bounded length). The case documents its purpose as: Verifies typia.random resolves string length defaults against length tags.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: An unconstrained string draws from `5..10`, but the default minimum collapses toward an explicit `MaxLength` below it — a `MaxLength<3>` string is emitted at exactly length 3, never `0..3` — while a lone `MinLength` keeps the `+5` span. The arithmetic is easy to regress into off-by-one or default-leak bugs, so the draws are pinned at both ends of `Math.random`. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (… plain length; … short length; … wide length; … floor length; … bounded length) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_random_string_length is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
  TestEquality.equals(
    `${prefix} plain length`,
    value.plain.length,
    expected.plain,
  );
  TestEquality.equals(
    `${prefix} short length`,
    value.short.length,
    expected.short,
  );
  TestEquality.equals(
    `${prefix} wide length`,
    value.wide.length,
    expected.wide,
  );
  TestEquality.equals(
    `${prefix} floor length`,
    value.floor.length,
    expected.floor,
  );
  TestEquality.equals(
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
