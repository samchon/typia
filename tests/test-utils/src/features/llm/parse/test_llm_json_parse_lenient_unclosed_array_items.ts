import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_unclosed_array_items = (): void => {
  const result = LlmJson.parse("[1, 2, 3");
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, [1, 2, 3]);
};
