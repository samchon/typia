import { ILlmSchema, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification LlmSchemaConverter.invert runs on an empty object LLM schema; the object shell comparison and the own-property check on required fail if the empty array leaks into the OpenAPI result or the shell is altered.
 * @evidence contracts/testing.md#independent-expectations The input is hand-built and the expectation follows the OpenAPI rule that an empty required array is not emitted, independent of the converter. The check uses hasOwnProperty so an explicit undefined cannot satisfy it.
 * @evidence contracts/testing.md#distinguishing-cases The empty-required boundary is the owned case; non-empty required arrays are not asserted here.
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
