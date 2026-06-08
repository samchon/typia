import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";

/**
 * Verifies OpenApiTypeChecker.escape omits empty `required` arrays.
 *
 * Escaping references can filter object properties and rebuild a schema object.
 * When every required entry disappears or the source list is empty, the escaped
 * OpenAPI schema must omit `required` instead of serializing `required: []`.
 *
 * 1. Escape a referenced optional-only object schema.
 * 2. Assert the reference is resolved.
 * 3. Assert the escaped object does not own a `required` key.
 */
export const test_openapi_type_checker_escape_empty_required = (): void => {
  const escaped = OpenApiTypeChecker.escape({
    components: {
      schemas: {
        Target: {
          type: "object",
          properties: {
            name: { type: "string" },
          },
          additionalProperties: false,
          required: [],
        },
      },
    },
    schema: {
      $ref: "#/components/schemas/Target",
    },
    recursive: 1,
  });

  TestValidator.equals("escape success", escaped.success, true);
  if (escaped.success === true) {
    const schema = escaped.value as OpenApi.IJsonSchema.IObject;
    TestValidator.equals(
      "escaped properties",
      Object.keys(schema.properties!),
      ["name"],
    );
    TestValidator.equals(
      "escaped required omitted",
      Object.prototype.hasOwnProperty.call(schema, "required"),
      false,
    );
  }
};
