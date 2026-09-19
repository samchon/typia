import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IExpectsObject {
  data: { x: number; y: number };
}

export const test_llm_stringify_array_expected_object = (): void => {
  const valid: IExpectsObject = { data: { x: 1, y: 2 } };
  (valid.data as { x: unknown }).x = "not-a-number";
  const result = typia.validate<IExpectsObject>(valid);
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
      "contains data.x path",
      output.includes("$input.data.x"),
      true,
    );
  }
};
