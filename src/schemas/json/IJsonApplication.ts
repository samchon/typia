import type { OpenApi, OpenApiV3 } from "@samchon/openapi";

export type IJsonApplication<Version extends "3.0" | "3.1" = "3.1"> =
  Version extends "3.0" ? IJsonApplication.IV3_0 : IJsonApplication.IV3_1;
export namespace IJsonApplication {
  export interface IV3_0 {
    version: "3.0";
    schemas: OpenApiV3.IJsonSchema[];
    components: OpenApiV3.IComponents;
  }
  export interface IV3_1 {
    version: "3.1";
    components: OpenApi.IComponents;
    schemas: OpenApi.IJsonSchema[];
  }
}
