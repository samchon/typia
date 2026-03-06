import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IWithArray {
  items: string[];
}

export const test_llm_stringify_empty_array = (): void => {
  const valid: IWithArray = { items: ["a", "b"] };
  (valid as { items: unknown }).items = "not-an-array";
  const result = typia.validate<IWithArray>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains items path", output.includes("$input.items"), true);
  }
};
