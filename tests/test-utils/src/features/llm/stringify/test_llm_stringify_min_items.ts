import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

interface IMinItemsProp {
  items: (string & tags.MinLength<1>)[] & tags.MinItems<2>;
}

export const test_llm_stringify_min_items = (): void => {
  const valid: IMinItemsProp = { items: ["a", "b", "c"] };
  (valid as { items: unknown }).items = ["single"];
  const result = typia.validate<IMinItemsProp>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains items path", output.includes("$input.items"), true);
  }
};
