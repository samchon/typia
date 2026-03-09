import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_string_only_escapes = (): void => {
  // String that is entirely escape sequences
  const r1 = LlmJson.parse('{"t": "\\n\\n\\n\\n\\n"}');
  TestValidator.equals("all-newlines-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("all-newlines-data", r1.data, {
      t: "\n\n\n\n\n",
    });

  // String that is entirely tabs
  const r2 = LlmJson.parse('{"t": "\\t\\t\\t"}');
  TestValidator.equals("all-tabs-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("all-tabs-data", r2.data, { t: "\t\t\t" });

  // String that is entirely quotes
  const r3 = LlmJson.parse('{"t": "\\"\\"\\""}');
  TestValidator.equals("all-quotes-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("all-quotes-data", r3.data, { t: '"""' });

  // String that is entirely backslashes
  const r4 = LlmJson.parse('{"t": "\\\\\\\\\\\\"}');
  TestValidator.equals("all-backslashes-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("all-backslashes-data", r4.data, {
      t: "\\\\\\",
    });

  // String of alternating escape sequences
  const r5 = LlmJson.parse('{"t": "\\n\\t\\r\\n\\t\\r"}');
  TestValidator.equals("alternating-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("alternating-data", r5.data, {
      t: "\n\t\r\n\t\r",
    });

  // Unknown escapes repeated
  const r6 = LlmJson.parse('{"t": "\\x\\y\\z\\w"}');
  TestValidator.equals("unknown-repeated-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("unknown-repeated-data", r6.data, {
      t: "xyzw",
    });

  // Mix of known and unknown escapes
  const r7 = LlmJson.parse('{"t": "\\n\\x\\t\\y\\r\\z"}');
  TestValidator.equals("mixed-known-unknown-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("mixed-known-unknown-data", r7.data, {
      t: "\nx\ty\rz",
    });

  // String with only unicode escapes
  const r8 = LlmJson.parse(
    '{"t": "\\u0048\\u0065\\u006C\\u006C\\u006F"}',
  );
  TestValidator.equals("unicode-only-success", r8.success, true);
  if (r8.success)
    TestValidator.equals("unicode-only-data", r8.data, { t: "Hello" });
};
