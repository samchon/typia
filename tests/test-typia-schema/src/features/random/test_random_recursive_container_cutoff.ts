import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies nested recursive containers own the depth cutoff.
 *
 * Arrays that only wrap a nested array, set, or map can satisfy their own
 * `MinItems` constraint. The variable-length inner container must receive the
 * recursive cutoff and emit empty data when depth is exhausted.
 *
 * 1. Generate recursive array, set, and map containers behind `MinItems` arrays.
 * 2. Require the outer arrays to keep their minimum length.
 * 3. Require each inner container to terminate with an empty value.
 * 4. Repeat the same assertions through `typia.createRandom`.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.random is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (… recursive matrix outer minItems; … recursive matrix inner cutoff; … recursive set outer minItems; … recursive set inner cutoff; … recursive map outer minItems; … recursive map inner cutoff). The case documents its purpose as: Verifies nested recursive containers own the depth cutoff.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Arrays that only wrap a nested array, set, or map can satisfy their own `MinItems` constraint. The variable-length inner container must receive the recursive cutoff and emit empty data when depth is exhausted. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (… recursive matrix outer minItems; … recursive matrix inner cutoff; … recursive set outer minItems; … recursive set inner cutoff; … recursive map outer minItems; … recursive map inner cutoff) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_random_recursive_container_cutoff is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_random_recursive_container_cutoff = (): void => {
  const containers: IRecursiveContainers = typia.random<IRecursiveContainers>({
    string: () => "key",
    array: (schema) => {
      const count: number =
        schema.minItems ?? (schema.recursive === true ? 0 : 1);
      return new Array(count)
        .fill(null)
        .map((_, index) => schema.element(index, count));
    },
  });
  assertContainers("random", containers);

  const createContainers = typia.createRandom<IRecursiveContainers>({
    string: () => "key",
    array: (schema) => {
      const count: number =
        schema.minItems ?? (schema.recursive === true ? 0 : 1);
      return new Array(count)
        .fill(null)
        .map((_, index) => schema.element(index, count));
    },
  });
  assertContainers("createRandom", createContainers());
};

interface IRecursiveContainers {
  matrix: IRecursiveContainers[][] & tags.MinItems<1>;
  sets: Set<IRecursiveContainers>[] & tags.MinItems<1>;
  maps: Map<string, IRecursiveContainers>[] & tags.MinItems<1>;
}

const assertContainers = (
  prefix: string,
  containers: IRecursiveContainers,
): void => {
  TestEquality.equals(
    `${prefix} recursive matrix outer minItems`,
    containers.matrix.length,
    1,
  );
  TestEquality.equals(
    `${prefix} recursive matrix inner cutoff`,
    containers.matrix[0]!.length,
    0,
  );
  TestEquality.equals(
    `${prefix} recursive set outer minItems`,
    containers.sets.length,
    1,
  );
  TestEquality.equals(
    `${prefix} recursive set inner cutoff`,
    containers.sets[0]!.size,
    0,
  );
  TestEquality.equals(
    `${prefix} recursive map outer minItems`,
    containers.maps.length,
    1,
  );
  TestEquality.equals(
    `${prefix} recursive map inner cutoff`,
    containers.maps[0]!.size,
    0,
  );
};
