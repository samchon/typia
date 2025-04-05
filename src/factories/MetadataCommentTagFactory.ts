import ts from "typescript";

import { IMetadataTypeTag } from "../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../schemas/metadata/Metadata";

import { Writable } from "../typings/Writable";

import { FormatCheatSheet } from "../tags/internal/FormatCheatSheet";
import { MetadataFactory } from "./MetadataFactory";
import { MetadataTypeTagFactory } from "./MetadataTypeTagFactory";

/**
 * @internal
 */
export namespace MetadataCommentTagFactory {
  export const analyze = (props: {
    errors: MetadataFactory.IError[];
    metadata: Metadata;
    tags: ts.JSDocTagInfo[];
    explore: MetadataFactory.IExplore;
  }): void => {
    // PREPARE MESSAGE CONTAINER
    const messages: string[] = [];
    const report = (msg: string) => {
      messages.push(msg);
      return null;
    };
    const validateReport = (next: {
      property: string | null;
      message: string;
    }): false => {
      messages.push(
        `the property ${
          next.property === null
            ? `["typia.tag"]`
            : `["typia.tag.${next.property}"]`
        } ${next.message}.`,
      );
      return false;
    };

    // VALIDATE AND CONSTRUCT COMMENT TAGS
    for (const tag of props.tags) {
      const tagger: TagRecord | null = parse({
        report,
        tag,
      });
      if (tagger === null) continue;
      for (const [key, value] of Object.entries(tagger)) {
        const filtered: IMetadataTypeTag[] = value.filter(
          (v) => v.validate !== null,
        ) as IMetadataTypeTag[];
        if (key === "array") {
          if (props.metadata.arrays.length === 0) {
            report(`requires array type`);
            continue;
          }
          for (const a of props.metadata.arrays) {
            Writable(a).tags = a.tags.filter((x) =>
              MetadataTypeTagFactory.validate({
                report: validateReport,
                type: "array",
                tags: [...x, ...filtered],
              }),
            );
            if (a.tags.length === 0) a.tags.push(filtered);
            else for (const tags of a.tags) tags.push(...filtered);
          }
        } else {
          const atomic = props.metadata.atomics.find((a) => a.type == key);
          if (atomic === undefined)
            if (key === "bigint" || key === "number") {
              const opposite = key === "bigint" ? "number" : "bigint";
              if (
                tagger[opposite] !== undefined &&
                props.metadata.atomics.some((a) => a.type === opposite)
              )
                continue;
            } else if (
              key === "string" &&
              value[0]?.kind === "format" &&
              value[0]?.value === "date-time"
            )
              continue;
            else report(`requires ${key} type`);
          else {
            Writable(atomic).tags = atomic.tags.filter((x) =>
              MetadataTypeTagFactory.validate({
                report: validateReport,
                type: key as "string",
                tags: [...x, ...filtered],
              }),
            );
            if (atomic.tags.length === 0) atomic.tags.push(filtered);
            else for (const tags of atomic.tags) tags.push(...filtered);
          }
        }
      }
    }

    // DO REPORT
    if (messages.length !== 0)
      props.errors.push({
        name: "comment tag(s)",
        explore: props.explore,
        messages,
      });
  };

  const parse = (props: {
    report: (msg: string) => null;
    tag: ts.JSDocTagInfo;
  }): TagRecord | null => {
    const next = PARSER[props.tag.name];
    if (next === undefined) return {};

    const value = (props.tag.text || [])[0]?.text;
    if (value === undefined && props.tag.name !== "uniqueItems")
      return props.report(`no comment tag value`);
    return next({
      report: props.report,
      value: value!,
    });
  };

  export const get = (props: {
    kind: string;
    type: "array" | "bigint" | "number" | "string";
    value: string;
  }): IMetadataTypeTag[] => {
    const output: IMetadataTypeTag[] | undefined = PARSER[props.kind]?.({
      report: () => null,
      value: props.value,
    })?.[props.type];
    if (output === undefined)
      throw new Error(
        `no tag found for (kind: ${props.kind}, type: ${props.type}).`,
      );
    return output;
  };
}

/**
 * @internal
 */
type TagRecord = {
  [P in Target]?: NotDeterminedTypeTag[];
};

/**
 * @internal
 */
type Target = "bigint" | "number" | "string" | "array";

/**
 * @internal
 */
type NotDeterminedTypeTag = Omit<IMetadataTypeTag, "validate" | "schema"> & {
  validate: string | undefined;
  schema: object | undefined;
};

/**
 * @internal
 */
const PARSER: Record<
  string,
  (props: { report: (msg: string) => null; value: string }) => {
    [P in Target]?: NotDeterminedTypeTag[];
  }
> = {
  /* -----------------------------------------------------------
        ARRAY
    ----------------------------------------------------------- */
  items: ({ report, value }) => ({
    array: [
      {
        name: `MinItems<${value}>`,
        target: "array",
        kind: "minItems",
        value: parse_integer({
          report,
          value,
          unsigned: true,
        }),
        validate: `${value} <= $input.length`,
        exclusive: true,
        schema: {
          minItems: parse_integer({
            report,
            value,
            unsigned: true,
          }),
        },
      },
      {
        name: `MaxItems<${value}>`,
        target: "array",
        kind: "maxItems",
        value: parse_integer({
          report,
          value,
          unsigned: true,
        }),
        validate: `$input.length <= ${value}`,
        exclusive: true,
        schema: {
          maxItems: parse_integer({
            report,
            unsigned: true,
            value,
          }),
        },
      },
    ],
  }),
  minItems: ({ report, value }) => ({
    array: [
      {
        name: `MinItems<${value}>`,
        target: "array",
        kind: "minItems",
        value: parse_integer({
          report,
          value,
          unsigned: true,
        }),
        validate: `${value} <= $input.length`,
        exclusive: true,
        schema: {
          minItems: parse_integer({
            report,
            value,
            unsigned: true,
          }),
        },
      },
    ],
  }),
  maxItems: ({ report, value }) => ({
    array: [
      {
        name: `MaxItems<${value}>`,
        target: "array",
        kind: "maxItems",
        value: parse_integer({
          report,
          value,
          unsigned: true,
        }),
        validate: `$input.length <= ${value}`,
        exclusive: true,
        schema: {
          maxItems: parse_integer({
            report,
            value,
            unsigned: true,
          }),
        },
      },
    ],
  }),
  uniqueItems: () => ({
    array: [
      {
        name: `UniqueItems`,
        target: "array",
        kind: "uniqueItems",
        value: true,
        validate: `$input.length <= 1 || (new Set($input).size === $input.length)`,
        exclusive: true,
        schema: {
          uniqueItems: true,
        },
      },
    ],
  }),

  /* -----------------------------------------------------------
        NUMBER
    ----------------------------------------------------------- */
  type: ({ value }) => {
    // EMENDATIONS
    if (value.startsWith("{") && value.endsWith("}"))
      value = value.substring(1, value.length - 1);
    if (value === "int") value = "int32";
    else if (value === "uint") value = "uint32";

    // MUST BE ONE OF THEM
    if (
      ["int32", "uint32", "int64", "uint64", "float", "double"].includes(
        value,
      ) === false
    )
      return {};
    return {
      number: [
        {
          name: `Type<${JSON.stringify(value)}>`,
          target: "number",
          kind: "type",
          value: value,
          validate:
            value === "int32"
              ? `Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647`
              : value === "uint32"
                ? `Math.floor($input) === $input && 0 <= $input && $input <= 4294967295`
                : value === "int64"
                  ? `Math.floor($input) === $input && -9223372036854775808 <= $input && $input <= 9223372036854775807`
                  : value === "uint64"
                    ? `Math.floor($input) === $input && 0 <= $input && $input <= 18446744073709551615`
                    : value === "float"
                      ? `-1.175494351e38 <= $input && $input <= 3.4028235e38`
                      : `true`,
          exclusive: true,
          schema: ["int32", "int64"].includes(value)
            ? { type: "integer" }
            : ["uint32", "uint64"].includes(value)
              ? { type: "integer", minimum: 0 }
              : undefined,
        },
      ],
      bigint:
        value === "int64" || "uint64"
          ? [
              {
                name: `Type<${JSON.stringify(value)}>`,
                target: "bigint",
                kind: "type",
                value: value,
                validate: value === "int64" ? "true" : "BigInt(0) <= $input",
                exclusive: true,
                schema: value === "uint64" ? { minimum: 0 } : undefined,
              },
            ]
          : [],
    };
  },
  minimum: (props) => ({
    number: [
      {
        name: `Minimum<${props.value}>`,
        target: "number",
        kind: "minimum",
        value: parse_number(props),
        validate: `${props.value} <= $input`,
        exclusive: ["minimum", "exclusiveMinimum"],
        schema: {
          minimum: parse_number(props),
        },
      },
    ],
    bigint: [
      {
        name: `Minimum<${props.value}n>`,
        target: "bigint",
        kind: "minimum",
        value: (() => {
          const parsed = parse_integer({
            report: props.report,
            value: props.value,
            unsigned: false,
          });
          return parsed === null ? null : BigInt(parsed);
        })(),
        validate: `${props.value} <= $input`,
        exclusive: ["minimum", "exclusiveMinimum"],
        schema: {
          minimum: parse_number(props),
        },
      },
    ],
  }),
  maximum: (props) => ({
    number: [
      {
        name: `Maximum<${props.value}>`,
        target: "number",
        kind: "maximum",
        value: parse_number(props),
        validate: `$input <= ${props.value}`,
        exclusive: ["maximum", "exclusiveMaximum"],
        schema: {
          maximum: parse_number(props),
        },
      },
    ],
    bigint: [
      {
        name: `Maximum<${props.value}n>`,
        target: "bigint",
        kind: "maximum",
        value: (() => {
          const parsed = parse_integer({
            report: props.report,
            value: props.value,
            unsigned: false,
          });
          return parsed === null ? null : BigInt(parsed);
        })(),
        validate: `$input <= ${props.value}`,
        exclusive: ["maximum", "exclusiveMaximum"],
        schema: {
          maximum: parse_number(props),
        },
      },
    ],
  }),
  exclusiveMinimum: (props) => ({
    number: [
      {
        name: `ExclusiveMinimum<${props.value}>`,
        target: "number",
        kind: "exclusiveMinimum",
        value: parse_number(props),
        validate: `${props.value} < $input`,
        exclusive: ["minimum", "exclusiveMinimum"],
        schema: {
          exclusiveMinimum: parse_number(props),
        },
      },
    ],
    bigint: [
      {
        name: `ExclusiveMinimum<${props.value}n>`,
        target: "bigint",
        kind: "exclusiveMinimum",
        value: (() => {
          const parsed = parse_integer({
            report: props.report,
            value: props.value,
            unsigned: false,
          });
          return parsed === null ? null : BigInt(parsed);
        })(),
        validate: `${props.value} < $input`,
        exclusive: ["minimum", "exclusiveMinimum"],
        schema: {
          exclusiveMinimum: parse_number(props),
        },
      },
    ],
  }),
  exclusiveMaximum: (props) => ({
    number: [
      {
        name: `ExclusiveMaximum<${props.value}>`,
        target: "number",
        kind: "exclusiveMaximum",
        value: parse_number(props),
        validate: `$input < ${props.value}`,
        exclusive: ["maximum", "exclusiveMaximum"],
        schema: {
          exclusiveMaximum: parse_number(props),
        },
      },
    ],
    bigint: [
      {
        name: `ExclusiveMaximum<${props.value}n>`,
        target: "bigint",
        kind: "exclusiveMaximum",
        value: (() => {
          const parsed = parse_integer({
            report: props.report,
            value: props.value,
            unsigned: false,
          });
          return parsed === null ? null : BigInt(parsed);
        })(),
        validate: `$input < ${props.value}`,
        exclusive: ["maximum", "exclusiveMaximum"],
        schema: {
          exclusiveMaximum: parse_number(props),
        },
      },
    ],
  }),
  multipleOf: (props) => ({
    number: [
      {
        name: `MultipleOf<${props.value}>`,
        target: "number",
        kind: "multipleOf",
        value: parse_number(props),
        validate: `$input % ${props.value} === 0`,
        exclusive: true,
        schema: {
          multipleOf: parse_number(props),
        },
      },
    ],
    bigint: [
      {
        name: `MultipleOf<${props.value}n>`,
        target: "bigint",
        kind: "multipleOf",
        value: (() => {
          const parsed = parse_integer({
            report: props.report,
            value: props.value,
            unsigned: false,
          });
          return parsed === null ? null : BigInt(parsed);
        })(),
        validate: `$input % ${props.value}n === 0n`,
        exclusive: true,
        schema: {
          multipleOf: parse_number(props),
        },
      },
    ],
  }),

  /* -----------------------------------------------------------
        STRING
    ----------------------------------------------------------- */
  format: ({ value }) => {
    const matched = FORMATS.get(value);
    if (matched === undefined) return {};
    return {
      string: [
        {
          name: `Format<${JSON.stringify(matched[0])}>`,
          target: "string",
          kind: "format",
          value: matched[0],
          validate: matched[1],
          exclusive: true,
          schema: {
            format: matched[0],
          },
        },
      ],
    };
  },
  pattern: ({ value }) => ({
    string: [
      {
        name: `Pattern<${JSON.stringify(value)}>`,
        target: "string",
        kind: "pattern",
        value: value,
        validate: `RegExp(${JSON.stringify(value)}).test($input)`,
        exclusive: ["format"],
        schema: {
          pattern: value,
        },
      },
    ],
  }),
  length: (props) => ({
    string: [
      {
        name: `MinLength<${props.value}>`,
        target: "string",
        kind: "minLength",
        value: parse_number(props),
        validate: `${props.value} <= $input.length`,
        exclusive: true,
        schema: {
          minLength: parse_number(props),
        },
      },
      {
        name: `MaxLength<${props.value}>`,
        target: "string",
        kind: "maxLength",
        value: parse_number(props),
        validate: `$input.length <= ${props.value}`,
        exclusive: true,
        schema: {
          maxLength: parse_number(props),
        },
      },
    ],
  }),
  minLength: ({ report, value }) => ({
    string: [
      {
        name: `MinLength<${value}>`,
        target: "string",
        kind: "minLength",
        value: parse_number({ report, value }),
        validate: `${value} <= $input.length`,
        exclusive: true,
        schema: {
          minLength: parse_number({ report, value }),
        },
      },
    ],
  }),
  maxLength: ({ report, value }) => ({
    string: [
      {
        name: `MaxLength<${value}>`,
        target: "string",
        kind: "maxLength",
        value: parse_number({ report, value }),
        validate: `$input.length <= ${value}`,
        exclusive: true,
        schema: {
          maxLength: parse_number({ report, value }),
        },
      },
    ],
  }),
};

/**
 * @internal
 */
const parse_number = (props: {
  report: (msg: string) => null;
  value: string;
}): number | null => {
  const parsed: number = Number(props.value);
  if (isNaN(parsed) === true) return props.report(`invalid number`);
  return parsed;
};

/**
 * @internal
 */
const parse_integer = (props: {
  report: (msg: string) => null;
  unsigned: boolean;
  value: string;
}): number | null => {
  const parsed: number | null = parse_number(props);
  if (parsed === null) return null;
  else if (Math.floor(parsed) !== parsed)
    return props.report(`invalid integer`);
  else if (props.unsigned === true && parsed < 0)
    return props.report(`invalid unsigned integer`);
  return parsed;
};

/**
 * @internal
 */
const FORMATS: Map<string, [string, string]> = new Map([
  ...Object.entries(FormatCheatSheet).map(
    ([key, value]) => [key, [key, value]] as any,
  ),
  ["datetime", ["date-time", `!isNaN(new Date($input).getTime())`]],
  ["dateTime", ["date-time", `!isNaN(new Date($input).getTime())`]],
]);
