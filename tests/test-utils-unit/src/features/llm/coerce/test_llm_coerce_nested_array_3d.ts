import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

interface ICube3D {
  cube: number[][][];
}

/**
 * Verifies schema-directed coercion for nested array 3d.
 *
 * This case checks that stringified outer and inner array levels preserve both
 * cube rows. Authored schema input isolates utility semantics from compiler
 * production; the original assertions remain intact.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse/coerce calls check that stringified outer and inner array levels preserve both cube rows; every original assertion title and outcome is preserved.
 * @evidence contracts/testing.md#independent-expectations Literal schema kinds are authored from the declared fixture shape, not produced by typia. Original values and explicit scalar, field or complete-array expectations establish the result independently of the conversion implementation; these assertions do not certify unasserted properties.
 * @evidence contracts/testing.md#distinguishing-cases The distinguishing contribution is that stringified outer and inner array levels preserve both cube rows. Complementary string/no-string, nullable/non-null and affirmative/negative cases run in the same direct population. This case does not establish malformed-input rejection, reference-cycle handling or the correctness of compiler-produced schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils-unit start registers this exported case with node:test under a plugin-free configuration and oracle. No native producer, installed consumer or host is needed for these assertions; transformer-to-utility assembly remains a separate boundary responsibility.
 */
export const test_llm_coerce_nested_array_3d = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      cube: {
        type: "array",
        items: {
          type: "array",
          items: {
            type: "array",
            items: {
              type: "number",
            },
          },
        },
      },
    },
    required: ["cube"],
    additionalProperties: false,
    $defs: {},
  };
  const original: ICube3D = {
    cube: [
      [
        [1, 2],
        [3, 4],
      ],
    ],
  };

  const corrupted = {
    cube: [
      JSON.stringify(
        original.cube[0]!.map((inner) => JSON.stringify(inner)),
      ) as unknown,
    ],
  };

  const result = LlmJson.parse<ICube3D>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("cube[0][0]", result.data.cube[0]![0], [1, 2]);
    TestEquality.equals("cube[0][1]", result.data.cube[0]![1], [3, 4]);
  }
};
