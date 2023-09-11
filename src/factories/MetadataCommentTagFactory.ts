import ts from "typescript";

import { IMetadataTypeTag } from "../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../schemas/metadata/Metadata";

import { Writable } from "../typings/Writable";

import { MetadataFactory } from "./MetadataFactory";
import { MetadataTypeTagFactory } from "./MetadataTypeTagFactory";

/**
 * Extremely hard coded, but no reason to maintain.
 *
 * @internal
 */
export namespace MetadataCommentTagFactory {
    export const analyze =
        (errors: MetadataFactory.IError[]) =>
        (metadata: Metadata) =>
        (
            commentList: ts.JSDocTagInfo[],
            explore: MetadataFactory.IExplore,
        ): void => {
            // PREPARE MESSAGE CONTAINER
            const messages: string[] = [];
            const report = (msg: string) => {
                messages.push(msg);
                return null;
            };
            const validateReport =
                (property: string | null) =>
                (msg: string): false => {
                    messages.push(
                        `the property ${
                            property === null
                                ? `["typia.tag"]`
                                : `["typia.tag.${property}"]`
                        } ${msg}.`,
                    );
                    return false;
                };

            // VALIDATE AND CONSTRUCT COMMENT TAGS
            for (const comment of commentList) {
                const tagger: TagRecord | null = parse(report)(comment);
                if (tagger === null) continue;
                for (const [key, value] of Object.entries(tagger)) {
                    const filtered: IMetadataTypeTag[] = value.filter(
                        (v) => v.validate !== null,
                    ) as IMetadataTypeTag[];
                    if (key === "array") {
                        if (metadata.arrays.length === 0) {
                            report(`requires array type`);
                            continue;
                        }
                        for (const a of metadata.arrays) {
                            Writable(a).tags = a.tags.filter((x) =>
                                MetadataTypeTagFactory.validate(validateReport)(
                                    "array",
                                )([...x, ...filtered]),
                            );
                            if (a.tags.length === 0) a.tags.push(filtered);
                            else
                                for (const tags of a.tags)
                                    tags.push(...filtered);
                        }
                    } else {
                        const atomic = metadata.atomics.find(
                            (a) => a.type == key,
                        );
                        if (atomic === undefined)
                            if (key === "bigint" || key === "number") {
                                const opposite =
                                    key === "bigint" ? "number" : "bigint";
                                if (
                                    tagger[opposite] !== undefined &&
                                    metadata.atomics.some(
                                        (a) => a.type === opposite,
                                    )
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
                                MetadataTypeTagFactory.validate(validateReport)(
                                    key as "string",
                                )([...x, ...filtered]),
                            );
                            if (atomic.tags.length === 0)
                                atomic.tags.push(filtered);
                            else
                                for (const tags of atomic.tags)
                                    tags.push(...filtered);
                        }
                    }
                }
            }

            // DO REPORT
            if (messages.length !== 0)
                errors.push({
                    name: "comment tag(s)",
                    explore,
                    messages,
                });
        };

    const parse =
        (report: (msg: string) => null) =>
        (comment: ts.JSDocTagInfo): TagRecord | null => {
            const parser = PARSER[comment.name];
            if (parser === undefined) return {};

            const text = (comment.text || [])[0]?.text;
            if (text === undefined) return report(`no comment tag value`);
            return parser(report)(text);
        };
}

type TagRecord = {
    [P in Target]?: NotDeterminedTypeTag[];
};
type Target = "bigint" | "number" | "string" | "array";
type NotDeterminedTypeTag = Omit<IMetadataTypeTag, "validate"> & {
    validate: string | null;
};

const PARSER: Record<
    string,
    (report: (msg: string) => null) => (text: string) => {
        [P in Target]?: NotDeterminedTypeTag[];
    }
> = {
    /* -----------------------------------------------------------
        ARRAY
    ----------------------------------------------------------- */
    items: (report) => (Value) => ({
        array: [
            {
                name: `MinItems<${Value}>`,
                target: "array",
                kind: "minItems",
                value: parse_integer(report)(true)(Value),
                validate: `${Value} <= $input.length`,
                exclusive: true,
            },
            {
                name: `MaxItems<${Value}>`,
                target: "array",
                kind: "maxItems",
                value: parse_integer(report)(true)(Value),
                validate: `$input.length <= ${Value}`,
                exclusive: true,
            },
        ],
    }),
    minItems: (report) => (Value) => ({
        array: [
            {
                name: `MinItems<${Value}>`,
                target: "array",
                kind: "minItems",
                value: parse_integer(report)(true)(Value),
                validate: `${Value} <= $input.length`,
                exclusive: true,
            },
        ],
    }),
    maxItems: (report) => (Value) => ({
        array: [
            {
                name: `MaxItems<${Value}>`,
                target: "array",
                kind: "maxItems",
                value: parse_integer(report)(true)(Value),
                validate: `$input.length <= ${Value}`,
                exclusive: true,
            },
        ],
    }),

    /* -----------------------------------------------------------
        NUMBER
    ----------------------------------------------------------- */
    type: () => (Value) => {
        // EMENDATIONS
        if (Value.startsWith("{") && Value.endsWith("}"))
            Value = Value.substring(1, Value.length - 1);
        if (Value === "int") Value = "int32";
        else if (Value === "uint") Value = "uint32";

        // MUST BE ONE OF THEM
        if (
            ["int32", "uint32", "int64", "uint64", "float", "double"].includes(
                Value,
            ) === false
        )
            return {};
        return {
            number: [
                {
                    name: `Type<${JSON.stringify(Value)}>`,
                    target: "number",
                    kind: "type",
                    value: Value,
                    validate:
                        Value === "int32"
                            ? `Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647`
                            : Value === "uint32"
                            ? `Math.floor($input) === $input && 0 <= $input && $input <= 4294967295`
                            : Value === "int64"
                            ? `Math.floor($input) === $input && -9223372036854775808 <= $input && $input <= 9223372036854775807`
                            : Value === "uint64"
                            ? `Math.floor($input) === $input && 0 <= $input && $input <= 18446744073709551615`
                            : Value === "float"
                            ? `-1.175494351e38 <= $input && $input <= 3.4028235e38`
                            : `true`,
                    exclusive: true,
                },
            ],
            bigint:
                Value === "int64" || "uint64"
                    ? [
                          {
                              name: `Type<${JSON.stringify(Value)}>`,
                              target: "bigint",
                              kind: "type",
                              value: Value,
                              validate:
                                  Value === "int64"
                                      ? "true"
                                      : "BigInt(0) <= $input",
                              exclusive: true,
                          },
                      ]
                    : [],
        };
    },
    minimum: (report) => (Value) => ({
        number: [
            {
                name: `Minimum<${Value}>`,
                target: "number",
                kind: "minimum",
                value: parse_number(report)(Value),
                validate: `${Value} <= $input`,
                exclusive: ["minimum", "exclusiveMinimum"],
            },
        ],
        bigint: [
            {
                name: `Minimum<${Value}n>`,
                target: "bigint",
                kind: "minimum",
                value: (() => {
                    const value = parse_integer(report)(false)(Value);
                    return value === null ? null : BigInt(value);
                })(),
                validate: `${Value} <= $input`,
                exclusive: ["minimum", "exclusiveMinimum"],
            },
        ],
    }),
    maximum: (report) => (Value) => ({
        number: [
            {
                name: `Maximum<${Value}>`,
                target: "number",
                kind: "maximum",
                value: parse_number(report)(Value),
                validate: `$input <= ${Value}`,
                exclusive: ["maximum", "exclusiveMaximum"],
            },
        ],
        bigint: [
            {
                name: `Maximum<${Value}n>`,
                target: "bigint",
                kind: "maximum",
                value: (() => {
                    const value = parse_integer(report)(false)(Value);
                    return value === null ? null : BigInt(value);
                })(),
                validate: `$input <= ${Value}`,
                exclusive: ["maximum", "exclusiveMaximum"],
            },
        ],
    }),
    exclusiveMinimum: (report) => (Value) => ({
        number: [
            {
                name: `ExclusiveMinimum<${Value}>`,
                target: "number",
                kind: "exclusiveMinimum",
                value: parse_number(report)(Value),
                validate: `${Value} < $input`,
                exclusive: ["minimum", "exclusiveMinimum"],
            },
        ],
        bigint: [
            {
                name: `ExclusiveMinimum<${Value}n>`,
                target: "bigint",
                kind: "exclusiveMinimum",
                value: (() => {
                    const value = parse_integer(report)(false)(Value);
                    return value === null ? null : BigInt(value);
                })(),
                validate: `${Value} < $input`,
                exclusive: ["minimum", "exclusiveMinimum"],
            },
        ],
    }),
    exclusiveMaximum: (report) => (Value) => ({
        number: [
            {
                name: `ExclusiveMaximum<${Value}>`,
                target: "number",
                kind: "exclusiveMaximum",
                value: parse_number(report)(Value),
                validate: `$input < ${Value}`,
                exclusive: ["maximum", "exclusiveMaximum"],
            },
        ],
        bigint: [
            {
                name: `ExclusiveMaximum<${Value}n>`,
                target: "bigint",
                kind: "exclusiveMaximum",
                value: (() => {
                    const value = parse_integer(report)(false)(Value);
                    return value === null ? null : BigInt(value);
                })(),
                validate: `$input < ${Value}`,
                exclusive: ["maximum", "exclusiveMaximum"],
            },
        ],
    }),
    multipleOf: (report) => (Value) => ({
        number: [
            {
                name: `MultipleOf<${Value}>`,
                target: "number",
                kind: "multipleOf",
                value: parse_number(report)(Value),
                validate: `$input % ${Value} === 0`,
                exclusive: true,
            },
        ],
        bigint: [
            {
                name: `MultipleOf<${Value}n>`,
                target: "bigint",
                kind: "multipleOf",
                value: (() => {
                    const value = parse_integer(report)(false)(Value);
                    return value === null ? null : BigInt(value);
                })(),
                validate: `$input % ${Value}n === 0n`,
                exclusive: true,
            },
        ],
    }),

    /* -----------------------------------------------------------
        STRING
    ----------------------------------------------------------- */
    format: () => (Value) => {
        const matched = FORMATS.get(Value);
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
                },
            ],
        };
    },
    pattern: () => (Value) => ({
        string: [
            {
                name: `Pattern<${JSON.stringify(Value)}>`,
                target: "string",
                kind: "pattern",
                value: Value,
                validate: `RegExp(/${Value}/).test($input)`,
                exclusive: ["format"],
            },
        ],
    }),
    length: (report) => (Value) => ({
        string: [
            {
                name: `MinLength<${Value}>`,
                target: "string",
                kind: "minLength",
                value: parse_number(report)(Value),
                validate: `${Value} <= $input.length`,
                exclusive: true,
            },
            {
                name: `MaxLength<${Value}>`,
                target: "string",
                kind: "maxLength",
                value: parse_number(report)(Value),
                validate: `$input.length <= ${Value}`,
                exclusive: true,
            },
        ],
    }),
    minLength: (report) => (Value) => ({
        string: [
            {
                name: `MinLength<${Value}>`,
                target: "string",
                kind: "minLength",
                value: parse_number(report)(Value),
                validate: `${Value} <= $input.length`,
                exclusive: true,
            },
        ],
    }),
    maxLength: (report) => (Value) => ({
        string: [
            {
                name: `MaxLength<${Value}>`,
                target: "string",
                kind: "maxLength",
                value: parse_number(report)(Value),
                validate: `$input.length <= ${Value}`,
                exclusive: true,
            },
        ],
    }),
};

const parse_number =
    (report: (msg: string) => null) =>
    (str: string): number | null => {
        const value: number = Number(str);
        if (isNaN(value) === true) return report(`invalid number`);
        return value;
    };

const parse_integer =
    (report: (msg: string) => null) =>
    (unsigned: boolean) =>
    (str: string): number | null => {
        const value: number | null = parse_number(report)(str);
        if (value === null) return null;
        else if (Math.floor(value) !== value) return report(`invalid integer`);
        else if (unsigned === true && value < 0)
            return report(`invalid unsigned integer`);
        return value;
    };

type IMetadataCommentTag =
    // NUMBER
    | IMetadataCommentTag.IType
    | IMetadataCommentTag.IMinimum
    | IMetadataCommentTag.IMaximum
    | IMetadataCommentTag.IExclusiveMinimum
    | IMetadataCommentTag.IExclusiveMaximum
    | IMetadataCommentTag.IMultipleOf
    | IMetadataCommentTag.IStep
    // STRING
    | IMetadataCommentTag.IFormat
    | IMetadataCommentTag.IPattern
    | IMetadataCommentTag.ILength
    | IMetadataCommentTag.IMinLength
    | IMetadataCommentTag.IMaxLength
    // ARRAY
    | IMetadataCommentTag.IItems
    | IMetadataCommentTag.IMinItems
    | IMetadataCommentTag.IMaxItems;

namespace IMetadataCommentTag {
    /* -----------------------------------------------------------
        NUMBER
    ----------------------------------------------------------- */
    export interface IType {
        kind: "type";
        value:
            | "int"
            | "uint"
            | "int32"
            | "uint32"
            | "int64"
            | "uint64"
            | "float";
    }

    export interface IMinimum {
        kind: "minimum";
        value: number;
    }

    export interface IMaximum {
        kind: "maximum";
        value: number;
    }

    export interface IExclusiveMinimum {
        kind: "exclusiveMinimum";
        value: number;
    }

    export interface IExclusiveMaximum {
        kind: "exclusiveMaximum";
        value: number;
    }

    export interface IMultipleOf {
        kind: "multipleOf";
        value: number;
    }

    export interface IStep {
        kind: "step";
        value: number;
    }

    /* -----------------------------------------------------------
        STRING
    ----------------------------------------------------------- */
    export interface IFormat {
        kind: "format";
        value:
            | "uuid"
            | "email"
            | "url"
            | "ipv4"
            | "ipv6"
            | "date"
            | "date-time";
    }

    export interface IPattern {
        kind: "pattern";
        value: string;
    }

    export interface ILength {
        kind: "length";
        value: number;
    }

    export interface IMinLength {
        kind: "minLength";
        value: number;
    }

    export interface IMaxLength {
        kind: "maxLength";
        value: number;
    }

    /* -----------------------------------------------------------
        ARRAY   
    ----------------------------------------------------------- */
    export interface IItems {
        kind: "items";
        value: number;
    }

    export interface IMinItems {
        kind: "minItems";
        value: number;
    }

    export interface IMaxItems {
        kind: "maxItems";
        value: number;
    }
}

const FORMATS: Map<string, [IMetadataCommentTag.IFormat["value"], string]> =
    new Map([
        [
            "email",
            [
                "email",
                `/^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$/i.test($input)`,
            ],
        ],
        [
            "uuid",
            [
                "uuid",
                `/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test($input)`,
            ],
        ],
        [
            "ipv4",
            [
                "ipv4",
                `/^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test($input)`,
            ],
        ],
        [
            "ipv6",
            [
                "ipv6",
                `/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test($input)`,
            ],
        ],
        [
            "url",
            [
                "url",
                `/^[a-zA-Z0-9]+:\\/\\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test($input)`,
            ],
        ],
        ["date", ["date", `/^(\\d{4})-(\\d{2})-(\\d{2})$/.test($input)`]],
        ["datetime", ["date-time", `!isNaN(new Date($input).getTime())`]],
        ["date-time", ["date-time", `!isNaN(new Date($input).getTime())`]],
        ["dateTime", ["date-time", `!isNaN(new Date($input).getTime())`]],
    ]);
