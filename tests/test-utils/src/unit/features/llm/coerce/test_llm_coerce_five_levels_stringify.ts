import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface ISimple {
  value: number;
}

/**
 * Verifies schema-directed coercion for five levels stringify.
 *
 * This case checks that four nested string encodings of a numeric leaf recover
 * 999. Authored schema input isolates utility semantics from compiler
 * production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 */
export const test_llm_coerce_five_levels_stringify = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      value: {
        type: "number",
      },
    },
    required: ["value"],
    additionalProperties: false,
    $defs: {},
  };
  const original: ISimple = { value: 999 };

  const corrupted = {
    value: JSON.stringify(
      JSON.stringify(JSON.stringify(JSON.stringify(original.value))),
    ) as unknown,
  };

  const result = LlmJson.parse<ISimple>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("value", result.data.value, 999);
  }
};
