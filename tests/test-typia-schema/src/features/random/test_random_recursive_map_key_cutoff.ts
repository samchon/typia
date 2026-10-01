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
 * @evidence contracts/testing.md#behavioral-verification typia.random is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (recursive map key cutoff; createRandom recursive map key cutoff). The case documents its purpose as: Verifies recursive map keys participate in depth cutoff detection.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Map keys used to be skipped when marking recursive metadata. A map whose key returns to the owner must still pass `recursive: true` into the synthetic entry array so custom generators can stop the graph. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (recursive map key cutoff; createRandom recursive map key cutoff) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_random_recursive_map_key_cutoff is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
