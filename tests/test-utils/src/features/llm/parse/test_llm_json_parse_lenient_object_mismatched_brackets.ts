import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_object_mismatched_brackets =
  (): void => {
    // ] in object value position: parseValue returns undefined, then ] fails as key
    const r1 = LlmJson.parse('{"a": ]}');
    TestValidator.equals("bracket-val-success", r1.success, false);
    if (!r1.success)
      TestValidator.equals("bracket-val-data", (r1.data as any)?.a, undefined);

    // ] after colon, then more properties
    const r2 = LlmJson.parse('{"a": ], "b": 1}');
    TestValidator.equals("bracket-then-more-success", r2.success, false);
    // a gets undefined, then ] at key position → error → return {a: undefined}
    if (!r2.success) {
      TestValidator.equals(
        "bracket-then-more-a",
        (r2.data as any)?.a,
        undefined,
      );
      TestValidator.equals(
        "bracket-then-more-b",
        (r2.data as any)?.b,
        undefined,
      );
    }

    // Multiple ] in object value position
    const r3 = LlmJson.parse('{"a": ]]]}}');
    TestValidator.equals("multi-bracket-val-success", r3.success, false);
    if (!r3.success)
      TestValidator.equals(
        "multi-bracket-val-data",
        (r3.data as any)?.a,
        undefined,
      );

    // [ in object KEY position (not value)
    const r6 = LlmJson.parse("{[]: 1}");
    TestValidator.equals("bracket-key-success", r6.success, false);

    // } in array, then ] (both mismatched and correct)
    const r7 = LlmJson.parse("[1, }, ], 2]");
    TestValidator.equals("mixed-mismatch-arr-success", r7.success, true);
    // } is skipped by stall guard, ] closes array → [1]
    if (r7.success) TestValidator.equals("mixed-mismatch-arr-data", r7.data, [1]);

    // Nested: array inside object, with } in the array
    const r8 = LlmJson.parse('{"arr": [1, }, 3]}');
    TestValidator.equals("nested-mismatch-success", r8.success, true);
    if (r8.success)
      TestValidator.equals("nested-mismatch-data", r8.data, { arr: [1, 3] });

    // Nested: object inside array, with ] in the object value
    const r9 = LlmJson.parse('[{"key": ]}]');
    TestValidator.equals("obj-in-arr-bracket-val-success", r9.success, false);
    // parseValue for "key" sees ], returns undefined. Then ] at key position → error.
    // parseObject returns {key: undefined} with error. Array gets [{key: undefined}].
    // But there's an error so success = false.
    if (!r9.success) {
      const data = r9.data as any;
      TestValidator.equals("obj-in-arr-bracket-val-len", Array.isArray(data), true);
    }
  };
