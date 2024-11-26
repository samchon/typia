import type { OpenApi, OpenApiV3 } from "@samchon/openapi";

/**
 * Collection of JSON schemas.
 *
 * @template Version Version of the OpenAPI specification.
 * @template Types Original TypeScript types used in the JSON schemas.
 * @author Jeongho Nam - https://github.com/samchon
 */
export type IJsonSchemaCollection<
  Version extends "3.0" | "3.1" = "3.1",
  Types = unknown[],
> = Version extends "3.0"
  ? IJsonSchemaCollection.IV3_0<Types>
  : IJsonSchemaCollection.IV3_1<Types>;
export namespace IJsonSchemaCollection {
  export interface IV3_0<Types = unknown[]> {
    version: "3.0";
    schemas: OpenApiV3.IJsonSchema[];
    components: OpenApiV3.IComponents;
    __types?: Types | undefined;
  }
  export interface IV3_1<Types = unknown[]> {
    version: "3.1";
    components: OpenApi.IComponents;
    schemas: OpenApi.IJsonSchema[];
    __types?: Types | undefined;
  }
}
