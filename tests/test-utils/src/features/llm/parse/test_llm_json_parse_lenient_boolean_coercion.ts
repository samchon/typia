import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_boolean_coercion = (): void => {
  // "yes" -> true
  const r1 = LlmJson.parse("yes");
  TestValidator.equals("yes-success", r1.success, true);
  if (r1.success) TestValidator.equals("yes-data", r1.data, true);

  // "Yes" (capitalized) -> true
  const r2 = LlmJson.parse("Yes");
  TestValidator.equals("Yes-success", r2.success, true);
  if (r2.success) TestValidator.equals("Yes-data", r2.data, true);

  // "YES" (uppercase) -> true
  const r3 = LlmJson.parse("YES");
  TestValidator.equals("YES-success", r3.success, true);
  if (r3.success) TestValidator.equals("YES-data", r3.data, true);

  // "y" -> true
  const r4 = LlmJson.parse("y");
  TestValidator.equals("y-success", r4.success, true);
  if (r4.success) TestValidator.equals("y-data", r4.data, true);

  // "Y" -> true
  const r5 = LlmJson.parse("Y");
  TestValidator.equals("Y-success", r5.success, true);
  if (r5.success) TestValidator.equals("Y-data", r5.data, true);

  // "on" -> true
  const r6 = LlmJson.parse("on");
  TestValidator.equals("on-success", r6.success, true);
  if (r6.success) TestValidator.equals("on-data", r6.data, true);

  // "ON" -> true
  const r7 = LlmJson.parse("ON");
  TestValidator.equals("ON-success", r7.success, true);
  if (r7.success) TestValidator.equals("ON-data", r7.data, true);

  // "no" -> false
  const r8 = LlmJson.parse("no");
  TestValidator.equals("no-success", r8.success, true);
  if (r8.success) TestValidator.equals("no-data", r8.data, false);

  // "No" -> false
  const r9 = LlmJson.parse("No");
  TestValidator.equals("No-success", r9.success, true);
  if (r9.success) TestValidator.equals("No-data", r9.data, false);

  // "NO" -> false
  const r10 = LlmJson.parse("NO");
  TestValidator.equals("NO-success", r10.success, true);
  if (r10.success) TestValidator.equals("NO-data", r10.data, false);

  // "off" -> false
  const r11 = LlmJson.parse("off");
  TestValidator.equals("off-success", r11.success, true);
  if (r11.success) TestValidator.equals("off-data", r11.data, false);

  // "OFF" -> false
  const r12 = LlmJson.parse("OFF");
  TestValidator.equals("OFF-success", r12.success, true);
  if (r12.success) TestValidator.equals("OFF-data", r12.data, false);

  // "n" alone should NOT match null or false (explicitly excluded)
  const r13 = LlmJson.parse("n");
  TestValidator.equals("n-success", r13.success, false);
};
