import { OpenApi } from "@samchon/openapi";

import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { json_schema_plugin } from "./json_schema_plugin";

export const json_schema_number = (
  atomic: MetadataAtomic,
): Array<OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INumber> =>
  json_schema_plugin({
    schema: {
      type: "number",
    } satisfies OpenApi.IJsonSchema.INumber,
    tags: atomic.tags,
  });
