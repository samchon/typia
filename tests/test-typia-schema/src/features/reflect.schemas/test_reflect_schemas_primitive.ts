import { TestEquality } from "@typia/template/equality";
import typia, { IMetadataSchemaCollection } from "typia";

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
