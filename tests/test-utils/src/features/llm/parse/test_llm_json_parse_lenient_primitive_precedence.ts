import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

/**
 * Tests that primitive values take precedence over objects/arrays
 * when both appear in the same input.
 *
 * The parser checks `startsWithPrimitive` BEFORE `findJsonStart`.
 * If someone reorders these checks, primitives would be skipped
 * and the object/array would be returned instead.
 *
 * This is the critical behavioral contract:
 * - Standard keywords (`true`, `false`, `null`) use prefix matching
 *   → they win even when followed by JSON structures
 * - Boolean coercion keywords (`yes`, `no`, `on`, `off`, `y`) use exact matching
 *   → they only win when they are the ENTIRE input
 */
export const test_llm_json_parse_lenient_primitive_precedence = (): void => {
  // true + object → true wins (prefix match via input.startsWith("true"))
  const r1 = LlmJson.parse('true {"key": 1}');
  TestValidator.equals("true-obj-success", r1.success, true);
  if (r1.success) TestValidator.equals("true-obj-data", r1.data, true);

  // false + array → false wins
  const r2 = LlmJson.parse("false [1, 2, 3]");
  TestValidator.equals("false-arr-success", r2.success, true);
  if (r2.success) TestValidator.equals("false-arr-data", r2.data, false);

  // null + object → null wins
  const r3 = LlmJson.parse('null {"key": 1}');
  TestValidator.equals("null-obj-success", r3.success, true);
  if (r3.success) TestValidator.equals("null-obj-data", r3.data, null);

  // number + object → number wins
  const r4 = LlmJson.parse('42 {"key": 1}');
  TestValidator.equals("num-obj-success", r4.success, true);
  if (r4.success) TestValidator.equals("num-obj-data", r4.data, 42);

  // negative number + array → number wins
  const r5 = LlmJson.parse("-5 [1, 2]");
  TestValidator.equals("neg-arr-success", r5.success, true);
  if (r5.success) TestValidator.equals("neg-arr-data", r5.data, -5);

  // string + object → string wins (startsWithPrimitive sees '"')
  const r6 = LlmJson.parse('"hello" {"key": 1}');
  TestValidator.equals("str-obj-success", r6.success, true);
  if (r6.success) TestValidator.equals("str-obj-data", r6.data, "hello");

  // Partial keyword + object → object wins!
  // "tru" partial match uses "true".startsWith(input) where input is the
  // FULL string "tru {\"key\": 1}" — too long to be a prefix of "true".
  // So startsWithPrimitive returns false, and findJsonStart finds the object.
  const r7 = LlmJson.parse('tru {"key": 1}');
  TestValidator.equals("partial-obj-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("partial-obj-data", r7.data, { key: 1 });

  // "yes" + object → object wins! (yes uses exact match, not prefix)
  const r8 = LlmJson.parse('yes {"key": 1}');
  TestValidator.equals("yes-obj-success", r8.success, true);
  if (r8.success)
    TestValidator.equals("yes-obj-data", r8.data, { key: 1 });

  // "yes" alone → true (exact match works)
  const r9 = LlmJson.parse("yes");
  TestValidator.equals("yes-alone-success", r9.success, true);
  if (r9.success) TestValidator.equals("yes-alone-data", r9.data, true);

  // "no" + object → object wins (exact match only)
  const r10 = LlmJson.parse('no {"key": 1}');
  TestValidator.equals("no-obj-success", r10.success, true);
  if (r10.success)
    TestValidator.equals("no-obj-data", r10.data, { key: 1 });

  // "on" + array → array wins (exact match only)
  const r11 = LlmJson.parse("on [1, 2]");
  TestValidator.equals("on-arr-success", r11.success, true);
  if (r11.success) TestValidator.equals("on-arr-data", r11.data, [1, 2]);

  // 0 + object → 0 wins (number prefix)
  const r12 = LlmJson.parse('0 {"key": 1}');
  TestValidator.equals("zero-obj-success", r12.success, true);
  if (r12.success) TestValidator.equals("zero-obj-data", r12.data, 0);

  // minus before brace: startsWithPrimitive sees '-', parseNumber reads
  // just '-' (NaN→0), object/array is ignored
  const r13 = LlmJson.parse('-{"key":1}');
  TestValidator.equals("minus-brace-success", r13.success, true);
  if (r13.success) TestValidator.equals("minus-brace-data", r13.data, 0);

  const r14 = LlmJson.parse("-[1,2]");
  TestValidator.equals("minus-bracket-success", r14.success, true);
  if (r14.success) TestValidator.equals("minus-bracket-data", r14.data, 0);

  // =========================================================================
  // startsWithPrimitive passes but parsing fails (lines 60-61)
  // "trueish".startsWith("true") → true, but parseKeywordOrIdentifier
  // extracts "trueish" which is an invalid identifier → error
  // =========================================================================

  // "trueish" at root level
  const r15 = LlmJson.parse("trueish");
  TestValidator.equals("trueish-root-success", r15.success, false);
  if (!r15.success)
    TestValidator.equals("trueish-root-errors", r15.errors.length > 0, true);

  // "falsetto" at root level
  const r16 = LlmJson.parse("falsetto");
  TestValidator.equals("falsetto-root-success", r16.success, false);

  // "nullable" at root level
  const r17 = LlmJson.parse("nullable");
  TestValidator.equals("nullable-root-success", r17.success, false);

  // =========================================================================
  // Same pattern after comment stripping (lines 78-79)
  // findJsonStart returns -1, skipCommentsAndWhitespace strips to "trueish",
  // startsWithPrimitive("trueish") → true, parser runs on original → fails
  // =========================================================================

  // "trueish" after line comment
  const r18 = LlmJson.parse("// comment\ntrueish");
  TestValidator.equals("comment-trueish-success", r18.success, false);

  // "falsetto" after block comment
  const r19 = LlmJson.parse("/* block */falsetto");
  TestValidator.equals("comment-falsetto-success", r19.success, false);
};
