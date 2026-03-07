import {
  IJsonParseResult,
  ILlmApplication,
  ILlmController,
  ILlmSchema,
} from "@typia/interface";

import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

/**
 * Creates LLM function calling controller.
 *
 * @danger You must configure the generic argument `Class`
 */
export function controller(
  name: string,
  execute: object,
  config?: Partial<Pick<ILlmApplication.IConfig<any>, "validate">>,
): never;

/**
 * Creates LLM function calling controller from class/interface.
 *
 * Generates {@link ILlmController} from a TypeScript class or interface,
 * containing both function calling schemas ({@link ILlmFunction}) and an
 * executor ({@link ILlmController.execute}).
 *
 * Each {@link ILlmFunction} includes a built-in {@link ILlmFunction.validate}
 * function that validates LLM-generated arguments before execution. When
 * validation fails, use `LlmJson.stringify()` from `@typia/utils` to format
 * errors for LLM feedback, enabling auto-correction.
 *
 * When passed to LLM providers (ChatGPT, Claude, Gemini, etc.), the LLM
 * automatically selects functions and fills arguments from conversation.
 * Execute the selected function via {@link ILlmController.execute}.
 *
 * Related functions:
 *
 * - {@link application} — Schemas only, without executor
 * - {@link parameters} — Single parameters schema for structured output
 * - {@link schema} — Single type schema
 *
 * @template Class Target class or interface type
 * @template Config LLM schema configuration
 * @param name Controller identifier name
 * @param execute Executor instance
 * @param config LLM application options
 * @returns LLM function calling controller
 */
export function controller<
  Class extends Record<string, any>,
  Config extends Partial<
    ILlmSchema.IConfig & {
      /**
       * Whether to disallow superfluous properties or not.
       *
       * If configure as `true`, {@link validateEquals} function would be used
       * for validation feedback, which is more strict than {@link validate}
       * function.
       *
       * @default false
       */
      equals: boolean;
    }
  > = {},
>(
  name: string,
  execute: Class,
  config?: Partial<Pick<ILlmApplication.IConfig<Class>, "validate">>,
): ILlmController<Class>;

/** @internal */
export function controller(..._args: any[]): never {
  NoTransformConfigurationError("llm.controller");
}

/**
 * Creates LLM function calling application.
 *
 * @danger You must configure the generic argument `Class`
 */
export function application(
  config?: Partial<Pick<ILlmApplication.IConfig<any>, "validate">>,
): never;

/**
 * Creates LLM function calling application from class/interface.
 *
 * Generates {@link ILlmApplication} from a TypeScript class or interface,
 * containing function calling schemas ({@link ILlmFunction}). Does not include
 * an executor—use {@link controller} if you need execution capability.
 *
 * Each {@link ILlmFunction} includes a built-in {@link ILlmFunction.validate}
 * function that validates LLM-generated arguments before execution. When
 * validation fails, use `LlmJson.stringify()` from `@typia/utils` to format
 * errors for LLM feedback, enabling auto-correction.
 *
 * When passed to LLM providers (ChatGPT, Claude, Gemini, etc.), the LLM
 * automatically selects functions and fills arguments from conversation. You
 * execute the function manually with the LLM-prepared arguments.
 *
 * Related functions:
 *
 * - {@link controller} — Includes executor alongside schemas
 * - {@link parameters} — Single parameters schema for structured output
 * - {@link schema} — Single type schema
 *
 * @template Class Target class or interface type
 * @template Config LLM schema configuration
 * @param config LLM application options
 * @returns LLM function calling application
 */
export function application<
  Class extends Record<string, any>,
  Config extends Partial<
    ILlmSchema.IConfig & {
      /**
       * Whether to disallow superfluous properties or not.
       *
       * If configure as `true`, {@link validateEquals} function would be used
       * for validation feedback, which is more strict than {@link validate}
       * function.
       *
       * @default false
       */
      equals: boolean;
    }
  > = {},
>(
  config?: Partial<Pick<ILlmApplication.IConfig<Class>, "validate">>,
): ILlmApplication<Class>;

/** @internal */
export function application(): never {
  NoTransformConfigurationError("llm.application");
}

/**
 * Creates LLM parameters schema.
 *
 * @danger You must configure the generic argument `Parameters`
 */
export function parameters(): never;

/**
 * Creates LLM parameters schema from TypeScript object type.
 *
 * Generates {@link ILlmSchema.IParameters} for LLM function calling or
 * structured outputs. LLMs use keyworded arguments only, so the type must be an
 * object with static properties (no dynamic properties allowed).
 *
 * Use cases:
 *
 * - Function calling: LLM fills parameters from conversation
 * - Structured outputs: LLM generates structured data, not plain text
 *
 * Related functions:
 *
 * - {@link application} — Multiple function schemas from class/interface
 * - {@link controller} — Application with executor
 * - {@link schema} — Single type schema (not parameters-specific)
 *
 * @template Parameters Target parameters type (object with static properties)
 * @template Config LLM schema configuration
 * @returns LLM parameters schema
 */
export function parameters<
  Parameters extends Record<string, any>,
  Config extends Partial<ILlmSchema.IConfig> = {},
>(): ILlmSchema.IParameters;

/** @internal */
export function parameters(): never {
  NoTransformConfigurationError("llm.parameters");
}

/**
 * Creates LLM type schema.
 *
 * @danger You must configure the generic argument `T`
 */
export function schema(): never;

/**
 * Creates LLM type schema from TypeScript type.
 *
 * Generates {@link ILlmSchema} for use in LLM function calling. For actual
 * function calling with TypeScript functions, use {@link application}. For
 * structured output generation, use {@link parameters}.
 *
 * LLM function calling flow:
 *
 * 1. LLM selects function and fills arguments from conversation
 * 2. You execute the function with LLM-prepared arguments
 * 3. Return value is passed back to LLM via system prompt
 * 4. LLM continues conversation based on return value
 *
 * Related functions:
 *
 * - {@link application} — Multiple function schemas from class/interface
 * - {@link controller} — Application with executor
 * - {@link parameters} — Parameters schema for structured output
 *
 * @template T Target type
 * @template Config LLM schema configuration
 * @param $defs Shared schema definitions for `$ref` referencing
 * @returns LLM type schema
 */
export function schema<T, Config extends Partial<ILlmSchema.IConfig> = {}>(
  $defs: Record<string, ILlmSchema>,
): ILlmSchema;

/** @internal */
export function schema(): never {
  NoTransformConfigurationError("llm.schema");
}

/**
 * Parse LLM response JSON with type coercion.
 *
 * @danger You must configure the generic argument `Parameters`
 */
export function parse(input: string): never;

/**
 * Parse lenient JSON with schema-based type coercion.
 *
 * Handles incomplete or malformed JSON commonly produced by LLMs:
 *
 * - Unclosed brackets, strings, trailing commas
 * - JavaScript-style comments (`//` and multi-line)
 * - Unquoted object keys, incomplete keywords (`tru`, `fal`, `nul`)
 * - Markdown code block extraction, junk prefix skipping
 *
 * Also coerces double-stringified values based on the `Parameters` schema:
 *
 * - `"42"` → `42` (when schema expects number)
 * - `"true"` → `true` (when schema expects boolean)
 * - `"null"` → `null` (when schema expects null)
 * - `"{...}"` → `{...}` (when schema expects object)
 * - `"[...]"` → `[...]` (when schema expects array)
 *
 * Type validation is NOT performed—use {@link ILlmFunction.validate} or
 * `typia.validate()` for that.
 *
 * For repeated parsing, use {@link createParse} to avoid regenerating the schema
 * each time.
 *
 * Related functions:
 *
 * - {@link createParse} — Create reusable parser function
 * - {@link coerce} — Type coercion for already-parsed objects
 * - {@link parameters} — Generate parameters schema from type
 *
 * @template Parameters Target parameters type (object with static properties)
 * @template Config LLM schema configuration
 * @param input Raw JSON string (potentially incomplete or malformed)
 * @returns Parse result with typed data on success, or partial data with errors
 */
export function parse<
  Parameters extends Record<string, any>,
  Config extends Partial<ILlmSchema.IConfig> = {},
>(input: string): IJsonParseResult<Parameters>;

/** @internal */
export function parse(): never {
  NoTransformConfigurationError("llm.parse");
}

/**
 * Coerce LLM arguments to match expected schema types.
 *
 * LLMs often return values with incorrect types (e.g., numbers as strings).
 * This function recursively coerces values based on the `Parameters` schema:
 *
 * - `"42"` → `42` (when schema expects number)
 * - `"true"` → `true` (when schema expects boolean)
 * - `"null"` → `null` (when schema expects null)
 * - `"{...}"` → `{...}` (when schema expects object)
 * - `"[...]"` → `[...]` (when schema expects array)
 *
 * Use this when your SDK provides already-parsed objects but values may have
 * wrong types. For raw JSON strings, use {@link parse} instead.
 *
 * For repeated coercion, use {@link createCoerce} to avoid regenerating the
 * schema each time.
 *
 * Type validation is NOT performed—use {@link ILlmFunction.validate} or
 * `typia.validate()` for that.
 *
 * Related functions:
 *
 * - {@link createCoerce} — Create reusable coercer function
 * - {@link parse} — Parse and coerce raw JSON strings
 * - {@link parameters} — Generate parameters schema from type
 *
 * @template Parameters Target parameters type (object with static properties)
 * @template Config LLM schema configuration
 * @param input Parsed arguments object from LLM (with potentially wrong types)
 * @returns Coerced arguments with corrected types
 */
export function coerce<
  Parameters extends Record<string, any>,
  Config extends Partial<ILlmSchema.IConfig> = {},
>(input: Parameters): Parameters;

/** @internal */
export function coerce(): never {
  NoTransformConfigurationError("llm.coerce");
}

/**
 * Create reusable LLM JSON parser with type coercion.
 *
 * @danger You must configure the generic argument `Parameters`
 */
export function createParse(): never;

/**
 * Create reusable lenient JSON parser with schema-based type coercion.
 *
 * Returns a parser function that handles incomplete or malformed JSON commonly
 * produced by LLMs:
 *
 * - Unclosed brackets, strings, trailing commas
 * - JavaScript-style comments (`//` and multi-line)
 * - Unquoted object keys, incomplete keywords (`tru`, `fal`, `nul`)
 * - Markdown code block extraction, junk prefix skipping
 *
 * Also coerces double-stringified values based on the `Parameters` schema:
 *
 * - `"42"` → `42` (when schema expects number)
 * - `"true"` → `true` (when schema expects boolean)
 * - `"null"` → `null` (when schema expects null)
 * - `"{...}"` → `{...}` (when schema expects object)
 * - `"[...]"` → `[...]` (when schema expects array)
 *
 * Use this instead of {@link parse} when parsing multiple inputs to avoid
 * regenerating the schema each time.
 *
 * Type validation is NOT performed—use {@link ILlmFunction.validate} or
 * `typia.validate()` for that.
 *
 * Related functions:
 *
 * - {@link parse} — One-shot parsing (regenerates schema each call)
 * - {@link createCoerce} — Create reusable coercer function
 * - {@link parameters} — Generate parameters schema from type
 *
 * @template Parameters Target parameters type (object with static properties)
 * @template Config LLM schema configuration
 * @returns Reusable parser function
 */
export function createParse<
  Parameters extends Record<string, any>,
  Config extends Partial<ILlmSchema.IConfig> = {},
>(): (input: string) => IJsonParseResult<Parameters>;

/** @internal */
export function createParse(): never {
  NoTransformConfigurationError("llm.createParse");
}

/**
 * Create reusable LLM arguments coercer.
 *
 * @danger You must configure the generic argument `Parameters`
 */
export function createCoerce(): never;

/**
 * Create reusable coercer for LLM arguments.
 *
 * Returns a coercer function that fixes incorrect types commonly returned by
 * LLMs (e.g., numbers as strings). Coerces values based on the `Parameters`
 * schema:
 *
 * - `"42"` → `42` (when schema expects number)
 * - `"true"` → `true` (when schema expects boolean)
 * - `"null"` → `null` (when schema expects null)
 * - `"{...}"` → `{...}` (when schema expects object)
 * - `"[...]"` → `[...]` (when schema expects array)
 *
 * Use this instead of {@link coerce} when coercing multiple inputs to avoid
 * regenerating the schema each time.
 *
 * Type validation is NOT performed—use {@link ILlmFunction.validate} or
 * `typia.validate()` for that.
 *
 * Related functions:
 *
 * - {@link coerce} — One-shot coercion (regenerates schema each call)
 * - {@link createParse} — Create reusable parser function
 * - {@link parameters} — Generate parameters schema from type
 *
 * @template Parameters Target parameters type (object with static properties)
 * @template Config LLM schema configuration
 * @returns Reusable coercer function
 */
export function createCoerce<
  Parameters extends Record<string, any>,
  Config extends Partial<ILlmSchema.IConfig> = {},
>(): (input: Parameters) => Parameters;

/** @internal */
export function createCoerce(): never {
  NoTransformConfigurationError("llm.createCoerce");
}
