import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_incomplete_keyword_followed =
  (): void => {
    // Incomplete "true" followed by comma
    const r1 = LlmJson.parse('{"active": tru, "name": "test"}');
    TestEquality.equals("tru-comma-success", r1.success, true);
    if (r1.success) {
      TestEquality.equals("tru-comma-data", r1.data, {
        active: true,
        name: "test",
      });
    }

    // Incomplete "false" followed by comma
    const r2 = LlmJson.parse('{"enabled": fal, "count": 5}');
    TestEquality.equals("fal-comma-success", r2.success, true);
    if (r2.success) {
      TestEquality.equals("fal-comma-data", r2.data, {
        enabled: false,
        count: 5,
      });
    }

    // Incomplete "null" followed by comma
    const r3 = LlmJson.parse('{"value": nul, "next": 1}');
    TestEquality.equals("nul-comma-success", r3.success, true);
    if (r3.success) {
      TestEquality.equals("nul-comma-data", r3.data, { value: null, next: 1 });
    }

    // Incomplete "true" followed by closing brace
    const r4 = LlmJson.parse('{"flag": tru}');
    TestEquality.equals("tru-brace-success", r4.success, true);
    if (r4.success) {
      TestEquality.equals("tru-brace-data", r4.data, { flag: true });
    }

    // Incomplete "false" followed by closing bracket (in array)
    const r5 = LlmJson.parse("[fal]");
    TestEquality.equals("fal-bracket-success", r5.success, true);
    if (r5.success) {
      TestEquality.equals("fal-bracket-data", r5.data, [false]);
    }

    // Incomplete "null" followed by closing brace
    const r6 = LlmJson.parse('{"empty": nul}');
    TestEquality.equals("nul-brace-success", r6.success, true);
    if (r6.success) {
      TestEquality.equals("nul-brace-data", r6.data, { empty: null });
    }

    // Single letter "t" followed by comma
    const r7 = LlmJson.parse('{"a": t, "b": 1}');
    TestEquality.equals("t-comma-success", r7.success, true);
    if (r7.success) {
      TestEquality.equals("t-comma-data", r7.data, { a: true, b: 1 });
    }

    // Single letter "f" followed by comma
    const r8 = LlmJson.parse('{"a": f, "b": 2}');
    TestEquality.equals("f-comma-success", r8.success, true);
    if (r8.success) {
      TestEquality.equals("f-comma-data", r8.data, { a: false, b: 2 });
    }

    // "n" is NOT handled (neither null nor false) - intentionally excluded

    // Multiple incomplete keywords in one object
    const r10 = LlmJson.parse('{"x": tru, "y": fal, "z": nul}');
    TestEquality.equals("multiple-incomplete-success", r10.success, true);
    if (r10.success) {
      TestEquality.equals("multiple-incomplete-data", r10.data, {
        x: true,
        y: false,
        z: null,
      });
    }

    // Incomplete keyword in nested object
    const r11 = LlmJson.parse('{"outer": {"inner": tru}}');
    TestEquality.equals("nested-incomplete-success", r11.success, true);
    if (r11.success) {
      TestEquality.equals("nested-incomplete-data", r11.data, {
        outer: { inner: true },
      });
    }

    // Incomplete keyword in array
    const r12 = LlmJson.parse("[tru, fal, nul]");
    TestEquality.equals("array-incomplete-success", r12.success, true);
    if (r12.success) {
      TestEquality.equals("array-incomplete-data", r12.data, [
        true,
        false,
        null,
      ]);
    }
  };
