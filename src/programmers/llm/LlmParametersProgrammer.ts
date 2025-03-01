import {
  ILlmSchema,
  IOpenApiSchemaError,
  IResult,
  OpenApi,
  OpenApiTypeChecker,
} from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/lib/composers/LlmSchemaComposer";

import { MetadataFactory } from "../../factories/MetadataFactory";

import { Metadata } from "../../schemas/metadata/Metadata";

import { TransformerError } from "../../transformers/TransformerError";

import { IJsonSchemaCollection } from "../../module";
import { JsonSchemasProgrammer } from "../json/JsonSchemasProgrammer";
import { LlmSchemaProgrammer } from "./LlmSchemaProgrammer";

export namespace LlmParametersProgrammer {
  export const write = <Model extends ILlmSchema.Model>(props: {
    model: Model;
    metadata: Metadata;
    config?: Partial<ILlmSchema.ModelConfig[Model]>;
  }): ILlmSchema.ModelParameters[Model] => {
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

    const result: IResult<
      ILlmSchema.ModelParameters[Model],
      IOpenApiSchemaError
    > = LlmSchemaComposer.parameters(props.model)({
      config: {
        ...LlmSchemaComposer.defaultConfig(props.model),
        ...props.config,
      } as any,
      components: collection.components,
      schema,
    }) as IResult<ILlmSchema.ModelParameters[Model], IOpenApiSchemaError>;
    if (result.success === false)
      throw new TransformerError({
        code: "typia.llm.parameters",
        message:
          "failed to convert JSON schema to LLM schema.\n\n" +
          result.error.reasons
            .map((r) => `  - ${r.accessor}: ${r.message}`)
            .join("\n"),
      });
    return result.value;
  };

  export const validate =
    <Model extends ILlmSchema.Model>(props: {
      model: Model;
      config?: Partial<ILlmSchema.ModelConfig[Model]>;
    }) =>
    (metadata: Metadata, explore: MetadataFactory.IExplore): string[] => {
      const output: string[] = [];
      if (explore.top === true) {
        if (metadata.objects.length === 0)
          output.push("LLM parameters must be an object type.");
        else if (metadata.objects.length !== 1 || metadata.size() > 1)
          output.push("LLM parameters must be a single object type.");
        else {
          if (
            metadata.objects[0]!.type.properties.some(
              (p) => p.key.isSoleLiteral() === false,
            )
          )
            output.push("LLM parameters must not have dynamic keys.");
          if (metadata.nullable)
            output.push("LLM parameters must be a non-nullable object type.");
          if (metadata.isRequired() === false)
            output.push("LLM parameters must be a non-undefined object type.");
        }
      }
      output.push(...LlmSchemaProgrammer.validate(props)(metadata));
      return output;
    };
}
