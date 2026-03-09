import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_incomplete_keyword_context =
  (): void => {
    // Incomplete true in object value
    const r1 = LlmJson.parse('{"flag": tru');
    TestValidator.equals("true-in-obj-success", r1.success, true);
    if (r1.success)
      TestValidator.equals("true-in-obj-data", r1.data, { flag: true });

    // Incomplete false in object value
    const r2 = LlmJson.parse('{"flag": fals');
    TestValidator.equals("false-in-obj-success", r2.success, true);
    if (r2.success)
      TestValidator.equals("false-in-obj-data", r2.data, { flag: false });

    // Incomplete null in object value
    const r3 = LlmJson.parse('{"val": nu');
    TestValidator.equals("null-in-obj-success", r3.success, true);
    if (r3.success)
      TestValidator.equals("null-in-obj-data", r3.data, { val: null });

    // Incomplete true in array
    const r4 = LlmJson.parse("[tru");
    TestValidator.equals("true-in-arr-success", r4.success, true);
    if (r4.success)
      TestValidator.equals("true-in-arr-data", r4.data, [true]);

    // Incomplete false in array
    const r5 = LlmJson.parse("[fals");
    TestValidator.equals("false-in-arr-success", r5.success, true);
    if (r5.success)
      TestValidator.equals("false-in-arr-data", r5.data, [false]);

    // Incomplete null in array
    const r6 = LlmJson.parse("[nu");
    TestValidator.equals("null-in-arr-success", r6.success, true);
    if (r6.success)
      TestValidator.equals("null-in-arr-data", r6.data, [null]);

    // "t" alone in object
    const r7 = LlmJson.parse('{"flag": t');
    TestValidator.equals("t-in-obj-success", r7.success, true);
    if (r7.success)
      TestValidator.equals("t-in-obj-data", r7.data, { flag: true });

    // "f" alone in object
    const r8 = LlmJson.parse('{"flag": f');
    TestValidator.equals("f-in-obj-success", r8.success, true);
    if (r8.success)
      TestValidator.equals("f-in-obj-data", r8.data, { flag: false });

    // Keyword immediately followed by comma
    const r9 = LlmJson.parse("[tru, fals, nu]");
    TestValidator.equals("keywords-in-arr-success", r9.success, true);
    // "tru" -> true, "fals" -> false, "nu" -> null
    if (r9.success)
      TestValidator.equals("keywords-in-arr-data", r9.data, [
        true,
        false,
        null,
      ]);

    // Mixed keywords and values
    const r10 = LlmJson.parse('{"a": tru, "b": 42, "c": fals, "d": "hello"}');
    TestValidator.equals("mixed-keywords-success", r10.success, true);
    if (r10.success)
      TestValidator.equals("mixed-keywords-data", r10.data, {
        a: true,
        b: 42,
        c: false,
        d: "hello",
      });
  };
