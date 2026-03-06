import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IMatrix2D {
  matrix: number[][];
}

export const test_llm_coerce_nested_array_2d = (): void => {
  const parameters = typia.llm.parameters<IMatrix2D>();
  const original: IMatrix2D = {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
    ],
  };

  const corrupted = {
    matrix: original.matrix.map((row) => JSON.stringify(row) as unknown),
  };

  const result = LlmJson.parse<IMatrix2D>(JSON.stringify(corrupted), parameters);
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("matrix[0]", result.data.matrix[0], [1, 2, 3]);
    TestValidator.equals("matrix[1]", result.data.matrix[1], [4, 5, 6]);
  }
};
