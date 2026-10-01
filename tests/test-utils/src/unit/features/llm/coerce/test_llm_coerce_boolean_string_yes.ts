import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

interface IBool {
  flag: boolean;
}

/**
 * Verifies schema-directed coercion for boolean string yes.
 *
 * This case checks that yes, YES, y and on all convert to true, complementing
 * the negative spelling case. Authored schema input isolates utility semantics
 * from compiler production; the original assertions remain intact.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse/coerce calls check that yes, YES, y and on all convert to true, complementing the negative spelling case.
 * @evidence contracts/testing.md#independent-expectations Literal schema kinds are authored from the declared fixture shape, not produced by typia. Authored values and explicit scalar, field or complete-array expectations establish the result independently of the conversion implementation; these assertions do not certify unasserted properties.
 * @evidence contracts/testing.md#distinguishing-cases The distinguishing contribution is that yes, YES, y and on all convert to true, complementing the negative spelling case. Complementary string/no-string, nullable/non-null and affirmative/negative cases run in the same direct population. This case does not establish malformed-input rejection, reference-cycle handling or the correctness of compiler-produced schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under a plugin-free configuration and oracle. No native producer, installed consumer or host is needed for these assertions; transformer-to-utility assembly remains a separate boundary responsibility.
 */
export const test_llm_coerce_boolean_string_yes = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      flag: {
        type: "boolean",
      },
    },
    required: ["flag"],
    additionalProperties: false,
    $defs: {},
  };

  // Test "yes" -> true
  const yes = { flag: "yes" as unknown };
  const result1 = LlmJson.coerce<IBool>(yes, parameters);
  TestEquality.equals("yes -> true", result1.flag, true);

  // Test "YES" -> true (case insensitive)
  const YES = { flag: "YES" as unknown };
  const result2 = LlmJson.coerce<IBool>(YES, parameters);
  TestEquality.equals("YES -> true", result2.flag, true);

  // Test "y" -> true
  const y = { flag: "y" as unknown };
  const result3 = LlmJson.coerce<IBool>(y, parameters);
  TestEquality.equals("y -> true", result3.flag, true);

  // Test "on" -> true
  const on = { flag: "on" as unknown };
  const result4 = LlmJson.coerce<IBool>(on, parameters);
  TestEquality.equals("on -> true", result4.flag, true);
};
