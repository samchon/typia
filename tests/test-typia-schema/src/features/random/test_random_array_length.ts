import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.random is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (… plain length; … capped length; … wide length; … floor length; … bounded length). The case documents its purpose as: Verifies typia.random resolves array length defaults against item-count tags.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: An unconstrained non-recursive array draws from `1..6`. Unlike strings, whose default minimum is 5, the array minimum is 1, so a `MaxItems` above 1 only caps the maximum (`MaxItems<8>` stays `1..8`) while a `MaxItems` of 0 collapses the whole range. A lone `MinItems` keeps the `+5` span. The arithmetic mirrors `_randomString` and is just as easy to regress, so the draws are pinned at both ends of `Math.random`. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (… plain length; … capped length; … wide length; … floor length; … bounded length) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_random_array_length is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
  TestEquality.equals(
    `${prefix} plain length`,
    value.plain.length,
    expected.plain,
  );
  TestEquality.equals(
    `${prefix} capped length`,
    value.capped.length,
    expected.capped,
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
