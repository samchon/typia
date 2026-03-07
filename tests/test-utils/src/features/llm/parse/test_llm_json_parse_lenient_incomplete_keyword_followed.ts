import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_incomplete_keyword_followed = (): void => {
  // Incomplete "true" followed by comma
  const r1 = LlmJson.parse('{"active": tru, "name": "test"}');
  TestValidator.equals("tru-comma-success", r1.success, true);
  if (r1.success) {
    TestValidator.equals("tru-comma-data", r1.data, { active: true, name: "test" });
  }

  // Incomplete "false" followed by comma
  const r2 = LlmJson.parse('{"enabled": fal, "count": 5}');
  TestValidator.equals("fal-comma-success", r2.success, true);
  if (r2.success) {
    TestValidator.equals("fal-comma-data", r2.data, { enabled: false, count: 5 });
  }

  // Incomplete "null" followed by comma
  const r3 = LlmJson.parse('{"value": nul, "next": 1}');
  TestValidator.equals("nul-comma-success", r3.success, true);
  if (r3.success) {
    TestValidator.equals("nul-comma-data", r3.data, { value: null, next: 1 });
  }

  // Incomplete "true" followed by closing brace
  const r4 = LlmJson.parse('{"flag": tru}');
  TestValidator.equals("tru-brace-success", r4.success, true);
  if (r4.success) {
    TestValidator.equals("tru-brace-data", r4.data, { flag: true });
  }

  // Incomplete "false" followed by closing bracket (in array)
  const r5 = LlmJson.parse('[fal]');
  TestValidator.equals("fal-bracket-success", r5.success, true);
  if (r5.success) {
    TestValidator.equals("fal-bracket-data", r5.data, [false]);
  }

  // Incomplete "null" followed by closing brace
  const r6 = LlmJson.parse('{"empty": nul}');
  TestValidator.equals("nul-brace-success", r6.success, true);
  if (r6.success) {
    TestValidator.equals("nul-brace-data", r6.data, { empty: null });
  }

  // Single letter "t" followed by comma
  const r7 = LlmJson.parse('{"a": t, "b": 1}');
  TestValidator.equals("t-comma-success", r7.success, true);
  if (r7.success) {
    TestValidator.equals("t-comma-data", r7.data, { a: true, b: 1 });
  }

  // Single letter "f" followed by comma
  const r8 = LlmJson.parse('{"a": f, "b": 2}');
  TestValidator.equals("f-comma-success", r8.success, true);
  if (r8.success) {
    TestValidator.equals("f-comma-data", r8.data, { a: false, b: 2 });
  }

  // Single letter "n" followed by comma
  const r9 = LlmJson.parse('{"a": n, "b": 3}');
  TestValidator.equals("n-comma-success", r9.success, true);
  if (r9.success) {
    TestValidator.equals("n-comma-data", r9.data, { a: null, b: 3 });
  }

  // Multiple incomplete keywords in one object
  const r10 = LlmJson.parse('{"x": tru, "y": fal, "z": nul}');
  TestValidator.equals("multiple-incomplete-success", r10.success, true);
  if (r10.success) {
    TestValidator.equals("multiple-incomplete-data", r10.data, { x: true, y: false, z: null });
  }

  // Incomplete keyword in nested object
  const r11 = LlmJson.parse('{"outer": {"inner": tru}}');
  TestValidator.equals("nested-incomplete-success", r11.success, true);
  if (r11.success) {
    TestValidator.equals("nested-incomplete-data", r11.data, { outer: { inner: true } });
  }

  // Incomplete keyword in array
  const r12 = LlmJson.parse('[tru, fal, nul]');
  TestValidator.equals("array-incomplete-success", r12.success, true);
  if (r12.success) {
    TestValidator.equals("array-incomplete-data", r12.data, [true, false, null]);
  }
};
