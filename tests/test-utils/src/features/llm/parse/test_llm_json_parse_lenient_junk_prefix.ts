import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_junk_prefix = (): void => {
  // LLM often adds explanatory text before JSON
  const result = LlmJson.parse('Here is the JSON you requested: {"name": "John"}');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, { name: "John" });
};
