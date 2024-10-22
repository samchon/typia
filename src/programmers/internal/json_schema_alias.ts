import { OpenApi } from "@samchon/openapi";

import { MetadataAlias } from "../../schemas/metadata/MetadataAlias";

import { json_schema_description } from "./json_schema_description";
import { json_schema_object } from "./json_schema_object";
import { json_schema_station } from "./json_schema_station";
import { json_schema_title } from "./json_schema_title";

export const json_schema_alias = <BlockNever extends boolean>(props: {
  blockNever: BlockNever;
  components: OpenApi.IComponents;
  alias: MetadataAlias;
}): OpenApi.IJsonSchema.IReference[] => {
  if (
    props.alias.type.value.size() === 1 &&
    props.alias.type.value.objects.length === 1
  )
    return json_schema_object({
      components: props.components,
      object: props.alias.type.value.objects[0]!,
    }) as OpenApi.IJsonSchema.IReference[];

  const $ref: string = `#/components/schemas/${props.alias.type.name}`;
  if (props.components.schemas?.[props.alias.type.name] === undefined) {
    // TEMPORARY ASSIGNMENT
    props.components.schemas ??= {};
    props.components.schemas[props.alias.type.name] = {};

    // GENERATE SCHEMA
    const schema: OpenApi.IJsonSchema | null = json_schema_station({
      blockNever: props.blockNever,
      components: props.components,
      attribute: {
        deprecated:
          props.alias.type.jsDocTags.some((tag) => tag.name === "deprecated") ||
          undefined,
        title: json_schema_title(props.alias.type),
        description: json_schema_description(props.alias.type),
      },
      metadata: props.alias.type.value,
    });
    if (schema !== null)
      Object.assign(props.components.schemas[props.alias.type.name]!, schema);
  }
  return [{ $ref }];
};
