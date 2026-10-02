import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies recursive map keys participate in depth cutoff detection.
 *
 * Map keys used to be skipped when marking recursive metadata. A map whose key
 * returns to the owner must still pass `recursive: true` into the synthetic
 * entry array so custom generators can stop the graph.
 *
 * 1. Generate a recursive map-key object with a custom array generator.
 * 2. Emit no entries whenever the transformer marks an array recursive.
 * 3. Require the map to terminate at the key edge.
 * 4. Repeat the same assertion through `typia.createRandom`.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct/factory supported callbacks return0 elements whenever schema.recursive is true; the resulting recursive-key Map must be empty.
 * @evidence contracts/testing.md#independent-expectations The authored callback deliberately exposes recursive metadata and the expected size0 independently checks that a recursive Map key takes the cutoff path.
 * @evidence contracts/testing.md#distinguishing-cases Map-key recursion differs from ordinary value recursion; both direct and factory forms retain the exact empty-map assertion.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_recursive_map_key_cutoff in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_random_recursive_map_key_cutoff = (): void => {
  const value: IRecursiveMapKey = typia.random<IRecursiveMapKey>({
    string: () => "value",
    array: (schema) => {
      const count: number = schema.recursive === true ? 0 : 1;
      return new Array(count)
        .fill(null)
        .map((_, index) => schema.element(index, count));
    },
  });
  TestEquality.equals("recursive map key cutoff", value.links.size, 0);

  const createValue = typia.createRandom<IRecursiveMapKey>({
    string: () => "value",
    array: (schema) => {
      const count: number = schema.recursive === true ? 0 : 1;
      return new Array(count)
        .fill(null)
        .map((_, index) => schema.element(index, count));
    },
  });
  TestEquality.equals(
    "createRandom recursive map key cutoff",
    createValue().links.size,
    0,
  );
};

interface IRecursiveMapKey {
  links: Map<IRecursiveMapKey, string>;
}
