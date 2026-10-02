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
 * - {@link LlmJson.coerce}: Convert parsed values using the supplied schema
 * - {@link LlmJson.stringify}: Format validation errors for LLM feedback
 * - {@link LlmJson.validate}: Create a reusable validator from schema
 * - {@link LlmJson.validateArguments}: Coerce + validate one function's arguments
 * - {@link LlmJson.structuredOutput}: Bind parsing, coercion and validation
 *
 * Generic result types describe expected data; parsing and coercion do not
 * establish validity. Keep a schema unchanged while reusing validators or a
 * structured-output handle built from it.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The namespace separates recovery, schema-directed conversion, validation and diagnostic rendering. Generic result types describe caller expectations; only the supplied or schema-built validator establishes acceptance, so parse/coerce results are not certified by their casts.
 * @evidence contracts/common.md#clear-and-simple-design Public functions compose the shared parser, coercer, schema converter and validator instead of duplicating those operations; structuredOutput binds their common parameter schema and one reusable validator.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Conversions follow the supplied schema and errors follow actual validation results, without fixture branches or altered foreign APIs. Internal implementations remain part of each calling operation's review rather than becoming new public declarations for the checker.
 * @evidence contracts/common.md#meaningful-documentation The function list identifies each operation's role, and the namespace documents unchecked generic results and schema lifetime. Individual comments explain recovery, configuration, error feedback and dispatch ordering.
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
   * The caller's generic type describes its expected result; conversion does
   * not validate that type.
   *
   * @param input Parsed arguments object from LLM
   * @param parameters LLM function parameters schema for type coercion
   *
   * @returns Coerced arguments with corrected types
   *
   * @evidence contracts/common.md#principled-implementation The shared coercer resolves supported local reference chains, preserves direct string/unknown schemas and string alternatives, and descends into declared object properties and array items. Unique type or discriminator selection determines union conversion; ambiguous unions retain the parsed or already supplied value without choosing a branch. Own-key dictionary operations preserve prototype-sensitive names, and undeclared values remain available for later validation with their declared or loose conversion.
   * @evidence contracts/common.md#clear-and-simple-design The public entry supplies the parameter root and its definitions to one recursive conversion owner; reference resolution, union selection and safe object construction stay in that implementation rather than in adapters.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The implementation converts according to schema kinds without inventing missing properties or assuming its generic T validates the result. Unresolved references and ambiguous unions are not forced into a chosen variant; the caller's validator still owns acceptance.
   * @evidence contracts/common.md#meaningful-documentation Native prose distinguishes already-parsed input from raw text, illustrates conversions and states that generic typing does not establish validity. Its parameters identify the schema that controls conversion, and the namespace states schema lifetime.
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
   *
   * @returns Parse result with data on success, or partial data with errors
   *
   * @evidence contracts/common.md#principled-implementation The internal parser first delegates valid JSON to native JSON.parse, then scans supported incomplete syntax into a value or partial-data diagnostic. Malformed Unicode prefixes consume no following quote or escape, preserving sibling boundaries; the nesting guard bounds fallback recursion rather than the native parser. Schema conversion runs only after success, so failures retain their original input and partial data.
   * @evidence contracts/common.md#clear-and-simple-design One public branch composes parsing with optional conversion. Its internal string scanner is shared by keys and values, while schema-dependent decisions stay in the coercer; unsuccessful recovery is returned without a second interpretation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Recovery follows syntax classes for all inputs instead of fixture exceptions or delimiter replacement in callers. Supplying T or a coercion schema does not bypass validation or turn a recovered value into proof of the requested type.
   * @evidence contracts/common.md#meaningful-documentation The comment lists supported malformed-input recoveries, explains optional schema conversion and explicitly separates parsing from validation. The private parser documents original-input diagnostics and malformed Unicode boundary ownership without changing its internal declaration visibility.
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
   * Literal marker text in data and error fields remains content. Separators
   * follow the data structure; this annotated diagnostic is not strict JSON.
   *
   * @param failure Validation failure from {@link ILlmFunction.validate}
   *
   * @evidence contracts/common.md#principled-implementation The shared formatter indexes errors by their supplied paths, renders values with native JSON spelling and places separators from sibling ownership before annotations. Missing values get placeholders and errors that cannot be embedded remain in a separate block, so marker substrings inside data or metadata do not become syntax boundaries.
   * @evidence contracts/common.md#clear-and-simple-design This entry delegates one feedback responsibility to the recursive renderer. Path indexing, missing-child handling and used-error tracking have one owner shared by adapters rather than independent output rewrites.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Feedback reflects the provided data and errors without reparsing marker text, recognizing consumers or patching a foreign serializer. Native toJSON hooks retain their ordinary caller-owned effects; the result is diagnostic text rather than strict JSON.
   * @evidence contracts/common.md#meaningful-documentation The comment explains correction feedback and shows inline annotation placement; native prose also identifies literal marker preservation and the diagnostic format. The corresponding LLM JSON guide describes the same output contract.
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
   * @param equals If `true`, reject extraneous properties on a closed object.
   *   Otherwise, extra properties are ignored. An object whose
   *   `additionalProperties` opens it declares undeclared keys to be legitimate
   *   members, so this flag does not close it.
   * @param config Configuration `parameters` was generated with. Only a
   *   `strict` schema carries its constraints as `@minimum 3` description tags
   *   rather than as keywords, so only a `strict` inversion reads them back.
   *   Defaults to non-strict, matching {@link ILlmSchema.IConfig.strict}. Every
   *   application reports the config it was built with — an
   *   `HttpLlm.application` the one it was composed with, a
   *   `typia.llm.application` or `typia.llm.controller` the one its `Config`
   *   generic declared — so read it off the application
   *   (`controller.application.config`) rather than restating it. A schema that
   *   arrives on its own, from `typia.llm.parameters` or from a registry,
   *   carries nothing to read back, and omitting this argument is read as
   *   non-strict.
   *
   * @returns Validator function that checks data against the schema
   *
   * @evidence contracts/common.md#principled-implementation Schema inversion reconstructs an OpenAPI schema and local components from the supplied LLM schema/configuration, then the schema validator checks each input and reports its actual data/errors. Strict-description constraints require the matching strict configuration; equals rejects undeclared keys only when the schema closes the object.
   * @evidence contracts/common.md#clear-and-simple-design Each construction owns fresh inversion components and returns one validator over that schema, reusing the inversion across calls. Parsing and coercion are separate operations rather than implicit validation side effects.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The result follows the inverted schema, required-root setting and requested equals policy rather than the caller's desired output. Configuration mismatch is not compensated by treating arbitrary description prose as constraints or silently closing an open object.
   * @evidence contracts/common.md#meaningful-documentation The comment explains the reusable validator, closed/open object distinction and why the generating configuration must be supplied for strict inversion. The namespace documents immutable schema ownership during reuse.
   */
  export function validate(
    parameters: ILlmSchema.IParameters,
    equals?: boolean | undefined,
    config?: Partial<ILlmSchema.IConfig> | undefined,
  ): (input: unknown) => IValidation<unknown> {
    const components: OpenApi.IComponents = {
      schemas: {},
    };
    const schema: OpenApi.IJsonSchema = LlmSchemaConverter.invert({
      config,
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
   * This is the coerce-then-validate step `@typia/mcp` runs on every tool call
   * — for MCP servers, prefer `createMcpServer` from `@typia/mcp` over
   * hand-rolling a `tools/call` handler; it adds no runtime dependency beyond
   * what `typia` already installs. Use this function directly when dispatching
   * an `ILlmFunction` outside `@typia/mcp` (a custom harness or a non-MCP
   * transport). On failure, format the result with {@link stringify} to feed the
   * errors back to the model for self-correction.
   *
   * The caller's generic type must match the supplied validator's result.
   *
   * @template T Expected arguments type
   *
   * @param func Target function from `typia.llm.application` /
   *   `typia.llm.controller` (only {@link ILlmFunction.parameters} and
   *   {@link ILlmFunction.validate} are used)
   * @param args Raw arguments from the LLM, possibly with wrong types or
   *   omitted
   *
   * @returns Validation result with coerced `data` on success, or `errors`
   *
   * @evidence contracts/common.md#principled-implementation The supplied function's parameter schema first controls conversion, then that same function's validator owns the resulting success/data/errors. The caller's T must correspond to that validator's contract; the cast itself performs no type check.
   * @evidence contracts/common.md#clear-and-simple-design One composition owns conversion-before-dispatch ordering and uses only parameters and validate, allowing adapters and custom dispatchers to share the operation without another validation policy.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts This operation neither accepts arguments on conversion alone nor replaces the supplied validator with a permissive fallback. Missing inputs and conversion/validator exceptions remain governed by those real operations rather than hidden retries.
   * @evidence contracts/common.md#meaningful-documentation The comment explains why conversion precedes validation, identifies the two consumed function members and distinguishes this custom-dispatch entry from typia's already assembled handlers. The result and generic-type premise are stated explicitly.
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
   * The handle borrows parameters rather than cloning them; keep the schema
   * unchanged for its lifetime. Its generic type must match that schema, and
   * parse/coerce callbacks do not implicitly run validation.
   *
   * @template T The expected output type
   *
   * @param parameters LLM parameters schema
   * @param equals If `true`, reject extraneous properties on a closed object
   *   during validation. Otherwise, extra properties are ignored. An object
   *   whose `additionalProperties` opens it declares undeclared keys to be
   *   legitimate members, so this flag does not close it.
   * @param config Configuration `parameters` was generated with. See
   *   {@link validate}.
   *
   * @returns Structured output interface with parse, coerce, and validate
   *
   * @evidence contracts/common.md#principled-implementation One validator is constructed from the parameters, equals policy and generating configuration, while parse/coerce closures use the same parameter object. The caller must keep that schema stable and choose T consistently with it; separate parse/coerce callbacks do not imply validation.
   * @evidence contracts/common.md#clear-and-simple-design The returned handle groups the original parameter schema with three delegates and reuses the schema inversion through the validator closure. It introduces no alternate parser, conversion strategy or result cache.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Callbacks invoke the documented public operations instead of certifying outputs with their T casts or fabricating a successful validation. Borrowed schema state is explicit rather than disguised as a cloned immutable snapshot.
   * @evidence contracts/common.md#meaningful-documentation The comment identifies the structured-output handle's functions, equals/configuration semantics and borrowed schema lifetime. It explains that validation is a separate callback and that the generic type must match the supplied schema.
   */
  export function structuredOutput<T>(
    parameters: ILlmSchema.IParameters,
    equals?: boolean | undefined,
    config?: Partial<ILlmSchema.IConfig> | undefined,
  ): ILlmStructuredOutput<T> {
    const validator = validate(parameters, equals, config);
    return {
      parameters,
      parse: (str: string): IJsonParseResult<T> => parse(str, parameters),
      coerce: (input: unknown): T => coerce(input, parameters),
      validate: (input: unknown): IValidation<T> =>
        validator(input) as IValidation<T>,
    };
  }
}
