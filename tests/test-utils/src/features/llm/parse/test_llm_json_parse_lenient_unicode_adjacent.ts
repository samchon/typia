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
};
