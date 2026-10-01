import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

interface ISimpleArray {
  numbers: number[];
}

/**
 * Verifies schema-directed coercion for nested array whole.
 *
 * This case checks that a whole stringified array recovers all four numbers in
 * order. Authored schema input isolates utility semantics from compiler
 * production; the original assertions remain intact.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse/coerce calls check that a whole stringified array recovers all four numbers in order; every original assertion title and outcome is preserved.
 * @evidence contracts/testing.md#independent-expectations Literal schema kinds are authored from the declared fixture shape, not produced by typia. Original values and explicit scalar, field or complete-array expectations establish the result independently of the conversion implementation; these assertions do not certify unasserted properties.
 * @evidence contracts/testing.md#distinguishing-cases The distinguishing contribution is that a whole stringified array recovers all four numbers in order. Complementary string/no-string, nullable/non-null and affirmative/negative cases run in the same direct population. This case does not establish malformed-input rejection, reference-cycle handling or the correctness of compiler-produced schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under a plugin-free configuration and oracle. No native producer, installed consumer or host is needed for these assertions; transformer-to-utility assembly remains a separate boundary responsibility.
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
