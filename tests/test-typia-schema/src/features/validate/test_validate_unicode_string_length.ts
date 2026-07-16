import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import {
  LlmTypeChecker,
  OpenApiTypeChecker,
  OpenApiValidator,
} from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies transformed string constraints count Unicode code points.
 *
 * TypeScript string length counts UTF-16 code units, which makes one astral
 * character look like two. JSON Schema instead counts characters/code points,
 * while combining marks and unpaired surrogates remain separate code points.
 *
 * 1. Exercise type-tag and JSDoc validators over the Unicode boundary matrix.
 * 2. Confirm JSON and LLM schema conversion preserves exact length keywords.
 * 3. Revalidate the same values through the emitted OpenAPI schema.
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
  const values: Array<[value: string, valid: boolean]> = [
    ["a", true],
    ["é", true],
    ["😀", true],
    ["a😀", false],
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

  for (const [value, valid] of values)
    TestValidator.equals(
      `OpenAPI parity ${JSON.stringify(value)}`,
      OpenApiValidator.validate({
        components: {},
        schema: json,
        value,
        required: true,
      }).success,
      valid,
    );
};
