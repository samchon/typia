import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

interface IUnionWithNestedCoercion {
  data: { nested: { value: number } } | null;
}

/**
 * Verifies schema-directed coercion for anyof nested coercion.
 *
 * This case checks that a nullable object branch recursively converts its
 * nested stringified object and numeric leaf. Authored schema input isolates
 * utility semantics from compiler production; the original assertions remain
 * intact.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse/coerce calls check that a nullable object branch recursively converts its nested stringified object and numeric leaf.
 * @evidence contracts/testing.md#independent-expectations Literal schema kinds are authored from the declared fixture shape, not produced by typia. Authored values and explicit scalar, field or complete-array expectations establish the result independently of the conversion implementation; these assertions do not certify unasserted properties.
 * @evidence contracts/testing.md#distinguishing-cases The distinguishing contribution is that a nullable object branch recursively converts its nested stringified object and numeric leaf. Complementary string/no-string, nullable/non-null and affirmative/negative cases run in the same direct population. This case does not establish malformed-input rejection, reference-cycle handling or the correctness of compiler-produced schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under a plugin-free configuration and oracle. No native producer, installed consumer or host is needed for these assertions; transformer-to-utility assembly remains a separate boundary responsibility.
 */
export const test_llm_coerce_anyof_nested_coercion = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      data: {
        anyOf: [
          {
            type: "object",
            properties: {
              nested: {
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
            required: ["nested"],
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
  const original: IUnionWithNestedCoercion = {
    data: { nested: { value: 456 } },
  };

  const corrupted = {
    data: JSON.stringify({
      nested: JSON.stringify(original.data!.nested),
    }),
  };

  const result = LlmJson.parse<IUnionWithNestedCoercion>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals(
      "data.nested.value",
      result.data.data?.nested.value,
      456,
    );
  }
};
