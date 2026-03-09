import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

/**
 * Final regression guard covering every remaining edge case discovered
 * through systematic mutation testing analysis.
 *
 * Each test pins down behavior that could change if a specific line
 * of the parser is modified during a rewrite.
 */
export const test_llm_json_parse_lenient_final_regression_guard = (): void => {
  // =========================================================================
  // 1. MINUS BEFORE BRACE: startsWithPrimitive sees '-', enters primitive
  //    path, parseNumber reads just '-' (NaN→0), object/array is ignored
  // =========================================================================
  const m1 = LlmJson.parse('-{"key":1}');
  TestValidator.equals("minus-brace-success", m1.success, true);
  if (m1.success) TestValidator.equals("minus-brace-data", m1.data, 0);

  const m2 = LlmJson.parse("-[1,2]");
  TestValidator.equals("minus-bracket-success", m2.success, true);
  if (m2.success) TestValidator.equals("minus-bracket-data", m2.data, 0);

  // =========================================================================
  // 2. UNCLOSED MULTI-LINE COMMENT IN JUNK PREFIX (findJsonStart path)
  //    findJsonStart's comment-skip absorbs everything including the {
  //    This is different from unclosed comments in skipWhitespace (inside JSON)
  // =========================================================================
  const u1 = LlmJson.parse('/* unclosed {"key": 1}');
  TestValidator.equals("unclosed-junk-comment-success", u1.success, false);

  const u2 = LlmJson.parse("/* unclosed [1, 2]");
  TestValidator.equals("unclosed-junk-comment-arr-success", u2.success, false);

  // Unclosed comment with NO JSON inside (comment-only)
  const u3 = LlmJson.parse("/* just a comment");
  TestValidator.equals("unclosed-comment-only-success", u3.success, false);

  // =========================================================================
  // 3. skipToRecoveryPoint REACHING EOF
  //    Invalid identifier in unclosed structure → skipToRecoveryPoint runs
  //    to end of input without finding ,}]
  // =========================================================================

  // Invalid identifier in unclosed array → recovery to EOF → [undefined]
  const s1 = LlmJson.parse("[abc");
  TestValidator.equals("recovery-eof-arr-success", s1.success, false);
  if (!s1.success) {
    const data = s1.data as any;
    TestValidator.equals("recovery-eof-arr-is-array", Array.isArray(data), true);
    TestValidator.equals("recovery-eof-arr-length", (data as any[]).length, 1);
  }

  // Invalid identifier in unclosed object → recovery to EOF → {k: undefined}
  const s2 = LlmJson.parse('{"k": abc');
  TestValidator.equals("recovery-eof-obj-success", s2.success, false);
  if (!s2.success) {
    TestValidator.equals("recovery-eof-obj-has-k", "k" in (s2.data as any), true);
    TestValidator.equals("recovery-eof-obj-k", (s2.data as any)?.k, undefined);
  }

  // Multiple invalid identifiers with spaces in unclosed array
  const s3 = LlmJson.parse("[abc def");
  TestValidator.equals("recovery-eof-multi-success", s3.success, false);

  // =========================================================================
  // 4. ROOT-LEVEL DOT AND PLUS: pinning down that '.' and '+' are NOT
  //    recognized as number starts by startsWithPrimitive
  // =========================================================================
  const d1 = LlmJson.parse(".5");
  TestValidator.equals("dot-five-success", d1.success, false);

  const d2 = LlmJson.parse("+5");
  TestValidator.equals("plus-five-success", d2.success, false);

  const d3 = LlmJson.parse(".");
  TestValidator.equals("dot-alone-success", d3.success, false);

  const d4 = LlmJson.parse("+");
  TestValidator.equals("plus-alone-success", d4.success, false);

  // =========================================================================
  // 5. MULTIPLE CONSECUTIVE COMMAS IN OBJECT: each comma is skipped
  //    individually → empty object or sparse object
  // =========================================================================
  const c1 = LlmJson.parse("{,,,,}");
  TestValidator.equals("multi-comma-obj-success", c1.success, true);
  if (c1.success) TestValidator.equals("multi-comma-obj-data", c1.data, {});

  const c2 = LlmJson.parse("{,,,a:1,,,}");
  TestValidator.equals("comma-around-key-success", c2.success, true);
  if (c2.success)
    TestValidator.equals("comma-around-key-data", c2.data, { a: 1 });

  // =========================================================================
  // 6. isHexString BOUNDARY VALIDATION: characters just outside valid ranges
  //    Valid: 0-9 (48-57), A-F (65-70), a-f (97-102)
  //    Invalid boundaries: / (47), : (58), @ (64), G (71), ` (96), g (103)
  // =========================================================================

  // G (71) just above F (70) → invalid hex
  const h1 = LlmJson.parse('{"v": "\\uGGGG"}');
  TestValidator.equals("hex-G-success", h1.success, true);
  if (h1.success)
    TestValidator.equals("hex-G-data", h1.data, { v: "\\uGGGG" });

  // g (103) just above f (102) → invalid hex (lowercase boundary)
  const h2 = LlmJson.parse('{"v": "\\ugggg"}');
  TestValidator.equals("hex-g-success", h2.success, true);
  if (h2.success)
    TestValidator.equals("hex-g-data", h2.data, { v: "\\ugggg" });

  // Valid boundary: F (70) and f (102) → valid hex
  const h3 = LlmJson.parse('{"v": "\\uFFFF"}');
  TestValidator.equals("hex-F-success", h3.success, true);
  if (h3.success)
    TestValidator.equals("hex-F-data", h3.data, { v: "\uFFFF" });

  const h4 = LlmJson.parse('{"v": "\\uffff"}');
  TestValidator.equals("hex-f-success", h4.success, true);
  if (h4.success)
    TestValidator.equals("hex-f-data", h4.data, { v: "\uFFFF" });

  // : (58) just above 9 (57) → invalid hex
  const h5 = LlmJson.parse('{"v": "\\u::::"}');
  TestValidator.equals("hex-colon-success", h5.success, true);
  if (h5.success)
    TestValidator.equals("hex-colon-data", h5.data, { v: "\\u::::" });

  // @ (64) just below A (65) → invalid hex
  const h6 = LlmJson.parse('{"v": "\\u@@@@"}');
  TestValidator.equals("hex-at-success", h6.success, true);
  if (h6.success)
    TestValidator.equals("hex-at-data", h6.data, { v: "\\u@@@@" });
};
