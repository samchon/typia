import { TestEquality } from "@typia/template/equality";
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
  TestEquality.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestEquality.equals(
      "contains code block",
      output.includes("```json"),
      true,
    );
    TestEquality.equals(
      "contains error marker",
      output.includes("// ❌"),
      true,
    );
    TestEquality.equals(
      "contains tags path",
      output.includes("$input.tags[2]"),
      true,
    );
  }
};
