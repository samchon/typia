import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

interface IIntegerProp {
  value: number & tags.Type<"uint32">;
}

export const test_llm_stringify_integer_constraint = (): void => {
  const valid: IIntegerProp = { value: 42 };
  (valid as { value: unknown }).value = 3.14;
  const result = typia.validate<IIntegerProp>(valid);
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
