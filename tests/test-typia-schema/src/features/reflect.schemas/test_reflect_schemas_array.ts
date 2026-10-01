import { TestEquality } from "@typia/template/equality";
import typia, { IMetadataSchemaCollection } from "typia";

/**
 * Verifies reflect schemas array against the native typia.reflect.schemas
 * output.
 *
 * The case builds its input in this file and asserts schemas count, first
 * schema arrays, second schema arrays, third schema arrays, components arrays
 * count, first array element.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.reflect.schemas is evaluated by the native host on the types declared in this case and the result is checked by 8 assertions (schemas count; first schema arrays; second schema arrays; third schema arrays; components arrays count; first array element).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (schemas count; first schema arrays; second schema arrays; third schema arrays; components arrays count; first array element) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_reflect_schemas_array is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_reflect_schemas_array = (): void => {
  const collection: IMetadataSchemaCollection =
    typia.reflect.schemas<[string[], number[], boolean[]]>();

  TestEquality.equals("schemas count", collection.schemas.length, 3);

  // each schema has arrays reference
  TestEquality.equals(
    "first schema arrays",
    collection.schemas[0]?.arrays.length,
    1,
  );
  TestEquality.equals(
    "second schema arrays",
    collection.schemas[1]?.arrays.length,
    1,
  );
  TestEquality.equals(
    "third schema arrays",
    collection.schemas[2]?.arrays.length,
    1,
  );

  // components has array definitions
  TestEquality.equals(
    "components arrays count",
    collection.components.arrays.length,
    3,
  );

  // check array element types
  TestEquality.equals(
    "first array element",
    collection.components.arrays[0]?.value.atomics[0]?.type,
    "string",
  );
  TestEquality.equals(
    "second array element",
    collection.components.arrays[1]?.value.atomics[0]?.type,
    "number",
  );
  TestEquality.equals(
    "third array element",
    collection.components.arrays[2]?.value.atomics[0]?.type,
    "boolean",
  );
};
