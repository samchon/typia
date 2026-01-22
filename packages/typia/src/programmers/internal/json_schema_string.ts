import { OpenApi } from "@samchon/openapi";

import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { json_schema_plugin } from "./json_schema_plugin";

export const json_schema_string = (
  atomic: MetadataAtomic,
): OpenApi.IJsonSchema[] =>
  json_schema_plugin({
    schema: {
      type: "string",
    } satisfies OpenApi.IJsonSchema,
    tags: atomic.tags,
  });
