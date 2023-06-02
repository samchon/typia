import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_createAssertClone_UltimateUnion = _test_assertClone(
    "UltimateUnion",
    UltimateUnion.generate,
    (input: any): typia.Primitive<UltimateUnion> => {
        const assert: any = (input: any): UltimateUnion => {
            const __is: any = (input: any): input is UltimateUnion => {
                const $is_custom: any = (typia.createAssertClone as any)
                    .is_custom;
                const $join: any = (typia.createAssertClone as any).join;
                const $io0: any = (input: any): boolean =>
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
                    ("ajv" === input.purpose || "swagger" === input.purpose) &&
                    "string" === typeof input.prefix &&
                    $is_custom(
                        "deprecated",
                        "string",
                        'Always "#/components/schemas"',
                        input.prefix,
                    );
                const $io1: any = (input: any): boolean =>
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
                const $io2: any = (input: any): boolean =>
                    "type" === input.kind &&
                    ("int" === input.value || "uint" === input.value);
                const $io3: any = (input: any): boolean =>
                    "minimum" === input.kind &&
                    "number" === typeof input.value &&
                    Number.isFinite(input.value);
                const $io4: any = (input: any): boolean =>
                    "maximum" === input.kind &&
                    "number" === typeof input.value &&
                    Number.isFinite(input.value);
                const $io5: any = (input: any): boolean =>
                    "exclusiveMinimum" === input.kind &&
                    "number" === typeof input.value &&
                    Number.isFinite(input.value);
                const $io6: any = (input: any): boolean =>
                    "exclusiveMaximum" === input.kind &&
                    "number" === typeof input.value &&
                    Number.isFinite(input.value);
                const $io7: any = (input: any): boolean =>
                    "multipleOf" === input.kind &&
                    "number" === typeof input.value &&
                    Number.isFinite(input.value);
                const $io8: any = (input: any): boolean =>
                    "step" === input.kind &&
                    "number" === typeof input.value &&
                    Number.isFinite(input.value);
                const $io9: any = (input: any): boolean =>
                    "format" === input.kind &&
                    ("url" === input.value ||
                        "uuid" === input.value ||
                        "email" === input.value ||
                        "ipv4" === input.value ||
                        "ipv6" === input.value ||
                        "date" === input.value ||
                        "datetime" === input.value);
                const $io10: any = (input: any): boolean =>
                    "pattern" === input.kind && "string" === typeof input.value;
                const $io11: any = (input: any): boolean =>
                    "length" === input.kind &&
                    "number" === typeof input.value &&
                    Number.isFinite(input.value);
                const $io12: any = (input: any): boolean =>
                    "minLength" === input.kind &&
                    "number" === typeof input.value &&
                    Number.isFinite(input.value);
                const $io13: any = (input: any): boolean =>
                    "maxLength" === input.kind &&
                    "number" === typeof input.value &&
                    Number.isFinite(input.value);
                const $io14: any = (input: any): boolean =>
                    "items" === input.kind &&
                    "number" === typeof input.value &&
                    Number.isFinite(input.value);
                const $io15: any = (input: any): boolean =>
                    "minItems" === input.kind &&
                    "number" === typeof input.value &&
                    Number.isFinite(input.value);
                const $io16: any = (input: any): boolean =>
                    "maxItems" === input.kind &&
                    "number" === typeof input.value &&
                    Number.isFinite(input.value);
                const $io17: any = (input: any): boolean =>
                    "string" === typeof input.name &&
                    (undefined === input.text ||
                        (Array.isArray(input.text) &&
                            input.text.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io18(elem),
                            )));
                const $io18: any = (input: any): boolean =>
                    "string" === typeof input.text &&
                    "string" === typeof input.kind;
                const $io19: any = (input: any): boolean =>
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
                const $io20: any = (input: any): boolean =>
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
                const $io21: any = (input: any): boolean =>
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
                const $io22: any = (input: any): boolean =>
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
                const $io23: any = (input: any): boolean =>
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
                const $io24: any = (input: any): boolean =>
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
                const $io25: any = (input: any): boolean =>
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
                const $io26: any = (input: any): boolean =>
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
                const $io27: any = (input: any): boolean =>
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
                const $io28: any = (input: any): boolean =>
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
                const $io29: any = (input: any): boolean =>
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
                const $io30: any = (input: any): boolean =>
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
                const $io31: any = (input: any): boolean =>
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
                const $io32: any = (input: any): boolean =>
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
                const $io33: any = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                "object" === typeof value &&
                                null !== value &&
                                $io34(value)
                            );
                        return true;
                    });
                const $io34: any = (input: any): boolean =>
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
                const $io35: any = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
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
                const $io36: any = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
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
                const $io37: any = (input: any): boolean =>
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
                const $io38: any = (input: any): boolean =>
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
                const $io39: any = (input: any): boolean =>
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
                const $io40: any = (input: any): boolean =>
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
                const $io41: any = (input: any): boolean =>
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
                const $io42: any = (input: any): boolean =>
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
                const $io43: any = (input: any): boolean =>
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
                const $io44: any = (input: any): boolean =>
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
                const $io45: any = (input: any): boolean =>
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
                const $io46: any = (input: any): boolean =>
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
                const $io47: any = (input: any): boolean =>
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
                const $io48: any = (input: any): boolean =>
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
                const $io49: any = (input: any): boolean =>
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
                const $io50: any = (input: any): boolean =>
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
                const $io51: any = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                "object" === typeof value &&
                                null !== value &&
                                $io52(value)
                            );
                        return true;
                    });
                const $io52: any = (input: any): boolean =>
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
                const $io53: any = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                "object" === typeof value &&
                                null !== value &&
                                $iu3(value)
                            );
                        return true;
                    });
                const $io54: any = (input: any): boolean =>
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
                const $iu0: any = (input: any): any =>
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
                const $iu1: any = (input: any): any =>
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
                const $iu2: any = (input: any): any =>
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
                const $iu3: any = (input: any): any =>
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
            const $guard: any = (typia.createAssertClone as any).guard;
            const $is_custom: any = (typia.createAssertClone as any).is_custom;
            const $join: any = (typia.createAssertClone as any).join;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is UltimateUnion => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input.schemas) ||
                            $guard(_exceptionable, {
                                path: _path + ".schemas",
                                expected: "Array<IJsonSchema>",
                                value: input.schemas,
                            })) &&
                        input.schemas.every(
                            (elem: any, _index2: number) =>
                                (("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem)) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".schemas[" + _index2 + "]",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: elem,
                                    })) &&
                                $au0(
                                    elem,
                                    _path + ".schemas[" + _index2 + "]",
                                    true && _exceptionable,
                                ),
                        ) &&
                        (("object" === typeof input.components &&
                            null !== input.components &&
                            false === Array.isArray(input.components)) ||
                            $guard(_exceptionable, {
                                path: _path + ".components",
                                expected: "IJsonComponents",
                                value: input.components,
                            })) &&
                        $ao32(
                            input.components,
                            _path + ".components",
                            true && _exceptionable,
                        ) &&
                        ("ajv" === input.purpose ||
                            "swagger" === input.purpose ||
                            $guard(_exceptionable, {
                                path: _path + ".purpose",
                                expected: '("ajv" | "swagger")',
                                value: input.purpose,
                            })) &&
                        (("string" === typeof input.prefix &&
                            ($is_custom(
                                "deprecated",
                                "string",
                                'Always "#/components/schemas"',
                                input.prefix,
                            ) ||
                                $guard(_exceptionable, {
                                    path: _path + ".prefix",
                                    expected:
                                        'string (@deprecated Always "#/components/schemas")',
                                    value: input.prefix,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".prefix",
                                expected: "string",
                                value: input.prefix,
                            }));
                    const $ao1: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input["enum"]) ||
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
                        ) &&
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index4: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index4 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index4 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index5: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index5 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index5 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                            }));
                    const $ao2: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("type" === input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: '"type"',
                                value: input.kind,
                            })) &&
                        ("int" === input.value ||
                            "uint" === input.value ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: '("int" | "uint")',
                                value: input.value,
                            }));
                    const $ao3: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("minimum" === input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: '"minimum"',
                                value: input.kind,
                            })) &&
                        (("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            }));
                    const $ao4: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("maximum" === input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: '"maximum"',
                                value: input.kind,
                            })) &&
                        (("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            }));
                    const $ao5: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("exclusiveMinimum" === input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: '"exclusiveMinimum"',
                                value: input.kind,
                            })) &&
                        (("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            }));
                    const $ao6: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("exclusiveMaximum" === input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: '"exclusiveMaximum"',
                                value: input.kind,
                            })) &&
                        (("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            }));
                    const $ao7: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("multipleOf" === input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: '"multipleOf"',
                                value: input.kind,
                            })) &&
                        (("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            }));
                    const $ao8: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("step" === input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: '"step"',
                                value: input.kind,
                            })) &&
                        (("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            }));
                    const $ao9: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("format" === input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: '"format"',
                                value: input.kind,
                            })) &&
                        ("url" === input.value ||
                            "uuid" === input.value ||
                            "email" === input.value ||
                            "ipv4" === input.value ||
                            "ipv6" === input.value ||
                            "date" === input.value ||
                            "datetime" === input.value ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    '("date" | "datetime" | "email" | "ipv4" | "ipv6" | "url" | "uuid")',
                                value: input.value,
                            }));
                    const $ao10: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("pattern" === input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: '"pattern"',
                                value: input.kind,
                            })) &&
                        ("string" === typeof input.value ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "string",
                                value: input.value,
                            }));
                    const $ao11: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("length" === input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: '"length"',
                                value: input.kind,
                            })) &&
                        (("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            }));
                    const $ao12: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("minLength" === input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: '"minLength"',
                                value: input.kind,
                            })) &&
                        (("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            }));
                    const $ao13: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("maxLength" === input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: '"maxLength"',
                                value: input.kind,
                            })) &&
                        (("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            }));
                    const $ao14: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("items" === input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: '"items"',
                                value: input.kind,
                            })) &&
                        (("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            }));
                    const $ao15: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("minItems" === input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: '"minItems"',
                                value: input.kind,
                            })) &&
                        (("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            }));
                    const $ao16: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("maxItems" === input.kind ||
                            $guard(_exceptionable, {
                                path: _path + ".kind",
                                expected: '"maxItems"',
                                value: input.kind,
                            })) &&
                        (("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            }));
                    const $ao17: any = (
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
                                    (elem: any, _index6: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".text[" +
                                                    _index6 +
                                                    "]",
                                                expected: "IJsDocTagInfo.IText",
                                                value: elem,
                                            })) &&
                                        $ao18(
                                            elem,
                                            _path + ".text[" + _index6 + "]",
                                            true && _exceptionable,
                                        ),
                                )));
                    const $ao18: any = (
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
                    const $ao19: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input["enum"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"]',
                                expected: "Array<number>",
                                value: input["enum"],
                            })) &&
                        input["enum"].every(
                            (elem: any, _index7: number) =>
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + '["enum"][' + _index7 + "]",
                                    expected: "number",
                                    value: elem,
                                }),
                        ) &&
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index8: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index8 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index8 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                                        (("object" === typeof elem &&
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
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index9 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                            }));
                    const $ao20: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input["enum"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"]',
                                expected: "Array<string>",
                                value: input["enum"],
                            })) &&
                        input["enum"].every(
                            (elem: any, _index10: number) =>
                                "string" === typeof elem ||
                                $guard(_exceptionable, {
                                    path: _path + '["enum"][' + _index10 + "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        ) &&
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index11: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index11 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index11 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index12: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index12 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index12 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                            }));
                    const $ao21: any = (
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index13: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index13 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index13 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                                        (("object" === typeof elem &&
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
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index14 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                            }));
                    const $ao22: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (undefined === input.minimum ||
                            ("number" === typeof input.minimum &&
                                Number.isFinite(input.minimum) &&
                                (parseInt(input.minimum) === input.minimum ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minimum",
                                        expected: "number (@type int)",
                                        value: input.minimum,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "(number | undefined)",
                                value: input.minimum,
                            })) &&
                        (undefined === input.maximum ||
                            ("number" === typeof input.maximum &&
                                Number.isFinite(input.maximum) &&
                                (parseInt(input.maximum) === input.maximum ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maximum",
                                        expected: "number (@type int)",
                                        value: input.maximum,
                                    }))) ||
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
                                Number.isFinite(input.multipleOf) &&
                                (parseInt(input.multipleOf) ===
                                    input.multipleOf ||
                                    $guard(_exceptionable, {
                                        path: _path + ".multipleOf",
                                        expected: "number (@type int)",
                                        value: input.multipleOf,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "(number | undefined)",
                                value: input.multipleOf,
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index15: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index15 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index15 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                                        (("object" === typeof elem &&
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
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index16 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                            }));
                    const $ao23: any = (
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index17: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index17 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index17 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                                        (("object" === typeof elem &&
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
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index18 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                            }));
                    const $ao24: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (undefined === input.minLength ||
                            ("number" === typeof input.minLength &&
                                Number.isFinite(input.minLength) &&
                                (parseInt(input.minLength) ===
                                    input.minLength ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minLength",
                                        expected: "number (@type uint)",
                                        value: input.minLength,
                                    })) &&
                                (0 <= input.minLength ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minLength",
                                        expected: "number (@type uint)",
                                        value: input.minLength,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minLength",
                                expected: "(number | undefined)",
                                value: input.minLength,
                            })) &&
                        (undefined === input.maxLength ||
                            ("number" === typeof input.maxLength &&
                                Number.isFinite(input.maxLength) &&
                                (parseInt(input.maxLength) ===
                                    input.maxLength ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maxLength",
                                        expected: "number (@type uint)",
                                        value: input.maxLength,
                                    })) &&
                                (0 <= input.maxLength ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maxLength",
                                        expected: "number (@type uint)",
                                        value: input.maxLength,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".maxLength",
                                expected: "(number | undefined)",
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index19: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index19 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index19 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                                        (("object" === typeof elem &&
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
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index20 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                            }));
                    const $ao25: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items)) ||
                            $guard(_exceptionable, {
                                path: _path + ".items",
                                expected:
                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                value: input.items,
                            })) &&
                        $au0(
                            input.items,
                            _path + ".items",
                            true && _exceptionable,
                        ) &&
                        (undefined === input.minItems ||
                            ("number" === typeof input.minItems &&
                                Number.isFinite(input.minItems) &&
                                (parseInt(input.minItems) === input.minItems ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: "number (@type uint)",
                                        value: input.minItems,
                                    })) &&
                                (0 <= input.minItems ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: "number (@type uint)",
                                        value: input.minItems,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minItems",
                                expected: "(number | undefined)",
                                value: input.minItems,
                            })) &&
                        (undefined === input.maxItems ||
                            ("number" === typeof input.maxItems &&
                                Number.isFinite(input.maxItems) &&
                                (parseInt(input.maxItems) === input.maxItems ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maxItems",
                                        expected: "number (@type uint)",
                                        value: input.maxItems,
                                    })) &&
                                (0 <= input.maxItems ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maxItems",
                                        expected: "number (@type uint)",
                                        value: input.maxItems,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".maxItems",
                                expected: "(number | undefined)",
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
                                $ao26(
                                    input["x-typia-tuple"],
                                    _path + '["x-typia-tuple"]',
                                    true && _exceptionable,
                                ))) &&
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index21: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index21 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index21 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                                        (("object" === typeof elem &&
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
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index22 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                            }));
                    const $ao26: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input.items) ||
                            $guard(_exceptionable, {
                                path: _path + ".items",
                                expected: "Array<IJsonSchema>",
                                value: input.items,
                            })) &&
                        input.items.every(
                            (elem: any, _index23: number) =>
                                (("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem)) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".items[" + _index23 + "]",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: elem,
                                    })) &&
                                $au0(
                                    elem,
                                    _path + ".items[" + _index23 + "]",
                                    true && _exceptionable,
                                ),
                        ) &&
                        ("boolean" === typeof input["x-typia-rest"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-rest"]',
                                expected: "boolean",
                                value: input["x-typia-rest"],
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index24: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index24 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index24 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                                        (("object" === typeof elem &&
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
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index25 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                            }));
                    const $ao27: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input.oneOf) ||
                            $guard(_exceptionable, {
                                path: _path + ".oneOf",
                                expected: "Array<IJsonSchema>",
                                value: input.oneOf,
                            })) &&
                        input.oneOf.every(
                            (elem: any, _index26: number) =>
                                (("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem)) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".oneOf[" + _index26 + "]",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: elem,
                                    })) &&
                                $au0(
                                    elem,
                                    _path + ".oneOf[" + _index26 + "]",
                                    true && _exceptionable,
                                ),
                        ) &&
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index27: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index27 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index27 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index28: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index28 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index28 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                            }));
                    const $ao28: any = (
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index29: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index29 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index29 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index30: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index30 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index30 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                            }));
                    const $ao29: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.$recursiveRef ||
                            $guard(_exceptionable, {
                                path: _path + ".$recursiveRef",
                                expected: "string",
                                value: input.$recursiveRef,
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index31: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index31 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index31 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index32: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index32 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index32 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                            }));
                    const $ao30: any = (
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index33: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index33 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index33 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index34: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index34 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index34 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                            }));
                    const $ao31: any = (
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index35: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index35 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index35 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index36: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index36 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index36 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                            }));
                    const $ao32: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (undefined === input.objects ||
                            ((("object" === typeof input.objects &&
                                null !== input.objects &&
                                false === Array.isArray(input.objects)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".objects",
                                    expected:
                                        "(Record<string, IJsonComponents.IObject> | undefined)",
                                    value: input.objects,
                                })) &&
                                $ao33(
                                    input.objects,
                                    _path + ".objects",
                                    true && _exceptionable,
                                ))) &&
                        (undefined === input.definitions ||
                            ((("object" === typeof input.definitions &&
                                null !== input.definitions &&
                                false === Array.isArray(input.definitions)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".definitions",
                                    expected:
                                        "(Record<string, IJsonComponents.IDefinition> | undefined)",
                                    value: input.definitions,
                                })) &&
                                $ao36(
                                    input.definitions,
                                    _path + ".definitions",
                                    true && _exceptionable,
                                ))) &&
                        (undefined === input.arrays ||
                            ((("object" === typeof input.arrays &&
                                null !== input.arrays &&
                                false === Array.isArray(input.arrays)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".arrays",
                                    expected:
                                        "(Record<string, IJsonComponents.IArray> | undefined)",
                                    value: input.arrays,
                                })) &&
                                $ao51(
                                    input.arrays,
                                    _path + ".arrays",
                                    true && _exceptionable,
                                ))) &&
                        (undefined === input.tuples ||
                            ((("object" === typeof input.tuples &&
                                null !== input.tuples &&
                                false === Array.isArray(input.tuples)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".tuples",
                                    expected:
                                        "(Record<string, IArray | ITuple> | undefined)",
                                    value: input.tuples,
                                })) &&
                                $ao53(
                                    input.tuples,
                                    _path + ".tuples",
                                    true && _exceptionable,
                                )));
                    const $ao33: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            const value: any = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return (
                                    (("object" === typeof value &&
                                        null !== value) ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "IJsonComponents.IObject",
                                            value: value,
                                        })) &&
                                    $ao34(
                                        value,
                                        _path + $join(key),
                                        true && _exceptionable,
                                    )
                                );
                            return true;
                        });
                    const $ao34: any = (
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
                        (undefined === input.$recursiveAnchor ||
                            "boolean" === typeof input.$recursiveAnchor ||
                            $guard(_exceptionable, {
                                path: _path + ".$recursiveAnchor",
                                expected: "(boolean | undefined)",
                                value: input.$recursiveAnchor,
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
                        (("object" === typeof input.properties &&
                            null !== input.properties &&
                            false === Array.isArray(input.properties)) ||
                            $guard(_exceptionable, {
                                path: _path + ".properties",
                                expected: "Record<string, IJsonSchema>",
                                value: input.properties,
                            })) &&
                        $ao35(
                            input.properties,
                            _path + ".properties",
                            true && _exceptionable,
                        ) &&
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
                                $ao35(
                                    input.patternProperties,
                                    _path + ".patternProperties",
                                    true && _exceptionable,
                                ))) &&
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
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                    value: input.additionalProperties,
                                })) &&
                                $au0(
                                    input.additionalProperties,
                                    _path + ".additionalProperties",
                                    true && _exceptionable,
                                ))) &&
                        (undefined === input.required ||
                            ((Array.isArray(input.required) ||
                                $guard(_exceptionable, {
                                    path: _path + ".required",
                                    expected: "(Array<string> | undefined)",
                                    value: input.required,
                                })) &&
                                input.required.every(
                                    (elem: any, _index37: number) =>
                                        "string" === typeof elem ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".required[" +
                                                _index37 +
                                                "]",
                                            expected: "string",
                                            value: elem,
                                        }),
                                ))) &&
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
                                    (elem: any, _index38: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index38 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index38 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                                $ao35(
                                    input["x-typia-patternProperties"],
                                    _path + '["x-typia-patternProperties"]',
                                    true && _exceptionable,
                                ))) &&
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
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                    value: input[
                                        "x-typia-additionalProperties"
                                    ],
                                })) &&
                                $au0(
                                    input["x-typia-additionalProperties"],
                                    _path + '["x-typia-additionalProperties"]',
                                    true && _exceptionable,
                                )));
                    const $ao35: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            const value: any = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return (
                                    (("object" === typeof value &&
                                        null !== value &&
                                        false === Array.isArray(value)) ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected:
                                                '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                            value: value,
                                        })) &&
                                    $au0(
                                        value,
                                        _path + $join(key),
                                        true && _exceptionable,
                                    )
                                );
                            return true;
                        });
                    const $ao36: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            const value: any = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return (
                                    (("object" === typeof value &&
                                        null !== value &&
                                        false === Array.isArray(value)) ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected:
                                                '(IArray & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IBoolean & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"boolean"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"number"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"string"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IInteger & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | INullOnly & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | INumber & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IOneOf & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IRecursiveReference & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IReference & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IString & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | ITuple & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IUnknown & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; })',
                                            value: value,
                                        })) &&
                                    $au2(
                                        value,
                                        _path + $join(key),
                                        true && _exceptionable,
                                    )
                                );
                            return true;
                        });
                    const $ao37: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input["enum"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"]',
                                expected: "Array<boolean>",
                                value: input["enum"],
                            })) &&
                        input["enum"].every(
                            (elem: any, _index39: number) =>
                                "boolean" === typeof elem ||
                                $guard(_exceptionable, {
                                    path: _path + '["enum"][' + _index39 + "]",
                                    expected: "boolean",
                                    value: elem,
                                }),
                        ) &&
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index40: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index40 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index40 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index41: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index41 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index41 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                    const $ao38: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input["enum"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"]',
                                expected: "Array<number>",
                                value: input["enum"],
                            })) &&
                        input["enum"].every(
                            (elem: any, _index42: number) =>
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + '["enum"][' + _index42 + "]",
                                    expected: "number",
                                    value: elem,
                                }),
                        ) &&
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index43: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index43 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index43 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index44: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index44 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index44 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                    const $ao39: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input["enum"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"]',
                                expected: "Array<string>",
                                value: input["enum"],
                            })) &&
                        input["enum"].every(
                            (elem: any, _index45: number) =>
                                "string" === typeof elem ||
                                $guard(_exceptionable, {
                                    path: _path + '["enum"][' + _index45 + "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        ) &&
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index46: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index46 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index46 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index47: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index47 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index47 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                    const $ao40: any = (
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index48: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index48 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index48 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index49: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index49 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index49 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                    const $ao41: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (undefined === input.minimum ||
                            ("number" === typeof input.minimum &&
                                Number.isFinite(input.minimum) &&
                                (parseInt(input.minimum) === input.minimum ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minimum",
                                        expected: "number (@type int)",
                                        value: input.minimum,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "(number | undefined)",
                                value: input.minimum,
                            })) &&
                        (undefined === input.maximum ||
                            ("number" === typeof input.maximum &&
                                Number.isFinite(input.maximum) &&
                                (parseInt(input.maximum) === input.maximum ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maximum",
                                        expected: "number (@type int)",
                                        value: input.maximum,
                                    }))) ||
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
                                Number.isFinite(input.multipleOf) &&
                                (parseInt(input.multipleOf) ===
                                    input.multipleOf ||
                                    $guard(_exceptionable, {
                                        path: _path + ".multipleOf",
                                        expected: "number (@type int)",
                                        value: input.multipleOf,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "(number | undefined)",
                                value: input.multipleOf,
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index50: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index50 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index50 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index51: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index51 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index51 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                    const $ao42: any = (
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index52: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index52 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index52 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index53: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index53 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index53 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                    const $ao43: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (undefined === input.minLength ||
                            ("number" === typeof input.minLength &&
                                Number.isFinite(input.minLength) &&
                                (parseInt(input.minLength) ===
                                    input.minLength ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minLength",
                                        expected: "number (@type uint)",
                                        value: input.minLength,
                                    })) &&
                                (0 <= input.minLength ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minLength",
                                        expected: "number (@type uint)",
                                        value: input.minLength,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minLength",
                                expected: "(number | undefined)",
                                value: input.minLength,
                            })) &&
                        (undefined === input.maxLength ||
                            ("number" === typeof input.maxLength &&
                                Number.isFinite(input.maxLength) &&
                                (parseInt(input.maxLength) ===
                                    input.maxLength ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maxLength",
                                        expected: "number (@type uint)",
                                        value: input.maxLength,
                                    })) &&
                                (0 <= input.maxLength ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maxLength",
                                        expected: "number (@type uint)",
                                        value: input.maxLength,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".maxLength",
                                expected: "(number | undefined)",
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index54: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index54 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index54 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index55: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index55 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index55 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                    const $ao44: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items)) ||
                            $guard(_exceptionable, {
                                path: _path + ".items",
                                expected:
                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                value: input.items,
                            })) &&
                        $au0(
                            input.items,
                            _path + ".items",
                            true && _exceptionable,
                        ) &&
                        (undefined === input.minItems ||
                            ("number" === typeof input.minItems &&
                                Number.isFinite(input.minItems) &&
                                (parseInt(input.minItems) === input.minItems ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: "number (@type uint)",
                                        value: input.minItems,
                                    })) &&
                                (0 <= input.minItems ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: "number (@type uint)",
                                        value: input.minItems,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minItems",
                                expected: "(number | undefined)",
                                value: input.minItems,
                            })) &&
                        (undefined === input.maxItems ||
                            ("number" === typeof input.maxItems &&
                                Number.isFinite(input.maxItems) &&
                                (parseInt(input.maxItems) === input.maxItems ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maxItems",
                                        expected: "number (@type uint)",
                                        value: input.maxItems,
                                    })) &&
                                (0 <= input.maxItems ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maxItems",
                                        expected: "number (@type uint)",
                                        value: input.maxItems,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".maxItems",
                                expected: "(number | undefined)",
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
                                $ao26(
                                    input["x-typia-tuple"],
                                    _path + '["x-typia-tuple"]',
                                    true && _exceptionable,
                                ))) &&
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index56: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index56 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index56 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index57: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index57 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index57 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                    const $ao45: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input.items) ||
                            $guard(_exceptionable, {
                                path: _path + ".items",
                                expected: "Array<IJsonSchema>",
                                value: input.items,
                            })) &&
                        input.items.every(
                            (elem: any, _index58: number) =>
                                (("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem)) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".items[" + _index58 + "]",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: elem,
                                    })) &&
                                $au0(
                                    elem,
                                    _path + ".items[" + _index58 + "]",
                                    true && _exceptionable,
                                ),
                        ) &&
                        ("boolean" === typeof input["x-typia-rest"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-rest"]',
                                expected: "boolean",
                                value: input["x-typia-rest"],
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index59: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index59 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index59 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index60: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index60 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index60 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                    const $ao46: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input.oneOf) ||
                            $guard(_exceptionable, {
                                path: _path + ".oneOf",
                                expected: "Array<IJsonSchema>",
                                value: input.oneOf,
                            })) &&
                        input.oneOf.every(
                            (elem: any, _index61: number) =>
                                (("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem)) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".oneOf[" + _index61 + "]",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: elem,
                                    })) &&
                                $au0(
                                    elem,
                                    _path + ".oneOf[" + _index61 + "]",
                                    true && _exceptionable,
                                ),
                        ) &&
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index62: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index62 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index62 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index63: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index63 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index63 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                    const $ao47: any = (
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index64: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index64 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index64 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index65: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index65 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index65 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                    const $ao48: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.$recursiveRef ||
                            $guard(_exceptionable, {
                                path: _path + ".$recursiveRef",
                                expected: "string",
                                value: input.$recursiveRef,
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index66: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index66 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index66 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index67: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index67 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index67 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                    const $ao49: any = (
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index68: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index68 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index68 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index69: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index69 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index69 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                    const $ao50: any = (
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index70: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index70 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index70 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index71: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index71 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index71 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                    const $ao51: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            const value: any = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return (
                                    (("object" === typeof value &&
                                        null !== value) ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "IJsonComponents.IArray",
                                            value: value,
                                        })) &&
                                    $ao52(
                                        value,
                                        _path + $join(key),
                                        true && _exceptionable,
                                    )
                                );
                            return true;
                        });
                    const $ao52: any = (
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
                        (undefined === input.$recursiveAnchor ||
                            true === input.$recursiveAnchor ||
                            $guard(_exceptionable, {
                                path: _path + ".$recursiveAnchor",
                                expected: "(true | undefined)",
                                value: input.$recursiveAnchor,
                            })) &&
                        (("object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items)) ||
                            $guard(_exceptionable, {
                                path: _path + ".items",
                                expected:
                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                value: input.items,
                            })) &&
                        $au0(
                            input.items,
                            _path + ".items",
                            true && _exceptionable,
                        ) &&
                        (undefined === input.minItems ||
                            ("number" === typeof input.minItems &&
                                Number.isFinite(input.minItems) &&
                                (parseInt(input.minItems) === input.minItems ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: "number (@type uint)",
                                        value: input.minItems,
                                    })) &&
                                (0 <= input.minItems ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: "number (@type uint)",
                                        value: input.minItems,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minItems",
                                expected: "(number | undefined)",
                                value: input.minItems,
                            })) &&
                        (undefined === input.maxItems ||
                            ("number" === typeof input.maxItems &&
                                Number.isFinite(input.maxItems) &&
                                (parseInt(input.maxItems) === input.maxItems ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maxItems",
                                        expected: "number (@type uint)",
                                        value: input.maxItems,
                                    })) &&
                                (0 <= input.maxItems ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maxItems",
                                        expected: "number (@type uint)",
                                        value: input.maxItems,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".maxItems",
                                expected: "(number | undefined)",
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
                                $ao26(
                                    input["x-typia-tuple"],
                                    _path + '["x-typia-tuple"]',
                                    true && _exceptionable,
                                ))) &&
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index72: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index72 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index72 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index73: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index73 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index73 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                            }));
                    const $ao53: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            const value: any = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return (
                                    (("object" === typeof value &&
                                        null !== value) ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected:
                                                "(IJsonComponents.IArray | IJsonComponents.ITuple)",
                                            value: value,
                                        })) &&
                                    $au3(
                                        value,
                                        _path + $join(key),
                                        true && _exceptionable,
                                    )
                                );
                            return true;
                        });
                    const $ao54: any = (
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
                        (undefined === input.$recursiveAnchor ||
                            true === input.$recursiveAnchor ||
                            $guard(_exceptionable, {
                                path: _path + ".$recursiveAnchor",
                                expected: "(true | undefined)",
                                value: input.$recursiveAnchor,
                            })) &&
                        (Array.isArray(input.items) ||
                            $guard(_exceptionable, {
                                path: _path + ".items",
                                expected: "Array<IJsonSchema>",
                                value: input.items,
                            })) &&
                        input.items.every(
                            (elem: any, _index74: number) =>
                                (("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem)) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".items[" + _index74 + "]",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: elem,
                                    })) &&
                                $au0(
                                    elem,
                                    _path + ".items[" + _index74 + "]",
                                    true && _exceptionable,
                                ),
                        ) &&
                        ("boolean" === typeof input["x-typia-rest"] ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-rest"]',
                                expected: "boolean",
                                value: input["x-typia-rest"],
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
                        (undefined === input["x-typia-metaTags"] ||
                            ((Array.isArray(input["x-typia-metaTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<IMetadataTag> | undefined)",
                                    value: input["x-typia-metaTags"],
                                })) &&
                                input["x-typia-metaTags"].every(
                                    (elem: any, _index75: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-metaTags"][' +
                                                    _index75 +
                                                    "]",
                                                expected:
                                                    "(IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.IPattern | IMetadataTag.IStep | IMetadataTag.IType)",
                                                value: elem,
                                            })) &&
                                        $au1(
                                            elem,
                                            _path +
                                                '["x-typia-metaTags"][' +
                                                _index75 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
                        (undefined === input["x-typia-jsDocTags"] ||
                            ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                $guard(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<IJsDocTagInfo> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                })) &&
                                input["x-typia-jsDocTags"].every(
                                    (elem: any, _index76: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    '["x-typia-jsDocTags"][' +
                                                    _index76 +
                                                    "]",
                                                expected: "IJsDocTagInfo",
                                                value: elem,
                                            })) &&
                                        $ao17(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index76 +
                                                "]",
                                            true && _exceptionable,
                                        ),
                                ))) &&
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
                            }));
                    const $au0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("integer" === input.type)
                                return $ao22(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (
                                "object" === typeof input.items &&
                                null !== input.items &&
                                false === Array.isArray(input.items) &&
                                $au0(
                                    input.items,
                                    _path + ".items",
                                    false && _exceptionable,
                                )
                            )
                                return $ao25(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (
                                Array.isArray(input.items) &&
                                input.items.every(
                                    (elem: any, _index77: number) =>
                                        "object" === typeof elem &&
                                        null !== elem &&
                                        false === Array.isArray(elem) &&
                                        $au0(
                                            elem,
                                            _path + ".items[" + _index77 + "]",
                                            false && _exceptionable,
                                        ),
                                )
                            )
                                return $ao26(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (undefined !== input.oneOf)
                                return $ao27(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (undefined !== input.$ref)
                                return $ao28(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (undefined !== input.$recursiveRef)
                                return $ao29(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("null" === input.type)
                                return $ao30(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return (
                                $ao20(input, _path, false && _exceptionable) ||
                                $ao19(input, _path, false && _exceptionable) ||
                                $ao1(input, _path, false && _exceptionable) ||
                                $ao21(input, _path, false && _exceptionable) ||
                                $ao23(input, _path, false && _exceptionable) ||
                                $ao24(input, _path, false && _exceptionable) ||
                                $ao31(input, _path, false && _exceptionable) ||
                                $guard(_exceptionable, {
                                    path: _path,
                                    expected:
                                        '(IJsonSchema.IEnumeration<"string"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                                    value: input,
                                })
                            );
                        })();
                    const $au1: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("maxItems" === input.kind)
                                return $ao16(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("minItems" === input.kind)
                                return $ao15(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("items" === input.kind)
                                return $ao14(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("maxLength" === input.kind)
                                return $ao13(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("minLength" === input.kind)
                                return $ao12(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("length" === input.kind)
                                return $ao11(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("pattern" === input.kind)
                                return $ao10(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("format" === input.kind)
                                return $ao9(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("step" === input.kind)
                                return $ao8(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("multipleOf" === input.kind)
                                return $ao7(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("exclusiveMaximum" === input.kind)
                                return $ao6(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("exclusiveMinimum" === input.kind)
                                return $ao5(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("maximum" === input.kind)
                                return $ao4(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("minimum" === input.kind)
                                return $ao3(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("type" === input.kind)
                                return $ao2(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    "(IMetadataTag.IMaxItems | IMetadataTag.IMinItems | IMetadataTag.IItems | IMetadataTag.IMaxLength | IMetadataTag.IMinLength | IMetadataTag.ILength | IMetadataTag.IPattern | IMetadataTag.IFormat | IMetadataTag.IStep | IMetadataTag.IMultipleOf | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IMaximum | IMetadataTag.IMinimum | IMetadataTag.IType)",
                                value: input,
                            });
                        })();
                    const $au2: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("integer" === input.type)
                                return $ao41(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (
                                "object" === typeof input.items &&
                                null !== input.items &&
                                false === Array.isArray(input.items) &&
                                $au0(
                                    input.items,
                                    _path + ".items",
                                    false && _exceptionable,
                                )
                            )
                                return $ao44(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (
                                Array.isArray(input.items) &&
                                input.items.every(
                                    (elem: any, _index78: number) =>
                                        "object" === typeof elem &&
                                        null !== elem &&
                                        false === Array.isArray(elem) &&
                                        $au0(
                                            elem,
                                            _path + ".items[" + _index78 + "]",
                                            false && _exceptionable,
                                        ),
                                )
                            )
                                return $ao45(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (undefined !== input.oneOf)
                                return $ao46(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (undefined !== input.$ref)
                                return $ao47(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (undefined !== input.$recursiveRef)
                                return $ao48(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("null" === input.type)
                                return $ao49(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return (
                                $ao39(input, _path, false && _exceptionable) ||
                                $ao38(input, _path, false && _exceptionable) ||
                                $ao37(input, _path, false && _exceptionable) ||
                                $ao40(input, _path, false && _exceptionable) ||
                                $ao42(input, _path, false && _exceptionable) ||
                                $ao43(input, _path, false && _exceptionable) ||
                                $ao50(input, _path, false && _exceptionable) ||
                                $guard(_exceptionable, {
                                    path: _path,
                                    expected:
                                        '(IEnumeration<"string"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"number"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"boolean"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IBoolean & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | INumber & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IString & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IUnknown & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; })',
                                    value: input,
                                })
                            );
                        })();
                    const $au3: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if (
                                "object" === typeof input.items &&
                                null !== input.items &&
                                false === Array.isArray(input.items) &&
                                $au0(
                                    input.items,
                                    _path + ".items",
                                    false && _exceptionable,
                                )
                            )
                                return $ao52(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (
                                Array.isArray(input.items) &&
                                input.items.every(
                                    (elem: any, _index79: number) =>
                                        "object" === typeof elem &&
                                        null !== elem &&
                                        false === Array.isArray(elem) &&
                                        $au0(
                                            elem,
                                            _path + ".items[" + _index79 + "]",
                                            false && _exceptionable,
                                        ),
                                )
                            )
                                return $ao54(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    "(IJsonComponents.IArray | IJsonComponents.ITuple)",
                                value: input,
                            });
                        })();
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "UltimateUnion",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "IJsonApplication",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
            return input;
        };
        const clone: any = (
            input: UltimateUnion,
        ): typia.Primitive<UltimateUnion> => {
            const $io1: any = (input: any): boolean =>
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
            const $io2: any = (input: any): boolean =>
                "type" === input.kind &&
                ("int" === input.value || "uint" === input.value);
            const $io3: any = (input: any): boolean =>
                "minimum" === input.kind && "number" === typeof input.value;
            const $io4: any = (input: any): boolean =>
                "maximum" === input.kind && "number" === typeof input.value;
            const $io5: any = (input: any): boolean =>
                "exclusiveMinimum" === input.kind &&
                "number" === typeof input.value;
            const $io6: any = (input: any): boolean =>
                "exclusiveMaximum" === input.kind &&
                "number" === typeof input.value;
            const $io7: any = (input: any): boolean =>
                "multipleOf" === input.kind && "number" === typeof input.value;
            const $io8: any = (input: any): boolean =>
                "step" === input.kind && "number" === typeof input.value;
            const $io9: any = (input: any): boolean =>
                "format" === input.kind &&
                ("url" === input.value ||
                    "uuid" === input.value ||
                    "email" === input.value ||
                    "ipv4" === input.value ||
                    "ipv6" === input.value ||
                    "date" === input.value ||
                    "datetime" === input.value);
            const $io10: any = (input: any): boolean =>
                "pattern" === input.kind && "string" === typeof input.value;
            const $io11: any = (input: any): boolean =>
                "length" === input.kind && "number" === typeof input.value;
            const $io12: any = (input: any): boolean =>
                "minLength" === input.kind && "number" === typeof input.value;
            const $io13: any = (input: any): boolean =>
                "maxLength" === input.kind && "number" === typeof input.value;
            const $io14: any = (input: any): boolean =>
                "items" === input.kind && "number" === typeof input.value;
            const $io15: any = (input: any): boolean =>
                "minItems" === input.kind && "number" === typeof input.value;
            const $io16: any = (input: any): boolean =>
                "maxItems" === input.kind && "number" === typeof input.value;
            const $io17: any = (input: any): boolean =>
                "string" === typeof input.name &&
                (undefined === input.text ||
                    (Array.isArray(input.text) &&
                        input.text.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io18(elem),
                        )));
            const $io18: any = (input: any): boolean =>
                "string" === typeof input.text &&
                "string" === typeof input.kind;
            const $io19: any = (input: any): boolean =>
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
            const $io20: any = (input: any): boolean =>
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
            const $io21: any = (input: any): boolean =>
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
            const $io22: any = (input: any): boolean =>
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
            const $io23: any = (input: any): boolean =>
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
            const $io24: any = (input: any): boolean =>
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
            const $io25: any = (input: any): boolean =>
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
            const $io26: any = (input: any): boolean =>
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
            const $io27: any = (input: any): boolean =>
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
            const $io28: any = (input: any): boolean =>
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
            const $io29: any = (input: any): boolean =>
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
            const $io30: any = (input: any): boolean =>
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
            const $io31: any = (input: any): boolean =>
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
            const $io32: any = (input: any): boolean =>
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
            const $io33: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            $io34(value)
                        );
                    return true;
                });
            const $io34: any = (input: any): boolean =>
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
            const $io35: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
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
            const $io36: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
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
            const $io37: any = (input: any): boolean =>
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
            const $io38: any = (input: any): boolean =>
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
            const $io39: any = (input: any): boolean =>
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
            const $io40: any = (input: any): boolean =>
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
            const $io41: any = (input: any): boolean =>
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
            const $io42: any = (input: any): boolean =>
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
            const $io43: any = (input: any): boolean =>
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
            const $io44: any = (input: any): boolean =>
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
            const $io45: any = (input: any): boolean =>
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
            const $io46: any = (input: any): boolean =>
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
            const $io47: any = (input: any): boolean =>
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
            const $io48: any = (input: any): boolean =>
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
            const $io49: any = (input: any): boolean =>
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
            const $io50: any = (input: any): boolean =>
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
            const $io51: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            $io52(value)
                        );
                    return true;
                });
            const $io52: any = (input: any): boolean =>
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
            const $io53: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            $iu3(value)
                        );
                    return true;
                });
            const $io54: any = (input: any): boolean =>
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
            const $iu0: any = (input: any): any =>
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
            const $iu1: any = (input: any): any =>
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
            const $iu2: any = (input: any): any =>
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
            const $iu3: any = (input: any): any =>
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
            const $join: any = (typia.createAssertClone as any).join;
            const $throws: any = (typia.createAssertClone as any).throws;
            const $is_custom: any = (typia.createAssertClone as any).is_custom;
            const $co0: any = (input: any): any => ({
                schemas: Array.isArray(input.schemas)
                    ? (() =>
                          input.schemas.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu0(elem)
                                  : (elem as any),
                          ))()
                    : (input.schemas as any),
                components:
                    "object" === typeof input.components &&
                    null !== input.components
                        ? $co32(input.components)
                        : (input.components as any),
                purpose: input.purpose as any,
                prefix: input.prefix as any,
            });
            const $co1: any = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? (() => input["enum"].map((elem: any) => elem as any))()
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co2: any = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co3: any = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co4: any = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co5: any = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co6: any = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co7: any = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co8: any = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co9: any = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co10: any = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co11: any = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co12: any = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co13: any = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co14: any = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co15: any = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co16: any = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co17: any = (input: any): any => ({
                name: input.name as any,
                text: Array.isArray(input.text)
                    ? (() =>
                          input.text.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co18(elem)
                                  : (elem as any),
                          ))()
                    : (input.text as any),
            });
            const $co18: any = (input: any): any => ({
                text: input.text as any,
                kind: input.kind as any,
            });
            const $co19: any = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? (() => input["enum"].map((elem: any) => elem as any))()
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co20: any = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? (() => input["enum"].map((elem: any) => elem as any))()
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co21: any = (input: any): any => ({
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co22: any = (input: any): any => ({
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
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co23: any = (input: any): any => ({
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
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co24: any = (input: any): any => ({
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
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co25: any = (input: any): any => ({
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
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co26: any = (input: any): any => ({
                items: Array.isArray(input.items)
                    ? (() =>
                          input.items.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu0(elem)
                                  : (elem as any),
                          ))()
                    : (input.items as any),
                "x-typia-rest": input["x-typia-rest"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co27: any = (input: any): any => ({
                oneOf: Array.isArray(input.oneOf)
                    ? (() =>
                          input.oneOf.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu0(elem)
                                  : (elem as any),
                          ))()
                    : (input.oneOf as any),
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co28: any = (input: any): any => ({
                $ref: input.$ref as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co29: any = (input: any): any => ({
                $recursiveRef: input.$recursiveRef as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co30: any = (input: any): any => ({
                type: input.type as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co31: any = (input: any): any => ({
                type: input.type as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co32: any = (input: any): any => ({
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
            const $co33: any = (input: any): any => {
                const output: any = {} as any;
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
            const $co34: any = (input: any): any => ({
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
                    ? (() => input.required.map((elem: any) => elem as any))()
                    : (input.required as any),
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
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
            const $co35: any = (input: any): any => {
                const output: any = {} as any;
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
            const $co36: any = (input: any): any => {
                const output: any = {} as any;
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
            const $co37: any = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? (() => input["enum"].map((elem: any) => elem as any))()
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co38: any = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? (() => input["enum"].map((elem: any) => elem as any))()
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co39: any = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? (() => input["enum"].map((elem: any) => elem as any))()
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co40: any = (input: any): any => ({
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co41: any = (input: any): any => ({
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
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co42: any = (input: any): any => ({
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
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co43: any = (input: any): any => ({
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
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co44: any = (input: any): any => ({
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
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co45: any = (input: any): any => ({
                items: Array.isArray(input.items)
                    ? (() =>
                          input.items.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu0(elem)
                                  : (elem as any),
                          ))()
                    : (input.items as any),
                "x-typia-rest": input["x-typia-rest"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co46: any = (input: any): any => ({
                oneOf: Array.isArray(input.oneOf)
                    ? (() =>
                          input.oneOf.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu0(elem)
                                  : (elem as any),
                          ))()
                    : (input.oneOf as any),
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co47: any = (input: any): any => ({
                $ref: input.$ref as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co48: any = (input: any): any => ({
                $recursiveRef: input.$recursiveRef as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co49: any = (input: any): any => ({
                type: input.type as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co50: any = (input: any): any => ({
                type: input.type as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
            });
            const $co51: any = (input: any): any => {
                const output: any = {} as any;
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
            const $co52: any = (input: any): any => ({
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
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            const $co53: any = (input: any): any => {
                const output: any = {} as any;
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
            const $co54: any = (input: any): any => ({
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
                items: Array.isArray(input.items)
                    ? (() =>
                          input.items.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu0(elem)
                                  : (elem as any),
                          ))()
                    : (input.items as any),
                "x-typia-rest": input["x-typia-rest"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? (() =>
                          input["x-typia-metaTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu1(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? (() =>
                          input["x-typia-jsDocTags"].map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co17(elem)
                                  : (elem as any),
                          ))()
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-optional": input["x-typia-optional"] as any,
            });
            return Array.isArray(input)
                ? (() =>
                      input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co0(elem)
                              : (elem as any),
                      ))()
                : (input as any);
        };
        assert(input);
        const output: any = clone(input);
        return output;
    },
    UltimateUnion.SPOILERS,
);
