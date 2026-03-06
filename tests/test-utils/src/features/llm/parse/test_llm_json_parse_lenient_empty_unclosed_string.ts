import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_empty_unclosed_string = (): void => {
  const result = LlmJson.parse('"');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, "");
};
