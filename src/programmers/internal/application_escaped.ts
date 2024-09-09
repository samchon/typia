import { OpenApi, OpenApiV3 } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataEscaped } from "../../schemas/metadata/MetadataEscaped";

/**
 * @internal
 */
export const application_escaped =
  <Version extends "3.0" | "3.1">(
    generator: (meta: Metadata) => Schema<Version>,
  ) =>
  (escaped: MetadataEscaped): Schema<Version>[] => {
    const output: Schema<Version> | null = generator(escaped.returns);
    if (output === null) return [];

    if (is_date(new Set())(escaped.original)) {
      const string: StringSchema<Version> | undefined = is_string(output)
        ? output
        : is_one_of(output)
          ? (output.oneOf.find(is_string) as StringSchema<Version>)
          : undefined;
      if (
        string !== undefined &&
        string.format !== "date" &&
        string.format !== "date-time"
      )
        string.format = "date-time";
    }
    return is_one_of(output) ? (output.oneOf as Schema<Version>[]) : [output];
  };

/**
 * @internal
 */
const is_string = <Version extends "3.0" | "3.1">(
  elem: Schema<Version>,
): elem is StringSchema<Version> =>
  (elem as StringSchema<Version>).type === "string";

/**
 * @internal
 */
const is_one_of = <Version extends "3.0" | "3.1">(
  elem: Schema<Version>,
): elem is OneOfSchema<Version> =>
  Array.isArray((elem as OneOfSchema<Version>).oneOf);

/**
 * @internal
 */
const is_date =
  (visited: Set<Metadata>) =>
  (meta: Metadata): boolean => {
    if (visited.has(meta)) return false;
    visited.add(meta);

    return (
      meta.natives.some((name) => name === "Date") ||
      meta.arrays.some((array) => is_date(visited)(array.type.value)) ||
      meta.tuples.some((tuple) => tuple.type.elements.some(is_date(visited))) ||
      meta.aliases.some((alias) => is_date(visited)(alias.value))
    );
  };

type Schema<Version extends "3.0" | "3.1"> = Version extends "3.0"
  ? OpenApiV3.IJsonSchema
  : OpenApi.IJsonSchema;
type StringSchema<Version extends "3.0" | "3.1"> = Version extends "3.0"
  ? OpenApiV3.IJsonSchema.IString
  : OpenApi.IJsonSchema.IString;
type OneOfSchema<Version extends "3.0" | "3.1"> = Version extends "3.0"
  ? OpenApiV3.IJsonSchema.IOneOf
  : OpenApi.IJsonSchema.IOneOf;
