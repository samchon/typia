import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface ILiteralProp {
  status: "active" | "inactive";
}

export const test_llm_stringify_literal_type = (): void => {
  const valid: ILiteralProp = { status: "active" };
  (valid as { status: unknown }).status = "unknown";
  const result = typia.validate<ILiteralProp>(valid);
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
      "contains status path",
      output.includes("$input.status"),
      true,
    );
  }
};
