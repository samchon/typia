import { OpenApi } from "@typia/interface";

import { OpenApiExclusiveEmender } from "./OpenApiExclusiveEmender";

export namespace LlmDescriptionInverter {
  export const numeric = (
    description: string | undefined,
  ): Pick<
    OpenApi.IJsonSchema.INumber,
    | "minimum"
    | "maximum"
    | "exclusiveMinimum"
    | "exclusiveMaximum"
    | "multipleOf"
    | "description"
  > => {
    if (description === undefined) return {};

    const lines: string[] = description.split("\n");
    return OpenApiExclusiveEmender.emend({
      minimum: find({
        type: "number",
        name: "minimum",
        lines,
      }),
      maximum: find({
        type: "number",
        name: "maximum",
        lines,
      }),
      exclusiveMinimum: find({
        type: "number",
        name: "exclusiveMinimum",
        lines,
      }),
      exclusiveMaximum: find({
        type: "number",
        name: "exclusiveMaximum",
        lines,
      }),
      multipleOf: find({
        type: "number",
        name: "multipleOf",
        lines,
      }),
      description: describe(lines, [
        "minimum",
        "maximum",
        "exclusiveMinimum",
        "exclusiveMaximum",
        "multipleOf",
      ]),
    });
  };

  export const string = (
    description: string | undefined,
  ): Pick<
    OpenApi.IJsonSchema.IString,
    | "format"
    | "pattern"
    | "contentMediaType"
    | "minLength"
    | "maxLength"
    | "description"
  > => {
    if (description === undefined) return {};

    const lines: string[] = description.split("\n");
    return {
      format: find({
        type: "string",
        name: "format",
        lines,
      }),
      pattern: find({
        type: "string",
        name: "pattern",
        lines,
      }),
      contentMediaType: find({
        type: "string",
        name: "contentMediaType",
        lines,
      }),
      minLength: find({
        type: "number",
        name: "minLength",
        lines,
      }),
      maxLength: find({
        type: "number",
        name: "maxLength",
        lines,
      }),
      description: describe(lines, [
        "format",
        "pattern",
        "contentMediaType",
        "minLength",
        "maxLength",
      ]),
    };
  };

  export const array = (
    description: string | undefined,
  ): Pick<
    OpenApi.IJsonSchema.IArray,
    "minItems" | "maxItems" | "uniqueItems" | "description"
  > => {
    if (description === undefined) return {};

    const lines: string[] = description.split("\n");
    return {
      minItems: find({
        type: "number",
        name: "minItems",
        lines,
      }),
      maxItems: find({
        type: "number",
        name: "maxItems",
        lines,
      }),
      uniqueItems: find({
        type: "boolean",
        name: "uniqueItems",
        lines,
      }),
      description: describe(lines, ["minItems", "maxItems", "uniqueItems"]),
    };
  };

  const find = <Type extends "boolean" | "number" | "string">(props: {
    type: Type;
    name: string;
    lines: string[];
  }):
    | (Type extends "boolean" ? true : Type extends "number" ? number : string)
    | undefined => {
    if (props.type === "boolean")
      return props.lines.some((line) => line.startsWith(`@${props.name}`))
        ? (true as any)
        : (undefined as any);
    for (const line of props.lines) {
      if (line.startsWith(`@${props.name} `) === false) continue;
      const value: string = line.replace(`@${props.name} `, "").trim();
      if (props.type === "number")
        return (isNaN(Number(value)) ? undefined : Number(value)) satisfies
          | number
          | undefined as any;
      return value as any;
    }
    return undefined as any;
  };

  const describe = (lines: string[], tags: string[]): string | undefined => {
    const ret: string = trimArray(
      lines
        .map((str) => str.trim())
        .filter((str) =>
          tags.every((tag) => str.startsWith(`@${tag}`) === false),
        ),
    ).join("\n");
    return ret.length === 0 ? undefined : ret;
  };

  const trimArray = (array: string[]): string[] => {
    let first: number = 0;
    let last: number = array.length - 1;

    for (; first < array.length; ++first)
      if (array[first]!.trim().length !== 0) break;
    for (; last >= 0; --last) if (array[last]!.trim().length !== 0) break;
    return array.slice(first, last + 1);
  };
}
