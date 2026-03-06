import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

interface IMinLengthProp {
  name: string & tags.MinLength<3>;
}

export const test_llm_stringify_min_length = (): void => {
  const valid: IMinLengthProp = { name: "John" };
  (valid as { name: unknown }).name = "Jo";
  const result = typia.validate<IMinLengthProp>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains name path", output.includes("$input.name"), true);
  }
};
