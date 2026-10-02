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
 * @evidence contracts/testing.md#behavioral-verification Direct/factory custom callbacks retain outer MinItems1 for matrix, Set and Map arrays while each inner recursive container must be empty.
 * @evidence contracts/testing.md#independent-expectations Literal outer length1 and inner length/size0 derive from preserved tagged outer boundaries and the recursive escape supplied through the callback.
 * @evidence contracts/testing.md#distinguishing-cases Matrix inner arrays, Set and Map containers remain separate assertions in both public forms; outer required population must not be erased with the recursive inner edge.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_recursive_container_cutoff in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
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
