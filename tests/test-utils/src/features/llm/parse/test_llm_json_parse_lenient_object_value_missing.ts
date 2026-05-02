import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_object_value_missing = (): void => {
  // Value missing after colon - should return undefined for that key
  const r1 = LlmJson.parse('{"key":}');
  TestValidator.equals("missing-val-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("missing-val-data", (r1.data as any).key, undefined);

  // Value missing, then more properties follow
  const r2 = LlmJson.parse('{"a":, "b": 2}');
  TestValidator.equals("missing-then-more-success", r2.success, true);
  if (r2.success) {
    TestValidator.equals("missing-then-more-a", (r2.data as any).a, undefined);
    TestValidator.equals("missing-then-more-b", (r2.data as any).b, 2);
  }

  // Multiple missing values
  const r3 = LlmJson.parse('{"a":, "b":, "c": 3}');
  TestValidator.equals("multi-missing-success", r3.success, true);
  if (r3.success) {
    TestValidator.equals("multi-missing-c", (r3.data as any).c, 3);
  }

  // Object with key only at EOF (no colon)
  const r4 = LlmJson.parse('{"key"');
  TestValidator.equals("key-only-eof-success", r4.success, true);
  if (r4.success) TestValidator.equals("key-only-eof-data", r4.data, {});

  // Object with key and colon at EOF
  const r5 = LlmJson.parse('{"key":');
  TestValidator.equals("key-colon-eof-success", r5.success, true);
  if (r5.success) TestValidator.equals("key-colon-eof-data", r5.data, {});
};
