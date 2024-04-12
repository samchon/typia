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
  (array: MetadataArray): ArraySchema<Version>[] =>
    application_plugin<ArraySchema<Version>>(
      {
        type: "array",
        items: generator(array.type.value),
      } as ArraySchema<Version>,
      array.tags,
    );

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
