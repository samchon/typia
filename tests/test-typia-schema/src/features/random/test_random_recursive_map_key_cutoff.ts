import { TestValidator } from "@nestia/e2e";
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
  TestValidator.equals("recursive map key cutoff", value.links.size, 0);

  const createValue = typia.createRandom<IRecursiveMapKey>({
    string: () => "value",
    array: (schema) => {
      const count: number = schema.recursive === true ? 0 : 1;
      return new Array(count)
        .fill(null)
        .map((_, index) => schema.element(index, count));
    },
  });
  TestValidator.equals(
    "createRandom recursive map key cutoff",
    createValue().links.size,
    0,
  );
};

interface IRecursiveMapKey {
  links: Map<IRecursiveMapKey, string>;
}
