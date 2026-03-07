import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_junk_prefix_array = (): void => {
  // LLM often adds explanatory text before JSON arrays
  const result = LlmJson.parse("Sure! Here's the list: [1, 2, 3]");
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, [1, 2, 3]);
};
