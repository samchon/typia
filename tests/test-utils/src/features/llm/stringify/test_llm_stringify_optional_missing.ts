import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IRequiredProps {
  name: string;
  email: string;
}

export const test_llm_stringify_optional_missing = (): void => {
  const invalid: unknown = { name: "John" };
  const result = typia.validate<IRequiredProps>(invalid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains email path", output.includes("$input.email"), true);
  }
};
