import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiTypeChecker.escape runs on a referenced optional-only object and a oneOf wrapper with an empty required sibling; the escaped schemas are compared and must not own a required key.
 * @evidence contracts/testing.md#independent-expectations Typia's escape emission policy omits empty required arrays; OpenAPI 3.1 and 3.2 permit them. Authored own-property checks enforce omission rather than allowing an explicit undefined to pass.
 * @evidence contracts/testing.md#distinguishing-cases A referenced object and a wrapper are the two shapes; escaped objects with remaining required members are not asserted here.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. The checker runs in process on authored schemas with no native build, installation or host.
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
