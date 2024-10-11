import { OpenApi, OpenApiV3 } from "@samchon/openapi";

import { IJsonSchemaCollection } from "../../schemas/json/IJsonSchemaCollection";
import { Metadata } from "../../schemas/metadata/Metadata";

import { TransformerError } from "../../transformers/TransformerError";

import { AtomicPredicator } from "../helpers/AtomicPredicator";
import { application_v30_schema } from "../internal/application_v30_schema";
import { application_v31_schema } from "../internal/application_v31_schema";

export namespace JsonSchemasProgrammer {
  export const validate = (metadata: Metadata): string[] => {
    const output: string[] = [];
    if (
      metadata.atomics.some((a) => a.type === "bigint") ||
      metadata.constants.some((c) => c.type === "bigint")
    )
      output.push("JSON schema does not support bigint type.");
    if (
      metadata.tuples.some((t) =>
        t.type.elements.some((e) => e.isRequired() === false),
      ) ||
      metadata.arrays.some((a) => a.type.value.isRequired() === false)
    )
      output.push("JSON schema does not support undefined type in array.");
    if (metadata.maps.length)
      output.push("JSON schema does not support Map type.");
    if (metadata.sets.length)
      output.push("JSON schema does not support Set type.");
    for (const native of metadata.natives)
      if (
        AtomicPredicator.native(native) === false &&
        native !== "Date" &&
        native !== "Blob" &&
        native !== "File"
      )
        output.push(`JSON schema does not support ${native} type.`);
    return output;
  };

  export const write = <Version extends "3.0" | "3.1">(version: Version) =>
    version === "3.0" ? v30 : v31;

  const v30 = (medadataList: Array<Metadata>): IJsonSchemaCollection<"3.0"> => {
    const components: OpenApiV3.IComponents = {};
    const generator = (metadata: Metadata): OpenApiV3.IJsonSchema | null =>
      application_v30_schema({
        blockNever: true,
        components,
        attribute: {},
        metadata,
      });
    return {
      version: "3.0",
      components,
      schemas: medadataList.map((meta, i) => {
        const schema: OpenApiV3.IJsonSchema | null = generator(meta);
        if (schema === null)
          throw new TransformerError({
            code: "typia.json.application",
            message: `invalid type on argument - (${meta.getName()}, ${i})`,
          });
        return schema;
      }),
    };
  };

  const v31 = (metadataList: Array<Metadata>): IJsonSchemaCollection<"3.1"> => {
    const components: OpenApi.IComponents = {
      schemas: {},
    };
    const generator = (metadata: Metadata): OpenApi.IJsonSchema | null =>
      application_v31_schema({
        blockNever: true,
        components,
        attribute: {},
        metadata,
      });
    return {
      version: "3.1",
      components,
      schemas: metadataList.map((meta, i) => {
        const schema: OpenApi.IJsonSchema | null = generator(meta);
        if (schema === null)
          throw new TransformerError({
            code: "typia.json.application",
            message: `invalid type on argument - (${meta.getName()}, ${i})`,
          });
        return schema;
      }),
    };
  };
}
