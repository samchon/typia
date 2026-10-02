import { TestValidator } from "@nestia/e2e";
import type { IRandomGenerator } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";
import { _randomArray } from "typia/lib/internal/_randomArray";
import { _randomInteger } from "typia/lib/internal/_randomInteger";
import { _randomNumber } from "typia/lib/internal/_randomNumber";
import { _randomPick } from "typia/lib/internal/_randomPick";
import { _randomString } from "typia/lib/internal/_randomString";

/**
 * Verifies recursive arrays whose element is a union pick variants per level.
 *
 * A recursive array alias whose element is `Self | string` stores its element
 * variants as a `oneOf` on the component schema, so the random programmer has
 * to expand that `oneOf` into one candidate per variant and let the depth guard
 * cap the self-referential branch. A regression in the expansion would either
 * drop a variant or recurse without termination.
 *
 * 1. Draw the union array at the minimum of the local RNG source and require `[]`.
 * 2. Draw it at the maximum, where every level selects the recursive variant.
 * 3. Require that maximum tree to be all arrays of width 2, bottoming out at the
 *    depth cap, through both `typia.random` and `typia.createRandom`.
 *
 * @evidence contracts/testing.md#behavioral-verification Minimum draw must be empty; maximum direct/factory recursive unions must consist solely of arrays, have uniform width2 and depth6. A stateful pick method updates its own generator receiver in both forms, distinguishing a detached callback.
 * @evidence contracts/testing.md#independent-expectations Handwritten structural traversals independently check branch selection, recursive width and depth, rather than asking a generated validator to bless its generator.
 * @evidence contracts/testing.md#distinguishing-cases Empty minimum, recursive-only maximum and direct/factory parity distinguish union choice and cutoff. Supported callbacks run the real built-in algorithms under a local deterministic source, including the union picker.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_recursive_union in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its sample state and supported IRG callbacks calling the real built-in algorithms with a local source. withRandom restores that local sample in finally; factories reuse only their own callback closure. No foreign method or global is replaced.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_random_recursive_union = (): void => {
  const { generator, withRandom } = makeRandom();
  TestEquality.equals(
    "recursive union minimum",
    withRandom(0, () => typia.random<IRecursiveUnion>(generator)),
    [],
  );

  assertMaximum(
    "random",
    withRandom(1 - Number.EPSILON, () =>
      typia.random<IRecursiveUnion>(generator),
    ),
  );

  TestValidator.predicate(
    "random pick callback receiver",
    () => generator.pickCalls > 0,
  );
  const beforeFactory: number = generator.pickCalls;
  const create = typia.createRandom<IRecursiveUnion>(generator);
  assertMaximum(
    "createRandom",
    withRandom(1 - Number.EPSILON, () => create()),
  );
  TestValidator.predicate(
    "createRandom pick callback receiver",
    () => generator.pickCalls > beforeFactory,
  );
};

type IRecursiveUnion = (IRecursiveUnion | string)[];

const assertMaximum = (prefix: string, value: IRecursiveUnion): void => {
  TestValidator.predicate(`${prefix} union maximum all arrays`, () =>
    everyNodeIsArray(value),
  );
  TestEquality.equals(`${prefix} union maximum width`, uniformWidth(value), 2);
  TestEquality.equals(`${prefix} union maximum depth`, arrayDepth(value), 6);
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

const makeRandom = () => {
  let sample: number = 0;
  const source = (): number => sample;
  const generator: Partial<IRandomGenerator> & { pickCalls: number } = {
    pickCalls: 0,
    array: (schema) => _randomArray(schema, source),
    string: (schema) => _randomString(schema, source),
    number: (schema) => _randomNumber(schema, source),
    integer: (schema) => _randomInteger(schema, source),
    pick<T>(
      this: Partial<IRandomGenerator> & { pickCalls: number },
      array: T[],
    ): T {
      this.pickCalls += 1;
      return _randomPick(array, source);
    },
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
