import { ILlmSchema } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const _coerceLlmArguments = <T>(
  value: unknown,
  parameters: ILlmSchema.IParameters,
): T => LlmJson.coerce(value, parameters);
