import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_structural_chars_only = (): void => {
  // Just braces
  const r1 = LlmJson.parse("{}");
  TestValidator.equals("braces-success", r1.success, true);
  if (r1.success) TestValidator.equals("braces-data", r1.data, {});

  // Just brackets
  const r2 = LlmJson.parse("[]");
  TestValidator.equals("brackets-success", r2.success, true);
  if (r2.success) TestValidator.equals("brackets-data", r2.data, []);

  // Nested empty
  const r3 = LlmJson.parse("{{}}");
  // This tries to parse an object. Key position: '{' is not a string key
  // and not an identifier start → error, returns empty object
  TestValidator.equals("double-brace-success", r3.success, false);

  // [[]]
  const r4 = LlmJson.parse("[[]]");
  TestValidator.equals("double-bracket-success", r4.success, true);
  if (r4.success) TestValidator.equals("double-bracket-data", r4.data, [[]]);

  // {[]}
  const r5 = LlmJson.parse("{[]}");
  // At key position, '[' is not valid → error
  TestValidator.equals("brace-bracket-success", r5.success, false);

  // [{}]
  const r6 = LlmJson.parse("[{}]");
  TestValidator.equals("bracket-brace-success", r6.success, true);
  if (r6.success) TestValidator.equals("bracket-brace-data", r6.data, [{}]);

  // {,}
  const r7 = LlmJson.parse("{,}");
  TestValidator.equals("comma-in-obj-success", r7.success, true);
  if (r7.success) TestValidator.equals("comma-in-obj-data", r7.data, {});

  // [,]
  const r8 = LlmJson.parse("[,]");
  TestValidator.equals("comma-in-arr-success", r8.success, true);
  if (r8.success) TestValidator.equals("comma-in-arr-data", r8.data, []);

  // Just quotes
  const r9 = LlmJson.parse('""');
  TestValidator.equals("empty-quotes-success", r9.success, true);
  if (r9.success) TestValidator.equals("empty-quotes-data", r9.data, "");

  // Mismatched: {]
  const r10 = LlmJson.parse("{]");
  // Parser opens object, sees ']' at key position → not a valid key
  // ']' is not '"' and not identifier start → error
  TestValidator.equals("mismatch-brace-bracket-success", r10.success, false);

  // Mismatched: [} - previously caused infinite loop, now handled by stall guard
  const r11 = LlmJson.parse("[}");
  TestValidator.equals("mismatch-bracket-brace-success", r11.success, true);
  if (r11.success) TestValidator.equals("mismatch-bracket-brace-data", r11.data, []);

  // [}] with closing bracket
  const r11b = LlmJson.parse("[}]");
  TestValidator.equals("bracket-brace-bracket-success", r11b.success, true);
  if (r11b.success)
    TestValidator.equals("bracket-brace-bracket-data", r11b.data, []);

  // [1, }, 2] - value, then mismatched brace, then more values
  const r11c = LlmJson.parse("[1, }, 2]");
  TestValidator.equals("val-brace-val-success", r11c.success, true);
  if (r11c.success)
    TestValidator.equals("val-brace-val-data", r11c.data, [1, 2]);

  // [}}}] - multiple mismatched braces
  const r11d = LlmJson.parse("[}}}]");
  TestValidator.equals("multi-brace-in-arr-success", r11d.success, true);
  if (r11d.success)
    TestValidator.equals("multi-brace-in-arr-data", r11d.data, []);

  // Just commas
  const r12 = LlmJson.parse(",,,");
  TestValidator.equals("just-commas-success", r12.success, false);

  // Just colons
  const r13 = LlmJson.parse(":::");
  TestValidator.equals("just-colons-success", r13.success, false);

  // Array of empty arrays
  const r14 = LlmJson.parse("[[], [], []]");
  TestValidator.equals("arr-of-arrs-success", r14.success, true);
  if (r14.success)
    TestValidator.equals("arr-of-arrs-data", r14.data, [[], [], []]);

  // Object with empty object values
  const r15 = LlmJson.parse('{"a": {}, "b": {}}');
  TestValidator.equals("obj-of-objs-success", r15.success, true);
  if (r15.success)
    TestValidator.equals("obj-of-objs-data", r15.data, { a: {}, b: {} });
};
