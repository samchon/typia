import { ILlmApplication, ILlmSchema } from "@samchon/openapi";

import { ILlmFunctionOfValidate } from "./ILlmFunctionOfValidate";

/**
 * Application of LLM function calling with validators.
 *
 * `ILlmApplication` is a data structure representing a collection of
 * {@link ILlmFunctionOfValidate LLM function calling schemas}, composed from a native
 * TypeScript class (or interface) type by the `typia.llm.applicationOfValidate<App, Model>()`
 * function.
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
 * composed by Human, not by LLM. File uploading feature or some sensitive information
 * like secret keys (password) are the examples. In that case, you can separate the
 * function parameters to both LLM and human sides by configuring the
 * {@link ILlmApplication.IOptions.separate} property. The separated parameters are
 * assigned to the {@link ILlmFunction.separated} property.
 *
 * For reference, when both LLM and Human filled parameter values to call, you can
 * merge them by calling the {@link HttpLlm.mergeParameters} function. In other words,
 * if you've configured the {@link ILlmApplication.IOptions.separate} property, you
 * have to merge the separated parameters before the function call execution.
 *
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface ILlmApplicationOfValidate<Model extends ILlmSchema.Model>
  extends ILlmApplication<Model> {
  /**
   * List of function metadata.
   *
   * List of function metadata that can be used for the LLM function call.
   *
   * Also, every functions have their own parameters validator
   * {@link ILlmFunctionOfValidate.validate}. If the LLM function calling composes wrong
   * typed parameters, then deliver return value of it, then LLM will correct parameters
   * at the next conversation.
   */
  functions: ILlmFunctionOfValidate<Model>[];
}
export namespace ILlmApplicationOfValidate {
  export import IOptions = ILlmApplication.IOptions;
}
