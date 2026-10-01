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
 *
 * @evidence contracts/common.md#principled-implementation The reader and the constraint shifter are one pair gated on strict mode, so constraints are read back only where they were written; without the gate, prose such as `@minimum 3` would become a constraint the type never declared and the spread would delete real keywords.
 * @evidence contracts/common.md#clear-and-simple-design Three public readers share private helpers to read the strict gate, find a tag, drop unfound keys and rebuild the description.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The gate is stated and applied in one place; unfound tags are removed before spreading instead of compensating afterward.
 * @evidence contracts/common.md#meaningful-documentation The namespace comment explains the pairing and why the gate exists, and private helpers explain the compact rule.
 */
export namespace LlmDescriptionInverter {
  /**
   * Read numeric constraints back from the description of a strict LLM schema.
   *
   * @param props.config Configuration the schema was converted with
   * @param props.description Description that may carry constraint tags
   *
   * @returns Constraint keywords found in the tags and the description without
   *   them
   *
   * @evidence contracts/common.md#principled-implementation Tags for bounds, multipleOf and default are parsed as numbers, with the exclusive and inclusive bound pair settled, and every consumed tag line is removed from the description; a value that is not a number yields no keyword. Outside strict mode nothing is read.
   * @evidence contracts/common.md#clear-and-simple-design One function listing the keys it owns, using the shared tag finder.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Only tags actually found reach the result, so a failed lookup cannot delete a real schema keyword.
   * @evidence contracts/common.md#meaningful-documentation The doc names the arguments and the result; inline comments explain the default tag.
   */
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

  /**
   * Read string constraints back from the description of a strict LLM schema.
   *
   * @param props.config Configuration the schema was converted with
   * @param props.description Description that may carry constraint tags
   *
   * @returns Constraint keywords found in the tags and the description without
   *   them
   *
   * @evidence contracts/common.md#principled-implementation Tags for format, pattern, content type, length bounds and default are read as strings or numbers and consumed from the description, and nothing is read outside strict mode.
   * @evidence contracts/common.md#clear-and-simple-design One function mirroring numeric for the string keys.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Only tags actually found reach the result.
   * @evidence contracts/common.md#meaningful-documentation The doc names the arguments and the result.
   */
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

  /**
   * Read array constraints back from the description of a strict LLM schema.
   *
   * @param props.config Configuration the schema was converted with
   * @param props.description Description that may carry constraint tags
   *
   * @returns Constraint keywords found in the tags and the description without
   *   them
   *
   * @evidence contracts/common.md#principled-implementation Tags for item bounds and uniqueness are read, where the presence of a `@uniqueItems` line means true, and consumed from the description; nothing is read outside strict mode.
   * @evidence contracts/common.md#clear-and-simple-design One function mirroring numeric for the array keys.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Only tags actually found reach the result.
   * @evidence contracts/common.md#meaningful-documentation The doc names the arguments and the result.
   */
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
