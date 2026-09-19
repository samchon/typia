import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

interface IEmailProp {
  email: string & tags.Format<"email">;
}

export const test_llm_stringify_format_email = (): void => {
  const valid: IEmailProp = { email: "test@example.com" };
  (valid as { email: unknown }).email = "not-an-email";
  const result = typia.validate<IEmailProp>(valid);
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
      "contains email path",
      output.includes("$input.email"),
      true,
    );
    TestEquality.equals(
      "contains format info",
      output.includes("Format"),
      true,
    );
  }
};
