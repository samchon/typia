import { OpenApi } from "@samchon/openapi";

import { MetadataNative } from "../../schemas/metadata/MetadataNative";

import { json_schema_plugin } from "./json_schema_plugin";

export const json_schema_native = (props: {
  components: OpenApi.IComponents;
  native: MetadataNative;
}): OpenApi.IJsonSchema[] => {
  if (props.native.name === "Blob" || props.native.name === "File")
    return json_schema_plugin({
      schema: {
        type: "string",
        format: "binary",
      },
      tags: props.native.tags,
    });
  if (props.components.schemas?.[props.native.name] === undefined) {
    props.components.schemas ??= {};
    props.components.schemas[props.native.name] ??= {
      type: "object",
      properties: {},
      required: [],
    };
  }
  return json_schema_plugin({
    schema: {
      $ref: `#/components/schemas/${props.native.name}`,
    },
    tags: props.native.tags,
  });
};
