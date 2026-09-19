import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface ISimple {
  value: number;
}

export const test_llm_stringify_format_output = (): void => {
  const valid: ISimple = { value: 42 };
  (valid as { value: unknown }).value = "wrong";
  const result = typia.validate<ISimple>(valid);
  TestEquality.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestEquality.equals(
      "starts with code block",
      output.startsWith("```json"),
      true,
    );
    TestEquality.equals(
      "ends with code block",
      output.trim().endsWith("```"),
      true,
    );
  }
};
