import { TestValidator } from "@nestia/e2e";
import typia, { IMetadataSchemaCollection } from "typia";

export const test_reflect_schemas_array = (): void => {
  const collection: IMetadataSchemaCollection = typia.reflect.schemas<
    [string[], number[], boolean[]]
  >();

  TestValidator.equals("schemas count", collection.schemas.length, 3);

  // each schema has arrays reference
  TestValidator.equals("first schema arrays", collection.schemas[0]?.arrays.length, 1);
  TestValidator.equals("second schema arrays", collection.schemas[1]?.arrays.length, 1);
  TestValidator.equals("third schema arrays", collection.schemas[2]?.arrays.length, 1);

  // components has array definitions
  TestValidator.equals("components arrays count", collection.components.arrays.length, 3);

  // check array element types
  TestValidator.equals(
    "first array element",
    collection.components.arrays[0]?.value.atomics[0]?.type,
    "string",
  );
  TestValidator.equals(
    "second array element",
    collection.components.arrays[1]?.value.atomics[0]?.type,
    "number",
  );
  TestValidator.equals(
    "third array element",
    collection.components.arrays[2]?.value.atomics[0]?.type,
    "boolean",
  );
};
