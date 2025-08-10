import { IJsonSchemaCollection } from "./IJsonSchemaCollection";

/**
 * Collection of JSON schemas.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @deprecated Use {@link IJsonSchemaCollection} instead please. This interface
 *   type would be changed to {@link ILlmApplication} like structure in the
 *   future version (maybe next v8 major update).
 * @template Version Version of the OpenAPI specification.
 * @template Types Original TypeScript types used in the JSON schemas.
 */
export type IJsonApplication = IJsonSchemaCollection;
export namespace IJsonApplication {
  export type IV3_0 = IJsonSchemaCollection.IV3_0;
  export type IV3_1 = IJsonSchemaCollection.IV3_1;
}

// export interface IJsonApplication<
//   Version extends "3.0" | "3.1" = "3.1",
//   App extends any = object,
// > {
//   version: Version;
//   components: IJsonApplication.IComponents<IJsonApplication.Schema<Version>>;
//   functions: IJsonApplication.IFunction<IJsonApplication.Schema<Version>>[];
//   __application?: App | undefined;
// }
// export namespace IJsonApplication {
//   export type Schema<Version extends "3.0" | "3.1"> = Version extends "3.1"
//     ? OpenApi.IJsonSchema
//     : OpenApiV3.IJsonSchema;

//   export interface IComponents<
//     Schema extends
//       | OpenApi.IJsonSchema
//       | OpenApiV3.IJsonSchema = OpenApi.IJsonSchema,
//   > {
//     schemas?: Record<string, Schema>;
//   }

//   export interface IFunction<
//     Schema extends
//       | OpenApi.IJsonSchema
//       | OpenApiV3.IJsonSchema = OpenApi.IJsonSchema,
//   > {
//     async: boolean;
//     name: string;
//     parameters: IParameter<Schema>[];
//     output: IOutput<Schema> | undefined;
//     summary?: string | undefined;
//     description?: string | undefined;
//     deprecated?: boolean;
//     tags?: string[];
//   }

//   export interface IParameter<
//     Schema extends
//       | OpenApi.IJsonSchema
//       | OpenApiV3.IJsonSchema = OpenApi.IJsonSchema,
//   > {
//     name: string;
//     required: boolean;
//     schema: Schema;
//     title?: string | undefined;
//     description?: string | undefined;
//   }

//   export interface IOutput<
//     Schema extends
//       | OpenApi.IJsonSchema
//       | OpenApiV3.IJsonSchema = OpenApi.IJsonSchema,
//   > {
//     schema: Schema;
//     required: boolean;
//     description?: string | undefined;
//   }
// }
