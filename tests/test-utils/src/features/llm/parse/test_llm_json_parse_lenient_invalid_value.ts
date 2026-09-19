import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_invalid_value = (): void => {
  // Invalid character as value (not a valid JSON token)
  // '{"key": @invalid}' => 2 errors: [ 'JSON value', "':'" ]
  const result = LlmJson.parse('{"key": @invalid}');
  TestEquality.equals("success", result.success, false);
  if (!result.success)
    TestEquality.subset(
      "errors",
      [{ expected: "JSON value" }, { expected: "':'" }],
      result.errors,
    );

  // Invalid @ in value with partial recovery (valid key 'a' preserved)
  // '{"a": 1, "b": @, "c": 3}' => 1 errors: [ 'JSON value' ]
  const r2 = LlmJson.parse('{"a": 1, "b": @, "c": 3}');
  TestEquality.equals("at-sign-success", r2.success, false);
  if (!r2.success) {
    TestEquality.equals("at-sign-a", (r2.data as any)?.a, 1);
    TestEquality.subset(
      "at-sign-errors",
      [{ expected: "JSON value" }],
      r2.errors,
    );
  }

  // Multiple invalid characters in values
  // '{"a": #, "b": %, "c": 3}' => 2 errors: [ 'JSON value', 'JSON value' ]
  const r3 = LlmJson.parse('{"a": #, "b": %, "c": 3}');
  TestEquality.equals("multi-invalid-success", r3.success, false);
  if (!r3.success)
    TestEquality.subset(
      "multi-invalid-errors",
      [{ expected: "JSON value" }, { expected: "JSON value" }],
      r3.errors,
    );

  // Invalid character in array value
  // '[1, @, 3]' => 1 errors: [ 'JSON value' ]
  const r4 = LlmJson.parse("[1, @, 3]");
  TestEquality.equals("arr-invalid-success", r4.success, false);
  if (!r4.success)
    TestEquality.subset(
      "arr-invalid-errors",
      [{ expected: "JSON value" }],
      r4.errors,
    );
};
