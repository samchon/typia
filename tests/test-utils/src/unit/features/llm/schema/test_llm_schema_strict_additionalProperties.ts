import { IJsonSchemaTransformError, IResult } from "@typia/interface";
import { IJsonSchemaCollection, ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies strict conversion closes both root and nested object schemas.
 *
 * Closing only the root would still permit unmodeled fields in objects inside
 * an array. Default mode must retain its separate open-object representation.
 *
 * 1. Convert an authored required object with nested object-array items in strict
 *    mode.
 * 2. Retain the original root/nested subset assertions and contrast default mode
 *    at both levels.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmSchemaConverter.schema must set additionalProperties false at the root and array-item object; default mode must not add either closure.
 * @evidence contracts/testing.md#independent-expectations The documented strict object contract defines the authored expected subset; the same independent input is converted under the opposite option for the negative twin.
 * @evidence contracts/testing.md#distinguishing-cases Root and nested array object closure plus the strict/default option difference are asserted. This subset intentionally does not certify unrelated fields; native strict generation stays in its matrix.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this matching export through node:test with the plugin-free oracle/configuration. The inline OpenAPI input is authored from declared fields rather than generated at execution. Private local helpers remain reviewed through this owning case.
 */
export const test_llm_schema_strict_additionalProperties = (): void => {
  const collection: IJsonSchemaCollection = {
    version: "3.1",
    components: {
      schemas: {},
    },
    schemas: [
      {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          name: {
            type: "string",
          },
          hobbies: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: {
                  type: "string",
                },
                name: {
                  type: "string",
                },
              },
              required: ["id", "name"],
            },
          },
        },
        required: ["id", "name", "hobbies"],
      },
    ],
  };
  const res: IResult<ILlmSchema, IJsonSchemaTransformError> =
    LlmSchemaConverter.schema({
      components: collection.components,
      schema: collection.schemas[0]!,
      $defs: {},
      config: {
        strict: true,
      },
    });
  TestEquality.subset(
    "strict",
    {
      type: "object",
      additionalProperties: false,
      properties: {
        hobbies: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
          },
        },
      },
    },
    (res.success ? res.value : null) as any,
  );

  const ordinary = LlmSchemaConverter.schema({
    components: collection.components,
    schema: collection.schemas[0]!,
    $defs: {},
    config: { strict: false },
  });
  TestEquality.equals("default object succeeds", ordinary.success, true);
  if (ordinary.success) {
    const root = ordinary.value as ILlmSchema.IObject;
    TestEquality.equals(
      "default root closure absent",
      root.additionalProperties,
      undefined,
    );
    TestEquality.equals(
      "default nested closure absent",
      (
        (root.properties.hobbies as ILlmSchema.IArray)
          .items as ILlmSchema.IObject
      ).additionalProperties,
      undefined,
    );
  }
};
