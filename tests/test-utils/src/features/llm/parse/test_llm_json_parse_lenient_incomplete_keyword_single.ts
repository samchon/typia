import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_incomplete_keyword_single = (): void => {
  // Single character keywords should be inferred
  // "t" -> true, "f" -> false, "n" -> null
  const resultT = LlmJson.parse('{"a": t');
  TestValidator.equals("success_t", resultT.success, true);
  if (resultT.success) TestValidator.equals("value_t", resultT.data, { a: true });

  const resultF = LlmJson.parse('{"a": f');
  TestValidator.equals("success_f", resultF.success, true);
  if (resultF.success) TestValidator.equals("value_f", resultF.data, { a: false });

  const resultN = LlmJson.parse('{"a": n');
  TestValidator.equals("success_n", resultN.success, true);
  if (resultN.success) TestValidator.equals("value_n", resultN.data, { a: null });
};
