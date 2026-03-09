import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_unicode_adjacent = (): void => {
  // Adjacent non-surrogate unicode escapes
  const r1 = LlmJson.parse('{"text": "\\u0041\\u0042\\u0043"}');
  TestValidator.equals("adjacent-basic-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("adjacent-basic-data", r1.data, { text: "ABC" });

  // Unicode escape followed by regular character
  const r2 = LlmJson.parse('{"text": "\\u0041xyz"}');
  TestValidator.equals("unicode-then-regular-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("unicode-then-regular-data", r2.data, {
      text: "Axyz",
    });

  // Unicode null character
  const r3 = LlmJson.parse('{"text": "\\u0000"}');
  TestValidator.equals("unicode-null-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("unicode-null-data", r3.data, { text: "\u0000" });

  // Unicode max BMP character
  const r4 = LlmJson.parse('{"text": "\\uFFFF"}');
  TestValidator.equals("unicode-ffff-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("unicode-ffff-data", r4.data, { text: "\uFFFF" });

  // Mixed case hex digits
  const r5 = LlmJson.parse('{"text": "\\u00aB\\u00Ab"}');
  TestValidator.equals("mixed-case-hex-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("mixed-case-hex-data", r5.data, {
      text: "\u00AB\u00AB",
    });

  // Unicode escape for common special characters
  const r6 = LlmJson.parse(
    '{"text": "\\u0022\\u005C\\u002F"}',
  );
  TestValidator.equals("unicode-special-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("unicode-special-data", r6.data, {
      text: '"\\/'.replace("\\", "\\"),
    });

  // Korean characters via unicode
  const r7 = LlmJson.parse('{"text": "\\uD55C\\uAD6D\\uC5B4"}');
  TestValidator.equals("unicode-korean-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("unicode-korean-data", r7.data, { text: "한국어" });

  // Japanese characters via unicode
  const r8 = LlmJson.parse('{"text": "\\u65E5\\u672C\\u8A9E"}');
  TestValidator.equals("unicode-japanese-success", r8.success, true);
  if (r8.success)
    TestValidator.equals("unicode-japanese-data", r8.data, { text: "日本語" });

  // isHexString boundary: G (71) just above F (70) → invalid hex
  const r9 = LlmJson.parse('{"v": "\\uGGGG"}');
  TestValidator.equals("hex-G-success", r9.success, true);
  if (r9.success) TestValidator.equals("hex-G-data", r9.data, { v: "\\uGGGG" });

  // g (103) just above f (102) → invalid hex
  const r10 = LlmJson.parse('{"v": "\\ugggg"}');
  TestValidator.equals("hex-g-success", r10.success, true);
  if (r10.success) TestValidator.equals("hex-g-data", r10.data, { v: "\\ugggg" });

  // Valid hex boundary: F (70)
  const r11 = LlmJson.parse('{"v": "\\uFFFF"}');
  TestValidator.equals("hex-F-success", r11.success, true);
  if (r11.success) TestValidator.equals("hex-F-data", r11.data, { v: "\uFFFF" });

  // Valid hex boundary: f (102)
  const r12 = LlmJson.parse('{"v": "\\uffff"}');
  TestValidator.equals("hex-f-success", r12.success, true);
  if (r12.success) TestValidator.equals("hex-f-data", r12.data, { v: "\uFFFF" });

  // : (58) just above 9 (57) → invalid hex
  const r13 = LlmJson.parse('{"v": "\\u::::"}');
  TestValidator.equals("hex-colon-success", r13.success, true);
  if (r13.success) TestValidator.equals("hex-colon-data", r13.data, { v: "\\u::::" });

  // @ (64) just below A (65) → invalid hex
  const r14 = LlmJson.parse('{"v": "\\u@@@@"}');
  TestValidator.equals("hex-at-success", r14.success, true);
  if (r14.success) TestValidator.equals("hex-at-data", r14.data, { v: "\\u@@@@" });

  // Basic unicode: \u0041 = 'A', \u4E2D = '中'
  const r15 = LlmJson.parse('{"char": "\\u0041", "chinese": "\\u4E2D"}');
  TestValidator.equals("basic-unicode-success", r15.success, true);
  if (r15.success)
    TestValidator.equals("basic-unicode-data", r15.data, { char: "A", chinese: "中" });
};
