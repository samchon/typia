import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IPrimitiveProp {
  count: number;
}

export const test_llm_stringify_object_instead_of_primitive = (): void => {
  const valid: IPrimitiveProp = { count: 42 };
  (valid as { count: unknown }).count = { nested: "object" };
  const result = typia.validate<IPrimitiveProp>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains count path", output.includes("$input.count"), true);
  }
};
