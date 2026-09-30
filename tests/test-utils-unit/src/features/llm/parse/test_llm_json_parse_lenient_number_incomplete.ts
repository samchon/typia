import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that incomplete numbers retain defined recovery values.
 *
 * EOF truncation distinguishes a recoverable trailing decimal from unfinished
 * sign or exponent text.
 *
 * 1. Exercise minus-only, trailing decimal, incomplete exponent and exponent sign,
 *    with literal recovered zero/one expectations.
 * 2. Compare the retained results and original assertion outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions, preserving every original input, assertion title and outcome.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns minus-only, trailing decimal, incomplete exponent and exponent sign, with literal recovered zero/one expectations; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils-unit start explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; the former transformed-suite entry is removed and no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_number_incomplete = (): void => {
  // Incomplete negative (just minus sign) - Number("-") = NaN -> 0
  const result1 = LlmJson.parse('{"value": -');
  TestEquality.equals("success1", result1.success, true);
  if (result1.success)
    TestEquality.equals("value1", result1.data, { value: 0 });

  // Incomplete decimal (trailing dot) - Number("1.") = 1
  const result2 = LlmJson.parse('{"value": 1.');
  TestEquality.equals("success2", result2.success, true);
  if (result2.success)
    TestEquality.equals("value2", result2.data, { value: 1 });

  // Incomplete exponent - Number("1e") = NaN -> 0
  const result3 = LlmJson.parse('{"value": 1e');
  TestEquality.equals("success3", result3.success, true);
  if (result3.success)
    TestEquality.equals("value3", result3.data, { value: 0 });

  // Incomplete exponent with sign - Number("1e-") = NaN -> 0
  const result4 = LlmJson.parse('{"value": 1e-');
  TestEquality.equals("success4", result4.success, true);
  if (result4.success)
    TestEquality.equals("value4", result4.data, { value: 0 });
};
