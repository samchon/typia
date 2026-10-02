import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IArray {
  items: number[];
}

/**
 * Verifies schema-directed coercion for double stringify array.
 *
 * This case checks that a whole stringified numeric array retains all three
 * elements in order. Authored schema input isolates utility semantics from
 * compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 */
export const test_llm_coerce_double_stringify_array = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      items: {
        type: "array",
        items: {
          type: "number",
        },
      },
    },
    required: ["items"],
    additionalProperties: false,
    $defs: {},
  };
  const original: IArray = { items: [1, 2, 3] };

  const corrupted = {
    items: JSON.stringify(original.items) as unknown,
  };

  const result = LlmJson.parse<IArray>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("items", result.data.items, [1, 2, 3]);
  }
};
