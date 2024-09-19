import { OpenApiV3 } from "@samchon/openapi";

/**
 * @internal
 */
export const application_v30_native = (props: {
  components: OpenApiV3.IComponents;
  name: string;
  nullable: boolean;
}): OpenApiV3.IJsonSchema => {
  if (props.name === "Blob" || props.name === "File")
    return {
      type: "string",
      format: "binary",
      nullable: props.nullable,
    };
  const key: string = `${props.name}${props.nullable ? ".Nullable" : ""}`;
  if (props.components.schemas?.[key] === undefined) {
    props.components.schemas ??= {};
    props.components.schemas[key] ??= {
      type: "object",
      properties: {},
      nullable: props.nullable,
    };
  }
  return {
    $ref: `#/components/schemas/${key}`,
  };
};
