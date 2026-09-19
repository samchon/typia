import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IUnionProp {
  value: string | number;
}

export const test_llm_stringify_union_type = (): void => {
  const valid: IUnionProp = { value: "hello" };
  (valid as { value: unknown }).value = true;
  const result = typia.validate<IUnionProp>(valid);
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
      "contains value path",
      output.includes("$input.value"),
      true,
    );
  }
};
