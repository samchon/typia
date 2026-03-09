import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_empty = (): void => {
  // Empty input is not valid JSON
  const result = LlmJson.parse("");
  TestValidator.equals("success", result.success, false);
};
