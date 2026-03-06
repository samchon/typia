import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

interface IUrlProp {
  url: string & tags.Format<"url">;
}

export const test_llm_stringify_format_url = (): void => {
  const valid: IUrlProp = { url: "https://example.com" };
  (valid as { url: unknown }).url = "not-a-url";
  const result = typia.validate<IUrlProp>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains url path", output.includes("$input.url"), true);
  }
};
