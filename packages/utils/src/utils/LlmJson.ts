import {
  IJsonParseResult,
  ILlmSchema,
  IValidation,
  OpenApi,
} from "@typia/interface";

import { LlmSchemaConverter } from "../converters";
import { OpenApiValidator } from "../validators";
import { coerceLlmArguments } from "./internal/coerceLlmArguments";
import { parseLenientJson } from "./internal/parseLenientJson";
import { stringifyValidationFailure } from "./internal/stringifyValidationFailure";

/**
 * JSON utilities for LLM function calling.
 *
 * - {@link LlmJson.parse}: Lenient JSON parser for incomplete/malformed JSON
 * - {@link LlmJson.stringify}: Format validation errors for LLM feedback
 * - {@link LlmJson.validate}: Create a reusable validator from schema
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace LlmJson {
  /**
   * Coerce LLM arguments to match expected schema types.
   *
   * LLMs often return values with incorrect types (e.g., numbers as strings).
   * This function recursively coerces values based on the schema:
   *
   * - `"42"` → `42` (when schema expects number)
   * - `"true"` → `true` (when schema expects boolean)
   * - `"null"` → `null` (when schema expects null)
   * - `"{...}"` → `{...}` (when schema expects object)
   * - `"[...]"` → `[...]` (when schema expects array)
   *
   * Use this when SDK provides already-parsed objects but values may have wrong
   * types. For raw JSON strings, use {@link parse} instead.
   *
   * @param input Parsed arguments object from LLM
   * @param parameters LLM function parameters schema for type coercion
   * @returns Coerced arguments with corrected types
   */
  export function coerce<T = unknown>(
    input: unknown,
    parameters: ILlmSchema.IParameters,
  ): T {
    return coerceLlmArguments(input, parameters);
  }

  /**
   * Parse lenient JSON with optional schema-based coercion.
   *
   * Handles incomplete/malformed JSON commonly produced by LLMs:
   *
   * - Unclosed brackets, strings, trailing commas
   * - JavaScript-style comments (`//` and multi-line)
   * - Unquoted object keys, incomplete keywords (`tru`, `fal`, `nul`)
   * - Markdown code block extraction, junk prefix skipping
   *
   * When `parameters` schema is provided, also coerces double-stringified
   * values: `"42"` → `42`, `"true"` → `true`, `"{...}"` → `{...}` based on
   * expected types.
   *
   * Type validation is NOT performed - use {@link ILlmFunction.validate}.
   *
   * @param input Raw JSON string (potentially incomplete or malformed)
   * @param parameters Optional LLM parameters schema for type coercion
   * @returns Parse result with data on success, or partial data with errors
   */
  export function parse<T = unknown>(
    input: string,
    parameters?: ILlmSchema.IParameters,
  ): IJsonParseResult<T> {
    const result: IJsonParseResult<T> = parseLenientJson<T>(input);

    // Apply schema-based coercion if parameters provided and parsing succeeded
    if (parameters !== undefined && result.success) {
      return {
        success: true,
        data: coerceLlmArguments(result.data, parameters) as T,
      };
    }
    return result;
  }

  /**
   * Format validation failure for LLM auto-correction feedback.
   *
   * When LLM generates invalid function call arguments, this produces annotated
   * JSON with inline `// ❌` error comments at each invalid property. The output
   * is wrapped in a markdown code block so that LLM can understand and correct
   * its mistakes in the next turn.
   *
   * Below is an example of the output format:
   *
   * ```json
   * {
   *   "name": "John",
   *   "age": "twenty", // ❌ [{"path":"$input.age","expected":"number & Type<\"uint32\">"}]
   *   "email": "not-an-email", // ❌ [{"path":"$input.email","expected":"string & Format<\"email\">"}]
   *   "hobbies": "reading" // ❌ [{"path":"$input.hobbies","expected":"Array<string>"}]
   * }
   * ```
   *
   * @param failure Validation failure from {@link ILlmFunction.validate}
   */
  export function stringify(failure: IValidation.IFailure): string {
    return stringifyValidationFailure(failure);
  }

  /**
   * Create a reusable validator from LLM parameters schema.
   *
   * When validation fails, format the failure with {@link stringify} for LLM
   * auto-correction feedback.
   *
   * @param parameters LLM function parameters schema
   * @param equals If `true`, reject extraneous properties not defined in the
   *   schema. Otherwise, extra properties are ignored.
   * @returns Validator function that checks data against the schema
   */
  export function validate(
    parameters: ILlmSchema.IParameters,
    equals?: boolean | undefined,
  ) {
    const components: OpenApi.IComponents = {
      schemas: {},
    };
    const schema: OpenApi.IJsonSchema = LlmSchemaConverter.invert({
      components,
      schema: parameters,
      $defs: parameters.$defs,
    });
    return OpenApiValidator.create({
      components,
      schema,
      required: true,
      equals,
    });
  }
}
