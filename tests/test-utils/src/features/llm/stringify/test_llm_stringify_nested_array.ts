import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface INestedArray {
  matrix: number[][];
}

export const test_llm_stringify_nested_array = (): void => {
  const valid: INestedArray = { matrix: [[1, 2], [3, 4]] };
  (valid.matrix[0] as unknown[])[1] = "two";
  const result = typia.validate<INestedArray>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains nested array path", output.includes("$input.matrix[0][1]"), true);
  }
};
