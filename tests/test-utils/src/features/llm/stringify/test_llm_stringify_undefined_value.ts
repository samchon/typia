import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IRequiredField {
  name: string;
  value: number;
}

export const test_llm_stringify_undefined_value = (): void => {
  const valid: IRequiredField = { name: "test", value: 42 };
  (valid as { value: unknown }).value = undefined;
  const result = typia.validate<IRequiredField>(valid);
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
