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
 * @evidence contracts/testing.md#behavioral-verification Custom direct/factory callbacks retain MinItems1 on sibling labels, root forests and a separate forest owned by an optional-recursive wrapper, while the separate tree children cut off empty.
 * @evidence contracts/testing.md#independent-expectations Independent visit and literal lengths establish required population; callback minItems metadata is inspected through its observable output, not through another generated validator.
 * @evidence contracts/testing.md#distinguishing-cases Sibling versus recursive-edge ownership, root tagged forests and unrelated nested recursion retain all minimum and zero-cutoff assertions in their original forms.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_recursive_min_items_satisfied in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
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
