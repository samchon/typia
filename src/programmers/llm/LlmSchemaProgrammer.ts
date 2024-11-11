import { ILlmApplication } from "@samchon/openapi";
import { HttpLlmConverter } from "@samchon/openapi/lib/converters/HttpLlmConverter";

import { IJsonSchemaCollection } from "../../schemas/json/IJsonSchemaCollection";
import { Metadata } from "../../schemas/metadata/Metadata";

import { AtomicPredicator } from "../helpers/AtomicPredicator";
import { json_schema_bigint } from "../internal/json_schema_bigint";
import { json_schema_boolean } from "../internal/json_schema_boolean";
import { json_schema_native } from "../internal/json_schema_native";
import { json_schema_number } from "../internal/json_schema_number";
import { json_schema_string } from "../internal/json_schema_string";
import { JsonSchemasProgrammer } from "../json/JsonSchemasProgrammer";

export namespace LlmSchemaProgrammer {
  export const write = <Model extends ILlmApplication.Model>(props: {
    model: Model;
    metadata: Metadata;
  }): ILlmApplication.ModelSchema[Model] => {
    const collection: IJsonSchemaCollection<"3.1"> =
      JsonSchemasProgrammer.write({
        version: "3.1",
        metadatas: [props.metadata],
      });
    const schema: ILlmApplication.ModelSchema[Model] | null =
      HttpLlmConverter.schema({
        model: props.model,
        components: collection.components,
        schema: collection.schemas[0]!,
        recursive: 3,
      });
    if (schema === null)
      throw new Error("Failed to convert JSON schema to LLM schema.");
    return schema;
  };

  export const validate =
    (model: ILlmApplication.Model) =>
    (metadata: Metadata): string[] => {
      const output: string[] = [];
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
      if (model === "gemini" && size(metadata) > 1)
        output.push("Gemini model does not support the union type.");
      // if (
      //   metadata.aliases.some((a) => a.type.recursive) ||
      //   metadata.arrays.some((a) => a.type.recursive) ||
      //   metadata.objects.some((o) => o.type.recursive) ||
      //   metadata.tuples.some((t) => t.type.recursive)
      // )
      //   output.push("LLM schema does not support recursive type.");
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
