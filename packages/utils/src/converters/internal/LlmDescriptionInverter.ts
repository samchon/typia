import { ILlmSchema, OpenApi } from "@typia/interface";

import { OpenApiExclusiveEmender } from "./OpenApiExclusiveEmender";

/**
 * Reader for the constraints `OpenApiConstraintShifter` moved into a
 * description.
 *
 * The shifter and this reader are one pair, so they share one gate. The shifter
 * moves constraints into the description only under `strict`, so this reader
 * reads them back only under `strict` too: every function here takes the config
 * that produced the schema and reports nothing outside that mode.
 *
 * Without that gate an `@minimum 3` written by a documentation author would be
 * promoted to a constraint the type never declared, and, because these results
 * are spread over the live schema, the lookups that found nothing would delete
 * the real keywords a non-strict schema still carries.
 */
export namespace LlmDescriptionInverter {
  export const numeric = (props: {
    config: ILlmSchema.IConfig;
    description: string | undefined;
  }): Pick<
    OpenApi.IJsonSchema.INumber,
    | "minimum"
    | "maximum"
    | "exclusiveMinimum"
    | "exclusiveMaximum"
    | "multipleOf"
    | "default"
    | "description"
  > => {
    const description: string | undefined = read(props);
    if (description === undefined) return {};

    const lines: string[] = description.split("\n");
    return {
      ...compact({
        ...OpenApiExclusiveEmender.emend({
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
        }),
        // The write half shifts `default` into the description as `@default 7`
        // just like every other numeric keyword; restore it here so the numeric
        // path round-trips symmetrically with the string path.
        default: find({
          type: "number",
          name: "default",
          lines,
        }),
      }),
      description: describe(lines, [
        "minimum",
        "maximum",
        "exclusiveMinimum",
        "exclusiveMaximum",
        "multipleOf",
        "default",
      ]),
    };
  };

  export const string = (props: {
    config: ILlmSchema.IConfig;
    description: string | undefined;
  }): Pick<
    OpenApi.IJsonSchema.IString,
    | "format"
    | "pattern"
    | "contentMediaType"
    | "minLength"
    | "maxLength"
    | "default"
    | "description"
  > => {
    const description: string | undefined = read(props);
    if (description === undefined) return {};

    const lines: string[] = description.split("\n");
    return {
      ...compact({
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
        // The write half shifts `default` into the description as
        // `@default value`; restore it here so a documented string default is
        // read back rather than left behind as prose.
        default: find({
          type: "string",
          name: "default",
          lines,
        }),
      }),
      description: describe(lines, [
        "format",
        "pattern",
        "contentMediaType",
        "minLength",
        "maxLength",
        "default",
      ]),
    };
  };

  export const array = (props: {
    config: ILlmSchema.IConfig;
    description: string | undefined;
  }): Pick<
    OpenApi.IJsonSchema.IArray,
    "minItems" | "maxItems" | "uniqueItems" | "description"
  > => {
    const description: string | undefined = read(props);
    if (description === undefined) return {};

    const lines: string[] = description.split("\n");
    return {
      ...compact({
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
      }),
      description: describe(lines, ["minItems", "maxItems", "uniqueItems"]),
    };
  };

  /**
   * Yield the description to read, or nothing when this mode wrote no tags.
   *
   * Only a `strict` conversion shifts constraints into the description. Under
   * any other config there is nothing to read back, whatever the description
   * happens to say.
   */
  const read = (props: {
    config: ILlmSchema.IConfig;
    description: string | undefined;
  }): string | undefined =>
    props.config.strict === true ? props.description : undefined;

  /**
   * Drop the keys whose tag lookup found nothing.
   *
   * Every value returned from here is spread over a real schema, so a key
   * present with an `undefined` value does not mean "no constraint" — it is an
   * instruction to delete the schema's own constraint. Only a tag that was
   * actually found may reach that spread. `description` is exempt and stays on
   * the result even when `undefined`, because rewriting it to drop the consumed
   * tag lines is the point rather than an accident of a failed lookup.
   */
  const compact = <T extends object>(record: T): Partial<T> =>
    Object.fromEntries(
      Object.entries(record).filter(([, value]) => value !== undefined),
    ) as Partial<T>;

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
