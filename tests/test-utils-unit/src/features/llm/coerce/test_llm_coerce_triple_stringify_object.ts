import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

interface IObject {
  data: {
    id: number;
    name: string;
  };
}

/**
 * Verifies schema-directed coercion for triple stringify object.
 *
 * This case checks that two nested string encodings recover both the numeric
 * identifier and unchanged text name. Authored schema input isolates utility
 * semantics from compiler production; the original assertions remain intact.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse/coerce calls check that two nested string encodings recover both the numeric identifier and unchanged text name; every original assertion title and outcome is preserved.
 * @evidence contracts/testing.md#independent-expectations Literal schema kinds are authored from the declared fixture shape, not produced by typia. Original values and explicit scalar, field or complete-array expectations establish the result independently of the conversion implementation; these assertions do not certify unasserted properties.
 * @evidence contracts/testing.md#distinguishing-cases The distinguishing contribution is that two nested string encodings recover both the numeric identifier and unchanged text name. Complementary string/no-string, nullable/non-null and affirmative/negative cases run in the same direct population. This case does not establish malformed-input rejection, reference-cycle handling or the correctness of compiler-produced schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils-unit start registers this exported case with node:test under a plugin-free configuration and oracle. No native producer, installed consumer or host is needed for these assertions; transformer-to-utility assembly remains a separate boundary responsibility.
 */
export const test_llm_coerce_triple_stringify_object = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      data: {
        type: "object",
        properties: {
          id: {
            type: "number",
          },
          name: {
            type: "string",
          },
        },
        required: ["id", "name"],
        additionalProperties: false,
      },
    },
    required: ["data"],
    additionalProperties: false,
    $defs: {},
  };
  const original: IObject = { data: { id: 1, name: "test" } };

  const corrupted = {
    data: JSON.stringify(JSON.stringify(original.data)) as unknown,
  };

  const result = LlmJson.parse<IObject>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("data.id", result.data.data.id, 1);
    TestEquality.equals("data.name", result.data.data.name, "test");
  }
};
