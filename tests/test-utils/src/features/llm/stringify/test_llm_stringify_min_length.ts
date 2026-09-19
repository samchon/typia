import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

interface IMinLengthProp {
  name: string & tags.MinLength<3>;
}

export const test_llm_stringify_min_length = (): void => {
  const valid: IMinLengthProp = { name: "John" };
  (valid as { name: unknown }).name = "Jo";
  const result = typia.validate<IMinLengthProp>(valid);
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
      "contains name path",
      output.includes("$input.name"),
      true,
    );
  }
};
