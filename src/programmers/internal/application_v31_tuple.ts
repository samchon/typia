import { OpenApi } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";

/**
 * @internal
 */
export const application_v31_tuple = (props: {
  generator: (metadata: Metadata) => OpenApi.IJsonSchema;
  tuple: MetadataTuple;
}): OpenApi.IJsonSchema.ITuple => {
  const tail: Metadata | null = props.tuple.type.elements.at(-1)?.rest ?? null;
  const prefixItems: Metadata[] = props.tuple.type.isRest()
    ? props.tuple.type.elements.slice(0, -1)
    : props.tuple.type.elements;
  return {
    type: "array",
    prefixItems: prefixItems.map(props.generator),
    additionalItems: tail ? props.generator(tail) : false,
  };
};
