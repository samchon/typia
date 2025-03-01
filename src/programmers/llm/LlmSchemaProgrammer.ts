import {
  IChatGptSchema,
  IGeminiSchema,
  ILlmSchema,
  ILlmSchemaV3,
  IOpenApiSchemaError,
  IResult,
} from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/lib/composers/LlmSchemaComposer";

import { IJsonSchemaCollection } from "../../schemas/json/IJsonSchemaCollection";
import { Metadata } from "../../schemas/metadata/Metadata";

import { TransformerError } from "../../transformers/TransformerError";

import { AtomicPredicator } from "../helpers/AtomicPredicator";
import { json_schema_bigint } from "../internal/json_schema_bigint";
import { json_schema_boolean } from "../internal/json_schema_boolean";
import { json_schema_native } from "../internal/json_schema_native";
import { json_schema_number } from "../internal/json_schema_number";
import { json_schema_string } from "../internal/json_schema_string";
import { JsonSchemasProgrammer } from "../json/JsonSchemasProgrammer";

export namespace LlmSchemaProgrammer {
  export interface IOutput<Model extends ILlmSchema.Model> {
    model: Model;
    schema: ILlmSchema.ModelSchema[Model];
    $defs: Record<string, ILlmSchema.ModelSchema[Model]>;
  }

  export const write = <Model extends ILlmSchema.Model>(props: {
    model: Model;
    metadata: Metadata;
    config?: Partial<ILlmSchema.ModelConfig[Model]>;
  }): IOutput<Model> => {
    const collection: IJsonSchemaCollection<"3.1"> =
      JsonSchemasProgrammer.write({
        version: "3.1",
        metadatas: [props.metadata],
      });

    const $defs: Record<string, ILlmSchema.ModelSchema[Model]> = {};
    const result: IResult<ILlmSchema.ModelSchema[Model], IOpenApiSchemaError> =
      LlmSchemaComposer.schema(props.model)({
        config: {
          ...LlmSchemaComposer.defaultConfig(props.model),
          ...props.config,
        } as any,
        components: collection.components,
        schema: collection.schemas[0]!,
        $defs: $defs as any,
      }) as IResult<ILlmSchema.ModelSchema[Model], IOpenApiSchemaError>;
    if (result.success === false)
      throw new TransformerError({
        code: "typia.llm.schema",
        message:
          "failed to convert JSON schema to LLM schema.\n\n" +
          result.error.reasons
            .map((r) => `  - ${r.accessor}: ${r.message}`)
            .join("\n"),
      });
    return {
      model: props.model,
      $defs,
      schema: result.value,
    };
  };

  export const validate =
    <Model extends ILlmSchema.Model>(props: {
      model: ILlmSchema.Model;
      config?: Partial<ILlmSchema.ModelConfig[Model]>;
    }) =>
    (metadata: Metadata): string[] => {
      const output: string[] = [];

      // no additionalProperties in ChatGPT strict mode or Gemini
      if (
        ((props.model === "chatgpt" &&
          (props.config as Partial<IChatGptSchema.IConfig> | undefined)
            ?.strict === true) ||
          props.model === "gemini") &&
        metadata.objects.some((o) =>
          o.type.properties.some(
            (p) => p.key.isSoleLiteral() === false && p.value.size() !== 0,
          ),
        )
      )
        output.push(
          `LLM schema of "${props.model}"${props.model === "chatgpt" ? " (strict mode)" : ""} does not support dynamic property in object.`,
        );

      // ChatGPT strict mode even does not support the optional property
      if (
        props.model === "chatgpt" &&
        (props.config as Partial<IChatGptSchema.IConfig> | undefined)
          ?.strict === true &&
        metadata.objects.some((o) =>
          o.type.properties.some((p) => p.value.isRequired() === false),
        )
      )
        output.push(
          `LLM schema of "chatgpt" (strict mode) does not support optional property in object.`,
        );

      // Gemini does not support the union type
      if (props.model === "gemini" && size(metadata) > 1)
        output.push("Gemini model does not support the union type.");

      // no recursive rule of Gemini and V3
      if (
        (props.model === "gemini" || props.model === "3.0") &&
        ((props.config as IGeminiSchema.IConfig | undefined)?.recursive ===
          false ||
          (props.config as ILlmSchemaV3.IConfig | undefined)?.recursive === 0)
      ) {
        if (metadata.objects.some((o) => o.type.recursive))
          output.push(
            `LLM schema of "${props.model}" does not support recursive object.`,
          );
        if (metadata.arrays.some((a) => a.type.recursive))
          output.push(
            `LLM schema of "${props.model}" does not support recursive array.`,
          );
      }

      // just JSON rule
      if (
        metadata.atomics.some((a) => a.type === "bigint") ||
        metadata.constants.some((c) => c.type === "bigint")
      )
        output.push("LLM schema does not support bigint type.");
      if (
        metadata.tuples.some((t) =>
          t.type.elements.some((e) => e.isRequired() === false),
        ) ||
        metadata.arrays.some((a) => a.type.value.isRequired() === false)
      )
        output.push("LLM schema does not support undefined type in array.");
      if (metadata.maps.length)
        output.push("LLM schema does not support Map type.");
      if (metadata.sets.length)
        output.push("LLM schema does not support Set type.");
      for (const native of metadata.natives)
        if (
          AtomicPredicator.native(native.name) === false &&
          native.name !== "Date" &&
          native.name !== "Blob" &&
          native.name !== "File"
        )
          output.push(`LLM schema does not support ${native.name} type.`);
      return output;
    };
}

const size = (metadata: Metadata): number =>
  (metadata.escaped ? size(metadata.escaped.returns) : 0) +
  metadata.aliases.length +
  metadata.objects.length +
  metadata.arrays.length +
  metadata.tuples.length +
  (metadata.maps.length ? 1 : 0) +
  (metadata.sets.length ? 1 : 0) +
  metadata.atomics
    .map((a) =>
      a.type === "boolean"
        ? json_schema_boolean(a).length
        : a.type === "bigint"
          ? json_schema_bigint(a).length
          : a.type === "number"
            ? json_schema_number(a).length
            : json_schema_string(a).length,
    )
    .reduce((a, b) => a + b, 0) +
  metadata.constants.filter(
    (c) => metadata.atomics.some((a) => a.type === c.type) === false,
  ).length +
  metadata.templates.length +
  metadata.natives
    .filter(
      (n) =>
        metadata.atomics.some((a) => a.type === n.name) === false &&
        metadata.constants.some((c) => c.type === n.name) === false,
    )
    .map(
      (n) =>
        json_schema_native({
          components: {},
          native: n,
        }).length,
    )
    .reduce((a, b) => a + b, 0);
