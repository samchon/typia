import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IMatrix2D {
  matrix: number[][];
}

/**
 * Verifies schema-directed coercion for nested array 2d.
 *
 * This case checks that two individually stringified rows preserve their exact
 * numeric contents. Authored schema input isolates utility semantics from
 * compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 */
export const test_llm_coerce_nested_array_2d = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      matrix: {
        type: "array",
        items: {
          type: "array",
          items: {
            type: "number",
          },
        },
      },
    },
    required: ["matrix"],
    additionalProperties: false,
    $defs: {},
  };
  const original: IMatrix2D = {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
    ],
  };

  const corrupted = {
    matrix: original.matrix.map((row) => JSON.stringify(row) as unknown),
  };

  const result = LlmJson.parse<IMatrix2D>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("matrix[0]", result.data.matrix[0], [1, 2, 3]);
    TestEquality.equals("matrix[1]", result.data.matrix[1], [4, 5, 6]);
  }
};
