import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_escape_slash_sequences = (): void => {
  // Escaped forward slash (valid JSON but rarely used)
  const r1 = LlmJson.parse('{"url": "http:\\/\\/example.com"}');
  TestValidator.equals("escaped-slash-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("escaped-slash-data", r1.data, {
      url: "http://example.com",
    });

  // Mixed escaped and unescaped slashes
  const r2 = LlmJson.parse('{"path": "\\/root/dir\\/file"}');
  TestValidator.equals("mixed-slash-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("mixed-slash-data", r2.data, {
      path: "/root/dir/file",
    });

  // Multiple backslashes before quote: \\\\" means \\ then end of string
  const r3 = LlmJson.parse('{"text": "end\\\\"}');
  TestValidator.equals("double-bs-end-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("double-bs-end-data", r3.data, { text: "end\\" });

  // Triple backslash before quote: \\\\\\" means \\ then \"
  const r4 = LlmJson.parse('{"text": "end\\\\\\"more"}');
  TestValidator.equals("triple-bs-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("triple-bs-data", r4.data, {
      text: 'end\\"more',
    });

  // Four backslashes: \\\\\\\\ means \\\\
  const r5 = LlmJson.parse('{"text": "\\\\\\\\"}');
  TestValidator.equals("quad-bs-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("quad-bs-data", r5.data, { text: "\\\\" });

  // Unknown escape followed by valid escape
  const r6 = LlmJson.parse('{"text": "\\x\\n"}');
  TestValidator.equals("unknown-then-valid-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("unknown-then-valid-data", r6.data, {
      text: "x\n",
    });
};
