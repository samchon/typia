import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface ISimpleArray {
  numbers: number[];
}

/**
 * Verifies schema-directed coercion for nested array whole.
 *
 * This case checks that a whole stringified array recovers all four numbers in
 * order. Authored schema input isolates utility semantics from compiler
 * production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 */
export const test_llm_coerce_nested_array_whole = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      numbers: {
        type: "array",
        items: {
          type: "number",
        },
      },
    },
    required: ["numbers"],
    additionalProperties: false,
    $defs: {},
  };
  const original: ISimpleArray = {
    numbers: [10, 20, 30, 40],
  };

  const corrupted = {
    numbers: JSON.stringify(original.numbers) as unknown,
  };

  const result = LlmJson.parse<ISimpleArray>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("numbers", result.data.numbers, [10, 20, 30, 40]);
  }
};
