import { IJsonSchemaTransformError, IResult } from "@typia/interface";
import { IJsonSchemaCollection, ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies nullable conversion keeps null separate from the numeric branch.
 *
 * Dropping either alternative changes the allowed values, while introducing
 * null for a non-nullable input broadens the contract.
 *
 * 1. Convert an authored null/number OpenAPI union.
 * 2. Compare both complete LLM alternatives and the number-only negative twin.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmSchemaConverter.schema must return null and number alternatives; a number-only input must not acquire null.
 * @evidence contracts/testing.md#independent-expectations The original number-or-null contract establishes both independently authored expected alternatives and the number-only control.
 * @evidence contracts/testing.md#distinguishing-cases The nullable positive and one-axis number-only negative distinguish branch loss from overmatching. Native union generation remains in the native schema matrix.
 * @evidence contracts/testing.md#execution-ownership test-utils-unit start explicitly registers this matching export through node:test with the plugin-free oracle/configuration. The inline OpenAPI input is authored from the prior fixture's declared fields rather than generated at execution; all original converter/coverage assertions and failure names remain. Removed TypeScript-only producer fixture declarations are represented by those input fields. Private local helpers remain reviewed through this owning case.
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
