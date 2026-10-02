import { ILlmSchema } from "@typia/interface";
import { LlmJson } from "@typia/utils";

/**
 * Coerce already parsed LLM arguments to the types of the parameters schema.
 *
 * The result is not validated; the type argument is the caller's assertion.
 *
 * @evidence contracts/common.md#principled-implementation The function delegates to the utilities' schema-directed coercion, which converts double-stringified values to the types that the parameters schema declares, and casts the result to the caller's type because coercion does not validate it.
 * @evidence contracts/common.md#clear-and-simple-design A one-line adapter so the emitted code depends on one internal name and the utility package remains the owner of the algorithm.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts There is no second coercion implementation to drift from the utility's.
 * @evidence contracts/common.md#meaningful-documentation The doc states that no validation is performed and that the type argument is the caller's assertion.
 */
export const _coerceLlmArguments = <T>(
  value: unknown,
  parameters: ILlmSchema.IParameters,
): T => LlmJson.coerce(value, parameters);
