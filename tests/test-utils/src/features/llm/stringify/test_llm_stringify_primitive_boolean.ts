import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IBooleanProp {
  active: boolean;
}

export const test_llm_stringify_primitive_boolean = (): void => {
  const valid: IBooleanProp = { active: true };
  (valid as { active: unknown }).active = "yes";
  const result = typia.validate<IBooleanProp>(valid);
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
      "contains active path",
      output.includes("$input.active"),
      true,
    );
  }
};
