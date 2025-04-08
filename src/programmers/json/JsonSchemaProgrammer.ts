import { OpenApi } from "@samchon/openapi";

import { IJsonSchemaUnit } from "../../schemas/json/IJsonSchemaUnit";
import { Metadata } from "../../schemas/metadata/Metadata";

import { JsonSchemasProgrammer } from "./JsonSchemasProgrammer";

export namespace JsonSchemaProgrammer {
  export const validate = (metadata: Metadata): string[] =>
    JsonSchemasProgrammer.validate(metadata);

  export const write = <Version extends "3.0" | "3.1">(props: {
    version: Version;
    metadata: Metadata;
  }): IJsonSchemaUnit<Version> => {
    const collection = JsonSchemasProgrammer.write({
      version: props.version,
      metadatas: [props.metadata],
    });
    return {
      version: collection.version as "3.1",
      components: collection.components as OpenApi.IComponents,
      schema: collection.schemas[0] as OpenApi.IJsonSchema,
    } as IJsonSchemaUnit<Version>;
  };
}
