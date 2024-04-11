import { OpenApiV3 } from "@samchon/openapi";

import { CommentFactory } from "../../factories/CommentFactory";

import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";
import { MetadataAlias } from "../../schemas/metadata/MetadataAlias";

import { application_v30_object } from "./application_v30_object";
import { application_v30_schema } from "./application_v30_schema";

/**
 * @internal
 */
export const application_v30_alias =
  <BlockNever extends boolean>(blockNever: BlockNever) =>
  (components: OpenApiV3.IComponents) =>
  (alias: MetadataAlias) =>
  (nullable: boolean): OpenApiV3.IJsonSchema.IReference => {
    if (alias.value.size() === 1 && alias.value.objects.length === 1)
      return application_v30_object(components)(alias.value.objects[0]!)(
        nullable,
      ) as OpenApiV3.IJsonSchema.IReference;

    const key: string = `${alias.name}${nullable ? ".Nullable" : ""}`;
    const $ref: string = `#/components/schemas/${key}`;

    if (components.schemas?.[key] === undefined) {
      // TEMPORARY ASSIGNMENT
      components.schemas ??= {};
      components.schemas[key] = {};

      // GENERATE SCHEMA
      const schema: OpenApiV3.IJsonSchema | null = application_v30_schema(
        blockNever,
      )(components)({
        deprecated:
          alias.jsDocTags.some((tag) => tag.name === "deprecated") || undefined,
        title: (() => {
          const info: IJsDocTagInfo | undefined = alias.jsDocTags.find(
            (tag) => tag.name === "title",
          );
          return info?.text?.length
            ? CommentFactory.merge(info.text)
            : undefined;
        })(),
        description: alias.description ?? undefined,
      })(alias.value);
      if (schema !== null) Object.assign(components.schemas[key]!, schema);
    }
    return { $ref };
  };
