import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_unquoted_keys = (): void => {
  // Simple unquoted key
  const r1 = LlmJson.parse('{name: "John"}');
  TestValidator.equals("simple-unquoted-success", r1.success, true);
  if (r1.success) TestValidator.equals("simple-unquoted-data", r1.data, { name: "John" });

  // Mixed quoted and unquoted
  const r2 = LlmJson.parse('{"age": 30, name: "John"}');
  TestValidator.equals("mixed-keys-success", r2.success, true);
  if (r2.success) TestValidator.equals("mixed-keys-data", r2.data, { age: 30, name: "John" });

  // Unquoted with underscores
  const r3 = LlmJson.parse('{user_name: "test"}');
  TestValidator.equals("underscore-key-success", r3.success, true);
  if (r3.success) TestValidator.equals("underscore-key-data", r3.data, { user_name: "test" });

  // Unquoted with numbers (not at start)
  const r4 = LlmJson.parse('{item2: 42}');
  TestValidator.equals("number-in-key-success", r4.success, true);
  if (r4.success) TestValidator.equals("number-in-key-data", r4.data, { item2: 42 });

  // Dollar sign prefix
  const r5 = LlmJson.parse('{$data: 100}');
  TestValidator.equals("dollar-key-success", r5.success, true);
  if (r5.success) TestValidator.equals("dollar-key-data", r5.data, { $data: 100 });

  // Underscore prefix
  const r6 = LlmJson.parse('{_private: true}');
  TestValidator.equals("underscore-prefix-success", r6.success, true);
  if (r6.success) TestValidator.equals("underscore-prefix-data", r6.data, { _private: true });

  // Nested unquoted keys
  const r7 = LlmJson.parse('{outer: {inner: 42}}');
  TestValidator.equals("nested-unquoted-success", r7.success, true);
  if (r7.success) TestValidator.equals("nested-unquoted-data", r7.data, { outer: { inner: 42 } });

  // Unquoted key with array value
  const r8 = LlmJson.parse('{items: [1, 2, 3]}');
  TestValidator.equals("array-value-success", r8.success, true);
  if (r8.success) TestValidator.equals("array-value-data", r8.data, { items: [1, 2, 3] });

  // Multiple unquoted keys
  const r9 = LlmJson.parse('{a: 1, b: 2, c: 3}');
  TestValidator.equals("multiple-unquoted-success", r9.success, true);
  if (r9.success) TestValidator.equals("multiple-unquoted-data", r9.data, { a: 1, b: 2, c: 3 });

  // Unquoted key with comment
  const r10 = LlmJson.parse('{name: "John" // comment\n}');
  TestValidator.equals("unquoted-with-comment-success", r10.success, true);
  if (r10.success) TestValidator.equals("unquoted-with-comment-data", r10.data, { name: "John" });
};
