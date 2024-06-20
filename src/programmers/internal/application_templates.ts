import { OpenApi, OpenApiV3 } from "@samchon/openapi";

import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataTemplate } from "../../schemas/metadata/MetadataTemplate";

import { application_plugin } from "./application_plugin";
import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const application_templates = <Version extends "3.0" | "3.1">(
  meta: Metadata,
): Schema<Version>[] => {
  const pureTemplates: MetadataTemplate[] = meta.templates.filter(
    (t) => isPure(t.tags ?? []) === true,
  );
  const taggedTemplates: MetadataTemplate[] = meta.templates.filter(
    (t) => isPure(t.tags ?? []) === false,
  );

  const output: Schema<Version>[] = [];
  if (pureTemplates.length)
    output.push({
      type: "string",
      pattern: metadata_to_pattern(true)(
        Metadata.create({
          ...Metadata.initialize(),
          templates: pureTemplates,
        }),
      ),
    });
  for (const tpl of taggedTemplates)
    output.push(
      application_plugin(
        {
          type: "string",
          pattern: metadata_to_pattern(false)(
            Metadata.create({
              ...Metadata.initialize(),
              templates: [tpl],
            }),
          ),
        },
        tpl.tags ?? [],
      ) as any,
    );
  return output;
};

const isPure = (matrix: IMetadataTypeTag[][]) =>
  matrix.every((tags) => filter(tags).length === 0);
const filter = (tags: IMetadataTypeTag[]) =>
  tags.filter((t) => t.schema !== undefined);

/**
 * @internal
 */
type Schema<Version extends "3.0" | "3.1"> = Version extends "3.0"
  ? OpenApiV3.IJsonSchema.IString
  : OpenApi.IJsonSchema.IString;
