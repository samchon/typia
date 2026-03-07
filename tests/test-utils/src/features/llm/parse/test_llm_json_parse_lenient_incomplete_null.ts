import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_incomplete_null = (): void => {
  // Handle incomplete "null" keyword
  const result = LlmJson.parse('{"value": nul');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, { value: null });
};
