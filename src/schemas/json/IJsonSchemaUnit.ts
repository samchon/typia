import { OpenApi, OpenApiV3 } from "@samchon/openapi";

/**
 * Unit of JSON schema.
 *
 * `IJsonSchemaUnit` is a type that represents a single JSON schema unit
 * containing the schema and components.
 *
 * @template Version Version of the OpenAPI specification
 * @template Type Original TypeScript type used in the JSON schema
 * @author Jeongho Nam - https://github.com/samchon
 */
export type IJsonSchemaUnit<
  Version extends "3.0" | "3.1" = "3.1",
  Type = unknown,
> = Version extends "3.0"
  ? IJsonSchemaUnit.IV3_0<Type>
  : IJsonSchemaUnit.IV3_1<Type>;
export namespace IJsonSchemaUnit {
  export interface IV3_0<Type> {
    version: "3.0";
    schema: OpenApiV3.IJsonSchema;
    components: OpenApiV3.IComponents;
    __type?: Type | undefined;
  }
  export interface IV3_1<Type> {
    version: "3.1";
    schema: OpenApi.IJsonSchema;
    components: OpenApi.IComponents;
    __type?: Type | undefined;
  }
}
