import { ILlmApplication, ILlmController, ILlmSchema } from "@typia/interface";

import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

/**
 * Creates LLM function calling controller.
 *
 * @danger You must configure the generic argument `Class`
 */
export function controller(
  name: string,
  execute: object,
  config?: Partial<Pick<ILlmApplication.IConfig<any>, "separate" | "validate">>,
): never;

/**
 * Creates LLM function calling controller from class/interface.
 *
 * Generates {@link ILlmController} from a TypeScript class or interface,
 * containing both function calling schemas ({@link ILlmFunction}) and an
 * executor ({@link ILlmController.execute}).
 *
 * Each {@link ILlmFunction} includes a built-in {@link ILlmFunction.validate}
 * function that validates LLM-generated arguments before execution. Use
 * `config.validate` to enable validation feedback for auto-correction.
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
 * @param config LLM application options (separate, validate)
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
  config?: Partial<
    Pick<ILlmApplication.IConfig<Class>, "separate" | "validate">
  >,
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
  config?: Partial<Pick<ILlmApplication.IConfig<any>, "separate" | "validate">>,
): never;

/**
 * Creates LLM function calling application from class/interface.
 *
 * Generates {@link ILlmApplication} from a TypeScript class or interface,
 * containing function calling schemas ({@link ILlmFunction}). Does not include
 * an executor—use {@link controller} if you need execution capability.
 *
 * Each {@link ILlmFunction} includes a built-in {@link ILlmFunction.validate}
 * function that validates LLM-generated arguments before execution. Use
 * `config.validate` to enable validation feedback for auto-correction.
 *
 * When passed to LLM providers (ChatGPT, Claude, Gemini, etc.), the LLM
 * automatically selects functions and fills arguments from conversation. You
 * execute the function manually with the LLM-prepared arguments.
 *
 * Configure {@link ILlmApplication.IConfig.separate} to split parameters between
 * LLM-fillable and human-required (e.g., file uploads, passwords). Merge them
 * with {@link HttpLlm.mergeParameters} before execution.
 *
 * Related functions:
 *
 * - {@link controller} — Includes executor alongside schemas
 * - {@link parameters} — Single parameters schema for structured output
 * - {@link schema} — Single type schema
 *
 * @template Class Target class or interface type
 * @template Config LLM schema configuration
 * @param config LLM application options (separate, validate)
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
  config?: Partial<
    Pick<ILlmApplication.IConfig<Class>, "separate" | "validate">
  >,
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
