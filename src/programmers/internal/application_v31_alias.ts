import { OpenApi } from "@samchon/openapi";

import { MetadataAlias } from "../../schemas/metadata/MetadataAlias";

import { application_description } from "./application_description";
import { application_title } from "./application_title";
import { application_v31_object } from "./application_v31_object";
import { application_v31_schema } from "./application_v31_schema";

/**
 * @internal
 */
export const application_v31_alias =
  <BlockNever extends boolean>(blockNever: BlockNever) =>
  (components: OpenApi.IComponents) =>
  (alias: MetadataAlias): OpenApi.IJsonSchema.IReference => {
    if (alias.value.size() === 1 && alias.value.objects.length === 1)
      return application_v31_object(components)(
        alias.value.objects[0]!,
      ) as OpenApi.IJsonSchema.IReference;

    const $ref: string = `#/components/schemas/${alias.name}`;
    if (components.schemas?.[alias.name] === undefined) {
      // TEMPORARY ASSIGNMENT
      components.schemas ??= {};
      components.schemas[alias.name] = {};

      // GENERATE SCHEMA
      const schema: OpenApi.IJsonSchema | null = application_v31_schema(
        blockNever,
      )(components)({
        deprecated:
          alias.jsDocTags.some((tag) => tag.name === "deprecated") || undefined,
        title: application_title(alias),
        description: application_description(alias),
      })(alias.value);
      if (schema !== null)
        Object.assign(components.schemas[alias.name]!, schema);
    }
    return { $ref };
  };
