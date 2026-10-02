import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification Across3000 draws each, nullable, optional and forced-array recursion record maximum depths, which must agree and equal6.
 * @evidence contracts/testing.md#independent-expectations Independent structural traversals and literal cutoff6 establish the verdict. Maxima over random early escapes remain statistical evidence; the test does not deterministically force every nullable/optional branch.
 * @evidence contracts/testing.md#distinguishing-cases Nullable null, optional absence and array emptiness are distinct finite escapes. The array generator forces growth, while3000 samples make missing nullable/optional cutoffs observable with high probability, not certainty.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_recursive_depth_bound in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
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

  TestEquality.equals(
    "every escape stops at the same depth",
    [nullable, optional],
    [array, array],
  );
  TestEquality.equals(
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
