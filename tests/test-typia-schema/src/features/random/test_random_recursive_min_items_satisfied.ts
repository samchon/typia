import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

/**
 * Verifies satisfiable recursive MinItems arrays stay accepted.
 *
 * Positive `MinItems` is only impossible on a direct recursive array alias or
 * on the edge that must emit `[]` at the depth cutoff. Other arrays can keep
 * their minimum length when a nested recursive edge terminates the graph.
 *
 * 1. Force recursive child arrays to grow until the depth guard stops them.
 * 2. Require non-recursive `MinItems` siblings to remain non-empty.
 * 3. Check `typia.random` and `typia.createRandom` on a recursive root array.
 * 4. Keep a separate recursive-object array satisfiable inside a recursive owner.
 * 5. Repeat the separate-owner assertion through `typia.createRandom`.
 */
export const test_random_recursive_min_items_satisfied = (): void => {
  const deepTree: IRecursiveTree = typia.random<IRecursiveTree>({
    string: () => "value",
    array: (schema) => {
      const count: number =
        schema.recursive === true ? 1 : (schema.minItems ?? 1);
      return new Array(count)
        .fill(null)
        .map((_, index) => schema.element(index, count));
    },
  });
  TestValidator.predicate("recursive sibling minItems", () =>
    visit(deepTree, (node) => node.labels.length >= 1),
  );

  const forest: IRecursiveForest = typia.random<IRecursiveForest>({
    string: () => "value",
    array: (schema) => {
      const count: number =
        schema.minItems ?? (schema.recursive === true ? 1 : 0);
      return new Array(count)
        .fill(null)
        .map((_, index) => schema.element(index, count));
    },
  });
  TestValidator.equals("recursive root minItems", forest.roots.length, 1);

  const createForest = typia.createRandom<IRecursiveForest>({
    string: () => "value",
    array: (schema) => {
      const count: number =
        schema.minItems ?? (schema.recursive === true ? 1 : 0);
      return new Array(count)
        .fill(null)
        .map((_, index) => schema.element(index, count));
    },
  });
  TestValidator.equals(
    "createRandom recursive root minItems",
    createForest().roots.length,
    1,
  );

  const wrapper: IRecursiveWrapper = typia.random<IRecursiveWrapper>({
    boolean: () => false,
    array: (schema) => {
      const count: number =
        schema.minItems ?? (schema.recursive === true ? 0 : 1);
      return new Array(count)
        .fill(null)
        .map((_, index) => schema.element(index, count));
    },
  });
  TestValidator.equals(
    "recursive owner separate forest minItems",
    wrapper.forest.length,
    1,
  );
  TestValidator.equals(
    "separate forest recursive child cutoff",
    wrapper.forest[0]!.children.length,
    0,
  );

  const createWrapper = typia.createRandom<IRecursiveWrapper>({
    boolean: () => false,
    array: (schema) => {
      const count: number =
        schema.minItems ?? (schema.recursive === true ? 0 : 1);
      return new Array(count)
        .fill(null)
        .map((_, index) => schema.element(index, count));
    },
  });
  const createdWrapper: IRecursiveWrapper = createWrapper();
  TestValidator.equals(
    "createRandom recursive owner separate forest minItems",
    createdWrapper.forest.length,
    1,
  );
  TestValidator.equals(
    "createRandom separate forest recursive child cutoff",
    createdWrapper.forest[0]!.children.length,
    0,
  );
};

interface IRecursiveTree {
  value: string;
  children: IRecursiveTree[];
  labels: string[] & tags.MinItems<1>;
}

interface IRecursiveForest {
  roots: IRecursiveTree[] & tags.MinItems<1>;
}

interface ISeparateTree {
  children: ISeparateTree[];
}

interface IRecursiveWrapper {
  next?: IRecursiveWrapper;
  forest: ISeparateTree[] & tags.MinItems<1>;
}

const visit = (
  node: IRecursiveTree,
  predicate: (node: IRecursiveTree) => boolean,
): boolean =>
  predicate(node) && node.children.every((child) => visit(child, predicate));
