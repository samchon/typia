import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import {
  LlmTypeChecker,
  OpenApiTypeChecker,
  OpenApiValidator,
} from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies transformed string length tags count Unicode characters.
 *
 * `minLength` and `maxLength` are defined by JSON Schema as the number of
 * characters as RFC 8259 defines them — code points, not the UTF-16 code units
 * `String.prototype.length` returns. typia emits those keywords and must
 * validate the same values they do, so an astral character, a flag, and a ZWJ
 * sequence have to measure the same on both sides. The expectation comes from
 * `[...value].length`, the specification's count, never from what the
 * transformer happens to emit.
 *
 * 1. Assert the sample matrix really carries values whose two counts differ, so
 *    the case cannot go vacuous.
 * 2. Exercise the type tag, the JSDoc spelling, and the `@length` composite
 *    against the code-point oracle on `MinLength<2>`, `MaxLength<2>`, and the
 *    one-character window.
 * 3. Repeat `MinLength<2>` through `assert` and `validate`, so the tag's meaning
 *    is pinned on all three entry points and not only on `is`.
 * 4. Confirm the emitted JSON and LLM schemas keep the exact length keywords.
 * 5. Require the shared `@typia/utils` OpenAPI validator to answer identically on
 *    the emitted schema, for every value.
 */
export const test_validate_unicode_string_length = (): void => {
  // Every sample is spelled with escapes. The two accent forms are one code
  // point apart and would look identical as literals, and NFC normalization by
  // an editor or a filter would silently collapse the combining one into the
  // precomposed one -- leaving two identical samples and a comment that lies.
  // The zero-width joiners in the family sequence are invisible for the same
  // reason.
  const SAMPLES: string[] = [
    "", // 0 characters, 0 code units
    "a", // 1 / 1
    "\u00e9", // precomposed e-acute: 1 / 1
    "\ud800", // lone high surrogate: 1 / 1
    "\u{1f600}", // astral: 1 character, 2 code units
    "e\u0301", // e + combining acute: 2 / 2
    "a\u{1f600}", // 2 characters, 3 code units
    "\u{1f1f0}\u{1f1f7}", // regional indicator pair (flag): 2 / 4
    "\u{1f468}\u200d\u{1f469}\u200d\u{1f467}", // ZWJ family: 5 / 8
  ];
  const characters = (value: string): number => [...value].length;

  // The matrix must contain values the two measures disagree about, or every
  // assertion below would pass under either meaning and prove nothing.
  const diverging: string[] = SAMPLES.filter(
    (value) => characters(value) !== value.length,
  );
  TestValidator.equals(
    "the sample matrix carries values whose two counts differ",
    diverging.length,
    4,
  );

  type AtLeastTwo = string & tags.MinLength<2>;
  type AtMostTwo = string & tags.MaxLength<2>;
  type One = string & tags.MinLength<1> & tags.MaxLength<1>;
  interface IJsDocAtLeastTwo {
    /** @minLength 2 */
    value: string;
  }
  interface IJsDocAtMostTwo {
    /** @maxLength 2 */
    value: string;
  }
  interface IJsDocOne {
    /** @length 1 */
    value: string;
  }

  for (const value of SAMPLES) {
    const count: number = characters(value);
    const title = JSON.stringify(value);
    const rows: Array<[string, boolean, boolean, boolean]> = [
      [
        "MinLength<2>",
        count >= 2,
        typia.is<AtLeastTwo>(value),
        typia.is<IJsDocAtLeastTwo>({ value }),
      ],
      [
        "MaxLength<2>",
        count <= 2,
        typia.is<AtMostTwo>(value),
        typia.is<IJsDocAtMostTwo>({ value }),
      ],
      [
        "length 1",
        count === 1,
        typia.is<One>(value),
        typia.is<IJsDocOne>({ value }),
      ],
    ];
    for (const [tag, expected, byType, byComment] of rows) {
      TestValidator.equals(`${tag} type tag ${title}`, byType, expected);
      TestValidator.equals(`${tag} JSDoc tag ${title}`, byComment, expected);
    }

    // `assert` and `validate` must agree with `is`; the issue names all three.
    TestValidator.equals(
      `MinLength<2> validate ${title}`,
      typia.validate<AtLeastTwo>(value).success,
      count >= 2,
    );
    let asserted: boolean = true;
    try {
      typia.assert<AtLeastTwo>(value);
    } catch {
      asserted = false;
    }
    TestValidator.equals(`MinLength<2> assert ${title}`, asserted, count >= 2);
  }

  const json = typia.json.schema<One>().schema;
  TestValidator.predicate("JSON schema is string", () =>
    OpenApiTypeChecker.isString(json),
  );
  if (OpenApiTypeChecker.isString(json))
    TestValidator.equals(
      "JSON schema length constraints",
      [json.minLength, json.maxLength],
      [1, 1],
    );

  const $defs: Record<string, ILlmSchema> = {};
  typia.llm.schema<One>($defs);
  const llm: ILlmSchema = $defs.One!;
  TestValidator.predicate("LLM schema is string", () =>
    LlmTypeChecker.isString(llm),
  );
  if (LlmTypeChecker.isString(llm))
    TestValidator.equals(
      "LLM schema length constraints",
      [llm.minLength, llm.maxLength],
      [1, 1],
    );

  // The generated validator and the shared OpenAPI validator now read the same
  // schema the same way. Under the one-character window they used to part
  // company on the astral character alone -- every other diverging sample
  // exceeds the bound under both measures -- and that one value is the whole
  // point: a schema saying `maxLength: 1` accepted it while the validator
  // typia generated from the same type did not.
  //
  // `@typia/utils` counts with its own copy of the same walk, so this pins the
  // wiring rather than re-deriving the rule; the rule itself is pinned above,
  // against `[...value].length`.
  for (const value of SAMPLES)
    TestValidator.equals(
      `OpenAPI parity ${JSON.stringify(value)}`,
      OpenApiValidator.validate({
        components: {},
        schema: json,
        value,
        required: true,
      }).success,
      typia.is<One>(value),
    );
};
