import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

interface ISimpleNested {
  outer: {
    inner: {
      value: number;
    };
  };
}

/**
 * Verifies schema-directed coercion for nested object all levels.
 *
 * This case checks that two stringified object levels recover the deepest
 * numeric value. Authored schema input isolates utility semantics from compiler
 * production; the original assertions remain intact.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse/coerce calls check that two stringified object levels recover the deepest numeric value.
 * @evidence contracts/testing.md#independent-expectations Literal schema kinds are authored from the declared fixture shape, not produced by typia. Authored values and explicit scalar, field or complete-array expectations establish the result independently of the conversion implementation; these assertions do not certify unasserted properties.
 * @evidence contracts/testing.md#distinguishing-cases The distinguishing contribution is that two stringified object levels recover the deepest numeric value. Complementary string/no-string, nullable/non-null and affirmative/negative cases run in the same direct population. This case does not establish malformed-input rejection, reference-cycle handling or the correctness of compiler-produced schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under a plugin-free configuration and oracle. No native producer, installed consumer or host is needed for these assertions; transformer-to-utility assembly remains a separate boundary responsibility.
 */
export const test_llm_coerce_nested_object_all_levels = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      outer: {
        type: "object",
        properties: {
          inner: {
            type: "object",
            properties: {
              value: {
                type: "number",
              },
            },
            required: ["value"],
            additionalProperties: false,
          },
        },
        required: ["inner"],
        additionalProperties: false,
      },
    },
    required: ["outer"],
    additionalProperties: false,
    $defs: {},
  };
  const original: ISimpleNested = {
    outer: {
      inner: { value: 777 },
    },
  };

  const corrupted = {
    outer: JSON.stringify({
      inner: JSON.stringify(original.outer.inner),
    }),
  };

  const result = LlmJson.parse<ISimpleNested>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("value", result.data.outer.inner.value, 777);
  }
};
