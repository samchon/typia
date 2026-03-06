import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IExpectsArray {
  data: number[];
}

export const test_llm_stringify_object_expected_array = (): void => {
  const valid: IExpectsArray = { data: [1, 2, 3] };
  (valid as { data: unknown }).data = { value: 123 };
  const result = typia.validate<IExpectsArray>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains data path", output.includes("$input.data"), true);
  }
};
