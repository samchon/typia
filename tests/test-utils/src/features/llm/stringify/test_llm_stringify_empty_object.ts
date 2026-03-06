import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IRequired {
  name: string;
  age: number;
}

export const test_llm_stringify_empty_object = (): void => {
  const invalid: unknown = {};
  const result = typia.validate<IRequired>(invalid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains name path", output.includes("$input.name"), true);
    TestValidator.equals("contains age path", output.includes("$input.age"), true);
  }
};
