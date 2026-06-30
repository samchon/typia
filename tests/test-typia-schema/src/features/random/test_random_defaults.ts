import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

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
 */
export const test_random_defaults = (): void => {
  const minimum: IRandomDefaults = withRandom(0, () =>
    typia.random<IRandomDefaults>(),
  );
  assertDefaults("random minimum", minimum, {
    array: 1,
    string: 5,
  });

  const maximum: IRandomDefaults = withRandom(1 - Number.EPSILON, () =>
    typia.random<IRandomDefaults>(),
  );
  assertDefaults("random maximum", maximum, {
    array: 6,
    string: 10,
  });

  const createDefaults = typia.createRandom<IRandomDefaults>();
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

  TestValidator.equals("recursive children length", tree.children.length, 0);
  TestValidator.equals("plain labels length", tree.labels.length, 1);
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
  TestValidator.equals("non-recursive minItems schema", minItems, 1);
  TestValidator.equals("non-recursive minItems output", constrained.items, [
    "label",
  ]);

  const shallowTree: IRecursiveTree = withRandom(0, () =>
    typia.random<IRecursiveTree>(),
  );
  TestValidator.equals(
    "default recursive array minimum",
    shallowTree.children.length,
    0,
  );

  const wideTree: IRecursiveTree = withRandom(1 - Number.EPSILON, () =>
    typia.random<IRecursiveTree>(),
  );
  TestValidator.predicate("default recursive array maximum", () =>
    visit(wideTree, (node) => node.children.length <= 2),
  );

  const createTree = typia.createRandom<IRecursiveTree>();
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
  TestValidator.equals(
    `${prefix} default string length`,
    value.name.length,
    expected.string,
  );
  TestValidator.equals(
    `${prefix} default array length`,
    value.aliases.length,
    expected.array,
  );
  TestValidator.equals(`${prefix} explicit empty string`, value.emptyText, "");
  TestValidator.equals(
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

const withRandom = <T>(value: number, closure: () => T): T => {
  const old: () => number = Math.random;
  Math.random = () => value;
  try {
    return closure();
  } finally {
    Math.random = old;
  }
};
