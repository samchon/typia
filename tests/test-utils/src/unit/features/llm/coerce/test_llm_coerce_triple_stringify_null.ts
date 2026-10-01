import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

interface INull {
  nothing: null;
}

/**
 * Verifies schema-directed coercion for triple stringify null.
 *
 * This case checks that two nested string encodings recover null rather than
 * retaining JSON text. Authored schema input isolates utility semantics from
 * compiler production; the original assertions remain intact.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse/coerce calls check that two nested string encodings recover null rather than retaining JSON text.
 * @evidence contracts/testing.md#independent-expectations Literal schema kinds are authored from the declared fixture shape, not produced by typia. Authored values and explicit scalar, field or complete-array expectations establish the result independently of the conversion implementation; these assertions do not certify unasserted properties.
 * @evidence contracts/testing.md#distinguishing-cases The distinguishing contribution is that two nested string encodings recover null rather than retaining JSON text. Complementary string/no-string, nullable/non-null and affirmative/negative cases run in the same direct population. This case does not establish malformed-input rejection, reference-cycle handling or the correctness of compiler-produced schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under a plugin-free configuration and oracle. No native producer, installed consumer or host is needed for these assertions; transformer-to-utility assembly remains a separate boundary responsibility.
 */
export const test_llm_coerce_triple_stringify_null = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      nothing: {
        type: "null",
      },
    },
    required: ["nothing"],
    additionalProperties: false,
    $defs: {},
  };
  const original: INull = { nothing: null };

  const corrupted = {
    nothing: JSON.stringify(JSON.stringify(original.nothing)) as unknown,
  };

  const result = LlmJson.parse<INull>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("nothing", result.data.nothing, null);
  }
};
