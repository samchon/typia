import ts from "typescript";

import { IMetadataTypeTag } from "../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../schemas/metadata/Metadata";

import { MetadataTypeTagFactory } from "./MetadataTypeTagFactory";

/**
 * Extremely hard coded, but no reason to maintain.
 *
 * @internal
 */
export namespace MetadataCommentTagFactory {
    export const analyze =
        (identifier: () => string) =>
        (metadata: Metadata) =>
        (commentList: ts.JSDocTagInfo[]) => {
            for (const comment of commentList) {
                const tagger: TagRecord = parse(identifier)(comment);
                for (const [key, value] of Object.entries(tagger)) {
                    if (key === "array") {
                        if (metadata.arrays.length === 0)
                            throw new Error(
                                `${LABEL}: ${
                                    comment.name
                                } requires array type, no on "${identifier()}".`,
                            );
                        for (const a of metadata.arrays)
                            for (const tags of a.tags ?? [])
                                MetadataTypeTagFactory.validate("array")([
                                    ...tags,
                                    ...value,
                                ]);
                        for (const a of metadata.arrays)
                            if (a.tags.length === 0) a.tags.push(value);
                            else for (const tags of a.tags) tags.push(...value);
                    } else {
                        const atomic = metadata.atomics.find(
                            (a) => a.type == key,
                        );
                        if (atomic === undefined) {
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
                            throw new Error(
                                `${LABEL}: ${
                                    comment.name
                                } requires ${key} type, no on "${identifier()}".`,
                            );
                        }
                        for (const tags of atomic.tags ?? [])
                            MetadataTypeTagFactory.validate(key as "string")([
                                ...tags,
                                ...value,
                            ]);

                        if (atomic.tags.length === 0) atomic.tags.push(value);
                        else
                            for (const tags of atomic.tags) tags.push(...value);
                    }
                }
            }
        };

    const parse =
        (identifier: () => string) =>
        (comment: ts.JSDocTagInfo): TagRecord => {
            const parser = PARSER[comment.name];
            if (parser === undefined) return {};

            const text = (comment.text || [])[0]?.text;
            if (text === undefined)
                throw new Error(
                    `${LABEL}: no comment tag value on ${identifier()}`,
                );

            return parser(identifier)(text);
        };
}

type TagRecord = {
    [P in Target]?: IMetadataTypeTag[];
};
type Target = "bigint" | "number" | "string" | "array";

const PARSER: Record<
    string,
    (identifier: () => string) => (text: string) => {
        [P in Target]?: IMetadataTypeTag[];
    }
> = {
    /* -----------------------------------------------------------
        ARRAY
    ----------------------------------------------------------- */
    items: (identifier) => (Value) => ({
        array: [
            {
                name: `MinItems<${Value}>`,
                target: "array",
                kind: "minItems",
                value: parse_integer(identifier)(true)(Value),
                validate: `${Value} <= $input.length`,
                exclusive: true,
            },
            {
                name: `MaxItems<${Value}>`,
                target: "array",
                kind: "maxItems",
                value: parse_integer(identifier)(true)(Value),
                validate: `$input.length <= ${Value}`,
                exclusive: true,
            },
        ],
    }),
    minItems: (identifier) => (Value) => ({
        array: [
            {
                name: `MinItems<${Value}>`,
                target: "array",
                kind: "minItems",
                value: parse_integer(identifier)(true)(Value),
                validate: `${Value} <= $input.length`,
                exclusive: true,
            },
        ],
    }),
    maxItems: (identifier) => (Value) => ({
        array: [
            {
                name: `MaxItems<${Value}>`,
                target: "array",
                kind: "maxItems",
                value: parse_integer(identifier)(true)(Value),
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
                    name: `Type<${Value}>`,
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
                              name: `Type<${Value}>`,
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
    minimum: (identifier) => (Value) => ({
        number: [
            {
                name: `Minimum<${Value}>`,
                target: "number",
                kind: "minimum",
                value: parse_number(identifier)(Value),
                validate: `${Value} <= $input`,
                exclusive: ["minimum", "exclusiveMinimum"],
            },
        ],
        bigint: [
            {
                name: `Minimum<${Value}n>`,
                target: "bigint",
                kind: "minimum",
                value: BigInt(parse_integer(identifier)(false)(Value)),
                validate: `${Value} <= $input`,
                exclusive: ["minimum", "exclusiveMinimum"],
            },
        ],
    }),
    maximum: (identifier) => (Value) => ({
        number: [
            {
                name: `Maximum<${Value}>`,
                target: "number",
                kind: "maximum",
                value: parse_number(identifier)(Value),
                validate: `$input <= ${Value}`,
                exclusive: ["maximum", "exclusiveMaximum"],
            },
        ],
        bigint: [
            {
                name: `Maximum<${Value}n>`,
                target: "bigint",
                kind: "maximum",
                value: BigInt(parse_integer(identifier)(false)(Value)),
                validate: `$input <= ${Value}`,
                exclusive: ["maximum", "exclusiveMaximum"],
            },
        ],
    }),
    exclusiveMinimum: (identifier) => (Value) => ({
        number: [
            {
                name: `ExclusiveMinimum<${Value}>`,
                target: "number",
                kind: "exclusiveMinimum",
                value: parse_number(identifier)(Value),
                validate: `${Value} < $input`,
                exclusive: ["minimum", "exclusiveMinimum"],
            },
        ],
        bigint: [
            {
                name: `ExclusiveMinimum<${Value}n>`,
                target: "bigint",
                kind: "exclusiveMinimum",
                value: BigInt(parse_integer(identifier)(false)(Value)),
                validate: `${Value} < $input`,
                exclusive: ["minimum", "exclusiveMinimum"],
            },
        ],
    }),
    exclusiveMaximum: (identifier) => (Value) => ({
        number: [
            {
                name: `ExclusiveMaximum<${Value}>`,
                target: "number",
                kind: "exclusiveMaximum",
                value: parse_number(identifier)(Value),
                validate: `$input < ${Value}`,
                exclusive: ["maximum", "exclusiveMaximum"],
            },
        ],
        bigint: [
            {
                name: `ExclusiveMaximum<${Value}n>`,
                target: "bigint",
                kind: "exclusiveMaximum",
                value: BigInt(parse_integer(identifier)(false)(Value)),
                validate: `$input < ${Value}`,
                exclusive: ["maximum", "exclusiveMaximum"],
            },
        ],
    }),
    multipleOf: (identifier) => (Value) => ({
        number: [
            {
                name: `MultipleOf<${Value}>`,
                target: "number",
                kind: "multipleOf",
                value: parse_number(identifier)(Value),
                validate: `$input % ${Value} === 0`,
                exclusive: true,
            },
        ],
        bigint: [
            {
                name: `MultipleOf<${Value}n>`,
                target: "bigint",
                kind: "multipleOf",
                value: BigInt(parse_integer(identifier)(false)(Value)),
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
                    name: `Format<${matched[0]}>`,
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
                name: `Pattern<${Value}>`,
                target: "string",
                kind: "pattern",
                value: Value,
                validate: `RegExp(/${Value}/).test($input)`,
                exclusive: ["format"],
            },
        ],
    }),
    length: (identifier) => (Value) => ({
        string: [
            {
                name: `MinLength<${Value}>`,
                target: "string",
                kind: "minLength",
                value: parse_number(identifier)(Value),
                validate: `${Value} <= $input.length`,
                exclusive: true,
            },
            {
                name: `MaxLength<${Value}>`,
                target: "string",
                kind: "maxLength",
                value: parse_number(identifier)(Value),
                validate: `$input.length <= ${Value}`,
                exclusive: true,
            },
        ],
    }),
    minLength: (identifier) => (Value) => ({
        string: [
            {
                name: `MinLength<${Value}>`,
                target: "string",
                kind: "minLength",
                value: parse_number(identifier)(Value),
                validate: `${Value} <= $input.length`,
                exclusive: true,
            },
        ],
    }),
    maxLength: (identifier) => (Value) => ({
        string: [
            {
                name: `MaxLength<${Value}>`,
                target: "string",
                kind: "maxLength",
                value: parse_number(identifier)(Value),
                validate: `$input.length <= ${Value}`,
                exclusive: true,
            },
        ],
    }),
};

const parse_number =
    (identifier: () => string) =>
    (str: string): number => {
        const value: number = Number(str);
        if (isNaN(value) === true)
            throw new Error(`${LABEL}: invalid number on "${identifier()}".`);
        return value;
    };

const parse_integer =
    (identifier: () => string) =>
    (unsigned: boolean) =>
    (str: string): number => {
        const value: number = parse_number(identifier)(str);
        if (Math.floor(value) !== value)
            throw new Error(`${LABEL}: invalid integer on "${identifier()}".`);
        else if (unsigned === true && value < 0)
            throw new Error(
                `${LABEL}: invalid unsigned integer on "${identifier()}".`,
            );
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

const LABEL = "Error on typia.MetadataCommentTagFactory.generate()";
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
