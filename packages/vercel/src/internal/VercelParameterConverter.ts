import { ILlmSchema } from "@typia/interface";
import { Schema, jsonSchema } from "ai";
import { JSONSchema7 } from "json-schema";

export namespace VercelParameterConverter {
  export const convert = (parameters: ILlmSchema.IParameters): Schema<object> =>
    jsonSchema<object>(parameters as JSONSchema7);
}
