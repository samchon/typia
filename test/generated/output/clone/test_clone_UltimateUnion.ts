import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_clone_UltimateUnion = _test_clone(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) =>
        ((
            input: Array<typia.IJsonApplication>,
        ): typia.Primitive<Array<typia.IJsonApplication>> => {
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
                    "boolean" === typeof input["x-typia-optional"]);
            const $io2 = (input: any): boolean =>
                "type" === input.kind &&
                ("int" === input.value || "uint" === input.value);
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
                    "boolean" === typeof input["x-typia-optional"]);
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
                    "boolean" === typeof input["x-typia-optional"]);
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
                    "boolean" === typeof input["x-typia-optional"]);
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
                    "boolean" === typeof input["x-typia-optional"]);
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
                    "boolean" === typeof input["x-typia-optional"]);
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
                    "boolean" === typeof input["x-typia-optional"]);
            const $io25 = (input: any): boolean =>
                "object" === typeof input.items &&
                null !== input.items &&
                false === Array.isArray(input.items) &&
                $iu0(input.items) &&
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
                    "boolean" === typeof input["x-typia-optional"]);
            const $io26 = (input: any): boolean =>
                Array.isArray(input.items) &&
                input.items.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu0(elem),
                ) &&
                "boolean" === typeof input["x-typia-rest"] &&
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
                    "boolean" === typeof input["x-typia-optional"]);
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
                    "boolean" === typeof input["x-typia-optional"]);
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
                    "boolean" === typeof input["x-typia-optional"]);
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
                    "boolean" === typeof input["x-typia-optional"]);
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
                    "boolean" === typeof input["x-typia-optional"]);
            const $io31 = (input: any): boolean =>
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
                    "boolean" === typeof input["x-typia-optional"]);
            const $io32 = (input: any): boolean =>
                (undefined === input.objects ||
                    ("object" === typeof input.objects &&
                        null !== input.objects &&
                        false === Array.isArray(input.objects) &&
                        $io33(input.objects))) &&
                (undefined === input.definitions ||
                    ("object" === typeof input.definitions &&
                        null !== input.definitions &&
                        false === Array.isArray(input.definitions) &&
                        $io36(input.definitions))) &&
                (undefined === input.arrays ||
                    ("object" === typeof input.arrays &&
                        null !== input.arrays &&
                        false === Array.isArray(input.arrays) &&
                        $io51(input.arrays))) &&
                (undefined === input.tuples ||
                    ("object" === typeof input.tuples &&
                        null !== input.tuples &&
                        false === Array.isArray(input.tuples) &&
                        $io53(input.tuples)));
            const $io33 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
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
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
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
                        $io35(input["x-typia-patternProperties"]))) &&
                (undefined === input["x-typia-additionalProperties"] ||
                    ("object" ===
                        typeof input["x-typia-additionalProperties"] &&
                        null !== input["x-typia-additionalProperties"] &&
                        false ===
                            Array.isArray(
                                input["x-typia-additionalProperties"],
                            ) &&
                        $iu0(input["x-typia-additionalProperties"])));
            const $io35 = (input: any): boolean =>
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
            const $io36 = (input: any): boolean =>
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
            const $io37 = (input: any): boolean =>
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
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io38 = (input: any): boolean =>
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
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io39 = (input: any): boolean =>
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
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io40 = (input: any): boolean =>
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
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io41 = (input: any): boolean =>
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
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io42 = (input: any): boolean =>
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
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io43 = (input: any): boolean =>
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
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io44 = (input: any): boolean =>
                "object" === typeof input.items &&
                null !== input.items &&
                false === Array.isArray(input.items) &&
                $iu0(input.items) &&
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
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io45 = (input: any): boolean =>
                Array.isArray(input.items) &&
                input.items.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu0(elem),
                ) &&
                "boolean" === typeof input["x-typia-rest"] &&
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
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io46 = (input: any): boolean =>
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
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io47 = (input: any): boolean =>
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
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io48 = (input: any): boolean =>
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
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io49 = (input: any): boolean =>
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
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io50 = (input: any): boolean =>
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
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io51 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            $io52(value)
                        );
                    return true;
                });
            const $io52 = (input: any): boolean =>
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    true === input.$recursiveAnchor) &&
                "object" === typeof input.items &&
                null !== input.items &&
                false === Array.isArray(input.items) &&
                $iu0(input.items) &&
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
                    "boolean" === typeof input["x-typia-optional"]);
            const $io53 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            $iu3(value)
                        );
                    return true;
                });
            const $io54 = (input: any): boolean =>
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    true === input.$recursiveAnchor) &&
                Array.isArray(input.items) &&
                input.items.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu0(elem),
                ) &&
                "boolean" === typeof input["x-typia-rest"] &&
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
                    "boolean" === typeof input["x-typia-optional"]);
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
                    if (undefined !== input.$recursiveRef) return $io29(input);
                    if ("null" === input.type) return $io30(input);
                    return (
                        $io20(input) ||
                        $io19(input) ||
                        $io1(input) ||
                        $io21(input) ||
                        $io23(input) ||
                        $io24(input) ||
                        $io31(input)
                    );
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
                    if ("integer" === input.type) return $io41(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu0(input.items)
                    )
                        return $io44(input);
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
                        return $io45(input);
                    if (undefined !== input.oneOf) return $io46(input);
                    if (undefined !== input.$ref) return $io47(input);
                    if (undefined !== input.$recursiveRef) return $io48(input);
                    if ("null" === input.type) return $io49(input);
                    return (
                        $io39(input) ||
                        $io38(input) ||
                        $io37(input) ||
                        $io40(input) ||
                        $io42(input) ||
                        $io43(input) ||
                        $io50(input)
                    );
                })();
            const $iu3 = (input: any): any =>
                (() => {
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu0(input.items)
                    )
                        return $io52(input);
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
                        return $io54(input);
                    return false;
                })();
            const $join = (typia.clone as any).join;
            const $throws = (typia.clone as any).throws;
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co0(elem)
                        : (elem as any),
                );
            const $cp1 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $cu0(elem)
                        : (elem as any),
                );
            const $cp2 = (input: any) => input.map((elem: any) => elem as any);
            const $cp3 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $cu1(elem)
                        : (elem as any),
                );
            const $cp4 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co17(elem)
                        : (elem as any),
                );
            const $cp5 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co18(elem)
                        : (elem as any),
                );
            const $cp6 = (input: any) => input.map((elem: any) => elem as any);
            const $cp7 = (input: any) => input.map((elem: any) => elem as any);
            const $co0 = (input: any): any => ({
                schemas: Array.isArray(input.schemas)
                    ? $cp1(input.schemas)
                    : (input.schemas as any),
                components:
                    "object" === typeof input.components &&
                    null !== input.components
                        ? $co32(input.components)
                        : (input.components as any),
                purpose: input.purpose as any,
            });
            const $co1 = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? $cp2(input["enum"])
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co2 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co3 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co4 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co5 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co6 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co7 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co8 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co9 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co10 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co11 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co12 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co13 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co14 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co15 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co16 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co17 = (input: any): any => ({
                name: input.name as any,
                text: Array.isArray(input.text)
                    ? $cp5(input.text)
                    : (input.text as any),
            });
            const $co18 = (input: any): any => ({
                text: input.text as any,
                kind: input.kind as any,
            });
            const $co19 = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? $cp6(input["enum"])
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co20 = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? $cp7(input["enum"])
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co21 = (input: any): any => ({
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co22 = (input: any): any => ({
                minimum: input.minimum as any,
                maximum: input.maximum as any,
                exclusiveMinimum: input.exclusiveMinimum as any,
                exclusiveMaximum: input.exclusiveMaximum as any,
                multipleOf: input.multipleOf as any,
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co23 = (input: any): any => ({
                minimum: input.minimum as any,
                maximum: input.maximum as any,
                exclusiveMinimum: input.exclusiveMinimum as any,
                exclusiveMaximum: input.exclusiveMaximum as any,
                multipleOf: input.multipleOf as any,
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co24 = (input: any): any => ({
                minLength: input.minLength as any,
                maxLength: input.maxLength as any,
                pattern: input.pattern as any,
                format: input.format as any,
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co25 = (input: any): any => ({
                items:
                    "object" === typeof input.items && null !== input.items
                        ? $cu0(input.items)
                        : (input.items as any),
                minItems: input.minItems as any,
                maxItems: input.maxItems as any,
                "x-typia-tuple":
                    "object" === typeof input["x-typia-tuple"] &&
                    null !== input["x-typia-tuple"]
                        ? $co26(input["x-typia-tuple"])
                        : (input["x-typia-tuple"] as any),
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co26 = (input: any): any => ({
                items: Array.isArray(input.items)
                    ? $cp1(input.items)
                    : (input.items as any),
                "x-typia-rest": input["x-typia-rest"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co27 = (input: any): any => ({
                oneOf: Array.isArray(input.oneOf)
                    ? $cp1(input.oneOf)
                    : (input.oneOf as any),
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co28 = (input: any): any => ({
                $ref: input.$ref as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co29 = (input: any): any => ({
                $recursiveRef: input.$recursiveRef as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co30 = (input: any): any => ({
                type: input.type as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co31 = (input: any): any => ({
                type: input.type as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co32 = (input: any): any => ({
                objects:
                    "object" === typeof input.objects && null !== input.objects
                        ? $co33(input.objects)
                        : (input.objects as any),
                definitions:
                    "object" === typeof input.definitions &&
                    null !== input.definitions
                        ? $co36(input.definitions)
                        : (input.definitions as any),
                arrays:
                    "object" === typeof input.arrays && null !== input.arrays
                        ? $co51(input.arrays)
                        : (input.arrays as any),
                tuples:
                    "object" === typeof input.tuples && null !== input.tuples
                        ? $co53(input.tuples)
                        : (input.tuples as any),
            });
            const $co33 = (input: any): any => {
                const output = {} as any;
                for (const [key, value] of Object.entries(input)) {
                    if (RegExp(/(.*)/).test(key)) {
                        output[key] =
                            "object" === typeof value && null !== value
                                ? $co34(value)
                                : (value as any);
                        continue;
                    }
                }
                return output;
            };
            const $co34 = (input: any): any => ({
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
                type: input.type as any,
                nullable: input.nullable as any,
                properties:
                    "object" === typeof input.properties &&
                    null !== input.properties
                        ? $co35(input.properties)
                        : (input.properties as any),
                patternProperties:
                    "object" === typeof input.patternProperties &&
                    null !== input.patternProperties
                        ? $co35(input.patternProperties)
                        : (input.patternProperties as any),
                additionalProperties:
                    "object" === typeof input.additionalProperties &&
                    null !== input.additionalProperties
                        ? $cu0(input.additionalProperties)
                        : (input.additionalProperties as any),
                required: Array.isArray(input.required)
                    ? $cp7(input.required)
                    : (input.required as any),
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-patternProperties":
                    "object" === typeof input["x-typia-patternProperties"] &&
                    null !== input["x-typia-patternProperties"]
                        ? $co35(input["x-typia-patternProperties"])
                        : (input["x-typia-patternProperties"] as any),
                "x-typia-additionalProperties":
                    "object" === typeof input["x-typia-additionalProperties"] &&
                    null !== input["x-typia-additionalProperties"]
                        ? $cu0(input["x-typia-additionalProperties"])
                        : (input["x-typia-additionalProperties"] as any),
            });
            const $co35 = (input: any): any => {
                const output = {} as any;
                for (const [key, value] of Object.entries(input)) {
                    if (RegExp(/(.*)/).test(key)) {
                        output[key] =
                            "object" === typeof value && null !== value
                                ? $cu0(value)
                                : (value as any);
                        continue;
                    }
                }
                return output;
            };
            const $co36 = (input: any): any => {
                const output = {} as any;
                for (const [key, value] of Object.entries(input)) {
                    if (RegExp(/(.*)/).test(key)) {
                        output[key] =
                            "object" === typeof value && null !== value
                                ? $cu2(value)
                                : (value as any);
                        continue;
                    }
                }
                return output;
            };
            const $co37 = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? $cp2(input["enum"])
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co38 = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? $cp6(input["enum"])
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co39 = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? $cp7(input["enum"])
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co40 = (input: any): any => ({
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co41 = (input: any): any => ({
                minimum: input.minimum as any,
                maximum: input.maximum as any,
                exclusiveMinimum: input.exclusiveMinimum as any,
                exclusiveMaximum: input.exclusiveMaximum as any,
                multipleOf: input.multipleOf as any,
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co42 = (input: any): any => ({
                minimum: input.minimum as any,
                maximum: input.maximum as any,
                exclusiveMinimum: input.exclusiveMinimum as any,
                exclusiveMaximum: input.exclusiveMaximum as any,
                multipleOf: input.multipleOf as any,
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co43 = (input: any): any => ({
                minLength: input.minLength as any,
                maxLength: input.maxLength as any,
                pattern: input.pattern as any,
                format: input.format as any,
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co44 = (input: any): any => ({
                items:
                    "object" === typeof input.items && null !== input.items
                        ? $cu0(input.items)
                        : (input.items as any),
                minItems: input.minItems as any,
                maxItems: input.maxItems as any,
                "x-typia-tuple":
                    "object" === typeof input["x-typia-tuple"] &&
                    null !== input["x-typia-tuple"]
                        ? $co26(input["x-typia-tuple"])
                        : (input["x-typia-tuple"] as any),
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co45 = (input: any): any => ({
                items: Array.isArray(input.items)
                    ? $cp1(input.items)
                    : (input.items as any),
                "x-typia-rest": input["x-typia-rest"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co46 = (input: any): any => ({
                oneOf: Array.isArray(input.oneOf)
                    ? $cp1(input.oneOf)
                    : (input.oneOf as any),
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co47 = (input: any): any => ({
                $ref: input.$ref as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co48 = (input: any): any => ({
                $recursiveRef: input.$recursiveRef as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co49 = (input: any): any => ({
                type: input.type as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co50 = (input: any): any => ({
                type: input.type as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co51 = (input: any): any => {
                const output = {} as any;
                for (const [key, value] of Object.entries(input)) {
                    if (RegExp(/(.*)/).test(key)) {
                        output[key] =
                            "object" === typeof value && null !== value
                                ? $co52(value)
                                : (value as any);
                        continue;
                    }
                }
                return output;
            };
            const $co52 = (input: any): any => ({
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
                items:
                    "object" === typeof input.items && null !== input.items
                        ? $cu0(input.items)
                        : (input.items as any),
                minItems: input.minItems as any,
                maxItems: input.maxItems as any,
                "x-typia-tuple":
                    "object" === typeof input["x-typia-tuple"] &&
                    null !== input["x-typia-tuple"]
                        ? $co26(input["x-typia-tuple"])
                        : (input["x-typia-tuple"] as any),
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co53 = (input: any): any => {
                const output = {} as any;
                for (const [key, value] of Object.entries(input)) {
                    if (RegExp(/(.*)/).test(key)) {
                        output[key] =
                            "object" === typeof value && null !== value
                                ? $cu3(value)
                                : (value as any);
                        continue;
                    }
                }
                return output;
            };
            const $co54 = (input: any): any => ({
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
                items: Array.isArray(input.items)
                    ? $cp1(input.items)
                    : (input.items as any),
                "x-typia-rest": input["x-typia-rest"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? $cp3(input["x-typia-metaTags"])
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? $cp4(input["x-typia-jsDocTags"])
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $cu0 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $co22(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu0(input.items)
                    )
                        return $co25(input);
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
                        return $co26(input);
                    if (undefined !== input.oneOf) return $co27(input);
                    if (undefined !== input.$ref) return $co28(input);
                    if (undefined !== input.$recursiveRef) return $co29(input);
                    if ("null" === input.type) return $co30(input);
                    return (() => {
                        if ($io20(input)) return $co20(input);
                        if ($io19(input)) return $co19(input);
                        if ($io1(input)) return $co1(input);
                        if ($io21(input)) return $co21(input);
                        if ($io23(input)) return $co23(input);
                        if ($io24(input)) return $co24(input);
                        if ($io31(input)) return $co31(input);
                        $throws({
                            expected:
                                '(IJsonSchema.IEnumeration<"string"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                            value: input,
                        });
                    })();
                })();
            const $cu1 = (input: any): any =>
                (() => {
                    if ("maxItems" === input.kind) return $co16(input);
                    if ("minItems" === input.kind) return $co15(input);
                    if ("items" === input.kind) return $co14(input);
                    if ("maxLength" === input.kind) return $co13(input);
                    if ("minLength" === input.kind) return $co12(input);
                    if ("length" === input.kind) return $co11(input);
                    if ("pattern" === input.kind) return $co10(input);
                    if ("format" === input.kind) return $co9(input);
                    if ("step" === input.kind) return $co8(input);
                    if ("multipleOf" === input.kind) return $co7(input);
                    if ("exclusiveMaximum" === input.kind) return $co6(input);
                    if ("exclusiveMinimum" === input.kind) return $co5(input);
                    if ("maximum" === input.kind) return $co4(input);
                    if ("minimum" === input.kind) return $co3(input);
                    if ("type" === input.kind) return $co2(input);
                    $throws({
                        expected:
                            "(IMetadataTag.IMaxItems | IMetadataTag.IMinItems | IMetadataTag.IItems | IMetadataTag.IMaxLength | IMetadataTag.IMinLength | IMetadataTag.ILength | IMetadataTag.IPattern | IMetadataTag.IFormat | IMetadataTag.IStep | IMetadataTag.IMultipleOf | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IMaximum | IMetadataTag.IMinimum | IMetadataTag.IType)",
                        value: input,
                    });
                })();
            const $cu2 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $co41(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu0(input.items)
                    )
                        return $co44(input);
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
                        return $co45(input);
                    if (undefined !== input.oneOf) return $co46(input);
                    if (undefined !== input.$ref) return $co47(input);
                    if (undefined !== input.$recursiveRef) return $co48(input);
                    if ("null" === input.type) return $co49(input);
                    return (() => {
                        if ($io39(input)) return $co39(input);
                        if ($io38(input)) return $co38(input);
                        if ($io37(input)) return $co37(input);
                        if ($io40(input)) return $co40(input);
                        if ($io42(input)) return $co42(input);
                        if ($io43(input)) return $co43(input);
                        if ($io50(input)) return $co50(input);
                        $throws({
                            expected:
                                '(IEnumeration<"string"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"number"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"boolean"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IBoolean & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | INumber & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IString & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IUnknown & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; })',
                            value: input,
                        });
                    })();
                })();
            const $cu3 = (input: any): any =>
                (() => {
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu0(input.items)
                    )
                        return $co52(input);
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
                        return $co54(input);
                    $throws({
                        expected:
                            "(IJsonComponents.IArray | IJsonComponents.ITuple)",
                        value: input,
                    });
                })();
            return Array.isArray(input) ? $cp0(input) : (input as any);
        })(input),
);
