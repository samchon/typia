import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IBooleanProp {
  active: boolean;
}

export const test_llm_stringify_primitive_boolean = (): void => {
  const valid: IBooleanProp = { active: true };
  (valid as { active: unknown }).active = "yes";
  const result = typia.validate<IBooleanProp>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains active path", output.includes("$input.active"), true);
  }
};
