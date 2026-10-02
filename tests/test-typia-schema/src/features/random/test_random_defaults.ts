import { TestValidator } from "@nestia/e2e";
import type { IRandomGenerator } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";
import { _randomArray } from "typia/lib/internal/_randomArray";
import { _randomInteger } from "typia/lib/internal/_randomInteger";
import { _randomNumber } from "typia/lib/internal/_randomNumber";
import { _randomPick } from "typia/lib/internal/_randomPick";
import { _randomString } from "typia/lib/internal/_randomString";

/**
 * Verifies typia.random uses fixture-oriented defaults for strings and arrays.
 *
 * Unconstrained strings and arrays are valid when empty, but random data is
 * most useful as a concrete fixture. Explicit zero-length constraints must
 * still win, and recursive arrays need a context flag so custom generators can
 * keep graph termination under control.
 *
 * 1. Generate unconstrained strings and arrays at deterministic min/max draws.
 * 2. Generate MaxLength<0> and MaxItems<0> controls and require empty values.
 * 3. Generate a recursive tree with a custom array generator and inspect the
 *    recursive array property passed by the transformer.
 * 4. Generate recursive trees with deterministic default draws and require the
 *    recursive array default range.
 * 5. Generate a non-recursive MinItems<1> array and require the constraint to
 *    remain accepted and forwarded to the custom array generator.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct/factory default strings and arrays assert lengths5/10 and1/6 plus explicit empty tags; custom generator observations check recursive flags, minItems forwarding and recursive widths0/2.
 * @evidence contracts/testing.md#independent-expectations Handwritten default-window and empty-container literals establish endpoint expectations. Supported custom array callbacks inspect supplied recursion/minItems metadata directly.
 * @evidence contracts/testing.md#distinguishing-cases Ordinary and recursive arrays, explicit zero bounds, direct/factory defaults and a nonrecursive minimum distinguish fallback metadata. Endpoint draws use real built-in algorithms with a local deterministic source through supported callbacks.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_defaults in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its sample state and supported IRG callbacks calling the real built-in algorithms with a local source. withRandom restores that local sample in finally; factories reuse only their own callback closure. No foreign method or global is replaced.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_random_defaults = (): void => {
  const { generator, withRandom } = makeRandom();
  const minimum: IRandomDefaults = withRandom(0, () =>
    typia.random<IRandomDefaults>(generator),
  );
  assertDefaults("random minimum", minimum, {
    array: 1,
    string: 5,
  });

  const maximum: IRandomDefaults = withRandom(1 - Number.EPSILON, () =>
    typia.random<IRandomDefaults>(generator),
  );
  assertDefaults("random maximum", maximum, {
    array: 6,
    string: 10,
  });

  const createDefaults = typia.createRandom<IRandomDefaults>(generator);
  const createdMinimum: IRandomDefaults = withRandom(0, () => createDefaults());
  assertDefaults("createRandom minimum", createdMinimum, {
    array: 1,
    string: 5,
  });

  const createdMaximum: IRandomDefaults = withRandom(1 - Number.EPSILON, () =>
    createDefaults(),
  );
  assertDefaults("createRandom maximum", createdMaximum, {
    array: 6,
    string: 10,
  });

  const recursiveFlags: Array<boolean | undefined> = [];
  const tree: IRecursiveTree = typia.random<IRecursiveTree>({
    string: () => "value",
    array: (schema) => {
      recursiveFlags.push(schema.recursive);
      const count: number = schema.recursive === true ? 0 : 1;
      return new Array(count)
        .fill(null)
        .map((_, index) => schema.element(index, count));
    },
  });

  TestEquality.equals("recursive children length", tree.children.length, 0);
  TestEquality.equals("plain labels length", tree.labels.length, 1);
  TestValidator.predicate("recursive property", () =>
    recursiveFlags.some((recursive) => recursive === true),
  );
  TestValidator.predicate("plain array property", () =>
    recursiveFlags.some((recursive) => recursive !== true),
  );

  let minItems: number | undefined;
  const constrained: INonRecursiveMinItems =
    typia.random<INonRecursiveMinItems>({
      string: () => "label",
      array: (schema) => {
        minItems = schema.minItems;
        const count: number = schema.minItems ?? 0;
        return new Array(count)
          .fill(null)
          .map((_, index) => schema.element(index, count));
      },
    });
  TestEquality.equals("non-recursive minItems schema", minItems, 1);
  TestEquality.equals("non-recursive minItems output", constrained.items, [
    "label",
  ]);

  const shallowTree: IRecursiveTree = withRandom(0, () =>
    typia.random<IRecursiveTree>(generator),
  );
  TestEquality.equals(
    "default recursive array minimum",
    shallowTree.children.length,
    0,
  );

  const wideTree: IRecursiveTree = withRandom(1 - Number.EPSILON, () =>
    typia.random<IRecursiveTree>(generator),
  );
  TestValidator.predicate("default recursive array maximum", () =>
    visit(wideTree, (node) => node.children.length <= 2),
  );

  const createTree = typia.createRandom<IRecursiveTree>(generator);
  const createdWideTree: IRecursiveTree = withRandom(1 - Number.EPSILON, () =>
    createTree(),
  );
  TestValidator.predicate("createRandom default recursive array maximum", () =>
    visit(createdWideTree, (node) => node.children.length <= 2),
  );
};

interface IRandomDefaults {
  name: string;
  aliases: string[];
  emptyText: string & tags.MaxLength<0>;
  emptyItems: string[] & tags.MaxItems<0>;
}

interface IRecursiveTree {
  value: string;
  children: IRecursiveTree[];
  labels: string[];
}

interface INonRecursiveMinItems {
  items: string[] & tags.MinItems<1>;
}

const assertDefaults = (
  prefix: string,
  value: IRandomDefaults,
  expected: {
    array: number;
    string: number;
  },
): void => {
  TestEquality.equals(
    `${prefix} default string length`,
    value.name.length,
    expected.string,
  );
  TestEquality.equals(
    `${prefix} default array length`,
    value.aliases.length,
    expected.array,
  );
  TestEquality.equals(`${prefix} explicit empty string`, value.emptyText, "");
  TestEquality.equals(
    `${prefix} explicit empty array`,
    value.emptyItems.length,
    0,
  );
};

const visit = (
  node: IRecursiveTree,
  predicate: (node: IRecursiveTree) => boolean,
): boolean =>
  predicate(node) && node.children.every((child) => visit(child, predicate));

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
