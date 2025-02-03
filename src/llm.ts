import { ILlmApplication, ILlmSchema } from "@samchon/openapi";

import { ILlmApplicationOfValidate } from "./module";

/**
 * > You must configure the generic argument `App`.
 *
 * TypeScript functions to LLM function calling application with validators.
 *
 * Creates an application of LLM (Large Language Model) function calling application
 * from a TypeScript class or interface type containing the target functions to be
 * called by the LLM function calling feature.
 *
 * If you put the returned {@link ILlmApplicationOfValidate.functions} objects to the
 * LLM provider like [OpenAI (ChatGPT)](https://openai.com/), the LLM will automatically
 * select the proper function and fill its arguments from the conversation
 * (maybe chatting text) with user (human). This is the concept of the LLM function calling.
 *
 * Additionally, the LLM function calling sometimes take a mistake that composing wrong typed
 * {@link ILlmFunctionOfValidate.parameters}. In that case, deliver return value of the
 * {@link ILlmFunctionOfValidate.validate} function, then LLM provider will correct the
 * parameters at the next conversation. The {@link ILlmFunctionOfValidate.validate} function
 * is a validator function reporting the detailed information about the wrong typed parameters.
 *
 * By the way, there can be some parameters (or their nested properties) which must be
 * composed by human, not by LLM. File uploading feature or some sensitive information
 * like security keys (password) are the examples. In that case, you can separate the
 * function parameters to both LLM and human sides by configuring the
 * {@link ILlmApplicationOfValidate.IOptions.separate} property. The separated parameters
 * are assigned to the {@link ILlmFunctionOfValidate.separated} property.
 *
 * For reference, the actual function call execution is not by LLM, but by you.
 * When the LLM selects the proper function and fills the arguments, you just call
 * the function with the LLM prepared arguments. And then informs the return value to
 * the LLM by system prompt. The LLM will continue the next conversation based on
 * the return value.
 *
 * Additionally, if you've configured {@link ILlmApplicationOfValidate.IOptions.separate},
 * so that the parameters are separated to human and LLM sides, you can merge these
 * humand and LLM sides' parameters into one through {@link HttpLlm.mergeParameters}
 * before the actual LLM function call execution.
 *
 * Here is the list of available `Model` types with their corresponding LLM schema.
 * Reading the following list, and determine the `Model` type considering the
 * characteristics of the target LLM provider.
 *
 * - LLM provider schemas
 *   - `chatgpt`: [`IChatGptSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IChatGptSchema.ts)
 *   - `claude`: [`IClaudeSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IClaudeSchema.ts)
 *   - `gemini`: [`IGeminiSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IGeminiSchema.ts)
 *   - `llama`: [`ILlamaSchema`](https://github.com/samchon/openapi/blob/master/src/structures/ILlamaSchema.ts)
 * - Midldle layer schemas
 *   - `3.0`: [`ILlmSchemaV3`](https://github.com/samchon/openapi/blob/master/src/structures/ILlmSchemaV3.ts)
 *   - `3.1`: [`ILlmSchemaV3_1`](https://github.com/samchon/openapi/blob/master/src/structures/ILlmSchemaV3_1.ts)
 *
 * @template App Target class or interface type collecting the functions to call
 * @template Model LLM schema model
 * @template Config Configuration of LLM schema composition
 * @param options Options for the LLM application construction
 * @returns Application of LLM function calling schemas
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @author Jeongho Nam - https://github.com/samchon
 */
export function applicationOfValidate(
  options?: Partial<Pick<ILlmApplicationOfValidate.IOptions<any>, "separate">>,
): never;

/**
 * TypeScript functions to LLM function calling application with validators.
 *
 * Creates an application of LLM (Large Language Model) function calling application
 * from a TypeScript class or interface type containing the target functions to be
 * called by the LLM function calling feature.
 *
 * If you put the returned {@link ILlmApplicationOfValidate.functions} objects to the
 * LLM provider like [OpenAI (ChatGPT)](https://openai.com/), the LLM will automatically
 * select the proper function and fill its arguments from the conversation
 * (maybe chatting text) with user (human). This is the concept of the LLM function calling.
 *
 * Additionally, the LLM function calling sometimes take a mistake that composing wrong typed
 * {@link ILlmFunctionOfValidate.parameters}. In that case, deliver return value of the
 * {@link ILlmFunctionOfValidate.validate} function, then LLM provider will correct the
 * parameters at the next conversation. The {@link ILlmFunctionOfValidate.validate} function
 * is a validator function reporting the detailed information about the wrong typed parameters.
 *
 * By the way, there can be some parameters (or their nested properties) which must be
 * composed by human, not by LLM. File uploading feature or some sensitive information
 * like security keys (password) are the examples. In that case, you can separate the
 * function parameters to both LLM and human sides by configuring the
 * {@link ILlmApplicationOfValidate.IOptions.separate} property. The separated parameters
 * are assigned to the {@link ILlmFunctionOfValidate.separated} property.
 *
 * For reference, the actual function call execution is not by LLM, but by you.
 * When the LLM selects the proper function and fills the arguments, you just call
 * the function with the LLM prepared arguments. And then informs the return value to
 * the LLM by system prompt. The LLM will continue the next conversation based on
 * the return value.
 *
 * Additionally, if you've configured {@link ILlmApplicationOfValidate.IOptions.separate},
 * so that the parameters are separated to human and LLM sides, you can merge these
 * humand and LLM sides' parameters into one through {@link HttpLlm.mergeParameters}
 * before the actual LLM function call execution.
 *
 * Here is the list of available `Model` types with their corresponding LLM schema.
 * Reading the following list, and determine the `Model` type considering the
 * characteristics of the target LLM provider.
 *
 * - LLM provider schemas
 *   - `chatgpt`: [`IChatGptSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IChatGptSchema.ts)
 *   - `claude`: [`IClaudeSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IClaudeSchema.ts)
 *   - `gemini`: [`IGeminiSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IGeminiSchema.ts)
 *   - `llama`: [`ILlamaSchema`](https://github.com/samchon/openapi/blob/master/src/structures/ILlamaSchema.ts)
 * - Midldle layer schemas
 *   - `3.0`: [`ILlmSchemaV3`](https://github.com/samchon/openapi/blob/master/src/structures/ILlmSchemaV3.ts)
 *   - `3.1`: [`ILlmSchemaV3_1`](https://github.com/samchon/openapi/blob/master/src/structures/ILlmSchemaV3_1.ts)
 *
 * @template App Target class or interface type collecting the functions to call
 * @template Model LLM schema model
 * @template Config Configuration of LLM schema composition
 * @param options Options for the LLM application construction
 * @returns Application of LLM function calling schemas
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @author Jeongho Nam - https://github.com/samchon
 */
export function applicationOfValidate<
  App extends Record<string, any>,
  Model extends ILlmSchema.Model,
  Config extends Partial<ILlmSchema.ModelConfig[Model]> = {},
>(
  options?: Partial<
    Pick<ILlmApplicationOfValidate.IOptions<Model>, "separate">
  >,
): ILlmApplicationOfValidate<Model>;

/**
 * @internal
 */
export function applicationOfValidate(): never {
  halt("applicationOfValidate");
}

/**
 * > You must configure the generic argument `App`.
 *
 * TypeScript functions to LLM function calling application.
 *
 * Creates an application of LLM (Large Language Model) function calling application
 * from a TypeScript class or interface type containing the target functions to be
 * called by the LLM function calling feature.
 *
 * If you put the returned {@link ILlmApplication.functions} objects to the LLM provider
 * like [OpenAI (ChatGPT)](https://openai.com/), the LLM will automatically select the
 * proper function and fill its arguments from the conversation (maybe chatting text)
 * with user (human). This is the concept of the LLM function calling.
 *
 * By the way, there can be some parameters (or their nested properties) which must be
 * composed by human, not by LLM. File uploading feature or some sensitive information
 * like security keys (password) are the examples. In that case, you can separate the
 * function parameters to both LLM and human sides by configuring the
 * {@link ILlmApplication.IOptions.separate} property. The separated parameters are
 * assigned to the {@link ILlmFunction.separated} property.
 *
 * For reference, the actual function call execution is not by LLM, but by you.
 * When the LLM selects the proper function and fills the arguments, you just call
 * the function with the LLM prepared arguments. And then informs the return value to
 * the LLM by system prompt. The LLM will continue the next conversation based on
 * the return value.
 *
 * Additionally, if you've configured {@link ILlmApplication.IOptions.separate},
 * so that the parameters are separated to human and LLM sides, you can merge these
 * humand and LLM sides' parameters into one through {@link HttpLlm.mergeParameters}
 * before the actual LLM function call execution.
 *
 * Here is the list of available `Model` types with their corresponding LLM schema.
 * Reading the following list, and determine the `Model` type considering the
 * characteristics of the target LLM provider.
 *
 * - LLM provider schemas
 *   - `chatgpt`: [`IChatGptSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IChatGptSchema.ts)
 *   - `claude`: [`IClaudeSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IClaudeSchema.ts)
 *   - `gemini`: [`IGeminiSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IGeminiSchema.ts)
 *   - `llama`: [`ILlamaSchema`](https://github.com/samchon/openapi/blob/master/src/structures/ILlamaSchema.ts)
 * - Midldle layer schemas
 *   - `3.0`: [`ILlmSchemaV3`](https://github.com/samchon/openapi/blob/master/src/structures/ILlmSchemaV3.ts)
 *   - `3.1`: [`ILlmSchemaV3_1`](https://github.com/samchon/openapi/blob/master/src/structures/ILlmSchemaV3_1.ts)
 *
 * @template App Target class or interface type collecting the functions to call
 * @template Model LLM schema model
 * @template Config Configuration of LLM schema composition
 * @param options Options for the LLM application construction
 * @returns Application of LLM function calling schemas
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @author Jeongho Nam - https://github.com/samchon
 */
export function application(
  options?: Partial<Pick<ILlmApplication.IOptions<any>, "separate">>,
): never;

/**
 * TypeScript functions to LLM function calling application.
 *
 * Creates an application of LLM (Large Language Model) function calling application
 * from a TypeScript class or interface type containing the target functions to be
 * called by the LLM function calling feature.
 *
 * If you put the returned {@link ILlmApplication.functions} objects to the LLM provider
 * like [OpenAI (ChatGPT)](https://openai.com/), the LLM will automatically select the
 * proper function and fill its arguments from the conversation (maybe chatting text)
 * with user (human). This is the concept of the LLM function calling.
 *
 * By the way, there can be some parameters (or their nested properties) which must be
 * composed by human, not by LLM. File uploading feature or some sensitive information
 * like security keys (password) are the examples. In that case, you can separate the
 * function parameters to both LLM and human sides by configuring the
 * {@link ILlmApplication.IOptions.separate} property. The separated parameters are
 * assigned to the {@link ILlmFunction.separated} property.
 *
 * For reference, the actual function call execution is not by LLM, but by you.
 * When the LLM selects the proper function and fills the arguments, you just call
 * the function with the LLM prepared arguments. And then informs the return value to
 * the LLM by system prompt. The LLM will continue the next conversation based on
 * the return value.
 *
 * Additionally, if you've configured {@link ILlmApplication.IOptions.separate},
 * so that the parameters are separated to human and LLM sides, you can merge these
 * humand and LLM sides' parameters into one through {@link HttpLlm.mergeParameters}
 * before the actual LLM function call execution.
 *
 * Here is the list of available `Model` types with their corresponding LLM schema.
 * Reading the following list, and determine the `Model` type considering the
 * characteristics of the target LLM provider.
 *
 * - LLM provider schemas
 *   - `chatgpt`: [`IChatGptSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IChatGptSchema.ts)
 *   - `claude`: [`IClaudeSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IClaudeSchema.ts)
 *   - `gemini`: [`IGeminiSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IGeminiSchema.ts)
 *   - `llama`: [`ILlamaSchema`](https://github.com/samchon/openapi/blob/master/src/structures/ILlamaSchema.ts)
 * - Midldle layer schemas
 *   - `3.0`: [`ILlmSchemaV3`](https://github.com/samchon/openapi/blob/master/src/structures/ILlmSchemaV3.ts)
 *   - `3.1`: [`ILlmSchemaV3_1`](https://github.com/samchon/openapi/blob/master/src/structures/ILlmSchemaV3_1.ts)
 *
 * @template App Target class or interface type collecting the functions to call
 * @template Model LLM schema model
 * @template Config Configuration of LLM schema composition
 * @param options Options for the LLM application construction
 * @returns Application of LLM function calling schemas
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @author Jeongho Nam - https://github.com/samchon
 */
export function application<
  App extends Record<string, any>,
  Model extends ILlmSchema.Model,
  Config extends Partial<ILlmSchema.ModelConfig[Model]> = {},
>(
  options?: Partial<Pick<ILlmApplication.IOptions<Model>, "separate">>,
): ILlmApplication<Model>;

/**
 * @internal
 */
export function application(): never {
  halt("application");
}

/**
 * > You must configure the generic argument `Parameters`.
 *
 * TypeScript parameters to LLM parameters schema.
 *
 * Creates an LLM (Large Language Model) parameters schema, a type metadata that is used in the
 * [LLM function calling](https://platform.openai.com/docs/guides/function-calling)
 * and [LLM structured outputs](https://platform.openai.com/docs/guides/structured-outputs),
 * from a TypeScript parameters type.
 *
 * For references, LLM identifies only keyworded arguments, not positional arguments.
 * Therefore, the TypeScript parameters type must be an object type, and its properties
 * must be static. If dynamic properties are, it would be compilation error.
 *
 * Also, such parameters type can be utilized not only for the LLM function calling,
 * but also for the LLM structured outputs. The LLM structured outputs is a feature
 * that LLM (Large Language Model) can generate a structured output, not only a plain
 * text, by filling the parameters from the conversation (maybe chatting text) with user
 * (human).
 *
 * Here is the list of available `Model` types with their corresponding LLM schema.
 * Reading the following list, and determine the `Model` type considering the
 * characteristics of the target LLM provider.
 *
 * - LLM provider schemas
 *   - `chatgpt`: [`IChatGptSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IChatGptSchema.ts)
 *   - `claude`: [`IClaudeSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IClaudeSchema.ts)
 *   - `gemini`: [`IGeminiSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IGeminiSchema.ts)
 *   - `llama`: [`ILlamaSchema`](https://github.com/samchon/openapi/blob/master/src/structures/ILlamaSchema.ts)
 * - Midldle layer schemas
 *   - `3.0`: [`ILlmSchemaV3`](https://github.com/samchon/openapi/blob/master/src/structures/ILlmSchemaV3.ts)
 *   - `3.1`: [`ILlmSchemaV3_1`](https://github.com/samchon/openapi/blob/master/src/structures/ILlmSchemaV3_1.ts)
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
 * Creates an LLM (Large Language Model) parameters schema, a type metadata that is used in the
 * [LLM function calling](https://platform.openai.com/docs/guides/function-calling)
 * and [LLM structured outputs](https://platform.openai.com/docs/guides/structured-outputs),
 * from a TypeScript parameters type.
 *
 * For references, LLM identifies only keyworded arguments, not positional arguments.
 * Therefore, the TypeScript parameters type must be an object type, and its properties
 * must be static. If dynamic properties are, it would be compilation error.
 *
 * Also, such parameters type can be utilized not only for the LLM function calling,
 * but also for the LLM structured outputs. The LLM structured outputs is a feature
 * that LLM (Large Language Model) can generate a structured output, not only a plain
 * text, by filling the parameters from the conversation (maybe chatting text) with user
 * (human).
 *
 * Here is the list of available `Model` types with their corresponding LLM schema.
 * Reading the following list, and determine the `Model` type considering the
 * characteristics of the target LLM provider.
 *
 * - LLM provider schemas
 *   - `chatgpt`: [`IChatGptSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IChatGptSchema.ts)
 *   - `claude`: [`IClaudeSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IClaudeSchema.ts)
 *   - `gemini`: [`IGeminiSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IGeminiSchema.ts)
 *   - `llama`: [`ILlamaSchema`](https://github.com/samchon/openapi/blob/master/src/structures/ILlamaSchema.ts)
 * - Midldle layer schemas
 *   - `3.0`: [`ILlmSchemaV3`](https://github.com/samchon/openapi/blob/master/src/structures/ILlmSchemaV3.ts)
 *   - `3.1`: [`ILlmSchemaV3_1`](https://github.com/samchon/openapi/blob/master/src/structures/ILlmSchemaV3_1.ts)
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

/**
 * @internal
 */
export function parameters(): never {
  halt("parameters");
}

/**
 * > You must configure the generic argument `T`.
 *
 * TypeScript type to LLM type schema.
 *
 * Creates an LLM (Large Language Model) type schema, a type metadata that is used in the
 * [LLM function calling](@reference https://platform.openai.com/docs/guides/function-calling),
 * from a TypeScript type.
 *
 * The returned {@link ILlmSchema} type would be specified by the `Model` argument,
 * and here is the list of available `Model` types with their corresponding LLM schema.
 * Reading the following list, and determine the `Model` type considering the
 * characteristics of the target LLM provider.
 *
 * - LLM provider schemas
 *   - `chatgpt`: [`IChatGptSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IChatGptSchema.ts)
 *   - `claude`: [`IClaudeSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IClaudeSchema.ts)
 *   - `gemini`: [`IGeminiSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IGeminiSchema.ts)
 *   - `llama`: [`ILlamaSchema`](https://github.com/samchon/openapi/blob/master/src/structures/ILlamaSchema.ts)
 * - Midldle layer schemas
 *   - `3.0`: [`ILlmSchemaV3`](https://github.com/samchon/openapi/blob/master/src/structures/ILlmSchemaV3.ts)
 *   - `3.1`: [`ILlmSchemaV3_1`](https://github.com/samchon/openapi/blob/master/src/structures/ILlmSchemaV3_1.ts)
 *
 * If you actually want to perform the LLM function calling with TypeScript functions,
 * you can do it with the {@link application} function. Otherwise you hope to perform the
 * structured output, {@link parameters} function is better. Let's enjoy the LLM function calling
 * and structured output with the native TypeScript functions and types.
 *
 * > **What LLM function calling is?
 * >
 * > LLM (Large Language Model) selects property function and fill the arguments,
 * > but actual function call execution is not by LLM, but by you.
 * >
 * > In nowadays, most LLM (Large Language Model) like OpenAI are supporting
 * > "function calling" feature. The "function calling" means that LLM automatically selects
 * > a proper function and compose parameter values from the user's chatting text.
 * >
 * > When LLM selects the proper function and its arguments, you just call the function
 * > with the arguments. And then informs the return value to the LLM by system prompt,
 * > LLM will continue the next conversation based on the return value.
 *
 * @template T Target type
 * @template Model LLM schema model
 * @template Config Configuration of LLM schema composition
 * @returns LLM schema
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @reference https://platform.openai.com/docs/guides/structured-outputs
 * @author Jeongho Nam - https://github.com/samchon
 */
export function schema(): never;

/**
 * TypeScript type to LLM type schema.
 *
 * Creates an LLM (Large Language Model) type schema, a type metadata that is used in the
 * [LLM function calling](@reference https://platform.openai.com/docs/guides/function-calling),
 * from a TypeScript type.
 *
 * The returned {@link ILlmSchema} type would be specified by the `Model` argument,
 * and here is the list of available `Model` types with their corresponding LLM schema:
 *
 * - LLM provider schemas
 *   - `chatgpt`: [`IChatGptSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IChatGptSchema.ts)
 *   - `claude`: [`IClaudeSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IClaudeSchema.ts)
 *   - `gemini`: [`IGeminiSchema`](https://github.com/samchon/openapi/blob/master/src/structures/IGeminiSchema.ts)
 *   - `llama`: [`ILlamaSchema`](https://github.com/samchon/openapi/blob/master/src/structures/ILlamaSchema.ts)
 * - Midldle layer schemas
 *   - `3.0`: [`ILlmSchemaV3`](https://github.com/samchon/openapi/blob/master/src/structures/ILlmSchemaV3.ts)
 *   - `3.1`: [`ILlmSchemaV3_1`](https://github.com/samchon/openapi/blob/master/src/structures/ILlmSchemaV3_1.ts)
 *
 * If you actually want to perform the LLM function calling with TypeScript functions,
 * you can do it with the {@link application} function. Otherwise you hope to perform the
 * structured output, {@link parameters} function is better. Let's enjoy the LLM function calling
 * and structured output with the native TypeScript functions and types.
 *
 * > **What LLM function calling is?
 * >
 * > LLM (Large Language Model) selects property function and fill the arguments,
 * > but actual function call execution is not by LLM, but by you.
 * >
 * > In nowadays, most LLM (Large Language Model) like OpenAI are supporting
 * > "function calling" feature. The "function calling" means that LLM automatically selects
 * > a proper function and compose parameter values from the user's chatting text.
 * >
 * > When LLM selects the proper function and its arguments, you just call the function
 * > with the arguments. And then informs the return value to the LLM by system prompt,
 * > LLM will continue the next conversation based on the return value.
 *
 * @template T Target type
 * @template Model LLM schema model
 * @template Config Configuration of LLM schema composition
 * @returns LLM schema
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @reference https://platform.openai.com/docs/guides/structured-outputs
 * @author Jeongho Nam - https://github.com/samchon
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

/**
 * @internal
 */
export function schema(): never {
  halt("schema");
}

/**
 * @internal
 */
function halt(name: string): never {
  throw new Error(
    `Error on typia.llm.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
  );
}
