import type { ILlmSchema } from "@typia/interface";
import { LlmJson } from "@typia/utils";
import assert from "node:assert/strict";

/**
 * Verifies malformed Unicode escapes preserve string and container boundaries.
 *
 * Literal recovery must not absorb a closing quote, sibling value or another
 * escape. The same scanner serves object keys, values and schema-directed
 * coercion, so success alone cannot establish that recovered data is intact.
 *
 * 1. Compare complete data for closed and EOF-truncated escape prefixes.
 * 2. Contrast valid hexadecimal and surrogate escapes with malformed text.
 * 3. Verify following fields through direct and schema-directed parsing.
 *
 */
export const test_llm_json_parse_unicode_string_boundary = (): void => {
  const cases: Array<[string, string, unknown]> = [
    ["empty prefix", '"\\u"', "\\u"],
    ["one digit", '"\\u0"', "\\u0"],
    ["two digits", '"\\u00"', "\\u00"],
    ["three digits", '"\\u004"', "\\u004"],
    ["object sibling", '{"t":"\\u00","next":1}', { t: "\\u00", next: 1 }],
    ["array sibling", '["\\u00",2]', ["\\u00", 2]],
    ["object key", '{"\\u00":1,"next":2}', { ["\\u00"]: 1, next: 2 }],
    ["nested", '{"outer":[{"t":"\\u0"},2]}', { outer: [{ t: "\\u0" }, 2] }],
    ["valid hex fallback", '{t:"\\u0041",next:1}', { t: "A", next: 1 }],
    ["invalid hex", '{"t":"\\uGGGG","next":1}', { t: "\\uGGGG", next: 1 }],
    ["next escaped quote", '"\\u0\\"tail"', '\\u0"tail'],
    ["next escaped newline", '"\\uG\\n"', "\\uG" + "\n"],
    ["next escaped backslash", '"\\uG\\\\tail"', "\\uG\\tail"],
    [
      "surrogate pair fallback",
      '{t:"\\uD83D\\uDE00",next:1}',
      { t: "😀", next: 1 },
    ],
    [
      "partial low surrogate",
      '{"t":"\\uD83D\\uDE","next":1}',
      { t: "\uD83D" + "\\uDE", next: 1 },
    ],
    ["EOF prefix", '{"t":"hello\\u00', { t: "hello\\u00" }],
  ];
  for (const [name, input, expected] of cases) {
    const result = LlmJson.parse(input);
    assert.equal(result.success, true, name);
    assert.deepEqual(result.data, expected, name);
  }

  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: { t: { type: "string" }, next: { type: "number" } },
    required: ["t", "next"],
    additionalProperties: false,
    $defs: {},
  };
  const raw = '{"t":"\\u00","next":"2"}';
  const parsed = LlmJson.parse(raw, parameters);
  assert.equal(parsed.success, true, "parameter-directed parse");
  assert.deepEqual(
    parsed.data,
    { t: "\\u00", next: 2 },
    "parameter-directed data",
  );

  const nestedParameters: ILlmSchema.IParameters = {
    type: "object",
    properties: { payload: parameters },
    required: ["payload"],
    additionalProperties: false,
    $defs: {},
  };
  assert.deepEqual(
    LlmJson.coerce({ payload: raw }, nestedParameters),
    { payload: { t: "\\u00", next: 2 } },
    "string-as-object coercion",
  );
};
