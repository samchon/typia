import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_findJsonStart_junk_strings =
  (): void => {
    // Braces INSIDE quoted string in junk prefix - findJsonStart must skip them
    const r1 = LlmJson.parse('He said "{hello}" then {"real": 1}');
    TestEquality.equals("brace-in-quoted-junk-success", r1.success, true);
    if (r1.success)
      TestEquality.equals("brace-in-quoted-junk-data", r1.data, { real: 1 });

    // Brackets inside quoted string in junk prefix
    const r2 = LlmJson.parse('Check items "[0]" and "[1]" here: [10, 20]');
    TestEquality.equals("bracket-in-quoted-junk-success", r2.success, true);
    if (r2.success)
      TestEquality.equals("bracket-in-quoted-junk-data", r2.data, [10, 20]);

    // Escape sequence inside quoted string in junk prefix
    const r3 = LlmJson.parse('prefix "esc\\"ape" {"key": 1}');
    TestEquality.equals("escape-in-quoted-junk-success", r3.success, true);
    if (r3.success)
      TestEquality.equals("escape-in-quoted-junk-data", r3.data, { key: 1 });

    // Unclosed string in junk absorbs everything → findJsonStart returns -1
    const r4 = LlmJson.parse('"unclosed string with {brace} inside');
    // startsWithPrimitive sees '"' → parser enters → parseString reads
    // everything as a string (unclosed) → returns the content
    TestEquality.equals("unclosed-junk-string-success", r4.success, true);
    if (r4.success)
      TestEquality.equals(
        "unclosed-junk-string-data",
        r4.data,
        "unclosed string with {brace} inside",
      );

    // Multiple quoted strings in junk, last one has braces
    const r5 = LlmJson.parse('first "text" second "{}" third {"actual": true}');
    TestEquality.equals("multi-quoted-junk-success", r5.success, true);
    if (r5.success)
      TestEquality.equals("multi-quoted-junk-data", r5.data, {
        actual: true,
      });

    // Quoted string in junk with both braces and brackets
    const r6 = LlmJson.parse(
      'config is "{arr: [1,2], obj: {a:1}}" => {"result": true}',
    );
    TestEquality.equals("complex-quoted-junk-success", r6.success, true);
    if (r6.success)
      TestEquality.equals("complex-quoted-junk-data", r6.data, {
        result: true,
      });

    // Empty quoted string in junk
    const r7 = LlmJson.parse('"" {"key": "val"}');
    // startsWithPrimitive sees '"' → parser enters as a primitive string
    // parseString reads empty string, returns ""
    // The {"key": "val"} is never reached
    TestEquality.equals("empty-quoted-junk-success", r7.success, true);
    if (r7.success) TestEquality.equals("empty-quoted-junk-data", r7.data, "");

    // Quoted string in junk prefix with backslash at end
    const r8 = LlmJson.parse('text "ends with\\\\" {"key": 1}');
    TestEquality.equals("backslash-end-quoted-junk-success", r8.success, true);
    if (r8.success)
      TestEquality.equals("backslash-end-quoted-junk-data", r8.data, {
        key: 1,
      });
  };
