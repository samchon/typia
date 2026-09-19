import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_string_special_chars = (): void => {
  // String with backticks
  const r1 = LlmJson.parse('{"code": "const x = `hello`"}');
  TestEquality.equals("backticks-success", r1.success, true);
  if (r1.success)
    TestEquality.equals("backticks-data", r1.data, {
      code: "const x = `hello`",
    });

  // String with single quotes
  const r2 = LlmJson.parse('{"text": "it\'s a test"}');
  TestEquality.equals("single-quotes-success", r2.success, true);
  if (r2.success)
    TestEquality.equals("single-quotes-data", r2.data, {
      text: "it's a test",
    });

  // String with angle brackets (HTML-like)
  const r3 = LlmJson.parse('{"html": "<div class=\\"test\\">hello</div>"}');
  TestEquality.equals("html-success", r3.success, true);
  if (r3.success)
    TestEquality.equals("html-data", r3.data, {
      html: '<div class="test">hello</div>',
    });

  // String with forward slashes (URLs)
  const r4 = LlmJson.parse('{"url": "https://example.com/path?q=1&b=2#hash"}');
  TestEquality.equals("url-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("url-data", r4.data, {
      url: "https://example.com/path?q=1&b=2#hash",
    });

  // String with regex-like content
  const r5 = LlmJson.parse('{"regex": "^[a-z]+\\\\d{3}$"}');
  TestEquality.equals("regex-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("regex-data", r5.data, {
      regex: "^[a-z]+\\d{3}$",
    });

  // String with SQL-like content
  const r6 = LlmJson.parse(
    '{"sql": "SELECT * FROM users WHERE name = \'John\' AND age > 18"}',
  );
  TestEquality.equals("sql-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("sql-data", r6.data, {
      sql: "SELECT * FROM users WHERE name = 'John' AND age > 18",
    });

  // String with curly braces (not JSON - template-like)
  const r7 = LlmJson.parse('{"template": "Hello {{name}}, welcome!"}');
  TestEquality.equals("template-success", r7.success, true);
  if (r7.success)
    TestEquality.equals("template-data", r7.data, {
      template: "Hello {{name}}, welcome!",
    });

  // String with bracket notation
  const r8 = LlmJson.parse('{"expr": "arr[0] + obj[key]"}');
  TestEquality.equals("brackets-success", r8.success, true);
  if (r8.success)
    TestEquality.equals("brackets-data", r8.data, {
      expr: "arr[0] + obj[key]",
    });

  // String with pipe, tilde, at-sign, hash
  const r9 = LlmJson.parse('{"symbols": "a|b~c@d#e"}');
  TestEquality.equals("symbols-success", r9.success, true);
  if (r9.success)
    TestEquality.equals("symbols-data", r9.data, { symbols: "a|b~c@d#e" });

  // String with equals, plus, percent
  const r10 = LlmJson.parse('{"math": "a=b+c%d"}');
  TestEquality.equals("math-success", r10.success, true);
  if (r10.success)
    TestEquality.equals("math-data", r10.data, { math: "a=b+c%d" });

  // String with parentheses, exclamation, question mark
  const r11 = LlmJson.parse('{"punct": "Hello! (world?) yes."}');
  TestEquality.equals("punct-success", r11.success, true);
  if (r11.success)
    TestEquality.equals("punct-data", r11.data, {
      punct: "Hello! (world?) yes.",
    });

  // String containing comment-like but inside quotes
  const r12 = LlmJson.parse('{"msg": "use // for comments or /* blocks */"}');
  TestEquality.equals("comment-like-success", r12.success, true);
  if (r12.success)
    TestEquality.equals("comment-like-data", r12.data, {
      msg: "use // for comments or /* blocks */",
    });
};
