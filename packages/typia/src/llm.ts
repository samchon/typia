import { ILlmApplication, ILlmController, ILlmSchema } from "@typia/interface";

import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

/**
<<<<<<< HEAD
 * > You must configure the generic argument `Class`.
 *
 * TypeScript functions to LLM function calling controller.
 *
 * Creates a controller of LLM (Large Language Model) function calling from a
 * TypeScript class or interface type containing the target functions to be
 * called by the LLM function calling feature. The returned controller contains
 * not only the {@link application} of
 * {@link ILlmFunction function calling schemas}, but also the
 * {@link ILlmController.execute executor} of the functions.
 *
 * If you put the returned {@link ILlmController} to the LLM provider like
 * [OpenAI (ChatGPT)](https://openai.com/), the LLM will automatically select
 * the proper function and fill its arguments from the conversation (maybe
 * chatting text) with user (human). And you can actually call the function by
 * using {@link ILlmController.execute} property. This is the concept of the LLM
 * function calling.
 *
 * Here is an example of using `typia.llm.controller()` function for AI agent
 * development of performing such AI function calling to mobile API classes
 * through this `typia` and external `@agentica` libraries.
 *
 * ```typescript
 * import { Agentica } from "@agentica/core";
 * import typia from "typia";
 *
 * const agentica = new Agentica({
 *   model: "chatgpt",
 *   vendor: {
 *     api: new OpenAI({ apiKey: "********" }),
 *     model: "gpt-4o-mini",
 *   },
 *   controllers: [
 *     typia.llm.controller<ReactNativeFileSystem>(
 *       "filesystem",
 *       new ReactNativeFileSystem(),
 *     ),
 *     typia.llm.controller<ReactNativeGallery>(
 *       "gallery",
 *       new ReactNativeGallery(),
 *     ),
 *   ],
 * });
 * await agentica.conversate(
 *   "Organize photo collection and sort them into appropriate folders.",
 * );
 * ```
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Class Target class or interface type collecting the functions to
 *   call
 * @template Config Configuration of LLM schema composition
 * @param name Identifier name of the controller
 * @param execute Executor instance
 * @param config Options for the LLM application construction
 * @returns Controller of LLM function calling
 * @reference https://wrtnlabs.io/agentica/docs/core/controller/typescript/
=======
 * Creates LLM function calling controller.
 *
 * @danger You must configure the generic argument `Class`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function controller(
  name: string,
  execute: object,
  config?: Partial<Pick<ILlmApplication.IConfig<any>, "separate" | "validate">>,
): never;

/**
<<<<<<< HEAD
 * TypeScript functions to LLM function calling controller.
 *
 * Creates a controller of LLM (Large Language Model) function calling from a
 * TypeScript class or interface type containing the target functions to be
 * called by the LLM function calling feature. The returned controller contains
 * not only the {@link application} of
 * {@link ILlmFunction function calling schemas}, but also the
 * {@link ILlmController.execute executor} of the functions.
 *
 * If you put the returned {@link ILlmController} to the LLM provider like
 * [OpenAI (ChatGPT)](https://openai.com/), the LLM will automatically select
 * the proper function and fill its arguments from the conversation (maybe
 * chatting text) with user (human). And you can actually call the function by
 * using {@link ILlmController.execute} property. This is the concept of the LLM
 * function calling.
 *
 * Here is an example of using `typia.llm.controller()` function for AI agent
 * development of performing such AI function calling to mobile API classes
 * through this `typia` and external `@agentica` libraries.
 *
 * ```typescript
 * import { Agentica } from "@agentica/core";
 * import typia from "typia";
 *
 * const agentica = new Agentica({
 *   model: "chatgpt",
 *   vendor: {
 *     api: new OpenAI({ apiKey: "********" }),
 *     model: "gpt-4o-mini",
 *   },
 *   controllers: [
 *     typia.llm.controller<ReactNativeFileSystem>(
 *       "filesystem",
 *       new ReactNativeFileSystem(),
 *     ),
 *     typia.llm.controller<ReactNativeGallery>(
 *       "gallery",
 *       new ReactNativeGallery(),
 *     ),
 *   ],
 * });
 * await agentica.conversate(
 *   "Organize photo collection and sort them into appropriate folders.",
 * );
 * ```
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Class Target class or interface type collecting the functions to
 *   call
 * @template Config Configuration of LLM schema composition
 * @param name Identifier name of the controller
 * @param execute Executor instance
 * @param config Options for the LLM application construction
 * @returns Controller of LLM function calling
 * @reference https://wrtnlabs.io/agentica/docs/core/controller/typescript/
=======
 * Creates LLM function calling controller from class/interface.
 *
 * Generates {@link ILlmController} from a TypeScript class or interface,
 * containing both function calling schemas ({@link ILlmFunction}) and an
 * executor ({@link ILlmController.execute}).
 *
 * Each {@link ILlmFunction} includes a built-in {@link ILlmFunction.validate}
 * function that validates LLM-generated arguments before execution. When
 * validation fails, use `stringifyValidationFailure()` from `@typia/utils` to
 * format errors for LLM feedback, enabling auto-correction.
 *
 * When passed to LLM providers (ChatGPT, Claude, Gemini, etc.), the LLM
 * automatically selects functions and fills arguments from conversation.
 * Execute the selected function via {@link ILlmController.execute}.
 *
 * Configure {@link ILlmApplication.IConfig.separate} to split parameters between
 * LLM-fillable and human-required (e.g., file uploads, passwords).
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
<<<<<<< HEAD
 * > You must configure the generic argument `Class`.
 *
 * TypeScript functions to LLM function calling application.
 *
 * Creates an application of LLM (Large Language Model) function calling
 * application from a TypeScript class or interface type containing the target
 * functions to be called by the LLM function calling feature.
 *
 * If you put the returned {@link ILlmApplication.functions} objects to the LLM
 * provider like [OpenAI (ChatGPT)](https://openai.com/), the LLM will
 * automatically select the proper function and fill its arguments from the
 * conversation (maybe chatting text) with user (human). This is the concept of
 * the LLM function calling.
 *
 * By the way, there can be some parameters (or their nested properties) which
 * must be composed by human, not by LLM. File uploading feature or some
 * sensitive information like security keys (password) are the examples. In that
 * case, you can separate the function parameters to both LLM and human sides by
 * configuring the {@link ILlmApplication.IConfig.separate} property. The
 * separated parameters are assigned to the {@link ILlmFunction.separated}
 * property.
 *
 * For reference, the actual function call execution is not by LLM, but by you.
 * When the LLM selects the proper function and fills the arguments, you just
 * call the function with the LLM prepared arguments. And then informs the
 * return value to the LLM by system prompt. The LLM will continue the next
 * conversation based on the return value.
 *
 * Additionally, if you've configured {@link ILlmApplication.IConfig.separate},
 * so that the parameters are separated to human and LLM sides, you can merge
 * these human and LLM sides' parameters into one through
 * {@link HttpLlm.mergeParameters} before the actual LLM function call
 * execution.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Class Target class or interface type collecting the functions to
 *   call
 * @template Config Configuration of LLM schema composition
 * @param config Options for the LLM application construction
 * @returns Application of LLM function calling schemas
 * @reference https://platform.openai.com/docs/guides/function-calling
=======
 * Creates LLM function calling application.
 *
 * @danger You must configure the generic argument `Class`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function application(
  config?: Partial<Pick<ILlmApplication.IConfig<any>, "separate" | "validate">>,
): never;

/**
<<<<<<< HEAD
 * TypeScript functions to LLM function calling application.
 *
 * Creates an application of LLM (Large Language Model) function calling
 * application from a TypeScript class or interface type containing the target
 * functions to be called by the LLM function calling feature.
 *
 * If you put the returned {@link ILlmApplication.functions} objects to the LLM
 * provider like [OpenAI (ChatGPT)](https://openai.com/), the LLM will
 * automatically select the proper function and fill its arguments from the
 * conversation (maybe chatting text) with user (human). This is the concept of
 * the LLM function calling.
 *
 * By the way, there can be some parameters (or their nested properties) which
 * must be composed by human, not by LLM. File uploading feature or some
 * sensitive information like security keys (password) are the examples. In that
 * case, you can separate the function parameters to both LLM and human sides by
 * configuring the {@link ILlmApplication.IConfig.separate} property. The
 * separated parameters are assigned to the {@link ILlmFunction.separated}
 * property.
 *
 * For reference, the actual function call execution is not by LLM, but by you.
 * When the LLM selects the proper function and fills the arguments, you just
 * call the function with the LLM prepared arguments. And then informs the
 * return value to the LLM by system prompt. The LLM will continue the next
 * conversation based on the return value.
 *
 * Additionally, if you've configured {@link ILlmApplication.IConfig.separate},
 * so that the parameters are separated to human and LLM sides, you can merge
 * these human and LLM sides' parameters into one through
 * {@link HttpLlm.mergeParameters} before the actual LLM function call
 * execution.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Class Target class or interface type collecting the functions to
 *   call
 * @template Config Configuration of LLM schema composition
 * @param config Options for the LLM application construction
 * @returns Application of LLM function calling schemas
 * @reference https://platform.openai.com/docs/guides/function-calling
=======
 * Creates LLM function calling application from class/interface.
 *
 * Generates {@link ILlmApplication} from a TypeScript class or interface,
 * containing function calling schemas ({@link ILlmFunction}). Does not include
 * an executor—use {@link controller} if you need execution capability.
 *
 * Each {@link ILlmFunction} includes a built-in {@link ILlmFunction.validate}
 * function that validates LLM-generated arguments before execution. When
 * validation fails, use `stringifyValidationFailure()` from `@typia/utils` to
 * format errors for LLM feedback, enabling auto-correction.
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
 * @param config LLM application options
 * @returns LLM function calling application
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
<<<<<<< HEAD
 * > You must configure the generic argument `Parameters`.
 *
 * TypeScript parameters to LLM parameters schema.
 *
 * Creates an LLM (Large Language Model) parameters schema, a type metadata that
 * is used in the [LLM function
 * calling](https://platform.openai.com/docs/guides/function-calling) and [LLM
 * structured
 * outputs](https://platform.openai.com/docs/guides/structured-outputs), from a
 * TypeScript parameters type.
 *
 * For references, LLM identifies only keyworded arguments, not positional
 * arguments. Therefore, the TypeScript parameters type must be an object type,
 * and its properties must be static. If dynamic properties are, it will be
 * compilation error.
 *
 * Also, such parameters type can be utilized not only for the LLM function
 * calling, but also for the LLM structured outputs. The LLM structured outputs
 * is a feature that LLM (Large Language Model) can generate a structured
 * output, not only a plain text, by filling the parameters from the
 * conversation (maybe chatting text) with user (human).
 *
 * @template Parameters Target parameters type
 * @template Config Configuration of LLM schema composition
 * @returns LLM parameters schema
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @reference https://platform.openai.com/docs/guides/structured-outputs
=======
 * Creates LLM parameters schema.
 *
 * @danger You must configure the generic argument `Parameters`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function parameters(): never;

/**
<<<<<<< HEAD
 * TypeScript parameters to LLM parameters schema.
 *
 * Creates an LLM (Large Language Model) parameters schema, a type metadata that
 * is used in the [LLM function
 * calling](https://platform.openai.com/docs/guides/function-calling) and [LLM
 * structured
 * outputs](https://platform.openai.com/docs/guides/structured-outputs), from a
 * TypeScript parameters type.
 *
 * For references, LLM identifies only keyworded arguments, not positional
 * arguments. Therefore, the TypeScript parameters type must be an object type,
 * and its properties must be static. If dynamic properties are, it will be
 * compilation error.
 *
 * Also, such parameters type can be utilized not only for the LLM function
 * calling, but also for the LLM structured outputs. The LLM structured outputs
 * is a feature that LLM (Large Language Model) can generate a structured
 * output, not only a plain text, by filling the parameters from the
 * conversation (maybe chatting text) with user (human).
 *
 * @template Parameters Target parameters type
 * @template Config Configuration of LLM schema composition
 * @returns LLM parameters schema
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @reference https://platform.openai.com/docs/guides/structured-outputs
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
<<<<<<< HEAD
 * > You must configure the generic argument `T`.
 *
 * TypeScript type to LLM type schema.
 *
 * Creates an LLM (Large Language Model) type schema, a type metadata that is
 * used in the [LLM function calling](@reference
 * https://platform.openai.com/docs/guides/function-calling), from a TypeScript
 * type.
 *
 * If you actually want to perform the LLM function calling with TypeScript
 * functions, you can do it with the {@link application} function. Otherwise you
 * hope to perform the structured output, {@link parameters} function is better.
 * Let's enjoy the LLM function calling and structured output with the native
 * TypeScript functions and types.
 *
 * > **What LLM function calling is?
 *
 * > LLM (Large Language Model) selects property function and fill the arguments,
 * > but actual function call execution is not by LLM, but by you.
 *
 * > In nowadays, most LLM (Large Language Model) like OpenAI are supporting
 * > "function calling" feature. The "function calling" means that LLM
 * > automatically selects a proper function and compose parameter values from the
 * > user's chatting text.
 *
 * > When LLM selects the proper function and its arguments, you just call the
 * > function with the arguments. And then informs the return value to the LLM by
 * > system prompt, LLM will continue the next conversation based on the return
 * > value.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type
 * @template Config Configuration of LLM schema composition
 * @returns LLM schema
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @reference https://platform.openai.com/docs/guides/structured-outputs
=======
 * Creates LLM type schema.
 *
 * @danger You must configure the generic argument `T`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function schema(): never;

/**
<<<<<<< HEAD
 * TypeScript type to LLM type schema.
 *
 * Creates an LLM (Large Language Model) type schema, a type metadata that is
 * used in the [LLM function calling](@reference
 * https://platform.openai.com/docs/guides/function-calling), from a TypeScript
 * type.
 *
 * If you actually want to perform the LLM function calling with TypeScript
 * functions, you can do it with the {@link application} function. Otherwise you
 * hope to perform the structured output, {@link parameters} function is better.
 * Let's enjoy the LLM function calling and structured output with the native
 * TypeScript functions and types.
 *
 * > **What LLM function calling is?
 *
 * > LLM (Large Language Model) selects property function and fill the arguments,
 * > but actual function call execution is not by LLM, but by you.
 *
 * > In nowadays, most LLM (Large Language Model) like OpenAI are supporting
 * > "function calling" feature. The "function calling" means that LLM
 * > automatically selects a proper function and compose parameter values from the
 * > user's chatting text.
 *
 * > When LLM selects the proper function and its arguments, you just call the
 * > function with the arguments. And then informs the return value to the LLM by
 * > system prompt, LLM will continue the next conversation based on the return
 * > value.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type
 * @template Config Configuration of LLM schema composition
 * @returns LLM schema
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @reference https://platform.openai.com/docs/guides/structured-outputs
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function schema<T, Config extends Partial<ILlmSchema.IConfig> = {}>(
  $defs: Record<string, ILlmSchema>,
): ILlmSchema;

/** @internal */
export function schema(): never {
  NoTransformConfigurationError("llm.schema");
}
