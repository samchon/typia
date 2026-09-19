import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_number_edge_cases = (): void => {
  // Zero
  const r1 = LlmJson.parse('{"val": 0}');
  TestEquality.equals("zero-success", r1.success, true);
  if (r1.success) TestEquality.equals("zero-data", r1.data, { val: 0 });

  // Negative zero
  const r2 = LlmJson.parse('{"val": -0}');
  TestEquality.equals("neg-zero-success", r2.success, true);
  if (r2.success)
    TestEquality.equals("neg-zero-data", (r2.data as any).val, -0);

  // Very large number
  const r3 = LlmJson.parse('{"val": 999999999999999}');
  TestEquality.equals("large-success", r3.success, true);
  if (r3.success)
    TestEquality.equals("large-data", r3.data, { val: 999999999999999 });

  // Very small decimal
  const r4 = LlmJson.parse('{"val": 0.000001}');
  TestEquality.equals("small-decimal-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("small-decimal-data", r4.data, { val: 0.000001 });

  // Scientific notation variations
  const r5 = LlmJson.parse('{"val": 1E10}');
  TestEquality.equals("big-E-success", r5.success, true);
  if (r5.success) TestEquality.equals("big-E-data", r5.data, { val: 1e10 });

  // Negative exponent
  const r6 = LlmJson.parse('{"val": 5e-3}');
  TestEquality.equals("neg-exp-success", r6.success, true);
  if (r6.success) TestEquality.equals("neg-exp-data", r6.data, { val: 0.005 });

  // Positive exponent sign
  const r7 = LlmJson.parse('{"val": 1e+5}');
  TestEquality.equals("pos-exp-success", r7.success, true);
  if (r7.success) TestEquality.equals("pos-exp-data", r7.data, { val: 100000 });

  // Number with leading zeros (lenient)
  const r8 = LlmJson.parse('{"val": 007}');
  TestEquality.equals("leading-zeros-success", r8.success, true);
  if (r8.success)
    TestEquality.equals("leading-zeros-data", r8.data, { val: 7 });

  // Just zero decimal
  const r9 = LlmJson.parse('{"val": 0.0}');
  TestEquality.equals("zero-decimal-success", r9.success, true);
  if (r9.success) TestEquality.equals("zero-decimal-data", r9.data, { val: 0 });

  // Primitive number at root
  const r10 = LlmJson.parse("3.14159");
  TestEquality.equals("root-float-success", r10.success, true);
  if (r10.success) TestEquality.equals("root-float-data", r10.data, 3.14159);

  // Negative primitive
  const r11 = LlmJson.parse("-42");
  TestEquality.equals("root-neg-success", r11.success, true);
  if (r11.success) TestEquality.equals("root-neg-data", r11.data, -42);

  // Decimal only (0.5)
  const r12 = LlmJson.parse('{"val": 0.5}');
  TestEquality.equals("half-success", r12.success, true);
  if (r12.success) TestEquality.equals("half-data", r12.data, { val: 0.5 });
};
