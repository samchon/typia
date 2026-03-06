import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IObject {
  value: number;
}

export const test_llm_stringify_root_level_error = (): void => {
  const invalid: unknown = "not-an-object";
  const result = typia.validate<IObject>(invalid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
  }
};
