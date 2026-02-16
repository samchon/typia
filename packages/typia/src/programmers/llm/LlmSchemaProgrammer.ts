import {
  IJsonSchemaCollection,
  IJsonSchemaTransformError,
  ILlmSchema,
  IResult,
} from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";

import { MetadataSchema } from "../../schemas/metadata/MetadataSchema";
import { TransformerError } from "../../transformers/TransformerError";
import { AtomicPredicator } from "../helpers/AtomicPredicator";
import { json_schema_bigint } from "../internal/json_schema_bigint";
import { json_schema_boolean } from "../internal/json_schema_boolean";
import { json_schema_native } from "../internal/json_schema_native";
import { json_schema_number } from "../internal/json_schema_number";
import { json_schema_string } from "../internal/json_schema_string";
import { JsonSchemasProgrammer } from "../json/JsonSchemasProgrammer";

export namespace LlmSchemaProgrammer {
  export interface IOutput {
    schema: ILlmSchema;
    $defs: Record<string, ILlmSchema>;
  }

  export const write = (props: {
    metadata: MetadataSchema;
    config?: Partial<ILlmSchema.IConfig>;
  }): IOutput => {
    const collection: IJsonSchemaCollection<"3.1"> =
      JsonSchemasProgrammer.write({
        version: "3.1",
        metadatas: [props.metadata],
      });

    const $defs: Record<string, ILlmSchema> = {};
    const result: IResult<ILlmSchema, IJsonSchemaTransformError> =
      LlmSchemaConverter.schema({
        config: LlmSchemaConverter.getConfig(props.config),
        components: collection.components,
        schema: collection.schemas[0]!,
        $defs,
      });
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
      $defs,
      schema: result.value,
    };
  };

  export const validate = (props: {
    config?: Partial<ILlmSchema.IConfig>;
    metadata: MetadataSchema;
  }): string[] => {
    const output: string[] = [];

    // no additionalProperties in OpenAI strict mode
    const config: ILlmSchema.IConfig = LlmSchemaConverter.getConfig(
      props.config,
    );
    if (
      config.strict === true &&
      props.metadata.objects.some((o) =>
        o.type.properties.some(
          (p) => p.key.isSoleLiteral() === false && p.value.size() !== 0,
        ),
      )
    )
      output.push(`Strict mode does not allow dynamic property in object.`);

    // OpenAI strict mode even does not support the optional property
    if (
      config.strict === true &&
      props.metadata.objects.some((o) =>
        o.type.properties.some((p) => p.value.isRequired() === false),
      )
    )
      output.push(`Strict mode does not support optional property in object.`);

    // just JSON rule
    if (
      props.metadata.atomics.some((a) => a.type === "bigint") ||
      props.metadata.constants.some((c) => c.type === "bigint")
    )
      output.push("LLM schema does not support bigint type.");
    if (props.metadata.tuples.length !== 0)
      output.push("LLM schema does not support tuple type.");
    if (props.metadata.arrays.some((a) => a.type.value.isRequired() === false))
      output.push("LLM schema does not support undefined type in array.");
    if (props.metadata.maps.length)
      output.push("LLM schema does not support Map type.");
    if (props.metadata.sets.length)
      output.push("LLM schema does not support Set type.");
    for (const native of props.metadata.natives)
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

const size = (metadata: MetadataSchema): number =>
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
