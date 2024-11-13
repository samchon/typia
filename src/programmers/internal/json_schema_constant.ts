import { OpenApi } from "@samchon/openapi";

import { MetadataConstant } from "../../schemas/metadata/MetadataConstant";

import { json_schema_description } from "./json_schema_description";
import { json_schema_plugin } from "./json_schema_plugin";
import { json_schema_title } from "./json_schema_title";

export const json_schema_constant = (
  constant: MetadataConstant,
): OpenApi.IJsonSchema.IConstant[] =>
  constant.values
    .map((value) =>
      json_schema_plugin({
        schema: {
          const:
            typeof value.value === "bigint"
              ? Number(value.value)
              : (value.value as boolean | number | string),
          title: json_schema_title(value),
          description: json_schema_description(value),
        } satisfies OpenApi.IJsonSchema.IConstant,
        tags: value.tags ?? [],
      }),
    )
    .flat();
