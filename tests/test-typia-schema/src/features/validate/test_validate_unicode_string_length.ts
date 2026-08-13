import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import {
  LlmTypeChecker,
  OpenApiTypeChecker,
  OpenApiValidator,
} from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies transformed string length tags count UTF-16 code units.
 *
 * `tags.MinLength` and `tags.MaxLength` declare a plain `$input.length`
 * comparison, so a generated validator never imports a `typia/lib/internal/*`
 * helper to measure a string, and `@typia/interface` stays satisfiable by any
 * `typia` runtime the caret range between the two packages admits. The emitted
 * `minLength` / `maxLength` keywords still mean characters, so the shared
 * `@typia/utils` OpenAPI validator disagrees with the generated one on an
 * astral character; issue #2335 owns closing that gap in a major.
 *
 * 1. Exercise type-tag and JSDoc validators over the Unicode boundary matrix.
 * 2. Confirm JSON and LLM schema conversion preserves exact length keywords.
 * 3. Revalidate every value through the emitted OpenAPI schema, which diverges on
 *    the astral character alone.
 */
export const test_validate_unicode_string_length = (): void => {
  type One = string & tags.MinLength<1> & tags.MaxLength<1>;
  interface IJsDocOne {
    /**
     * @minLength 1
     * @maxLength 1
     */
    value: string;
  }
  // One astral character is two UTF-16 code units but one character, so the
  // generated validator measures 2 and rejects it while the emitted schema
  // counts 1. A precomposed letter is one unit and one character, a combining
  // sequence is two of each, and a lone surrogate is one of each, so those
  // rows land the same way under either measurement. `"a" + astral` measures 3
  // against 2, but both exceed `MaxLength<1>`, so it lands the same way too.
  const astral: string = "\u{1f600}";
  const values: Array<[value: string, valid: boolean]> = [
    ["", false],
    ["a", true],
    ["\u00e9", true],
    [astral, false],
    ["a" + astral, false],
    ["e\u0301", false],
    ["\ud800", true],
  ];
  for (const [value, valid] of values) {
    TestValidator.equals(
      `type tag ${JSON.stringify(value)}`,
      typia.is<One>(value),
      valid,
    );
    TestValidator.equals(
      `JSDoc tag ${JSON.stringify(value)}`,
      typia.is<IJsDocOne>({ value }),
      valid,
    );
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

  // `@typia/utils` counts characters, so it accepts the astral character the
  // generated validator rejects, and agrees on every other value.
  for (const [value, valid] of values)
    TestValidator.equals(
      `OpenAPI validator ${JSON.stringify(value)}`,
      OpenApiValidator.validate({
        components: {},
        schema: json,
        value,
        required: true,
      }).success,
      value === astral ? true : valid,
    );
};
