import { ILlmApplication, ILlmSchema } from "@samchon/openapi";

import * as Namespace from "./functional/Namespace";

/**
 * > You must configure the generic argument `App`.
 *
 * TypeScript functions to LLM function calling application.
 *
 * Creates an application of LLM (Large Language Model) function calling application
 * from a TypeScript class or interface type containig the target functions to be
 * called by the LLM function calling feature.
 *
 * If you put the returned {@link ILlmApplication.functions} objects to the LLM provider
 * like [OpenAI (ChatGPT)](https://openai.com/), the LLM will automatically select the
 * proper function and fill its arguments from the conversation (maybe chatting text)
 * with user (human). This is the concept of the LLM function calling.
 *
 * By the way, there can be some parameters (or their nested properties) which must be
 * composed by human, not by LLM. File uploading feature or some sensitive information
 * like secrety key (password) are the examples. In that case, you can separate the
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
 * @template App Target class or interface type collecting the functions to call
 * @param options Options for the LLM application construction
 * @returns Application of LLM function calling schemas
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @author Jeongho Nam - https://github.com/samchon
 */
function application(options?: ILlmApplication.IOptions): never;

/**
 * TypeScript functions to LLM function calling application.
 *
 * Creates an application of LLM (Large Language Model) function calling application
 * from a TypeScript class or interface type containig the target functions to be
 * called by the LLM function calling feature.
 *
 * If you put the returned {@link ILlmApplication.functions} objects to the LLM provider
 * like [OpenAI (ChatGPT)](https://openai.com/), the LLM will automatically select the
 * proper function and fill its arguments from the conversation (maybe chatting text)
 * with user (human). This is the concept of the LLM function calling.
 *
 * By the way, there can be some parameters (or their nested properties) which must be
 * composed by human, not by LLM. File uploading feature or some sensitive information
 * like secrety key (password) are the examples. In that case, you can separate the
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
 * @template App Target class or interface type collecting the functions to call
 * @param options Options for the LLM application construction
 * @returns Application of LLM function calling schemas
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @author Jeongho Nam - https://github.com/samchon
 */
function application<App extends object>(
  options?: ILlmApplication.IOptions,
): ILlmApplication;

/**
 * @internal
 */
function application(): never {
  halt("application");
}

const applicationPure = /** @__PURE__ */ Object.assign<typeof application, {}>(
  application,
  /** @__PURE__ */ Namespace.llm.application(),
);
export { applicationPure as application };

/**
 * > You must configure the generic argument `T`.
 *
 * TypeScript type to LLM type schema.
 *
 * Creates an LLM (Large Language Model) type schema, a type metadata that is used in the
 * [LLM function calling](@reference https://platform.openai.com/docs/guides/function-calling),
 * from a TypeScript type.
 *
 * The returned {@link ILlmSchema} type is similar to the OpenAPI v3.0 based JSON schema
 * definition, but it is more simplified for the LLM function calling by remmoving the
 * {@link OpenApiV3.IJson.IReference reference} type embodied by the
 * {@link OpenApiV3.IJson.IReference.$ref `$ref`} proeprty.
 *
 * If you actually want to perform the LLM function calling with TypeScript functions,
 * you can do it with the {@link application} function. Let's enjoy the
 * LLM function calling with native TypeScript functions and types.
 *
 * > **What LLM function calling is?
 * >
 * > LLM (Large Language Model) selects propert function and fill the arguments,
 * > but actuall function call execution is not by LLM, but by you.
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
 * @returns LLM schema
 * @reference https://platform.openai.com/docs/guides/function-calling
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
 * The returned {@link ILlmSchema} type is similar to the OpenAPI v3.0 based JSON schema
 * definition, but it is more simplified for the LLM function calling by remmoving the
 * {@link OpenApiV3.IJson.IReference reference} type embodied by the
 * {@link OpenApiV3.IJson.IReference.$ref `$ref`} proeprty.
 *
 * If you actually want to perform the LLM function calling with TypeScript functions,
 * you can do it with the {@link application} function. Let's enjoy the
 * LLM function calling with native TypeScript functions and types.
 *
 * > **What LLM function calling is?
 * >
 * > LLM (Large Language Model) selects propert function and fill the arguments,
 * > but actuall function call execution is not by LLM, but by you.
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
 * @returns LLM schema
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @author Jeongho Nam - https://github.com/samchon
 */
export function schema<T>(): ILlmSchema;

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
