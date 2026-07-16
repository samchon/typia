import { TestValidator } from "@nestia/e2e";
import {
  IJsonSchemaTransformError,
  ILlmSchema,
  IResult,
  OpenApi,
} from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies strict LLM conversion preserves numeric defaults as description
 * tags.
 *
 * Numeric constraints are shifted out of schemas that target strict LLM
 * providers. The default must join that complete tag set before the description
 * is serialized, including falsy and fractional values.
 *
 * 1. Convert integer and number schemas with existing descriptions and
 *    constraints.
 * 2. Cover zero, negative, fractional, and scientific-notation defaults.
 * 3. Assert the default is removed only after its deterministic tag is written.
 */
export const test_llm_schema_strict_numeric_default = (): void => {
  const cases: Array<{
    name: string;
    schema: OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INumber;
    description: string;
  }> = [
    {
      name: "zero integer",
      schema: {
        type: "integer",
        description: "Counter",
        minimum: 0,
        maximum: 10,
        default: 0,
      },
      description: "Counter\n\n\n@minimum 0\n@maximum 10\n@default 0",
    },
    {
      name: "negative integer",
      schema: { type: "integer", default: -7 },
      description: "@default -7",
    },
    {
      name: "fractional number",
      schema: { type: "number", multipleOf: 0.01, default: 0.25 },
      description: "@multipleOf 0.01\n@default 0.25",
    },
    {
      name: "scientific number",
      schema: { type: "number", default: 1e-7 },
      description: "@default 1e-7",
    },
  ];

  for (const entry of cases) {
    const result: IResult<ILlmSchema, IJsonSchemaTransformError> =
      LlmSchemaConverter.schema({
        config: { strict: true },
        components: {},
        $defs: {},
        schema: entry.schema,
      });
    TestValidator.predicate(`${entry.name} converted`, result.success);
    if (result.success === false) continue;
    TestValidator.equals(
      `${entry.name} description`,
      result.value.description,
      entry.description,
    );
    TestValidator.predicate(
      `${entry.name} default removed`,
      Object.hasOwn(result.value, "default") === false,
    );
  }
};
