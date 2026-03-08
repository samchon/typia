import { ILlmSchema } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const _coerceLlmArguments = <T>(
  parameters: ILlmSchema.IParameters,
  value: unknown,
): T => LlmJson.coerce(parameters, value);
