import { OpenApiV3 } from "@samchon/openapi";

import { CommentFactory } from "../../factories/CommentFactory";

import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";
import { MetadataAlias } from "../../schemas/metadata/MetadataAlias";

import { application_description } from "./application_description";
import { application_plugin } from "./application_plugin";
import { application_v30_object } from "./application_v30_object";
import { application_v30_schema } from "./application_v30_schema";

/**
 * @internal
 */
export const application_v30_alias = <BlockNever extends boolean>(props: {
  blockNever: BlockNever;
  components: OpenApiV3.IComponents;
  alias: MetadataAlias;
  nullable: boolean;
}): OpenApiV3.IJsonSchema.IReference[] => {
  if (
    props.alias.type.value.size() === 1 &&
    props.alias.type.value.objects.length === 1
  )
    return application_v30_object({
      object: props.alias.type.value.objects[0]!,
      components: props.components,
      nullable: props.nullable,
    }) as OpenApiV3.IJsonSchema.IReference[];

  const key: string = `${props.alias.type.name}${props.nullable ? ".Nullable" : ""}`;
  const $ref: string = `#/components/schemas/${key}`;

  if (props.components.schemas?.[key] === undefined) {
    // TEMPORARY ASSIGNMENT
    props.components.schemas ??= {};
    props.components.schemas[key] = {};

    // GENERATE SCHEMA
    const schema: OpenApiV3.IJsonSchema | null = application_v30_schema({
      blockNever: props.blockNever,
      components: props.components,
      attribute: {
        deprecated:
          props.alias.type.jsDocTags.some((tag) => tag.name === "deprecated") ||
          undefined,
        title: (() => {
          const info: IJsDocTagInfo | undefined =
            props.alias.type.jsDocTags.find((tag) => tag.name === "title");
          return info?.text?.length
            ? CommentFactory.merge(info.text)
            : undefined;
        })(),
        description: application_description(props.alias.type),
      },
      metadata: props.alias.type.value,
    });
    if (schema !== null) Object.assign(props.components.schemas[key]!, schema);
  }
  return application_plugin({
    schema: { $ref },
    tags: props.alias.tags,
  });
};
