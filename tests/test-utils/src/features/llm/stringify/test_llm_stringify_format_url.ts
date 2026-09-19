import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

interface IUrlProp {
  url: string & tags.Format<"url">;
}

export const test_llm_stringify_format_url = (): void => {
  const valid: IUrlProp = { url: "https://example.com" };
  (valid as { url: unknown }).url = "not-a-url";
  const result = typia.validate<IUrlProp>(valid);
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
      "contains url path",
      output.includes("$input.url"),
      true,
    );
  }
};
