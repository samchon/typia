import { OpenApi } from "@samchon/openapi";

/**
 * @internal
 */
export const application_v31_native =
  (components: OpenApi.IComponents) =>
  (name: string): OpenApi.IJsonSchema => {
    if (name === "Blob" || name === "File")
      return {
        type: "string",
        format: "binary",
      };
    if (components.schemas?.[name] === undefined) {
      components.schemas ??= {};
      components.schemas[name] ??= {
        type: "object",
        properties: {},
      };
    }
    return {
      $ref: `#/components/schemas/${name}`,
    };
  };
