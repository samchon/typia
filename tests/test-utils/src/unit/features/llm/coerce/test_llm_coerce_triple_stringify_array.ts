import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

interface IArray {
  items: number[];
}

/**
 * Verifies schema-directed coercion for triple stringify array.
 *
 * This case checks that two nested string encodings preserve all three array
 * elements. Authored schema input isolates utility semantics from compiler
 * production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse/coerce calls check that two nested string encodings preserve all three array elements.
 * @evidence contracts/testing.md#independent-expectations Literal schema kinds are authored from the declared fixture shape, not produced by typia. Authored values and explicit scalar, field or complete-array expectations establish the result independently of the conversion implementation; these assertions do not certify unasserted properties.
 * @evidence contracts/testing.md#distinguishing-cases The distinguishing contribution is that two nested string encodings preserve all three array elements. Complementary string/no-string, nullable/non-null and affirmative/negative cases run in the same direct population. This case does not establish malformed-input rejection, reference-cycle handling or the correctness of compiler-produced schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under a plugin-free configuration and oracle. No native producer, installed consumer or host is needed for these assertions; transformer-to-utility assembly remains a separate boundary responsibility.
 */
export const test_llm_coerce_triple_stringify_array = (): void => {
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
  const original: IArray = { items: [10, 20, 30] };

  const corrupted = {
    items: JSON.stringify(JSON.stringify(original.items)) as unknown,
  };

  const result = LlmJson.parse<IArray>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("items", result.data.items, [10, 20, 30]);
  }
};
