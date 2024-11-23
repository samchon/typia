import { ILlmApplication, OpenApi, OpenApiTypeChecker } from "@samchon/openapi";
import { LlmSchemaConverter } from "@samchon/openapi/lib/converters/LlmSchemaConverter";

import { MetadataFactory } from "../../factories/MetadataFactory";

import { Metadata } from "../../schemas/metadata/Metadata";

import { IJsonSchemaCollection } from "../../module";
import { JsonSchemasProgrammer } from "../json/JsonSchemasProgrammer";
import { LlmSchemaProgrammer } from "./LlmSchemaProgrammer";

export namespace LlmParametersProgrammer {
  export const write = <Model extends ILlmApplication.Model>(props: {
    model: Model;
    metadata: Metadata;
  }): ILlmApplication.ModelParameters[Model] => {
    const collection: IJsonSchemaCollection<"3.1"> =
      JsonSchemasProgrammer.write({
        version: "3.1",
        metadatas: [props.metadata],
      });
    const schema: OpenApi.IJsonSchema.IObject = (() => {
      const schema: OpenApi.IJsonSchema = collection.schemas[0]!;
      if (OpenApiTypeChecker.isObject(schema)) return schema;
      else if (OpenApiTypeChecker.isReference(schema)) {
        const last =
          collection.components.schemas?.[schema.$ref.split("/").pop()!];
        if (last && OpenApiTypeChecker.isObject(last)) return last;
      }
      throw new Error("Unreachable code. Failed to find the object schema.");
    })();

    const parameters: ILlmApplication.ModelParameters[Model] | null =
      LlmSchemaConverter.parameters(props.model)({
        config: {
          recursive: 3,
          reference: false,
          constraint: false,
        },
        components: collection.components,
        schema,
      }) as ILlmApplication.ModelParameters[Model] | null;
    if (parameters === null)
      throw new Error("Failed to convert JSON schema to LLM schema.");
    return parameters;
  };

  export const validate =
    (model: ILlmApplication.Model) =>
    (metadata: Metadata, explore: MetadataFactory.IExplore): string[] => {
      const output: string[] = [];
      if (explore.top === true) {
        if (metadata.objects.length === 0)
          output.push("LLM parameters must be an objec type.");
        else if (metadata.objects.length !== 1 || metadata.size() > 1)
          output.push("LLM parameters must be a single object type.");
        else {
          if (metadata.nullable)
            output.push("LLM parameters must be a non-nullable object type.");
          else if (metadata.isRequired() === false)
            output.push("LLM parameters must be a non-undefined object type.");
        }
      }
      output.push(...LlmSchemaProgrammer.validate(model)(metadata));
      return output;
    };
}
