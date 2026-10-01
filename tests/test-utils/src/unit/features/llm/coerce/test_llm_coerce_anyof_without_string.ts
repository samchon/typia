import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

interface IWithoutStringUnion {
  value: number | boolean;
}

/**
 * Verifies schema-directed coercion for anyof without string.
 *
 * This case checks that removing the string alternative permits numeric-looking
 * text to become a number. Authored schema input isolates utility semantics
 * from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse/coerce calls check that removing the string alternative permits numeric-looking text to become a number.
 * @evidence contracts/testing.md#independent-expectations Literal schema kinds are authored from the declared fixture shape, not produced by typia. Authored values and explicit scalar, field or complete-array expectations establish the result independently of the conversion implementation; these assertions do not certify unasserted properties.
 * @evidence contracts/testing.md#distinguishing-cases The distinguishing contribution is that removing the string alternative permits numeric-looking text to become a number. Complementary string/no-string, nullable/non-null and affirmative/negative cases run in the same direct population. This case does not establish malformed-input rejection, reference-cycle handling or the correctness of compiler-produced schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under a plugin-free configuration and oracle. No native producer, installed consumer or host is needed for these assertions; transformer-to-utility assembly remains a separate boundary responsibility.
 */
export const test_llm_coerce_anyof_without_string = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      value: {
        anyOf: [
          {
            type: "number",
          },
          {
            type: "boolean",
          },
        ],
      },
    },
    required: ["value"],
    additionalProperties: false,
    $defs: {},
  };

  const corrupted = { value: "42" as unknown };

  const result = LlmJson.parse<IWithoutStringUnion>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("value parsed", result.data.value, 42);
  }
};
