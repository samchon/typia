import {
  IJsonSchemaTransformError,
  ILlmSchema,
  IResult,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
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
