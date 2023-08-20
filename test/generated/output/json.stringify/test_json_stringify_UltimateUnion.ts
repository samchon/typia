import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_json_stringify_UltimateUnion =
    _test_json_stringify<UltimateUnion>(UltimateUnion)((input) =>
        ((input: UltimateUnion): string => {
            const $io1 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "boolean" === typeof elem) &&
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
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io2 = (input: any): boolean =>
                "type" === input.kind &&
                ("int" === input.value ||
                    "uint" === input.value ||
                    "int32" === input.value ||
                    "uint32" === input.value ||
                    "int64" === input.value ||
                    "uint64" === input.value ||
                    "float" === input.value ||
                    "double" === input.value);
            const $io3 = (input: any): boolean =>
                "minimum" === input.kind && "number" === typeof input.value;
            const $io4 = (input: any): boolean =>
                "maximum" === input.kind && "number" === typeof input.value;
            const $io5 = (input: any): boolean =>
                "exclusiveMinimum" === input.kind &&
                "number" === typeof input.value;
            const $io6 = (input: any): boolean =>
                "exclusiveMaximum" === input.kind &&
                "number" === typeof input.value;
            const $io7 = (input: any): boolean =>
                "multipleOf" === input.kind && "number" === typeof input.value;
            const $io8 = (input: any): boolean =>
                "step" === input.kind && "number" === typeof input.value;
            const $io9 = (input: any): boolean =>
                "format" === input.kind &&
                ("url" === input.value ||
                    "uuid" === input.value ||
                    "email" === input.value ||
                    "ipv4" === input.value ||
                    "ipv6" === input.value ||
                    "date" === input.value ||
                    "datetime" === input.value);
            const $io10 = (input: any): boolean =>
                "pattern" === input.kind && "string" === typeof input.value;
            const $io11 = (input: any): boolean =>
                "length" === input.kind && "number" === typeof input.value;
            const $io12 = (input: any): boolean =>
                "minLength" === input.kind && "number" === typeof input.value;
            const $io13 = (input: any): boolean =>
                "maxLength" === input.kind && "number" === typeof input.value;
            const $io14 = (input: any): boolean =>
                "items" === input.kind && "number" === typeof input.value;
            const $io15 = (input: any): boolean =>
                "minItems" === input.kind && "number" === typeof input.value;
            const $io16 = (input: any): boolean =>
                "maxItems" === input.kind && "number" === typeof input.value;
            const $io17 = (input: any): boolean =>
                "string" === typeof input.name &&
                (undefined === input.text ||
                    (Array.isArray(input.text) &&
                        input.text.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io18(elem),
                        )));
            const $io18 = (input: any): boolean =>
                "string" === typeof input.text &&
                "string" === typeof input.kind;
            const $io19 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "number" === typeof elem) &&
                (undefined === input["default"] ||
                    "number" === typeof input["default"]) &&
                "number" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io20 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "string" === typeof elem) &&
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
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io21 = (input: any): boolean =>
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
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io22 = (input: any): boolean =>
                (undefined === input.minimum ||
                    ("number" === typeof input.minimum &&
                        Math.floor(input.minimum) === input.minimum)) &&
                (undefined === input.maximum ||
                    ("number" === typeof input.maximum &&
                        Math.floor(input.maximum) === input.maximum)) &&
                (undefined === input.exclusiveMinimum ||
                    "boolean" === typeof input.exclusiveMinimum) &&
                (undefined === input.exclusiveMaximum ||
                    "boolean" === typeof input.exclusiveMaximum) &&
                (undefined === input.multipleOf ||
                    ("number" === typeof input.multipleOf &&
                        Math.floor(input.multipleOf) === input.multipleOf)) &&
                (undefined === input["default"] ||
                    "number" === typeof input["default"]) &&
                "integer" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io23 = (input: any): boolean =>
                (undefined === input.minimum ||
                    "number" === typeof input.minimum) &&
                (undefined === input.maximum ||
                    "number" === typeof input.maximum) &&
                (undefined === input.exclusiveMinimum ||
                    "boolean" === typeof input.exclusiveMinimum) &&
                (undefined === input.exclusiveMaximum ||
                    "boolean" === typeof input.exclusiveMaximum) &&
                (undefined === input.multipleOf ||
                    "number" === typeof input.multipleOf) &&
                (undefined === input["default"] ||
                    "number" === typeof input["default"]) &&
                "number" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io24 = (input: any): boolean =>
                (undefined === input.minLength ||
                    ("number" === typeof input.minLength &&
                        Math.floor(input.minLength) === input.minLength &&
                        0 <= input.minLength)) &&
                (undefined === input.maxLength ||
                    ("number" === typeof input.maxLength &&
                        Math.floor(input.maxLength) === input.maxLength &&
                        0 <= input.maxLength)) &&
                (undefined === input.pattern ||
                    "string" === typeof input.pattern) &&
                (undefined === input.format ||
                    "string" === typeof input.format) &&
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
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io25 = (input: any): boolean =>
                "object" === typeof input.items &&
                null !== input.items &&
                false === Array.isArray(input.items) &&
                $iu0(input.items) &&
                (undefined === input.minItems ||
                    ("number" === typeof input.minItems &&
                        Math.floor(input.minItems) === input.minItems &&
                        0 <= input.minItems)) &&
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        Math.floor(input.maxItems) === input.maxItems &&
                        0 <= input.maxItems)) &&
                (undefined === input["x-typia-tuple"] ||
                    ("object" === typeof input["x-typia-tuple"] &&
                        null !== input["x-typia-tuple"] &&
                        $io26(input["x-typia-tuple"]))) &&
                "array" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io26 = (input: any): boolean =>
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
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        Math.floor(input.maxItems) === input.maxItems &&
                        0 <= input.maxItems)) &&
                "array" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io27 = (input: any): boolean =>
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
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io28 = (input: any): boolean =>
                "string" === typeof input.$ref &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io29 = (input: any): boolean =>
                "null" === input.type &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io30 = (input: any): boolean =>
                null !== input.type &&
                undefined === input.type &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io31 = (input: any): boolean =>
                undefined === input.schemas ||
                ("object" === typeof input.schemas &&
                    null !== input.schemas &&
                    false === Array.isArray(input.schemas) &&
                    $io32(input.schemas));
            const $io32 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            false === Array.isArray(value) &&
                            $iu2(value)
                        );
                    return true;
                });
            const $io33 = (input: any): boolean =>
                (undefined === input.$id || "string" === typeof input.$id) &&
                "object" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                "object" === typeof input.properties &&
                null !== input.properties &&
                false === Array.isArray(input.properties) &&
                $io34(input.properties) &&
                (undefined === input.patternProperties ||
                    ("object" === typeof input.patternProperties &&
                        null !== input.patternProperties &&
                        false === Array.isArray(input.patternProperties) &&
                        $io34(input.patternProperties))) &&
                (undefined === input.additionalProperties ||
                    ("object" === typeof input.additionalProperties &&
                        null !== input.additionalProperties &&
                        false === Array.isArray(input.additionalProperties) &&
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
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-patternProperties"] ||
                    ("object" === typeof input["x-typia-patternProperties"] &&
                        null !== input["x-typia-patternProperties"] &&
                        false ===
                            Array.isArray(input["x-typia-patternProperties"]) &&
                        $io34(input["x-typia-patternProperties"]))) &&
                (undefined === input["x-typia-additionalProperties"] ||
                    ("object" ===
                        typeof input["x-typia-additionalProperties"] &&
                        null !== input["x-typia-additionalProperties"] &&
                        false ===
                            Array.isArray(
                                input["x-typia-additionalProperties"],
                            ) &&
                        $iu0(input["x-typia-additionalProperties"])));
            const $io34 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            false === Array.isArray(value) &&
                            $iu0(value)
                        );
                    return true;
                });
            const $io35 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "boolean" === typeof elem) &&
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
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io36 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "number" === typeof elem) &&
                (undefined === input["default"] ||
                    "number" === typeof input["default"]) &&
                "number" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io37 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "string" === typeof elem) &&
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
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io38 = (input: any): boolean =>
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
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io39 = (input: any): boolean =>
                (undefined === input.minimum ||
                    ("number" === typeof input.minimum &&
                        Math.floor(input.minimum) === input.minimum)) &&
                (undefined === input.maximum ||
                    ("number" === typeof input.maximum &&
                        Math.floor(input.maximum) === input.maximum)) &&
                (undefined === input.exclusiveMinimum ||
                    "boolean" === typeof input.exclusiveMinimum) &&
                (undefined === input.exclusiveMaximum ||
                    "boolean" === typeof input.exclusiveMaximum) &&
                (undefined === input.multipleOf ||
                    ("number" === typeof input.multipleOf &&
                        Math.floor(input.multipleOf) === input.multipleOf)) &&
                (undefined === input["default"] ||
                    "number" === typeof input["default"]) &&
                "integer" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io40 = (input: any): boolean =>
                (undefined === input.minimum ||
                    "number" === typeof input.minimum) &&
                (undefined === input.maximum ||
                    "number" === typeof input.maximum) &&
                (undefined === input.exclusiveMinimum ||
                    "boolean" === typeof input.exclusiveMinimum) &&
                (undefined === input.exclusiveMaximum ||
                    "boolean" === typeof input.exclusiveMaximum) &&
                (undefined === input.multipleOf ||
                    "number" === typeof input.multipleOf) &&
                (undefined === input["default"] ||
                    "number" === typeof input["default"]) &&
                "number" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io41 = (input: any): boolean =>
                (undefined === input.minLength ||
                    ("number" === typeof input.minLength &&
                        Math.floor(input.minLength) === input.minLength &&
                        0 <= input.minLength)) &&
                (undefined === input.maxLength ||
                    ("number" === typeof input.maxLength &&
                        Math.floor(input.maxLength) === input.maxLength &&
                        0 <= input.maxLength)) &&
                (undefined === input.pattern ||
                    "string" === typeof input.pattern) &&
                (undefined === input.format ||
                    "string" === typeof input.format) &&
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
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io42 = (input: any): boolean =>
                "object" === typeof input.items &&
                null !== input.items &&
                false === Array.isArray(input.items) &&
                $iu0(input.items) &&
                (undefined === input.minItems ||
                    ("number" === typeof input.minItems &&
                        Math.floor(input.minItems) === input.minItems &&
                        0 <= input.minItems)) &&
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        Math.floor(input.maxItems) === input.maxItems &&
                        0 <= input.maxItems)) &&
                (undefined === input["x-typia-tuple"] ||
                    ("object" === typeof input["x-typia-tuple"] &&
                        null !== input["x-typia-tuple"] &&
                        $io26(input["x-typia-tuple"]))) &&
                "array" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io43 = (input: any): boolean =>
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
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        Math.floor(input.maxItems) === input.maxItems &&
                        0 <= input.maxItems)) &&
                "array" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io44 = (input: any): boolean =>
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
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io45 = (input: any): boolean =>
                "string" === typeof input.$ref &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io46 = (input: any): boolean =>
                "null" === input.type &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io47 = (input: any): boolean =>
                null !== input.type &&
                undefined === input.type &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu1(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io17(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $iu0 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $io22(input);
                    else if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu0(input.items)
                    )
                        return $io25(input);
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
                        return $io26(input);
                    else if (undefined !== input.oneOf) return $io27(input);
                    else if (undefined !== input.$ref) return $io28(input);
                    else if ("null" === input.type) return $io29(input);
                    else
                        return (
                            $io20(input) ||
                            $io19(input) ||
                            $io1(input) ||
                            $io21(input) ||
                            $io23(input) ||
                            $io24(input) ||
                            $io30(input)
                        );
                })();
            const $iu1 = (input: any): any =>
                (() => {
                    if ("maxItems" === input.kind) return $io16(input);
                    else if ("minItems" === input.kind) return $io15(input);
                    else if ("items" === input.kind) return $io14(input);
                    else if ("maxLength" === input.kind) return $io13(input);
                    else if ("minLength" === input.kind) return $io12(input);
                    else if ("length" === input.kind) return $io11(input);
                    else if ("pattern" === input.kind) return $io10(input);
                    else if ("format" === input.kind) return $io9(input);
                    else if ("step" === input.kind) return $io8(input);
                    else if ("multipleOf" === input.kind) return $io7(input);
                    else if ("exclusiveMaximum" === input.kind)
                        return $io6(input);
                    else if ("exclusiveMinimum" === input.kind)
                        return $io5(input);
                    else if ("maximum" === input.kind) return $io4(input);
                    else if ("minimum" === input.kind) return $io3(input);
                    else if ("type" === input.kind) return $io2(input);
                    else return false;
                })();
            const $iu2 = (input: any): any =>
                (() => {
                    if ("object" === input.type) return $io33(input);
                    else if ("integer" === input.type) return $io39(input);
                    else if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu0(input.items)
                    )
                        return $io42(input);
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
                        return $io43(input);
                    else if (undefined !== input.oneOf) return $io44(input);
                    else if (undefined !== input.$ref) return $io45(input);
                    else if ("null" === input.type) return $io46(input);
                    else
                        return (
                            $io37(input) ||
                            $io36(input) ||
                            $io35(input) ||
                            $io38(input) ||
                            $io40(input) ||
                            $io41(input) ||
                            $io47(input)
                        );
                })();
            const $string = (typia.json.stringify as any).string;
            const $throws = (typia.json.stringify as any).throws;
            const $number = (typia.json.stringify as any).number;
            const $tail = (typia.json.stringify as any).tail;
            const $join = (typia.json.stringify as any).join;
            const $so0 = (input: any): any =>
                `{"schemas":${`[${input.schemas
                    .map((elem: any) => $su0(elem))
                    .join(",")}]`},"components":${$so31(
                    input.components,
                )},"purpose":${(() => {
                    if ("string" === typeof input.purpose)
                        return $string(input.purpose);
                    if ("string" === typeof input.purpose)
                        return '"' + input.purpose + '"';
                    $throws({
                        expected: '("ajv" | "swagger")',
                        value: input.purpose,
                    });
                })()}}`;
            const $so1 = (input: any): any =>
                `{${
                    undefined === input["default"]
                        ? ""
                        : `"default":${
                              undefined !== input["default"]
                                  ? input["default"]
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }"enum":${`[${input["enum"]
                    .map((elem: any) => elem)
                    .join(",")}]`},"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"boolean"',
                        value: input.type,
                    });
                })()}}`;
            const $so2 = (input: any): any =>
                `{"kind":${(() => {
                    if ("string" === typeof input.kind)
                        return $string(input.kind);
                    if ("string" === typeof input.kind)
                        return '"' + input.kind + '"';
                    $throws({
                        expected: '"type"',
                        value: input.kind,
                    });
                })()},"value":${(() => {
                    if ("string" === typeof input.value)
                        return $string(input.value);
                    if ("string" === typeof input.value)
                        return '"' + input.value + '"';
                    $throws({
                        expected:
                            '("double" | "float" | "int" | "int32" | "int64" | "uint" | "uint32" | "uint64")',
                        value: input.value,
                    });
                })()}}`;
            const $so3 = (input: any): any =>
                `{"kind":${(() => {
                    if ("string" === typeof input.kind)
                        return $string(input.kind);
                    if ("string" === typeof input.kind)
                        return '"' + input.kind + '"';
                    $throws({
                        expected: '"minimum"',
                        value: input.kind,
                    });
                })()},"value":${$number(input.value)}}`;
            const $so4 = (input: any): any =>
                `{"kind":${(() => {
                    if ("string" === typeof input.kind)
                        return $string(input.kind);
                    if ("string" === typeof input.kind)
                        return '"' + input.kind + '"';
                    $throws({
                        expected: '"maximum"',
                        value: input.kind,
                    });
                })()},"value":${$number(input.value)}}`;
            const $so5 = (input: any): any =>
                `{"kind":${(() => {
                    if ("string" === typeof input.kind)
                        return $string(input.kind);
                    if ("string" === typeof input.kind)
                        return '"' + input.kind + '"';
                    $throws({
                        expected: '"exclusiveMinimum"',
                        value: input.kind,
                    });
                })()},"value":${$number(input.value)}}`;
            const $so6 = (input: any): any =>
                `{"kind":${(() => {
                    if ("string" === typeof input.kind)
                        return $string(input.kind);
                    if ("string" === typeof input.kind)
                        return '"' + input.kind + '"';
                    $throws({
                        expected: '"exclusiveMaximum"',
                        value: input.kind,
                    });
                })()},"value":${$number(input.value)}}`;
            const $so7 = (input: any): any =>
                `{"kind":${(() => {
                    if ("string" === typeof input.kind)
                        return $string(input.kind);
                    if ("string" === typeof input.kind)
                        return '"' + input.kind + '"';
                    $throws({
                        expected: '"multipleOf"',
                        value: input.kind,
                    });
                })()},"value":${$number(input.value)}}`;
            const $so8 = (input: any): any =>
                `{"kind":${(() => {
                    if ("string" === typeof input.kind)
                        return $string(input.kind);
                    if ("string" === typeof input.kind)
                        return '"' + input.kind + '"';
                    $throws({
                        expected: '"step"',
                        value: input.kind,
                    });
                })()},"value":${$number(input.value)}}`;
            const $so9 = (input: any): any =>
                `{"kind":${(() => {
                    if ("string" === typeof input.kind)
                        return $string(input.kind);
                    if ("string" === typeof input.kind)
                        return '"' + input.kind + '"';
                    $throws({
                        expected: '"format"',
                        value: input.kind,
                    });
                })()},"value":${(() => {
                    if ("string" === typeof input.value)
                        return $string(input.value);
                    if ("string" === typeof input.value)
                        return '"' + input.value + '"';
                    $throws({
                        expected:
                            '("date" | "datetime" | "email" | "ipv4" | "ipv6" | "url" | "uuid")',
                        value: input.value,
                    });
                })()}}`;
            const $so10 = (input: any): any =>
                `{"kind":${(() => {
                    if ("string" === typeof input.kind)
                        return $string(input.kind);
                    if ("string" === typeof input.kind)
                        return '"' + input.kind + '"';
                    $throws({
                        expected: '"pattern"',
                        value: input.kind,
                    });
                })()},"value":${$string(input.value)}}`;
            const $so11 = (input: any): any =>
                `{"kind":${(() => {
                    if ("string" === typeof input.kind)
                        return $string(input.kind);
                    if ("string" === typeof input.kind)
                        return '"' + input.kind + '"';
                    $throws({
                        expected: '"length"',
                        value: input.kind,
                    });
                })()},"value":${$number(input.value)}}`;
            const $so12 = (input: any): any =>
                `{"kind":${(() => {
                    if ("string" === typeof input.kind)
                        return $string(input.kind);
                    if ("string" === typeof input.kind)
                        return '"' + input.kind + '"';
                    $throws({
                        expected: '"minLength"',
                        value: input.kind,
                    });
                })()},"value":${$number(input.value)}}`;
            const $so13 = (input: any): any =>
                `{"kind":${(() => {
                    if ("string" === typeof input.kind)
                        return $string(input.kind);
                    if ("string" === typeof input.kind)
                        return '"' + input.kind + '"';
                    $throws({
                        expected: '"maxLength"',
                        value: input.kind,
                    });
                })()},"value":${$number(input.value)}}`;
            const $so14 = (input: any): any =>
                `{"kind":${(() => {
                    if ("string" === typeof input.kind)
                        return $string(input.kind);
                    if ("string" === typeof input.kind)
                        return '"' + input.kind + '"';
                    $throws({
                        expected: '"items"',
                        value: input.kind,
                    });
                })()},"value":${$number(input.value)}}`;
            const $so15 = (input: any): any =>
                `{"kind":${(() => {
                    if ("string" === typeof input.kind)
                        return $string(input.kind);
                    if ("string" === typeof input.kind)
                        return '"' + input.kind + '"';
                    $throws({
                        expected: '"minItems"',
                        value: input.kind,
                    });
                })()},"value":${$number(input.value)}}`;
            const $so16 = (input: any): any =>
                `{"kind":${(() => {
                    if ("string" === typeof input.kind)
                        return $string(input.kind);
                    if ("string" === typeof input.kind)
                        return '"' + input.kind + '"';
                    $throws({
                        expected: '"maxItems"',
                        value: input.kind,
                    });
                })()},"value":${$number(input.value)}}`;
            const $so17 = (input: any): any =>
                `{${
                    undefined === input.text
                        ? ""
                        : `"text":${
                              undefined !== input.text
                                  ? `[${input.text
                                        .map(
                                            (elem: any) =>
                                                `{"text":${$string(
                                                    (elem as any).text,
                                                )},"kind":${$string(
                                                    (elem as any).kind,
                                                )}}`,
                                        )
                                        .join(",")}]`
                                  : undefined
                          },`
                }"name":${$string(input.name)}}`;
            const $so19 = (input: any): any =>
                `{${
                    undefined === input["default"]
                        ? ""
                        : `"default":${
                              undefined !== input["default"]
                                  ? $number(input["default"])
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }"enum":${`[${input["enum"]
                    .map((elem: any) => $number(elem))
                    .join(",")}]`},"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"number"',
                        value: input.type,
                    });
                })()}}`;
            const $so20 = (input: any): any =>
                `{${
                    undefined === input["default"]
                        ? ""
                        : `"default":${
                              undefined !== input["default"]
                                  ? $string(input["default"])
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }"enum":${`[${input["enum"]
                    .map((elem: any) => $string(elem))
                    .join(",")}]`},"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"string"',
                        value: input.type,
                    });
                })()}}`;
            const $so21 = (input: any): any =>
                `{${
                    undefined === input["default"]
                        ? ""
                        : `"default":${
                              undefined !== input["default"]
                                  ? input["default"]
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"boolean"',
                        value: input.type,
                    });
                })()}}`;
            const $so22 = (input: any): any =>
                `{${
                    undefined === input.minimum
                        ? ""
                        : `"minimum":${
                              undefined !== input.minimum
                                  ? $number(input.minimum)
                                  : undefined
                          },`
                }${
                    undefined === input.maximum
                        ? ""
                        : `"maximum":${
                              undefined !== input.maximum
                                  ? $number(input.maximum)
                                  : undefined
                          },`
                }${
                    undefined === input.exclusiveMinimum
                        ? ""
                        : `"exclusiveMinimum":${
                              undefined !== input.exclusiveMinimum
                                  ? input.exclusiveMinimum
                                  : undefined
                          },`
                }${
                    undefined === input.exclusiveMaximum
                        ? ""
                        : `"exclusiveMaximum":${
                              undefined !== input.exclusiveMaximum
                                  ? input.exclusiveMaximum
                                  : undefined
                          },`
                }${
                    undefined === input.multipleOf
                        ? ""
                        : `"multipleOf":${
                              undefined !== input.multipleOf
                                  ? $number(input.multipleOf)
                                  : undefined
                          },`
                }${
                    undefined === input["default"]
                        ? ""
                        : `"default":${
                              undefined !== input["default"]
                                  ? $number(input["default"])
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"integer"',
                        value: input.type,
                    });
                })()}}`;
            const $so23 = (input: any): any =>
                `{${
                    undefined === input.minimum
                        ? ""
                        : `"minimum":${
                              undefined !== input.minimum
                                  ? $number(input.minimum)
                                  : undefined
                          },`
                }${
                    undefined === input.maximum
                        ? ""
                        : `"maximum":${
                              undefined !== input.maximum
                                  ? $number(input.maximum)
                                  : undefined
                          },`
                }${
                    undefined === input.exclusiveMinimum
                        ? ""
                        : `"exclusiveMinimum":${
                              undefined !== input.exclusiveMinimum
                                  ? input.exclusiveMinimum
                                  : undefined
                          },`
                }${
                    undefined === input.exclusiveMaximum
                        ? ""
                        : `"exclusiveMaximum":${
                              undefined !== input.exclusiveMaximum
                                  ? input.exclusiveMaximum
                                  : undefined
                          },`
                }${
                    undefined === input.multipleOf
                        ? ""
                        : `"multipleOf":${
                              undefined !== input.multipleOf
                                  ? $number(input.multipleOf)
                                  : undefined
                          },`
                }${
                    undefined === input["default"]
                        ? ""
                        : `"default":${
                              undefined !== input["default"]
                                  ? $number(input["default"])
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"number"',
                        value: input.type,
                    });
                })()}}`;
            const $so24 = (input: any): any =>
                `{${
                    undefined === input.minLength
                        ? ""
                        : `"minLength":${
                              undefined !== input.minLength
                                  ? $number(input.minLength)
                                  : undefined
                          },`
                }${
                    undefined === input.maxLength
                        ? ""
                        : `"maxLength":${
                              undefined !== input.maxLength
                                  ? $number(input.maxLength)
                                  : undefined
                          },`
                }${
                    undefined === input.pattern
                        ? ""
                        : `"pattern":${
                              undefined !== input.pattern
                                  ? $string(input.pattern)
                                  : undefined
                          },`
                }${
                    undefined === input.format
                        ? ""
                        : `"format":${
                              undefined !== input.format
                                  ? $string(input.format)
                                  : undefined
                          },`
                }${
                    undefined === input["default"]
                        ? ""
                        : `"default":${
                              undefined !== input["default"]
                                  ? $string(input["default"])
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"string"',
                        value: input.type,
                    });
                })()}}`;
            const $so25 = (input: any): any =>
                `{${
                    undefined === input.minItems
                        ? ""
                        : `"minItems":${
                              undefined !== input.minItems
                                  ? $number(input.minItems)
                                  : undefined
                          },`
                }${
                    undefined === input.maxItems
                        ? ""
                        : `"maxItems":${
                              undefined !== input.maxItems
                                  ? $number(input.maxItems)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-tuple"]
                        ? ""
                        : `"x-typia-tuple":${
                              undefined !== input["x-typia-tuple"]
                                  ? $so26(input["x-typia-tuple"])
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }"items":${$su0(input.items)},"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"array"',
                        value: input.type,
                    });
                })()}}`;
            const $so26 = (input: any): any =>
                `{${
                    undefined === input.maxItems
                        ? ""
                        : `"maxItems":${
                              undefined !== input.maxItems
                                  ? $number(input.maxItems)
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }"items":${`[${input.items
                    .map((elem: any) => $su0(elem))
                    .join(",")}]`},"minItems":${$number(
                    input.minItems,
                )},"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"array"',
                        value: input.type,
                    });
                })()}}`;
            const $so27 = (input: any): any =>
                `{${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }"oneOf":${`[${input.oneOf
                    .map((elem: any) => $su0(elem))
                    .join(",")}]`}}`;
            const $so28 = (input: any): any =>
                `{${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }"$ref":${$string(input.$ref)}}`;
            const $so29 = (input: any): any =>
                `{${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"null"',
                        value: input.type,
                    });
                })()}}`;
            const $so30 = (input: any): any =>
                `{${$tail(
                    `${
                        undefined === input.deprecated
                            ? ""
                            : `"deprecated":${
                                  undefined !== input.deprecated
                                      ? input.deprecated
                                      : undefined
                              },`
                    }${
                        undefined === input.title
                            ? ""
                            : `"title":${
                                  undefined !== input.title
                                      ? $string(input.title)
                                      : undefined
                              },`
                    }${
                        undefined === input.description
                            ? ""
                            : `"description":${
                                  undefined !== input.description
                                      ? $string(input.description)
                                      : undefined
                              },`
                    }${
                        undefined === input["x-typia-metaTags"]
                            ? ""
                            : `"x-typia-metaTags":${
                                  undefined !== input["x-typia-metaTags"]
                                      ? `[${input["x-typia-metaTags"]
                                            .map((elem: any) => $su1(elem))
                                            .join(",")}]`
                                      : undefined
                              },`
                    }${
                        undefined === input["x-typia-jsDocTags"]
                            ? ""
                            : `"x-typia-jsDocTags":${
                                  undefined !== input["x-typia-jsDocTags"]
                                      ? `[${input["x-typia-jsDocTags"]
                                            .map((elem: any) => $so17(elem))
                                            .join(",")}]`
                                      : undefined
                              },`
                    }${
                        undefined === input["x-typia-required"]
                            ? ""
                            : `"x-typia-required":${
                                  undefined !== input["x-typia-required"]
                                      ? input["x-typia-required"]
                                      : undefined
                              },`
                    }${
                        undefined === input["x-typia-optional"]
                            ? ""
                            : `"x-typia-optional":${
                                  undefined !== input["x-typia-optional"]
                                      ? input["x-typia-optional"]
                                      : undefined
                              },`
                    }${
                        undefined === input["x-typia-rest"]
                            ? ""
                            : `"x-typia-rest":${
                                  undefined !== input["x-typia-rest"]
                                      ? input["x-typia-rest"]
                                      : undefined
                              }`
                    }`,
                )}}`;
            const $so31 = (input: any): any =>
                `{${$tail(
                    `${
                        undefined === input.schemas
                            ? ""
                            : `"schemas":${
                                  undefined !== input.schemas
                                      ? $so32(input.schemas)
                                      : undefined
                              }`
                    }`,
                )}}`;
            const $so32 = (input: any): any =>
                `{${Object.entries(input)
                    .map(([key, value]: [string, any]) => {
                        if (undefined === value) return "";
                        return `${JSON.stringify(key)}:${$su2(value)}`;
                    })
                    .filter((str: any) => "" !== str)
                    .join(",")}}`;
            const $so33 = (input: any): any =>
                `{${
                    undefined === input.$id
                        ? ""
                        : `"$id":${
                              undefined !== input.$id
                                  ? $string(input.$id)
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.patternProperties
                        ? ""
                        : `"patternProperties":${
                              undefined !== input.patternProperties
                                  ? $so34(input.patternProperties)
                                  : undefined
                          },`
                }${
                    undefined === input.additionalProperties
                        ? ""
                        : `"additionalProperties":${
                              undefined !== input.additionalProperties
                                  ? $su0(input.additionalProperties)
                                  : undefined
                          },`
                }${
                    undefined === input.required
                        ? ""
                        : `"required":${
                              undefined !== input.required
                                  ? `[${input.required
                                        .map((elem: any) => $string(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-patternProperties"]
                        ? ""
                        : `"x-typia-patternProperties":${
                              undefined !== input["x-typia-patternProperties"]
                                  ? $so34(input["x-typia-patternProperties"])
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-additionalProperties"]
                        ? ""
                        : `"x-typia-additionalProperties":${
                              undefined !==
                              input["x-typia-additionalProperties"]
                                  ? $su0(input["x-typia-additionalProperties"])
                                  : undefined
                          },`
                }"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"object"',
                        value: input.type,
                    });
                })()},"properties":${$so34(input.properties)}}`;
            const $so34 = (input: any): any =>
                `{${Object.entries(input)
                    .map(([key, value]: [string, any]) => {
                        if (undefined === value) return "";
                        return `${JSON.stringify(key)}:${$su0(value)}`;
                    })
                    .filter((str: any) => "" !== str)
                    .join(",")}}`;
            const $so35 = (input: any): any =>
                `{${
                    undefined === input["default"]
                        ? ""
                        : `"default":${
                              undefined !== input["default"]
                                  ? input["default"]
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }${
                    undefined === input.$id
                        ? ""
                        : `"$id":${
                              undefined !== input.$id
                                  ? $string(input.$id)
                                  : undefined
                          },`
                }${
                    undefined === input.$recursiveAnchor
                        ? ""
                        : `"$recursiveAnchor":${
                              undefined !== input.$recursiveAnchor
                                  ? input.$recursiveAnchor
                                  : undefined
                          },`
                }"enum":${`[${input["enum"]
                    .map((elem: any) => elem)
                    .join(",")}]`},"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"boolean"',
                        value: input.type,
                    });
                })()}}`;
            const $so36 = (input: any): any =>
                `{${
                    undefined === input["default"]
                        ? ""
                        : `"default":${
                              undefined !== input["default"]
                                  ? $number(input["default"])
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }${
                    undefined === input.$id
                        ? ""
                        : `"$id":${
                              undefined !== input.$id
                                  ? $string(input.$id)
                                  : undefined
                          },`
                }${
                    undefined === input.$recursiveAnchor
                        ? ""
                        : `"$recursiveAnchor":${
                              undefined !== input.$recursiveAnchor
                                  ? input.$recursiveAnchor
                                  : undefined
                          },`
                }"enum":${`[${input["enum"]
                    .map((elem: any) => $number(elem))
                    .join(",")}]`},"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"number"',
                        value: input.type,
                    });
                })()}}`;
            const $so37 = (input: any): any =>
                `{${
                    undefined === input["default"]
                        ? ""
                        : `"default":${
                              undefined !== input["default"]
                                  ? $string(input["default"])
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }${
                    undefined === input.$id
                        ? ""
                        : `"$id":${
                              undefined !== input.$id
                                  ? $string(input.$id)
                                  : undefined
                          },`
                }${
                    undefined === input.$recursiveAnchor
                        ? ""
                        : `"$recursiveAnchor":${
                              undefined !== input.$recursiveAnchor
                                  ? input.$recursiveAnchor
                                  : undefined
                          },`
                }"enum":${`[${input["enum"]
                    .map((elem: any) => $string(elem))
                    .join(",")}]`},"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"string"',
                        value: input.type,
                    });
                })()}}`;
            const $so38 = (input: any): any =>
                `{${
                    undefined === input["default"]
                        ? ""
                        : `"default":${
                              undefined !== input["default"]
                                  ? input["default"]
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }${
                    undefined === input.$id
                        ? ""
                        : `"$id":${
                              undefined !== input.$id
                                  ? $string(input.$id)
                                  : undefined
                          },`
                }${
                    undefined === input.$recursiveAnchor
                        ? ""
                        : `"$recursiveAnchor":${
                              undefined !== input.$recursiveAnchor
                                  ? input.$recursiveAnchor
                                  : undefined
                          },`
                }"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"boolean"',
                        value: input.type,
                    });
                })()}}`;
            const $so39 = (input: any): any =>
                `{${
                    undefined === input.minimum
                        ? ""
                        : `"minimum":${
                              undefined !== input.minimum
                                  ? $number(input.minimum)
                                  : undefined
                          },`
                }${
                    undefined === input.maximum
                        ? ""
                        : `"maximum":${
                              undefined !== input.maximum
                                  ? $number(input.maximum)
                                  : undefined
                          },`
                }${
                    undefined === input.exclusiveMinimum
                        ? ""
                        : `"exclusiveMinimum":${
                              undefined !== input.exclusiveMinimum
                                  ? input.exclusiveMinimum
                                  : undefined
                          },`
                }${
                    undefined === input.exclusiveMaximum
                        ? ""
                        : `"exclusiveMaximum":${
                              undefined !== input.exclusiveMaximum
                                  ? input.exclusiveMaximum
                                  : undefined
                          },`
                }${
                    undefined === input.multipleOf
                        ? ""
                        : `"multipleOf":${
                              undefined !== input.multipleOf
                                  ? $number(input.multipleOf)
                                  : undefined
                          },`
                }${
                    undefined === input["default"]
                        ? ""
                        : `"default":${
                              undefined !== input["default"]
                                  ? $number(input["default"])
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }${
                    undefined === input.$id
                        ? ""
                        : `"$id":${
                              undefined !== input.$id
                                  ? $string(input.$id)
                                  : undefined
                          },`
                }${
                    undefined === input.$recursiveAnchor
                        ? ""
                        : `"$recursiveAnchor":${
                              undefined !== input.$recursiveAnchor
                                  ? input.$recursiveAnchor
                                  : undefined
                          },`
                }"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"integer"',
                        value: input.type,
                    });
                })()}}`;
            const $so40 = (input: any): any =>
                `{${
                    undefined === input.minimum
                        ? ""
                        : `"minimum":${
                              undefined !== input.minimum
                                  ? $number(input.minimum)
                                  : undefined
                          },`
                }${
                    undefined === input.maximum
                        ? ""
                        : `"maximum":${
                              undefined !== input.maximum
                                  ? $number(input.maximum)
                                  : undefined
                          },`
                }${
                    undefined === input.exclusiveMinimum
                        ? ""
                        : `"exclusiveMinimum":${
                              undefined !== input.exclusiveMinimum
                                  ? input.exclusiveMinimum
                                  : undefined
                          },`
                }${
                    undefined === input.exclusiveMaximum
                        ? ""
                        : `"exclusiveMaximum":${
                              undefined !== input.exclusiveMaximum
                                  ? input.exclusiveMaximum
                                  : undefined
                          },`
                }${
                    undefined === input.multipleOf
                        ? ""
                        : `"multipleOf":${
                              undefined !== input.multipleOf
                                  ? $number(input.multipleOf)
                                  : undefined
                          },`
                }${
                    undefined === input["default"]
                        ? ""
                        : `"default":${
                              undefined !== input["default"]
                                  ? $number(input["default"])
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }${
                    undefined === input.$id
                        ? ""
                        : `"$id":${
                              undefined !== input.$id
                                  ? $string(input.$id)
                                  : undefined
                          },`
                }${
                    undefined === input.$recursiveAnchor
                        ? ""
                        : `"$recursiveAnchor":${
                              undefined !== input.$recursiveAnchor
                                  ? input.$recursiveAnchor
                                  : undefined
                          },`
                }"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"number"',
                        value: input.type,
                    });
                })()}}`;
            const $so41 = (input: any): any =>
                `{${
                    undefined === input.minLength
                        ? ""
                        : `"minLength":${
                              undefined !== input.minLength
                                  ? $number(input.minLength)
                                  : undefined
                          },`
                }${
                    undefined === input.maxLength
                        ? ""
                        : `"maxLength":${
                              undefined !== input.maxLength
                                  ? $number(input.maxLength)
                                  : undefined
                          },`
                }${
                    undefined === input.pattern
                        ? ""
                        : `"pattern":${
                              undefined !== input.pattern
                                  ? $string(input.pattern)
                                  : undefined
                          },`
                }${
                    undefined === input.format
                        ? ""
                        : `"format":${
                              undefined !== input.format
                                  ? $string(input.format)
                                  : undefined
                          },`
                }${
                    undefined === input["default"]
                        ? ""
                        : `"default":${
                              undefined !== input["default"]
                                  ? $string(input["default"])
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }${
                    undefined === input.$id
                        ? ""
                        : `"$id":${
                              undefined !== input.$id
                                  ? $string(input.$id)
                                  : undefined
                          },`
                }${
                    undefined === input.$recursiveAnchor
                        ? ""
                        : `"$recursiveAnchor":${
                              undefined !== input.$recursiveAnchor
                                  ? input.$recursiveAnchor
                                  : undefined
                          },`
                }"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"string"',
                        value: input.type,
                    });
                })()}}`;
            const $so42 = (input: any): any =>
                `{${
                    undefined === input.minItems
                        ? ""
                        : `"minItems":${
                              undefined !== input.minItems
                                  ? $number(input.minItems)
                                  : undefined
                          },`
                }${
                    undefined === input.maxItems
                        ? ""
                        : `"maxItems":${
                              undefined !== input.maxItems
                                  ? $number(input.maxItems)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-tuple"]
                        ? ""
                        : `"x-typia-tuple":${
                              undefined !== input["x-typia-tuple"]
                                  ? $so26(input["x-typia-tuple"])
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }${
                    undefined === input.$id
                        ? ""
                        : `"$id":${
                              undefined !== input.$id
                                  ? $string(input.$id)
                                  : undefined
                          },`
                }${
                    undefined === input.$recursiveAnchor
                        ? ""
                        : `"$recursiveAnchor":${
                              undefined !== input.$recursiveAnchor
                                  ? input.$recursiveAnchor
                                  : undefined
                          },`
                }"items":${$su0(input.items)},"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"array"',
                        value: input.type,
                    });
                })()}}`;
            const $so43 = (input: any): any =>
                `{${
                    undefined === input.maxItems
                        ? ""
                        : `"maxItems":${
                              undefined !== input.maxItems
                                  ? $number(input.maxItems)
                                  : undefined
                          },`
                }${
                    undefined === input.nullable
                        ? ""
                        : `"nullable":${
                              undefined !== input.nullable
                                  ? input.nullable
                                  : undefined
                          },`
                }${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }${
                    undefined === input.$id
                        ? ""
                        : `"$id":${
                              undefined !== input.$id
                                  ? $string(input.$id)
                                  : undefined
                          },`
                }${
                    undefined === input.$recursiveAnchor
                        ? ""
                        : `"$recursiveAnchor":${
                              undefined !== input.$recursiveAnchor
                                  ? input.$recursiveAnchor
                                  : undefined
                          },`
                }"items":${`[${input.items
                    .map((elem: any) => $su0(elem))
                    .join(",")}]`},"minItems":${$number(
                    input.minItems,
                )},"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"array"',
                        value: input.type,
                    });
                })()}}`;
            const $so44 = (input: any): any =>
                `{${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }${
                    undefined === input.$id
                        ? ""
                        : `"$id":${
                              undefined !== input.$id
                                  ? $string(input.$id)
                                  : undefined
                          },`
                }${
                    undefined === input.$recursiveAnchor
                        ? ""
                        : `"$recursiveAnchor":${
                              undefined !== input.$recursiveAnchor
                                  ? input.$recursiveAnchor
                                  : undefined
                          },`
                }"oneOf":${`[${input.oneOf
                    .map((elem: any) => $su0(elem))
                    .join(",")}]`}}`;
            const $so45 = (input: any): any =>
                `{${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }${
                    undefined === input.$id
                        ? ""
                        : `"$id":${
                              undefined !== input.$id
                                  ? $string(input.$id)
                                  : undefined
                          },`
                }${
                    undefined === input.$recursiveAnchor
                        ? ""
                        : `"$recursiveAnchor":${
                              undefined !== input.$recursiveAnchor
                                  ? input.$recursiveAnchor
                                  : undefined
                          },`
                }"$ref":${$string(input.$ref)}}`;
            const $so46 = (input: any): any =>
                `{${
                    undefined === input.deprecated
                        ? ""
                        : `"deprecated":${
                              undefined !== input.deprecated
                                  ? input.deprecated
                                  : undefined
                          },`
                }${
                    undefined === input.title
                        ? ""
                        : `"title":${
                              undefined !== input.title
                                  ? $string(input.title)
                                  : undefined
                          },`
                }${
                    undefined === input.description
                        ? ""
                        : `"description":${
                              undefined !== input.description
                                  ? $string(input.description)
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-metaTags"]
                        ? ""
                        : `"x-typia-metaTags":${
                              undefined !== input["x-typia-metaTags"]
                                  ? `[${input["x-typia-metaTags"]
                                        .map((elem: any) => $su1(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-jsDocTags"]
                        ? ""
                        : `"x-typia-jsDocTags":${
                              undefined !== input["x-typia-jsDocTags"]
                                  ? `[${input["x-typia-jsDocTags"]
                                        .map((elem: any) => $so17(elem))
                                        .join(",")}]`
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-required"]
                        ? ""
                        : `"x-typia-required":${
                              undefined !== input["x-typia-required"]
                                  ? input["x-typia-required"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-optional"]
                        ? ""
                        : `"x-typia-optional":${
                              undefined !== input["x-typia-optional"]
                                  ? input["x-typia-optional"]
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }${
                    undefined === input.$id
                        ? ""
                        : `"$id":${
                              undefined !== input.$id
                                  ? $string(input.$id)
                                  : undefined
                          },`
                }${
                    undefined === input.$recursiveAnchor
                        ? ""
                        : `"$recursiveAnchor":${
                              undefined !== input.$recursiveAnchor
                                  ? input.$recursiveAnchor
                                  : undefined
                          },`
                }"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"null"',
                        value: input.type,
                    });
                })()}}`;
            const $so47 = (input: any): any =>
                `{${$tail(
                    `${
                        undefined === input.deprecated
                            ? ""
                            : `"deprecated":${
                                  undefined !== input.deprecated
                                      ? input.deprecated
                                      : undefined
                              },`
                    }${
                        undefined === input.title
                            ? ""
                            : `"title":${
                                  undefined !== input.title
                                      ? $string(input.title)
                                      : undefined
                              },`
                    }${
                        undefined === input.description
                            ? ""
                            : `"description":${
                                  undefined !== input.description
                                      ? $string(input.description)
                                      : undefined
                              },`
                    }${
                        undefined === input["x-typia-metaTags"]
                            ? ""
                            : `"x-typia-metaTags":${
                                  undefined !== input["x-typia-metaTags"]
                                      ? `[${input["x-typia-metaTags"]
                                            .map((elem: any) => $su1(elem))
                                            .join(",")}]`
                                      : undefined
                              },`
                    }${
                        undefined === input["x-typia-jsDocTags"]
                            ? ""
                            : `"x-typia-jsDocTags":${
                                  undefined !== input["x-typia-jsDocTags"]
                                      ? `[${input["x-typia-jsDocTags"]
                                            .map((elem: any) => $so17(elem))
                                            .join(",")}]`
                                      : undefined
                              },`
                    }${
                        undefined === input["x-typia-required"]
                            ? ""
                            : `"x-typia-required":${
                                  undefined !== input["x-typia-required"]
                                      ? input["x-typia-required"]
                                      : undefined
                              },`
                    }${
                        undefined === input["x-typia-optional"]
                            ? ""
                            : `"x-typia-optional":${
                                  undefined !== input["x-typia-optional"]
                                      ? input["x-typia-optional"]
                                      : undefined
                              },`
                    }${
                        undefined === input["x-typia-rest"]
                            ? ""
                            : `"x-typia-rest":${
                                  undefined !== input["x-typia-rest"]
                                      ? input["x-typia-rest"]
                                      : undefined
                              },`
                    }${
                        undefined === input.$id
                            ? ""
                            : `"$id":${
                                  undefined !== input.$id
                                      ? $string(input.$id)
                                      : undefined
                              },`
                    }${
                        undefined === input.$recursiveAnchor
                            ? ""
                            : `"$recursiveAnchor":${
                                  undefined !== input.$recursiveAnchor
                                      ? input.$recursiveAnchor
                                      : undefined
                              }`
                    }`,
                )}}`;
            const $su0 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $so22(input);
                    else if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu0(input.items)
                    )
                        return $so25(input);
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
                        return $so26(input);
                    else if (undefined !== input.oneOf) return $so27(input);
                    else if (undefined !== input.$ref) return $so28(input);
                    else if ("null" === input.type) return $so29(input);
                    else
                        return (() => {
                            if ($io20(input)) return $so20(input);
                            else if ($io19(input)) return $so19(input);
                            else if ($io1(input)) return $so1(input);
                            else if ($io21(input)) return $so21(input);
                            else if ($io23(input)) return $so23(input);
                            else if ($io24(input)) return $so24(input);
                            else if ($io30(input)) return $so30(input);
                            else
                                $throws({
                                    expected:
                                        '(IJsonSchema.IEnumeration<"string"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                                    value: input,
                                });
                        })();
                })();
            const $su1 = (input: any): any =>
                (() => {
                    if ("maxItems" === input.kind) return $so16(input);
                    else if ("minItems" === input.kind) return $so15(input);
                    else if ("items" === input.kind) return $so14(input);
                    else if ("maxLength" === input.kind) return $so13(input);
                    else if ("minLength" === input.kind) return $so12(input);
                    else if ("length" === input.kind) return $so11(input);
                    else if ("pattern" === input.kind) return $so10(input);
                    else if ("format" === input.kind) return $so9(input);
                    else if ("step" === input.kind) return $so8(input);
                    else if ("multipleOf" === input.kind) return $so7(input);
                    else if ("exclusiveMaximum" === input.kind)
                        return $so6(input);
                    else if ("exclusiveMinimum" === input.kind)
                        return $so5(input);
                    else if ("maximum" === input.kind) return $so4(input);
                    else if ("minimum" === input.kind) return $so3(input);
                    else if ("type" === input.kind) return $so2(input);
                    else
                        $throws({
                            expected:
                                "(IMetadataTag.IMaxItems | IMetadataTag.IMinItems | IMetadataTag.IItems | IMetadataTag.IMaxLength | IMetadataTag.IMinLength | IMetadataTag.ILength | IMetadataTag.IPattern | IMetadataTag.IFormat | IMetadataTag.IStep | IMetadataTag.IMultipleOf | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IMaximum | IMetadataTag.IMinimum | IMetadataTag.INumberType)",
                            value: input,
                        });
                })();
            const $su2 = (input: any): any =>
                (() => {
                    if ("object" === input.type) return $so33(input);
                    else if ("integer" === input.type) return $so39(input);
                    else if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu0(input.items)
                    )
                        return $so42(input);
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
                        return $so43(input);
                    else if (undefined !== input.oneOf) return $so44(input);
                    else if (undefined !== input.$ref) return $so45(input);
                    else if ("null" === input.type) return $so46(input);
                    else
                        return (() => {
                            if ($io37(input)) return $so37(input);
                            else if ($io36(input)) return $so36(input);
                            else if ($io35(input)) return $so35(input);
                            else if ($io38(input)) return $so38(input);
                            else if ($io40(input)) return $so40(input);
                            else if ($io41(input)) return $so41(input);
                            else if ($io47(input)) return $so47(input);
                            else
                                $throws({
                                    expected:
                                        '(IEnumeration<"string"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"number"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"boolean"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IBoolean & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | INumber & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IString & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IUnknown & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; })',
                                    value: input,
                                });
                        })();
                })();
            return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
        })(input),
    );
