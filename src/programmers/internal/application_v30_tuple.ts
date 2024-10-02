import { OpenApiV3 } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";

import { application_v30_schema } from "./application_v30_schema";

/**
 * @internal
 */
export const application_v30_tuple = (props: {
  components: OpenApiV3.IComponents;
  tuple: MetadataTuple;
  attribute: OpenApiV3.IJsonSchema.__IAttribute;
}): OpenApiV3.IJsonSchema.IArray => ({
  ...props.attribute,
  type: "array",
  items: application_v30_schema({
    blockNever: false,
    components: props.components,
    attribute: props.tuple.type.recursive ? {} : props.attribute,
    metadata: props.tuple.type.elements.reduce(
      (x, y) => Metadata.merge(x.rest ?? x, y.rest ?? y),
      Metadata.initialize(),
    ),
  }),
  minItems: !!props.tuple.type.elements.at(-1)?.rest
    ? props.tuple.type.elements.length - 1
    : props.tuple.type.elements.filter((x) => !x.optional).length,
  maxItems: !!props.tuple.type.elements.at(-1)?.rest
    ? undefined!
    : props.tuple.type.elements.length,
});
