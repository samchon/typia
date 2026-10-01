import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

interface IBool {
  flag: boolean;
}

/**
 * Verifies schema-directed coercion for boolean string no.
 *
 * This case checks that no, NO, n and off all convert to false, complementing
 * the affirmative spelling case. Authored schema input isolates utility
 * semantics from compiler production; the original assertions remain intact.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse/coerce calls check that no, NO, n and off all convert to false, complementing the affirmative spelling case; every original assertion title and outcome is preserved.
 * @evidence contracts/testing.md#independent-expectations Literal schema kinds are authored from the declared fixture shape, not produced by typia. Original values and explicit scalar, field or complete-array expectations establish the result independently of the conversion implementation; these assertions do not certify unasserted properties.
 * @evidence contracts/testing.md#distinguishing-cases The distinguishing contribution is that no, NO, n and off all convert to false, complementing the affirmative spelling case. Complementary string/no-string, nullable/non-null and affirmative/negative cases run in the same direct population. This case does not establish malformed-input rejection, reference-cycle handling or the correctness of compiler-produced schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under a plugin-free configuration and oracle. No native producer, installed consumer or host is needed for these assertions; transformer-to-utility assembly remains a separate boundary responsibility.
 */
export const test_llm_coerce_boolean_string_no = (): void => {
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

  // Test "no" -> false
  const no = { flag: "no" as unknown };
  const result1 = LlmJson.coerce<IBool>(no, parameters);
  TestEquality.equals("no -> false", result1.flag, false);

  // Test "NO" -> false (case insensitive)
  const NO = { flag: "NO" as unknown };
  const result2 = LlmJson.coerce<IBool>(NO, parameters);
  TestEquality.equals("NO -> false", result2.flag, false);

  // Test "n" -> false (coerce handles this separately from lenient parser)
  const n = { flag: "n" as unknown };
  const result3 = LlmJson.coerce<IBool>(n, parameters);
  TestEquality.equals("n -> false", result3.flag, false);

  // Test "off" -> false
  const off = { flag: "off" as unknown };
  const result4 = LlmJson.coerce<IBool>(off, parameters);
  TestEquality.equals("off -> false", result4.flag, false);
};
