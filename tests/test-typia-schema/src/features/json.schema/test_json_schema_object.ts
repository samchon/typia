import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_json_schema_object = (): void => {
  interface IMember {
    id: number;
    name: string;
    email?: string;
  }

  const unit = typia.json.schema<IMember>();
  const schema = unit.schema;

  // named type may return $ref
  let actualSchema: OpenApi.IJsonSchema;
  if (OpenApiTypeChecker.isReference(schema)) {
    const memberSchema = unit.components.schemas?.["IMember"];
    TestValidator.predicate("IMember exists in components", () =>
      memberSchema !== undefined,
    );
    actualSchema = memberSchema!;
  } else {
    actualSchema = schema;
  }

  TestValidator.predicate("is object type", () =>
    OpenApiTypeChecker.isObject(actualSchema),
  );

  if (OpenApiTypeChecker.isObject(actualSchema)) {
    const obj = actualSchema as OpenApi.IJsonSchema.IObject;
    const props = obj.properties;
    if (props === undefined) return;

    TestValidator.predicate("has id property", () => "id" in props);
    TestValidator.predicate("has name property", () => "name" in props);
    TestValidator.predicate("has email property", () => "email" in props);

    TestValidator.predicate("id is required", () =>
      obj.required?.includes("id") ?? false,
    );
    TestValidator.predicate("name is required", () =>
      obj.required?.includes("name") ?? false,
    );
    TestValidator.predicate("email is optional", () =>
      !(obj.required?.includes("email") ?? false),
    );

    TestValidator.predicate("id is number", () =>
      OpenApiTypeChecker.isNumber(props["id"]!),
    );
    TestValidator.predicate("name is string", () =>
      OpenApiTypeChecker.isString(props["name"]!),
    );
  }
};
