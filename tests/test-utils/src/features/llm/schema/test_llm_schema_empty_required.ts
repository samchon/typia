import { TestValidator } from "@nestia/e2e";
import {
  IJsonSchemaTransformError,
  ILlmSchema,
  IResult,
  OpenApi,
} from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies LLM converter restores empty object shell fields in every mode.
 *
 * General OpenAPI schemas may omit empty `required` and `properties`, but LLM
 * function-calling schemas must explicitly say that there are no named
 * properties. The converter therefore normalizes default and strict object
 * schemas to `properties: {}` and `required: []`.
 *
 * 1. Convert an empty OpenAPI object in default and strict modes.
 * 2. Convert the same empty object through the parameters entrypoint.
 * 3. Assert every LLM object shell is explicit.
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

  TestValidator.equals("empty parameters success", parameters.success, true);
  if (parameters.success === true)
    TestValidator.equals("empty parameters shell", clean(parameters.value), {
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
  TestValidator.equals(`${name} success`, result.success, true);
  if (result.success === true)
    TestValidator.equals(name, clean(result.value), {
      type: "object",
      properties: {},
      required: [],
      ...extra,
    });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
