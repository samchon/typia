import { TestValidator } from "@nestia/e2e";
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
  TestValidator.equals(
    `${prefix} recursive matrix outer minItems`,
    containers.matrix.length,
    1,
  );
  TestValidator.equals(
    `${prefix} recursive matrix inner cutoff`,
    containers.matrix[0]!.length,
    0,
  );
  TestValidator.equals(
    `${prefix} recursive set outer minItems`,
    containers.sets.length,
    1,
  );
  TestValidator.equals(
    `${prefix} recursive set inner cutoff`,
    containers.sets[0]!.size,
    0,
  );
  TestValidator.equals(
    `${prefix} recursive map outer minItems`,
    containers.maps.length,
    1,
  );
  TestValidator.equals(
    `${prefix} recursive map inner cutoff`,
    containers.maps[0]!.size,
    0,
  );
};
