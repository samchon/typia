import { IJsonSchemaTransformError, IResult } from "@typia/interface";
import { IJsonSchemaCollection, ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies nullable conversion keeps null separate from the numeric branch.
 *
 * Dropping either alternative changes the allowed values, while introducing
 * null for a non-nullable input broadens the contract.
 *
 * 1. Convert an authored null/number OpenAPI union.
 * 2. Compare both complete LLM alternatives and the number-only negative twin.
 */
export const test_llm_schema_nullable = (): void => {
  const collection: IJsonSchemaCollection = {
    version: "3.1",
    components: {
      schemas: {},
    },
    schemas: [
      {
        oneOf: [
          {
            type: "null",
          },
          {
            type: "number",
          },
        ],
      },
    ],
  };
  const result: IResult<ILlmSchema, IJsonSchemaTransformError> =
    LlmSchemaConverter.schema({
      components: collection.components,
      schema: collection.schemas[0]!,
      $defs: {},
    });
  TestEquality.equals("success", result.success, true);
  TestEquality.equals("nullable", result.success ? result.value : {}, {
    anyOf: [
      {
        type: "null",
      },
      {
        type: "number",
      },
    ],
  });

  const ordinary = LlmSchemaConverter.schema({
    components: {},
    $defs: {},
    schema: { type: "number" },
  });
  TestEquality.equals(
    "nonnullable number",
    ordinary.success ? ordinary.value : null,
    { type: "number" },
  );
};
