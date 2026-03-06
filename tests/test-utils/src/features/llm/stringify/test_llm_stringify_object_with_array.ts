import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IObjectWithArray {
  id: number;
  tags: string[];
}

export const test_llm_stringify_object_with_array = (): void => {
  const valid: IObjectWithArray = { id: 1, tags: ["a", "b", "c"] };
  (valid.tags as unknown[])[2] = 999;
  const result = typia.validate<IObjectWithArray>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains tags path", output.includes("$input.tags[2]"), true);
  }
};
