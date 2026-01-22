import { OpenApi } from "@samchon/openapi";

import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { json_schema_plugin } from "./json_schema_plugin";

export const json_schema_bigint = (
  atomic: MetadataAtomic,
): OpenApi.IJsonSchema.IInteger[] =>
  json_schema_plugin({
    schema: {
      type: "integer",
    } satisfies OpenApi.IJsonSchema.IInteger,
    tags: atomic.tags,
  });
