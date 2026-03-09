import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_duplicate_keys = (): void => {
  // Last value wins for duplicate keys (matches JSON.parse behavior)
  const r1 = LlmJson.parse('{"key": 1, "key": 2}');
  TestValidator.equals("duplicate-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("duplicate-data", (r1.data as any).key, 2);

  // Multiple duplicates
  const r2 = LlmJson.parse('{"x": "a", "x": "b", "x": "c"}');
  TestValidator.equals("triple-dup-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("triple-dup-data", (r2.data as any).x, "c");

  // Duplicate with different value types
  const r3 = LlmJson.parse('{"val": 1, "val": "one"}');
  TestValidator.equals("diff-type-dup-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("diff-type-dup-data", (r3.data as any).val, "one");

  // Duplicate keys with complex values
  const r4 = LlmJson.parse('{"data": [1, 2], "data": {"nested": true}}');
  TestValidator.equals("complex-dup-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("complex-dup-data", r4.data, {
      data: { nested: true },
    });
};
