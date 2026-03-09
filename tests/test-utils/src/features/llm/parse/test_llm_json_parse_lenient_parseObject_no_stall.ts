import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_parseObject_no_stall = (): void => {
  // =========================================================================
  // KEY POSITION: non-key chars at key position in object
  // All should return {} - either via error→return or comma-skip→close
  // =========================================================================

  // ] at key position → error (not a valid key)
  const kBracket = LlmJson.parse("{]}");
  TestValidator.equals("key-bracket-success", kBracket.success, false);
  if (!kBracket.success)
    TestValidator.equals("key-bracket-data", kBracket.data, {});

  // [ at key position → error
  const kSquare = LlmJson.parse("{[}");
  TestValidator.equals("key-square-success", kSquare.success, false);
  if (!kSquare.success)
    TestValidator.equals("key-square-data", kSquare.data, {});

  // , at key position → skip comma, then } closes
  const kComma = LlmJson.parse("{,}");
  TestValidator.equals("key-comma-success", kComma.success, true);
  if (kComma.success) TestValidator.equals("key-comma-data", kComma.data, {});

  // : at key position → error
  const kColon = LlmJson.parse("{:}");
  TestValidator.equals("key-colon-success", kColon.success, false);
  if (!kColon.success)
    TestValidator.equals("key-colon-data", kColon.data, {});

  // Special chars at key position → all error, return {}
  const specialKeyChars = ["!", "@", "#", "~", "%", "^", "&", "*"];
  for (const ch of specialKeyChars) {
    const r = LlmJson.parse(`{${ch}}`);
    TestValidator.equals(`key-${ch}-success`, r.success, false);
    if (!r.success) TestValidator.equals(`key-${ch}-data`, r.data, {});
  }

  // =========================================================================
  // VALUE POSITION: non-value chars at value position in object
  // All produce {k: undefined}. Success depends on whether the char triggers
  // a parseValue error (false) or is a structural char (true for } and ,).
  // =========================================================================

  // ] at value position → parseValue returns undefined (structural),
  // then ] at next key position → error
  const vBracket = LlmJson.parse('{"k": ]}');
  TestValidator.equals("val-bracket-success", vBracket.success, false);
  if (!vBracket.success)
    TestValidator.equals(
      "val-bracket-k",
      (vBracket.data as any)?.k,
      undefined,
    );

  // } at value position → parseValue returns undefined (structural),
  // then } closes the object. No error.
  const vBrace = LlmJson.parse('{"k": }}');
  TestValidator.equals("val-brace-success", vBrace.success, true);
  if (vBrace.success) {
    TestValidator.equals("val-brace-k", (vBrace.data as any)?.k, undefined);
    TestValidator.equals("val-brace-has-k", "k" in (vBrace.data as any), true);
  }

  // , at value position → parseValue returns undefined (structural),
  // then comma consumed, then } closes. No error.
  const vComma = LlmJson.parse('{"k": ,}');
  TestValidator.equals("val-comma-success", vComma.success, true);
  if (vComma.success) {
    TestValidator.equals("val-comma-k", (vComma.data as any)?.k, undefined);
    TestValidator.equals("val-comma-has-k", "k" in (vComma.data as any), true);
  }

  // : at value position → error (not recognized), skip, then } closes
  const vColon = LlmJson.parse('{"k": :}');
  TestValidator.equals("val-colon-success", vColon.success, false);
  if (!vColon.success)
    TestValidator.equals("val-colon-k", (vColon.data as any)?.k, undefined);

  // @, #, ~, ! at value position → error + skip, then } closes
  const specialValChars = ["@", "#", "~", "!"];
  for (const ch of specialValChars) {
    const r = LlmJson.parse(`{"k": ${ch}}`);
    TestValidator.equals(`val-${ch}-success`, r.success, false);
    if (!r.success)
      TestValidator.equals(`val-${ch}-k`, (r.data as any)?.k, undefined);
  }

  // =========================================================================
  // ARRAY POSITION: non-value chars inside arrays
  // } → stall guard skips (not pushed). Others → error+advance (undefined pushed).
  // =========================================================================

  // } in array → stall guard fires (parseValue doesn't advance), skip char
  const aBrace = LlmJson.parse("[}]");
  TestValidator.equals("arr-brace-success", aBrace.success, true);
  if (aBrace.success)
    TestValidator.equals("arr-brace-data", aBrace.data, []);

  // : in array → parseValue error+advance, undefined pushed
  const aColon = LlmJson.parse("[:]");
  TestValidator.equals("arr-colon-success", aColon.success, false);

  // @ in array → parseValue error+advance, undefined pushed
  const aAt = LlmJson.parse("[@]");
  TestValidator.equals("arr-at-success", aAt.success, false);

  // # in array → parseValue error+advance, undefined pushed
  const aHash = LlmJson.parse("[#]");
  TestValidator.equals("arr-hash-success", aHash.success, false);

  // ~ in array → parseValue error+advance, undefined pushed
  const aTilde = LlmJson.parse("[~]");
  TestValidator.equals("arr-tilde-success", aTilde.success, false);

  // ! in array → parseValue error+advance, undefined pushed
  const aBang = LlmJson.parse("[!]");
  TestValidator.equals("arr-bang-success", aBang.success, false);

  // Multiple } → all skipped by stall guard, empty array
  const aMulti = LlmJson.parse("[}}}}]");
  TestValidator.equals("arr-multi-brace-success", aMulti.success, true);
  if (aMulti.success)
    TestValidator.equals("arr-multi-brace-data", aMulti.data, []);

  // } then ] immediately after in junk-looking input → [}] part parsed, rest is trailing
  const aMixed = LlmJson.parse("[}]:@#~!]");
  TestValidator.equals("arr-mixed-success", aMixed.success, true);
  if (aMixed.success)
    TestValidator.equals("arr-mixed-data", aMixed.data, []);

  // =========================================================================
  // STRESS: complex mismatched bracket scenarios
  // =========================================================================

  // [}]}]}]}] → first } skipped by stall guard, first ] closes → []
  const s1 = LlmJson.parse("[}]}]}]}]");
  TestValidator.equals("stress-alt-arr-success", s1.success, true);
  if (s1.success) TestValidator.equals("stress-alt-arr-data", s1.data, []);

  // {]}{]}{]} → ] at key position → error → {}, rest is trailing junk
  const s2 = LlmJson.parse("{]}{]}{]}");
  TestValidator.equals("stress-alt-obj-success", s2.success, false);
  if (!s2.success) TestValidator.equals("stress-alt-obj-data", s2.data, {});

  // Complex nested: {"a": {"b": [1, }, 2], "c": ]}}
  // Array [1, }, 2] → } skipped by stall guard → [1, 2]
  // Inner object: b=[1,2], c=undefined (] at value), then ] at key → error
  // Outer object: a = inner object
  const s3 = LlmJson.parse('{"a": {"b": [1, }, 2], "c": ]}}');
  TestValidator.equals("stress-deep-success", s3.success, false);
  if (!s3.success) {
    const data = s3.data as any;
    TestValidator.equals("stress-deep-b", data?.a?.b, [1, 2]);
    TestValidator.equals("stress-deep-c", data?.a?.c, undefined);
    TestValidator.equals("stress-deep-has-c", "c" in (data?.a || {}), true);
  }
};
