import { IJsonSchemaCollection, OpenApi, OpenApiV3 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

import { TransformerError } from "../../context/TransformerError";
import { MetadataSchema } from "../../schemas/metadata/MetadataSchema";
import { AtomicPredicator } from "../helpers/AtomicPredicator";
import { json_schema_station } from "../iterate/json_schema_station";

export namespace JsonSchemasProgrammer {
  export const validate = (metadata: MetadataSchema): string[] => {
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
    metadatas: Array<MetadataSchema>;
  }): IJsonSchemaCollection<Version> =>
    props.version === "3.0"
      ? (writeV3_0(props.metadatas) as IJsonSchemaCollection<Version>)
      : (writeV3_1(props.metadatas) as IJsonSchemaCollection<Version>);

  const writeV3_0 = (
    metadataList: Array<MetadataSchema>,
  ): IJsonSchemaCollection<"3.0"> => {
    const collection: IJsonSchemaCollection<"3.1"> = writeV3_1(metadataList);
    const downgraded: OpenApiV3.IComponents =
      OpenApiConverter.downgradeComponents(collection.components, "3.0");
    const caster = (schema: OpenApi.IJsonSchema): OpenApiV3.IJsonSchema =>
      OpenApiConverter.downgradeSchema({
        version: "3.0",
        components: collection.components,
        schema,
        downgraded,
      });
    return {
      version: "3.0",
      components: downgraded,
      schemas: collection.schemas.map(caster),
    };
  };

  const writeV3_1 = (
    metadataList: Array<MetadataSchema>,
  ): IJsonSchemaCollection<"3.1"> => {
    const components: OpenApi.IComponents = {
      schemas: {},
    };
    const generator = (metadata: MetadataSchema): OpenApi.IJsonSchema | null =>
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
