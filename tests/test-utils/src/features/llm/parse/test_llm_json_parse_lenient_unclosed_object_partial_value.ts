import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_unclosed_object_partial_value = (): void => {
  const result = LlmJson.parse('{"name": "Jo');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, { name: "Jo" });
};
