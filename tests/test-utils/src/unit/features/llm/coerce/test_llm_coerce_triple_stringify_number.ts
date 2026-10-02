import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface ISimple {
  value: number;
}

/**
 * Verifies schema-directed coercion for triple stringify number.
 *
 * This case checks that two nested string encodings recover 42 rather than
 * retaining JSON text. Authored schema input isolates utility semantics from
 * compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 */
export const test_llm_coerce_triple_stringify_number = (): void => {
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
  const original: ISimple = { value: 42 };

  const corrupted = {
    value: JSON.stringify(JSON.stringify(original.value)) as unknown,
  };

  const result = LlmJson.parse<ISimple>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("value", result.data.value, 42);
  }
};
