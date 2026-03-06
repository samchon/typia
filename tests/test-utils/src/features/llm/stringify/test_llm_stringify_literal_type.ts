import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface ILiteralProp {
  status: "active" | "inactive";
}

export const test_llm_stringify_literal_type = (): void => {
  const valid: ILiteralProp = { status: "active" };
  (valid as { status: unknown }).status = "unknown";
  const result = typia.validate<ILiteralProp>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains status path", output.includes("$input.status"), true);
  }
};
