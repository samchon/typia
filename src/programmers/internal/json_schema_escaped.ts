import { OpenApi, OpenApiTypeChecker } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataEscaped } from "../../schemas/metadata/MetadataEscaped";

import { json_schema_station } from "./json_schema_station";

/**
 * @internal
 */
export const json_schema_escaped = (props: {
  components: OpenApi.IComponents;
  escaped: MetadataEscaped;
}): OpenApi.IJsonSchema[] => {
  const output: OpenApi.IJsonSchema | null = json_schema_station({
    blockNever: false,
    components: props.components,
    metadata: props.escaped.returns,
    attribute: {},
  });
  if (output === null) return [];

  if (
    is_date({
      visited: new Set(),
      metadata: props.escaped.original,
    })
  ) {
    const string: OpenApi.IJsonSchema.IString | undefined =
      OpenApiTypeChecker.isString(output)
        ? output
        : OpenApiTypeChecker.isOneOf(output)
          ? (output.oneOf.find(
              OpenApiTypeChecker.isString,
            ) as OpenApi.IJsonSchema.IString)
          : undefined;
    if (
      string !== undefined &&
      string.format !== "date" &&
      string.format !== "date-time"
    )
      string.format = "date-time";
  }
  return OpenApiTypeChecker.isOneOf(output)
    ? (output.oneOf as OpenApi.IJsonSchema[])
    : [output];
};

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
    props.metadata.natives.some((native) => native.name === "Date") ||
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
        metadata: alias.type.value,
      }),
    )
  );
};
