import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_boolean_coercion = (): void => {
  // "yes" -> true
  const r1 = LlmJson.parse("yes");
  TestEquality.equals("yes-success", r1.success, true);
  if (r1.success) TestEquality.equals("yes-data", r1.data, true);

  // "Yes" (capitalized) -> true
  const r2 = LlmJson.parse("Yes");
  TestEquality.equals("Yes-success", r2.success, true);
  if (r2.success) TestEquality.equals("Yes-data", r2.data, true);

  // "YES" (uppercase) -> true
  const r3 = LlmJson.parse("YES");
  TestEquality.equals("YES-success", r3.success, true);
  if (r3.success) TestEquality.equals("YES-data", r3.data, true);

  // "y" -> true
  const r4 = LlmJson.parse("y");
  TestEquality.equals("y-success", r4.success, true);
  if (r4.success) TestEquality.equals("y-data", r4.data, true);

  // "Y" -> true
  const r5 = LlmJson.parse("Y");
  TestEquality.equals("Y-success", r5.success, true);
  if (r5.success) TestEquality.equals("Y-data", r5.data, true);

  // "on" -> true
  const r6 = LlmJson.parse("on");
  TestEquality.equals("on-success", r6.success, true);
  if (r6.success) TestEquality.equals("on-data", r6.data, true);

  // "ON" -> true
  const r7 = LlmJson.parse("ON");
  TestEquality.equals("ON-success", r7.success, true);
  if (r7.success) TestEquality.equals("ON-data", r7.data, true);

  // "no" -> false
  const r8 = LlmJson.parse("no");
  TestEquality.equals("no-success", r8.success, true);
  if (r8.success) TestEquality.equals("no-data", r8.data, false);

  // "No" -> false
  const r9 = LlmJson.parse("No");
  TestEquality.equals("No-success", r9.success, true);
  if (r9.success) TestEquality.equals("No-data", r9.data, false);

  // "NO" -> false
  const r10 = LlmJson.parse("NO");
  TestEquality.equals("NO-success", r10.success, true);
  if (r10.success) TestEquality.equals("NO-data", r10.data, false);

  // "off" -> false
  const r11 = LlmJson.parse("off");
  TestEquality.equals("off-success", r11.success, true);
  if (r11.success) TestEquality.equals("off-data", r11.data, false);

  // "OFF" -> false
  const r12 = LlmJson.parse("OFF");
  TestEquality.equals("OFF-success", r12.success, true);
  if (r12.success) TestEquality.equals("OFF-data", r12.data, false);

  // "n" alone should NOT match null or false (explicitly excluded)
  const r13 = LlmJson.parse("n");
  TestEquality.equals("n-success", r13.success, false);
};
