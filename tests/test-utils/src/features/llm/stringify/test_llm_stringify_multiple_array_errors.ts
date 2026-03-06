import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface INumberArray {
  numbers: number[];
}

export const test_llm_stringify_multiple_array_errors = (): void => {
  const valid: INumberArray = { numbers: [1, 2, 3, 4, 5] };
  (valid.numbers as unknown[])[0] = "one";
  (valid.numbers as unknown[])[2] = "three";
  (valid.numbers as unknown[])[4] = "five";
  const result = typia.validate<INumberArray>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains first error", output.includes("$input.numbers[0]"), true);
    TestValidator.equals("contains second error", output.includes("$input.numbers[2]"), true);
    TestValidator.equals("contains third error", output.includes("$input.numbers[4]"), true);
  }
};
