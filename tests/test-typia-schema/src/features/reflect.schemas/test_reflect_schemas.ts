import { TestValidator } from "@nestia/e2e";
import typia, { IMetadataSchemaCollection } from "typia";

export const test_reflect_schemas = (): void => {
  interface IMember {
    id: number;
    name: string;
  }
  interface IArticle {
    title: string;
    body: string;
    author: IMember;
  }

  const collection: IMetadataSchemaCollection = typia.reflect.schemas<
    [IMember, IArticle, string, number]
  >();

  // schemas array has 4 items
  TestValidator.equals("schemas count", collection.schemas.length, 4);

  // first two are object types
  TestValidator.equals("IMember objects length", collection.schemas[0]?.objects.length, 1);
  TestValidator.equals("IArticle objects length", collection.schemas[1]?.objects.length, 1);

  // last two are primitives
  TestValidator.equals("string atomics length", collection.schemas[2]?.atomics.length, 1);
  TestValidator.equals("number atomics length", collection.schemas[3]?.atomics.length, 1);

  // components has both named object types
  TestValidator.predicate("components has IMember", () =>
    collection.components.objects.some((o) => o.name === "IMember"),
  );
  TestValidator.predicate("components has IArticle", () =>
    collection.components.objects.some((o) => o.name === "IArticle"),
  );
};
