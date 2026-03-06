import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

interface IRangeProp {
  value: number & tags.Minimum<0> & tags.Maximum<100>;
}

export const test_llm_stringify_range_constraint = (): void => {
  const valid: IRangeProp = { value: 50 };
  (valid as { value: unknown }).value = 150;
  const result = typia.validate<IRangeProp>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains value path", output.includes("$input.value"), true);
  }
};
