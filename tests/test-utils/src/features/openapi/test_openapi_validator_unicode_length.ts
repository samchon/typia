import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
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
      TestValidator.equals(
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
