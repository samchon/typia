import { OpenApi } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";

import { json_schema_station } from "./json_schema_station";

export const json_schema_tuple = (props: {
  components: OpenApi.IComponents;
  tuple: MetadataTuple;
}): OpenApi.IJsonSchema.ITuple => {
  const tail: Metadata | null = props.tuple.type.elements.at(-1)?.rest ?? null;
  const prefixItems: Metadata[] = props.tuple.type.isRest()
    ? props.tuple.type.elements.slice(0, -1)
    : props.tuple.type.elements;
  return {
    type: "array",
    prefixItems: prefixItems.map((metadata) =>
      json_schema_station({
        blockNever: false,
        components: props.components,
        metadata,
        attribute: {},
      }),
    ),
    additionalItems: tail
      ? json_schema_station({
          blockNever: false,
          components: props.components,
          metadata: tail,
          attribute: {},
        })
      : false,
  };
};
