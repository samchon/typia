import { ILlmSchema } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataEscaped } from "../../schemas/metadata/MetadataEscaped";

import { llm_schema_station } from "./llm_schema_station";

/**
 * @internal
 */
export const llm_schema_escaped = (escaped: MetadataEscaped): ILlmSchema[] => {
  const output: ILlmSchema | null = llm_schema_station({
    metadata: escaped.returns,
    blockNever: false,
    attribute: {},
  });
  if (output === null) return [];
  else if (
    is_date({
      visited: new Set(),
      metadata: escaped.original,
    })
  ) {
    const string: ILlmSchema.IString | undefined = is_string(output)
      ? output
      : is_one_of(output)
        ? (output.oneOf.find(is_string) as ILlmSchema.IString)
        : undefined;
    if (
      string !== undefined &&
      string.format !== "date" &&
      string.format !== "date-time"
    )
      string.format = "date-time";
  }
  return is_one_of(output) ? (output.oneOf as ILlmSchema[]) : [output];
};

/**
 * @internal
 */
const is_string = (elem: ILlmSchema): elem is ILlmSchema.IString =>
  (elem as ILlmSchema.IString).type === "string";

/**
 * @internal
 */
const is_one_of = (elem: ILlmSchema): elem is ILlmSchema.IOneOf =>
  Array.isArray((elem as ILlmSchema.IOneOf).oneOf);

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
      tuple.type.elements.some((elem) =>
        is_date({
          visited: props.visited,
          metadata: elem,
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
