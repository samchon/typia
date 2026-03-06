import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface ISpecialKey {
  "my-key": string;
  "another.key": number;
}

export const test_llm_stringify_special_chars_in_key = (): void => {
  const valid: ISpecialKey = { "my-key": "value", "another.key": 42 };
  (valid as { "another.key": unknown })["another.key"] = "wrong";
  const result = typia.validate<ISpecialKey>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
  }
};
