import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IExpectsArray {
  data: number[];
}

export const test_llm_stringify_object_expected_array = (): void => {
  const valid: IExpectsArray = { data: [1, 2, 3] };
  (valid as { data: unknown }).data = { value: 123 };
  const result = typia.validate<IExpectsArray>(valid);
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
      "contains data path",
      output.includes("$input.data"),
      true,
    );
  }
};
