import { ILlmSchema, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies LLM inversion omits empty OpenAPI `required` arrays.
 *
 * LLM schemas intentionally keep `required: []`. This inverter follows typia's
 * emission policy of omitting an empty required list; the array is not invalid
 * under the OpenAPI 3.1 JSON Schema dialect.
 *
 * 1. Invert an empty LLM object schema.
 * 2. Assert object shell fields are preserved.
 * 3. Assert the OpenAPI result omits empty `required`.
 *
 * @evidence contracts/testing.md#behavioral-verification LlmSchemaConverter.invert runs on an empty object LLM schema; the object shell comparison and the own-property check on required fail if the empty array leaks into the OpenAPI result or the shell is altered.
 * @evidence contracts/testing.md#independent-expectations The input is hand-built and the expectation follows typia's documented inverter emission policy of omitting empty required, rather than a dialect validity restriction. The check uses hasOwnProperty so an explicit undefined cannot satisfy it.
 * @evidence contracts/testing.md#distinguishing-cases The empty-required boundary and preserved object shell are owned here; test_llm_schema_discriminator separately asserts non-empty required arrays in complete inverted object components.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. LlmSchemaConverter.invert runs in process on an authored schema with no native build, installation or host.
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

  TestEquality.equals(
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
  TestEquality.equals(
    "inverted required omitted",
    Object.prototype.hasOwnProperty.call(inverted, "required"),
    false,
  );
};
