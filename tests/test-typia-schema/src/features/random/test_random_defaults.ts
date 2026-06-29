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
 * 1. Generate unconstrained strings and arrays and require positive lengths.
 * 2. Generate MaxLength<0> and MaxItems<0> controls and require empty values.
 * 3. Generate a recursive tree with a custom array generator and inspect the
 *    recursive array property passed by the transformer.
 * 4. Generate recursive trees with the default generator and require every
 *    recursive child array to stay within the default recursive range.
 * 5. Generate a non-recursive MinItems<1> array and require the constraint to
 *    remain accepted and forwarded to the custom array generator.
 */
export const test_random_defaults = (): void => {
  for (let i = 0; i < 20; ++i) {
    const value: IRandomDefaults = typia.random<IRandomDefaults>();

    TestValidator.predicate(
      "default string length",
      () => 5 <= value.name.length && value.name.length <= 10,
    );
    TestValidator.predicate(
      "default array length",
      () => 1 <= value.aliases.length && value.aliases.length <= 6,
    );
    TestValidator.equals("explicit empty string", value.emptyText, "");
    TestValidator.equals("explicit empty array", value.emptyItems.length, 0);
  }

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

  for (let i = 0; i < 20; ++i) {
    const generated: IRecursiveTree = typia.random<IRecursiveTree>();
    TestValidator.predicate("default recursive array length", () =>
      visit(generated, (node) => node.children.length <= 2),
    );
  }
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

const visit = (
  node: IRecursiveTree,
  predicate: (node: IRecursiveTree) => boolean,
): boolean =>
  predicate(node) && node.children.every((child) => visit(child, predicate));
