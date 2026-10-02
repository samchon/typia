import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface INestedUnion {
  outer: {
    inner: string | { deep: number };
  };
}

/**
 * Verifies schema-directed coercion for anyof nested string.
 *
 * This case checks that a string alternative preserves JSON-looking text even
 * within a converted parent object. Authored schema input isolates utility
 * semantics from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 */
export const test_llm_coerce_anyof_nested_string = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      outer: {
        type: "object",
        properties: {
          inner: {
            anyOf: [
              {
                type: "string",
              },
              {
                type: "object",
                properties: {
                  deep: {
                    type: "number",
                  },
                },
                required: ["deep"],
                additionalProperties: false,
              },
            ],
          },
        },
        required: ["inner"],
        additionalProperties: false,
      },
    },
    required: ["outer"],
    additionalProperties: false,
    $defs: {},
  };
  const original: INestedUnion = {
    outer: { inner: { deep: 777 } },
  };

  const innerStr = JSON.stringify(original.outer.inner);
  const corrupted = {
    outer: JSON.stringify({ inner: innerStr }),
  };

  const result = LlmJson.parse<INestedUnion>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals(
      "inner stays string",
      result.data.outer.inner,
      innerStr,
    );
  }
};
