import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiValidator } from "@typia/utils";

/**
 * Verifies OpenAPI string lengths count Unicode code points.
 *
 * JSON Schema measures string characters rather than UTF-16 code units. An
 * astral character is one character, combining marks remain separate, and an
 * unpaired surrogate still occupies one string character.
 *
 * 1. Check ASCII, BMP, astral, mixed, combining, and unpaired-surrogate text.
 * 2. Exercise exact one- and two-character min/max boundaries.
 * 3. Require the public validator to agree with the code-point oracle.
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiValidator.validate checks exact-length schemas for lengths 0 to 3 against six authored texts; the success flag must equal whether the code-point count matches, so UTF-16 unit counting fails on the astral and surrogate texts.
 * @evidence contracts/testing.md#independent-expectations The authored table states each text's code-point count from the Unicode definition (an astral character is one, a base letter plus combining mark is two, a lone surrogate is one); the validator's own length computation is never consulted for the expectation.
 * @evidence contracts/testing.md#distinguishing-cases One- and two-character boundaries over each text class distinguish UTF-16 unit counting from code-point counting; grapheme clusters are intentionally not merged.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Validation runs in process on authored schemas with no native build, installation or host.
 */
export const test_openapi_validator_unicode_length = (): void => {
  const values: Array<[value: string, length: number]> = [
    ["a", 1],
    ["é", 1],
    ["😀", 1],
    ["a😀", 2],
    ["e\u0301", 2],
    ["\ud800", 1],
  ];
  for (const [value, length] of values)
    for (const expected of [0, 1, 2, 3]) {
      const exact: OpenApi.IJsonSchema.IString = {
        type: "string",
        minLength: expected,
        maxLength: expected,
      };
      TestEquality.equals(
        `${JSON.stringify(value)} has ${length} code points, not ${expected}`,
        OpenApiValidator.validate({
          components: {},
          schema: exact,
          value,
          required: true,
        }).success,
        length === expected,
      );
    }
};
