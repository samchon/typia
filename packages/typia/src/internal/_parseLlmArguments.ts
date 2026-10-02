import { IJsonParseResult, ILlmSchema } from "@typia/interface";
import { LlmJson } from "@typia/utils";

/**
 * Parse LLM output as JSON leniently and coerce it to the parameters schema.
 *
 * Schema coercion runs only after successful parsing. Failure diagnostics and
 * partial data pass through unchanged. The result is not validated; the type
 * argument is the caller's assertion.
 *
 * @evidence contracts/common.md#principled-implementation The function delegates to the utilities' lenient JSON parser, which recovers incomplete or malformed model output and coerces double-stringified values to the types that the parameters schema declares, and types the result as the caller's `T` without validating it.
 * @evidence contracts/common.md#clear-and-simple-design A one-line adapter so the emitted code depends on one internal name and the utility package remains the owner of the parser.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts There is no second parser to drift from the utility's.
 * @evidence contracts/common.md#meaningful-documentation The doc states lenient parsing, success-only coercion, unchanged failure diagnostics and that the type argument is the caller's unchecked assertion.
 */
export const _parseLlmArguments = <T>(
  input: string,
  parameters: ILlmSchema.IParameters,
): IJsonParseResult<T> => LlmJson.parse(input, parameters);
