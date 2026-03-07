import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_failure_input = (): void => {
  // Failure should include original input (not extracted)
  const r1 = LlmJson.parse('{"name": invalid_token}');
  TestValidator.equals("simple-failure-success", r1.success, false);
  if (!r1.success) {
    TestValidator.equals("simple-failure-has-input", typeof r1.input, "string");
    TestValidator.equals("simple-failure-input", r1.input, '{"name": invalid_token}');
    TestValidator.equals("simple-failure-has-errors", r1.errors.length > 0, true);
  }

  // Failure with markdown should include FULL original input
  const markdownInput = 'Here is result:\n\n```json\n{"value": bad_value}\n```';
  const r2 = LlmJson.parse(markdownInput);
  TestValidator.equals("markdown-failure-success", r2.success, false);
  if (!r2.success) {
    TestValidator.equals("markdown-failure-input", r2.input, markdownInput);
  }

  // Failure with junk prefix should include original
  const junkInput = 'Sure! Here you go: {"x": undefined_value}';
  const r3 = LlmJson.parse(junkInput);
  TestValidator.equals("junk-failure-success", r3.success, false);
  if (!r3.success) {
    TestValidator.equals("junk-failure-input", r3.input, junkInput);
  }

  // Error path should be correct
  const r4 = LlmJson.parse('{"nested": {"bad": xyz}}');
  TestValidator.equals("nested-error-success", r4.success, false);
  if (!r4.success) {
    TestValidator.equals("nested-error-has-path", r4.errors[0]?.path.includes("nested"), true);
  }

  // Multiple errors should all be captured
  const r5 = LlmJson.parse('{"a": bad1, "b": bad2}');
  TestValidator.equals("multiple-errors-success", r5.success, false);
  if (!r5.success) {
    // At least one error captured (parser may recover after first)
    TestValidator.equals("multiple-errors-count", r5.errors.length >= 1, true);
  }

  // Data should still be partially recovered on failure
  const r6 = LlmJson.parse('{"good": "value", "bad": oops}');
  TestValidator.equals("partial-recovery-success", r6.success, false);
  if (!r6.success) {
    TestValidator.equals("partial-recovery-good-value", (r6.data as any)?.good, "value");
  }

  // Failure input preserved even with comments
  const commentInput = '{"key": /* comment */ invalid}';
  const r7 = LlmJson.parse(commentInput);
  TestValidator.equals("comment-failure-success", r7.success, false);
  if (!r7.success) {
    TestValidator.equals("comment-failure-input", r7.input, commentInput);
  }

  // Error message should be descriptive
  const r8 = LlmJson.parse('{"name": abcdefg}');
  TestValidator.equals("descriptive-error-success", r8.success, false);
  if (!r8.success) {
    const errorValue = String(r8.errors[0]?.value ?? "");
    TestValidator.equals("descriptive-error-mentions-value", errorValue.includes("abcdefg"), true);
  }
};
