import type { IRandomGenerator } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";
import { _randomArray } from "typia/lib/internal/_randomArray";
import { _randomInteger } from "typia/lib/internal/_randomInteger";
import { _randomNumber } from "typia/lib/internal/_randomNumber";
import { _randomPick } from "typia/lib/internal/_randomPick";
import { _randomString } from "typia/lib/internal/_randomString";

/**
 * Verifies typia.random resolves array length defaults against item-count tags.
 *
 * An unconstrained non-recursive array draws from `1..6`. Unlike strings, whose
 * default minimum is 5, the array minimum is 1, so a `MaxItems` above 1 only
 * caps the maximum (`MaxItems<8>` stays `1..8`) while a `MaxItems` of 0
 * collapses the whole range. A lone `MinItems` keeps the `+5` span. The
 * arithmetic mirrors `_randomString` and is just as easy to regress, so the
 * draws are pinned at both ends of the local RNG source.
 *
 * 1. Draw each tagged array at the minimum and maximum of the local RNG source.
 * 2. Require the unconstrained array to span `1..6`.
 * 3. Require `MaxItems` to cap only the maximum, keeping the minimum at 1.
 * 4. Require `MinItems` alone and a `MinItems`/`MaxItems` pair to honor both.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct and factory random draw minimum and maximum arrays for plain, capped, wide, floor and bounded properties, asserting exact lengths1/6,1/3,1/8,3/8 and2/4.
 * @evidence contracts/testing.md#independent-expectations Literal tag bounds and documented default windows establish endpoint lengths; forcing both RNG endpoints avoids inferring a maximum from a random sample.
 * @evidence contracts/testing.md#distinguishing-cases Both direct/factory endpoints and five bound combinations remain. Supported callbacks run the real built-in array, string, number and integer algorithms under a local deterministic source.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_array_length in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its sample state and supported IRG callbacks calling the real built-in algorithms with a local source. withRandom restores that local sample in finally; factories reuse only their own callback closure. No foreign method or global is replaced.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_random_array_length = (): void => {
  const { generator, withRandom } = makeRandom();
  const minimum: ILengths = withRandom(0, () =>
    typia.random<ILengths>(generator),
  );
  assertLengths("random minimum", minimum, {
    plain: 1,
    capped: 1,
    wide: 1,
    floor: 3,
    bounded: 2,
  });

  const maximum: ILengths = withRandom(1 - Number.EPSILON, () =>
    typia.random<ILengths>(generator),
  );
  assertLengths("random maximum", maximum, {
    plain: 6,
    capped: 3,
    wide: 8,
    floor: 8,
    bounded: 4,
  });

  const create = typia.createRandom<ILengths>(generator);
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

const makeRandom = () => {
  let sample: number = 0;
  const source = (): number => sample;
  const generator: Partial<IRandomGenerator> = {
    array: (schema) => _randomArray(schema, source),
    string: (schema) => _randomString(schema, source),
    number: (schema) => _randomNumber(schema, source),
    integer: (schema) => _randomInteger(schema, source),
    pick: <T>(array: T[]): T => _randomPick(array, source),
  };
  const withRandom = <T>(value: number, closure: () => T): T => {
    const previous: number = sample;
    sample = value;
    try {
      return closure();
    } finally {
      sample = previous;
    }
  };
  return { generator, withRandom };
};
