import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";

/**
 * Verifies OpenApiTypeChecker.escape omits empty `required` arrays.
 *
 * Escaping references can filter object properties and rebuild a schema object.
 * When every required entry disappears or the source list is empty, the escaped
 * OpenAPI schema must omit `required` instead of serializing `required: []`.
 *
 * 1. Escape a referenced optional-only object schema.
 * 2. Escape a `oneOf` wrapper carrying an empty `required` sibling.
 * 3. Assert escaped objects and wrappers do not own a `required` key.
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

  TestEquality.equals("escape success", escaped.success, true);
  if (escaped.success === true) {
    const schema = escaped.value as OpenApi.IJsonSchema.IObject;
    TestEquality.equals("escaped properties", Object.keys(schema.properties!), [
      "name",
    ]);
    TestEquality.equals(
      "escaped required omitted",
      Object.prototype.hasOwnProperty.call(schema, "required"),
      false,
    );
  }

  const oneOf = OpenApiTypeChecker.escape({
    components: { schemas: {} },
    schema: {
      oneOf: [
        {
          type: "object",
          properties: {
            name: { type: "string" },
          },
          required: [],
        },
      ],
      required: [],
    } as OpenApi.IJsonSchema,
    recursive: false,
  });

  TestEquality.equals("oneOf escape success", oneOf.success, true);
  if (oneOf.success === true) {
    const schema = oneOf.value as OpenApi.IJsonSchema.IOneOf;
    TestEquality.equals(
      "oneOf wrapper required omitted",
      Object.prototype.hasOwnProperty.call(schema, "required"),
      false,
    );
    TestEquality.equals(
      "oneOf object required omitted",
      Object.prototype.hasOwnProperty.call(schema.oneOf[0]!, "required"),
      false,
    );
  }
};
