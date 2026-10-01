import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that missing object values preserve available later properties.
 *
 * EOF before a value and a missing value before another member require
 * different recovered objects.
 *
 * 1. Exercise missing values before closers/commas, later valid properties, and
 *    key-only/key-colon EOF input.
 * 2. Compare the retained results with literal expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns missing values before closers/commas, later valid properties, and key-only/key-colon EOF input; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_object_value_missing = (): void => {
  // Value missing after colon - should return undefined for that key
  const r1 = LlmJson.parse('{"key":}');
  TestEquality.equals("missing-val-success", r1.success, true);
  if (r1.success)
    TestEquality.equals("missing-val-data", (r1.data as any).key, undefined);

  // Value missing, then more properties follow
  const r2 = LlmJson.parse('{"a":, "b": 2}');
  TestEquality.equals("missing-then-more-success", r2.success, true);
  if (r2.success) {
    TestEquality.equals("missing-then-more-a", (r2.data as any).a, undefined);
    TestEquality.equals("missing-then-more-b", (r2.data as any).b, 2);
  }

  // Multiple missing values
  const r3 = LlmJson.parse('{"a":, "b":, "c": 3}');
  TestEquality.equals("multi-missing-success", r3.success, true);
  if (r3.success) {
    TestEquality.equals("multi-missing-c", (r3.data as any).c, 3);
  }

  // Object with key only at EOF (no colon)
  const r4 = LlmJson.parse('{"key"');
  TestEquality.equals("key-only-eof-success", r4.success, true);
  if (r4.success) TestEquality.equals("key-only-eof-data", r4.data, {});

  // Object with key and colon at EOF
  const r5 = LlmJson.parse('{"key":');
  TestEquality.equals("key-colon-eof-success", r5.success, true);
  if (r5.success) TestEquality.equals("key-colon-eof-data", r5.data, {});
};
