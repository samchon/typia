import { OpenApiV3 } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";

import { application_v30_schema } from "./application_v30_schema";

/**
 * @internal
 */
export const application_v30_tuple =
  (components: OpenApiV3.IComponents) =>
  (tuple: MetadataTuple) =>
  (
    attribute: OpenApiV3.IJsonSchema.__IAttribute,
  ): OpenApiV3.IJsonSchema.IArray => ({
    ...attribute,
    type: "array",
    items: application_v30_schema(false)(components)(
      tuple.type.recursive ? {} : attribute,
    )(
      tuple.type.elements.reduce(
        (x, y) => Metadata.merge(x.rest ?? x, y.rest ?? y),
        Metadata.initialize(),
      ),
    ),
    minItems: !!tuple.type.elements.at(-1)?.rest
      ? tuple.type.elements.length - 1
      : tuple.type.elements.filter((x) => !x.optional).length,
    maxItems: !!tuple.type.elements.at(-1)?.rest
      ? undefined!
      : tuple.type.elements.length,
  });
