import { OpenApi } from "@samchon/openapi";

import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataTemplate } from "../../schemas/metadata/MetadataTemplate";

import { json_schema_plugin } from "./json_schema_plugin";
import { metadata_to_pattern } from "./metadata_to_pattern";

export const json_schema_templates = (
  metadata: Metadata,
): OpenApi.IJsonSchema[] => {
  const pureTemplates: MetadataTemplate[] = metadata.templates.filter(
    (t) => isPure(t.tags ?? []) === true,
  );
  const taggedTemplates: MetadataTemplate[] = metadata.templates.filter(
    (t) => isPure(t.tags ?? []) === false,
  );

  const output: OpenApi.IJsonSchema[] = [];
  if (pureTemplates.length)
    output.push({
      type: "string",
      pattern: metadata_to_pattern({
        top: true,
        metadata: Metadata.create({
          ...Metadata.initialize(),
          templates: pureTemplates,
        }),
      }),
    });
  for (const tpl of taggedTemplates)
    output.push(
      ...json_schema_plugin({
        schema: {
          type: "string",
          pattern: metadata_to_pattern({
            top: false,
            metadata: Metadata.create({
              ...Metadata.initialize(),
              templates: [tpl],
            }),
          }),
        },
        tags: tpl.tags ?? [],
      }),
    );
  return output;
};

const isPure = (matrix: IMetadataTypeTag[][]) =>
  matrix.every((tags) => filter(tags).length === 0);

const filter = (tags: IMetadataTypeTag[]) =>
  tags.filter((t) => t.schema !== undefined);
