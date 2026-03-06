import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface ISimple {
  value: number;
}

export const test_llm_stringify_format_output = (): void => {
  const valid: ISimple = { value: 42 };
  (valid as { value: unknown }).value = "wrong";
  const result = typia.validate<ISimple>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("starts with code block", output.startsWith("```json"), true);
    TestValidator.equals("ends with code block", output.trim().endsWith("```"), true);
  }
};
