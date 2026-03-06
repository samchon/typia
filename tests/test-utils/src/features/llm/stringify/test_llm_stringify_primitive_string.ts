import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IStringProp {
  name: string;
}

export const test_llm_stringify_primitive_string = (): void => {
  const valid: IStringProp = { name: "John" };
  (valid as { name: unknown }).name = 12345;
  const result = typia.validate<IStringProp>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains name path", output.includes("$input.name"), true);
  }
};
