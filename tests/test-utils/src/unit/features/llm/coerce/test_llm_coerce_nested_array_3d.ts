import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface ICube3D {
  cube: number[][][];
}

/**
 * Verifies schema-directed coercion for nested array 3d.
 *
 * This case checks that stringified outer and inner array levels preserve both
 * cube rows. Authored schema input isolates utility semantics from compiler
 * production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
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
