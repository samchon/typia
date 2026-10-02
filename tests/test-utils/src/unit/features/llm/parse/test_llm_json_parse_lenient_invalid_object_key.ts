import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that invalid unquoted object keys produce diagnostics.
 *
 * Lenient identifier keys do not permit arbitrary numeric or
 * punctuation-leading keys.
 *
 * 1. Exercise digit-leading, at-sign-leading and purely numeric unquoted keys;
 *    valid identifier and quoted-key controls belong to the corresponding key
 *    units.
 * 2. Compare the retained results with literal expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output. Diagnostic subsets pin selected expected fields rather than every diagnostic detail.
 * @evidence contracts/testing.md#distinguishing-cases This case owns digit-leading, at-sign-leading and purely numeric unquoted keys; valid identifier and quoted-key controls belong to the corresponding key units; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_invalid_object_key = (): void => {
  // Object key starting with a number is invalid (not a valid identifier)
  const result = LlmJson.parse('{123key: "value"}');
  TestEquality.equals("success", result.success, false);
  if (!result.success)
    TestEquality.subset("errors", [{ expected: "string key" }], result.errors);

  // Key starting with special character (not $ or _) is invalid
  const result2 = LlmJson.parse('{@key: "value"}');
  TestEquality.equals("success2", result2.success, false);
  if (!result2.success)
    TestEquality.subset(
      "errors2",
      [{ expected: "string key" }],
      result2.errors,
    );

  // Pure number as key (0: "value")
  const result3 = LlmJson.parse('{0: "value"}');
  TestEquality.equals("num-key-success", result3.success, false);
  if (!result3.success)
    TestEquality.subset(
      "num-key-errors",
      [{ expected: "string key" }],
      result3.errors,
    );
};
