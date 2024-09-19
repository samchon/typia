import { OpenApi } from "@samchon/openapi";

/**
 * @internal
 */
export const application_v31_native = (props: {
  components: OpenApi.IComponents;
  name: string;
}): OpenApi.IJsonSchema => {
  if (props.name === "Blob" || props.name === "File")
    return {
      type: "string",
      format: "binary",
    };
  if (props.components.schemas?.[props.name] === undefined) {
    props.components.schemas ??= {};
    props.components.schemas[props.name] ??= {
      type: "object",
      properties: {},
    };
  }
  return {
    $ref: `#/components/schemas/${props.name}`,
  };
};
