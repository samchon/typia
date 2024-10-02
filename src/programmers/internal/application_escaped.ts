import { OpenApi, OpenApiV3 } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataEscaped } from "../../schemas/metadata/MetadataEscaped";

/**
 * @internal
 */
export const application_escaped = <Version extends "3.0" | "3.1">(props: {
  generator: (meta: Metadata) => Schema<Version>;
  escaped: MetadataEscaped;
}): Schema<Version>[] => {
  const output: Schema<Version> | null = props.generator(props.escaped.returns);
  if (output === null) return [];

  if (
    is_date({
      visited: new Set(),
      metadata: props.escaped.original,
    })
  ) {
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
  schema: Schema<Version>,
): schema is StringSchema<Version> =>
  (schema as StringSchema<Version>).type === "string";

/**
 * @internal
 */
const is_one_of = <Version extends "3.0" | "3.1">(
  schema: Schema<Version>,
): schema is OneOfSchema<Version> =>
  Array.isArray((schema as OneOfSchema<Version>).oneOf);

/**
 * @internal
 */
const is_date = (props: {
  visited: Set<Metadata>;
  metadata: Metadata;
}): boolean => {
  if (props.visited.has(props.metadata)) return false;
  props.visited.add(props.metadata);

  return (
    props.metadata.natives.some((name) => name === "Date") ||
    props.metadata.arrays.some((array) =>
      is_date({
        visited: props.visited,
        metadata: array.type.value,
      }),
    ) ||
    props.metadata.tuples.some((tuple) =>
      tuple.type.elements.some((e) =>
        is_date({
          visited: props.visited,
          metadata: e,
        }),
      ),
    ) ||
    props.metadata.aliases.some((alias) =>
      is_date({
        visited: props.visited,
        metadata: alias.value,
      }),
    )
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
