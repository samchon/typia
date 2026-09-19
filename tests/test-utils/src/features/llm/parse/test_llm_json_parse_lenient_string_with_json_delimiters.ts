import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_string_with_json_delimiters =
  (): void => {
    // String containing unescaped structural characters
    // These should be treated as part of the string, not as JSON structure
    const r1 = LlmJson.parse('{"msg": "use { and } carefully"}');
    TestEquality.equals("braces-in-str-success", r1.success, true);
    if (r1.success)
      TestEquality.equals("braces-in-str-data", r1.data, {
        msg: "use { and } carefully",
      });

    // String containing square brackets
    const r2 = LlmJson.parse('{"msg": "array[0] and array[1]"}');
    TestEquality.equals("brackets-in-str-success", r2.success, true);
    if (r2.success)
      TestEquality.equals("brackets-in-str-data", r2.data, {
        msg: "array[0] and array[1]",
      });

    // String containing colons
    const r3 = LlmJson.parse('{"msg": "time is 12:30:45"}');
    TestEquality.equals("colons-in-str-success", r3.success, true);
    if (r3.success)
      TestEquality.equals("colons-in-str-data", r3.data, {
        msg: "time is 12:30:45",
      });

    // String containing commas
    const r4 = LlmJson.parse('{"msg": "one, two, three"}');
    TestEquality.equals("commas-in-str-success", r4.success, true);
    if (r4.success)
      TestEquality.equals("commas-in-str-data", r4.data, {
        msg: "one, two, three",
      });

    // String containing all JSON structural characters
    const r5 = LlmJson.parse(
      '{"msg": "{ key: [val, val2], other: {nested} }"}',
    );
    TestEquality.equals("all-struct-in-str-success", r5.success, true);
    if (r5.success)
      TestEquality.equals("all-struct-in-str-data", r5.data, {
        msg: "{ key: [val, val2], other: {nested} }",
      });

    // String as value containing JSON-like content
    const r6 = LlmJson.parse(
      '{"log": "received: {\\"status\\": 200, \\"body\\": \\"ok\\"}"}',
    );
    TestEquality.equals("json-in-value-success", r6.success, true);
    if (r6.success)
      TestEquality.equals("json-in-value-data", r6.data, {
        log: 'received: {"status": 200, "body": "ok"}',
      });

    // Array element that is a string containing JSON
    const r7 = LlmJson.parse('["{\\"a\\": 1}", "{\\"b\\": 2}"]');
    TestEquality.equals("arr-json-str-success", r7.success, true);
    if (r7.success)
      TestEquality.equals("arr-json-str-data", r7.data, [
        '{"a": 1}',
        '{"b": 2}',
      ]);
  };
