import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_partial_null_nul = (): void => {
  const result = LlmJson.parse("nul");
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, null);
};
