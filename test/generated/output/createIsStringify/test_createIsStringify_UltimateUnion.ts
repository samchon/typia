import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_createIsStringify_UltimateUnion = _test_isStringify(
    "UltimateUnion",
    UltimateUnion.generate,
    (input: UltimateUnion): string | null => {
        const is = (input: any): input is UltimateUnion => {
            const $join = (typia.createIsStringify as any).join;
            const $io0 = (input: any): boolean =>
                Array.isArray(input.schemas) &&
                input.schemas.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu3(elem),
                ) &&
                "object" === typeof input.components &&
                null !== input.components &&
                $io32(input.components) &&
                ("ajv" === input.purpose || "swagger" === input.purpose) &&
                "string" === typeof input.prefix;
            const $io1 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "boolean" === typeof elem) &&
                (undefined === input["default"] ||
                    "boolean" === typeof input["default"]) &&
                "boolean" === input.type &&
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io2 = (input: any): boolean =>
                "items" === input.kind &&
                "number" === typeof input.value &&
                Number.isFinite(input.value);
            const $io3 = (input: any): boolean =>
                "minItems" === input.kind &&
                "number" === typeof input.value &&
                Number.isFinite(input.value);
            const $io4 = (input: any): boolean =>
                "maxItems" === input.kind &&
                "number" === typeof input.value &&
                Number.isFinite(input.value);
            const $io5 = (input: any): boolean =>
                "format" === input.kind &&
                ("url" === input.value ||
                    "uuid" === input.value ||
                    "email" === input.value ||
                    "ipv4" === input.value ||
                    "ipv6" === input.value);
            const $io6 = (input: any): boolean =>
                "pattern" === input.kind && "string" === typeof input.value;
            const $io7 = (input: any): boolean =>
                "length" === input.kind &&
                "number" === typeof input.value &&
                Number.isFinite(input.value);
            const $io8 = (input: any): boolean =>
                "minLength" === input.kind &&
                "number" === typeof input.value &&
                Number.isFinite(input.value);
            const $io9 = (input: any): boolean =>
                "maxLength" === input.kind &&
                "number" === typeof input.value &&
                Number.isFinite(input.value);
            const $io10 = (input: any): boolean =>
                "type" === input.kind &&
                ("int" === input.value || "uint" === input.value);
            const $io11 = (input: any): boolean =>
                "minimum" === input.kind &&
                "number" === typeof input.value &&
                Number.isFinite(input.value);
            const $io12 = (input: any): boolean =>
                "maximum" === input.kind &&
                "number" === typeof input.value &&
                Number.isFinite(input.value);
            const $io13 = (input: any): boolean =>
                "exclusiveMinimum" === input.kind &&
                "number" === typeof input.value &&
                Number.isFinite(input.value);
            const $io14 = (input: any): boolean =>
                "exclusiveMaximum" === input.kind &&
                "number" === typeof input.value &&
                Number.isFinite(input.value);
            const $io15 = (input: any): boolean =>
                "multipleOf" === input.kind &&
                "number" === typeof input.value &&
                Number.isFinite(input.value);
            const $io16 = (input: any): boolean =>
                "step" === input.kind &&
                "number" === typeof input.value &&
                Number.isFinite(input.value);
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
                input["enum"].every(
                    (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                ) &&
                (undefined === input["default"] ||
                    ("number" === typeof input["default"] &&
                        Number.isFinite(input["default"]))) &&
                "number" === input.type &&
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io20 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "string" === typeof elem) &&
                (undefined === input["default"] ||
                    "string" === typeof input["default"]) &&
                "string" === input.type &&
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io21 = (input: any): boolean =>
                (undefined === input["default"] ||
                    "boolean" === typeof input["default"]) &&
                "boolean" === input.type &&
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io22 = (input: any): boolean =>
                (undefined === input.minimum ||
                    ("number" === typeof input.minimum &&
                        Number.isFinite(input.minimum) &&
                        parseInt(input.minimum) === input.minimum)) &&
                (undefined === input.maximum ||
                    ("number" === typeof input.maximum &&
                        Number.isFinite(input.maximum) &&
                        parseInt(input.maximum) === input.maximum)) &&
                (undefined === input.exclusiveMinimum ||
                    "boolean" === typeof input.exclusiveMinimum) &&
                (undefined === input.exclusiveMaximum ||
                    "boolean" === typeof input.exclusiveMaximum) &&
                (undefined === input.multipleOf ||
                    ("number" === typeof input.multipleOf &&
                        Number.isFinite(input.multipleOf) &&
                        parseInt(input.multipleOf) === input.multipleOf)) &&
                (undefined === input["default"] ||
                    ("number" === typeof input["default"] &&
                        Number.isFinite(input["default"]))) &&
                "integer" === input.type &&
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io23 = (input: any): boolean =>
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
                (undefined === input["default"] ||
                    ("number" === typeof input["default"] &&
                        Number.isFinite(input["default"]))) &&
                "number" === input.type &&
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io24 = (input: any): boolean =>
                (undefined === input.minLength ||
                    ("number" === typeof input.minLength &&
                        Number.isFinite(input.minLength) &&
                        parseInt(input.minLength) === input.minLength &&
                        0 <= input.minLength)) &&
                (undefined === input.maxLength ||
                    ("number" === typeof input.maxLength &&
                        Number.isFinite(input.maxLength) &&
                        parseInt(input.maxLength) === input.maxLength &&
                        0 <= input.maxLength)) &&
                (undefined === input.pattern ||
                    "string" === typeof input.pattern) &&
                (undefined === input.format ||
                    "string" === typeof input.format) &&
                (undefined === input["default"] ||
                    "string" === typeof input["default"]) &&
                "string" === input.type &&
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io25 = (input: any): boolean =>
                "object" === typeof input.items &&
                null !== input.items &&
                false === Array.isArray(input.items) &&
                $iu3(input.items) &&
                (undefined === input.minItems ||
                    ("number" === typeof input.minItems &&
                        Number.isFinite(input.minItems) &&
                        parseInt(input.minItems) === input.minItems &&
                        0 <= input.minItems)) &&
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        Number.isFinite(input.maxItems) &&
                        parseInt(input.maxItems) === input.maxItems &&
                        0 <= input.maxItems)) &&
                (undefined === input["x-typia-tuple"] ||
                    ("object" === typeof input["x-typia-tuple"] &&
                        null !== input["x-typia-tuple"] &&
                        $io26(input["x-typia-tuple"]))) &&
                "array" === input.type &&
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io26 = (input: any): boolean =>
                Array.isArray(input.items) &&
                input.items.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu2(elem),
                ) &&
                "array" === input.type &&
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io27 = (input: any): boolean =>
                Array.isArray(input.oneOf) &&
                input.oneOf.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu1(elem),
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
                                $iu0(elem),
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io29 = (input: any): boolean =>
                "string" === typeof input.$recursiveRef &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io30 = (input: any): boolean =>
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io31 = (input: any): boolean => true;
            const $io32 = (input: any): boolean =>
                "object" === typeof input.schemas &&
                null !== input.schemas &&
                false === Array.isArray(input.schemas) &&
                $io33(input.schemas);
            const $io33 = (input: any): boolean =>
                Object.keys(input).every((key) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            $io34(value)
                        );
                    return true;
                });
            const $io34 = (input: any): boolean =>
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor) &&
                "object" === input.type &&
                "boolean" === typeof input.nullable &&
                "object" === typeof input.properties &&
                null !== input.properties &&
                false === Array.isArray(input.properties) &&
                $io35(input.properties) &&
                (undefined === input.patternProperties ||
                    ("object" === typeof input.patternProperties &&
                        null !== input.patternProperties &&
                        false === Array.isArray(input.patternProperties) &&
                        $io35(input.patternProperties))) &&
                (undefined === input.additionalProperties ||
                    ("object" === typeof input.additionalProperties &&
                        null !== input.additionalProperties &&
                        false === Array.isArray(input.additionalProperties) &&
                        $iu3(input.additionalProperties))) &&
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
                        $io35(input["x-typia-patternProperties"]))) &&
                (undefined === input["x-typia-additionalProperties"] ||
                    ("object" ===
                        typeof input["x-typia-additionalProperties"] &&
                        null !== input["x-typia-additionalProperties"] &&
                        false ===
                            Array.isArray(
                                input["x-typia-additionalProperties"],
                            ) &&
                        $iu3(input["x-typia-additionalProperties"])));
            const $io35 = (input: any): boolean =>
                Object.keys(input).every((key) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            false === Array.isArray(value) &&
                            $iu3(value)
                        );
                    return true;
                });
            const $iu0 = (input: any): any =>
                (() => {
                    if ("items" === input.kind) return $io2(input);
                    if ("minItems" === input.kind) return $io3(input);
                    if ("maxItems" === input.kind) return $io4(input);
                    if ("format" === input.kind) return $io5(input);
                    if ("pattern" === input.kind) return $io6(input);
                    if ("length" === input.kind) return $io7(input);
                    if ("minLength" === input.kind) return $io8(input);
                    if ("maxLength" === input.kind) return $io9(input);
                    if ("type" === input.kind) return $io10(input);
                    if ("minimum" === input.kind) return $io11(input);
                    if ("maximum" === input.kind) return $io12(input);
                    if ("exclusiveMinimum" === input.kind) return $io13(input);
                    if ("exclusiveMaximum" === input.kind) return $io14(input);
                    if ("multipleOf" === input.kind) return $io15(input);
                    if ("step" === input.kind) return $io16(input);
                    return false;
                })();
            const $iu1 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $io22(input);
                    if (undefined !== input.oneOf) return $io27(input);
                    if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu2(elem),
                        )
                    )
                        return $io26(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu3(input.items)
                    )
                        return $io25(input);
                    if (undefined !== input.$ref) return $io28(input);
                    if (undefined !== input.$recursiveRef) return $io29(input);
                    if ("null" === input.type) return $io30(input);
                    return (() => {
                        if ($io1(input)) return $io1(input);
                        if ($io19(input)) return $io19(input);
                        if ($io20(input)) return $io20(input);
                        if ($io21(input)) return $io21(input);
                        if ($io23(input)) return $io23(input);
                        if ($io24(input)) return $io24(input);
                        if ($io31(input)) return $io31(input);
                        return false;
                    })();
                })();
            const $iu2 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $io22(input);
                    if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu2(elem),
                        )
                    )
                        return $io26(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu3(input.items)
                    )
                        return $io25(input);
                    if (undefined !== input.oneOf) return $io27(input);
                    if (undefined !== input.$ref) return $io28(input);
                    if (undefined !== input.$recursiveRef) return $io29(input);
                    if ("null" === input.type) return $io30(input);
                    return (() => {
                        if ($io1(input)) return $io1(input);
                        if ($io19(input)) return $io19(input);
                        if ($io20(input)) return $io20(input);
                        if ($io21(input)) return $io21(input);
                        if ($io23(input)) return $io23(input);
                        if ($io24(input)) return $io24(input);
                        if ($io31(input)) return $io31(input);
                        return false;
                    })();
                })();
            const $iu3 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $io22(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu3(input.items)
                    )
                        return $io25(input);
                    if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu2(elem),
                        )
                    )
                        return $io26(input);
                    if (undefined !== input.oneOf) return $io27(input);
                    if (undefined !== input.$ref) return $io28(input);
                    if (undefined !== input.$recursiveRef) return $io29(input);
                    if ("null" === input.type) return $io30(input);
                    return (() => {
                        if ($io1(input)) return $io1(input);
                        if ($io19(input)) return $io19(input);
                        if ($io20(input)) return $io20(input);
                        if ($io21(input)) return $io21(input);
                        if ($io23(input)) return $io23(input);
                        if ($io24(input)) return $io24(input);
                        if ($io31(input)) return $io31(input);
                        return false;
                    })();
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const stringify = (input: UltimateUnion): string => {
            const $string = (typia.createIsStringify as any).string;
            const $throws = (typia.createIsStringify as any).throws;
            const $number = (typia.createIsStringify as any).number;
            const $join = (typia.createIsStringify as any).join;
            const $io1 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "boolean" === typeof elem) &&
                (undefined === input["default"] ||
                    "boolean" === typeof input["default"]) &&
                "boolean" === input.type &&
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io2 = (input: any): boolean =>
                "items" === input.kind && "number" === typeof input.value;
            const $io3 = (input: any): boolean =>
                "minItems" === input.kind && "number" === typeof input.value;
            const $io4 = (input: any): boolean =>
                "maxItems" === input.kind && "number" === typeof input.value;
            const $io5 = (input: any): boolean =>
                "format" === input.kind &&
                ("url" === input.value ||
                    "uuid" === input.value ||
                    "email" === input.value ||
                    "ipv4" === input.value ||
                    "ipv6" === input.value);
            const $io6 = (input: any): boolean =>
                "pattern" === input.kind && "string" === typeof input.value;
            const $io7 = (input: any): boolean =>
                "length" === input.kind && "number" === typeof input.value;
            const $io8 = (input: any): boolean =>
                "minLength" === input.kind && "number" === typeof input.value;
            const $io9 = (input: any): boolean =>
                "maxLength" === input.kind && "number" === typeof input.value;
            const $io10 = (input: any): boolean =>
                "type" === input.kind &&
                ("int" === input.value || "uint" === input.value);
            const $io11 = (input: any): boolean =>
                "minimum" === input.kind && "number" === typeof input.value;
            const $io12 = (input: any): boolean =>
                "maximum" === input.kind && "number" === typeof input.value;
            const $io13 = (input: any): boolean =>
                "exclusiveMinimum" === input.kind &&
                "number" === typeof input.value;
            const $io14 = (input: any): boolean =>
                "exclusiveMaximum" === input.kind &&
                "number" === typeof input.value;
            const $io15 = (input: any): boolean =>
                "multipleOf" === input.kind && "number" === typeof input.value;
            const $io16 = (input: any): boolean =>
                "step" === input.kind && "number" === typeof input.value;
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
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io20 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "string" === typeof elem) &&
                (undefined === input["default"] ||
                    "string" === typeof input["default"]) &&
                "string" === input.type &&
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io21 = (input: any): boolean =>
                (undefined === input["default"] ||
                    "boolean" === typeof input["default"]) &&
                "boolean" === input.type &&
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io22 = (input: any): boolean =>
                (undefined === input.minimum ||
                    ("number" === typeof input.minimum &&
                        parseInt(input.minimum) === input.minimum)) &&
                (undefined === input.maximum ||
                    ("number" === typeof input.maximum &&
                        parseInt(input.maximum) === input.maximum)) &&
                (undefined === input.exclusiveMinimum ||
                    "boolean" === typeof input.exclusiveMinimum) &&
                (undefined === input.exclusiveMaximum ||
                    "boolean" === typeof input.exclusiveMaximum) &&
                (undefined === input.multipleOf ||
                    ("number" === typeof input.multipleOf &&
                        parseInt(input.multipleOf) === input.multipleOf)) &&
                (undefined === input["default"] ||
                    "number" === typeof input["default"]) &&
                "integer" === input.type &&
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io24 = (input: any): boolean =>
                (undefined === input.minLength ||
                    ("number" === typeof input.minLength &&
                        parseInt(input.minLength) === input.minLength &&
                        0 <= input.minLength)) &&
                (undefined === input.maxLength ||
                    ("number" === typeof input.maxLength &&
                        parseInt(input.maxLength) === input.maxLength &&
                        0 <= input.maxLength)) &&
                (undefined === input.pattern ||
                    "string" === typeof input.pattern) &&
                (undefined === input.format ||
                    "string" === typeof input.format) &&
                (undefined === input["default"] ||
                    "string" === typeof input["default"]) &&
                "string" === input.type &&
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io25 = (input: any): boolean =>
                "object" === typeof input.items &&
                null !== input.items &&
                false === Array.isArray(input.items) &&
                $iu3(input.items) &&
                (undefined === input.minItems ||
                    ("number" === typeof input.minItems &&
                        parseInt(input.minItems) === input.minItems &&
                        0 <= input.minItems)) &&
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        parseInt(input.maxItems) === input.maxItems &&
                        0 <= input.maxItems)) &&
                (undefined === input["x-typia-tuple"] ||
                    ("object" === typeof input["x-typia-tuple"] &&
                        null !== input["x-typia-tuple"] &&
                        $io26(input["x-typia-tuple"]))) &&
                "array" === input.type &&
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io26 = (input: any): boolean =>
                Array.isArray(input.items) &&
                input.items.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu2(elem),
                ) &&
                "array" === input.type &&
                "boolean" === typeof input.nullable &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io27 = (input: any): boolean =>
                Array.isArray(input.oneOf) &&
                input.oneOf.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu1(elem),
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
                                $iu0(elem),
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io29 = (input: any): boolean =>
                "string" === typeof input.$recursiveRef &&
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io30 = (input: any): boolean =>
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
                                $iu0(elem),
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
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io31 = (input: any): boolean => true;
            const $io32 = (input: any): boolean =>
                "object" === typeof input.schemas &&
                null !== input.schemas &&
                false === Array.isArray(input.schemas) &&
                $io33(input.schemas);
            const $io33 = (input: any): boolean =>
                Object.keys(input).every((key) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            $io34(value)
                        );
                    return true;
                });
            const $io34 = (input: any): boolean =>
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor) &&
                "object" === input.type &&
                "boolean" === typeof input.nullable &&
                "object" === typeof input.properties &&
                null !== input.properties &&
                false === Array.isArray(input.properties) &&
                $io35(input.properties) &&
                (undefined === input.patternProperties ||
                    ("object" === typeof input.patternProperties &&
                        null !== input.patternProperties &&
                        false === Array.isArray(input.patternProperties) &&
                        $io35(input.patternProperties))) &&
                (undefined === input.additionalProperties ||
                    ("object" === typeof input.additionalProperties &&
                        null !== input.additionalProperties &&
                        false === Array.isArray(input.additionalProperties) &&
                        $iu3(input.additionalProperties))) &&
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
                        $io35(input["x-typia-patternProperties"]))) &&
                (undefined === input["x-typia-additionalProperties"] ||
                    ("object" ===
                        typeof input["x-typia-additionalProperties"] &&
                        null !== input["x-typia-additionalProperties"] &&
                        false ===
                            Array.isArray(
                                input["x-typia-additionalProperties"],
                            ) &&
                        $iu3(input["x-typia-additionalProperties"])));
            const $io35 = (input: any): boolean =>
                Object.keys(input).every((key) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            false === Array.isArray(value) &&
                            $iu3(value)
                        );
                    return true;
                });
            const $iu0 = (input: any): any =>
                (() => {
                    if ("items" === input.kind) return $io2(input);
                    if ("minItems" === input.kind) return $io3(input);
                    if ("maxItems" === input.kind) return $io4(input);
                    if ("format" === input.kind) return $io5(input);
                    if ("pattern" === input.kind) return $io6(input);
                    if ("length" === input.kind) return $io7(input);
                    if ("minLength" === input.kind) return $io8(input);
                    if ("maxLength" === input.kind) return $io9(input);
                    if ("type" === input.kind) return $io10(input);
                    if ("minimum" === input.kind) return $io11(input);
                    if ("maximum" === input.kind) return $io12(input);
                    if ("exclusiveMinimum" === input.kind) return $io13(input);
                    if ("exclusiveMaximum" === input.kind) return $io14(input);
                    if ("multipleOf" === input.kind) return $io15(input);
                    if ("step" === input.kind) return $io16(input);
                    return false;
                })();
            const $iu1 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $io22(input);
                    if (undefined !== input.oneOf) return $io27(input);
                    if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu2(elem),
                        )
                    )
                        return $io26(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu3(input.items)
                    )
                        return $io25(input);
                    if (undefined !== input.$ref) return $io28(input);
                    if (undefined !== input.$recursiveRef) return $io29(input);
                    if ("null" === input.type) return $io30(input);
                    return (
                        $io1(input) ||
                        $io19(input) ||
                        $io20(input) ||
                        $io21(input) ||
                        $io23(input) ||
                        $io24(input) ||
                        $io31(input)
                    );
                })();
            const $iu2 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $io22(input);
                    if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu2(elem),
                        )
                    )
                        return $io26(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu3(input.items)
                    )
                        return $io25(input);
                    if (undefined !== input.oneOf) return $io27(input);
                    if (undefined !== input.$ref) return $io28(input);
                    if (undefined !== input.$recursiveRef) return $io29(input);
                    if ("null" === input.type) return $io30(input);
                    return (
                        $io1(input) ||
                        $io19(input) ||
                        $io20(input) ||
                        $io21(input) ||
                        $io23(input) ||
                        $io24(input) ||
                        $io31(input)
                    );
                })();
            const $iu3 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $io22(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu3(input.items)
                    )
                        return $io25(input);
                    if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu2(elem),
                        )
                    )
                        return $io26(input);
                    if (undefined !== input.oneOf) return $io27(input);
                    if (undefined !== input.$ref) return $io28(input);
                    if (undefined !== input.$recursiveRef) return $io29(input);
                    if ("null" === input.type) return $io30(input);
                    return (
                        $io1(input) ||
                        $io19(input) ||
                        $io20(input) ||
                        $io21(input) ||
                        $io23(input) ||
                        $io24(input) ||
                        $io31(input)
                    );
                })();
            const $so0 = (input: any): any =>
                `{"schemas":${`[${input.schemas
                    .map((elem: any) => $su3(elem))
                    .join(",")}]`},"components":${$so32(
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
                })()},"prefix":${$string(input.prefix)}}`;
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
                                        .map((elem: any) => $su0(elem))
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
                })()},"nullable":${input.nullable}}`;
            const $so2 = (input: any): any =>
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
            const $so3 = (input: any): any =>
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
            const $so4 = (input: any): any =>
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
            const $so5 = (input: any): any =>
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
                            '("email" | "ipv4" | "ipv6" | "url" | "uuid")',
                        value: input.value,
                    });
                })()}}`;
            const $so6 = (input: any): any =>
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
            const $so7 = (input: any): any =>
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
            const $so8 = (input: any): any =>
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
            const $so9 = (input: any): any =>
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
            const $so10 = (input: any): any =>
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
                        expected: '("int" | "uint")',
                        value: input.value,
                    });
                })()}}`;
            const $so11 = (input: any): any =>
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
            const $so12 = (input: any): any =>
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
            const $so13 = (input: any): any =>
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
            const $so14 = (input: any): any =>
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
            const $so15 = (input: any): any =>
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
            const $so16 = (input: any): any =>
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
                                                    elem.text,
                                                )},"kind":${$string(
                                                    elem.kind,
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
                                        .map((elem: any) => $su0(elem))
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
                })()},"nullable":${input.nullable}}`;
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
                                        .map((elem: any) => $su0(elem))
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
                })()},"nullable":${input.nullable}}`;
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
                                        .map((elem: any) => $su0(elem))
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
                })()},"nullable":${input.nullable}}`;
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
                                        .map((elem: any) => $su0(elem))
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
                })()},"nullable":${input.nullable}}`;
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
                                        .map((elem: any) => $su0(elem))
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
                })()},"nullable":${input.nullable}}`;
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
                                        .map((elem: any) => $su0(elem))
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
                })()},"nullable":${input.nullable}}`;
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
                                        .map((elem: any) => $su0(elem))
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
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }"items":${$su3(input.items)},"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"array"',
                        value: input.type,
                    });
                })()},"nullable":${input.nullable}}`;
            const $so26 = (input: any): any =>
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
                                        .map((elem: any) => $su0(elem))
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
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }"items":${`[${input.items
                    .map((elem: any) => $su2(elem))
                    .join(",")}]`},"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"array"',
                        value: input.type,
                    });
                })()},"nullable":${input.nullable}}`;
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
                                        .map((elem: any) => $su0(elem))
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
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }"oneOf":${`[${input.oneOf
                    .map((elem: any) => $su1(elem))
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
                                        .map((elem: any) => $su0(elem))
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
                                        .map((elem: any) => $su0(elem))
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
                    undefined === input["x-typia-rest"]
                        ? ""
                        : `"x-typia-rest":${
                              undefined !== input["x-typia-rest"]
                                  ? input["x-typia-rest"]
                                  : undefined
                          },`
                }"$recursiveRef":${$string(input.$recursiveRef)}}`;
            const $so30 = (input: any): any =>
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
                                        .map((elem: any) => $su0(elem))
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
            const $so31 = (input: any): any => "{}";
            const $so32 = (input: any): any =>
                `{"schemas":${$so33(input.schemas)}}`;
            const $so33 = (input: any): any =>
                `{${Object.entries(input)
                    .map(([key, value]: [string, any]) => {
                        if (undefined === value) return "";
                        return `${JSON.stringify(key)}:${$so34(value)}`;
                    })
                    .filter((str) => "" !== str)
                    .join(",")}}`;
            const $so34 = (input: any): any =>
                `{${
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
                }${
                    undefined === input.patternProperties
                        ? ""
                        : `"patternProperties":${
                              undefined !== input.patternProperties
                                  ? $so35(input.patternProperties)
                                  : undefined
                          },`
                }${
                    undefined === input.additionalProperties
                        ? ""
                        : `"additionalProperties":${
                              undefined !== input.additionalProperties
                                  ? $su3(input.additionalProperties)
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
                                  ? $so35(input["x-typia-patternProperties"])
                                  : undefined
                          },`
                }${
                    undefined === input["x-typia-additionalProperties"]
                        ? ""
                        : `"x-typia-additionalProperties":${
                              undefined !==
                              input["x-typia-additionalProperties"]
                                  ? $su3(input["x-typia-additionalProperties"])
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
                })()},"nullable":${input.nullable},"properties":${$so35(
                    input.properties,
                )}}`;
            const $so35 = (input: any): any =>
                `{${Object.entries(input)
                    .map(([key, value]: [string, any]) => {
                        if (undefined === value) return "";
                        return `${JSON.stringify(key)}:${$su3(value)}`;
                    })
                    .filter((str) => "" !== str)
                    .join(",")}}`;
            const $su0 = (input: any): any =>
                (() => {
                    if ("items" === input.kind) return $so2(input);
                    if ("minItems" === input.kind) return $so3(input);
                    if ("maxItems" === input.kind) return $so4(input);
                    if ("format" === input.kind) return $so5(input);
                    if ("pattern" === input.kind) return $so6(input);
                    if ("length" === input.kind) return $so7(input);
                    if ("minLength" === input.kind) return $so8(input);
                    if ("maxLength" === input.kind) return $so9(input);
                    if ("type" === input.kind) return $so10(input);
                    if ("minimum" === input.kind) return $so11(input);
                    if ("maximum" === input.kind) return $so12(input);
                    if ("exclusiveMinimum" === input.kind) return $so13(input);
                    if ("exclusiveMaximum" === input.kind) return $so14(input);
                    if ("multipleOf" === input.kind) return $so15(input);
                    if ("step" === input.kind) return $so16(input);
                    $throws({
                        expected:
                            "(IMetadataTag.IItems | IMetadataTag.IMinItems | IMetadataTag.IMaxItems | IMetadataTag.IFormat | IMetadataTag.IPattern | IMetadataTag.ILength | IMetadataTag.IMinLength | IMetadataTag.IMaxLength | IMetadataTag.IType | IMetadataTag.IMinimum | IMetadataTag.IMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IExclusiveMaximum | IMetadataTag.IMultipleOf | IMetadataTag.IStep)",
                        value: input,
                    });
                })();
            const $su1 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $so22(input);
                    if (undefined !== input.oneOf) return $so27(input);
                    if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu2(elem),
                        )
                    )
                        return $so26(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu3(input.items)
                    )
                        return $so25(input);
                    if (undefined !== input.$ref) return $so28(input);
                    if (undefined !== input.$recursiveRef) return $so29(input);
                    if ("null" === input.type) return $so30(input);
                    return (() => {
                        if ($io1(input)) return $so1(input);
                        if ($io19(input)) return $so19(input);
                        if ($io20(input)) return $so20(input);
                        if ($io21(input)) return $so21(input);
                        if ($io23(input)) return $so23(input);
                        if ($io24(input)) return $so24(input);
                        if ($io31(input)) return $so31(input);
                        $throws({
                            expected:
                                '(IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                            value: input,
                        });
                    })();
                })();
            const $su2 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $so22(input);
                    if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu2(elem),
                        )
                    )
                        return $so26(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu3(input.items)
                    )
                        return $so25(input);
                    if (undefined !== input.oneOf) return $so27(input);
                    if (undefined !== input.$ref) return $so28(input);
                    if (undefined !== input.$recursiveRef) return $so29(input);
                    if ("null" === input.type) return $so30(input);
                    return (() => {
                        if ($io1(input)) return $so1(input);
                        if ($io19(input)) return $so19(input);
                        if ($io20(input)) return $so20(input);
                        if ($io21(input)) return $so21(input);
                        if ($io23(input)) return $so23(input);
                        if ($io24(input)) return $so24(input);
                        if ($io31(input)) return $so31(input);
                        $throws({
                            expected:
                                '(IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                            value: input,
                        });
                    })();
                })();
            const $su3 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $so22(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu3(input.items)
                    )
                        return $so25(input);
                    if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu2(elem),
                        )
                    )
                        return $so26(input);
                    if (undefined !== input.oneOf) return $so27(input);
                    if (undefined !== input.$ref) return $so28(input);
                    if (undefined !== input.$recursiveRef) return $so29(input);
                    if ("null" === input.type) return $so30(input);
                    return (() => {
                        if ($io1(input)) return $so1(input);
                        if ($io19(input)) return $so19(input);
                        if ($io20(input)) return $so20(input);
                        if ($io21(input)) return $so21(input);
                        if ($io23(input)) return $so23(input);
                        if ($io24(input)) return $so24(input);
                        if ($io31(input)) return $so31(input);
                        $throws({
                            expected:
                                '(IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                            value: input,
                        });
                    })();
                })();
            return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
        };
        return is(input) ? stringify(input) : null;
    },
    UltimateUnion.SPOILERS,
);
