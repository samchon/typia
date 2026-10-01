import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that null recovery requires a sufficiently long prefix.
 *
 * A one-letter token is ambiguous and must remain distinct from the accepted
 * null prefixes.
 *
 * 1. Exercise nu/nul/null versus n, object and array values, and a nullable
 *    identifier used as a key.
 * 2. Compare the retained results and original assertion outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output. Diagnostic subsets pin selected expected fields rather than every diagnostic detail.
 * @evidence contracts/testing.md#distinguishing-cases This case owns nu/nul/null versus n, object and array values, and a nullable identifier used as a key; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_null_after_length2 = (): void => {
  // "nu" should match null (length >= 2)
  const r1 = LlmJson.parse("nu");
  TestEquality.equals("nu-success", r1.success, true);
  if (r1.success) TestEquality.equals("nu-data", r1.data, null);

  // "nul" should match null
  const r2 = LlmJson.parse("nul");
  TestEquality.equals("nul-success", r2.success, true);
  if (r2.success) TestEquality.equals("nul-data", r2.data, null);

  // "null" matches null
  const r3 = LlmJson.parse("null");
  TestEquality.equals("null-success", r3.success, true);
  if (r3.success) TestEquality.equals("null-data", r3.data, null);

  // "n" alone should NOT match null (length < 2)
  const r4 = LlmJson.parse("n");
  TestEquality.equals("n-success", r4.success, false);
  if (!r4.success)
    TestEquality.subset("n-errors", [{ expected: "JSON value" }], r4.errors);

  // "nu" in object value
  const r5 = LlmJson.parse('{"val": nu');
  TestEquality.equals("nu-obj-success", r5.success, true);
  if (r5.success) TestEquality.equals("nu-obj-data", r5.data, { val: null });

  // "nu" in array
  const r6 = LlmJson.parse("[nu]");
  TestEquality.equals("nu-arr-success", r6.success, true);
  if (r6.success) TestEquality.equals("nu-arr-data", r6.data, [null]);

  // Verify "null" inside a word does NOT interfere
  // "nullable" should be treated as an identifier, not as "null" + "able"
  const r7 = LlmJson.parse("{nullable: true}");
  TestEquality.equals("nullable-key-success", r7.success, true);
  if (r7.success)
    TestEquality.equals("nullable-key-data", r7.data, { nullable: true });
};
