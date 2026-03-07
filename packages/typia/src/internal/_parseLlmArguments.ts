import { IJsonParseResult, ILlmSchema } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const _parseLlmArguments = <T>(
  input: string,
  parameters: ILlmSchema.IParameters,
): IJsonParseResult<T> => LlmJson.parse(input, parameters);
