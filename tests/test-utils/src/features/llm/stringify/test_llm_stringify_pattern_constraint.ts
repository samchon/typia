import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

interface IPatternProp {
  code: string & tags.Pattern<"^[A-Z]{3}$">;
}

export const test_llm_stringify_pattern_constraint = (): void => {
  const valid: IPatternProp = { code: "ABC" };
  (valid as { code: unknown }).code = "abc123";
  const result = typia.validate<IPatternProp>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains code path", output.includes("$input.code"), true);
  }
};
