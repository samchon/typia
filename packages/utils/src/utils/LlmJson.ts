import { ILlmSchema, IValidation, OpenApi } from "@typia/interface";

import { LlmSchemaConverter } from "../converters";
import { OpenApiValidator } from "../validators";
import { coerceLlmArguments } from "./internal/coerceLlmArguments";
import { parseLenientJson } from "./internal/parseLenientJson";
import { stringifyValidationFailure } from "./internal/stringifyValidationFailure";

/**
 * JSON utilities for LLM function calling.
 *
 * `LlmJson` provides three main utilities:
 *
 * ## {@link LlmJson.parse}
 *
 * Lenient JSON parser for incomplete/malformed JSON:
 *
 * - Unclosed brackets `{`, `[` - parses as much as possible
 * - Trailing commas `[1, 2, ]` - ignores trailing commas
 * - Schema-based coercion when parameters provided:
 *
 *   - Double-stringified JSON: `"{\"name\": \"John\"}"` → `{name: "John"}`
 *
 * ## {@link LlmJson.stringify}
 *
 * Format validation errors for LLM feedback:
 *
 * - Annotates invalid properties with inline `// ❌` comments
 * - Wraps output in markdown code block for LLM understanding
 * - Enables LLM auto-correction in the next turn
 *
 * ## {@link LlmJson.validate}
 *
 * Create a reusable validator from LLM parameters schema
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace LlmJson {
  /**
   * Parse lenient JSON with optional schema-based coercion.
   *
   * This function parses JSON that may be incomplete (unclosed brackets,
   * partial keywords) or have trailing commas.
   *
   * When `parameters` schema is provided, also fixes double-stringified JSON by
   * recursively parsing string values where the schema expects non-string
   * types. Uses the same lenient parser internally.
   *
   * Type validation is NOT performed here - use {@link ILlmFunction.validate}
   * for that.
   *
   * ## 1. Lenient parsing (without `parameters`)
   *
   * ```typescript
   * // Unclosed brackets
   * LlmJson.parse('{"name": "John", "age": 30'); // → { name: "John", age: 30 }
   * LlmJson.parse("[1, 2, 3"); // → [1, 2, 3]
   *
   * // Trailing commas
   * LlmJson.parse("[1, 2, ]"); // → [1, 2]
   * LlmJson.parse('{"a": 1, "b": 2, }'); // → { a: 1, b: 2 }
   *
   * // Unclosed strings
   * LlmJson.parse('{"name": "John'); // → { name: "John" }
   * ```
   *
   * ## 2. Schema-based coercion (with `parameters`)
   *
   * When `parameters` is provided, string values are coerced to the
   * schema-expected type by re-parsing them through the lenient parser. This
   * fixes "double-stringified" values that LLMs sometimes produce.
   *
   * ```typescript
   * // schema expects: { member: object, age: integer, active: boolean, tags: array }
   *
   * '{"member": "{\\"name\\": \\"John\\"}"}'; // → { member: { name: "John" } }
   * '{"age": "42"}'; // → { age: 42 }
   * '{"active": "true"}'; // → { active: true }
   * '{"tags": "[1, 2, 3]"}'; // → { tags: [1, 2, 3] }
   *
   * // Recursive: "30" inside stringified object is also coerced to number
   * '{"member": "{\\"age\\": \\"30\\"}"}'; // → { member: { age: 30 } }
   * ```
   *
   * @param input Raw JSON string (potentially incomplete)
   * @param parameters Optional LLM parameters schema for coercion
   * @returns Validation result with parsed data or syntax errors
   */
  export function parse<T = unknown>(
    input: string,
    parameters?: ILlmSchema.IParameters,
  ): IValidation<T> {
    const result: IValidation<T> = parseLenientJson<T>(input);

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
   * @returns Validator function that checks data against the schema
   */
  export function validate(parameters: ILlmSchema.IParameters) {
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
    });
  }
}
