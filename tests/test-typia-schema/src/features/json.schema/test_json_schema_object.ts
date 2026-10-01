import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies json schema object against the native typia.json.schema output.
 *
 * The case builds its input in this file and asserts IMember exists in
 * components, is object type, has id property, has name property, has email
 * property, id is required.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 10 assertions (IMember exists in components; is object type; has id property; has name property; has email property; id is required).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (IMember exists in components; is object type; has id property; has name property; has email property; id is required) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_object is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
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
    TestValidator.predicate(
      "IMember exists in components",
      () => memberSchema !== undefined,
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

    TestValidator.predicate(
      "id is required",
      () => obj.required?.includes("id") ?? false,
    );
    TestValidator.predicate(
      "name is required",
      () => obj.required?.includes("name") ?? false,
    );
    TestValidator.predicate(
      "email is optional",
      () => !(obj.required?.includes("email") ?? false),
    );

    TestValidator.predicate("id is number", () =>
      OpenApiTypeChecker.isNumber(props["id"]!),
    );
    TestValidator.predicate("name is string", () =>
      OpenApiTypeChecker.isString(props["name"]!),
    );
  }
};
