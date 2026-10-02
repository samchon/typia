import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies IMember retains all named fields, required id/name, optional email
 * and the stated atomic field kinds.
 *
 * Native interface metadata must survive component publication and root
 * dereferencing.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert required/optional and number/string distinctions remain; absence of
 *    properties now fails instead of returning before all member assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that IMember retains all named fields, required id/name, optional email and the stated atomic field kinds.
 * @evidence contracts/testing.md#independent-expectations The interface declaration independently determines the property set, required membership and number/string kinds.
 * @evidence contracts/testing.md#distinguishing-cases Required/optional and number/string distinctions remain; absence of properties now fails instead of returning before all member assertions.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_object through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native interface metadata must survive component publication and root dereferencing. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Required/optional and number/string distinctions remain; absence of properties now fails instead of returning before all member assertions. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
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
    if (props === undefined)
      throw new Error("the named object must publish its properties");

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
