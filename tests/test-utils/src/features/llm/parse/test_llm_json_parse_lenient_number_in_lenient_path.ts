import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

/**
 * CRITICAL: Tests parseNumber features specifically in the LENIENT parser path.
 *
 * The existing number tests (`number_decimal.ts`, `number_exponent.ts`, etc.)
 * use valid JSON inputs like `{"val": 3.14}` that pass JSON.parse successfully,
 * meaning the lenient parser's parseNumber method is NEVER invoked. If someone
 * removes the decimal parsing (lines 772-781) or exponent parsing (lines
 * 784-801), no existing test would catch it.
 *
 * This test forces the lenient parser by using UNQUOTED KEYS (e.g., `{val: 3.14}`)
 * which cause JSON.parse to fail. The numbers in the values are then processed
 * by the lenient parser's own parseNumber method.
 *
 * parseNumber sections tested:
 * - Decimal point + digit loop (lines 772-781)
 * - Exponent letter 'e' (line 786)
 * - Exponent letter 'E' (line 786)
 * - Exponent sign '+'/'-' (lines 789-793)
 * - Exponent digit loop (lines 795-801)
 */
export const test_llm_json_parse_lenient_number_in_lenient_path = (): void => {
  // =========================================================================
  // 1. DECIMAL NUMBERS (lines 772-781)
  // =========================================================================

  // Basic decimal
  const d1 = LlmJson.parse("{val: 3.14}");
  TestValidator.equals("decimal-success", d1.success, true);
  if (d1.success) TestValidator.equals("decimal-data", d1.data, { val: 3.14 });

  // Negative decimal
  const d2 = LlmJson.parse("{val: -2.5}");
  TestValidator.equals("neg-decimal-success", d2.success, true);
  if (d2.success)
    TestValidator.equals("neg-decimal-data", d2.data, { val: -2.5 });

  // Zero decimal
  const d3 = LlmJson.parse("{val: 0.001}");
  TestValidator.equals("zero-decimal-success", d3.success, true);
  if (d3.success)
    TestValidator.equals("zero-decimal-data", d3.data, { val: 0.001 });

  // =========================================================================
  // 2. EXPONENT WITH LOWERCASE 'e' (line 786)
  // =========================================================================

  const e1 = LlmJson.parse("{val: 1e5}");
  TestValidator.equals("exp-lower-success", e1.success, true);
  if (e1.success)
    TestValidator.equals("exp-lower-data", e1.data, { val: 100000 });

  // =========================================================================
  // 3. EXPONENT WITH UPPERCASE 'E' (line 786)
  // =========================================================================

  const e2 = LlmJson.parse("{val: 1E5}");
  TestValidator.equals("exp-upper-success", e2.success, true);
  if (e2.success)
    TestValidator.equals("exp-upper-data", e2.data, { val: 100000 });

  // =========================================================================
  // 4. EXPONENT WITH SIGN (lines 789-793)
  // =========================================================================

  // Positive sign
  const s1 = LlmJson.parse("{val: 1e+5}");
  TestValidator.equals("exp-plus-success", s1.success, true);
  if (s1.success)
    TestValidator.equals("exp-plus-data", s1.data, { val: 100000 });

  // Negative sign
  const s2 = LlmJson.parse("{val: 1e-3}");
  TestValidator.equals("exp-minus-success", s2.success, true);
  if (s2.success)
    TestValidator.equals("exp-minus-data", s2.data, { val: 0.001 });

  // =========================================================================
  // 5. DECIMAL + EXPONENT COMBINED (full parseNumber path)
  // =========================================================================

  const c1 = LlmJson.parse("{val: 3.14e2}");
  TestValidator.equals("dec-exp-success", c1.success, true);
  if (c1.success)
    TestValidator.equals("dec-exp-data", c1.data, { val: 314 });

  // Decimal + exponent + negative sign
  const c2 = LlmJson.parse("{val: 6.022e-23}");
  TestValidator.equals("dec-exp-neg-success", c2.success, true);
  if (c2.success)
    TestValidator.equals("dec-exp-neg-data", c2.data, { val: 6.022e-23 });

  // Decimal + uppercase E + positive sign
  const c3 = LlmJson.parse("{val: 1.5E+3}");
  TestValidator.equals("dec-E-plus-success", c3.success, true);
  if (c3.success)
    TestValidator.equals("dec-E-plus-data", c3.data, { val: 1500 });
};
