import {
  IJsonParseResult,
  ILlmFunction,
  ILlmSchema,
  ILlmStructuredOutput,
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
 * - {@link LlmJson.validateArguments}: Coerce + validate one function's arguments
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
  ): (input: unknown) => IValidation<unknown> {
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

  /**
   * Coerce and validate LLM function-call arguments in one step.
   *
   * Bundles the two things every function-call handler must do before dispatch:
   * {@link coerce} the raw arguments to the schema's expected types, then run
   * the function's own {@link ILlmFunction.validate}. Coercing first is what
   * makes an LLM's `"12"` for a `number` (or a stringified boolean) acceptable;
   * calling {@link ILlmFunction.validate} alone would reject it.
   *
   * This is the coerce-then-validate step `@typia/mcp` runs on every tool
   * call — for MCP servers, prefer `createMcpServer` from `@typia/mcp`
   * over hand-rolling a `tools/call` handler; it adds no runtime dependency
   * beyond what `typia` already installs. Use this function directly when
   * dispatching an `ILlmFunction` outside `@typia/mcp` (a custom harness or a
   * non-MCP transport). On failure, format the result with {@link stringify} to
   * feed the errors back to the model for self-correction.
   *
   * @template T Expected arguments type
   * @param func Target function from `typia.llm.application` /
   *   `typia.llm.controller` (only {@link ILlmFunction.parameters} and
   *   {@link ILlmFunction.validate} are used)
   * @param args Raw arguments from the LLM, possibly with wrong types or
   *   omitted
   * @returns Validation result with coerced `data` on success, or `errors`
   */
  export function validateArguments<T = unknown>(
    func: Pick<ILlmFunction, "parameters" | "validate">,
    args: unknown,
  ): IValidation<T> {
    return func.validate(coerce(args, func.parameters)) as IValidation<T>;
  }

  /**
   * Convert LLM parameters schema to structured output interface.
   *
   * Creates an {@link ILlmStructuredOutput} containing everything needed for
   * handling LLM structured outputs: the parameters schema for prompting, and
   * functions for parsing, coercing, and validating responses.
   *
   * This is useful when you have a parameters schema (e.g., from
   * `typia.llm.parameters()`) and need the full structured output interface
   * with all utility functions.
   *
   * @template T The expected output type
   * @param parameters LLM parameters schema
   * @param equals If `true`, reject extraneous properties not defined in the
   *   schema during validation. Otherwise, extra properties are ignored.
   * @returns Structured output interface with parse, coerce, and validate
   */
  export function structuredOutput<T>(
    parameters: ILlmSchema.IParameters,
    equals?: boolean | undefined,
  ): ILlmStructuredOutput<T> {
    const validator = validate(parameters, equals);
    return {
      parameters,
      parse: (str: string): IJsonParseResult<T> => parse(str, parameters),
      coerce: (input: unknown): T => coerce(input, parameters),
      validate: (input: unknown): IValidation<T> =>
        validator(input) as IValidation<T>,
    };
  }
}
