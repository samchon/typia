import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

interface IMinItemsProp {
  items: (string & tags.MinLength<1>)[] & tags.MinItems<2>;
}

export const test_llm_stringify_min_items = (): void => {
  const valid: IMinItemsProp = { items: ["a", "b", "c"] };
  (valid as { items: unknown }).items = ["single"];
  const result = typia.validate<IMinItemsProp>(valid);
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
