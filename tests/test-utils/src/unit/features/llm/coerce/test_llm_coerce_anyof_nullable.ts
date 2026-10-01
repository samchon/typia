import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

interface INullableObject {
  data: { value: number } | null;
}

/**
 * Verifies schema-directed coercion for anyof nullable.
 *
 * This case checks that a non-null object in a nullable union recovers its
 * numeric member. Authored schema input isolates utility semantics from
 * compiler production; the original assertions remain intact.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse/coerce calls check that a non-null object in a nullable union recovers its numeric member; every original assertion title and outcome is preserved.
 * @evidence contracts/testing.md#independent-expectations Literal schema kinds are authored from the declared fixture shape, not produced by typia. Original values and explicit scalar, field or complete-array expectations establish the result independently of the conversion implementation; these assertions do not certify unasserted properties.
 * @evidence contracts/testing.md#distinguishing-cases The distinguishing contribution is that a non-null object in a nullable union recovers its numeric member. Complementary string/no-string, nullable/non-null and affirmative/negative cases run in the same direct population. This case does not establish malformed-input rejection, reference-cycle handling or the correctness of compiler-produced schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under a plugin-free configuration and oracle. No native producer, installed consumer or host is needed for these assertions; transformer-to-utility assembly remains a separate boundary responsibility.
 */
export const test_llm_coerce_anyof_nullable = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      data: {
        anyOf: [
          {
            type: "object",
            properties: {
              value: {
                type: "number",
              },
            },
            required: ["value"],
            additionalProperties: false,
          },
          {
            type: "null",
          },
        ],
      },
    },
    required: ["data"],
    additionalProperties: false,
    $defs: {},
  };
  const original: INullableObject = {
    data: { value: 999 },
  };

  const corrupted = {
    data: JSON.stringify(original.data) as unknown,
  };

  const result = LlmJson.parse<INullableObject>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("data.value", result.data.data?.value, 999);
  }
};
