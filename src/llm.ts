import { ILlmApplication, ILlmController, ILlmSchema } from "@samchon/openapi";

import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

/**
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
 *     typia.llm.controller<ReactNativeFileSystem, "chatgpt">(
 *       "filesystem",
 *       new ReactNativeFileSystem(),
 *     ),
 *     typia.llm.controller<ReactNativeGallery, "chatgpt">(
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
 * Here is the list of available `Model` types with their corresponding LLM
 * schema. Reading the following list, and determine the `Model` type
 * considering the characteristics of the target LLM provider.
 *
 * - LLM provider schemas
 *
 *   - `chatgpt`:
 *       [`IChatGptSchema`](https://samchon.github.io/openapi/api/types/IChatGptSchema-1.html)
 *   - `claude`:
 *       [`IClaudeSchema`](https://samchon.github.io/openapi/api/types/IClaudeSchema-1.html)
 *   - `deepseek`:
 *       [`IDeepSeekSchema`](https://samchon.github.io/openapi/api/types/IClaudeSchema-1.html)
 *   - `gemini`:
 *       [`IGeminiSchema`](https://samchon.github.io/openapi/api/types/IGeminiSchema-1.html)
 *   - `llama`:
 *       [`ILlamaSchema`](https://samchon.github.io/openapi/api/types/ILlamaSchema-1.html)
 * - Middle layer schemas
 *
 *   - `3.0`: [`ILlmSchemaV3`](https://samchon.github.io/openapi/api/types/ILlmSchemaV3-1.html)
 *   - `3.1`: [`ILlmSchemaV3_1`](https://samchon.github.io/openapi/api/types/ILlmSchemaV3_1-1.html)
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Class Target class or interface type collecting the functions to
 *   call
 * @template Model LLM schema model
 * @template Config Configuration of LLM schema composition
 * @param name Identifier name of the controller
 * @param execute Executor instance
 * @param options Options for the LLM application construction
 * @returns Controller of LLM function calling
 * @reference https://wrtnlabs.io/agentica/docs/core/controller/typescript/
 */
export function controller(
  name: string,
  execute: object,
  options?: Partial<
    Pick<ILlmApplication.IOptions<any, any>, "separate" | "validate">
  >,
): never;

/**
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
 *     typia.llm.controller<ReactNativeFileSystem, "chatgpt">(
 *       "filesystem",
 *       new ReactNativeFileSystem(),
 *     ),
 *     typia.llm.controller<ReactNativeGallery, "chatgpt">(
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
 * Here is the list of available `Model` types with their corresponding LLM
 * schema. Reading the following list, and determine the `Model` type
 * considering the characteristics of the target LLM provider.
 *
 * - LLM provider schemas
 *
 *   - `chatgpt`:
 *       [`IChatGptSchema`](https://samchon.github.io/openapi/api/types/IChatGptSchema-1.html)
 *   - `claude`:
 *       [`IClaudeSchema`](https://samchon.github.io/openapi/api/types/IClaudeSchema-1.html)
 *   - `deepseek`:
 *       [`IDeepSeekSchema`](https://samchon.github.io/openapi/api/types/IClaudeSchema-1.html)
 *   - `gemini`:
 *       [`IGeminiSchema`](https://samchon.github.io/openapi/api/types/IGeminiSchema-1.html)
 *   - `llama`:
 *       [`ILlamaSchema`](https://samchon.github.io/openapi/api/types/ILlamaSchema-1.html)
 * - Middle layer schemas
 *
 *   - `3.0`: [`ILlmSchemaV3`](https://samchon.github.io/openapi/api/types/ILlmSchemaV3-1.html)
 *   - `3.1`: [`ILlmSchemaV3_1`](https://samchon.github.io/openapi/api/types/ILlmSchemaV3_1-1.html)
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Class Target class or interface type collecting the functions to
 *   call
 * @template Model LLM schema model
 * @template Config Configuration of LLM schema composition
 * @param name Identifier name of the controller
 * @param execute Executor instance
 * @param options Options for the LLM application construction
 * @returns Controller of LLM function calling
 * @reference https://wrtnlabs.io/agentica/docs/core/controller/typescript/
 */
export function controller<
  Class extends Record<string, any>,
  Model extends ILlmSchema.Model,
  Config extends Partial<
    ILlmSchema.ModelConfig[Model] & {
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
  options?: Partial<
    Pick<ILlmApplication.IOptions<Model, Class>, "separate" | "validate">
  >,
): ILlmController<Model>;

/** @internal */
export function controller(..._args: any[]): never {
  NoTransformConfigurationError("llm.controller");
}

/**
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
 * configuring the {@link ILlmApplication.IOptions.separate} property. The
 * separated parameters are assigned to the {@link ILlmFunction.separated}
 * property.
 *
 * For reference, the actual function call execution is not by LLM, but by you.
 * When the LLM selects the proper function and fills the arguments, you just
 * call the function with the LLM prepared arguments. And then informs the
 * return value to the LLM by system prompt. The LLM will continue the next
 * conversation based on the return value.
 *
 * Additionally, if you've configured {@link ILlmApplication.IOptions.separate},
 * so that the parameters are separated to human and LLM sides, you can merge
 * these human and LLM sides' parameters into one through
 * {@link HttpLlm.mergeParameters} before the actual LLM function call
 * execution.
 *
 * Here is the list of available `Model` types with their corresponding LLM
 * schema. Reading the following list, and determine the `Model` type
 * considering the characteristics of the target LLM provider.
 *
 * - LLM provider schemas
 *
 *   - `chatgpt`:
 *       [`IChatGptSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IChatGptSchema.ts)
 *   - `claude`:
 *       [`IClaudeSchema`](https://samchon.github.io/openapi/api/types/IClaudeSchema-1.html)
 *   - `deepseek`:
 *       [`IDeepSeekSchema`](https://samchon.github.io/openapi/api/types/IClaudeSchema-1.html)
 *   - `gemini`:
 *       [`IGeminiSchema`](https://samchon.github.io/openapi/api/types/IGeminiSchema-1.html)
 *   - `llama`:
 *       [`ILlamaSchema`](https://samchon.github.io/openapi/api/types/ILlamaSchema-1.html)
 * - Middle layer schemas
 *
 *   - `3.0`: [`ILlmSchemaV3`](https://samchon.github.io/openapi/api/types/ILlmSchemaV3-1.html)
 *   - `3.1`: [`ILlmSchemaV3_1`](https://samchon.github.io/openapi/api/types/ILlmSchemaV3_1-1.html)
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Class Target class or interface type collecting the functions to
 *   call
 * @template Model LLM schema model
 * @template Config Configuration of LLM schema composition
 * @param options Options for the LLM application construction
 * @returns Application of LLM function calling schemas
 * @reference https://platform.openai.com/docs/guides/function-calling
 */
export function application(
  options?: Partial<
    Pick<ILlmApplication.IOptions<any, any>, "separate" | "validate">
  >,
): never;

/**
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
 * configuring the {@link ILlmApplication.IOptions.separate} property. The
 * separated parameters are assigned to the {@link ILlmFunction.separated}
 * property.
 *
 * For reference, the actual function call execution is not by LLM, but by you.
 * When the LLM selects the proper function and fills the arguments, you just
 * call the function with the LLM prepared arguments. And then informs the
 * return value to the LLM by system prompt. The LLM will continue the next
 * conversation based on the return value.
 *
 * Additionally, if you've configured {@link ILlmApplication.IOptions.separate},
 * so that the parameters are separated to human and LLM sides, you can merge
 * these human and LLM sides' parameters into one through
 * {@link HttpLlm.mergeParameters} before the actual LLM function call
 * execution.
 *
 * Here is the list of available `Model` types with their corresponding LLM
 * schema. Reading the following list, and determine the `Model` type
 * considering the characteristics of the target LLM provider.
 *
 * - LLM provider schemas
 *
 *   - `chatgpt`:
 *       [`IChatGptSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IChatGptSchema.ts)
 *   - `claude`:
 *       [`IClaudeSchema`](https://samchon.github.io/openapi/api/types/IClaudeSchema-1.html)
 *   - `deepseek`:
 *       [`IDeepSeekSchema`](https://samchon.github.io/openapi/api/types/IClaudeSchema-1.html)
 *   - `gemini`:
 *       [`IGeminiSchema`](https://samchon.github.io/openapi/api/types/IGeminiSchema-1.html)
 *   - `llama`:
 *       [`ILlamaSchema`](https://samchon.github.io/openapi/api/types/ILlamaSchema-1.html)
 * - Middle layer schemas
 *
 *   - `3.0`: [`ILlmSchemaV3`](https://samchon.github.io/openapi/api/types/ILlmSchemaV3-1.html)
 *   - `3.1`: [`ILlmSchemaV3_1`](https://samchon.github.io/openapi/api/types/ILlmSchemaV3_1-1.html)
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Class Target class or interface type collecting the functions to
 *   call
 * @template Model LLM schema model
 * @template Config Configuration of LLM schema composition
 * @param options Options for the LLM application construction
 * @returns Application of LLM function calling schemas
 * @reference https://platform.openai.com/docs/guides/function-calling
 */
export function application<
  Class extends Record<string, any>,
  Model extends ILlmSchema.Model,
  Config extends Partial<
    {
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
    } & ILlmSchema.ModelConfig[Model]
  > = {},
>(
  options?: Partial<
    Pick<ILlmApplication.IOptions<Model, Class>, "separate" | "validate">
  >,
): ILlmApplication<Model, Class>;

/** @internal */
export function application(): never {
  NoTransformConfigurationError("llm.application");
}

/**
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
 * Here is the list of available `Model` types with their corresponding LLM
 * schema. Reading the following list, and determine the `Model` type
 * considering the characteristics of the target LLM provider.
 *
 * - LLM provider schemas
 *
 *   - `chatgpt`:
 *       [`IChatGptSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IChatGptSchema.ts)
 *   - `claude`:
 *       [`IClaudeSchema`](https://samchon.github.io/openapi/api/types/IClaudeSchema-1.html)
 *   - `deepseek`:
 *       [`IDeepSeekSchema`](https://samchon.github.io/openapi/api/types/IClaudeSchema-1.html)
 *   - `gemini`:
 *       [`IGeminiSchema`](https://samchon.github.io/openapi/api/types/IGeminiSchema-1.html)
 *   - `llama`:
 *       [`ILlamaSchema`](https://samchon.github.io/openapi/api/types/ILlamaSchema-1.html)
 * - Middle layer schemas
 *
 *   - `3.0`: [`ILlmSchemaV3`](https://samchon.github.io/openapi/api/types/ILlmSchemaV3-1.html)
 *   - `3.1`: [`ILlmSchemaV3_1`](https://samchon.github.io/openapi/api/types/ILlmSchemaV3_1-1.html)
 *
 * @template Parameters Target parameters type
 * @template Model LLM schema model
 * @template Config Configuration of LLM schema composition
 * @returns LLM parameters schema
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @reference https://platform.openai.com/docs/guides/structured-outputs
 */
export function parameters(): never;

/**
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
 * Here is the list of available `Model` types with their corresponding LLM
 * schema. Reading the following list, and determine the `Model` type
 * considering the characteristics of the target LLM provider.
 *
 * - LLM provider schemas
 *
 *   - `chatgpt`:
 *       [`IChatGptSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IChatGptSchema.ts)
 *   - `claude`:
 *       [`IClaudeSchema`](https://samchon.github.io/openapi/api/types/IClaudeSchema-1.html)
 *   - `deepseek`:
 *       [`IDeepSeekSchema`](https://samchon.github.io/openapi/api/types/IClaudeSchema-1.html)
 *   - `gemini`:
 *       [`IGeminiSchema`](https://samchon.github.io/openapi/api/types/IGeminiSchema-1.html)
 *   - `llama`:
 *       [`ILlamaSchema`](https://samchon.github.io/openapi/api/types/ILlamaSchema-1.html)
 * - Middle layer schemas
 *
 *   - `3.0`: [`ILlmSchemaV3`](https://samchon.github.io/openapi/api/types/ILlmSchemaV3-1.html)
 *   - `3.1`: [`ILlmSchemaV3_1`](https://samchon.github.io/openapi/api/types/ILlmSchemaV3_1-1.html)
 *
 * @template Parameters Target parameters type
 * @template Model LLM schema model
 * @template Config Configuration of LLM schema composition
 * @returns LLM parameters schema
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @reference https://platform.openai.com/docs/guides/structured-outputs
 */
export function parameters<
  Parameters extends Record<string, any>,
  Model extends ILlmSchema.Model,
  Config extends Partial<ILlmSchema.ModelConfig[Model]> = {},
>(): ILlmSchema.ModelParameters[Model];

/** @internal */
export function parameters(): never {
  NoTransformConfigurationError("llm.parameters");
}

/**
 * > You must configure the generic argument `T`.
 *
 * TypeScript type to LLM type schema.
 *
 * Creates an LLM (Large Language Model) type schema, a type metadata that is
 * used in the [LLM function calling](@reference
 * https://platform.openai.com/docs/guides/function-calling), from a TypeScript
 * type.
 *
 * The returned {@link ILlmSchema} type will be specified by the `Model`
 * argument, and here is the list of available `Model` types with their
 * corresponding LLM schema. Reading the following list, and determine the
 * `Model` type considering the characteristics of the target LLM provider.
 *
 * - LLM provider schemas
 *
 *   - `chatgpt`:
 *       [`IChatGptSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IChatGptSchema.ts)
 *   - `claude`:
 *       [`IClaudeSchema`](https://samchon.github.io/openapi/api/types/IClaudeSchema-1.html)
 *   - `deepseek`:
 *       [`IDeepSeekSchema`](https://samchon.github.io/openapi/api/types/IClaudeSchema-1.html)
 *   - `gemini`:
 *       [`IGeminiSchema`](https://samchon.github.io/openapi/api/types/IGeminiSchema-1.html)
 *   - `llama`:
 *       [`ILlamaSchema`](https://samchon.github.io/openapi/api/types/ILlamaSchema-1.html)
 * - Middle layer schemas
 *
 *   - `3.0`: [`ILlmSchemaV3`](https://samchon.github.io/openapi/api/types/ILlmSchemaV3-1.html)
 *   - `3.1`: [`ILlmSchemaV3_1`](https://samchon.github.io/openapi/api/types/ILlmSchemaV3_1-1.html)
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
 * @template Model LLM schema model
 * @template Config Configuration of LLM schema composition
 * @returns LLM schema
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @reference https://platform.openai.com/docs/guides/structured-outputs
 */
export function schema(): never;

/**
 * TypeScript type to LLM type schema.
 *
 * Creates an LLM (Large Language Model) type schema, a type metadata that is
 * used in the [LLM function calling](@reference
 * https://platform.openai.com/docs/guides/function-calling), from a TypeScript
 * type.
 *
 * The returned {@link ILlmSchema} type will be specified by the `Model`
 * argument, and here is the list of available `Model` types with their
 * corresponding LLM schema:
 *
 * - LLM provider schemas
 *
 *   - `chatgpt`:
 *       [`IChatGptSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IChatGptSchema.ts)
 *   - `claude`:
 *       [`IClaudeSchema`](https://samchon.github.io/openapi/api/types/IClaudeSchema-1.html)
 *   - `deepseek`:
 *       [`IDeepSeekSchema`](https://samchon.github.io/openapi/api/types/IClaudeSchema-1.html)
 *   - `gemini`:
 *       [`IGeminiSchema`](https://samchon.github.io/openapi/api/types/IGeminiSchema-1.html)
 *   - `llama`:
 *       [`ILlamaSchema`](https://samchon.github.io/openapi/api/types/ILlamaSchema-1.html)
 * - Middle layer schemas
 *
 *   - `3.0`: [`ILlmSchemaV3`](https://samchon.github.io/openapi/api/types/ILlmSchemaV3-1.html)
 *   - `3.1`: [`ILlmSchemaV3_1`](https://samchon.github.io/openapi/api/types/ILlmSchemaV3_1-1.html)
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
 * @template Model LLM schema model
 * @template Config Configuration of LLM schema composition
 * @returns LLM schema
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @reference https://platform.openai.com/docs/guides/structured-outputs
 */
export function schema<
  T,
  Model extends ILlmSchema.Model,
  Config extends Partial<ILlmSchema.ModelConfig[Model]> = {},
>(
  ...$defs: Extract<
    ILlmSchema.ModelSchema[Model],
    { $ref: string }
  > extends never
    ? []
    : [Record<string, ILlmSchema.ModelSchema[Model]>]
): ILlmSchema.ModelSchema[Model];

/** @internal */
export function schema(): never {
  NoTransformConfigurationError("llm.schema");
}
