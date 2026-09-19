import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_error_output_format = (): void => {
  const JSON_VALUE_EXPECTED =
    "JSON value (string, number, boolean, null, object, or array)";

  // Failure should include original input (not extracted)
  const r1 = LlmJson.parse('{"name": invalid_token}');
  TestEquality.equals("simple-failure-success", r1.success, false);
  if (!r1.success) {
    TestEquality.equals("simple-failure-has-input", typeof r1.input, "string");
    TestEquality.equals(
      "simple-failure-input",
      r1.input,
      '{"name": invalid_token}',
    );
    TestEquality.subset(
      "simple-failure-errors",
      [{ expected: JSON_VALUE_EXPECTED }],
      r1.errors,
    );
  }

  // Failure with markdown should include FULL original input
  const markdownInput = 'Here is result:\n\n```json\n{"value": bad_value}\n```';
  const r2 = LlmJson.parse(markdownInput);
  TestEquality.equals("markdown-failure-success", r2.success, false);
  if (!r2.success)
    TestEquality.equals("markdown-failure-input", r2.input, markdownInput);

  // Failure with junk prefix should include original
  const junkInput = 'Sure! Here you go: {"x": undefined_value}';
  const r3 = LlmJson.parse(junkInput);
  TestEquality.equals("junk-failure-success", r3.success, false);
  if (!r3.success)
    TestEquality.equals("junk-failure-input", r3.input, junkInput);

  // Error path should be correct
  const r4 = LlmJson.parse('{"nested": {"bad": xyz}}');
  TestEquality.equals("nested-error-success", r4.success, false);
  if (!r4.success)
    TestEquality.subset(
      "nested-error-errors",
      [{ expected: JSON_VALUE_EXPECTED }],
      r4.errors,
    );

  // Multiple errors should all be captured
  const r5 = LlmJson.parse('{"a": bad1, "b": bad2}');
  TestEquality.equals("multiple-errors-success", r5.success, false);
  if (!r5.success)
    TestEquality.subset(
      "multiple-errors-errors",
      [{ expected: JSON_VALUE_EXPECTED }, { expected: JSON_VALUE_EXPECTED }],
      r5.errors,
    );

  // Data should still be partially recovered on failure
  const r6 = LlmJson.parse('{"good": "value", "bad": oops}');
  TestEquality.equals("partial-recovery-success", r6.success, false);
  if (!r6.success)
    TestEquality.equals(
      "partial-recovery-good-value",
      (r6.data as any)?.good,
      "value",
    );

  // Failure input preserved even with comments
  const commentInput = '{"key": /* comment */ invalid}';
  const r7 = LlmJson.parse(commentInput);
  TestEquality.equals("comment-failure-success", r7.success, false);
  if (!r7.success)
    TestEquality.equals("comment-failure-input", r7.input, commentInput);

  // Error message should be descriptive
  const r8 = LlmJson.parse('{"name": abcdefg}');
  TestEquality.equals("descriptive-error-success", r8.success, false);
  if (!r8.success)
    TestEquality.subset(
      "descriptive-error-errors",
      [{ expected: JSON_VALUE_EXPECTED }],
      r8.errors,
    );
};
