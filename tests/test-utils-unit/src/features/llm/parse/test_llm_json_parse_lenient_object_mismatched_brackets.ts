import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that mismatched delimiters distinguish failure and array recovery.
 *
 * A closer in the wrong context must not invent later properties or destroy
 * valid values already recovered.
 *
 * 1. Exercise brackets at key/value positions, repeated closers, mixed array
 *    delimiters and nested object/array contexts.
 * 2. Compare the retained results and original assertion outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions, preserving every original input, assertion title and outcome.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output. Diagnostic subsets pin selected expected fields rather than every diagnostic detail.
 * @evidence contracts/testing.md#distinguishing-cases This case owns brackets at key/value positions, repeated closers, mixed array delimiters and nested object/array contexts; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils-unit start explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; the former transformed-suite entry is removed and no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_object_mismatched_brackets =
  (): void => {
    // ] in object value position: parseValue returns undefined, then ] fails as key
    const r1 = LlmJson.parse('{"a": ]}');
    TestEquality.equals("bracket-val-success", r1.success, false);
    if (!r1.success) {
      TestEquality.equals("bracket-val-data", (r1.data as any)?.a, undefined);
      TestEquality.subset(
        "bracket-val-errors",
        [{ expected: "string key" }],
        r1.errors,
      );
    }

    // ] after colon, then more properties
    const r2 = LlmJson.parse('{"a": ], "b": 1}');
    TestEquality.equals("bracket-then-more-success", r2.success, false);
    // a gets undefined, then ] at key position → error → return {a: undefined}
    if (!r2.success) {
      TestEquality.equals(
        "bracket-then-more-a",
        (r2.data as any)?.a,
        undefined,
      );
      TestEquality.equals(
        "bracket-then-more-b",
        (r2.data as any)?.b,
        undefined,
      );
      TestEquality.subset(
        "bracket-then-more-errors",
        [{ expected: "string key" }],
        r2.errors,
      );
    }

    // Multiple ] in object value position
    const r3 = LlmJson.parse('{"a": ]]]}}');
    TestEquality.equals("multi-bracket-val-success", r3.success, false);
    if (!r3.success) {
      TestEquality.equals(
        "multi-bracket-val-data",
        (r3.data as any)?.a,
        undefined,
      );
      TestEquality.subset(
        "multi-bracket-val-errors",
        [{ expected: "string key" }],
        r3.errors,
      );
    }

    // [ in object KEY position (not value)
    const r6 = LlmJson.parse("{[]: 1}");
    TestEquality.equals("bracket-key-success", r6.success, false);
    if (!r6.success)
      TestEquality.subset(
        "bracket-key-errors",
        [{ expected: "string key" }],
        r6.errors,
      );

    // } in array, then ] (both mismatched and correct)
    const r7 = LlmJson.parse("[1, }, ], 2]");
    TestEquality.equals("mixed-mismatch-arr-success", r7.success, true);
    // } is skipped by stall guard, ] closes array → [1]
    if (r7.success)
      TestEquality.equals("mixed-mismatch-arr-data", r7.data, [1]);

    // Nested: array inside object, with } in the array
    const r8 = LlmJson.parse('{"arr": [1, }, 3]}');
    TestEquality.equals("nested-mismatch-success", r8.success, true);
    if (r8.success)
      TestEquality.equals("nested-mismatch-data", r8.data, { arr: [1, 3] });

    // Nested: object inside array, with ] in the object value
    const r9 = LlmJson.parse('[{"key": ]}]');
    TestEquality.equals("obj-in-arr-bracket-val-success", r9.success, false);
    // parseValue for "key" sees ], returns undefined. Then ] at key position → error.
    // parseObject returns {key: undefined} with error. Array gets [{key: undefined}].
    // But there's an error so success = false.
    if (!r9.success) {
      const data = r9.data as any;
      TestEquality.equals(
        "obj-in-arr-bracket-val-len",
        Array.isArray(data),
        true,
      );
      TestEquality.subset(
        "obj-in-arr-bracket-val-errors",
        [{ expected: "string key" }],
        r9.errors,
      );
    }
  };
