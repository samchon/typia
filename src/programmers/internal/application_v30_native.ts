import { OpenApiV3 } from "@samchon/openapi";

/**
 * @internal
 */
export const application_v30_native =
  (components: OpenApiV3.IComponents) =>
  (name: string) =>
  (nullable: boolean): OpenApiV3.IJsonSchema => {
    if (name === "Blob" || name === "File")
      return {
        type: "string",
        format: "binary",
        nullable,
      };
    const key: string = `${name}${nullable ? ".Nullable" : ""}`;
    if (components.schemas?.[key] === undefined) {
      components.schemas ??= {};
      components.schemas[key] ??= {
        type: "object",
        properties: {},
        nullable,
      };
    }
    return {
      $ref: `#/components/schemas/${key}`,
    };
  };
