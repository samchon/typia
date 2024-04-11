import { OpenApi } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";

/**
 * @internal
 */
export const application_v31_tuple =
  (generator: (meta: Metadata) => OpenApi.IJsonSchema) =>
  (tuple: MetadataTuple): OpenApi.IJsonSchema.ITuple => {
    const tail: Metadata | undefined = tuple.type.elements.at(-1);
    const prefixItems: Metadata[] = tuple.type.isRest()
      ? tuple.type.elements.slice(0, -1)
      : tuple.type.elements;
    return {
      type: "array",
      items: undefined!,
      prefixItems: prefixItems.map(generator),
      additionalItems: tail ? generator(tail) : false,
    };
  };
