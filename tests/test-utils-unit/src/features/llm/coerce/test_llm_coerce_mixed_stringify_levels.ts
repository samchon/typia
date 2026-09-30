import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

interface IMixed {
  double: number;
  triple: boolean;
  normal: string;
}

/**
 * Verifies schema-directed coercion for mixed stringify levels.
 *
 * This case checks that numeric and boolean leaves with different encoding
 * depths convert while ordinary text remains intact. Authored schema input
 * isolates utility semantics from compiler production; the original assertions
 * remain intact.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse/coerce calls check that numeric and boolean leaves with different encoding depths convert while ordinary text remains intact; every original assertion title and outcome is preserved.
 * @evidence contracts/testing.md#independent-expectations Literal schema kinds are authored from the declared fixture shape, not produced by typia. Original values and explicit scalar, field or complete-array expectations establish the result independently of the conversion implementation; these assertions do not certify unasserted properties.
 * @evidence contracts/testing.md#distinguishing-cases The distinguishing contribution is that numeric and boolean leaves with different encoding depths convert while ordinary text remains intact. Complementary string/no-string, nullable/non-null and affirmative/negative cases run in the same direct population. This case does not establish malformed-input rejection, reference-cycle handling or the correctness of compiler-produced schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils-unit start registers this exported case with node:test under a plugin-free configuration and oracle. No native producer, installed consumer or host is needed for these assertions; transformer-to-utility assembly remains a separate boundary responsibility.
 */
export const test_llm_coerce_mixed_stringify_levels = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      double: {
        type: "number",
      },
      triple: {
        type: "boolean",
      },
      normal: {
        type: "string",
      },
    },
    required: ["double", "triple", "normal"],
    additionalProperties: false,
    $defs: {},
  };
  const original: IMixed = { double: 100, triple: false, normal: "hello" };

  const corrupted = {
    double: JSON.stringify(original.double) as unknown,
    triple: JSON.stringify(JSON.stringify(original.triple)) as unknown,
    normal: original.normal,
  };

  const result = LlmJson.parse<IMixed>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("double", result.data.double, 100);
    TestEquality.equals("triple", result.data.triple, false);
    TestEquality.equals("normal", result.data.normal, "hello");
  }
};
