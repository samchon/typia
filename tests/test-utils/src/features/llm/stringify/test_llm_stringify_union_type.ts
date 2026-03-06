import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IUnionProp {
  value: string | number;
}

export const test_llm_stringify_union_type = (): void => {
  const valid: IUnionProp = { value: "hello" };
  (valid as { value: unknown }).value = true;
  const result = typia.validate<IUnionProp>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains value path", output.includes("$input.value"), true);
  }
};
