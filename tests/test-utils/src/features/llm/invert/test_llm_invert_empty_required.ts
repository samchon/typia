import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies LLM inversion omits empty OpenAPI `required` arrays.
 *
 * LLM schemas intentionally keep `required: []`, but converting them back to
 * general OpenAPI must not leak that invalid empty array into the OpenAPI
 * schema output.
 *
 * 1. Invert an empty LLM object schema.
 * 2. Assert object shell fields are preserved.
 * 3. Assert the OpenAPI result omits empty `required`.
 */
export const test_llm_invert_empty_required = (): void => {
  const inverted = LlmSchemaConverter.invert({
    components: {},
    $defs: {},
    schema: {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    } satisfies ILlmSchema.IObject,
  }) as OpenApi.IJsonSchema.IObject;

  TestValidator.equals(
    "inverted object shell",
    {
      type: inverted.type,
      properties: inverted.properties,
      additionalProperties: inverted.additionalProperties,
    },
    {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
  );
  TestValidator.equals(
    "inverted required omitted",
    Object.prototype.hasOwnProperty.call(inverted, "required"),
    false,
  );
};
