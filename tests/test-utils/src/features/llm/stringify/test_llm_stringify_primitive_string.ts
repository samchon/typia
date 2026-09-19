import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IStringProp {
  name: string;
}

export const test_llm_stringify_primitive_string = (): void => {
  const valid: IStringProp = { name: "John" };
  (valid as { name: unknown }).name = 12345;
  const result = typia.validate<IStringProp>(valid);
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
