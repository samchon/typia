import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_junk_multiline = (): void => {
  // LLM often adds newlines and formatting before JSON
  const result = LlmJson.parse('\n\n***\n{"key": "value"}');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, { key: "value" });
};
