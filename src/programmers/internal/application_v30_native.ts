import { OpenApiV3 } from "@samchon/openapi";

import { MetadataNative } from "../../schemas/metadata/MetadataNative";

import { application_plugin } from "./application_plugin";

/**
 * @internal
 */
export const application_v30_native = (props: {
  components: OpenApiV3.IComponents;
  native: MetadataNative;
  nullable: boolean;
}): OpenApiV3.IJsonSchema[] => {
  if (props.native.name === "Blob" || props.native.name === "File")
    return application_plugin({
      schema: {
        type: "string",
        format: "binary",
        nullable: props.nullable,
      },
      tags: props.native.tags,
    });
  const key: string = `${props.native.name}${props.nullable ? ".Nullable" : ""}`;
  if (props.components.schemas?.[key] === undefined) {
    props.components.schemas ??= {};
    props.components.schemas[key] ??= {
      type: "object",
      properties: {},
      nullable: props.nullable,
    };
  }
  return application_plugin({
    schema: {
      $ref: `#/components/schemas/${key}`,
    },
    tags: props.native.tags,
  });
};
