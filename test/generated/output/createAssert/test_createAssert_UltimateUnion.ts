import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_createAssert_UltimateUnion = _test_assert(
    "UltimateUnion",
)<UltimateUnion>(UltimateUnion)((input: any): UltimateUnion => {
    const __is = (input: any): input is UltimateUnion => {
        const $io0 = (input: any): boolean =>
            Array.isArray(input.schemas) &&
            input.schemas.every(
                (elem: any) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    false === Array.isArray(elem) &&
                    $iu0(elem),
            ) &&
            "object" === typeof input.components &&
            null !== input.components &&
            false === Array.isArray(input.components) &&
            $io17(input.components) &&
            ("swagger" === input.purpose || "ajv" === input.purpose);
        const $io1 = (input: any): boolean =>
            Array.isArray(input["enum"]) &&
            input["enum"].every((elem: any) => "boolean" === typeof elem) &&
            "boolean" === input.type &&
            (undefined === input.title || "string" === typeof input.title) &&
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
                            $io2(elem),
                    ))) &&
            (undefined === input["x-typia-required"] ||
                "boolean" === typeof input["x-typia-required"]) &&
            (undefined === input["x-typia-optional"] ||
                "boolean" === typeof input["x-typia-optional"]) &&
            (undefined === input["x-typia-rest"] ||
                "boolean" === typeof input["x-typia-rest"]);
        const $io2 = (input: any): boolean =>
            "string" === typeof input.name &&
            (undefined === input.text ||
                (Array.isArray(input.text) &&
                    input.text.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io3(elem),
                    )));
        const $io3 = (input: any): boolean =>
            "string" === typeof input.text && "string" === typeof input.kind;
        const $io4 = (input: any): boolean =>
            Array.isArray(input["enum"]) &&
            input["enum"].every(
                (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
            ) &&
            "number" === input.type &&
            (undefined === input.title || "string" === typeof input.title) &&
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
                            $io2(elem),
                    ))) &&
            (undefined === input["x-typia-required"] ||
                "boolean" === typeof input["x-typia-required"]) &&
            (undefined === input["x-typia-optional"] ||
                "boolean" === typeof input["x-typia-optional"]) &&
            (undefined === input["x-typia-rest"] ||
                "boolean" === typeof input["x-typia-rest"]);
        const $io5 = (input: any): boolean =>
            Array.isArray(input["enum"]) &&
            input["enum"].every((elem: any) => "string" === typeof elem) &&
            "string" === input.type &&
            (undefined === input.title || "string" === typeof input.title) &&
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
                            $io2(elem),
                    ))) &&
            (undefined === input["x-typia-required"] ||
                "boolean" === typeof input["x-typia-required"]) &&
            (undefined === input["x-typia-optional"] ||
                "boolean" === typeof input["x-typia-optional"]) &&
            (undefined === input["x-typia-rest"] ||
                "boolean" === typeof input["x-typia-rest"]);
        const $io6 = (input: any): boolean =>
            (undefined === input["default"] ||
                "boolean" === typeof input["default"]) &&
            "boolean" === input.type &&
            (undefined === input.nullable ||
                "boolean" === typeof input.nullable) &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ))) &&
            (undefined === input["x-typia-required"] ||
                "boolean" === typeof input["x-typia-required"]) &&
            (undefined === input["x-typia-optional"] ||
                "boolean" === typeof input["x-typia-optional"]) &&
            (undefined === input["x-typia-rest"] ||
                "boolean" === typeof input["x-typia-rest"]);
        const $io7 = (input: any): boolean =>
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
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
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
                "array" === input.target) &&
            "string" === typeof input.name &&
            "string" === typeof input.kind &&
            true &&
            "string" === typeof input.validate &&
            null !== input.exclusive &&
            undefined !== input.exclusive &&
            ("boolean" === typeof input.exclusive ||
                (Array.isArray(input.exclusive) &&
                    input.exclusive.every(
                        (elem: any) => "string" === typeof elem,
                    )));
        const $io9 = (input: any): boolean =>
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
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ))) &&
            (undefined === input["x-typia-required"] ||
                "boolean" === typeof input["x-typia-required"]) &&
            (undefined === input["x-typia-optional"] ||
                "boolean" === typeof input["x-typia-optional"]) &&
            (undefined === input["x-typia-rest"] ||
                "boolean" === typeof input["x-typia-rest"]);
        const $io10 = (input: any): boolean =>
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
            (undefined === input.format || "string" === typeof input.format) &&
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
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ))) &&
            (undefined === input["x-typia-required"] ||
                "boolean" === typeof input["x-typia-required"]) &&
            (undefined === input["x-typia-optional"] ||
                "boolean" === typeof input["x-typia-optional"]) &&
            (undefined === input["x-typia-rest"] ||
                "boolean" === typeof input["x-typia-rest"]);
        const $io11 = (input: any): boolean =>
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
                    $io12(input["x-typia-tuple"]))) &&
            "array" === input.type &&
            (undefined === input.nullable ||
                "boolean" === typeof input.nullable) &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ))) &&
            (undefined === input["x-typia-required"] ||
                "boolean" === typeof input["x-typia-required"]) &&
            (undefined === input["x-typia-optional"] ||
                "boolean" === typeof input["x-typia-optional"]) &&
            (undefined === input["x-typia-rest"] ||
                "boolean" === typeof input["x-typia-rest"]);
        const $io12 = (input: any): boolean =>
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
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ))) &&
            (undefined === input["x-typia-required"] ||
                "boolean" === typeof input["x-typia-required"]) &&
            (undefined === input["x-typia-optional"] ||
                "boolean" === typeof input["x-typia-optional"]) &&
            (undefined === input["x-typia-rest"] ||
                "boolean" === typeof input["x-typia-rest"]);
        const $io13 = (input: any): boolean =>
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
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ))) &&
            (undefined === input["x-typia-required"] ||
                "boolean" === typeof input["x-typia-required"]) &&
            (undefined === input["x-typia-optional"] ||
                "boolean" === typeof input["x-typia-optional"]) &&
            (undefined === input["x-typia-rest"] ||
                "boolean" === typeof input["x-typia-rest"]);
        const $io14 = (input: any): boolean =>
            "string" === typeof input.$ref &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ))) &&
            (undefined === input["x-typia-required"] ||
                "boolean" === typeof input["x-typia-required"]) &&
            (undefined === input["x-typia-optional"] ||
                "boolean" === typeof input["x-typia-optional"]) &&
            (undefined === input["x-typia-rest"] ||
                "boolean" === typeof input["x-typia-rest"]);
        const $io15 = (input: any): boolean =>
            "null" === input.type &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ))) &&
            (undefined === input["x-typia-required"] ||
                "boolean" === typeof input["x-typia-required"]) &&
            (undefined === input["x-typia-optional"] ||
                "boolean" === typeof input["x-typia-optional"]) &&
            (undefined === input["x-typia-rest"] ||
                "boolean" === typeof input["x-typia-rest"]);
        const $io16 = (input: any): boolean =>
            null !== input.type &&
            undefined === input.type &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ))) &&
            (undefined === input["x-typia-required"] ||
                "boolean" === typeof input["x-typia-required"]) &&
            (undefined === input["x-typia-optional"] ||
                "boolean" === typeof input["x-typia-optional"]) &&
            (undefined === input["x-typia-rest"] ||
                "boolean" === typeof input["x-typia-rest"]);
        const $io17 = (input: any): boolean =>
            undefined === input.schemas ||
            ("object" === typeof input.schemas &&
                null !== input.schemas &&
                false === Array.isArray(input.schemas) &&
                $io18(input.schemas));
        const $io18 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if (RegExp(/(.*)/).test(key))
                    return (
                        "object" === typeof value &&
                        null !== value &&
                        false === Array.isArray(value) &&
                        $iu1(value)
                    );
                return true;
            });
        const $io19 = (input: any): boolean =>
            (undefined === input.$id || "string" === typeof input.$id) &&
            "object" === input.type &&
            (undefined === input.nullable ||
                "boolean" === typeof input.nullable) &&
            "object" === typeof input.properties &&
            null !== input.properties &&
            false === Array.isArray(input.properties) &&
            $io20(input.properties) &&
            (undefined === input.patternProperties ||
                ("object" === typeof input.patternProperties &&
                    null !== input.patternProperties &&
                    false === Array.isArray(input.patternProperties) &&
                    $io20(input.patternProperties))) &&
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
                            $io2(elem),
                    ))) &&
            (undefined === input["x-typia-patternProperties"] ||
                ("object" === typeof input["x-typia-patternProperties"] &&
                    null !== input["x-typia-patternProperties"] &&
                    false ===
                        Array.isArray(input["x-typia-patternProperties"]) &&
                    $io20(input["x-typia-patternProperties"]))) &&
            (undefined === input["x-typia-additionalProperties"] ||
                ("object" === typeof input["x-typia-additionalProperties"] &&
                    null !== input["x-typia-additionalProperties"] &&
                    false ===
                        Array.isArray(input["x-typia-additionalProperties"]) &&
                    $iu0(input["x-typia-additionalProperties"])));
        const $io20 = (input: any): boolean =>
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
        const $io21 = (input: any): boolean =>
            Array.isArray(input["enum"]) &&
            input["enum"].every((elem: any) => "boolean" === typeof elem) &&
            "boolean" === input.type &&
            (undefined === input.title || "string" === typeof input.title) &&
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
                            $io2(elem),
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
        const $io22 = (input: any): boolean =>
            Array.isArray(input["enum"]) &&
            input["enum"].every(
                (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
            ) &&
            "number" === input.type &&
            (undefined === input.title || "string" === typeof input.title) &&
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
                            $io2(elem),
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
        const $io23 = (input: any): boolean =>
            Array.isArray(input["enum"]) &&
            input["enum"].every((elem: any) => "string" === typeof elem) &&
            "string" === input.type &&
            (undefined === input.title || "string" === typeof input.title) &&
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
                            $io2(elem),
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
        const $io24 = (input: any): boolean =>
            (undefined === input["default"] ||
                "boolean" === typeof input["default"]) &&
            "boolean" === input.type &&
            (undefined === input.nullable ||
                "boolean" === typeof input.nullable) &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
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
        const $io25 = (input: any): boolean =>
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
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
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
        const $io26 = (input: any): boolean =>
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
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
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
        const $io27 = (input: any): boolean =>
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
            (undefined === input.format || "string" === typeof input.format) &&
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
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
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
        const $io28 = (input: any): boolean =>
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
                    $io12(input["x-typia-tuple"]))) &&
            "array" === input.type &&
            (undefined === input.nullable ||
                "boolean" === typeof input.nullable) &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
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
        const $io29 = (input: any): boolean =>
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
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
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
        const $io30 = (input: any): boolean =>
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
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
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
        const $io31 = (input: any): boolean =>
            "string" === typeof input.$ref &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
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
        const $io32 = (input: any): boolean =>
            "null" === input.type &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
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
        const $io33 = (input: any): boolean =>
            null !== input.type &&
            undefined === input.type &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
            (undefined === input.description ||
                "string" === typeof input.description) &&
            (undefined === input["x-typia-jsDocTags"] ||
                (Array.isArray(input["x-typia-jsDocTags"]) &&
                    input["x-typia-jsDocTags"].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
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
                if ("integer" === input.type) return $io7(input);
                else if (
                    "object" === typeof input.items &&
                    null !== input.items &&
                    false === Array.isArray(input.items) &&
                    $iu0(input.items)
                )
                    return $io11(input);
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
                    return $io12(input);
                else if (undefined !== input.oneOf) return $io13(input);
                else if (undefined !== input.$ref) return $io14(input);
                else if ("null" === input.type) return $io15(input);
                else
                    return (() => {
                        if ($io5(input)) return $io5(input);
                        else if ($io4(input)) return $io4(input);
                        else if ($io1(input)) return $io1(input);
                        else if ($io6(input)) return $io6(input);
                        else if ($io9(input)) return $io9(input);
                        else if ($io10(input)) return $io10(input);
                        else if ($io16(input)) return $io16(input);
                        else return false;
                    })();
            })();
        const $iu1 = (input: any): any =>
            (() => {
                if ("object" === input.type) return $io19(input);
                else if ("integer" === input.type) return $io25(input);
                else if (
                    "object" === typeof input.items &&
                    null !== input.items &&
                    false === Array.isArray(input.items) &&
                    $iu0(input.items)
                )
                    return $io28(input);
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
                    return $io29(input);
                else if (undefined !== input.oneOf) return $io30(input);
                else if (undefined !== input.$ref) return $io31(input);
                else if ("null" === input.type) return $io32(input);
                else
                    return (() => {
                        if ($io23(input)) return $io23(input);
                        else if ($io22(input)) return $io22(input);
                        else if ($io21(input)) return $io21(input);
                        else if ($io24(input)) return $io24(input);
                        else if ($io26(input)) return $io26(input);
                        else if ($io27(input)) return $io27(input);
                        else if ($io33(input)) return $io33(input);
                        else return false;
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
    if (false === __is(input))
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is UltimateUnion => {
            const $guard = (typia.createAssert as any).guard;
            const $join = (typia.createAssert as any).join;
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (((Array.isArray(input.schemas) ||
                    $guard(_exceptionable, {
                        path: _path + ".schemas",
                        expected: "Array<IJsonSchema>",
                        value: input.schemas,
                    })) &&
                    input.schemas.every(
                        (elem: any, _index2: number) =>
                            ((("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".schemas[" + _index2 + "]",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: elem,
                                })) &&
                                $au0(
                                    elem,
                                    _path + ".schemas[" + _index2 + "]",
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".schemas[" + _index2 + "]",
                                expected:
                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                value: elem,
                            }),
                    )) ||
                    $guard(_exceptionable, {
                        path: _path + ".schemas",
                        expected: "Array<IJsonSchema>",
                        value: input.schemas,
                    })) &&
                (((("object" === typeof input.components &&
                    null !== input.components &&
                    false === Array.isArray(input.components)) ||
                    $guard(_exceptionable, {
                        path: _path + ".components",
                        expected: "IJsonComponents",
                        value: input.components,
                    })) &&
                    $ao17(
                        input.components,
                        _path + ".components",
                        true && _exceptionable,
                    )) ||
                    $guard(_exceptionable, {
                        path: _path + ".components",
                        expected: "IJsonComponents",
                        value: input.components,
                    })) &&
                ("swagger" === input.purpose ||
                    "ajv" === input.purpose ||
                    $guard(_exceptionable, {
                        path: _path + ".purpose",
                        expected: '("ajv" | "swagger")',
                        value: input.purpose,
                    }));
            const $ao1 = (
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
                                path: _path + '["enum"][' + _index3 + "]",
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index4: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index4 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
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
            const $ao2 = (
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
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".text[" + _index5 + "]",
                                        expected: "IJsDocTagInfo.IText",
                                        value: elem,
                                    })) &&
                                    $ao3(
                                        elem,
                                        _path + ".text[" + _index5 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".text[" + _index5 + "]",
                                    expected: "IJsDocTagInfo.IText",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".text",
                        expected: "(Array<IJsDocTagInfo.IText> | undefined)",
                        value: input.text,
                    }));
            const $ao3 = (
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
            const $ao4 = (
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
                                path: _path + '["enum"][' + _index6 + "]",
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index7: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index7 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
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
            const $ao5 = (
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
                                path: _path + '["enum"][' + _index8 + "]",
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index9: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index9 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
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
            const $ao6 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index10: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index10 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index10 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index10 +
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
                        expected: '((number & Type<"int32">) | undefined)',
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
                        expected: '((number & Type<"int32">) | undefined)',
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
                        ((Math.floor(input.multipleOf) === input.multipleOf &&
                            -2147483648 <= input.multipleOf &&
                            input.multipleOf <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: 'number & Type<"int32">',
                                value: input.multipleOf,
                            }))) ||
                    $guard(_exceptionable, {
                        path: _path + ".multipleOf",
                        expected: '((number & Type<"int32">) | undefined)',
                        value: input.multipleOf,
                    })) &&
                (undefined === input["x-typia-typeTags"] ||
                    ((Array.isArray(input["x-typia-typeTags"]) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-typeTags"]',
                            expected: "(Array<IMetadataTypeTag> | undefined)",
                            value: input["x-typia-typeTags"],
                        })) &&
                        input["x-typia-typeTags"].every(
                            (elem: any, _index11: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-typeTags"][' +
                                            _index11 +
                                            "]",
                                        expected: "IMetadataTypeTag",
                                        value: elem,
                                    })) &&
                                    $ao8(
                                        elem,
                                        _path +
                                            '["x-typia-typeTags"][' +
                                            _index11 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-typeTags"][' +
                                        _index11 +
                                        "]",
                                    expected: "IMetadataTypeTag",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + '["x-typia-typeTags"]',
                        expected: "(Array<IMetadataTypeTag> | undefined)",
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index12: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index12 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index12 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index12 +
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
                    "array" === input.target ||
                    $guard(_exceptionable, {
                        path: _path + ".target",
                        expected: '("array" | "bigint" | "number" | "string")',
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
                true &&
                ("string" === typeof input.validate ||
                    $guard(_exceptionable, {
                        path: _path + ".validate",
                        expected: "string",
                        value: input.validate,
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
                            (elem: any, _index13: number) =>
                                "string" === typeof elem ||
                                $guard(_exceptionable, {
                                    path:
                                        _path + ".exclusive[" + _index13 + "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".exclusive",
                        expected: "(Array<string> | boolean)",
                        value: input.exclusive,
                    }));
            const $ao9 = (
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
                            expected: "(Array<IMetadataTypeTag> | undefined)",
                            value: input["x-typia-typeTags"],
                        })) &&
                        input["x-typia-typeTags"].every(
                            (elem: any, _index14: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-typeTags"][' +
                                            _index14 +
                                            "]",
                                        expected: "IMetadataTypeTag",
                                        value: elem,
                                    })) &&
                                    $ao8(
                                        elem,
                                        _path +
                                            '["x-typia-typeTags"][' +
                                            _index14 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-typeTags"][' +
                                        _index14 +
                                        "]",
                                    expected: "IMetadataTypeTag",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + '["x-typia-typeTags"]',
                        expected: "(Array<IMetadataTypeTag> | undefined)",
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index15: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index15 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index15 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index15 +
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
                (undefined === input.minLength ||
                    ("number" === typeof input.minLength &&
                        ((Math.floor(input.minLength) === input.minLength &&
                            0 <= input.minLength &&
                            input.minLength <= 4294967295) ||
                            $guard(_exceptionable, {
                                path: _path + ".minLength",
                                expected: 'number & Type<"uint32">',
                                value: input.minLength,
                            }))) ||
                    $guard(_exceptionable, {
                        path: _path + ".minLength",
                        expected: '((number & Type<"uint32">) | undefined)',
                        value: input.minLength,
                    })) &&
                (undefined === input.maxLength ||
                    ("number" === typeof input.maxLength &&
                        ((Math.floor(input.maxLength) === input.maxLength &&
                            0 <= input.maxLength &&
                            input.maxLength <= 4294967295) ||
                            $guard(_exceptionable, {
                                path: _path + ".maxLength",
                                expected: 'number & Type<"uint32">',
                                value: input.maxLength,
                            }))) ||
                    $guard(_exceptionable, {
                        path: _path + ".maxLength",
                        expected: '((number & Type<"uint32">) | undefined)',
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
                            expected: "(Array<IMetadataTypeTag> | undefined)",
                            value: input["x-typia-typeTags"],
                        })) &&
                        input["x-typia-typeTags"].every(
                            (elem: any, _index16: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-typeTags"][' +
                                            _index16 +
                                            "]",
                                        expected: "IMetadataTypeTag",
                                        value: elem,
                                    })) &&
                                    $ao8(
                                        elem,
                                        _path +
                                            '["x-typia-typeTags"][' +
                                            _index16 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-typeTags"][' +
                                        _index16 +
                                        "]",
                                    expected: "IMetadataTypeTag",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + '["x-typia-typeTags"]',
                        expected: "(Array<IMetadataTypeTag> | undefined)",
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index17: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index17 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index17 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index17 +
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
                        expected: '((number & Type<"uint32">) | undefined)',
                        value: input.minItems,
                    })) &&
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        ((Math.floor(input.maxItems) === input.maxItems &&
                            0 <= input.maxItems &&
                            input.maxItems <= 4294967295) ||
                            $guard(_exceptionable, {
                                path: _path + ".maxItems",
                                expected: 'number & Type<"uint32">',
                                value: input.maxItems,
                            }))) ||
                    $guard(_exceptionable, {
                        path: _path + ".maxItems",
                        expected: '((number & Type<"uint32">) | undefined)',
                        value: input.maxItems,
                    })) &&
                (undefined === input["x-typia-tuple"] ||
                    ((("object" === typeof input["x-typia-tuple"] &&
                        null !== input["x-typia-tuple"]) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-tuple"]',
                            expected: "(IJsonSchema.ITuple | undefined)",
                            value: input["x-typia-tuple"],
                        })) &&
                        $ao12(
                            input["x-typia-tuple"],
                            _path + '["x-typia-tuple"]',
                            true && _exceptionable,
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + '["x-typia-tuple"]',
                        expected: "(IJsonSchema.ITuple | undefined)",
                        value: input["x-typia-tuple"],
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index18: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index18 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
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
                (((Array.isArray(input.items) ||
                    $guard(_exceptionable, {
                        path: _path + ".items",
                        expected: "Array<IJsonSchema>",
                        value: input.items,
                    })) &&
                    input.items.every(
                        (elem: any, _index19: number) =>
                            ((("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".items[" + _index19 + "]",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: elem,
                                })) &&
                                $au0(
                                    elem,
                                    _path + ".items[" + _index19 + "]",
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".items[" + _index19 + "]",
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
                        ((Math.floor(input.maxItems) === input.maxItems &&
                            0 <= input.maxItems &&
                            input.maxItems <= 4294967295) ||
                            $guard(_exceptionable, {
                                path: _path + ".maxItems",
                                expected: 'number & Type<"uint32">',
                                value: input.maxItems,
                            }))) ||
                    $guard(_exceptionable, {
                        path: _path + ".maxItems",
                        expected: '((number & Type<"uint32">) | undefined)',
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index20: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index20 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
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
                (((Array.isArray(input.oneOf) ||
                    $guard(_exceptionable, {
                        path: _path + ".oneOf",
                        expected: "Array<IJsonSchema>",
                        value: input.oneOf,
                    })) &&
                    input.oneOf.every(
                        (elem: any, _index21: number) =>
                            ((("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".oneOf[" + _index21 + "]",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: elem,
                                })) &&
                                $au0(
                                    elem,
                                    _path + ".oneOf[" + _index21 + "]",
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".oneOf[" + _index21 + "]",
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index22: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index22 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index23: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index23 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index23 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index23 +
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index24: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index24 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
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
            const $ao16 = (
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index25: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index25 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
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
            const $ao17 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                undefined === input.schemas ||
                ((("object" === typeof input.schemas &&
                    null !== input.schemas &&
                    false === Array.isArray(input.schemas)) ||
                    $guard(_exceptionable, {
                        path: _path + ".schemas",
                        expected:
                            "(Record<string, IObject | IAlias> | undefined)",
                        value: input.schemas,
                    })) &&
                    $ao18(
                        input.schemas,
                        _path + ".schemas",
                        true && _exceptionable,
                    )) ||
                $guard(_exceptionable, {
                    path: _path + ".schemas",
                    expected: "(Record<string, IObject | IAlias> | undefined)",
                    value: input.schemas,
                });
            const $ao18 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                false === _exceptionable ||
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            ((("object" === typeof value &&
                                null !== value &&
                                false === Array.isArray(value)) ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected:
                                        '(IArray & IIdentified | IBoolean & IIdentified | IEnumeration<"boolean"> & IIdentified | IEnumeration<"number"> & IIdentified | IEnumeration<"string"> & IIdentified | IInteger & IIdentified | IJsonComponents.IObject | INullOnly & IIdentified | INumber & IIdentified | IOneOf & IIdentified | IReference & IIdentified | IString & IIdentified | ITuple & IIdentified | IUnknown & IIdentified)',
                                    value: value,
                                })) &&
                                $au1(
                                    value,
                                    _path + $join(key),
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected:
                                    '(IArray & IIdentified | IBoolean & IIdentified | IEnumeration<"boolean"> & IIdentified | IEnumeration<"number"> & IIdentified | IEnumeration<"string"> & IIdentified | IInteger & IIdentified | IJsonComponents.IObject | INullOnly & IIdentified | INumber & IIdentified | IOneOf & IIdentified | IReference & IIdentified | IString & IIdentified | ITuple & IIdentified | IUnknown & IIdentified)',
                                value: value,
                            })
                        );
                    return true;
                });
            const $ao19 = (
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
                    $ao20(
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
                        false === Array.isArray(input.patternProperties)) ||
                        $guard(_exceptionable, {
                            path: _path + ".patternProperties",
                            expected:
                                "(Record<string, IJsonSchema> | undefined)",
                            value: input.patternProperties,
                        })) &&
                        $ao20(
                            input.patternProperties,
                            _path + ".patternProperties",
                            true && _exceptionable,
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".patternProperties",
                        expected: "(Record<string, IJsonSchema> | undefined)",
                        value: input.patternProperties,
                    })) &&
                (undefined === input.additionalProperties ||
                    ((("object" === typeof input.additionalProperties &&
                        null !== input.additionalProperties &&
                        false === Array.isArray(input.additionalProperties)) ||
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
                            (elem: any, _index26: number) =>
                                "string" === typeof elem ||
                                $guard(_exceptionable, {
                                    path: _path + ".required[" + _index26 + "]",
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index27: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index27 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
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
                (undefined === input["x-typia-patternProperties"] ||
                    ((("object" === typeof input["x-typia-patternProperties"] &&
                        null !== input["x-typia-patternProperties"] &&
                        false ===
                            Array.isArray(
                                input["x-typia-patternProperties"],
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-patternProperties"]',
                            expected:
                                "(Record<string, IJsonSchema> | undefined)",
                            value: input["x-typia-patternProperties"],
                        })) &&
                        $ao20(
                            input["x-typia-patternProperties"],
                            _path + '["x-typia-patternProperties"]',
                            true && _exceptionable,
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + '["x-typia-patternProperties"]',
                        expected: "(Record<string, IJsonSchema> | undefined)",
                        value: input["x-typia-patternProperties"],
                    })) &&
                (undefined === input["x-typia-additionalProperties"] ||
                    ((("object" ===
                        typeof input["x-typia-additionalProperties"] &&
                        null !== input["x-typia-additionalProperties"] &&
                        false ===
                            Array.isArray(
                                input["x-typia-additionalProperties"],
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-additionalProperties"]',
                            expected:
                                '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                            value: input["x-typia-additionalProperties"],
                        })) &&
                        $au0(
                            input["x-typia-additionalProperties"],
                            _path + '["x-typia-additionalProperties"]',
                            true && _exceptionable,
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + '["x-typia-additionalProperties"]',
                        expected:
                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                        value: input["x-typia-additionalProperties"],
                    }));
            const $ao20 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                false === _exceptionable ||
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
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
            const $ao21 = (
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
                        (elem: any, _index28: number) =>
                            "boolean" === typeof elem ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"][' + _index28 + "]",
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index29: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index29 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index29 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index29 +
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
                    })) &&
                (undefined === input.$id ||
                    "string" === typeof input.$id ||
                    $guard(_exceptionable, {
                        path: _path + ".$id",
                        expected: "(string | undefined)",
                        value: input.$id,
                    })) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor ||
                    $guard(_exceptionable, {
                        path: _path + ".$recursiveAnchor",
                        expected: "(boolean | undefined)",
                        value: input.$recursiveAnchor,
                    }));
            const $ao22 = (
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
                        (elem: any, _index30: number) =>
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"][' + _index30 + "]",
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index31: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index31 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index31 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index31 +
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
                    })) &&
                (undefined === input.$id ||
                    "string" === typeof input.$id ||
                    $guard(_exceptionable, {
                        path: _path + ".$id",
                        expected: "(string | undefined)",
                        value: input.$id,
                    })) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor ||
                    $guard(_exceptionable, {
                        path: _path + ".$recursiveAnchor",
                        expected: "(boolean | undefined)",
                        value: input.$recursiveAnchor,
                    }));
            const $ao23 = (
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
                        (elem: any, _index32: number) =>
                            "string" === typeof elem ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"][' + _index32 + "]",
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index33: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index33 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index33 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index33 +
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
                    })) &&
                (undefined === input.$id ||
                    "string" === typeof input.$id ||
                    $guard(_exceptionable, {
                        path: _path + ".$id",
                        expected: "(string | undefined)",
                        value: input.$id,
                    })) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor ||
                    $guard(_exceptionable, {
                        path: _path + ".$recursiveAnchor",
                        expected: "(boolean | undefined)",
                        value: input.$recursiveAnchor,
                    }));
            const $ao24 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index34: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index34 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index34 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index34 +
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
                    })) &&
                (undefined === input.$id ||
                    "string" === typeof input.$id ||
                    $guard(_exceptionable, {
                        path: _path + ".$id",
                        expected: "(string | undefined)",
                        value: input.$id,
                    })) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor ||
                    $guard(_exceptionable, {
                        path: _path + ".$recursiveAnchor",
                        expected: "(boolean | undefined)",
                        value: input.$recursiveAnchor,
                    }));
            const $ao25 = (
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
                        expected: '((number & Type<"int32">) | undefined)',
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
                        expected: '((number & Type<"int32">) | undefined)',
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
                        ((Math.floor(input.multipleOf) === input.multipleOf &&
                            -2147483648 <= input.multipleOf &&
                            input.multipleOf <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: 'number & Type<"int32">',
                                value: input.multipleOf,
                            }))) ||
                    $guard(_exceptionable, {
                        path: _path + ".multipleOf",
                        expected: '((number & Type<"int32">) | undefined)',
                        value: input.multipleOf,
                    })) &&
                (undefined === input["x-typia-typeTags"] ||
                    ((Array.isArray(input["x-typia-typeTags"]) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-typeTags"]',
                            expected: "(Array<IMetadataTypeTag> | undefined)",
                            value: input["x-typia-typeTags"],
                        })) &&
                        input["x-typia-typeTags"].every(
                            (elem: any, _index35: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-typeTags"][' +
                                            _index35 +
                                            "]",
                                        expected: "IMetadataTypeTag",
                                        value: elem,
                                    })) &&
                                    $ao8(
                                        elem,
                                        _path +
                                            '["x-typia-typeTags"][' +
                                            _index35 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-typeTags"][' +
                                        _index35 +
                                        "]",
                                    expected: "IMetadataTypeTag",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + '["x-typia-typeTags"]',
                        expected: "(Array<IMetadataTypeTag> | undefined)",
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index36: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index36 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index36 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index36 +
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
                    })) &&
                (undefined === input.$id ||
                    "string" === typeof input.$id ||
                    $guard(_exceptionable, {
                        path: _path + ".$id",
                        expected: "(string | undefined)",
                        value: input.$id,
                    })) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor ||
                    $guard(_exceptionable, {
                        path: _path + ".$recursiveAnchor",
                        expected: "(boolean | undefined)",
                        value: input.$recursiveAnchor,
                    }));
            const $ao26 = (
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
                            expected: "(Array<IMetadataTypeTag> | undefined)",
                            value: input["x-typia-typeTags"],
                        })) &&
                        input["x-typia-typeTags"].every(
                            (elem: any, _index37: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-typeTags"][' +
                                            _index37 +
                                            "]",
                                        expected: "IMetadataTypeTag",
                                        value: elem,
                                    })) &&
                                    $ao8(
                                        elem,
                                        _path +
                                            '["x-typia-typeTags"][' +
                                            _index37 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-typeTags"][' +
                                        _index37 +
                                        "]",
                                    expected: "IMetadataTypeTag",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + '["x-typia-typeTags"]',
                        expected: "(Array<IMetadataTypeTag> | undefined)",
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index38: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index38 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index38 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index38 +
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
                    })) &&
                (undefined === input.$id ||
                    "string" === typeof input.$id ||
                    $guard(_exceptionable, {
                        path: _path + ".$id",
                        expected: "(string | undefined)",
                        value: input.$id,
                    })) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor ||
                    $guard(_exceptionable, {
                        path: _path + ".$recursiveAnchor",
                        expected: "(boolean | undefined)",
                        value: input.$recursiveAnchor,
                    }));
            const $ao27 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (undefined === input.minLength ||
                    ("number" === typeof input.minLength &&
                        ((Math.floor(input.minLength) === input.minLength &&
                            0 <= input.minLength &&
                            input.minLength <= 4294967295) ||
                            $guard(_exceptionable, {
                                path: _path + ".minLength",
                                expected: 'number & Type<"uint32">',
                                value: input.minLength,
                            }))) ||
                    $guard(_exceptionable, {
                        path: _path + ".minLength",
                        expected: '((number & Type<"uint32">) | undefined)',
                        value: input.minLength,
                    })) &&
                (undefined === input.maxLength ||
                    ("number" === typeof input.maxLength &&
                        ((Math.floor(input.maxLength) === input.maxLength &&
                            0 <= input.maxLength &&
                            input.maxLength <= 4294967295) ||
                            $guard(_exceptionable, {
                                path: _path + ".maxLength",
                                expected: 'number & Type<"uint32">',
                                value: input.maxLength,
                            }))) ||
                    $guard(_exceptionable, {
                        path: _path + ".maxLength",
                        expected: '((number & Type<"uint32">) | undefined)',
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
                            expected: "(Array<IMetadataTypeTag> | undefined)",
                            value: input["x-typia-typeTags"],
                        })) &&
                        input["x-typia-typeTags"].every(
                            (elem: any, _index39: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-typeTags"][' +
                                            _index39 +
                                            "]",
                                        expected: "IMetadataTypeTag",
                                        value: elem,
                                    })) &&
                                    $ao8(
                                        elem,
                                        _path +
                                            '["x-typia-typeTags"][' +
                                            _index39 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-typeTags"][' +
                                        _index39 +
                                        "]",
                                    expected: "IMetadataTypeTag",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + '["x-typia-typeTags"]',
                        expected: "(Array<IMetadataTypeTag> | undefined)",
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index40: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index40 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index40 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index40 +
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
                    })) &&
                (undefined === input.$id ||
                    "string" === typeof input.$id ||
                    $guard(_exceptionable, {
                        path: _path + ".$id",
                        expected: "(string | undefined)",
                        value: input.$id,
                    })) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor ||
                    $guard(_exceptionable, {
                        path: _path + ".$recursiveAnchor",
                        expected: "(boolean | undefined)",
                        value: input.$recursiveAnchor,
                    }));
            const $ao28 = (
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
                        expected: '((number & Type<"uint32">) | undefined)',
                        value: input.minItems,
                    })) &&
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        ((Math.floor(input.maxItems) === input.maxItems &&
                            0 <= input.maxItems &&
                            input.maxItems <= 4294967295) ||
                            $guard(_exceptionable, {
                                path: _path + ".maxItems",
                                expected: 'number & Type<"uint32">',
                                value: input.maxItems,
                            }))) ||
                    $guard(_exceptionable, {
                        path: _path + ".maxItems",
                        expected: '((number & Type<"uint32">) | undefined)',
                        value: input.maxItems,
                    })) &&
                (undefined === input["x-typia-tuple"] ||
                    ((("object" === typeof input["x-typia-tuple"] &&
                        null !== input["x-typia-tuple"]) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-tuple"]',
                            expected: "(IJsonSchema.ITuple | undefined)",
                            value: input["x-typia-tuple"],
                        })) &&
                        $ao12(
                            input["x-typia-tuple"],
                            _path + '["x-typia-tuple"]',
                            true && _exceptionable,
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + '["x-typia-tuple"]',
                        expected: "(IJsonSchema.ITuple | undefined)",
                        value: input["x-typia-tuple"],
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index41: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index41 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index41 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index41 +
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
                    })) &&
                (undefined === input.$id ||
                    "string" === typeof input.$id ||
                    $guard(_exceptionable, {
                        path: _path + ".$id",
                        expected: "(string | undefined)",
                        value: input.$id,
                    })) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor ||
                    $guard(_exceptionable, {
                        path: _path + ".$recursiveAnchor",
                        expected: "(boolean | undefined)",
                        value: input.$recursiveAnchor,
                    }));
            const $ao29 = (
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
                        (elem: any, _index42: number) =>
                            ((("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".items[" + _index42 + "]",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: elem,
                                })) &&
                                $au0(
                                    elem,
                                    _path + ".items[" + _index42 + "]",
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".items[" + _index42 + "]",
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
                        ((Math.floor(input.maxItems) === input.maxItems &&
                            0 <= input.maxItems &&
                            input.maxItems <= 4294967295) ||
                            $guard(_exceptionable, {
                                path: _path + ".maxItems",
                                expected: 'number & Type<"uint32">',
                                value: input.maxItems,
                            }))) ||
                    $guard(_exceptionable, {
                        path: _path + ".maxItems",
                        expected: '((number & Type<"uint32">) | undefined)',
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index43: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index43 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index43 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index43 +
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
                    })) &&
                (undefined === input.$id ||
                    "string" === typeof input.$id ||
                    $guard(_exceptionable, {
                        path: _path + ".$id",
                        expected: "(string | undefined)",
                        value: input.$id,
                    })) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor ||
                    $guard(_exceptionable, {
                        path: _path + ".$recursiveAnchor",
                        expected: "(boolean | undefined)",
                        value: input.$recursiveAnchor,
                    }));
            const $ao30 = (
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
                        (elem: any, _index44: number) =>
                            ((("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".oneOf[" + _index44 + "]",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: elem,
                                })) &&
                                $au0(
                                    elem,
                                    _path + ".oneOf[" + _index44 + "]",
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".oneOf[" + _index44 + "]",
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index45: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index45 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index45 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index45 +
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
                    })) &&
                (undefined === input.$id ||
                    "string" === typeof input.$id ||
                    $guard(_exceptionable, {
                        path: _path + ".$id",
                        expected: "(string | undefined)",
                        value: input.$id,
                    })) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor ||
                    $guard(_exceptionable, {
                        path: _path + ".$recursiveAnchor",
                        expected: "(boolean | undefined)",
                        value: input.$recursiveAnchor,
                    }));
            const $ao31 = (
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index46: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index46 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index46 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index46 +
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
                    })) &&
                (undefined === input.$id ||
                    "string" === typeof input.$id ||
                    $guard(_exceptionable, {
                        path: _path + ".$id",
                        expected: "(string | undefined)",
                        value: input.$id,
                    })) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor ||
                    $guard(_exceptionable, {
                        path: _path + ".$recursiveAnchor",
                        expected: "(boolean | undefined)",
                        value: input.$recursiveAnchor,
                    }));
            const $ao32 = (
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index47: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index47 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index47 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index47 +
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
                    })) &&
                (undefined === input.$id ||
                    "string" === typeof input.$id ||
                    $guard(_exceptionable, {
                        path: _path + ".$id",
                        expected: "(string | undefined)",
                        value: input.$id,
                    })) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor ||
                    $guard(_exceptionable, {
                        path: _path + ".$recursiveAnchor",
                        expected: "(boolean | undefined)",
                        value: input.$recursiveAnchor,
                    }));
            const $ao33 = (
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
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any, _index48: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index48 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index48 +
                                            "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-jsDocTags"][' +
                                        _index48 +
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
                    })) &&
                (undefined === input.$id ||
                    "string" === typeof input.$id ||
                    $guard(_exceptionable, {
                        path: _path + ".$id",
                        expected: "(string | undefined)",
                        value: input.$id,
                    })) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor ||
                    $guard(_exceptionable, {
                        path: _path + ".$recursiveAnchor",
                        expected: "(boolean | undefined)",
                        value: input.$recursiveAnchor,
                    }));
            const $au0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                (() => {
                    if ("integer" === input.type)
                        return $ao7(input, _path, true && _exceptionable);
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
                        return $ao11(input, _path, true && _exceptionable);
                    else if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any, _index49: number) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $au0(
                                    elem,
                                    _path + ".items[" + _index49 + "]",
                                    false && _exceptionable,
                                ),
                        )
                    )
                        return $ao12(input, _path, true && _exceptionable);
                    else if (undefined !== input.oneOf)
                        return $ao13(input, _path, true && _exceptionable);
                    else if (undefined !== input.$ref)
                        return $ao14(input, _path, true && _exceptionable);
                    else if ("null" === input.type)
                        return $ao15(input, _path, true && _exceptionable);
                    else
                        return (
                            $ao5(input, _path, false && _exceptionable) ||
                            $ao4(input, _path, false && _exceptionable) ||
                            $ao1(input, _path, false && _exceptionable) ||
                            $ao6(input, _path, false && _exceptionable) ||
                            $ao9(input, _path, false && _exceptionable) ||
                            $ao10(input, _path, false && _exceptionable) ||
                            $ao16(input, _path, false && _exceptionable) ||
                            $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    '(IJsonSchema.IEnumeration<"string"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                                value: input,
                            })
                        );
                })();
            const $au1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                (() => {
                    if ("object" === input.type)
                        return $ao19(input, _path, true && _exceptionable);
                    else if ("integer" === input.type)
                        return $ao25(input, _path, true && _exceptionable);
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
                        return $ao28(input, _path, true && _exceptionable);
                    else if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any, _index50: number) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $au0(
                                    elem,
                                    _path + ".items[" + _index50 + "]",
                                    false && _exceptionable,
                                ),
                        )
                    )
                        return $ao29(input, _path, true && _exceptionable);
                    else if (undefined !== input.oneOf)
                        return $ao30(input, _path, true && _exceptionable);
                    else if (undefined !== input.$ref)
                        return $ao31(input, _path, true && _exceptionable);
                    else if ("null" === input.type)
                        return $ao32(input, _path, true && _exceptionable);
                    else
                        return (
                            $ao23(input, _path, false && _exceptionable) ||
                            $ao22(input, _path, false && _exceptionable) ||
                            $ao21(input, _path, false && _exceptionable) ||
                            $ao24(input, _path, false && _exceptionable) ||
                            $ao26(input, _path, false && _exceptionable) ||
                            $ao27(input, _path, false && _exceptionable) ||
                            $ao33(input, _path, false && _exceptionable) ||
                            $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    '(IEnumeration<"string"> & IIdentified | IEnumeration<"number"> & IIdentified | IEnumeration<"boolean"> & IIdentified | IBoolean & IIdentified | INumber & IIdentified | IString & IIdentified | IUnknown & IIdentified)',
                                value: input,
                            })
                        );
                })();
            return (
                ((Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "UltimateUnion",
                        value: input,
                    })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "IJsonApplication",
                                    value: elem,
                                })) &&
                                $ao0(
                                    elem,
                                    _path + "[" + _index1 + "]",
                                    true,
                                )) ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected: "IJsonApplication",
                                value: elem,
                            }),
                    )) ||
                $guard(true, {
                    path: _path + "",
                    expected: "UltimateUnion",
                    value: input,
                })
            );
        })(input, "$input", true);
    return input;
});
