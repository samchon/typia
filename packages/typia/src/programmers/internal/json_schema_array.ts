import { OpenApi } from "@samchon/openapi";

import { MetadataArray } from "../../schemas/metadata/MetadataArray";

import { json_schema_plugin } from "./json_schema_plugin";
import { json_schema_station } from "./json_schema_station";

export const json_schema_array = (props: {
  components: OpenApi.IComponents;
  array: MetadataArray;
}): Array<OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.IReference> => {
  const factory = (): OpenApi.IJsonSchema.IArray[] =>
    json_schema_plugin({
      schema: {
        type: "array",
        items: json_schema_station({
          blockNever: false,
          components: props.components,
          metadata: props.array.type.value,
          attribute: {},
        }),
      } satisfies OpenApi.IJsonSchema.IArray,
      tags: props.array.tags,
    });
  if (props.array.type.recursive === true) {
    const out = () => [
      {
        $ref: `#/components/schemas/${props.array.type.name}`,
      },
    ];
    if (props.components.schemas?.[props.array.type.name] !== undefined)
      return out();

    props.components.schemas ??= {};
    props.components.schemas[props.array.type.name] ??= {};

    const oneOf: OpenApi.IJsonSchema.IArray[] = factory();
    Object.assign(
      props.components.schemas[props.array.type.name]!,
      oneOf.length === 1 ? oneOf[0] : { oneOf },
    );
    return out();
  }
  return factory();
};
