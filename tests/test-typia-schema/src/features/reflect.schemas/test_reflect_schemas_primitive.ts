import { TestValidator } from "@nestia/e2e";
import typia, { IMetadataSchemaCollection } from "typia";

export const test_reflect_schemas_primitive = (): void => {
  const collection: IMetadataSchemaCollection = typia.reflect.schemas<
    [string, number, boolean, bigint]
  >();

  TestValidator.equals("schemas count", collection.schemas.length, 4);

  TestValidator.equals("string type", collection.schemas[0]?.atomics[0]?.type, "string");
  TestValidator.equals("number type", collection.schemas[1]?.atomics[0]?.type, "number");
  TestValidator.equals("boolean type", collection.schemas[2]?.atomics[0]?.type, "boolean");
  TestValidator.equals("bigint type", collection.schemas[3]?.atomics[0]?.type, "bigint");

  // primitives don't create components
  TestValidator.equals("objects count", collection.components.objects.length, 0);
  TestValidator.equals("arrays count", collection.components.arrays.length, 0);
  TestValidator.equals("tuples count", collection.components.tuples.length, 0);
  TestValidator.equals("aliases count", collection.components.aliases.length, 0);
};
