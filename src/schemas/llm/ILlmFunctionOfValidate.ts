import { ILlmFunction, ILlmSchema } from "@samchon/openapi";

import { IValidation } from "../../IValidation";

/**
 * LLM function metadata with validator.
 *
 * `ILlmFunctionOfValidate` is an interface representing a function metadata,
 * which has been used for the LLM (Language Large Model) function
 * calling. Also, it's a function structure containing the function
 * {@link name}, {@link parameters} and {@link output return type}.
 *
 * If you provide this `ILlmFunctionOfValidate` data to the LLM provider like "OpenAI",
 * the "OpenAI" will compose a function arguments by analyzing conversations
 * with the user. With the LLM composed arguments, you can execute the function
 * and get the result.
 *
 * If the LLM function calling take s a mistake that composing wrong typed
 * {@link parameters}, you can correct the parameters by delivering the return
 * value of the {@link validate} function. The {@link validate} function is a
 * validator function reporting the detailed information about the wrong typed
 * {@link parameters}.
 *
 * By the way, do not ensure that LLM will always provide the correct arguments.
 * The LLM of present age is not perfect, and sometimes takes a mistake that composing
 * wrong typed {@link parameters}. In that case, you can correc the parameters by
 * delivering the return value of the {@link validate} function. The {@link validate}
 * function reports the detailed information about the wrong typed {@link parameters},
 *
 * @reference https://platform.openai.com/docs/guides/function-calling
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface ILlmFunctionOfValidate<Model extends ILlmSchema.Model>
  extends ILlmFunction<Model> {
  validate(props: object): IValidation<unknown>;
}
export namespace ILlmFunctionOfValidate {
  export import ISeparated = ILlmFunction.ISeparated;
}
