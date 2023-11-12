import typia, { IJsonApplication, IJsonComponents } from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

interface IQuery {
    required: string;
    nonRequired: string | undefined;
    optional?: string;
    none?: string | undefined;
}
export const test_issue_831_optional = () => {
    const app: IJsonApplication = {
        schemas: [
            {
                $ref: "#/components/schemas/IQuery",
            },
            {
                $ref: "#/components/schemas/PartialIQuery",
            },
            {
                $ref: "#/components/schemas/RequiredIQuery",
            },
        ],
        components: {
            schemas: {
                IQuery: {
                    type: "object",
                    properties: {
                        required: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        nonRequired: {
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        optional: {
                            "x-typia-required": true,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        none: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                    },
                    nullable: false,
                    required: ["required"],
                    "x-typia-jsDocTags": [],
                },
                PartialIQuery: {
                    type: "object",
                    properties: {
                        required: {
                            "x-typia-required": true,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        nonRequired: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        optional: {
                            "x-typia-required": true,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        none: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                    },
                    nullable: false,
                    description: "Make all properties in T optional",
                    "x-typia-jsDocTags": [],
                },
                RequiredIQuery: {
                    type: "object",
                    properties: {
                        required: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        nonRequired: {
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        optional: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        none: {
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    nullable: false,
                    required: ["required", "optional"],
                    description: "Make all properties in T required",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    };
    const getter = (key: string) =>
        ((input: any): IJsonComponents.IObject => {
            const __is = (input: any): input is IJsonComponents.IObject => {
                const $io0 = (input: any): boolean =>
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    "object" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    "object" === typeof input.properties &&
                    null !== input.properties &&
                    false === Array.isArray(input.properties) &&
                    $io1(input.properties) &&
                    (undefined === input.patternProperties ||
                        ("object" === typeof input.patternProperties &&
                            null !== input.patternProperties &&
                            false === Array.isArray(input.patternProperties) &&
                            $io1(input.patternProperties))) &&
                    (undefined === input.additionalProperties ||
                        ("object" === typeof input.additionalProperties &&
                            null !== input.additionalProperties &&
                            false ===
                                Array.isArray(input.additionalProperties) &&
                            $iu0(input.additionalProperties))) &&
                    (undefined === input.required ||
                        (Array.isArray(input.required) &&
                            input.required.every(
                                (elem: any) => "string" === typeof elem,
                            ))) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            ))) &&
                    (undefined === input["x-typia-patternProperties"] ||
                        ("object" ===
                            typeof input["x-typia-patternProperties"] &&
                            null !== input["x-typia-patternProperties"] &&
                            false ===
                                Array.isArray(
                                    input["x-typia-patternProperties"],
                                ) &&
                            $io1(input["x-typia-patternProperties"]))) &&
                    (undefined === input["x-typia-additionalProperties"] ||
                        ("object" ===
                            typeof input["x-typia-additionalProperties"] &&
                            null !== input["x-typia-additionalProperties"] &&
                            false ===
                                Array.isArray(
                                    input["x-typia-additionalProperties"],
                                ) &&
                            $iu0(input["x-typia-additionalProperties"])));
                const $io1 = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (true)
                            return (
                                "object" === typeof value &&
                                null !== value &&
                                false === Array.isArray(value) &&
                                $iu0(value)
                            );
                        return true;
                    });
                const $io2 = (input: any): boolean =>
                    Array.isArray(input["enum"]) &&
                    input["enum"].every(
                        (elem: any) => "boolean" === typeof elem,
                    ) &&
                    "boolean" === input.type &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input["default"] ||
                        "boolean" === typeof input["default"]) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io3 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    (undefined === input.text ||
                        (Array.isArray(input.text) &&
                            input.text.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io4(elem),
                            )));
                const $io4 = (input: any): boolean =>
                    "string" === typeof input.text &&
                    "string" === typeof input.kind;
                const $io5 = (input: any): boolean =>
                    Array.isArray(input["enum"]) &&
                    input["enum"].every(
                        (elem: any) =>
                            "number" === typeof elem && Number.isFinite(elem),
                    ) &&
                    "number" === input.type &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"]))) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io6 = (input: any): boolean =>
                    Array.isArray(input["enum"]) &&
                    input["enum"].every(
                        (elem: any) => "string" === typeof elem,
                    ) &&
                    "string" === input.type &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input["default"] ||
                        "string" === typeof input["default"]) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io7 = (input: any): boolean =>
                    (undefined === input["x-typia-typeTags"] ||
                        (Array.isArray(input["x-typia-typeTags"]) &&
                            input["x-typia-typeTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io8(elem),
                            ))) &&
                    (undefined === input["default"] ||
                        "boolean" === typeof input["default"]) &&
                    "boolean" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io8 = (input: any): boolean =>
                    ("string" === input.target ||
                        "number" === input.target ||
                        "bigint" === input.target ||
                        "boolean" === input.target ||
                        "array" === input.target) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.kind &&
                    null !== input.exclusive &&
                    undefined !== input.exclusive &&
                    ("boolean" === typeof input.exclusive ||
                        (Array.isArray(input.exclusive) &&
                            input.exclusive.every(
                                (elem: any) => "string" === typeof elem,
                            ))) &&
                    true &&
                    (undefined === input.validate ||
                        "string" === typeof input.validate);
                const $io9 = (input: any): boolean =>
                    (undefined === input.minimum ||
                        ("number" === typeof input.minimum &&
                            Math.floor(input.minimum) === input.minimum &&
                            -2147483648 <= input.minimum &&
                            input.minimum <= 2147483647)) &&
                    (undefined === input.maximum ||
                        ("number" === typeof input.maximum &&
                            Math.floor(input.maximum) === input.maximum &&
                            -2147483648 <= input.maximum &&
                            input.maximum <= 2147483647)) &&
                    (undefined === input.exclusiveMinimum ||
                        "boolean" === typeof input.exclusiveMinimum) &&
                    (undefined === input.exclusiveMaximum ||
                        "boolean" === typeof input.exclusiveMaximum) &&
                    (undefined === input.multipleOf ||
                        ("number" === typeof input.multipleOf &&
                            Math.floor(input.multipleOf) === input.multipleOf &&
                            -2147483648 <= input.multipleOf &&
                            input.multipleOf <= 2147483647)) &&
                    (undefined === input["x-typia-typeTags"] ||
                        (Array.isArray(input["x-typia-typeTags"]) &&
                            input["x-typia-typeTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io8(elem),
                            ))) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"]))) &&
                    "integer" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io10 = (input: any): boolean =>
                    (undefined === input.minimum ||
                        ("number" === typeof input.minimum &&
                            Number.isFinite(input.minimum))) &&
                    (undefined === input.maximum ||
                        ("number" === typeof input.maximum &&
                            Number.isFinite(input.maximum))) &&
                    (undefined === input.exclusiveMinimum ||
                        "boolean" === typeof input.exclusiveMinimum) &&
                    (undefined === input.exclusiveMaximum ||
                        "boolean" === typeof input.exclusiveMaximum) &&
                    (undefined === input.multipleOf ||
                        ("number" === typeof input.multipleOf &&
                            Number.isFinite(input.multipleOf))) &&
                    (undefined === input["x-typia-typeTags"] ||
                        (Array.isArray(input["x-typia-typeTags"]) &&
                            input["x-typia-typeTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io8(elem),
                            ))) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"]))) &&
                    "number" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io11 = (input: any): boolean =>
                    (undefined === input.minLength ||
                        ("number" === typeof input.minLength &&
                            Math.floor(input.minLength) === input.minLength &&
                            0 <= input.minLength &&
                            input.minLength <= 4294967295)) &&
                    (undefined === input.maxLength ||
                        ("number" === typeof input.maxLength &&
                            Math.floor(input.maxLength) === input.maxLength &&
                            0 <= input.maxLength &&
                            input.maxLength <= 4294967295)) &&
                    (undefined === input.pattern ||
                        "string" === typeof input.pattern) &&
                    (undefined === input.format ||
                        "string" === typeof input.format) &&
                    (undefined === input["x-typia-typeTags"] ||
                        (Array.isArray(input["x-typia-typeTags"]) &&
                            input["x-typia-typeTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io8(elem),
                            ))) &&
                    (undefined === input["default"] ||
                        "string" === typeof input["default"]) &&
                    "string" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io12 = (input: any): boolean =>
                    "object" === typeof input.items &&
                    null !== input.items &&
                    false === Array.isArray(input.items) &&
                    $iu0(input.items) &&
                    (undefined === input.minItems ||
                        ("number" === typeof input.minItems &&
                            Math.floor(input.minItems) === input.minItems &&
                            0 <= input.minItems &&
                            input.minItems <= 4294967295)) &&
                    (undefined === input.maxItems ||
                        ("number" === typeof input.maxItems &&
                            Math.floor(input.maxItems) === input.maxItems &&
                            0 <= input.maxItems &&
                            input.maxItems <= 4294967295)) &&
                    (undefined === input["x-typia-tuple"] ||
                        ("object" === typeof input["x-typia-tuple"] &&
                            null !== input["x-typia-tuple"] &&
                            $io13(input["x-typia-tuple"]))) &&
                    (undefined === input["x-typia-typeTags"] ||
                        (Array.isArray(input["x-typia-typeTags"]) &&
                            input["x-typia-typeTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io8(elem),
                            ))) &&
                    "array" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io13 = (input: any): boolean =>
                    Array.isArray(input.items) &&
                    input.items.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            false === Array.isArray(elem) &&
                            $iu0(elem),
                    ) &&
                    "number" === typeof input.minItems &&
                    Math.floor(input.minItems) === input.minItems &&
                    0 <= input.minItems &&
                    input.minItems <= 4294967295 &&
                    (undefined === input.maxItems ||
                        ("number" === typeof input.maxItems &&
                            Math.floor(input.maxItems) === input.maxItems &&
                            0 <= input.maxItems &&
                            input.maxItems <= 4294967295)) &&
                    "array" === input.type &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io14 = (input: any): boolean =>
                    Array.isArray(input.oneOf) &&
                    input.oneOf.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            false === Array.isArray(elem) &&
                            $iu0(elem),
                    ) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io15 = (input: any): boolean =>
                    "string" === typeof input.$ref &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io16 = (input: any): boolean =>
                    "null" === input.type &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $io17 = (input: any): boolean =>
                    null !== input.type &&
                    undefined === input.type &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated) &&
                    (undefined === input.title ||
                        "string" === typeof input.title) &&
                    (undefined === input.description ||
                        "string" === typeof input.description) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        (Array.isArray(input["x-typia-jsDocTags"]) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"]) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"]) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"]);
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("integer" === input.type) return $io9(input);
                        else if (
                            "object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items) &&
                            $iu0(input.items)
                        )
                            return $io12(input);
                        else if (
                            Array.isArray(input.items) &&
                            input.items.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem) &&
                                    $iu0(elem),
                            )
                        )
                            return $io13(input);
                        else if (undefined !== input.oneOf) return $io14(input);
                        else if (undefined !== input.$ref) return $io15(input);
                        else if ("null" === input.type) return $io16(input);
                        else
                            return (() => {
                                if ($io6(input)) return $io6(input);
                                else if ($io5(input)) return $io5(input);
                                else if ($io2(input)) return $io2(input);
                                else if ($io7(input)) return $io7(input);
                                else if ($io10(input)) return $io10(input);
                                else if ($io11(input)) return $io11(input);
                                else if ($io17(input)) return $io17(input);
                                else return false;
                            })();
                    })();
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is IJsonComponents.IObject => {
                    const $guard = (typia.assert as any).guard;
                    const $join = (typia.assert as any).join;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (undefined === input.$id ||
                            "string" === typeof input.$id ||
                            $guard(_exceptionable, {
                                path: _path + ".$id",
                                expected: "(string | undefined)",
                                value: input.$id,
                            })) &&
                        ("object" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"object"',
                                value: input.type,
                            })) &&
                        (undefined === input.nullable ||
                            "boolean" === typeof input.nullable ||
                            $guard(_exceptionable, {
                                path: _path + ".nullable",
                                expected: "(boolean | undefined)",
                                value: input.nullable,
                            })) &&
                        (((("object" === typeof input.properties &&
                            null !== input.properties &&
                            false === Array.isArray(input.properties)) ||
                            $guard(_exceptionable, {
                                path: _path + ".properties",
                                expected: "Record<string, IJsonSchema>",
                                value: input.properties,
                            })) &&
                            $ao1(
                                input.properties,
                                _path + ".properties",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".properties",
                                expected: "Record<string, IJsonSchema>",
                                value: input.properties,
                            })) &&
                        (undefined === input.patternProperties ||
                            ((("object" === typeof input.patternProperties &&
                                null !== input.patternProperties &&
                                false ===
                                    Array.isArray(input.patternProperties)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".patternProperties",
                                    expected:
                                        "(Record<string, IJsonSchema> | undefined)",
                                    value: input.patternProperties,
                                })) &&
                                $ao1(
                                    input.patternProperties,
                                    _path + ".patternProperties",
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".patternProperties",
                                expected:
                                    "(Record<string, IJsonSchema> | undefined)",
                                value: input.patternProperties,
                            })) &&
                        (undefined === input.additionalProperties ||
                            ((("object" === typeof input.additionalProperties &&
                                null !== input.additionalProperties &&
                                false ===
                                    Array.isArray(
                                        input.additionalProperties,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".additionalProperties",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                    value: input.additionalProperties,
                                })) &&
                                $au0(
                                    input.additionalProperties,
                                    _path + ".additionalProperties",
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".additionalProperties",
                                expected:
                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                value: input.additionalProperties,
                            })) &&
                        (undefined === input.required ||
                            ((Array.isArray(input.required) ||
                                $guard(_exceptionable, {
                                    path: _path + ".required",
                                    expected: "(Array<string> | undefined)",
                                    value: input.required,
                                })) &&
                                input.required.every(
                                    (elem: any, _index1: number) =>
                                        "string" === typeof elem ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".required[" +
                                                _index1 +
                                                "]",
                                            expected: "string",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".required",
                                expected: "(Array<string> | undefined)",
                                value: input.required,
                            })) &&
                        (undefined === input.description ||
                            "string" === typeof input.description ||
                            $guard(_exceptionable, {
                                path: _path + ".description",
                                expected: "(string | undefined)",
                                value: input.description,
                            })) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index2: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index2 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                            $ao3(
                                                elem,
                                                _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index2 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index2 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                        (undefined === input["x-typia-patternProperties"] ||
                            ((("object" ===
                                typeof input["x-typia-patternProperties"] &&
                                null !== input["x-typia-patternProperties"] &&
                                false ===
                                    Array.isArray(
                                        input["x-typia-patternProperties"],
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path + '["x-typia-patternProperties"]',
                                    expected:
                                        "(Record<string, IJsonSchema> | undefined)",
                                    value: input["x-typia-patternProperties"],
                                })) &&
                                $ao1(
                                    input["x-typia-patternProperties"],
                                    _path + '["x-typia-patternProperties"]',
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-patternProperties"]',
                                expected:
                                    "(Record<string, IJsonSchema> | undefined)",
                                value: input["x-typia-patternProperties"],
                            })) &&
                        (undefined === input["x-typia-additionalProperties"] ||
                            ((("object" ===
                                typeof input["x-typia-additionalProperties"] &&
                                null !==
                                    input["x-typia-additionalProperties"] &&
                                false ===
                                    Array.isArray(
                                        input["x-typia-additionalProperties"],
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-additionalProperties"]',
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                    value: input[
                                        "x-typia-additionalProperties"
                                    ],
                                })) &&
                                $au0(
                                    input["x-typia-additionalProperties"],
                                    _path + '["x-typia-additionalProperties"]',
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path:
                                    _path + '["x-typia-additionalProperties"]',
                                expected:
                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                value: input["x-typia-additionalProperties"],
                            }));
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (true)
                                return (
                                    ((("object" === typeof value &&
                                        null !== value &&
                                        false === Array.isArray(value)) ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected:
                                                '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                            value: value,
                                        })) &&
                                        $au0(
                                            value,
                                            _path + $join(key),
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path: _path + $join(key),
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: value,
                                    })
                                );
                            return true;
                        });
                    const $ao2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((Array.isArray(input["enum"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"]',
                                expected: "Array<boolean>",
                                value: input["enum"],
                            })) &&
                            input["enum"].every(
                                (elem: any, _index3: number) =>
                                    "boolean" === typeof elem ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + '["enum"][' + _index3 + "]",
                                        expected: "boolean",
                                        value: elem,
                                    }),
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"]',
                                expected: "Array<boolean>",
                                value: input["enum"],
                            })) &&
                        ("boolean" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"boolean"',
                                value: input.type,
                            })) &&
                        (undefined === input.title ||
                            "string" === typeof input.title ||
                            $guard(_exceptionable, {
                                path: _path + ".title",
                                expected: "(string | undefined)",
                                value: input.title,
                            })) &&
                        (undefined === input["default"] ||
                            "boolean" === typeof input["default"] ||
                            $guard(_exceptionable, {
                                path: _path + '["default"]',
                                expected: "(boolean | undefined)",
                                value: input["default"],
                            })) &&
                        (undefined === input.nullable ||
                            "boolean" === typeof input.nullable ||
                            $guard(_exceptionable, {
                                path: _path + ".nullable",
                                expected: "(boolean | undefined)",
                                value: input.nullable,
                            })) &&
                        (undefined === input.deprecated ||
                            "boolean" === typeof input.deprecated ||
                            $guard(_exceptionable, {
                                path: _path + ".deprecated",
                                expected: "(boolean | undefined)",
                                value: input.deprecated,
                            })) &&
                        (undefined === input.description ||
                            "string" === typeof input.description ||
                            $guard(_exceptionable, {
                                path: _path + ".description",
                                expected: "(string | undefined)",
                                value: input.description,
                            })) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index4: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index4 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                            $ao3(
                                                elem,
                                                _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index4 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index4 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                        (undefined === input["x-typia-required"] ||
                            "boolean" === typeof input["x-typia-required"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-required"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-required"],
                            })) &&
                        (undefined === input["x-typia-optional"] ||
                            "boolean" === typeof input["x-typia-optional"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-optional"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-optional"],
                            })) &&
                        (undefined === input["x-typia-rest"] ||
                            "boolean" === typeof input["x-typia-rest"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-rest"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-rest"],
                            }));
                    const $ao3 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        (undefined === input.text ||
                            ((Array.isArray(input.text) ||
                                $guard(_exceptionable, {
                                    path: _path + ".text",
                                    expected:
                                        "(Array<IJsDocTagInfo.IText> | undefined)",
                                    value: input.text,
                                })) &&
                                input.text.every(
                                    (elem: any, _index5: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".text[" +
                                                    _index5 +
                                                    "]",
                                                expected: "IJsDocTagInfo.IText",
                                                value: elem,
                                            })) &&
                                            $ao4(
                                                elem,
                                                _path +
                                                    ".text[" +
                                                    _index5 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".text[" +
                                                _index5 +
                                                "]",
                                            expected: "IJsDocTagInfo.IText",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".text",
                                expected:
                                    "(Array<IJsDocTagInfo.IText> | undefined)",
                                value: input.text,
                            }));
                    const $ao4 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.text ||
                            $guard(_exceptionable, {
                                path: _path + ".text",
                                expected: "string",
                                value: input.text,
                            })) &&
                        ("string" === typeof input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: "string",
                                value: input.kind,
                            }));
                    const $ao5 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((Array.isArray(input["enum"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"]',
                                expected: "Array<number>",
                                value: input["enum"],
                            })) &&
                            input["enum"].every(
                                (elem: any, _index6: number) =>
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem)) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + '["enum"][' + _index6 + "]",
                                        expected: "number",
                                        value: elem,
                                    }),
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"]',
                                expected: "Array<number>",
                                value: input["enum"],
                            })) &&
                        ("number" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"number"',
                                value: input.type,
                            })) &&
                        (undefined === input.title ||
                            "string" === typeof input.title ||
                            $guard(_exceptionable, {
                                path: _path + ".title",
                                expected: "(string | undefined)",
                                value: input.title,
                            })) &&
                        (undefined === input["default"] ||
                            ("number" === typeof input["default"] &&
                                Number.isFinite(input["default"])) ||
                            $guard(_exceptionable, {
                                path: _path + '["default"]',
                                expected: "(number | undefined)",
                                value: input["default"],
                            })) &&
                        (undefined === input.nullable ||
                            "boolean" === typeof input.nullable ||
                            $guard(_exceptionable, {
                                path: _path + ".nullable",
                                expected: "(boolean | undefined)",
                                value: input.nullable,
                            })) &&
                        (undefined === input.deprecated ||
                            "boolean" === typeof input.deprecated ||
                            $guard(_exceptionable, {
                                path: _path + ".deprecated",
                                expected: "(boolean | undefined)",
                                value: input.deprecated,
                            })) &&
                        (undefined === input.description ||
                            "string" === typeof input.description ||
                            $guard(_exceptionable, {
                                path: _path + ".description",
                                expected: "(string | undefined)",
                                value: input.description,
                            })) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index7: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index7 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                            $ao3(
                                                elem,
                                                _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index7 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index7 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                        (undefined === input["x-typia-required"] ||
                            "boolean" === typeof input["x-typia-required"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-required"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-required"],
                            })) &&
                        (undefined === input["x-typia-optional"] ||
                            "boolean" === typeof input["x-typia-optional"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-optional"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-optional"],
                            })) &&
                        (undefined === input["x-typia-rest"] ||
                            "boolean" === typeof input["x-typia-rest"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-rest"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-rest"],
                            }));
                    const $ao6 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((Array.isArray(input["enum"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"]',
                                expected: "Array<string>",
                                value: input["enum"],
                            })) &&
                            input["enum"].every(
                                (elem: any, _index8: number) =>
                                    "string" === typeof elem ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + '["enum"][' + _index8 + "]",
                                        expected: "string",
                                        value: elem,
                                    }),
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"]',
                                expected: "Array<string>",
                                value: input["enum"],
                            })) &&
                        ("string" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"string"',
                                value: input.type,
                            })) &&
                        (undefined === input.title ||
                            "string" === typeof input.title ||
                            $guard(_exceptionable, {
                                path: _path + ".title",
                                expected: "(string | undefined)",
                                value: input.title,
                            })) &&
                        (undefined === input["default"] ||
                            "string" === typeof input["default"] ||
                            $guard(_exceptionable, {
                                path: _path + '["default"]',
                                expected: "(string | undefined)",
                                value: input["default"],
                            })) &&
                        (undefined === input.nullable ||
                            "boolean" === typeof input.nullable ||
                            $guard(_exceptionable, {
                                path: _path + ".nullable",
                                expected: "(boolean | undefined)",
                                value: input.nullable,
                            })) &&
                        (undefined === input.deprecated ||
                            "boolean" === typeof input.deprecated ||
                            $guard(_exceptionable, {
                                path: _path + ".deprecated",
                                expected: "(boolean | undefined)",
                                value: input.deprecated,
                            })) &&
                        (undefined === input.description ||
                            "string" === typeof input.description ||
                            $guard(_exceptionable, {
                                path: _path + ".description",
                                expected: "(string | undefined)",
                                value: input.description,
                            })) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index9: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index9 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                            $ao3(
                                                elem,
                                                _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index9 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index9 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                        (undefined === input["x-typia-required"] ||
                            "boolean" === typeof input["x-typia-required"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-required"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-required"],
                            })) &&
                        (undefined === input["x-typia-optional"] ||
                            "boolean" === typeof input["x-typia-optional"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-optional"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-optional"],
                            })) &&
                        (undefined === input["x-typia-rest"] ||
                            "boolean" === typeof input["x-typia-rest"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-rest"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-rest"],
                            }));
                    const $ao7 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (undefined === input["x-typia-typeTags"] ||
                            ((Array.isArray(input["x-typia-typeTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-typeTags"]',
                                    expected:
                                        "(Array<IMetadataTypeTag> | undefined)",
                                    value: input["x-typia-typeTags"],
                                })) &&
                                input["x-typia-typeTags"].every(
                                    (elem: any, _index10: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-typeTags"][' +
                                                    _index10 +
                                                    "]",
                                                expected: "IMetadataTypeTag",
                                                value: elem,
                                            })) &&
                                            $ao8(
                                                elem,
                                                _path +
                                                    '["x-typia-typeTags"][' +
                                                    _index10 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-typeTags"][' +
                                                _index10 +
                                                "]",
                                            expected: "IMetadataTypeTag",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-typeTags"]',
                                expected:
                                    "(Array<IMetadataTypeTag> | undefined)",
                                value: input["x-typia-typeTags"],
                            })) &&
                        (undefined === input["default"] ||
                            "boolean" === typeof input["default"] ||
                            $guard(_exceptionable, {
                                path: _path + '["default"]',
                                expected: "(boolean | undefined)",
                                value: input["default"],
                            })) &&
                        ("boolean" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"boolean"',
                                value: input.type,
                            })) &&
                        (undefined === input.nullable ||
                            "boolean" === typeof input.nullable ||
                            $guard(_exceptionable, {
                                path: _path + ".nullable",
                                expected: "(boolean | undefined)",
                                value: input.nullable,
                            })) &&
                        (undefined === input.deprecated ||
                            "boolean" === typeof input.deprecated ||
                            $guard(_exceptionable, {
                                path: _path + ".deprecated",
                                expected: "(boolean | undefined)",
                                value: input.deprecated,
                            })) &&
                        (undefined === input.title ||
                            "string" === typeof input.title ||
                            $guard(_exceptionable, {
                                path: _path + ".title",
                                expected: "(string | undefined)",
                                value: input.title,
                            })) &&
                        (undefined === input.description ||
                            "string" === typeof input.description ||
                            $guard(_exceptionable, {
                                path: _path + ".description",
                                expected: "(string | undefined)",
                                value: input.description,
                            })) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index11: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index11 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                            $ao3(
                                                elem,
                                                _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index11 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index11 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                        (undefined === input["x-typia-required"] ||
                            "boolean" === typeof input["x-typia-required"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-required"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-required"],
                            })) &&
                        (undefined === input["x-typia-optional"] ||
                            "boolean" === typeof input["x-typia-optional"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-optional"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-optional"],
                            })) &&
                        (undefined === input["x-typia-rest"] ||
                            "boolean" === typeof input["x-typia-rest"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-rest"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-rest"],
                            }));
                    const $ao8 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === input.target ||
                            "number" === input.target ||
                            "bigint" === input.target ||
                            "boolean" === input.target ||
                            "array" === input.target ||
                            $guard(_exceptionable, {
                                path: _path + ".target",
                                expected:
                                    '("array" | "bigint" | "boolean" | "number" | "string")',
                                value: input.target,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        ("string" === typeof input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: "string",
                                value: input.kind,
                            })) &&
                        (null !== input.exclusive ||
                            $guard(_exceptionable, {
                                path: _path + ".exclusive",
                                expected: "(Array<string> | boolean)",
                                value: input.exclusive,
                            })) &&
                        (undefined !== input.exclusive ||
                            $guard(_exceptionable, {
                                path: _path + ".exclusive",
                                expected: "(Array<string> | boolean)",
                                value: input.exclusive,
                            })) &&
                        ("boolean" === typeof input.exclusive ||
                            ((Array.isArray(input.exclusive) ||
                                $guard(_exceptionable, {
                                    path: _path + ".exclusive",
                                    expected: "(Array<string> | boolean)",
                                    value: input.exclusive,
                                })) &&
                                input.exclusive.every(
                                    (elem: any, _index12: number) =>
                                        "string" === typeof elem ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".exclusive[" +
                                                _index12 +
                                                "]",
                                            expected: "string",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".exclusive",
                                expected: "(Array<string> | boolean)",
                                value: input.exclusive,
                            })) &&
                        true &&
                        (undefined === input.validate ||
                            "string" === typeof input.validate ||
                            $guard(_exceptionable, {
                                path: _path + ".validate",
                                expected: "(string | undefined)",
                                value: input.validate,
                            }));
                    const $ao9 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (undefined === input.minimum ||
                            ("number" === typeof input.minimum &&
                                ((Math.floor(input.minimum) === input.minimum &&
                                    -2147483648 <= input.minimum &&
                                    input.minimum <= 2147483647) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minimum",
                                        expected: 'number & Type<"int32">',
                                        value: input.minimum,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected:
                                    '((number & Type<"int32">) | undefined)',
                                value: input.minimum,
                            })) &&
                        (undefined === input.maximum ||
                            ("number" === typeof input.maximum &&
                                ((Math.floor(input.maximum) === input.maximum &&
                                    -2147483648 <= input.maximum &&
                                    input.maximum <= 2147483647) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maximum",
                                        expected: 'number & Type<"int32">',
                                        value: input.maximum,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".maximum",
                                expected:
                                    '((number & Type<"int32">) | undefined)',
                                value: input.maximum,
                            })) &&
                        (undefined === input.exclusiveMinimum ||
                            "boolean" === typeof input.exclusiveMinimum ||
                            $guard(_exceptionable, {
                                path: _path + ".exclusiveMinimum",
                                expected: "(boolean | undefined)",
                                value: input.exclusiveMinimum,
                            })) &&
                        (undefined === input.exclusiveMaximum ||
                            "boolean" === typeof input.exclusiveMaximum ||
                            $guard(_exceptionable, {
                                path: _path + ".exclusiveMaximum",
                                expected: "(boolean | undefined)",
                                value: input.exclusiveMaximum,
                            })) &&
                        (undefined === input.multipleOf ||
                            ("number" === typeof input.multipleOf &&
                                ((Math.floor(input.multipleOf) ===
                                    input.multipleOf &&
                                    -2147483648 <= input.multipleOf &&
                                    input.multipleOf <= 2147483647) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".multipleOf",
                                        expected: 'number & Type<"int32">',
                                        value: input.multipleOf,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected:
                                    '((number & Type<"int32">) | undefined)',
                                value: input.multipleOf,
                            })) &&
                        (undefined === input["x-typia-typeTags"] ||
                            ((Array.isArray(input["x-typia-typeTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-typeTags"]',
                                    expected:
                                        "(Array<IMetadataTypeTag> | undefined)",
                                    value: input["x-typia-typeTags"],
                                })) &&
                                input["x-typia-typeTags"].every(
                                    (elem: any, _index13: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-typeTags"][' +
                                                    _index13 +
                                                    "]",
                                                expected: "IMetadataTypeTag",
                                                value: elem,
                                            })) &&
                                            $ao8(
                                                elem,
                                                _path +
                                                    '["x-typia-typeTags"][' +
                                                    _index13 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-typeTags"][' +
                                                _index13 +
                                                "]",
                                            expected: "IMetadataTypeTag",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-typeTags"]',
                                expected:
                                    "(Array<IMetadataTypeTag> | undefined)",
                                value: input["x-typia-typeTags"],
                            })) &&
                        (undefined === input["default"] ||
                            ("number" === typeof input["default"] &&
                                Number.isFinite(input["default"])) ||
                            $guard(_exceptionable, {
                                path: _path + '["default"]',
                                expected: "(number | undefined)",
                                value: input["default"],
                            })) &&
                        ("integer" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"integer"',
                                value: input.type,
                            })) &&
                        (undefined === input.nullable ||
                            "boolean" === typeof input.nullable ||
                            $guard(_exceptionable, {
                                path: _path + ".nullable",
                                expected: "(boolean | undefined)",
                                value: input.nullable,
                            })) &&
                        (undefined === input.deprecated ||
                            "boolean" === typeof input.deprecated ||
                            $guard(_exceptionable, {
                                path: _path + ".deprecated",
                                expected: "(boolean | undefined)",
                                value: input.deprecated,
                            })) &&
                        (undefined === input.title ||
                            "string" === typeof input.title ||
                            $guard(_exceptionable, {
                                path: _path + ".title",
                                expected: "(string | undefined)",
                                value: input.title,
                            })) &&
                        (undefined === input.description ||
                            "string" === typeof input.description ||
                            $guard(_exceptionable, {
                                path: _path + ".description",
                                expected: "(string | undefined)",
                                value: input.description,
                            })) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index14: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index14 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                            $ao3(
                                                elem,
                                                _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index14 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index14 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                        (undefined === input["x-typia-required"] ||
                            "boolean" === typeof input["x-typia-required"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-required"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-required"],
                            })) &&
                        (undefined === input["x-typia-optional"] ||
                            "boolean" === typeof input["x-typia-optional"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-optional"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-optional"],
                            })) &&
                        (undefined === input["x-typia-rest"] ||
                            "boolean" === typeof input["x-typia-rest"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-rest"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-rest"],
                            }));
                    const $ao10 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (undefined === input.minimum ||
                            ("number" === typeof input.minimum &&
                                Number.isFinite(input.minimum)) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "(number | undefined)",
                                value: input.minimum,
                            })) &&
                        (undefined === input.maximum ||
                            ("number" === typeof input.maximum &&
                                Number.isFinite(input.maximum)) ||
                            $guard(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "(number | undefined)",
                                value: input.maximum,
                            })) &&
                        (undefined === input.exclusiveMinimum ||
                            "boolean" === typeof input.exclusiveMinimum ||
                            $guard(_exceptionable, {
                                path: _path + ".exclusiveMinimum",
                                expected: "(boolean | undefined)",
                                value: input.exclusiveMinimum,
                            })) &&
                        (undefined === input.exclusiveMaximum ||
                            "boolean" === typeof input.exclusiveMaximum ||
                            $guard(_exceptionable, {
                                path: _path + ".exclusiveMaximum",
                                expected: "(boolean | undefined)",
                                value: input.exclusiveMaximum,
                            })) &&
                        (undefined === input.multipleOf ||
                            ("number" === typeof input.multipleOf &&
                                Number.isFinite(input.multipleOf)) ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "(number | undefined)",
                                value: input.multipleOf,
                            })) &&
                        (undefined === input["x-typia-typeTags"] ||
                            ((Array.isArray(input["x-typia-typeTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-typeTags"]',
                                    expected:
                                        "(Array<IMetadataTypeTag> | undefined)",
                                    value: input["x-typia-typeTags"],
                                })) &&
                                input["x-typia-typeTags"].every(
                                    (elem: any, _index15: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-typeTags"][' +
                                                    _index15 +
                                                    "]",
                                                expected: "IMetadataTypeTag",
                                                value: elem,
                                            })) &&
                                            $ao8(
                                                elem,
                                                _path +
                                                    '["x-typia-typeTags"][' +
                                                    _index15 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-typeTags"][' +
                                                _index15 +
                                                "]",
                                            expected: "IMetadataTypeTag",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-typeTags"]',
                                expected:
                                    "(Array<IMetadataTypeTag> | undefined)",
                                value: input["x-typia-typeTags"],
                            })) &&
                        (undefined === input["default"] ||
                            ("number" === typeof input["default"] &&
                                Number.isFinite(input["default"])) ||
                            $guard(_exceptionable, {
                                path: _path + '["default"]',
                                expected: "(number | undefined)",
                                value: input["default"],
                            })) &&
                        ("number" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"number"',
                                value: input.type,
                            })) &&
                        (undefined === input.nullable ||
                            "boolean" === typeof input.nullable ||
                            $guard(_exceptionable, {
                                path: _path + ".nullable",
                                expected: "(boolean | undefined)",
                                value: input.nullable,
                            })) &&
                        (undefined === input.deprecated ||
                            "boolean" === typeof input.deprecated ||
                            $guard(_exceptionable, {
                                path: _path + ".deprecated",
                                expected: "(boolean | undefined)",
                                value: input.deprecated,
                            })) &&
                        (undefined === input.title ||
                            "string" === typeof input.title ||
                            $guard(_exceptionable, {
                                path: _path + ".title",
                                expected: "(string | undefined)",
                                value: input.title,
                            })) &&
                        (undefined === input.description ||
                            "string" === typeof input.description ||
                            $guard(_exceptionable, {
                                path: _path + ".description",
                                expected: "(string | undefined)",
                                value: input.description,
                            })) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index16: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index16 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                            $ao3(
                                                elem,
                                                _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index16 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index16 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                        (undefined === input["x-typia-required"] ||
                            "boolean" === typeof input["x-typia-required"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-required"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-required"],
                            })) &&
                        (undefined === input["x-typia-optional"] ||
                            "boolean" === typeof input["x-typia-optional"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-optional"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-optional"],
                            })) &&
                        (undefined === input["x-typia-rest"] ||
                            "boolean" === typeof input["x-typia-rest"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-rest"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-rest"],
                            }));
                    const $ao11 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (undefined === input.minLength ||
                            ("number" === typeof input.minLength &&
                                ((Math.floor(input.minLength) ===
                                    input.minLength &&
                                    0 <= input.minLength &&
                                    input.minLength <= 4294967295) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minLength",
                                        expected: 'number & Type<"uint32">',
                                        value: input.minLength,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minLength",
                                expected:
                                    '((number & Type<"uint32">) | undefined)',
                                value: input.minLength,
                            })) &&
                        (undefined === input.maxLength ||
                            ("number" === typeof input.maxLength &&
                                ((Math.floor(input.maxLength) ===
                                    input.maxLength &&
                                    0 <= input.maxLength &&
                                    input.maxLength <= 4294967295) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maxLength",
                                        expected: 'number & Type<"uint32">',
                                        value: input.maxLength,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".maxLength",
                                expected:
                                    '((number & Type<"uint32">) | undefined)',
                                value: input.maxLength,
                            })) &&
                        (undefined === input.pattern ||
                            "string" === typeof input.pattern ||
                            $guard(_exceptionable, {
                                path: _path + ".pattern",
                                expected: "(string | undefined)",
                                value: input.pattern,
                            })) &&
                        (undefined === input.format ||
                            "string" === typeof input.format ||
                            $guard(_exceptionable, {
                                path: _path + ".format",
                                expected: "(string | undefined)",
                                value: input.format,
                            })) &&
                        (undefined === input["x-typia-typeTags"] ||
                            ((Array.isArray(input["x-typia-typeTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-typeTags"]',
                                    expected:
                                        "(Array<IMetadataTypeTag> | undefined)",
                                    value: input["x-typia-typeTags"],
                                })) &&
                                input["x-typia-typeTags"].every(
                                    (elem: any, _index17: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-typeTags"][' +
                                                    _index17 +
                                                    "]",
                                                expected: "IMetadataTypeTag",
                                                value: elem,
                                            })) &&
                                            $ao8(
                                                elem,
                                                _path +
                                                    '["x-typia-typeTags"][' +
                                                    _index17 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-typeTags"][' +
                                                _index17 +
                                                "]",
                                            expected: "IMetadataTypeTag",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-typeTags"]',
                                expected:
                                    "(Array<IMetadataTypeTag> | undefined)",
                                value: input["x-typia-typeTags"],
                            })) &&
                        (undefined === input["default"] ||
                            "string" === typeof input["default"] ||
                            $guard(_exceptionable, {
                                path: _path + '["default"]',
                                expected: "(string | undefined)",
                                value: input["default"],
                            })) &&
                        ("string" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"string"',
                                value: input.type,
                            })) &&
                        (undefined === input.nullable ||
                            "boolean" === typeof input.nullable ||
                            $guard(_exceptionable, {
                                path: _path + ".nullable",
                                expected: "(boolean | undefined)",
                                value: input.nullable,
                            })) &&
                        (undefined === input.deprecated ||
                            "boolean" === typeof input.deprecated ||
                            $guard(_exceptionable, {
                                path: _path + ".deprecated",
                                expected: "(boolean | undefined)",
                                value: input.deprecated,
                            })) &&
                        (undefined === input.title ||
                            "string" === typeof input.title ||
                            $guard(_exceptionable, {
                                path: _path + ".title",
                                expected: "(string | undefined)",
                                value: input.title,
                            })) &&
                        (undefined === input.description ||
                            "string" === typeof input.description ||
                            $guard(_exceptionable, {
                                path: _path + ".description",
                                expected: "(string | undefined)",
                                value: input.description,
                            })) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index18: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index18 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                            $ao3(
                                                elem,
                                                _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index18 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index18 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                        (undefined === input["x-typia-required"] ||
                            "boolean" === typeof input["x-typia-required"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-required"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-required"],
                            })) &&
                        (undefined === input["x-typia-optional"] ||
                            "boolean" === typeof input["x-typia-optional"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-optional"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-optional"],
                            })) &&
                        (undefined === input["x-typia-rest"] ||
                            "boolean" === typeof input["x-typia-rest"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-rest"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-rest"],
                            }));
                    const $ao12 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((("object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items)) ||
                            $guard(_exceptionable, {
                                path: _path + ".items",
                                expected:
                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                value: input.items,
                            })) &&
                            $au0(
                                input.items,
                                _path + ".items",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".items",
                                expected:
                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                value: input.items,
                            })) &&
                        (undefined === input.minItems ||
                            ("number" === typeof input.minItems &&
                                ((Math.floor(input.minItems) ===
                                    input.minItems &&
                                    0 <= input.minItems &&
                                    input.minItems <= 4294967295) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: 'number & Type<"uint32">',
                                        value: input.minItems,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minItems",
                                expected:
                                    '((number & Type<"uint32">) | undefined)',
                                value: input.minItems,
                            })) &&
                        (undefined === input.maxItems ||
                            ("number" === typeof input.maxItems &&
                                ((Math.floor(input.maxItems) ===
                                    input.maxItems &&
                                    0 <= input.maxItems &&
                                    input.maxItems <= 4294967295) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maxItems",
                                        expected: 'number & Type<"uint32">',
                                        value: input.maxItems,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".maxItems",
                                expected:
                                    '((number & Type<"uint32">) | undefined)',
                                value: input.maxItems,
                            })) &&
                        (undefined === input["x-typia-tuple"] ||
                            ((("object" === typeof input["x-typia-tuple"] &&
                                null !== input["x-typia-tuple"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-tuple"]',
                                    expected:
                                        "(IJsonSchema.ITuple | undefined)",
                                    value: input["x-typia-tuple"],
                                })) &&
                                $ao13(
                                    input["x-typia-tuple"],
                                    _path + '["x-typia-tuple"]',
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-tuple"]',
                                expected: "(IJsonSchema.ITuple | undefined)",
                                value: input["x-typia-tuple"],
                            })) &&
                        (undefined === input["x-typia-typeTags"] ||
                            ((Array.isArray(input["x-typia-typeTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-typeTags"]',
                                    expected:
                                        "(Array<IMetadataTypeTag> | undefined)",
                                    value: input["x-typia-typeTags"],
                                })) &&
                                input["x-typia-typeTags"].every(
                                    (elem: any, _index19: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-typeTags"][' +
                                                    _index19 +
                                                    "]",
                                                expected: "IMetadataTypeTag",
                                                value: elem,
                                            })) &&
                                            $ao8(
                                                elem,
                                                _path +
                                                    '["x-typia-typeTags"][' +
                                                    _index19 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-typeTags"][' +
                                                _index19 +
                                                "]",
                                            expected: "IMetadataTypeTag",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-typeTags"]',
                                expected:
                                    "(Array<IMetadataTypeTag> | undefined)",
                                value: input["x-typia-typeTags"],
                            })) &&
                        ("array" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"array"',
                                value: input.type,
                            })) &&
                        (undefined === input.nullable ||
                            "boolean" === typeof input.nullable ||
                            $guard(_exceptionable, {
                                path: _path + ".nullable",
                                expected: "(boolean | undefined)",
                                value: input.nullable,
                            })) &&
                        (undefined === input.deprecated ||
                            "boolean" === typeof input.deprecated ||
                            $guard(_exceptionable, {
                                path: _path + ".deprecated",
                                expected: "(boolean | undefined)",
                                value: input.deprecated,
                            })) &&
                        (undefined === input.title ||
                            "string" === typeof input.title ||
                            $guard(_exceptionable, {
                                path: _path + ".title",
                                expected: "(string | undefined)",
                                value: input.title,
                            })) &&
                        (undefined === input.description ||
                            "string" === typeof input.description ||
                            $guard(_exceptionable, {
                                path: _path + ".description",
                                expected: "(string | undefined)",
                                value: input.description,
                            })) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index20: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index20 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                            $ao3(
                                                elem,
                                                _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index20 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index20 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                        (undefined === input["x-typia-required"] ||
                            "boolean" === typeof input["x-typia-required"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-required"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-required"],
                            })) &&
                        (undefined === input["x-typia-optional"] ||
                            "boolean" === typeof input["x-typia-optional"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-optional"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-optional"],
                            })) &&
                        (undefined === input["x-typia-rest"] ||
                            "boolean" === typeof input["x-typia-rest"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-rest"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-rest"],
                            }));
                    const $ao13 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((Array.isArray(input.items) ||
                            $guard(_exceptionable, {
                                path: _path + ".items",
                                expected: "Array<IJsonSchema>",
                                value: input.items,
                            })) &&
                            input.items.every(
                                (elem: any, _index21: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem &&
                                        false === Array.isArray(elem)) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".items[" +
                                                _index21 +
                                                "]",
                                            expected:
                                                '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                            value: elem,
                                        })) &&
                                        $au0(
                                            elem,
                                            _path + ".items[" + _index21 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".items[" + _index21 + "]",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: elem,
                                    }),
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".items",
                                expected: "Array<IJsonSchema>",
                                value: input.items,
                            })) &&
                        (("number" === typeof input.minItems &&
                            ((Math.floor(input.minItems) === input.minItems &&
                                0 <= input.minItems &&
                                input.minItems <= 4294967295) ||
                                $guard(_exceptionable, {
                                    path: _path + ".minItems",
                                    expected: 'number & Type<"uint32">',
                                    value: input.minItems,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minItems",
                                expected: '(number & Type<"uint32">)',
                                value: input.minItems,
                            })) &&
                        (undefined === input.maxItems ||
                            ("number" === typeof input.maxItems &&
                                ((Math.floor(input.maxItems) ===
                                    input.maxItems &&
                                    0 <= input.maxItems &&
                                    input.maxItems <= 4294967295) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maxItems",
                                        expected: 'number & Type<"uint32">',
                                        value: input.maxItems,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".maxItems",
                                expected:
                                    '((number & Type<"uint32">) | undefined)',
                                value: input.maxItems,
                            })) &&
                        ("array" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"array"',
                                value: input.type,
                            })) &&
                        (undefined === input.nullable ||
                            "boolean" === typeof input.nullable ||
                            $guard(_exceptionable, {
                                path: _path + ".nullable",
                                expected: "(boolean | undefined)",
                                value: input.nullable,
                            })) &&
                        (undefined === input.deprecated ||
                            "boolean" === typeof input.deprecated ||
                            $guard(_exceptionable, {
                                path: _path + ".deprecated",
                                expected: "(boolean | undefined)",
                                value: input.deprecated,
                            })) &&
                        (undefined === input.title ||
                            "string" === typeof input.title ||
                            $guard(_exceptionable, {
                                path: _path + ".title",
                                expected: "(string | undefined)",
                                value: input.title,
                            })) &&
                        (undefined === input.description ||
                            "string" === typeof input.description ||
                            $guard(_exceptionable, {
                                path: _path + ".description",
                                expected: "(string | undefined)",
                                value: input.description,
                            })) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index22: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index22 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                            $ao3(
                                                elem,
                                                _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index22 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index22 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                        (undefined === input["x-typia-required"] ||
                            "boolean" === typeof input["x-typia-required"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-required"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-required"],
                            })) &&
                        (undefined === input["x-typia-optional"] ||
                            "boolean" === typeof input["x-typia-optional"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-optional"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-optional"],
                            })) &&
                        (undefined === input["x-typia-rest"] ||
                            "boolean" === typeof input["x-typia-rest"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-rest"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-rest"],
                            }));
                    const $ao14 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((Array.isArray(input.oneOf) ||
                            $guard(_exceptionable, {
                                path: _path + ".oneOf",
                                expected: "Array<IJsonSchema>",
                                value: input.oneOf,
                            })) &&
                            input.oneOf.every(
                                (elem: any, _index23: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem &&
                                        false === Array.isArray(elem)) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".oneOf[" +
                                                _index23 +
                                                "]",
                                            expected:
                                                '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                            value: elem,
                                        })) &&
                                        $au0(
                                            elem,
                                            _path + ".oneOf[" + _index23 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".oneOf[" + _index23 + "]",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: elem,
                                    }),
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".oneOf",
                                expected: "Array<IJsonSchema>",
                                value: input.oneOf,
                            })) &&
                        (undefined === input.deprecated ||
                            "boolean" === typeof input.deprecated ||
                            $guard(_exceptionable, {
                                path: _path + ".deprecated",
                                expected: "(boolean | undefined)",
                                value: input.deprecated,
                            })) &&
                        (undefined === input.title ||
                            "string" === typeof input.title ||
                            $guard(_exceptionable, {
                                path: _path + ".title",
                                expected: "(string | undefined)",
                                value: input.title,
                            })) &&
                        (undefined === input.description ||
                            "string" === typeof input.description ||
                            $guard(_exceptionable, {
                                path: _path + ".description",
                                expected: "(string | undefined)",
                                value: input.description,
                            })) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index24: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index24 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                            $ao3(
                                                elem,
                                                _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index24 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index24 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                        (undefined === input["x-typia-required"] ||
                            "boolean" === typeof input["x-typia-required"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-required"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-required"],
                            })) &&
                        (undefined === input["x-typia-optional"] ||
                            "boolean" === typeof input["x-typia-optional"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-optional"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-optional"],
                            })) &&
                        (undefined === input["x-typia-rest"] ||
                            "boolean" === typeof input["x-typia-rest"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-rest"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-rest"],
                            }));
                    const $ao15 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.$ref ||
                            $guard(_exceptionable, {
                                path: _path + ".$ref",
                                expected: "string",
                                value: input.$ref,
                            })) &&
                        (undefined === input.deprecated ||
                            "boolean" === typeof input.deprecated ||
                            $guard(_exceptionable, {
                                path: _path + ".deprecated",
                                expected: "(boolean | undefined)",
                                value: input.deprecated,
                            })) &&
                        (undefined === input.title ||
                            "string" === typeof input.title ||
                            $guard(_exceptionable, {
                                path: _path + ".title",
                                expected: "(string | undefined)",
                                value: input.title,
                            })) &&
                        (undefined === input.description ||
                            "string" === typeof input.description ||
                            $guard(_exceptionable, {
                                path: _path + ".description",
                                expected: "(string | undefined)",
                                value: input.description,
                            })) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index25: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index25 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                            $ao3(
                                                elem,
                                                _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index25 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index25 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                        (undefined === input["x-typia-required"] ||
                            "boolean" === typeof input["x-typia-required"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-required"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-required"],
                            })) &&
                        (undefined === input["x-typia-optional"] ||
                            "boolean" === typeof input["x-typia-optional"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-optional"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-optional"],
                            })) &&
                        (undefined === input["x-typia-rest"] ||
                            "boolean" === typeof input["x-typia-rest"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-rest"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-rest"],
                            }));
                    const $ao16 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("null" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"null"',
                                value: input.type,
                            })) &&
                        (undefined === input.deprecated ||
                            "boolean" === typeof input.deprecated ||
                            $guard(_exceptionable, {
                                path: _path + ".deprecated",
                                expected: "(boolean | undefined)",
                                value: input.deprecated,
                            })) &&
                        (undefined === input.title ||
                            "string" === typeof input.title ||
                            $guard(_exceptionable, {
                                path: _path + ".title",
                                expected: "(string | undefined)",
                                value: input.title,
                            })) &&
                        (undefined === input.description ||
                            "string" === typeof input.description ||
                            $guard(_exceptionable, {
                                path: _path + ".description",
                                expected: "(string | undefined)",
                                value: input.description,
                            })) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index26: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index26 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                            $ao3(
                                                elem,
                                                _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index26 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index26 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                        (undefined === input["x-typia-required"] ||
                            "boolean" === typeof input["x-typia-required"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-required"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-required"],
                            })) &&
                        (undefined === input["x-typia-optional"] ||
                            "boolean" === typeof input["x-typia-optional"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-optional"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-optional"],
                            })) &&
                        (undefined === input["x-typia-rest"] ||
                            "boolean" === typeof input["x-typia-rest"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-rest"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-rest"],
                            }));
                    const $ao17 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (null !== input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: "undefined",
                                value: input.type,
                            })) &&
                        (undefined === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: "undefined",
                                value: input.type,
                            })) &&
                        (undefined === input.deprecated ||
                            "boolean" === typeof input.deprecated ||
                            $guard(_exceptionable, {
                                path: _path + ".deprecated",
                                expected: "(boolean | undefined)",
                                value: input.deprecated,
                            })) &&
                        (undefined === input.title ||
                            "string" === typeof input.title ||
                            $guard(_exceptionable, {
                                path: _path + ".title",
                                expected: "(string | undefined)",
                                value: input.title,
                            })) &&
                        (undefined === input.description ||
                            "string" === typeof input.description ||
                            $guard(_exceptionable, {
                                path: _path + ".description",
                                expected: "(string | undefined)",
                                value: input.description,
                            })) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index27: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index27 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                            $ao3(
                                                elem,
                                                _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index27 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index27 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                        (undefined === input["x-typia-required"] ||
                            "boolean" === typeof input["x-typia-required"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-required"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-required"],
                            })) &&
                        (undefined === input["x-typia-optional"] ||
                            "boolean" === typeof input["x-typia-optional"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-optional"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-optional"],
                            })) &&
                        (undefined === input["x-typia-rest"] ||
                            "boolean" === typeof input["x-typia-rest"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-rest"]',
                                expected: "(boolean | undefined)",
                                value: input["x-typia-rest"],
                            }));
                    const $au0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("integer" === input.type)
                                return $ao9(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (
                                "object" === typeof input.items &&
                                null !== input.items &&
                                false === Array.isArray(input.items) &&
                                $au0(
                                    input.items,
                                    _path + ".items",
                                    false && _exceptionable,
                                )
                            )
                                return $ao12(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (
                                Array.isArray(input.items) &&
                                input.items.every(
                                    (elem: any, _index28: number) =>
                                        "object" === typeof elem &&
                                        null !== elem &&
                                        false === Array.isArray(elem) &&
                                        $au0(
                                            elem,
                                            _path + ".items[" + _index28 + "]",
                                            false && _exceptionable,
                                        ),
                                )
                            )
                                return $ao13(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.oneOf)
                                return $ao14(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.$ref)
                                return $ao15(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if ("null" === input.type)
                                return $ao16(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else
                                return (
                                    $ao6(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $ao5(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $ao2(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $ao7(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $ao10(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $ao11(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $ao17(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $guard(_exceptionable, {
                                        path: _path,
                                        expected:
                                            '(IJsonSchema.IEnumeration<"string"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                                        value: input,
                                    })
                                );
                        })();
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "IJsonComponents.IObject",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "IJsonComponents.IObject",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        })(app.components.schemas?.[key]);
    const query: IJsonComponents.IObject = getter("IQuery");
    const partial: IJsonComponents.IObject = getter("PartialIQuery");
    const required: IJsonComponents.IObject = getter("RequiredIQuery");
    validate(query)([
        ["required", true, false],
        ["nonRequired", false, false],
        ["optional", true, true],
        ["none", false, true],
    ]);
    validate(partial)([
        ["required", true, true],
        ["nonRequired", false, true],
        ["optional", true, true],
        ["none", false, true],
    ]);
    validate(required)([
        ["required", true, false],
        ["nonRequired", false, false],
        ["optional", true, false],
        ["none", false, false],
    ]);
};
const validate = (obj: IJsonComponents.IObject) => (expected: Property[]) => {
    const result: Property[] = Object.entries(obj.properties).map(
        ([key, value]) => [
            key,
            value["x-typia-required"]!,
            value["x-typia-optional"]!,
        ],
    );
    TestValidator.equals(obj.$id ?? "")(
        expected.sort((a, b) => a[0].localeCompare(b[0])),
    )(result.sort((a, b) => a[0].localeCompare(b[0])));
};
type Property = [string, boolean, boolean];
