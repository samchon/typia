import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that truncated Unicode escapes retain the available prefix.
 *
 * An incomplete escape is literal recovery text until four valid digits are
 * available.
 *
 * 1. Exercise zero through four digits, partial low-surrogate escapes, following
 *    newline/text, root EOF input and a closed incomplete escape with complete
 *    recovered data.
 * 2. Compare the retained results and original assertion outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns zero through four digits, partial low-surrogate escapes, following newline/text, root EOF input and a closed incomplete escape with complete recovered data; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_unicode_truncation_systematic =
  (): void => {
    // Unicode escape \u0041 truncated at every position
    // After \u with 0 hex digits
    const r1 = LlmJson.parse('{"t": "\\u');
    TestEquality.equals("u-only-success", r1.success, true);
    if (r1.success) TestEquality.equals("u-only-data", r1.data, { t: "\\u" });

    // After \u with 1 hex digit
    const r2 = LlmJson.parse('{"t": "\\u0');
    TestEquality.equals("u-1hex-success", r2.success, true);
    if (r2.success) TestEquality.equals("u-1hex-data", r2.data, { t: "\\u0" });

    // After \u with 2 hex digits
    const r3 = LlmJson.parse('{"t": "\\u00');
    TestEquality.equals("u-2hex-success", r3.success, true);
    if (r3.success) TestEquality.equals("u-2hex-data", r3.data, { t: "\\u00" });

    // After \u with 3 hex digits
    const r4 = LlmJson.parse('{"t": "\\u004');
    TestEquality.equals("u-3hex-success", r4.success, true);
    if (r4.success)
      TestEquality.equals("u-3hex-data", r4.data, { t: "\\u004" });

    // Complete \u with 4 hex digits (but string unclosed)
    const r5 = LlmJson.parse('{"t": "\\u0041');
    TestEquality.equals("u-4hex-success", r5.success, true);
    if (r5.success) TestEquality.equals("u-4hex-data", r5.data, { t: "A" });

    // Surrogate pair truncation: \uD83D\uDE00 at every position
    // High surrogate complete, then \u
    const r6 = LlmJson.parse('{"t": "\\uD83D\\u');
    TestEquality.equals("surr-u-success", r6.success, true);
    if (r6.success)
      TestEquality.equals("surr-u-data", r6.data, { t: "\uD83D\\u" });

    // High surrogate complete, then \uD
    const r7 = LlmJson.parse('{"t": "\\uD83D\\uD');
    TestEquality.equals("surr-uD-success", r7.success, true);
    if (r7.success)
      TestEquality.equals("surr-uD-data", r7.data, {
        t: "\uD83D\\uD",
      });

    // High surrogate complete, then \uDE
    const r8 = LlmJson.parse('{"t": "\\uD83D\\uDE');
    TestEquality.equals("surr-uDE-success", r8.success, true);
    if (r8.success)
      TestEquality.equals("surr-uDE-data", r8.data, {
        t: "\uD83D\\uDE",
      });

    // High surrogate complete, then \uDE0
    const r9 = LlmJson.parse('{"t": "\\uD83D\\uDE0');
    TestEquality.equals("surr-uDE0-success", r9.success, true);
    if (r9.success)
      TestEquality.equals("surr-uDE0-data", r9.data, {
        t: "\uD83D\\uDE0",
      });

    // High surrogate complete, then \uDE00 (complete pair)
    const r10 = LlmJson.parse('{"t": "\\uD83D\\uDE00');
    TestEquality.equals("surr-complete-success", r10.success, true);
    if (r10.success)
      TestEquality.equals("surr-complete-data", r10.data, {
        t: "\uD83D\uDE00",
      });

    // High surrogate followed by backslash but no u
    const r11 = LlmJson.parse('{"t": "\\uD83D\\n');
    TestEquality.equals("surr-then-n-success", r11.success, true);
    if (r11.success)
      TestEquality.equals("surr-then-n-data", r11.data, {
        t: "\uD83D\n",
      });

    // High surrogate followed by non-escape character
    const r12 = LlmJson.parse('{"t": "\\uD83Dhello"}');
    TestEquality.equals("surr-then-text-success", r12.success, true);
    if (r12.success)
      TestEquality.equals("surr-then-text-data", r12.data, {
        t: "\uD83Dhello",
      });

    // Just \u at end of input (no hex digits at all, string unclosed)
    const r13 = LlmJson.parse('"\\u');
    TestEquality.equals("root-u-only-success", r13.success, true);
    if (r13.success) TestEquality.equals("root-u-only-data", r13.data, "\\u");

    // Unicode escape with exactly 4 chars but they wrap around string end
    // \u00 then end quote → only 2 hex chars available
    const r14 = LlmJson.parse('{"t": "\\u00"}');
    TestEquality.equals("u-2hex-closed-success", r14.success, true);
    if (r14.success)
      TestEquality.equals("u-2hex-closed-data", r14.data, { t: "\\u00" });

    // Incomplete unicode escape in unclosed string
    const r15 = LlmJson.parse('{"text": "hello\\u00');
    TestEquality.equals("incomplete-u-success", r15.success, true);
    if (r15.success)
      TestEquality.equals("incomplete-u-data", r15.data, {
        text: "hello\\u00",
      });
  };
