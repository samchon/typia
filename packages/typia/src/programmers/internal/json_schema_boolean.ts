import { OpenApi } from "@samchon/openapi";

import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { json_schema_plugin } from "./json_schema_plugin";

export const json_schema_boolean = (
  atomic: MetadataAtomic,
): OpenApi.IJsonSchema.IBoolean[] =>
  json_schema_plugin({
    schema: {
      type: "boolean",
    } satisfies OpenApi.IJsonSchema.IBoolean,
    tags: atomic.tags,
  });
