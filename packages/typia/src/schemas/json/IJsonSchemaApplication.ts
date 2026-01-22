import { OpenApi, OpenApiV3 } from "@samchon/openapi";

export interface IJsonSchemaApplication<
  Version extends "3.0" | "3.1" = "3.1",
  App extends any = object,
> {
  version: Version;
  components: IJsonSchemaApplication.IComponents<
    IJsonSchemaApplication.Schema<Version>
  >;
  functions: IJsonSchemaApplication.IFunction<
    IJsonSchemaApplication.Schema<Version>
  >[];
  __application?: App | undefined;
}
export namespace IJsonSchemaApplication {
  export type Schema<Version extends "3.0" | "3.1"> = Version extends "3.1"
    ? OpenApi.IJsonSchema
    : OpenApiV3.IJsonSchema;

  export interface IComponents<
    Schema extends
      | OpenApi.IJsonSchema
      | OpenApiV3.IJsonSchema = OpenApi.IJsonSchema,
  > {
    schemas?: Record<string, Schema>;
  }

  export interface IFunction<
    Schema extends
      | OpenApi.IJsonSchema
      | OpenApiV3.IJsonSchema = OpenApi.IJsonSchema,
  > {
    async: boolean;
    name: string;
    parameters: IParameter<Schema>[];
    output: IOutput<Schema> | undefined;
    summary?: string | undefined;
    description?: string | undefined;
    deprecated?: boolean;
    tags?: string[];
  }

  export interface IParameter<
    Schema extends
      | OpenApi.IJsonSchema
      | OpenApiV3.IJsonSchema = OpenApi.IJsonSchema,
  > {
    name: string;
    required: boolean;
    schema: Schema;
    title?: string | undefined;
    description?: string | undefined;
  }

  export interface IOutput<
    Schema extends
      | OpenApi.IJsonSchema
      | OpenApiV3.IJsonSchema = OpenApi.IJsonSchema,
  > {
    schema: Schema;
    required: boolean;
    description?: string | undefined;
  }
}
