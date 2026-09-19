import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IArrayProp {
  scores: number[];
}

export const test_llm_stringify_array_element = (): void => {
  const valid: IArrayProp = { scores: [1, 2, 3] };
  (valid.scores as unknown[])[1] = "two";
  const result = typia.validate<IArrayProp>(valid);
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
      "contains array index path",
      output.includes("$input.scores[1]"),
      true,
    );
  }
};
