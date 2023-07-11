import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_createIs_UltimateUnion = _test_is(
    "UltimateUnion",
    UltimateUnion.generate,
    (input: any): input is UltimateUnion => {
        const $join = (typia.createIs as any).join;
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
            $io31(input.components) &&
            ("ajv" === input.purpose || "swagger" === input.purpose);
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
            (undefined === input.title || "string" === typeof input.title) &&
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
            "minimum" === input.kind &&
            "number" === typeof input.value &&
            Number.isFinite(input.value);
        const $io4 = (input: any): boolean =>
            "maximum" === input.kind &&
            "number" === typeof input.value &&
            Number.isFinite(input.value);
        const $io5 = (input: any): boolean =>
            "exclusiveMinimum" === input.kind &&
            "number" === typeof input.value &&
            Number.isFinite(input.value);
        const $io6 = (input: any): boolean =>
            "exclusiveMaximum" === input.kind &&
            "number" === typeof input.value &&
            Number.isFinite(input.value);
        const $io7 = (input: any): boolean =>
            "multipleOf" === input.kind &&
            "number" === typeof input.value &&
            Number.isFinite(input.value);
        const $io8 = (input: any): boolean =>
            "step" === input.kind &&
            "number" === typeof input.value &&
            Number.isFinite(input.value);
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
            "length" === input.kind &&
            "number" === typeof input.value &&
            Number.isFinite(input.value);
        const $io12 = (input: any): boolean =>
            "minLength" === input.kind &&
            "number" === typeof input.value &&
            Number.isFinite(input.value);
        const $io13 = (input: any): boolean =>
            "maxLength" === input.kind &&
            "number" === typeof input.value &&
            Number.isFinite(input.value);
        const $io14 = (input: any): boolean =>
            "items" === input.kind &&
            "number" === typeof input.value &&
            Number.isFinite(input.value);
        const $io15 = (input: any): boolean =>
            "minItems" === input.kind &&
            "number" === typeof input.value &&
            Number.isFinite(input.value);
        const $io16 = (input: any): boolean =>
            "maxItems" === input.kind &&
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
            "string" === typeof input.text && "string" === typeof input.kind;
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
            (undefined === input.nullable ||
                "boolean" === typeof input.nullable) &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.nullable ||
                "boolean" === typeof input.nullable) &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.nullable ||
                "boolean" === typeof input.nullable) &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.format || "string" === typeof input.format) &&
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
            (undefined === input.nullable ||
                "boolean" === typeof input.nullable) &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
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
            Number.isFinite(input.minItems) &&
            parseInt(input.minItems) === input.minItems &&
            0 <= input.minItems &&
            (undefined === input.maxItems ||
                ("number" === typeof input.maxItems &&
                    Number.isFinite(input.maxItems) &&
                    parseInt(input.maxItems) === input.maxItems &&
                    0 <= input.maxItems)) &&
            "array" === input.type &&
            (undefined === input.nullable ||
                "boolean" === typeof input.nullable) &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.title || "string" === typeof input.title) &&
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
                ("object" === typeof input["x-typia-additionalProperties"] &&
                    null !== input["x-typia-additionalProperties"] &&
                    false ===
                        Array.isArray(input["x-typia-additionalProperties"]) &&
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
            (undefined === input.title || "string" === typeof input.title) &&
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
            input["enum"].every(
                (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
            ) &&
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
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.nullable ||
                "boolean" === typeof input.nullable) &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.nullable ||
                "boolean" === typeof input.nullable) &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.format || "string" === typeof input.format) &&
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
            (undefined === input.nullable ||
                "boolean" === typeof input.nullable) &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
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
            Number.isFinite(input.minItems) &&
            parseInt(input.minItems) === input.minItems &&
            0 <= input.minItems &&
            (undefined === input.maxItems ||
                ("number" === typeof input.maxItems &&
                    Number.isFinite(input.maxItems) &&
                    parseInt(input.maxItems) === input.maxItems &&
                    0 <= input.maxItems)) &&
            "array" === input.type &&
            (undefined === input.nullable ||
                "boolean" === typeof input.nullable) &&
            (undefined === input.deprecated ||
                "boolean" === typeof input.deprecated) &&
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.title || "string" === typeof input.title) &&
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
            (undefined === input.title || "string" === typeof input.title) &&
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
                if (
                    "object" === typeof input.items &&
                    null !== input.items &&
                    false === Array.isArray(input.items) &&
                    $iu0(input.items)
                )
                    return $io25(input);
                if (
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
                if (undefined !== input.oneOf) return $io27(input);
                if (undefined !== input.$ref) return $io28(input);
                if ("null" === input.type) return $io29(input);
                return (() => {
                    if ($io20(input)) return $io20(input);
                    if ($io19(input)) return $io19(input);
                    if ($io1(input)) return $io1(input);
                    if ($io21(input)) return $io21(input);
                    if ($io23(input)) return $io23(input);
                    if ($io24(input)) return $io24(input);
                    if ($io30(input)) return $io30(input);
                    return false;
                })();
            })();
        const $iu1 = (input: any): any =>
            (() => {
                if ("maxItems" === input.kind) return $io16(input);
                if ("minItems" === input.kind) return $io15(input);
                if ("items" === input.kind) return $io14(input);
                if ("maxLength" === input.kind) return $io13(input);
                if ("minLength" === input.kind) return $io12(input);
                if ("length" === input.kind) return $io11(input);
                if ("pattern" === input.kind) return $io10(input);
                if ("format" === input.kind) return $io9(input);
                if ("step" === input.kind) return $io8(input);
                if ("multipleOf" === input.kind) return $io7(input);
                if ("exclusiveMaximum" === input.kind) return $io6(input);
                if ("exclusiveMinimum" === input.kind) return $io5(input);
                if ("maximum" === input.kind) return $io4(input);
                if ("minimum" === input.kind) return $io3(input);
                if ("type" === input.kind) return $io2(input);
                return false;
            })();
        const $iu2 = (input: any): any =>
            (() => {
                if ("object" === input.type) return $io33(input);
                if ("integer" === input.type) return $io39(input);
                if (
                    "object" === typeof input.items &&
                    null !== input.items &&
                    false === Array.isArray(input.items) &&
                    $iu0(input.items)
                )
                    return $io42(input);
                if (
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
                if (undefined !== input.oneOf) return $io44(input);
                if (undefined !== input.$ref) return $io45(input);
                if ("null" === input.type) return $io46(input);
                return (() => {
                    if ($io37(input)) return $io37(input);
                    if ($io36(input)) return $io36(input);
                    if ($io35(input)) return $io35(input);
                    if ($io38(input)) return $io38(input);
                    if ($io40(input)) return $io40(input);
                    if ($io41(input)) return $io41(input);
                    if ($io47(input)) return $io47(input);
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
    },
    UltimateUnion.SPOILERS,
);
