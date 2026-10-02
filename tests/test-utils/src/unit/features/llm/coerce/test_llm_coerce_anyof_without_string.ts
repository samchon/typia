import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IWithoutStringUnion {
  value: number | boolean;
}

/**
 * Verifies schema-directed coercion for anyof without string.
 *
 * This case checks that removing the string alternative permits numeric-looking
 * text to become a number. Authored schema input isolates utility semantics
 * from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 */
export const test_llm_coerce_anyof_without_string = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      value: {
        anyOf: [
          {
            type: "number",
          },
          {
            type: "boolean",
          },
        ],
      },
    },
    required: ["value"],
    additionalProperties: false,
    $defs: {},
  };

  const corrupted = { value: "42" as unknown };

  const result = LlmJson.parse<IWithoutStringUnion>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("value parsed", result.data.value, 42);
  }
};
