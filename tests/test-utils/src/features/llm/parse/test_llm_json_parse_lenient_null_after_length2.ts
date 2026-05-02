import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_null_after_length2 = (): void => {
  // "nu" should match null (length >= 2)
  const r1 = LlmJson.parse("nu");
  TestValidator.equals("nu-success", r1.success, true);
  if (r1.success) TestValidator.equals("nu-data", r1.data, null);

  // "nul" should match null
  const r2 = LlmJson.parse("nul");
  TestValidator.equals("nul-success", r2.success, true);
  if (r2.success) TestValidator.equals("nul-data", r2.data, null);

  // "null" matches null
  const r3 = LlmJson.parse("null");
  TestValidator.equals("null-success", r3.success, true);
  if (r3.success) TestValidator.equals("null-data", r3.data, null);

  // "n" alone should NOT match null (length < 2)
  const r4 = LlmJson.parse("n");
  TestValidator.equals("n-success", r4.success, false);
  if (!r4.success)
    TestValidator.equals("n-errors", [{ expected: "JSON value" }], r4.errors);

  // "nu" in object value
  const r5 = LlmJson.parse('{"val": nu');
  TestValidator.equals("nu-obj-success", r5.success, true);
  if (r5.success) TestValidator.equals("nu-obj-data", r5.data, { val: null });

  // "nu" in array
  const r6 = LlmJson.parse("[nu]");
  TestValidator.equals("nu-arr-success", r6.success, true);
  if (r6.success) TestValidator.equals("nu-arr-data", r6.data, [null]);

  // Verify "null" inside a word does NOT interfere
  // "nullable" should be treated as an identifier, not as "null" + "able"
  const r7 = LlmJson.parse("{nullable: true}");
  TestValidator.equals("nullable-key-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("nullable-key-data", r7.data, { nullable: true });
};
