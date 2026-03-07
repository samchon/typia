import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_incomplete_true = (): void => {
  // Handle incomplete "true" keyword
  const result = LlmJson.parse('{"flag": tru');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, { flag: true });
};
