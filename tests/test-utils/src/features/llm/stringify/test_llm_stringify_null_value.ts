import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface INonNullable {
  value: number;
}

export const test_llm_stringify_null_value = (): void => {
  const valid: INonNullable = { value: 42 };
  (valid as { value: unknown }).value = null;
  const result = typia.validate<INonNullable>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains value path", output.includes("$input.value"), true);
  }
};
