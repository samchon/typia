import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.random is evaluated by the native host on the types declared in this case and the result is checked by 7 assertions (recursive sibling minItems; recursive root minItems; createRandom recursive root minItems; recursive owner separate forest minItems; separate forest recursive child cutoff; createRandom recursive owner separate forest minItems). The case documents its purpose as: Verifies satisfiable recursive MinItems arrays stay accepted.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Positive `MinItems` is only impossible on a direct recursive array alias or on the edge that must emit `[]` at the depth cutoff. Other arrays can keep their minimum length when a nested recursive edge terminates the graph. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (recursive sibling minItems; recursive root minItems; createRandom recursive root minItems; recursive owner separate forest minItems; separate forest recursive child cutoff; createRandom recursive owner separate forest minItems) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_random_recursive_min_items_satisfied is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
  TestEquality.equals("recursive root minItems", forest.roots.length, 1);

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
  TestEquality.equals(
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
  TestEquality.equals(
    "recursive owner separate forest minItems",
    wrapper.forest.length,
    1,
  );
  TestEquality.equals(
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
  TestEquality.equals(
    "createRandom recursive owner separate forest minItems",
    createdWrapper.forest.length,
    1,
  );
  TestEquality.equals(
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
