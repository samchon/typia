import { OpenApi } from "@samchon/openapi";
import { OpenApiV3Downgrader } from "@samchon/openapi/lib/converters/OpenApiV3Downgrader";

import { IJsonSchemaCollection } from "../../schemas/json/IJsonSchemaCollection";
import { Metadata } from "../../schemas/metadata/Metadata";

import { TransformerError } from "../../transformers/TransformerError";

import { AtomicPredicator } from "../helpers/AtomicPredicator";
import { json_schema_station } from "../internal/json_schema_station";

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
        AtomicPredicator.native(native.name) === false &&
        native.name !== "Date" &&
        native.name !== "Blob" &&
        native.name !== "File"
      )
        output.push(`JSON schema does not support ${native.name} type.`);
    return output;
  };

  export const write = <Version extends "3.0" | "3.1">(props: {
    version: Version;
    metadatas: Array<Metadata>;
  }): IJsonSchemaCollection<Version> =>
    props.version === "3.0"
      ? (writeV3_0(props.metadatas) as IJsonSchemaCollection<Version>)
      : (writeV3_1(props.metadatas) as IJsonSchemaCollection<Version>);

  const writeV3_0 = (
    metadataList: Array<Metadata>,
  ): IJsonSchemaCollection<"3.0"> => {
    const collection: IJsonSchemaCollection<"3.1"> = writeV3_1(metadataList);
    const asset: OpenApiV3Downgrader.IComponentsCollection =
      OpenApiV3Downgrader.downgradeComponents(collection.components);
    const caster = OpenApiV3Downgrader.downgradeSchema(asset);
    return {
      version: "3.0",
      components: asset.downgraded,
      schemas: collection.schemas.map(caster),
    };
  };

  const writeV3_1 = (
    metadataList: Array<Metadata>,
  ): IJsonSchemaCollection<"3.1"> => {
    const components: OpenApi.IComponents = {
      schemas: {},
    };
    const generator = (metadata: Metadata): OpenApi.IJsonSchema | null =>
      json_schema_station({
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
            code: "typia.json.schemas",
            message: `invalid type on argument - (${meta.getName()}, ${i})`,
          });
        return schema;
      }),
    };
  };
}
