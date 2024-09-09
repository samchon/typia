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
  else if (is_date(new Set())(escaped.original)) {
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
