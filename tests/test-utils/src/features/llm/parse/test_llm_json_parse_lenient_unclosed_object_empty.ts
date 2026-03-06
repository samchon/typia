import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_unclosed_object_empty = (): void => {
  const result = LlmJson.parse("{");
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, {});
};
