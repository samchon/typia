import { TestValidator } from "@nestia/e2e";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { IJsonSchemaCollection } from "typia";

export const test_json_schemas = (): void => {
  interface IMember {
    id: number;
    name: string;
  }
  interface IArticle {
    title: string;
    body: string;
    author: IMember;
  }

  const collection: IJsonSchemaCollection = typia.json.schemas<
    [IMember, IArticle, string, number]
  >();

  // schemas array has 4 items
  TestValidator.equals("schemas count", collection.schemas.length, 4);

  // named types use $ref
  TestValidator.predicate("IMember is ref", () =>
    OpenApiTypeChecker.isReference(collection.schemas[0]!),
  );
  TestValidator.predicate("IArticle is ref", () =>
    OpenApiTypeChecker.isReference(collection.schemas[1]!),
  );

  // primitive types are inline
  TestValidator.predicate("string is inline", () =>
    OpenApiTypeChecker.isString(collection.schemas[2]!),
  );
  TestValidator.predicate("number is inline", () =>
    OpenApiTypeChecker.isNumber(collection.schemas[3]!),
  );

  // components has both named types
  TestValidator.predicate("components has IMember", () =>
    collection.components.schemas !== undefined &&
    "IMember" in collection.components.schemas,
  );
  TestValidator.predicate("components has IArticle", () =>
    collection.components.schemas !== undefined &&
    "IArticle" in collection.components.schemas,
  );
};
