import { OpenApi, OpenApiV3 } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";

import { application_plugin } from "./application_plugin";

/**
 * @internal
 */
export const application_array =
  <Version extends "3.0" | "3.1">(
    generator: (value: Metadata) => Schema<Version>,
  ) =>
  (
    components: Version extends "3.0"
      ? OpenApiV3.IComponents
      : OpenApi.IComponents,
  ) =>
  (
    array: MetadataArray,
  ): Array<ArraySchema<Version> | OpenApiV3.IJsonSchema.IReference> => {
    const factory = (): ArraySchema<Version>[] =>
      application_plugin<ArraySchema<Version>>(
        {
          type: "array",
          items: generator(array.type.value),
        } as ArraySchema<Version>,
        array.tags,
      );
    if (array.type.recursive === true) {
      const out = () => [
        {
          $ref: `#/components/schemas/${array.type.name}`,
        },
      ];
      if (components.schemas?.[array.type.name] !== undefined) return out();

      components.schemas ??= {};
      components.schemas[array.type.name] ??= {};

      const oneOf: ArraySchema<Version>[] = factory();
      Object.assign(
        components.schemas[array.type.name]!,
        oneOf.length === 1 ? oneOf[0] : { oneOf },
      );
      return out();
    }
    return factory();
  };

/**
 * @internal
 */
type ArraySchema<Version extends "3.0" | "3.1"> = Version extends "3.0"
  ? OpenApiV3.IJsonSchema.IArray
  : OpenApi.IJsonSchema.IArray;

/**
 * @internal
 */
type Schema<Version extends "3.0" | "3.1"> = Version extends "3.0"
  ? OpenApiV3.IJsonSchema
  : OpenApi.IJsonSchema;
