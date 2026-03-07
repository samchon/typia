import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_no_json = (): void => {
  // When no JSON is found, return empty object
  const result = LlmJson.parse("just plain text without any JSON");
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, {});
};
