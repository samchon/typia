import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_error_recovery = (): void => {
  // Invalid character in value position - recovery continues parsing
  const r1 = LlmJson.parse('{"a": 1, "b": @, "c": 3}');
  TestValidator.equals("at-sign-success", r1.success, false);
  if (!r1.success) {
    TestValidator.equals("at-sign-a", (r1.data as any)?.a, 1);
  }

  // Multiple invalid values
  const r2 = LlmJson.parse('{"a": #, "b": %, "c": 3}');
  TestValidator.equals("multi-invalid-success", r2.success, false);
  if (!r2.success) {
    TestValidator.equals("multi-invalid-errors", r2.errors.length >= 1, true);
  }

  // Invalid value followed by valid values in array
  const r3 = LlmJson.parse("[1, @, 3]");
  TestValidator.equals("arr-invalid-success", r3.success, false);
  if (!r3.success) {
    TestValidator.equals("arr-invalid-errors", r3.errors.length >= 1, true);
  }

  // Object with non-string key (number)
  const r4 = LlmJson.parse("{123: 456}");
  TestValidator.equals("num-key-success", r4.success, false);
  if (!r4.success) {
    TestValidator.equals("num-key-errors", r4.errors.length >= 1, true);
  }

  // Completely empty after stripping junk
  const r5 = LlmJson.parse("not json at all here");
  TestValidator.equals("no-json-success", r5.success, false);

  // Just a colon
  const r6 = LlmJson.parse(":");
  TestValidator.equals("colon-only-success", r6.success, false);

  // Just a comma
  const r7 = LlmJson.parse(",");
  TestValidator.equals("comma-only-success", r7.success, false);

  // Closing bracket without opening
  const r8 = LlmJson.parse("}");
  TestValidator.equals("close-brace-only-success", r8.success, false);
};
