import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_standard_roundtrip = (): void => {
  // Verify that valid JSON roundtrips perfectly through the parser
  // This tests that the fast path (native JSON.parse) produces identical results

  // Complex object
  const obj1 = {
    name: "test",
    value: 42,
    nested: { a: [1, 2, 3], b: { c: true } },
    arr: [null, false, "string", 0, -1, 3.14],
    empty: {},
    emptyArr: [],
  };
  const r1 = LlmJson.parse(JSON.stringify(obj1));
  TestEquality.equals("roundtrip-obj-success", r1.success, true);
  if (r1.success) TestEquality.equals("roundtrip-obj-data", r1.data, obj1);

  // String with all escape sequences
  const obj2 = { text: '"\\/\b\f\n\r\t' };
  const r2 = LlmJson.parse(JSON.stringify(obj2));
  TestEquality.equals("roundtrip-esc-success", r2.success, true);
  if (r2.success) TestEquality.equals("roundtrip-esc-data", r2.data, obj2);

  // Object with unicode
  const obj3 = { korean: "한국어", emoji: "😀", chinese: "中文" };
  const r3 = LlmJson.parse(JSON.stringify(obj3));
  TestEquality.equals("roundtrip-unicode-success", r3.success, true);
  if (r3.success) TestEquality.equals("roundtrip-unicode-data", r3.data, obj3);

  // Deeply nested
  const obj4 = { a: { b: { c: { d: { e: { f: 1 } } } } } };
  const r4 = LlmJson.parse(JSON.stringify(obj4));
  TestEquality.equals("roundtrip-deep-success", r4.success, true);
  if (r4.success) TestEquality.equals("roundtrip-deep-data", r4.data, obj4);

  // Large array
  const obj5 = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    name: "item" + i,
  }));
  const r5 = LlmJson.parse(JSON.stringify(obj5));
  TestEquality.equals("roundtrip-large-arr-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("roundtrip-large-arr-data", r5.data, obj5);

  // All primitives
  TestEquality.equals("roundtrip-true", LlmJson.parse("true").data, true);
  TestEquality.equals("roundtrip-false", LlmJson.parse("false").data, false);
  TestEquality.equals("roundtrip-null", LlmJson.parse("null").data, null);
  TestEquality.equals("roundtrip-0", LlmJson.parse("0").data, 0);
  TestEquality.equals("roundtrip-neg", LlmJson.parse("-1").data, -1);
  TestEquality.equals("roundtrip-float", LlmJson.parse("3.14").data, 3.14);
  TestEquality.equals("roundtrip-str", LlmJson.parse('"hello"').data, "hello");
};
