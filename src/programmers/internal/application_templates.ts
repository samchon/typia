import { OpenApi, OpenApiV3 } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";

import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const application_templates = <Version extends "3.0" | "3.1">(
  meta: Metadata,
): Schema<Version> => {
  const output: Schema<Version> = {
    type: "string",
  };
  output.pattern = metadata_to_pattern(true)(meta);
  return output;
};

/**
 * @internal
 */
type Schema<Version extends "3.0" | "3.1"> = Version extends "3.0"
  ? OpenApiV3.IJsonSchema.IString
  : OpenApi.IJsonSchema.IString;
