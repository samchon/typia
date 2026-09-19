import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_unquoted_keys = (): void => {
  // Simple unquoted key
  const r1 = LlmJson.parse('{name: "John"}');
  TestEquality.equals("simple-unquoted-success", r1.success, true);
  if (r1.success)
    TestEquality.equals("simple-unquoted-data", r1.data, { name: "John" });

  // Mixed quoted and unquoted
  const r2 = LlmJson.parse('{"age": 30, name: "John"}');
  TestEquality.equals("mixed-keys-success", r2.success, true);
  if (r2.success)
    TestEquality.equals("mixed-keys-data", r2.data, { age: 30, name: "John" });

  // Unquoted with underscores
  const r3 = LlmJson.parse('{user_name: "test"}');
  TestEquality.equals("underscore-key-success", r3.success, true);
  if (r3.success)
    TestEquality.equals("underscore-key-data", r3.data, { user_name: "test" });

  // Unquoted with numbers (not at start)
  const r4 = LlmJson.parse("{item2: 42}");
  TestEquality.equals("number-in-key-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("number-in-key-data", r4.data, { item2: 42 });

  // Dollar sign prefix
  const r5 = LlmJson.parse("{$data: 100}");
  TestEquality.equals("dollar-key-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("dollar-key-data", r5.data, { $data: 100 });

  // Underscore prefix
  const r6 = LlmJson.parse("{_private: true}");
  TestEquality.equals("underscore-prefix-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("underscore-prefix-data", r6.data, { _private: true });

  // Nested unquoted keys
  const r7 = LlmJson.parse("{outer: {inner: 42}}");
  TestEquality.equals("nested-unquoted-success", r7.success, true);
  if (r7.success)
    TestEquality.equals("nested-unquoted-data", r7.data, {
      outer: { inner: 42 },
    });

  // Unquoted key with array value
  const r8 = LlmJson.parse("{items: [1, 2, 3]}");
  TestEquality.equals("array-value-success", r8.success, true);
  if (r8.success)
    TestEquality.equals("array-value-data", r8.data, { items: [1, 2, 3] });

  // Multiple unquoted keys
  const r9 = LlmJson.parse("{a: 1, b: 2, c: 3}");
  TestEquality.equals("multiple-unquoted-success", r9.success, true);
  if (r9.success)
    TestEquality.equals("multiple-unquoted-data", r9.data, {
      a: 1,
      b: 2,
      c: 3,
    });

  // Unquoted key with comment
  const r10 = LlmJson.parse('{name: "John" // comment\n}');
  TestEquality.equals("unquoted-with-comment-success", r10.success, true);
  if (r10.success)
    TestEquality.equals("unquoted-with-comment-data", r10.data, {
      name: "John",
    });
};
