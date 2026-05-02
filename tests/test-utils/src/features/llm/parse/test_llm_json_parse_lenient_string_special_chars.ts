import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_string_special_chars = (): void => {
  // String with backticks
  const r1 = LlmJson.parse('{"code": "const x = `hello`"}');
  TestValidator.equals("backticks-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("backticks-data", r1.data, {
      code: "const x = `hello`",
    });

  // String with single quotes
  const r2 = LlmJson.parse('{"text": "it\'s a test"}');
  TestValidator.equals("single-quotes-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("single-quotes-data", r2.data, {
      text: "it's a test",
    });

  // String with angle brackets (HTML-like)
  const r3 = LlmJson.parse('{"html": "<div class=\\"test\\">hello</div>"}');
  TestValidator.equals("html-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("html-data", r3.data, {
      html: '<div class="test">hello</div>',
    });

  // String with forward slashes (URLs)
  const r4 = LlmJson.parse('{"url": "https://example.com/path?q=1&b=2#hash"}');
  TestValidator.equals("url-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("url-data", r4.data, {
      url: "https://example.com/path?q=1&b=2#hash",
    });

  // String with regex-like content
  const r5 = LlmJson.parse('{"regex": "^[a-z]+\\\\d{3}$"}');
  TestValidator.equals("regex-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("regex-data", r5.data, {
      regex: "^[a-z]+\\d{3}$",
    });

  // String with SQL-like content
  const r6 = LlmJson.parse(
    '{"sql": "SELECT * FROM users WHERE name = \'John\' AND age > 18"}',
  );
  TestValidator.equals("sql-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("sql-data", r6.data, {
      sql: "SELECT * FROM users WHERE name = 'John' AND age > 18",
    });

  // String with curly braces (not JSON - template-like)
  const r7 = LlmJson.parse('{"template": "Hello {{name}}, welcome!"}');
  TestValidator.equals("template-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("template-data", r7.data, {
      template: "Hello {{name}}, welcome!",
    });

  // String with bracket notation
  const r8 = LlmJson.parse('{"expr": "arr[0] + obj[key]"}');
  TestValidator.equals("brackets-success", r8.success, true);
  if (r8.success)
    TestValidator.equals("brackets-data", r8.data, {
      expr: "arr[0] + obj[key]",
    });

  // String with pipe, tilde, at-sign, hash
  const r9 = LlmJson.parse('{"symbols": "a|b~c@d#e"}');
  TestValidator.equals("symbols-success", r9.success, true);
  if (r9.success)
    TestValidator.equals("symbols-data", r9.data, { symbols: "a|b~c@d#e" });

  // String with equals, plus, percent
  const r10 = LlmJson.parse('{"math": "a=b+c%d"}');
  TestValidator.equals("math-success", r10.success, true);
  if (r10.success)
    TestValidator.equals("math-data", r10.data, { math: "a=b+c%d" });

  // String with parentheses, exclamation, question mark
  const r11 = LlmJson.parse('{"punct": "Hello! (world?) yes."}');
  TestValidator.equals("punct-success", r11.success, true);
  if (r11.success)
    TestValidator.equals("punct-data", r11.data, {
      punct: "Hello! (world?) yes.",
    });

  // String containing comment-like but inside quotes
  const r12 = LlmJson.parse('{"msg": "use // for comments or /* blocks */"}');
  TestValidator.equals("comment-like-success", r12.success, true);
  if (r12.success)
    TestValidator.equals("comment-like-data", r12.data, {
      msg: "use // for comments or /* blocks */",
    });
};
