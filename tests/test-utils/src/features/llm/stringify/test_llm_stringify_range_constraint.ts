import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

interface IRangeProp {
  value: number & tags.Minimum<0> & tags.Maximum<100>;
}

export const test_llm_stringify_range_constraint = (): void => {
  const valid: IRangeProp = { value: 50 };
  (valid as { value: unknown }).value = 150;
  const result = typia.validate<IRangeProp>(valid);
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
