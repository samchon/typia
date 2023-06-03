import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_createValidateStringify_UltimateUnion =
    _test_validateStringify(
        "UltimateUnion",
        UltimateUnion.generate,
        (input: UltimateUnion): typia.IValidation<string> => {
            const validate = (input: any): typia.IValidation<UltimateUnion> => {
                const errors = [] as any[];
                const $report = (typia.createValidateStringify as any).report(
                    errors,
                );
                const __is = (input: any): input is UltimateUnion => {
                    const $join = (typia.createValidateStringify as any).join;
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
                        $io32(input.components) &&
                        ("ajv" === input.purpose ||
                            "swagger" === input.purpose);
                    const $io1 = (input: any): boolean =>
                        Array.isArray(input["enum"]) &&
                        input["enum"].every(
                            (elem: any) => "boolean" === typeof elem,
                        ) &&
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
                        "pattern" === input.kind &&
                        "string" === typeof input.value;
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
                        "string" === typeof input.text &&
                        "string" === typeof input.kind;
                    const $io19 = (input: any): boolean =>
                        Array.isArray(input["enum"]) &&
                        input["enum"].every(
                            (elem: any) =>
                                "number" === typeof elem &&
                                Number.isFinite(elem),
                        ) &&
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
                        input["enum"].every(
                            (elem: any) => "string" === typeof elem,
                        ) &&
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
                                parseInt(input.multipleOf) ===
                                    input.multipleOf)) &&
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
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
                                false ===
                                    Array.isArray(input.patternProperties) &&
                                $io35(input.patternProperties))) &&
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
                                        $io17(elem),
                                ))) &&
                        (undefined === input["x-typia-patternProperties"] ||
                            ("object" ===
                                typeof input["x-typia-patternProperties"] &&
                                null !== input["x-typia-patternProperties"] &&
                                false ===
                                    Array.isArray(
                                        input["x-typia-patternProperties"],
                                    ) &&
                                $io35(input["x-typia-patternProperties"]))) &&
                        (undefined === input["x-typia-additionalProperties"] ||
                            ("object" ===
                                typeof input["x-typia-additionalProperties"] &&
                                null !==
                                    input["x-typia-additionalProperties"] &&
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
                        input["enum"].every(
                            (elem: any) => "boolean" === typeof elem,
                        ) &&
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
                        (undefined === input.$recursiveAnchor ||
                            "boolean" === typeof input.$recursiveAnchor);
                    const $io38 = (input: any): boolean =>
                        Array.isArray(input["enum"]) &&
                        input["enum"].every(
                            (elem: any) =>
                                "number" === typeof elem &&
                                Number.isFinite(elem),
                        ) &&
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
                        (undefined === input.$recursiveAnchor ||
                            "boolean" === typeof input.$recursiveAnchor);
                    const $io39 = (input: any): boolean =>
                        Array.isArray(input["enum"]) &&
                        input["enum"].every(
                            (elem: any) => "string" === typeof elem,
                        ) &&
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
                        (undefined === input.$recursiveAnchor ||
                            "boolean" === typeof input.$recursiveAnchor);
                    const $io41 = (input: any): boolean =>
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
                                parseInt(input.multipleOf) ===
                                    input.multipleOf)) &&
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
                        (undefined === input.$recursiveAnchor ||
                            "boolean" === typeof input.$recursiveAnchor);
                    const $io42 = (input: any): boolean =>
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
                        (undefined === input.$recursiveAnchor ||
                            "boolean" === typeof input.$recursiveAnchor);
                    const $io43 = (input: any): boolean =>
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
                        (undefined === input.$recursiveAnchor ||
                            "boolean" === typeof input.$recursiveAnchor);
                    const $io44 = (input: any): boolean =>
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
                        (undefined === input.$recursiveAnchor ||
                            true === input.$recursiveAnchor) &&
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
                        (undefined === input.$id ||
                            "string" === typeof input.$id) &&
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
                            if (undefined !== input.$recursiveRef)
                                return $io29(input);
                            if ("null" === input.type) return $io30(input);
                            return (() => {
                                if ($io20(input)) return $io20(input);
                                if ($io19(input)) return $io19(input);
                                if ($io1(input)) return $io1(input);
                                if ($io21(input)) return $io21(input);
                                if ($io23(input)) return $io23(input);
                                if ($io24(input)) return $io24(input);
                                if ($io31(input)) return $io31(input);
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
                            if ("exclusiveMaximum" === input.kind)
                                return $io6(input);
                            if ("exclusiveMinimum" === input.kind)
                                return $io5(input);
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
                            if (undefined !== input.$recursiveRef)
                                return $io48(input);
                            if ("null" === input.type) return $io49(input);
                            return (() => {
                                if ($io39(input)) return $io39(input);
                                if ($io38(input)) return $io38(input);
                                if ($io37(input)) return $io37(input);
                                if ($io40(input)) return $io40(input);
                                if ($io42(input)) return $io42(input);
                                if ($io43(input)) return $io43(input);
                                if ($io50(input)) return $io50(input);
                                return false;
                            })();
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
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        )
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is UltimateUnion => {
                        const $join = (typia.createValidateStringify as any)
                            .join;
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.schemas) ||
                                    $report(_exceptionable, {
                                        path: _path + ".schemas",
                                        expected: "Array<IJsonSchema>",
                                        value: input.schemas,
                                    })) &&
                                    input.schemas
                                        .map(
                                            (elem: any, _index2: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem &&
                                                    false ===
                                                        Array.isArray(elem)) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".schemas[" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            ".schemas[" +
                                                            _index2 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".schemas[" +
                                                        _index2 +
                                                        "]",
                                                    expected:
                                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".schemas",
                                        expected: "Array<IJsonSchema>",
                                        value: input.schemas,
                                    }),
                                ((("object" === typeof input.components &&
                                    null !== input.components &&
                                    false ===
                                        Array.isArray(input.components)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".components",
                                        expected: "IJsonComponents",
                                        value: input.components,
                                    })) &&
                                    $vo32(
                                        input.components,
                                        _path + ".components",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".components",
                                        expected: "IJsonComponents",
                                        value: input.components,
                                    }),
                                "ajv" === input.purpose ||
                                    "swagger" === input.purpose ||
                                    $report(_exceptionable, {
                                        path: _path + ".purpose",
                                        expected: '("ajv" | "swagger")',
                                        value: input.purpose,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input["enum"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["enum"]',
                                        expected: "Array<boolean>",
                                        value: input["enum"],
                                    })) &&
                                    input["enum"]
                                        .map(
                                            (elem: any, _index3: number) =>
                                                "boolean" === typeof elem ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["enum"][' +
                                                        _index3 +
                                                        "]",
                                                    expected: "boolean",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["enum"]',
                                        expected: "Array<boolean>",
                                        value: input["enum"],
                                    }),
                                undefined === input["default"] ||
                                    "boolean" === typeof input["default"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["default"]',
                                        expected: "(boolean | undefined)",
                                        value: input["default"],
                                    }),
                                "boolean" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"boolean"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index4: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index4 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index4 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index4 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index5: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index5 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index5 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index5 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo2 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "type" === input.kind ||
                                    $report(_exceptionable, {
                                        path: _path + ".kind",
                                        expected: '"type"',
                                        value: input.kind,
                                    }),
                                "int" === input.value ||
                                    "uint" === input.value ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: '("int" | "uint")',
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo3 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "minimum" === input.kind ||
                                    $report(_exceptionable, {
                                        path: _path + ".kind",
                                        expected: '"minimum"',
                                        value: input.kind,
                                    }),
                                ("number" === typeof input.value &&
                                    Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo4 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "maximum" === input.kind ||
                                    $report(_exceptionable, {
                                        path: _path + ".kind",
                                        expected: '"maximum"',
                                        value: input.kind,
                                    }),
                                ("number" === typeof input.value &&
                                    Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo5 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "exclusiveMinimum" === input.kind ||
                                    $report(_exceptionable, {
                                        path: _path + ".kind",
                                        expected: '"exclusiveMinimum"',
                                        value: input.kind,
                                    }),
                                ("number" === typeof input.value &&
                                    Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo6 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "exclusiveMaximum" === input.kind ||
                                    $report(_exceptionable, {
                                        path: _path + ".kind",
                                        expected: '"exclusiveMaximum"',
                                        value: input.kind,
                                    }),
                                ("number" === typeof input.value &&
                                    Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo7 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "multipleOf" === input.kind ||
                                    $report(_exceptionable, {
                                        path: _path + ".kind",
                                        expected: '"multipleOf"',
                                        value: input.kind,
                                    }),
                                ("number" === typeof input.value &&
                                    Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo8 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "step" === input.kind ||
                                    $report(_exceptionable, {
                                        path: _path + ".kind",
                                        expected: '"step"',
                                        value: input.kind,
                                    }),
                                ("number" === typeof input.value &&
                                    Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo9 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "format" === input.kind ||
                                    $report(_exceptionable, {
                                        path: _path + ".kind",
                                        expected: '"format"',
                                        value: input.kind,
                                    }),
                                "url" === input.value ||
                                    "uuid" === input.value ||
                                    "email" === input.value ||
                                    "ipv4" === input.value ||
                                    "ipv6" === input.value ||
                                    "date" === input.value ||
                                    "datetime" === input.value ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            '("date" | "datetime" | "email" | "ipv4" | "ipv6" | "url" | "uuid")',
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo10 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "pattern" === input.kind ||
                                    $report(_exceptionable, {
                                        path: _path + ".kind",
                                        expected: '"pattern"',
                                        value: input.kind,
                                    }),
                                "string" === typeof input.value ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "string",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo11 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "length" === input.kind ||
                                    $report(_exceptionable, {
                                        path: _path + ".kind",
                                        expected: '"length"',
                                        value: input.kind,
                                    }),
                                ("number" === typeof input.value &&
                                    Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo12 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "minLength" === input.kind ||
                                    $report(_exceptionable, {
                                        path: _path + ".kind",
                                        expected: '"minLength"',
                                        value: input.kind,
                                    }),
                                ("number" === typeof input.value &&
                                    Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo13 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "maxLength" === input.kind ||
                                    $report(_exceptionable, {
                                        path: _path + ".kind",
                                        expected: '"maxLength"',
                                        value: input.kind,
                                    }),
                                ("number" === typeof input.value &&
                                    Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo14 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "items" === input.kind ||
                                    $report(_exceptionable, {
                                        path: _path + ".kind",
                                        expected: '"items"',
                                        value: input.kind,
                                    }),
                                ("number" === typeof input.value &&
                                    Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo15 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "minItems" === input.kind ||
                                    $report(_exceptionable, {
                                        path: _path + ".kind",
                                        expected: '"minItems"',
                                        value: input.kind,
                                    }),
                                ("number" === typeof input.value &&
                                    Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo16 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "maxItems" === input.kind ||
                                    $report(_exceptionable, {
                                        path: _path + ".kind",
                                        expected: '"maxItems"',
                                        value: input.kind,
                                    }),
                                ("number" === typeof input.value &&
                                    Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo17 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    }),
                                undefined === input.text ||
                                    ((Array.isArray(input.text) ||
                                        $report(_exceptionable, {
                                            path: _path + ".text",
                                            expected:
                                                "(Array<IJsDocTagInfo.IText> | undefined)",
                                            value: input.text,
                                        })) &&
                                        input.text
                                            .map(
                                                (elem: any, _index6: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".text[" +
                                                                    _index6 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo.IText",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo18(
                                                            elem,
                                                            _path +
                                                                ".text[" +
                                                                _index6 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".text[" +
                                                            _index6 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo.IText",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".text",
                                        expected:
                                            "(Array<IJsDocTagInfo.IText> | undefined)",
                                        value: input.text,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo18 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "string" === typeof input.text ||
                                    $report(_exceptionable, {
                                        path: _path + ".text",
                                        expected: "string",
                                        value: input.text,
                                    }),
                                "string" === typeof input.kind ||
                                    $report(_exceptionable, {
                                        path: _path + ".kind",
                                        expected: "string",
                                        value: input.kind,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo19 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input["enum"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["enum"]',
                                        expected: "Array<number>",
                                        value: input["enum"],
                                    })) &&
                                    input["enum"]
                                        .map(
                                            (elem: any, _index7: number) =>
                                                ("number" === typeof elem &&
                                                    Number.isFinite(elem)) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["enum"][' +
                                                        _index7 +
                                                        "]",
                                                    expected: "number",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["enum"]',
                                        expected: "Array<number>",
                                        value: input["enum"],
                                    }),
                                undefined === input["default"] ||
                                    ("number" === typeof input["default"] &&
                                        Number.isFinite(input["default"])) ||
                                    $report(_exceptionable, {
                                        path: _path + '["default"]',
                                        expected: "(number | undefined)",
                                        value: input["default"],
                                    }),
                                "number" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"number"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index8: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index8 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index8 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index8 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index9: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index9 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index9 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index9 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo20 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input["enum"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["enum"]',
                                        expected: "Array<string>",
                                        value: input["enum"],
                                    })) &&
                                    input["enum"]
                                        .map(
                                            (elem: any, _index10: number) =>
                                                "string" === typeof elem ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["enum"][' +
                                                        _index10 +
                                                        "]",
                                                    expected: "string",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["enum"]',
                                        expected: "Array<string>",
                                        value: input["enum"],
                                    }),
                                undefined === input["default"] ||
                                    "string" === typeof input["default"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["default"]',
                                        expected: "(string | undefined)",
                                        value: input["default"],
                                    }),
                                "string" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"string"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index11: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index11 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index11 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index11 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index12: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index12 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index12 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index12 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo21 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                undefined === input["default"] ||
                                    "boolean" === typeof input["default"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["default"]',
                                        expected: "(boolean | undefined)",
                                        value: input["default"],
                                    }),
                                "boolean" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"boolean"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index13: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index13 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index13 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index13 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index14: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index14 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index14 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index14 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo22 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                undefined === input.minimum ||
                                    ("number" === typeof input.minimum &&
                                        Number.isFinite(input.minimum) &&
                                        (parseInt(input.minimum) ===
                                            input.minimum ||
                                            $report(_exceptionable, {
                                                path: _path + ".minimum",
                                                expected: "number (@type int)",
                                                value: input.minimum,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minimum",
                                        expected: "(number | undefined)",
                                        value: input.minimum,
                                    }),
                                undefined === input.maximum ||
                                    ("number" === typeof input.maximum &&
                                        Number.isFinite(input.maximum) &&
                                        (parseInt(input.maximum) ===
                                            input.maximum ||
                                            $report(_exceptionable, {
                                                path: _path + ".maximum",
                                                expected: "number (@type int)",
                                                value: input.maximum,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".maximum",
                                        expected: "(number | undefined)",
                                        value: input.maximum,
                                    }),
                                undefined === input.exclusiveMinimum ||
                                    "boolean" ===
                                        typeof input.exclusiveMinimum ||
                                    $report(_exceptionable, {
                                        path: _path + ".exclusiveMinimum",
                                        expected: "(boolean | undefined)",
                                        value: input.exclusiveMinimum,
                                    }),
                                undefined === input.exclusiveMaximum ||
                                    "boolean" ===
                                        typeof input.exclusiveMaximum ||
                                    $report(_exceptionable, {
                                        path: _path + ".exclusiveMaximum",
                                        expected: "(boolean | undefined)",
                                        value: input.exclusiveMaximum,
                                    }),
                                undefined === input.multipleOf ||
                                    ("number" === typeof input.multipleOf &&
                                        Number.isFinite(input.multipleOf) &&
                                        (parseInt(input.multipleOf) ===
                                            input.multipleOf ||
                                            $report(_exceptionable, {
                                                path: _path + ".multipleOf",
                                                expected: "number (@type int)",
                                                value: input.multipleOf,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".multipleOf",
                                        expected: "(number | undefined)",
                                        value: input.multipleOf,
                                    }),
                                undefined === input["default"] ||
                                    ("number" === typeof input["default"] &&
                                        Number.isFinite(input["default"])) ||
                                    $report(_exceptionable, {
                                        path: _path + '["default"]',
                                        expected: "(number | undefined)",
                                        value: input["default"],
                                    }),
                                "integer" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"integer"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index15: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index15 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index15 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index15 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index16: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index16 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index16 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index16 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo23 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                undefined === input.minimum ||
                                    ("number" === typeof input.minimum &&
                                        Number.isFinite(input.minimum)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minimum",
                                        expected: "(number | undefined)",
                                        value: input.minimum,
                                    }),
                                undefined === input.maximum ||
                                    ("number" === typeof input.maximum &&
                                        Number.isFinite(input.maximum)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".maximum",
                                        expected: "(number | undefined)",
                                        value: input.maximum,
                                    }),
                                undefined === input.exclusiveMinimum ||
                                    "boolean" ===
                                        typeof input.exclusiveMinimum ||
                                    $report(_exceptionable, {
                                        path: _path + ".exclusiveMinimum",
                                        expected: "(boolean | undefined)",
                                        value: input.exclusiveMinimum,
                                    }),
                                undefined === input.exclusiveMaximum ||
                                    "boolean" ===
                                        typeof input.exclusiveMaximum ||
                                    $report(_exceptionable, {
                                        path: _path + ".exclusiveMaximum",
                                        expected: "(boolean | undefined)",
                                        value: input.exclusiveMaximum,
                                    }),
                                undefined === input.multipleOf ||
                                    ("number" === typeof input.multipleOf &&
                                        Number.isFinite(input.multipleOf)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".multipleOf",
                                        expected: "(number | undefined)",
                                        value: input.multipleOf,
                                    }),
                                undefined === input["default"] ||
                                    ("number" === typeof input["default"] &&
                                        Number.isFinite(input["default"])) ||
                                    $report(_exceptionable, {
                                        path: _path + '["default"]',
                                        expected: "(number | undefined)",
                                        value: input["default"],
                                    }),
                                "number" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"number"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index17: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index17 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index17 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index17 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index18: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index18 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index18 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index18 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo24 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                undefined === input.minLength ||
                                    ("number" === typeof input.minLength &&
                                        Number.isFinite(input.minLength) &&
                                        (parseInt(input.minLength) ===
                                            input.minLength ||
                                            $report(_exceptionable, {
                                                path: _path + ".minLength",
                                                expected: "number (@type uint)",
                                                value: input.minLength,
                                            })) &&
                                        (0 <= input.minLength ||
                                            $report(_exceptionable, {
                                                path: _path + ".minLength",
                                                expected: "number (@type uint)",
                                                value: input.minLength,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minLength",
                                        expected: "(number | undefined)",
                                        value: input.minLength,
                                    }),
                                undefined === input.maxLength ||
                                    ("number" === typeof input.maxLength &&
                                        Number.isFinite(input.maxLength) &&
                                        (parseInt(input.maxLength) ===
                                            input.maxLength ||
                                            $report(_exceptionable, {
                                                path: _path + ".maxLength",
                                                expected: "number (@type uint)",
                                                value: input.maxLength,
                                            })) &&
                                        (0 <= input.maxLength ||
                                            $report(_exceptionable, {
                                                path: _path + ".maxLength",
                                                expected: "number (@type uint)",
                                                value: input.maxLength,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".maxLength",
                                        expected: "(number | undefined)",
                                        value: input.maxLength,
                                    }),
                                undefined === input.pattern ||
                                    "string" === typeof input.pattern ||
                                    $report(_exceptionable, {
                                        path: _path + ".pattern",
                                        expected: "(string | undefined)",
                                        value: input.pattern,
                                    }),
                                undefined === input.format ||
                                    "string" === typeof input.format ||
                                    $report(_exceptionable, {
                                        path: _path + ".format",
                                        expected: "(string | undefined)",
                                        value: input.format,
                                    }),
                                undefined === input["default"] ||
                                    "string" === typeof input["default"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["default"]',
                                        expected: "(string | undefined)",
                                        value: input["default"],
                                    }),
                                "string" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"string"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index19: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index19 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index19 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index19 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index20: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index20 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index20 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index20 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo25 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.items &&
                                    null !== input.items &&
                                    false === Array.isArray(input.items)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: input.items,
                                    })) &&
                                    $vu0(
                                        input.items,
                                        _path + ".items",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: input.items,
                                    }),
                                undefined === input.minItems ||
                                    ("number" === typeof input.minItems &&
                                        Number.isFinite(input.minItems) &&
                                        (parseInt(input.minItems) ===
                                            input.minItems ||
                                            $report(_exceptionable, {
                                                path: _path + ".minItems",
                                                expected: "number (@type uint)",
                                                value: input.minItems,
                                            })) &&
                                        (0 <= input.minItems ||
                                            $report(_exceptionable, {
                                                path: _path + ".minItems",
                                                expected: "number (@type uint)",
                                                value: input.minItems,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: "(number | undefined)",
                                        value: input.minItems,
                                    }),
                                undefined === input.maxItems ||
                                    ("number" === typeof input.maxItems &&
                                        Number.isFinite(input.maxItems) &&
                                        (parseInt(input.maxItems) ===
                                            input.maxItems ||
                                            $report(_exceptionable, {
                                                path: _path + ".maxItems",
                                                expected: "number (@type uint)",
                                                value: input.maxItems,
                                            })) &&
                                        (0 <= input.maxItems ||
                                            $report(_exceptionable, {
                                                path: _path + ".maxItems",
                                                expected: "number (@type uint)",
                                                value: input.maxItems,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".maxItems",
                                        expected: "(number | undefined)",
                                        value: input.maxItems,
                                    }),
                                undefined === input["x-typia-tuple"] ||
                                    ((("object" ===
                                        typeof input["x-typia-tuple"] &&
                                        null !== input["x-typia-tuple"]) ||
                                        $report(_exceptionable, {
                                            path: _path + '["x-typia-tuple"]',
                                            expected:
                                                "(IJsonSchema.ITuple | undefined)",
                                            value: input["x-typia-tuple"],
                                        })) &&
                                        $vo26(
                                            input["x-typia-tuple"],
                                            _path + '["x-typia-tuple"]',
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-tuple"]',
                                        expected:
                                            "(IJsonSchema.ITuple | undefined)",
                                        value: input["x-typia-tuple"],
                                    }),
                                "array" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"array"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index21: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index21 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index21 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index21 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index22: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index22 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index22 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index22 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo26 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.items) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected: "Array<IJsonSchema>",
                                        value: input.items,
                                    })) &&
                                    input.items
                                        .map(
                                            (elem: any, _index23: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem &&
                                                    false ===
                                                        Array.isArray(elem)) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".items[" +
                                                            _index23 +
                                                            "]",
                                                        expected:
                                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            ".items[" +
                                                            _index23 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".items[" +
                                                        _index23 +
                                                        "]",
                                                    expected:
                                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected: "Array<IJsonSchema>",
                                        value: input.items,
                                    }),
                                "boolean" === typeof input["x-typia-rest"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-rest"]',
                                        expected: "boolean",
                                        value: input["x-typia-rest"],
                                    }),
                                "array" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"array"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index24: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index24 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index24 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index24 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index25: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index25 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index25 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index25 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo27 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.oneOf) ||
                                    $report(_exceptionable, {
                                        path: _path + ".oneOf",
                                        expected: "Array<IJsonSchema>",
                                        value: input.oneOf,
                                    })) &&
                                    input.oneOf
                                        .map(
                                            (elem: any, _index26: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem &&
                                                    false ===
                                                        Array.isArray(elem)) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".oneOf[" +
                                                            _index26 +
                                                            "]",
                                                        expected:
                                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            ".oneOf[" +
                                                            _index26 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".oneOf[" +
                                                        _index26 +
                                                        "]",
                                                    expected:
                                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".oneOf",
                                        expected: "Array<IJsonSchema>",
                                        value: input.oneOf,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index27: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index27 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index27 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index27 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index28: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index28 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index28 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index28 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo28 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "string" === typeof input.$ref ||
                                    $report(_exceptionable, {
                                        path: _path + ".$ref",
                                        expected: "string",
                                        value: input.$ref,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index29: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index29 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index29 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index29 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index30: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index30 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index30 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index30 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo29 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "string" === typeof input.$recursiveRef ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveRef",
                                        expected: "string",
                                        value: input.$recursiveRef,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index31: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index31 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index31 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index31 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index32: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index32 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index32 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index32 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo30 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "null" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"null"',
                                        value: input.type,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index33: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index33 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index33 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index33 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index34: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index34 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index34 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index34 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo31 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                (null !== input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: "undefined",
                                        value: input.type,
                                    })) &&
                                    (undefined === input.type ||
                                        $report(_exceptionable, {
                                            path: _path + ".type",
                                            expected: "undefined",
                                            value: input.type,
                                        })),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index35: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index35 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index35 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index35 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index36: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index36 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index36 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index36 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo32 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                undefined === input.objects ||
                                    ((("object" === typeof input.objects &&
                                        null !== input.objects &&
                                        false ===
                                            Array.isArray(input.objects)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".objects",
                                            expected:
                                                "(Record<string, IJsonComponents.IObject> | undefined)",
                                            value: input.objects,
                                        })) &&
                                        $vo33(
                                            input.objects,
                                            _path + ".objects",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".objects",
                                        expected:
                                            "(Record<string, IJsonComponents.IObject> | undefined)",
                                        value: input.objects,
                                    }),
                                undefined === input.definitions ||
                                    ((("object" === typeof input.definitions &&
                                        null !== input.definitions &&
                                        false ===
                                            Array.isArray(input.definitions)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".definitions",
                                            expected:
                                                "(Record<string, IJsonComponents.IDefinition> | undefined)",
                                            value: input.definitions,
                                        })) &&
                                        $vo36(
                                            input.definitions,
                                            _path + ".definitions",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".definitions",
                                        expected:
                                            "(Record<string, IJsonComponents.IDefinition> | undefined)",
                                        value: input.definitions,
                                    }),
                                undefined === input.arrays ||
                                    ((("object" === typeof input.arrays &&
                                        null !== input.arrays &&
                                        false ===
                                            Array.isArray(input.arrays)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".arrays",
                                            expected:
                                                "(Record<string, IJsonComponents.IArray> | undefined)",
                                            value: input.arrays,
                                        })) &&
                                        $vo51(
                                            input.arrays,
                                            _path + ".arrays",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".arrays",
                                        expected:
                                            "(Record<string, IJsonComponents.IArray> | undefined)",
                                        value: input.arrays,
                                    }),
                                undefined === input.tuples ||
                                    ((("object" === typeof input.tuples &&
                                        null !== input.tuples &&
                                        false ===
                                            Array.isArray(input.tuples)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".tuples",
                                            expected:
                                                "(Record<string, IArray | ITuple> | undefined)",
                                            value: input.tuples,
                                        })) &&
                                        $vo53(
                                            input.tuples,
                                            _path + ".tuples",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuples",
                                        expected:
                                            "(Record<string, IArray | ITuple> | undefined)",
                                        value: input.tuples,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo33 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                false === _exceptionable ||
                                    Object.keys(input)
                                        .map((key: any) => {
                                            const value = input[key];
                                            if (undefined === value)
                                                return true;
                                            if (RegExp(/(.*)/).test(key))
                                                return (
                                                    ((("object" ===
                                                        typeof value &&
                                                        null !== value) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    $join(key),
                                                                expected:
                                                                    "IJsonComponents.IObject",
                                                                value: value,
                                                            },
                                                        )) &&
                                                        $vo34(
                                                            value,
                                                            _path + $join(key),
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected:
                                                            "IJsonComponents.IObject",
                                                        value: value,
                                                    })
                                                );
                                            return true;
                                        })
                                        .every((flag: boolean) => flag),
                            ].every((flag: boolean) => flag);
                        const $vo34 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    "boolean" ===
                                        typeof input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(boolean | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                                "object" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"object"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                ((("object" === typeof input.properties &&
                                    null !== input.properties &&
                                    false ===
                                        Array.isArray(input.properties)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".properties",
                                        expected: "Record<string, IJsonSchema>",
                                        value: input.properties,
                                    })) &&
                                    $vo35(
                                        input.properties,
                                        _path + ".properties",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".properties",
                                        expected: "Record<string, IJsonSchema>",
                                        value: input.properties,
                                    }),
                                undefined === input.patternProperties ||
                                    ((("object" ===
                                        typeof input.patternProperties &&
                                        null !== input.patternProperties &&
                                        false ===
                                            Array.isArray(
                                                input.patternProperties,
                                            )) ||
                                        $report(_exceptionable, {
                                            path: _path + ".patternProperties",
                                            expected:
                                                "(Record<string, IJsonSchema> | undefined)",
                                            value: input.patternProperties,
                                        })) &&
                                        $vo35(
                                            input.patternProperties,
                                            _path + ".patternProperties",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".patternProperties",
                                        expected:
                                            "(Record<string, IJsonSchema> | undefined)",
                                        value: input.patternProperties,
                                    }),
                                undefined === input.additionalProperties ||
                                    ((("object" ===
                                        typeof input.additionalProperties &&
                                        null !== input.additionalProperties &&
                                        false ===
                                            Array.isArray(
                                                input.additionalProperties,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + ".additionalProperties",
                                            expected:
                                                '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                            value: input.additionalProperties,
                                        })) &&
                                        $vu0(
                                            input.additionalProperties,
                                            _path + ".additionalProperties",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".additionalProperties",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                        value: input.additionalProperties,
                                    }),
                                undefined === input.required ||
                                    ((Array.isArray(input.required) ||
                                        $report(_exceptionable, {
                                            path: _path + ".required",
                                            expected:
                                                "(Array<string> | undefined)",
                                            value: input.required,
                                        })) &&
                                        input.required
                                            .map(
                                                (elem: any, _index37: number) =>
                                                    "string" === typeof elem ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".required[" +
                                                            _index37 +
                                                            "]",
                                                        expected: "string",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".required",
                                        expected: "(Array<string> | undefined)",
                                        value: input.required,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index38: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index38 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index38 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index38 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined ===
                                    input["x-typia-patternProperties"] ||
                                    ((("object" ===
                                        typeof input[
                                            "x-typia-patternProperties"
                                        ] &&
                                        null !==
                                            input[
                                                "x-typia-patternProperties"
                                            ] &&
                                        false ===
                                            Array.isArray(
                                                input[
                                                    "x-typia-patternProperties"
                                                ],
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-patternProperties"]',
                                            expected:
                                                "(Record<string, IJsonSchema> | undefined)",
                                            value: input[
                                                "x-typia-patternProperties"
                                            ],
                                        })) &&
                                        $vo35(
                                            input["x-typia-patternProperties"],
                                            _path +
                                                '["x-typia-patternProperties"]',
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-patternProperties"]',
                                        expected:
                                            "(Record<string, IJsonSchema> | undefined)",
                                        value: input[
                                            "x-typia-patternProperties"
                                        ],
                                    }),
                                undefined ===
                                    input["x-typia-additionalProperties"] ||
                                    ((("object" ===
                                        typeof input[
                                            "x-typia-additionalProperties"
                                        ] &&
                                        null !==
                                            input[
                                                "x-typia-additionalProperties"
                                            ] &&
                                        false ===
                                            Array.isArray(
                                                input[
                                                    "x-typia-additionalProperties"
                                                ],
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-additionalProperties"]',
                                            expected:
                                                '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                            value: input[
                                                "x-typia-additionalProperties"
                                            ],
                                        })) &&
                                        $vu0(
                                            input[
                                                "x-typia-additionalProperties"
                                            ],
                                            _path +
                                                '["x-typia-additionalProperties"]',
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-additionalProperties"]',
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                        value: input[
                                            "x-typia-additionalProperties"
                                        ],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo35 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                false === _exceptionable ||
                                    Object.keys(input)
                                        .map((key: any) => {
                                            const value = input[key];
                                            if (undefined === value)
                                                return true;
                                            if (RegExp(/(.*)/).test(key))
                                                return (
                                                    ((("object" ===
                                                        typeof value &&
                                                        null !== value &&
                                                        false ===
                                                            Array.isArray(
                                                                value,
                                                            )) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    $join(key),
                                                                expected:
                                                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                                value: value,
                                                            },
                                                        )) &&
                                                        $vu0(
                                                            value,
                                                            _path + $join(key),
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected:
                                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                        value: value,
                                                    })
                                                );
                                            return true;
                                        })
                                        .every((flag: boolean) => flag),
                            ].every((flag: boolean) => flag);
                        const $vo36 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                false === _exceptionable ||
                                    Object.keys(input)
                                        .map((key: any) => {
                                            const value = input[key];
                                            if (undefined === value)
                                                return true;
                                            if (RegExp(/(.*)/).test(key))
                                                return (
                                                    ((("object" ===
                                                        typeof value &&
                                                        null !== value &&
                                                        false ===
                                                            Array.isArray(
                                                                value,
                                                            )) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    $join(key),
                                                                expected:
                                                                    '(IArray & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IBoolean & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"boolean"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"number"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"string"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IInteger & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | INullOnly & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | INumber & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IOneOf & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IRecursiveReference & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IReference & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IString & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | ITuple & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IUnknown & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; })',
                                                                value: value,
                                                            },
                                                        )) &&
                                                        $vu2(
                                                            value,
                                                            _path + $join(key),
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected:
                                                            '(IArray & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IBoolean & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"boolean"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"number"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"string"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IInteger & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | INullOnly & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | INumber & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IOneOf & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IRecursiveReference & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IReference & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IString & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | ITuple & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IUnknown & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; })',
                                                        value: value,
                                                    })
                                                );
                                            return true;
                                        })
                                        .every((flag: boolean) => flag),
                            ].every((flag: boolean) => flag);
                        const $vo37 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input["enum"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["enum"]',
                                        expected: "Array<boolean>",
                                        value: input["enum"],
                                    })) &&
                                    input["enum"]
                                        .map(
                                            (elem: any, _index39: number) =>
                                                "boolean" === typeof elem ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["enum"][' +
                                                        _index39 +
                                                        "]",
                                                    expected: "boolean",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["enum"]',
                                        expected: "Array<boolean>",
                                        value: input["enum"],
                                    }),
                                undefined === input["default"] ||
                                    "boolean" === typeof input["default"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["default"]',
                                        expected: "(boolean | undefined)",
                                        value: input["default"],
                                    }),
                                "boolean" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"boolean"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index40: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index40 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index40 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index40 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index41: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index41 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index41 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index41 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    "boolean" ===
                                        typeof input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(boolean | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo38 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input["enum"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["enum"]',
                                        expected: "Array<number>",
                                        value: input["enum"],
                                    })) &&
                                    input["enum"]
                                        .map(
                                            (elem: any, _index42: number) =>
                                                ("number" === typeof elem &&
                                                    Number.isFinite(elem)) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["enum"][' +
                                                        _index42 +
                                                        "]",
                                                    expected: "number",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["enum"]',
                                        expected: "Array<number>",
                                        value: input["enum"],
                                    }),
                                undefined === input["default"] ||
                                    ("number" === typeof input["default"] &&
                                        Number.isFinite(input["default"])) ||
                                    $report(_exceptionable, {
                                        path: _path + '["default"]',
                                        expected: "(number | undefined)",
                                        value: input["default"],
                                    }),
                                "number" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"number"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index43: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index43 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index43 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index43 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index44: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index44 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index44 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index44 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    "boolean" ===
                                        typeof input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(boolean | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo39 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input["enum"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["enum"]',
                                        expected: "Array<string>",
                                        value: input["enum"],
                                    })) &&
                                    input["enum"]
                                        .map(
                                            (elem: any, _index45: number) =>
                                                "string" === typeof elem ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["enum"][' +
                                                        _index45 +
                                                        "]",
                                                    expected: "string",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["enum"]',
                                        expected: "Array<string>",
                                        value: input["enum"],
                                    }),
                                undefined === input["default"] ||
                                    "string" === typeof input["default"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["default"]',
                                        expected: "(string | undefined)",
                                        value: input["default"],
                                    }),
                                "string" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"string"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index46: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index46 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index46 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index46 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index47: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index47 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index47 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index47 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    "boolean" ===
                                        typeof input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(boolean | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo40 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                undefined === input["default"] ||
                                    "boolean" === typeof input["default"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["default"]',
                                        expected: "(boolean | undefined)",
                                        value: input["default"],
                                    }),
                                "boolean" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"boolean"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index48: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index48 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index48 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index48 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index49: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index49 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index49 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index49 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    "boolean" ===
                                        typeof input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(boolean | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo41 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                undefined === input.minimum ||
                                    ("number" === typeof input.minimum &&
                                        Number.isFinite(input.minimum) &&
                                        (parseInt(input.minimum) ===
                                            input.minimum ||
                                            $report(_exceptionable, {
                                                path: _path + ".minimum",
                                                expected: "number (@type int)",
                                                value: input.minimum,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minimum",
                                        expected: "(number | undefined)",
                                        value: input.minimum,
                                    }),
                                undefined === input.maximum ||
                                    ("number" === typeof input.maximum &&
                                        Number.isFinite(input.maximum) &&
                                        (parseInt(input.maximum) ===
                                            input.maximum ||
                                            $report(_exceptionable, {
                                                path: _path + ".maximum",
                                                expected: "number (@type int)",
                                                value: input.maximum,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".maximum",
                                        expected: "(number | undefined)",
                                        value: input.maximum,
                                    }),
                                undefined === input.exclusiveMinimum ||
                                    "boolean" ===
                                        typeof input.exclusiveMinimum ||
                                    $report(_exceptionable, {
                                        path: _path + ".exclusiveMinimum",
                                        expected: "(boolean | undefined)",
                                        value: input.exclusiveMinimum,
                                    }),
                                undefined === input.exclusiveMaximum ||
                                    "boolean" ===
                                        typeof input.exclusiveMaximum ||
                                    $report(_exceptionable, {
                                        path: _path + ".exclusiveMaximum",
                                        expected: "(boolean | undefined)",
                                        value: input.exclusiveMaximum,
                                    }),
                                undefined === input.multipleOf ||
                                    ("number" === typeof input.multipleOf &&
                                        Number.isFinite(input.multipleOf) &&
                                        (parseInt(input.multipleOf) ===
                                            input.multipleOf ||
                                            $report(_exceptionable, {
                                                path: _path + ".multipleOf",
                                                expected: "number (@type int)",
                                                value: input.multipleOf,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".multipleOf",
                                        expected: "(number | undefined)",
                                        value: input.multipleOf,
                                    }),
                                undefined === input["default"] ||
                                    ("number" === typeof input["default"] &&
                                        Number.isFinite(input["default"])) ||
                                    $report(_exceptionable, {
                                        path: _path + '["default"]',
                                        expected: "(number | undefined)",
                                        value: input["default"],
                                    }),
                                "integer" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"integer"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index50: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index50 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index50 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index50 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index51: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index51 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index51 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index51 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    "boolean" ===
                                        typeof input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(boolean | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo42 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                undefined === input.minimum ||
                                    ("number" === typeof input.minimum &&
                                        Number.isFinite(input.minimum)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minimum",
                                        expected: "(number | undefined)",
                                        value: input.minimum,
                                    }),
                                undefined === input.maximum ||
                                    ("number" === typeof input.maximum &&
                                        Number.isFinite(input.maximum)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".maximum",
                                        expected: "(number | undefined)",
                                        value: input.maximum,
                                    }),
                                undefined === input.exclusiveMinimum ||
                                    "boolean" ===
                                        typeof input.exclusiveMinimum ||
                                    $report(_exceptionable, {
                                        path: _path + ".exclusiveMinimum",
                                        expected: "(boolean | undefined)",
                                        value: input.exclusiveMinimum,
                                    }),
                                undefined === input.exclusiveMaximum ||
                                    "boolean" ===
                                        typeof input.exclusiveMaximum ||
                                    $report(_exceptionable, {
                                        path: _path + ".exclusiveMaximum",
                                        expected: "(boolean | undefined)",
                                        value: input.exclusiveMaximum,
                                    }),
                                undefined === input.multipleOf ||
                                    ("number" === typeof input.multipleOf &&
                                        Number.isFinite(input.multipleOf)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".multipleOf",
                                        expected: "(number | undefined)",
                                        value: input.multipleOf,
                                    }),
                                undefined === input["default"] ||
                                    ("number" === typeof input["default"] &&
                                        Number.isFinite(input["default"])) ||
                                    $report(_exceptionable, {
                                        path: _path + '["default"]',
                                        expected: "(number | undefined)",
                                        value: input["default"],
                                    }),
                                "number" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"number"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index52: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index52 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index52 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index52 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index53: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index53 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index53 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index53 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    "boolean" ===
                                        typeof input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(boolean | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo43 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                undefined === input.minLength ||
                                    ("number" === typeof input.minLength &&
                                        Number.isFinite(input.minLength) &&
                                        (parseInt(input.minLength) ===
                                            input.minLength ||
                                            $report(_exceptionable, {
                                                path: _path + ".minLength",
                                                expected: "number (@type uint)",
                                                value: input.minLength,
                                            })) &&
                                        (0 <= input.minLength ||
                                            $report(_exceptionable, {
                                                path: _path + ".minLength",
                                                expected: "number (@type uint)",
                                                value: input.minLength,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minLength",
                                        expected: "(number | undefined)",
                                        value: input.minLength,
                                    }),
                                undefined === input.maxLength ||
                                    ("number" === typeof input.maxLength &&
                                        Number.isFinite(input.maxLength) &&
                                        (parseInt(input.maxLength) ===
                                            input.maxLength ||
                                            $report(_exceptionable, {
                                                path: _path + ".maxLength",
                                                expected: "number (@type uint)",
                                                value: input.maxLength,
                                            })) &&
                                        (0 <= input.maxLength ||
                                            $report(_exceptionable, {
                                                path: _path + ".maxLength",
                                                expected: "number (@type uint)",
                                                value: input.maxLength,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".maxLength",
                                        expected: "(number | undefined)",
                                        value: input.maxLength,
                                    }),
                                undefined === input.pattern ||
                                    "string" === typeof input.pattern ||
                                    $report(_exceptionable, {
                                        path: _path + ".pattern",
                                        expected: "(string | undefined)",
                                        value: input.pattern,
                                    }),
                                undefined === input.format ||
                                    "string" === typeof input.format ||
                                    $report(_exceptionable, {
                                        path: _path + ".format",
                                        expected: "(string | undefined)",
                                        value: input.format,
                                    }),
                                undefined === input["default"] ||
                                    "string" === typeof input["default"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["default"]',
                                        expected: "(string | undefined)",
                                        value: input["default"],
                                    }),
                                "string" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"string"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index54: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index54 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index54 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index54 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index55: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index55 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index55 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index55 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    "boolean" ===
                                        typeof input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(boolean | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo44 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.items &&
                                    null !== input.items &&
                                    false === Array.isArray(input.items)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: input.items,
                                    })) &&
                                    $vu0(
                                        input.items,
                                        _path + ".items",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: input.items,
                                    }),
                                undefined === input.minItems ||
                                    ("number" === typeof input.minItems &&
                                        Number.isFinite(input.minItems) &&
                                        (parseInt(input.minItems) ===
                                            input.minItems ||
                                            $report(_exceptionable, {
                                                path: _path + ".minItems",
                                                expected: "number (@type uint)",
                                                value: input.minItems,
                                            })) &&
                                        (0 <= input.minItems ||
                                            $report(_exceptionable, {
                                                path: _path + ".minItems",
                                                expected: "number (@type uint)",
                                                value: input.minItems,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: "(number | undefined)",
                                        value: input.minItems,
                                    }),
                                undefined === input.maxItems ||
                                    ("number" === typeof input.maxItems &&
                                        Number.isFinite(input.maxItems) &&
                                        (parseInt(input.maxItems) ===
                                            input.maxItems ||
                                            $report(_exceptionable, {
                                                path: _path + ".maxItems",
                                                expected: "number (@type uint)",
                                                value: input.maxItems,
                                            })) &&
                                        (0 <= input.maxItems ||
                                            $report(_exceptionable, {
                                                path: _path + ".maxItems",
                                                expected: "number (@type uint)",
                                                value: input.maxItems,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".maxItems",
                                        expected: "(number | undefined)",
                                        value: input.maxItems,
                                    }),
                                undefined === input["x-typia-tuple"] ||
                                    ((("object" ===
                                        typeof input["x-typia-tuple"] &&
                                        null !== input["x-typia-tuple"]) ||
                                        $report(_exceptionable, {
                                            path: _path + '["x-typia-tuple"]',
                                            expected:
                                                "(IJsonSchema.ITuple | undefined)",
                                            value: input["x-typia-tuple"],
                                        })) &&
                                        $vo26(
                                            input["x-typia-tuple"],
                                            _path + '["x-typia-tuple"]',
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-tuple"]',
                                        expected:
                                            "(IJsonSchema.ITuple | undefined)",
                                        value: input["x-typia-tuple"],
                                    }),
                                "array" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"array"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index56: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index56 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index56 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index56 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index57: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index57 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index57 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index57 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    "boolean" ===
                                        typeof input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(boolean | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo45 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.items) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected: "Array<IJsonSchema>",
                                        value: input.items,
                                    })) &&
                                    input.items
                                        .map(
                                            (elem: any, _index58: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem &&
                                                    false ===
                                                        Array.isArray(elem)) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".items[" +
                                                            _index58 +
                                                            "]",
                                                        expected:
                                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            ".items[" +
                                                            _index58 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".items[" +
                                                        _index58 +
                                                        "]",
                                                    expected:
                                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected: "Array<IJsonSchema>",
                                        value: input.items,
                                    }),
                                "boolean" === typeof input["x-typia-rest"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-rest"]',
                                        expected: "boolean",
                                        value: input["x-typia-rest"],
                                    }),
                                "array" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"array"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index59: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index59 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index59 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index59 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index60: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index60 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index60 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index60 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    "boolean" ===
                                        typeof input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(boolean | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo46 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.oneOf) ||
                                    $report(_exceptionable, {
                                        path: _path + ".oneOf",
                                        expected: "Array<IJsonSchema>",
                                        value: input.oneOf,
                                    })) &&
                                    input.oneOf
                                        .map(
                                            (elem: any, _index61: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem &&
                                                    false ===
                                                        Array.isArray(elem)) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".oneOf[" +
                                                            _index61 +
                                                            "]",
                                                        expected:
                                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            ".oneOf[" +
                                                            _index61 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".oneOf[" +
                                                        _index61 +
                                                        "]",
                                                    expected:
                                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".oneOf",
                                        expected: "Array<IJsonSchema>",
                                        value: input.oneOf,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index62: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index62 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index62 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index62 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index63: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index63 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index63 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index63 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    "boolean" ===
                                        typeof input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(boolean | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo47 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "string" === typeof input.$ref ||
                                    $report(_exceptionable, {
                                        path: _path + ".$ref",
                                        expected: "string",
                                        value: input.$ref,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index64: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index64 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index64 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index64 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index65: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index65 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index65 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index65 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    "boolean" ===
                                        typeof input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(boolean | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo48 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "string" === typeof input.$recursiveRef ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveRef",
                                        expected: "string",
                                        value: input.$recursiveRef,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index66: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index66 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index66 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index66 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index67: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index67 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index67 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index67 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    "boolean" ===
                                        typeof input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(boolean | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo49 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "null" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"null"',
                                        value: input.type,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index68: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index68 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index68 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index68 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index69: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index69 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index69 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index69 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    "boolean" ===
                                        typeof input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(boolean | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo50 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                (null !== input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: "undefined",
                                        value: input.type,
                                    })) &&
                                    (undefined === input.type ||
                                        $report(_exceptionable, {
                                            path: _path + ".type",
                                            expected: "undefined",
                                            value: input.type,
                                        })),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index70: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index70 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index70 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index70 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index71: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index71 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index71 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index71 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    "boolean" ===
                                        typeof input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(boolean | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo51 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                false === _exceptionable ||
                                    Object.keys(input)
                                        .map((key: any) => {
                                            const value = input[key];
                                            if (undefined === value)
                                                return true;
                                            if (RegExp(/(.*)/).test(key))
                                                return (
                                                    ((("object" ===
                                                        typeof value &&
                                                        null !== value) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    $join(key),
                                                                expected:
                                                                    "IJsonComponents.IArray",
                                                                value: value,
                                                            },
                                                        )) &&
                                                        $vo52(
                                                            value,
                                                            _path + $join(key),
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected:
                                                            "IJsonComponents.IArray",
                                                        value: value,
                                                    })
                                                );
                                            return true;
                                        })
                                        .every((flag: boolean) => flag),
                            ].every((flag: boolean) => flag);
                        const $vo52 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    true === input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(true | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                                ((("object" === typeof input.items &&
                                    null !== input.items &&
                                    false === Array.isArray(input.items)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: input.items,
                                    })) &&
                                    $vu0(
                                        input.items,
                                        _path + ".items",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: input.items,
                                    }),
                                undefined === input.minItems ||
                                    ("number" === typeof input.minItems &&
                                        Number.isFinite(input.minItems) &&
                                        (parseInt(input.minItems) ===
                                            input.minItems ||
                                            $report(_exceptionable, {
                                                path: _path + ".minItems",
                                                expected: "number (@type uint)",
                                                value: input.minItems,
                                            })) &&
                                        (0 <= input.minItems ||
                                            $report(_exceptionable, {
                                                path: _path + ".minItems",
                                                expected: "number (@type uint)",
                                                value: input.minItems,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: "(number | undefined)",
                                        value: input.minItems,
                                    }),
                                undefined === input.maxItems ||
                                    ("number" === typeof input.maxItems &&
                                        Number.isFinite(input.maxItems) &&
                                        (parseInt(input.maxItems) ===
                                            input.maxItems ||
                                            $report(_exceptionable, {
                                                path: _path + ".maxItems",
                                                expected: "number (@type uint)",
                                                value: input.maxItems,
                                            })) &&
                                        (0 <= input.maxItems ||
                                            $report(_exceptionable, {
                                                path: _path + ".maxItems",
                                                expected: "number (@type uint)",
                                                value: input.maxItems,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".maxItems",
                                        expected: "(number | undefined)",
                                        value: input.maxItems,
                                    }),
                                undefined === input["x-typia-tuple"] ||
                                    ((("object" ===
                                        typeof input["x-typia-tuple"] &&
                                        null !== input["x-typia-tuple"]) ||
                                        $report(_exceptionable, {
                                            path: _path + '["x-typia-tuple"]',
                                            expected:
                                                "(IJsonSchema.ITuple | undefined)",
                                            value: input["x-typia-tuple"],
                                        })) &&
                                        $vo26(
                                            input["x-typia-tuple"],
                                            _path + '["x-typia-tuple"]',
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-tuple"]',
                                        expected:
                                            "(IJsonSchema.ITuple | undefined)",
                                        value: input["x-typia-tuple"],
                                    }),
                                "array" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"array"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index72: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index72 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index72 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index72 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index73: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index73 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index73 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index73 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo53 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                false === _exceptionable ||
                                    Object.keys(input)
                                        .map((key: any) => {
                                            const value = input[key];
                                            if (undefined === value)
                                                return true;
                                            if (RegExp(/(.*)/).test(key))
                                                return (
                                                    ((("object" ===
                                                        typeof value &&
                                                        null !== value) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    $join(key),
                                                                expected:
                                                                    "(IJsonComponents.IArray | IJsonComponents.ITuple)",
                                                                value: value,
                                                            },
                                                        )) &&
                                                        $vu3(
                                                            value,
                                                            _path + $join(key),
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected:
                                                            "(IJsonComponents.IArray | IJsonComponents.ITuple)",
                                                        value: value,
                                                    })
                                                );
                                            return true;
                                        })
                                        .every((flag: boolean) => flag),
                            ].every((flag: boolean) => flag);
                        const $vo54 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                undefined === input.$id ||
                                    "string" === typeof input.$id ||
                                    $report(_exceptionable, {
                                        path: _path + ".$id",
                                        expected: "(string | undefined)",
                                        value: input.$id,
                                    }),
                                undefined === input.$recursiveAnchor ||
                                    true === input.$recursiveAnchor ||
                                    $report(_exceptionable, {
                                        path: _path + ".$recursiveAnchor",
                                        expected: "(true | undefined)",
                                        value: input.$recursiveAnchor,
                                    }),
                                ((Array.isArray(input.items) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected: "Array<IJsonSchema>",
                                        value: input.items,
                                    })) &&
                                    input.items
                                        .map(
                                            (elem: any, _index74: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem &&
                                                    false ===
                                                        Array.isArray(elem)) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".items[" +
                                                            _index74 +
                                                            "]",
                                                        expected:
                                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            ".items[" +
                                                            _index74 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".items[" +
                                                        _index74 +
                                                        "]",
                                                    expected:
                                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected: "Array<IJsonSchema>",
                                        value: input.items,
                                    }),
                                "boolean" === typeof input["x-typia-rest"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-rest"]',
                                        expected: "boolean",
                                        value: input["x-typia-rest"],
                                    }),
                                "array" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"array"',
                                        value: input.type,
                                    }),
                                undefined === input.nullable ||
                                    "boolean" === typeof input.nullable ||
                                    $report(_exceptionable, {
                                        path: _path + ".nullable",
                                        expected: "(boolean | undefined)",
                                        value: input.nullable,
                                    }),
                                undefined === input.deprecated ||
                                    "boolean" === typeof input.deprecated ||
                                    $report(_exceptionable, {
                                        path: _path + ".deprecated",
                                        expected: "(boolean | undefined)",
                                        value: input.deprecated,
                                    }),
                                undefined === input.title ||
                                    "string" === typeof input.title ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "(string | undefined)",
                                        value: input.title,
                                    }),
                                undefined === input.description ||
                                    "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "(string | undefined)",
                                        value: input.description,
                                    }),
                                undefined === input["x-typia-metaTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-metaTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-metaTags"]',
                                            expected:
                                                "(Array<IMetadataTag> | undefined)",
                                            value: input["x-typia-metaTags"],
                                        })) &&
                                        input["x-typia-metaTags"]
                                            .map(
                                                (elem: any, _index75: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-metaTags"][' +
                                                                    _index75 +
                                                                    "]",
                                                                expected:
                                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vu1(
                                                            elem,
                                                            _path +
                                                                '["x-typia-metaTags"][' +
                                                                _index75 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index75 +
                                                            "]",
                                                        expected:
                                                            "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<IMetadataTag> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    }),
                                undefined === input["x-typia-jsDocTags"] ||
                                    ((Array.isArray(
                                        input["x-typia-jsDocTags"],
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + '["x-typia-jsDocTags"]',
                                            expected:
                                                "(Array<IJsDocTagInfo> | undefined)",
                                            value: input["x-typia-jsDocTags"],
                                        })) &&
                                        input["x-typia-jsDocTags"]
                                            .map(
                                                (elem: any, _index76: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    '["x-typia-jsDocTags"][' +
                                                                    _index76 +
                                                                    "]",
                                                                expected:
                                                                    "IJsDocTagInfo",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo17(
                                                            elem,
                                                            _path +
                                                                '["x-typia-jsDocTags"][' +
                                                                _index76 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index76 +
                                                            "]",
                                                        expected:
                                                            "IJsDocTagInfo",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<IJsDocTagInfo> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    }),
                                undefined === input["x-typia-required"] ||
                                    "boolean" ===
                                        typeof input["x-typia-required"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-required"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-required"],
                                    }),
                                undefined === input["x-typia-optional"] ||
                                    "boolean" ===
                                        typeof input["x-typia-optional"] ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-optional"]',
                                        expected: "(boolean | undefined)",
                                        value: input["x-typia-optional"],
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vu0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            (() => {
                                if ("integer" === input.type)
                                    return $vo22(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (
                                    "object" === typeof input.items &&
                                    null !== input.items &&
                                    false === Array.isArray(input.items) &&
                                    $vu0(
                                        input.items,
                                        _path + ".items",
                                        false && _exceptionable,
                                    )
                                )
                                    return $vo25(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (
                                    Array.isArray(input.items) &&
                                    input.items
                                        .map(
                                            (elem: any, _index77: number) =>
                                                "object" === typeof elem &&
                                                null !== elem &&
                                                false === Array.isArray(elem) &&
                                                $vu0(
                                                    elem,
                                                    _path +
                                                        ".items[" +
                                                        _index77 +
                                                        "]",
                                                    false && _exceptionable,
                                                ),
                                        )
                                        .every((flag: boolean) => flag)
                                )
                                    return $vo26(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.oneOf)
                                    return $vo27(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.$ref)
                                    return $vo28(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.$recursiveRef)
                                    return $vo29(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("null" === input.type)
                                    return $vo30(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                return (
                                    $vo20(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo19(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo1(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo21(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo23(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo24(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo31(input, _path, false && _exceptionable)
                                );
                            })();
                        const $vu1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            (() => {
                                if ("maxItems" === input.kind)
                                    return $vo16(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("minItems" === input.kind)
                                    return $vo15(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("items" === input.kind)
                                    return $vo14(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("maxLength" === input.kind)
                                    return $vo13(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("minLength" === input.kind)
                                    return $vo12(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("length" === input.kind)
                                    return $vo11(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("pattern" === input.kind)
                                    return $vo10(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("format" === input.kind)
                                    return $vo9(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("step" === input.kind)
                                    return $vo8(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("multipleOf" === input.kind)
                                    return $vo7(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("exclusiveMaximum" === input.kind)
                                    return $vo6(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("exclusiveMinimum" === input.kind)
                                    return $vo5(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("maximum" === input.kind)
                                    return $vo4(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("minimum" === input.kind)
                                    return $vo3(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("type" === input.kind)
                                    return $vo2(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                return $report(_exceptionable, {
                                    path: _path,
                                    expected:
                                        "(IMetadataTag.IMaxItems | IMetadataTag.IMinItems | IMetadataTag.IItems | IMetadataTag.IMaxLength | IMetadataTag.IMinLength | IMetadataTag.ILength | IMetadataTag.IPattern | IMetadataTag.IFormat | IMetadataTag.IStep | IMetadataTag.IMultipleOf | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IMaximum | IMetadataTag.IMinimum | IMetadataTag.IType)",
                                    value: input,
                                });
                            })();
                        const $vu2 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            (() => {
                                if ("integer" === input.type)
                                    return $vo41(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (
                                    "object" === typeof input.items &&
                                    null !== input.items &&
                                    false === Array.isArray(input.items) &&
                                    $vu0(
                                        input.items,
                                        _path + ".items",
                                        false && _exceptionable,
                                    )
                                )
                                    return $vo44(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (
                                    Array.isArray(input.items) &&
                                    input.items
                                        .map(
                                            (elem: any, _index78: number) =>
                                                "object" === typeof elem &&
                                                null !== elem &&
                                                false === Array.isArray(elem) &&
                                                $vu0(
                                                    elem,
                                                    _path +
                                                        ".items[" +
                                                        _index78 +
                                                        "]",
                                                    false && _exceptionable,
                                                ),
                                        )
                                        .every((flag: boolean) => flag)
                                )
                                    return $vo45(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.oneOf)
                                    return $vo46(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.$ref)
                                    return $vo47(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.$recursiveRef)
                                    return $vo48(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("null" === input.type)
                                    return $vo49(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                return (
                                    $vo39(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo38(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo37(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo40(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo42(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo43(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo50(input, _path, false && _exceptionable)
                                );
                            })();
                        const $vu3 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            (() => {
                                if (
                                    "object" === typeof input.items &&
                                    null !== input.items &&
                                    false === Array.isArray(input.items) &&
                                    $vu0(
                                        input.items,
                                        _path + ".items",
                                        false && _exceptionable,
                                    )
                                )
                                    return $vo52(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (
                                    Array.isArray(input.items) &&
                                    input.items
                                        .map(
                                            (elem: any, _index79: number) =>
                                                "object" === typeof elem &&
                                                null !== elem &&
                                                false === Array.isArray(elem) &&
                                                $vu0(
                                                    elem,
                                                    _path +
                                                        ".items[" +
                                                        _index79 +
                                                        "]",
                                                    false && _exceptionable,
                                                ),
                                        )
                                        .every((flag: boolean) => flag)
                                )
                                    return $vo54(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                return $report(_exceptionable, {
                                    path: _path,
                                    expected:
                                        "(IJsonComponents.IArray | IJsonComponents.ITuple)",
                                    value: input,
                                });
                            })();
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "UltimateUnion",
                                    value: input,
                                })) &&
                                input
                                    .map(
                                        (elem: any, _index1: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "IJsonApplication",
                                                    value: elem,
                                                })) &&
                                                $vo0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true,
                                                )) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected: "IJsonApplication",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "UltimateUnion",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const stringify = (input: UltimateUnion): string => {
                const $io1 = (input: any): boolean =>
                    Array.isArray(input["enum"]) &&
                    input["enum"].every(
                        (elem: any) => "boolean" === typeof elem,
                    ) &&
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
                    "multipleOf" === input.kind &&
                    "number" === typeof input.value;
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
                    "minLength" === input.kind &&
                    "number" === typeof input.value;
                const $io13 = (input: any): boolean =>
                    "maxLength" === input.kind &&
                    "number" === typeof input.value;
                const $io14 = (input: any): boolean =>
                    "items" === input.kind && "number" === typeof input.value;
                const $io15 = (input: any): boolean =>
                    "minItems" === input.kind &&
                    "number" === typeof input.value;
                const $io16 = (input: any): boolean =>
                    "maxItems" === input.kind &&
                    "number" === typeof input.value;
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
                        (elem: any) => "number" === typeof elem,
                    ) &&
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
                    input["enum"].every(
                        (elem: any) => "string" === typeof elem,
                    ) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
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
                                    $io17(elem),
                            ))) &&
                    (undefined === input["x-typia-patternProperties"] ||
                        ("object" ===
                            typeof input["x-typia-patternProperties"] &&
                            null !== input["x-typia-patternProperties"] &&
                            false ===
                                Array.isArray(
                                    input["x-typia-patternProperties"],
                                ) &&
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
                    input["enum"].every(
                        (elem: any) => "boolean" === typeof elem,
                    ) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor);
                const $io38 = (input: any): boolean =>
                    Array.isArray(input["enum"]) &&
                    input["enum"].every(
                        (elem: any) => "number" === typeof elem,
                    ) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor);
                const $io39 = (input: any): boolean =>
                    Array.isArray(input["enum"]) &&
                    input["enum"].every(
                        (elem: any) => "string" === typeof elem,
                    ) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
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
                    (undefined === input.$id ||
                        "string" === typeof input.$id) &&
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
                        if (undefined !== input.$recursiveRef)
                            return $io29(input);
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
                        if ("exclusiveMaximum" === input.kind)
                            return $io6(input);
                        if ("exclusiveMinimum" === input.kind)
                            return $io5(input);
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
                        if (undefined !== input.$recursiveRef)
                            return $io48(input);
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
                const $string = (typia.createValidateStringify as any).string;
                const $throws = (typia.createValidateStringify as any).throws;
                const $number = (typia.createValidateStringify as any).number;
                const $tail = (typia.createValidateStringify as any).tail;
                const $join = (typia.createValidateStringify as any).join;
                const $so0 = (input: any): any =>
                    `{"schemas":${`[${input.schemas
                        .map((elem: any) => $su0(elem))
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
                            expected: '("int" | "uint")',
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
                    }"items":${`[${input.items
                        .map((elem: any) => $su0(elem))
                        .join(",")}]`},"x-typia-rest":${
                        input["x-typia-rest"]
                    },"type":${(() => {
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
                const $so31 = (input: any): any =>
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
                                  }`
                        }`,
                    )}}`;
                const $so32 = (input: any): any =>
                    `{${$tail(
                        `${
                            undefined === input.objects
                                ? ""
                                : `"objects":${
                                      undefined !== input.objects
                                          ? $so33(input.objects)
                                          : undefined
                                  },`
                        }${
                            undefined === input.definitions
                                ? ""
                                : `"definitions":${
                                      undefined !== input.definitions
                                          ? $so36(input.definitions)
                                          : undefined
                                  },`
                        }${
                            undefined === input.arrays
                                ? ""
                                : `"arrays":${
                                      undefined !== input.arrays
                                          ? $so51(input.arrays)
                                          : undefined
                                  },`
                        }${
                            undefined === input.tuples
                                ? ""
                                : `"tuples":${
                                      undefined !== input.tuples
                                          ? $so53(input.tuples)
                                          : undefined
                                  }`
                        }`,
                    )}}`;
                const $so33 = (input: any): any =>
                    `{${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            return `${JSON.stringify(key)}:${$so34(value)}`;
                        })
                        .filter((str: any) => "" !== str)
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
                                      ? $so35(input.patternProperties)
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
                                  undefined !==
                                  input["x-typia-patternProperties"]
                                      ? $so35(
                                            input["x-typia-patternProperties"],
                                        )
                                      : undefined
                              },`
                    }${
                        undefined === input["x-typia-additionalProperties"]
                            ? ""
                            : `"x-typia-additionalProperties":${
                                  undefined !==
                                  input["x-typia-additionalProperties"]
                                      ? $su0(
                                            input[
                                                "x-typia-additionalProperties"
                                            ],
                                        )
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
                    })()},"properties":${$so35(input.properties)}}`;
                const $so35 = (input: any): any =>
                    `{${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            return `${JSON.stringify(key)}:${$su0(value)}`;
                        })
                        .filter((str: any) => "" !== str)
                        .join(",")}}`;
                const $so36 = (input: any): any =>
                    `{${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            return `${JSON.stringify(key)}:${$su2(value)}`;
                        })
                        .filter((str: any) => "" !== str)
                        .join(",")}}`;
                const $so37 = (input: any): any =>
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
                const $so38 = (input: any): any =>
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
                const $so39 = (input: any): any =>
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
                const $so40 = (input: any): any =>
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
                const $so41 = (input: any): any =>
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
                const $so42 = (input: any): any =>
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
                const $so43 = (input: any): any =>
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
                const $so44 = (input: any): any =>
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
                const $so45 = (input: any): any =>
                    `{${
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
                        .join(",")}]`},"x-typia-rest":${
                        input["x-typia-rest"]
                    },"type":${(() => {
                        if ("string" === typeof input.type)
                            return $string(input.type);
                        if ("string" === typeof input.type)
                            return '"' + input.type + '"';
                        $throws({
                            expected: '"array"',
                            value: input.type,
                        });
                    })()}}`;
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
                const $so47 = (input: any): any =>
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
                const $so48 = (input: any): any =>
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
                    }"$recursiveRef":${$string(input.$recursiveRef)}}`;
                const $so49 = (input: any): any =>
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
                const $so50 = (input: any): any =>
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
                const $so51 = (input: any): any =>
                    `{${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            return `${JSON.stringify(key)}:${$so52(value)}`;
                        })
                        .filter((str: any) => "" !== str)
                        .join(",")}}`;
                const $so52 = (input: any): any =>
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
                const $so53 = (input: any): any =>
                    `{${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            return `${JSON.stringify(key)}:${$su3(value)}`;
                        })
                        .filter((str: any) => "" !== str)
                        .join(",")}}`;
                const $so54 = (input: any): any =>
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
                    }"items":${`[${input.items
                        .map((elem: any) => $su0(elem))
                        .join(",")}]`},"x-typia-rest":${
                        input["x-typia-rest"]
                    },"type":${(() => {
                        if ("string" === typeof input.type)
                            return $string(input.type);
                        if ("string" === typeof input.type)
                            return '"' + input.type + '"';
                        $throws({
                            expected: '"array"',
                            value: input.type,
                        });
                    })()}}`;
                const $su0 = (input: any): any =>
                    (() => {
                        if ("integer" === input.type) return $so22(input);
                        if (
                            "object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items) &&
                            $iu0(input.items)
                        )
                            return $so25(input);
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
                            return $so26(input);
                        if (undefined !== input.oneOf) return $so27(input);
                        if (undefined !== input.$ref) return $so28(input);
                        if (undefined !== input.$recursiveRef)
                            return $so29(input);
                        if ("null" === input.type) return $so30(input);
                        return (() => {
                            if ($io20(input)) return $so20(input);
                            if ($io19(input)) return $so19(input);
                            if ($io1(input)) return $so1(input);
                            if ($io21(input)) return $so21(input);
                            if ($io23(input)) return $so23(input);
                            if ($io24(input)) return $so24(input);
                            if ($io31(input)) return $so31(input);
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
                        if ("minItems" === input.kind) return $so15(input);
                        if ("items" === input.kind) return $so14(input);
                        if ("maxLength" === input.kind) return $so13(input);
                        if ("minLength" === input.kind) return $so12(input);
                        if ("length" === input.kind) return $so11(input);
                        if ("pattern" === input.kind) return $so10(input);
                        if ("format" === input.kind) return $so9(input);
                        if ("step" === input.kind) return $so8(input);
                        if ("multipleOf" === input.kind) return $so7(input);
                        if ("exclusiveMaximum" === input.kind)
                            return $so6(input);
                        if ("exclusiveMinimum" === input.kind)
                            return $so5(input);
                        if ("maximum" === input.kind) return $so4(input);
                        if ("minimum" === input.kind) return $so3(input);
                        if ("type" === input.kind) return $so2(input);
                        $throws({
                            expected:
                                "(IMetadataTag.IMaxItems | IMetadataTag.IMinItems | IMetadataTag.IItems | IMetadataTag.IMaxLength | IMetadataTag.IMinLength | IMetadataTag.ILength | IMetadataTag.IPattern | IMetadataTag.IFormat | IMetadataTag.IStep | IMetadataTag.IMultipleOf | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IMaximum | IMetadataTag.IMinimum | IMetadataTag.IType)",
                            value: input,
                        });
                    })();
                const $su2 = (input: any): any =>
                    (() => {
                        if ("integer" === input.type) return $so41(input);
                        if (
                            "object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items) &&
                            $iu0(input.items)
                        )
                            return $so44(input);
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
                            return $so45(input);
                        if (undefined !== input.oneOf) return $so46(input);
                        if (undefined !== input.$ref) return $so47(input);
                        if (undefined !== input.$recursiveRef)
                            return $so48(input);
                        if ("null" === input.type) return $so49(input);
                        return (() => {
                            if ($io39(input)) return $so39(input);
                            if ($io38(input)) return $so38(input);
                            if ($io37(input)) return $so37(input);
                            if ($io40(input)) return $so40(input);
                            if ($io42(input)) return $so42(input);
                            if ($io43(input)) return $so43(input);
                            if ($io50(input)) return $so50(input);
                            $throws({
                                expected:
                                    '(IEnumeration<"string"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"number"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"boolean"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IBoolean & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | INumber & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IString & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IUnknown & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; })',
                                value: input,
                            });
                        })();
                    })();
                const $su3 = (input: any): any =>
                    (() => {
                        if (
                            "object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items) &&
                            $iu0(input.items)
                        )
                            return $so52(input);
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
                            return $so54(input);
                        $throws({
                            expected:
                                "(IJsonComponents.IArray | IJsonComponents.ITuple)",
                            value: input,
                        });
                    })();
                return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
        UltimateUnion.SPOILERS,
    );
