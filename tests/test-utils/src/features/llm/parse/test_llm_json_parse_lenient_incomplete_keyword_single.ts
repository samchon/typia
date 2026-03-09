import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_incomplete_keyword_single = (): void => {
  // Single character keywords should be inferred
  // "t" -> true, "f" -> false
  const resultT = LlmJson.parse('{"a": t');
  TestValidator.equals("success_t", resultT.success, true);
  if (resultT.success) TestValidator.equals("value_t", resultT.data, { a: true });

  const resultF = LlmJson.parse('{"a": f');
  TestValidator.equals("success_f", resultF.success, true);
  if (resultF.success) TestValidator.equals("value_f", resultF.data, { a: false });

  // "n" is NOT handled (neither null nor false) - intentionally excluded
  // "nu" and longer are treated as null
  const resultNu = LlmJson.parse('{"a": nu');
  TestValidator.equals("success_nu", resultNu.success, true);
  if (resultNu.success) TestValidator.equals("value_nu", resultNu.data, { a: null });
};
