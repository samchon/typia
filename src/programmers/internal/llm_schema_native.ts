import { ILlmSchema } from "@samchon/openapi";

/**
 * @internal
 */
export const llm_schema_native = (
  name: string,
): ILlmSchema.IString | ILlmSchema.IObject =>
  name === "Blob" || name === "File"
    ? {
        type: "string",
        format: "binary",
      }
    : {
        type: "object",
        properties: {},
      };
