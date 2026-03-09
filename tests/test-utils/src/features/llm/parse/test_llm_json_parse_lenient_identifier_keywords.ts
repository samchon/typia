import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_identifier_keywords = (): void => {
  // Uppercase TRUE - not recognized as boolean (treated as invalid identifier)
  const r1 = LlmJson.parse('{"val": TRUE}');
  TestValidator.equals("TRUE-success", r1.success, false);

  // Uppercase FALSE
  const r2 = LlmJson.parse('{"val": FALSE}');
  TestValidator.equals("FALSE-success", r2.success, false);

  // Uppercase NULL
  const r3 = LlmJson.parse('{"val": NULL}');
  TestValidator.equals("NULL-success", r3.success, false);

  // NaN - invalid identifier
  const r4 = LlmJson.parse('{"val": NaN}');
  TestValidator.equals("NaN-success", r4.success, false);

  // Infinity - invalid identifier
  const r5 = LlmJson.parse('{"val": Infinity}');
  TestValidator.equals("Infinity-success", r5.success, false);

  // -Infinity - minus starts number parsing → "-" → NaN → 0
  // Then "Infinity" is left as an unquoted key, but no colon follows → error
  const r6 = LlmJson.parse('{"val": -Infinity}');
  TestValidator.equals("neg-Infinity-success", r6.success, false);
  if (!r6.success) {
    TestValidator.equals("neg-Infinity-val", (r6.data as any)?.val, 0);
  }

  // undefined - invalid identifier
  const r7 = LlmJson.parse('{"val": undefined}');
  TestValidator.equals("undefined-success", r7.success, false);

  // Mixed case - True (capital T)
  const r8 = LlmJson.parse('{"val": True}');
  TestValidator.equals("True-success", r8.success, false);

  // Mixed case - False
  const r9 = LlmJson.parse('{"val": False}');
  TestValidator.equals("False-success", r9.success, false);

  // Mixed case - Null
  const r10 = LlmJson.parse('{"val": Null}');
  TestValidator.equals("Null-success", r10.success, false);

  // "Yes" as value in object (boolean coercion)
  const r11 = LlmJson.parse('{"val": Yes}');
  TestValidator.equals("Yes-obj-success", r11.success, true);
  if (r11.success)
    TestValidator.equals("Yes-obj-data", r11.data, { val: true });

  // "No" as value in object
  const r12 = LlmJson.parse('{"val": No}');
  TestValidator.equals("No-obj-success", r12.success, true);
  if (r12.success)
    TestValidator.equals("No-obj-data", r12.data, { val: false });

  // "On" as value in object
  const r13 = LlmJson.parse('{"val": On}');
  TestValidator.equals("On-obj-success", r13.success, true);
  if (r13.success)
    TestValidator.equals("On-obj-data", r13.data, { val: true });

  // "Off" as value in object
  const r14 = LlmJson.parse('{"val": Off}');
  TestValidator.equals("Off-obj-success", r14.success, true);
  if (r14.success)
    TestValidator.equals("Off-obj-data", r14.data, { val: false });

  // "YES" in object
  const r15 = LlmJson.parse('{"val": YES}');
  TestValidator.equals("YES-obj-success", r15.success, true);
  if (r15.success)
    TestValidator.equals("YES-obj-data", r15.data, { val: true });

  // Keyword-prefixed identifiers as VALUES (not keys) should fail
  // "trueish" starts with "true" but is longer → matches "true".startsWith("trueish")? No.
  // But token="trueish", exact match fails, lower check fails, "true".startsWith("trueish") fails
  // → invalid identifier → error
  const r16 = LlmJson.parse('{"val": trueish}');
  TestValidator.equals("trueish-success", r16.success, false);

  // "nullify" as value
  const r17 = LlmJson.parse('{"val": nullify}');
  TestValidator.equals("nullify-success", r17.success, false);

  // Missing opening quote: abc" → detected and returns "abc" with error
  const r18 = LlmJson.parse('{"val": abc"}');
  TestValidator.equals("missing-open-quote-success", r18.success, false);
  if (!r18.success) {
    TestValidator.equals(
      "missing-open-quote-data",
      (r18.data as any)?.val,
      "abc",
    );
  }

  // Invalid identifier in unclosed array → skipToRecoveryPoint reaches EOF
  const r19 = LlmJson.parse("[abc");
  TestValidator.equals("recovery-eof-arr-success", r19.success, false);
  if (!r19.success) {
    const data19 = r19.data as any;
    TestValidator.equals("recovery-eof-arr-is-array", Array.isArray(data19), true);
    TestValidator.equals("recovery-eof-arr-length", (data19 as any[]).length, 1);
  }

  // Invalid identifier in unclosed object → recovery to EOF
  const r20 = LlmJson.parse('{"k": abc');
  TestValidator.equals("recovery-eof-obj-success", r20.success, false);
  if (!r20.success) {
    TestValidator.equals("recovery-eof-obj-has-k", "k" in (r20.data as any), true);
    TestValidator.equals("recovery-eof-obj-k", (r20.data as any)?.k, undefined);
  }

  // Multiple invalid identifiers in unclosed array
  const r21 = LlmJson.parse("[abc def");
  TestValidator.equals("recovery-eof-multi-success", r21.success, false);

  // Invalid keyword starting with valid letter
  const r22 = LlmJson.parse('{"value": tralse}');
  TestValidator.equals("tralse-success", r22.success, false);
  if (!r22.success) {
    TestValidator.equals("tralse-has-errors", r22.errors.length > 0, true);
  }
};
