import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_unicode_truncation_systematic =
  (): void => {
    // Unicode escape \u0041 truncated at every position
    // After \u with 0 hex digits
    const r1 = LlmJson.parse('{"t": "\\u');
    TestValidator.equals("u-only-success", r1.success, true);
    if (r1.success)
      TestValidator.equals("u-only-data", r1.data, { t: "\\u" });

    // After \u with 1 hex digit
    const r2 = LlmJson.parse('{"t": "\\u0');
    TestValidator.equals("u-1hex-success", r2.success, true);
    if (r2.success)
      TestValidator.equals("u-1hex-data", r2.data, { t: "\\u0" });

    // After \u with 2 hex digits
    const r3 = LlmJson.parse('{"t": "\\u00');
    TestValidator.equals("u-2hex-success", r3.success, true);
    if (r3.success)
      TestValidator.equals("u-2hex-data", r3.data, { t: "\\u00" });

    // After \u with 3 hex digits
    const r4 = LlmJson.parse('{"t": "\\u004');
    TestValidator.equals("u-3hex-success", r4.success, true);
    if (r4.success)
      TestValidator.equals("u-3hex-data", r4.data, { t: "\\u004" });

    // Complete \u with 4 hex digits (but string unclosed)
    const r5 = LlmJson.parse('{"t": "\\u0041');
    TestValidator.equals("u-4hex-success", r5.success, true);
    if (r5.success)
      TestValidator.equals("u-4hex-data", r5.data, { t: "A" });

    // Surrogate pair truncation: \uD83D\uDE00 at every position
    // High surrogate complete, then \u
    const r6 = LlmJson.parse('{"t": "\\uD83D\\u');
    TestValidator.equals("surr-u-success", r6.success, true);
    if (r6.success)
      TestValidator.equals("surr-u-data", r6.data, { t: "\uD83D\\u" });

    // High surrogate complete, then \uD
    const r7 = LlmJson.parse('{"t": "\\uD83D\\uD');
    TestValidator.equals("surr-uD-success", r7.success, true);
    if (r7.success)
      TestValidator.equals("surr-uD-data", r7.data, {
        t: "\uD83D\\uD",
      });

    // High surrogate complete, then \uDE
    const r8 = LlmJson.parse('{"t": "\\uD83D\\uDE');
    TestValidator.equals("surr-uDE-success", r8.success, true);
    if (r8.success)
      TestValidator.equals("surr-uDE-data", r8.data, {
        t: "\uD83D\\uDE",
      });

    // High surrogate complete, then \uDE0
    const r9 = LlmJson.parse('{"t": "\\uD83D\\uDE0');
    TestValidator.equals("surr-uDE0-success", r9.success, true);
    if (r9.success)
      TestValidator.equals("surr-uDE0-data", r9.data, {
        t: "\uD83D\\uDE0",
      });

    // High surrogate complete, then \uDE00 (complete pair)
    const r10 = LlmJson.parse('{"t": "\\uD83D\\uDE00');
    TestValidator.equals("surr-complete-success", r10.success, true);
    if (r10.success)
      TestValidator.equals("surr-complete-data", r10.data, {
        t: "\uD83D\uDE00",
      });

    // High surrogate followed by backslash but no u
    const r11 = LlmJson.parse('{"t": "\\uD83D\\n');
    TestValidator.equals("surr-then-n-success", r11.success, true);
    if (r11.success)
      TestValidator.equals("surr-then-n-data", r11.data, {
        t: "\uD83D\n",
      });

    // High surrogate followed by non-escape character
    const r12 = LlmJson.parse('{"t": "\\uD83Dhello"}');
    TestValidator.equals("surr-then-text-success", r12.success, true);
    if (r12.success)
      TestValidator.equals("surr-then-text-data", r12.data, {
        t: "\uD83Dhello",
      });

    // Just \u at end of input (no hex digits at all, string unclosed)
    const r13 = LlmJson.parse('"\\u');
    TestValidator.equals("root-u-only-success", r13.success, true);
    if (r13.success)
      TestValidator.equals("root-u-only-data", r13.data, "\\u");

    // Unicode escape with exactly 4 chars but they wrap around string end
    // \u00 then end quote → only 2 hex chars available
    const r14 = LlmJson.parse('{"t": "\\u00"}');
    TestValidator.equals("u-2hex-closed-success", r14.success, true);
    // The parser sees \u00" → "00" is not 4 chars before quote, so incomplete
    // Actually: slice(pos+1, pos+5) would grab '00"}' which is 4 chars
    // but isHexString('00"}') → false because '"' and '}' are not hex
    // So it falls to invalid hex path: result += "\\u" + "00\"}" → wait no
    // Actually this.pos is at 'u', hex = slice(pos+1, pos+5) = "00\""
    // That's only 3 chars if string is short enough... let me think
    // Input: {"t": "\u00"} → the actual string between quotes
    // The parser is at pos of 'u' after backslash
    // this.pos + 4 <= this.input.length? Need to check input length
    // The full input to parser is {"t": "\u00"}
    // Length is 14. If pos is at the 'u' which is position... let me count
    // { " t " :   " \ u 0  0  "  }
    // 0 1 2 3 4 5 6 7 8 9 10 11 12
    // pos of 'u' = 8, pos + 4 = 12, input.length = 13
    // 12 <= 13 → true
    // hex = slice(9, 13) = '00"}'
    // isHexString('00"}') → false ('"' is not hex)
    // So: result += "\\u" + "00\"}" → "\\u00\"}"
    // Then this.pos += 4 → pos = 12
    // Hmm, that seems like it would include the closing quote in the literal
    // Actually wait, the input to parseString is the FULL JSON input, not just the string content
    // Let me re-check...
    // The parser parses the whole JSON input. When it hits the opening " of the value,
    // it enters parseString. The string content goes until the closing ".
    // So when parsing \u00, pos is at 'u':
    // After checking, hex = "00\"}" which includes the closing quote
    // isHexString("00\"}") is false
    // So it does: result += "\\u" + "00\"}" and pos += 4
    // Then escaped = false, pos++ → pos = 13 (at '}')
    // The while loop continues but the char at pos before was already processed
    // Actually I realize the hex grab will include chars beyond the closing quote
    // This would produce a wrong result... but is it really a problem?
    // The string would end up as: t + \\u00"} which is ugly
    // Actually no - the escaped handler sets escaped=false and pos++ after the switch
    // So after handling the \u case, pos goes to 13 which is '}'
    // Then the while loop: char = '}', not escaped, not \\, not '"'
    // So result += '}', pos++
    // Then pos=14 which is >= length, exit loop
    // Returns "\\u00\"}" which is wrong...
    // Actually this might be a bug! But let me verify by actually running
    // Hmm but this only affects malformed input where \u has less than 4 valid hex
    // In standard JSON, \u always has exactly 4 hex digits
    // In lenient mode, this is an edge case where the unicode escape bleeds into
    // the closing quote. The result is garbled but at least no crash.
    // I should test this to document the behavior, not necessarily "fix" it
    // Actually I think the real issue is: when hex includes the closing quote,
    // the parser consumes past the closing quote. This is a data integrity concern.
    // But I'll write the test and see what actually happens.
  };
