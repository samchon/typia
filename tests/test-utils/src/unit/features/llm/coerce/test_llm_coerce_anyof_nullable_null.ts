import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface INullableObject {
  data: { value: number } | null;
}

/**
 * Verifies schema-directed coercion for anyof nullable null.
 *
 * This case checks that a stringified null chooses the null alternative rather
 * than constructing an object. Authored schema input isolates utility semantics
 * from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 */
export const test_llm_coerce_anyof_nullable_null = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      data: {
        anyOf: [
          {
            type: "object",
            properties: {
              value: {
                type: "number",
              },
            },
            required: ["value"],
            additionalProperties: false,
          },
          {
            type: "null",
          },
        ],
      },
    },
    required: ["data"],
    additionalProperties: false,
    $defs: {},
  };

  const corrupted = {
    data: "null" as unknown,
  };

  const result = LlmJson.parse<INullableObject>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("data is null", result.data.data, null);
  }
};
