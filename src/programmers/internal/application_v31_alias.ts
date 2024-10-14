import { OpenApi } from "@samchon/openapi";

import { MetadataAlias } from "../../schemas/metadata/MetadataAlias";

import { application_description } from "./application_description";
import { application_title } from "./application_title";
import { application_v31_object } from "./application_v31_object";
import { application_v31_schema } from "./application_v31_schema";

/**
 * @internal
 */
export const application_v31_alias = <BlockNever extends boolean>(props: {
  blockNever: BlockNever;
  components: OpenApi.IComponents;
  alias: MetadataAlias;
}): OpenApi.IJsonSchema.IReference[] => {
  if (
    props.alias.type.value.size() === 1 &&
    props.alias.type.value.objects.length === 1
  )
    return application_v31_object({
      components: props.components,
      object: props.alias.type.value.objects[0]!,
    }) as OpenApi.IJsonSchema.IReference[];

  const $ref: string = `#/components/schemas/${props.alias.type.name}`;
  if (props.components.schemas?.[props.alias.type.name] === undefined) {
    // TEMPORARY ASSIGNMENT
    props.components.schemas ??= {};
    props.components.schemas[props.alias.type.name] = {};

    // GENERATE SCHEMA
    const schema: OpenApi.IJsonSchema | null = application_v31_schema({
      blockNever: props.blockNever,
      components: props.components,
      attribute: {
        deprecated:
          props.alias.type.jsDocTags.some((tag) => tag.name === "deprecated") ||
          undefined,
        title: application_title(props.alias.type),
        description: application_description(props.alias.type),
      },
      metadata: props.alias.type.value,
    });
    if (schema !== null)
      Object.assign(props.components.schemas[props.alias.type.name]!, schema);
  }
  return [{ $ref }];
};
