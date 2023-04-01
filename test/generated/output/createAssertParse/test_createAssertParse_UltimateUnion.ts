import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_createAssertParse_UltimateUnion = _test_assertParse(
    "UltimateUnion",
    UltimateUnion.generate,
    (input: string): typia.Primitive<UltimateUnion> => {
        const assert = (input: any): UltimateUnion => {
            const $guard = (typia.createAssertParse as any).guard;
            const $join = (typia.createAssertParse as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is UltimateUnion => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (Array.isArray(input.schemas) ||
                        $guard(_exceptionable, {
                            path: _path + ".schemas",
                            expected:
                                'Array<(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)>',
                            value: input.schemas,
                        })) &&
                    input.schemas.every(
                        (elem: any, _index2: number) =>
                            (("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".schemas[" + _index2 + "]",
                                    expected:
                                        '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)',
                                    value: elem,
                                })) &&
                            $au3(
                                elem,
                                _path + ".schemas[" + _index2 + "]",
                                true && _exceptionable,
                            ),
                    ) &&
                    (("object" === typeof input.components &&
                        null !== input.components) ||
                        $guard(_exceptionable, {
                            path: _path + ".components",
                            expected: "Resolve<IJsonComponents>",
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
                    ("string" === typeof input.prefix ||
                        $guard(_exceptionable, {
                            path: _path + ".prefix",
                            expected: "string",
                            value: input.prefix,
                        }));
                const $ao1 = (
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
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
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
                                    "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
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
                                                "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                            value: elem,
                                        })) &&
                                    $au0(
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
                                    "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                                            expected: "Resolve<IJsDocTagInfo>",
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
                const $ao3 = (
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
                const $ao4 = (
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
                const $ao5 = (
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
                const $ao6 = (
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
                const $ao7 = (
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
                const $ao8 = (
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
                const $ao9 = (
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
                const $ao10 = (
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
                const $ao11 = (
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
                const $ao12 = (
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
                const $ao13 = (
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
                const $ao14 = (
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
                const $ao15 = (
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
                const $ao16 = (
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
                const $ao17 = (
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
                                    "(Array<Resolve<IJsDocTagInfo.IText>> | undefined)",
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
                                            expected:
                                                "Resolve<IJsDocTagInfo.IText>",
                                            value: elem,
                                        })) &&
                                    $ao18(
                                        elem,
                                        _path + ".text[" + _index6 + "]",
                                        true && _exceptionable,
                                    ),
                            )));
                const $ao18 = (
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
                const $ao19 = (
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
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
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
                                    "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
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
                                                "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                            value: elem,
                                        })) &&
                                    $au0(
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
                                    "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                                            expected: "Resolve<IJsDocTagInfo>",
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
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao20 = (
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
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
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
                                    "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
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
                                                "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                            value: elem,
                                        })) &&
                                    $au0(
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
                                    "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                                            expected: "Resolve<IJsDocTagInfo>",
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
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao21 = (
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
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
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
                                    "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
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
                                                "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                            value: elem,
                                        })) &&
                                    $au0(
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
                                    "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                                            expected: "Resolve<IJsDocTagInfo>",
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
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao22 = (
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
                            (parseInt(input.multipleOf) === input.multipleOf ||
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
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
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
                                    "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
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
                                                "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                            value: elem,
                                        })) &&
                                    $au0(
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
                                    "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                                            expected: "Resolve<IJsDocTagInfo>",
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
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao23 = (
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
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
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
                                    "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
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
                                                "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                            value: elem,
                                        })) &&
                                    $au0(
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
                                    "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                                            expected: "Resolve<IJsDocTagInfo>",
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
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao24 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.minLength ||
                        ("number" === typeof input.minLength &&
                            Number.isFinite(input.minLength) &&
                            (parseInt(input.minLength) === input.minLength ||
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
                            (parseInt(input.maxLength) === input.maxLength ||
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
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
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
                                    "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
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
                                                "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                            value: elem,
                                        })) &&
                                    $au0(
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
                                    "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                                            expected: "Resolve<IJsDocTagInfo>",
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
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao25 = (
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
                                '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)',
                            value: input.items,
                        })) &&
                    $au3(
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
                                    "(Resolve<IJsonSchema.ITuple> | undefined)",
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
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
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
                                    "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
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
                                                "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                            value: elem,
                                        })) &&
                                    $au0(
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
                                    "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                                            expected: "Resolve<IJsDocTagInfo>",
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
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao26 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (Array.isArray(input.items) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected:
                                'Array<(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)>',
                            value: input.items,
                        })) &&
                    input.items.every(
                        (elem: any, _index23: number) =>
                            (("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".items[" + _index23 + "]",
                                    expected:
                                        '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)',
                                    value: elem,
                                })) &&
                            $au2(
                                elem,
                                _path + ".items[" + _index23 + "]",
                                true && _exceptionable,
                            ),
                    ) &&
                    ("array" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"array"',
                            value: input.type,
                        })) &&
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
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
                                    "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
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
                                                "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                            value: elem,
                                        })) &&
                                    $au0(
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
                                    "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                                            expected: "Resolve<IJsDocTagInfo>",
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
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao27 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (Array.isArray(input.oneOf) ||
                        $guard(_exceptionable, {
                            path: _path + ".oneOf",
                            expected:
                                'Array<(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)>',
                            value: input.oneOf,
                        })) &&
                    input.oneOf.every(
                        (elem: any, _index26: number) =>
                            (("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".oneOf[" + _index26 + "]",
                                    expected:
                                        '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)',
                                    value: elem,
                                })) &&
                            $au1(
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
                                    "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
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
                                                "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                            value: elem,
                                        })) &&
                                    $au0(
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
                                    "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                                            expected: "Resolve<IJsDocTagInfo>",
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
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao28 = (
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
                                    "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
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
                                                "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                            value: elem,
                                        })) &&
                                    $au0(
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
                                    "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                                            expected: "Resolve<IJsDocTagInfo>",
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
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao29 = (
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
                                    "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
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
                                                "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                            value: elem,
                                        })) &&
                                    $au0(
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
                                    "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                                            expected: "Resolve<IJsDocTagInfo>",
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
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao30 = (
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
                                    "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
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
                                                "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                            value: elem,
                                        })) &&
                                    $au0(
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
                                    "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                                            expected: "Resolve<IJsDocTagInfo>",
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
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao31 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean => true;
                const $ao32 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.schemas &&
                        null !== input.schemas &&
                        false === Array.isArray(input.schemas)) ||
                        $guard(_exceptionable, {
                            path: _path + ".schemas",
                            expected:
                                "Resolve<Record<string, IJsonComponents.IObject>>",
                            value: input.schemas,
                        })) &&
                    $ao33(
                        input.schemas,
                        _path + ".schemas",
                        true && _exceptionable,
                    );
                const $ao33 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                (("object" === typeof value &&
                                    null !== value) ||
                                    $guard(_exceptionable, {
                                        path: _path + $join(key),
                                        expected:
                                            "Resolve<IJsonComponents.IObject>",
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
                const $ao34 = (
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
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
                            value: input.nullable,
                        })) &&
                    (("object" === typeof input.properties &&
                        null !== input.properties &&
                        false === Array.isArray(input.properties)) ||
                        $guard(_exceptionable, {
                            path: _path + ".properties",
                            expected: "Resolve<Record<string, IJsonSchema>>",
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
                            false === Array.isArray(input.patternProperties)) ||
                            $guard(_exceptionable, {
                                path: _path + ".patternProperties",
                                expected:
                                    "(Resolve<Record<string, IJsonSchema>> | undefined)",
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
                                Array.isArray(input.additionalProperties)) ||
                            $guard(_exceptionable, {
                                path: _path + ".additionalProperties",
                                expected:
                                    '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown> | undefined)',
                                value: input.additionalProperties,
                            })) &&
                            $au3(
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
                                (elem: any, _index35: number) =>
                                    "string" === typeof elem ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".required[" +
                                            _index35 +
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
                                    "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                                            expected: "Resolve<IJsDocTagInfo>",
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
                    (undefined === input["x-typia-patternProperties"] ||
                        ((("object" ===
                            typeof input["x-typia-patternProperties"] &&
                            null !== input["x-typia-patternProperties"] &&
                            false ===
                                Array.isArray(
                                    input["x-typia-patternProperties"],
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-patternProperties"]',
                                expected:
                                    "(Resolve<Record<string, IJsonSchema>> | undefined)",
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
                            null !== input["x-typia-additionalProperties"] &&
                            false ===
                                Array.isArray(
                                    input["x-typia-additionalProperties"],
                                )) ||
                            $guard(_exceptionable, {
                                path:
                                    _path + '["x-typia-additionalProperties"]',
                                expected:
                                    '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown> | undefined)',
                                value: input["x-typia-additionalProperties"],
                            })) &&
                            $au3(
                                input["x-typia-additionalProperties"],
                                _path + '["x-typia-additionalProperties"]',
                                true && _exceptionable,
                            )));
                const $ao35 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                (("object" === typeof value &&
                                    null !== value &&
                                    false === Array.isArray(value)) ||
                                    $guard(_exceptionable, {
                                        path: _path + $join(key),
                                        expected:
                                            '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)',
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
                const $au0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ("type" === input.kind)
                            return $ao2(input, _path, true && _exceptionable);
                        if ("minimum" === input.kind)
                            return $ao3(input, _path, true && _exceptionable);
                        if ("maximum" === input.kind)
                            return $ao4(input, _path, true && _exceptionable);
                        if ("exclusiveMinimum" === input.kind)
                            return $ao5(input, _path, true && _exceptionable);
                        if ("exclusiveMaximum" === input.kind)
                            return $ao6(input, _path, true && _exceptionable);
                        if ("multipleOf" === input.kind)
                            return $ao7(input, _path, true && _exceptionable);
                        if ("step" === input.kind)
                            return $ao8(input, _path, true && _exceptionable);
                        if ("format" === input.kind)
                            return $ao9(input, _path, true && _exceptionable);
                        if ("pattern" === input.kind)
                            return $ao10(input, _path, true && _exceptionable);
                        if ("length" === input.kind)
                            return $ao11(input, _path, true && _exceptionable);
                        if ("minLength" === input.kind)
                            return $ao12(input, _path, true && _exceptionable);
                        if ("maxLength" === input.kind)
                            return $ao13(input, _path, true && _exceptionable);
                        if ("items" === input.kind)
                            return $ao14(input, _path, true && _exceptionable);
                        if ("minItems" === input.kind)
                            return $ao15(input, _path, true && _exceptionable);
                        if ("maxItems" === input.kind)
                            return $ao16(input, _path, true && _exceptionable);
                        return $guard(_exceptionable, {
                            path: _path,
                            expected:
                                "(IMetadataTag.IType | IMetadataTag.IMinimum | IMetadataTag.IMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IExclusiveMaximum | IMetadataTag.IMultipleOf | IMetadataTag.IStep | IMetadataTag.IFormat | IMetadataTag.IPattern | IMetadataTag.ILength | IMetadataTag.IMinLength | IMetadataTag.IMaxLength | IMetadataTag.IItems | IMetadataTag.IMinItems | IMetadataTag.IMaxItems)",
                            value: input,
                        });
                    })();
                const $au1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ("integer" === input.type)
                            return $ao22(input, _path, true && _exceptionable);
                        if (undefined !== input.oneOf)
                            return $ao27(input, _path, true && _exceptionable);
                        if (
                            Array.isArray(input.items) &&
                            input.items.every(
                                (elem: any, _index37: number) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem) &&
                                    $au2(
                                        elem,
                                        _path + ".items[" + _index37 + "]",
                                        false && _exceptionable,
                                    ),
                            )
                        )
                            return $ao26(input, _path, true && _exceptionable);
                        if (
                            "object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items) &&
                            $au3(
                                input.items,
                                _path + ".items",
                                false && _exceptionable,
                            )
                        )
                            return $ao25(input, _path, true && _exceptionable);
                        if (undefined !== input.$ref)
                            return $ao28(input, _path, true && _exceptionable);
                        if (undefined !== input.$recursiveRef)
                            return $ao29(input, _path, true && _exceptionable);
                        if ("null" === input.type)
                            return $ao30(input, _path, true && _exceptionable);
                        return (
                            $ao1(input, _path, false && _exceptionable) ||
                            $ao19(input, _path, false && _exceptionable) ||
                            $ao20(input, _path, false && _exceptionable) ||
                            $ao21(input, _path, false && _exceptionable) ||
                            $ao23(input, _path, false && _exceptionable) ||
                            $ao24(input, _path, false && _exceptionable) ||
                            $ao31(input, _path, false && _exceptionable) ||
                            $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    '(IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                                value: input,
                            })
                        );
                    })();
                const $au2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ("integer" === input.type)
                            return $ao22(input, _path, true && _exceptionable);
                        if (
                            Array.isArray(input.items) &&
                            input.items.every(
                                (elem: any, _index38: number) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem) &&
                                    $au2(
                                        elem,
                                        _path + ".items[" + _index38 + "]",
                                        false && _exceptionable,
                                    ),
                            )
                        )
                            return $ao26(input, _path, true && _exceptionable);
                        if (
                            "object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items) &&
                            $au3(
                                input.items,
                                _path + ".items",
                                false && _exceptionable,
                            )
                        )
                            return $ao25(input, _path, true && _exceptionable);
                        if (undefined !== input.oneOf)
                            return $ao27(input, _path, true && _exceptionable);
                        if (undefined !== input.$ref)
                            return $ao28(input, _path, true && _exceptionable);
                        if (undefined !== input.$recursiveRef)
                            return $ao29(input, _path, true && _exceptionable);
                        if ("null" === input.type)
                            return $ao30(input, _path, true && _exceptionable);
                        return (
                            $ao1(input, _path, false && _exceptionable) ||
                            $ao19(input, _path, false && _exceptionable) ||
                            $ao20(input, _path, false && _exceptionable) ||
                            $ao21(input, _path, false && _exceptionable) ||
                            $ao23(input, _path, false && _exceptionable) ||
                            $ao24(input, _path, false && _exceptionable) ||
                            $ao31(input, _path, false && _exceptionable) ||
                            $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    '(IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                                value: input,
                            })
                        );
                    })();
                const $au3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ("integer" === input.type)
                            return $ao22(input, _path, true && _exceptionable);
                        if (
                            "object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items) &&
                            $au3(
                                input.items,
                                _path + ".items",
                                false && _exceptionable,
                            )
                        )
                            return $ao25(input, _path, true && _exceptionable);
                        if (
                            Array.isArray(input.items) &&
                            input.items.every(
                                (elem: any, _index39: number) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem) &&
                                    $au2(
                                        elem,
                                        _path + ".items[" + _index39 + "]",
                                        false && _exceptionable,
                                    ),
                            )
                        )
                            return $ao26(input, _path, true && _exceptionable);
                        if (undefined !== input.oneOf)
                            return $ao27(input, _path, true && _exceptionable);
                        if (undefined !== input.$ref)
                            return $ao28(input, _path, true && _exceptionable);
                        if (undefined !== input.$recursiveRef)
                            return $ao29(input, _path, true && _exceptionable);
                        if ("null" === input.type)
                            return $ao30(input, _path, true && _exceptionable);
                        return (
                            $ao1(input, _path, false && _exceptionable) ||
                            $ao19(input, _path, false && _exceptionable) ||
                            $ao20(input, _path, false && _exceptionable) ||
                            $ao21(input, _path, false && _exceptionable) ||
                            $ao23(input, _path, false && _exceptionable) ||
                            $ao24(input, _path, false && _exceptionable) ||
                            $ao31(input, _path, false && _exceptionable) ||
                            $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    '(IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                                value: input,
                            })
                        );
                    })();
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<Resolve<IJsonApplication>>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "Resolve<IJsonApplication>",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        };
        input = JSON.parse(input);
        return assert(input);
    },
    UltimateUnion.SPOILERS,
);
