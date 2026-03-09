import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_whitespace_variations = (): void => {
  // Whitespace only (various types)
  const r1 = LlmJson.parse("   \t\n\r  ");
  TestValidator.equals("ws-only-success", r1.success, false);
  if (!r1.success)
    TestValidator.equals("ws-only-errors", [{ expected: "JSON value" }], r1.errors);

  // JSON with excessive whitespace
  const r2 = LlmJson.parse(
    '  {  "key"  :  "value"  ,  "num"  :  42  }  ',
  );
  TestValidator.equals("excessive-ws-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("excessive-ws-data", r2.data, {
      key: "value",
      num: 42,
    });

  // JSON with tabs as whitespace
  const r3 = LlmJson.parse('{\t"key"\t:\t"value"\t}');
  TestValidator.equals("tabs-ws-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("tabs-ws-data", r3.data, { key: "value" });

  // JSON with mixed whitespace types
  const r4 = LlmJson.parse('{ \t\n "key" \r\n : \t "value" \n }');
  TestValidator.equals("mixed-ws-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("mixed-ws-data", r4.data, { key: "value" });

  // Array with lots of whitespace
  const r5 = LlmJson.parse("[  1  ,  2  ,  3  ]");
  TestValidator.equals("arr-ws-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("arr-ws-data", r5.data, [1, 2, 3]);

  // Newlines inside object structure
  const r6 = LlmJson.parse('{\n  "a": 1,\n  "b": 2,\n  "c": 3\n}');
  TestValidator.equals("newlines-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("newlines-data", r6.data, { a: 1, b: 2, c: 3 });

  // CRLF line endings
  const r7 = LlmJson.parse('{\r\n  "key": "value"\r\n}');
  TestValidator.equals("crlf-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("crlf-data", r7.data, { key: "value" });

  // No whitespace at all (compressed)
  const r8 = LlmJson.parse('{"a":1,"b":"c","d":[1,2],"e":{"f":true}}');
  TestValidator.equals("compressed-success", r8.success, true);
  if (r8.success)
    TestValidator.equals("compressed-data", r8.data, {
      a: 1,
      b: "c",
      d: [1, 2],
      e: { f: true },
    });
};
