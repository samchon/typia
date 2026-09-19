import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IWithArray {
  items: string[];
}

export const test_llm_stringify_empty_array = (): void => {
  const valid: IWithArray = { items: ["a", "b"] };
  (valid as { items: unknown }).items = "not-an-array";
  const result = typia.validate<IWithArray>(valid);
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
      "contains items path",
      output.includes("$input.items"),
      true,
    );
  }
};
