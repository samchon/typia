import { ILlmSchema } from "@typia/interface";
import { Schema, jsonSchema } from "ai";
import { JSONSchema7 } from "json-schema";

export namespace VercelParameterConverter {
  export const convert = (parameters: ILlmSchema.IParameters): Schema<object> =>
    jsonSchema<object>(parameters as JSONSchema7);

  export const convertToolOutput = (
    parameters: ILlmSchema.IParameters,
  ): Schema<object> =>
    jsonSchema<object>({
      type: "object",
      anyOf: [
        {
          type: "object",
          properties: {
            success: { type: "boolean", enum: [true] },
            data: {
              type: "object",
              properties: parameters.properties,
              required: parameters.required,
              additionalProperties: false,
            },
          },
          required: ["success", "data"],
          additionalProperties: false,
        },
        {
          type: "object",
          properties: {
            success: { type: "boolean", enum: [false] },
            error: { type: "string" },
          },
          required: ["success", "error"],
          additionalProperties: false,
        },
      ],
      $defs: parameters.$defs,
    } as JSONSchema7);
}
