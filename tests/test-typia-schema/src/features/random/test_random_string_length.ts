import type { IRandomGenerator } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";
import { _randomArray } from "typia/lib/internal/_randomArray";
import { _randomInteger } from "typia/lib/internal/_randomInteger";
import { _randomNumber } from "typia/lib/internal/_randomNumber";
import { _randomPick } from "typia/lib/internal/_randomPick";
import { _randomString } from "typia/lib/internal/_randomString";

/**
 * Verifies typia.random resolves string length defaults against length tags.
 *
 * An unconstrained string draws from `5..10`, but the default minimum collapses
 * toward an explicit `MaxLength` below it — a `MaxLength<3>` string is emitted
 * at exactly length 3, never `0..3` — while a lone `MinLength` keeps the `+5`
 * span. The arithmetic is easy to regress into off-by-one or default-leak bugs,
 * so the draws are pinned at both ends of the local RNG source.
 *
 * 1. Draw each tagged string at the minimum and maximum of the local RNG source.
 * 2. Require the unconstrained string to span `5..10`.
 * 3. Require `MaxLength` below the default to clamp both ends to the cap.
 * 4. Require `MinLength` alone and a `MinLength`/`MaxLength` pair to honor both.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct and factory random draws assert exact minimum/maximum lengths for untagged, short, wide, floor and bounded strings.
 * @evidence contracts/testing.md#independent-expectations Length tag values plus the default5..10 window establish the literal expected5/10,3/3,5/8,7/12 and2/4 endpoints independently of generated is.
 * @evidence contracts/testing.md#distinguishing-cases Five bound combinations at both endpoints remain in both public forms. Supported callbacks execute real built-in algorithms with a local deterministic source.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_string_length in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its sample state and supported IRG callbacks calling the real built-in algorithms with a local source. withRandom restores that local sample in finally; factories reuse only their own callback closure. No foreign method or global is replaced.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_random_string_length = (): void => {
  const { generator, withRandom } = makeRandom();
  const minimum: ILengths = withRandom(0, () =>
    typia.random<ILengths>(generator),
  );
  assertLengths("random minimum", minimum, {
    plain: 5,
    short: 3,
    wide: 5,
    floor: 7,
    bounded: 2,
  });

  const maximum: ILengths = withRandom(1 - Number.EPSILON, () =>
    typia.random<ILengths>(generator),
  );
  assertLengths("random maximum", maximum, {
    plain: 10,
    short: 3,
    wide: 8,
    floor: 12,
    bounded: 4,
  });

  const create = typia.createRandom<ILengths>(generator);
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
