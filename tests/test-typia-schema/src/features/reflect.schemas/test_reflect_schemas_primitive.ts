import { TestEquality } from "@typia/template/equality";
import typia, { IMetadataSchemaCollection } from "typia";

/**
 * Verifies reflect schemas primitive against the native typia.reflect.schemas
 * output.
 *
 * The case builds its input in this file and asserts schemas count, string
 * type, number type, boolean type, bigint type, objects count.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.reflect.schemas is evaluated by the native host on the types declared in this case and the result is checked by 9 assertions (schemas count; string type; number type; boolean type; bigint type; objects count).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (schemas count; string type; number type; boolean type; bigint type; objects count) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_reflect_schemas_primitive is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_reflect_schemas_primitive = (): void => {
  const collection: IMetadataSchemaCollection =
    typia.reflect.schemas<[string, number, boolean, bigint]>();

  TestEquality.equals("schemas count", collection.schemas.length, 4);

  TestEquality.equals(
    "string type",
    collection.schemas[0]?.atomics[0]?.type,
    "string",
  );
  TestEquality.equals(
    "number type",
    collection.schemas[1]?.atomics[0]?.type,
    "number",
  );
  TestEquality.equals(
    "boolean type",
    collection.schemas[2]?.atomics[0]?.type,
    "boolean",
  );
  TestEquality.equals(
    "bigint type",
    collection.schemas[3]?.atomics[0]?.type,
    "bigint",
  );

  // primitives don't create components
  TestEquality.equals("objects count", collection.components.objects.length, 0);
  TestEquality.equals("arrays count", collection.components.arrays.length, 0);
  TestEquality.equals("tuples count", collection.components.tuples.length, 0);
  TestEquality.equals("aliases count", collection.components.aliases.length, 0);
};
