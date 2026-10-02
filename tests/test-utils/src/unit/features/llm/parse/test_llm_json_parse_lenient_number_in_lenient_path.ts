import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that fallback parsing decodes decimal and exponent spellings.
 *
 * Unquoted keys force fallback parsing so native JSON parsing cannot conceal a
 * missing decimal or exponent branch.
 *
 * 1. Exercise positive/negative/zero-leading decimals, lower/uppercase exponents,
 *    signs and combined decimal/exponent values.
 * 2. Compare the retained results with literal expectations.
 *
 */
export const test_llm_json_parse_lenient_number_in_lenient_path = (): void => {
  // =========================================================================
  // 1. DECIMAL NUMBERS (lines 772-781)
  // =========================================================================

  // Basic decimal
  const d1 = LlmJson.parse("{val: 3.14}");
  TestEquality.equals("decimal-success", d1.success, true);
  if (d1.success) TestEquality.equals("decimal-data", d1.data, { val: 3.14 });

  // Negative decimal
  const d2 = LlmJson.parse("{val: -2.5}");
  TestEquality.equals("neg-decimal-success", d2.success, true);
  if (d2.success)
    TestEquality.equals("neg-decimal-data", d2.data, { val: -2.5 });

  // Zero decimal
  const d3 = LlmJson.parse("{val: 0.001}");
  TestEquality.equals("zero-decimal-success", d3.success, true);
  if (d3.success)
    TestEquality.equals("zero-decimal-data", d3.data, { val: 0.001 });

  // =========================================================================
  // 2. EXPONENT WITH LOWERCASE 'e' (line 786)
  // =========================================================================

  const e1 = LlmJson.parse("{val: 1e5}");
  TestEquality.equals("exp-lower-success", e1.success, true);
  if (e1.success)
    TestEquality.equals("exp-lower-data", e1.data, { val: 100000 });

  // =========================================================================
  // 3. EXPONENT WITH UPPERCASE 'E' (line 786)
  // =========================================================================

  const e2 = LlmJson.parse("{val: 1E5}");
  TestEquality.equals("exp-upper-success", e2.success, true);
  if (e2.success)
    TestEquality.equals("exp-upper-data", e2.data, { val: 100000 });

  // =========================================================================
  // 4. EXPONENT WITH SIGN (lines 789-793)
  // =========================================================================

  // Positive sign
  const s1 = LlmJson.parse("{val: 1e+5}");
  TestEquality.equals("exp-plus-success", s1.success, true);
  if (s1.success)
    TestEquality.equals("exp-plus-data", s1.data, { val: 100000 });

  // Negative sign
  const s2 = LlmJson.parse("{val: 1e-3}");
  TestEquality.equals("exp-minus-success", s2.success, true);
  if (s2.success)
    TestEquality.equals("exp-minus-data", s2.data, { val: 0.001 });

  // =========================================================================
  // 5. DECIMAL + EXPONENT COMBINED (full parseNumber path)
  // =========================================================================

  const c1 = LlmJson.parse("{val: 3.14e2}");
  TestEquality.equals("dec-exp-success", c1.success, true);
  if (c1.success) TestEquality.equals("dec-exp-data", c1.data, { val: 314 });

  // Decimal + exponent + negative sign
  const c2 = LlmJson.parse("{val: 6.022e-23}");
  TestEquality.equals("dec-exp-neg-success", c2.success, true);
  if (c2.success)
    TestEquality.equals("dec-exp-neg-data", c2.data, { val: 6.022e-23 });

  // Decimal + uppercase E + positive sign
  const c3 = LlmJson.parse("{val: 1.5E+3}");
  TestEquality.equals("dec-E-plus-success", c3.success, true);
  if (c3.success)
    TestEquality.equals("dec-E-plus-data", c3.data, { val: 1500 });
};
