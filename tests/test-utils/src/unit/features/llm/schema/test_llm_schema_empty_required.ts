import {
  IJsonSchemaTransformError,
  ILlmSchema,
  IResult,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies empty LLM object schemas retain explicit shell fields.
 *
 * Default and strict conversion must explicitly distinguish no named properties
 * from omitted schema metadata. The parameters entry also owns a closed root
 * object.
 *
 * 1. Convert authored empty objects through both schema modes and the parameters
 *    entry.
 * 2. Compare the complete JSON-visible shells against independently authored
 *    literals.
 *
 * @evidence contracts/testing.md#behavioral-verification LlmSchemaConverter.schema and parameters must return successful explicit properties/required shells; strict and parameter roots retain their distinct additionalProperties requirements.
 * @evidence contracts/testing.md#independent-expectations The authored input and public LLM object/parameters contract define the literal shell. The private clean helper removes undefined-valued metadata using native JSON serialization; it verifies JSON-visible shape rather than JavaScript optional-key presence.
 * @evidence contracts/testing.md#distinguishing-cases Default schema, strict schema and default parameters exercise three distinct entry/configuration combinations. Nonempty fields and recursive definitions are owned by the other direct schema cases.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test under a plugin-free configuration and oracle. Its inputs are authored literals and direct utility calls; no native producer, installed artifact or product host is required. Private local assertion/reference helpers remain part of this case's review.
 */
export const test_llm_schema_empty_required = (): void => {
  const nonStrict = LlmSchemaConverter.schema({
    config: { strict: false },
    components: { schemas: {} },
    $defs: {},
    schema: {
      type: "object",
    } as OpenApi.IJsonSchema.IObject,
  });

  assertSchema("default empty schema", nonStrict, {});

  const strict = LlmSchemaConverter.schema({
    config: { strict: true },
    components: { schemas: {} },
    $defs: {},
    schema: {
      type: "object",
      additionalProperties: false,
    } as OpenApi.IJsonSchema.IObject,
  });

  assertSchema("strict empty schema", strict, {
    additionalProperties: false,
  });

  const parameters = LlmSchemaConverter.parameters({
    config: { strict: false },
    components: { schemas: {} },
    schema: {
      type: "object",
    } as OpenApi.IJsonSchema.IObject,
  });

  TestEquality.equals("empty parameters success", parameters.success, true);
  if (parameters.success === true)
    TestEquality.equals("empty parameters shell", clean(parameters.value), {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
      $defs: {},
    });
};

const assertSchema = (
  name: string,
  result: IResult<ILlmSchema, IJsonSchemaTransformError>,
  extra: Partial<ILlmSchema.IObject>,
): void => {
  TestEquality.equals(`${name} success`, result.success, true);
  if (result.success === true)
    TestEquality.equals(name, clean(result.value), {
      type: "object",
      properties: {},
      required: [],
      ...extra,
    });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
