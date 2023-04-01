import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_validateParse_UltimateUnion = _test_validateParse(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) =>
        ((input: string): typia.IValidation<typia.Primitive<UltimateUnion>> => {
            const validate = (input: any): typia.IValidation<UltimateUnion> => {
                const errors = [] as any[];
                const $report = (typia.validateParse as any).report(errors);
                const $join = (typia.validateParse as any).join;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is UltimateUnion => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input.schemas) ||
                                $report(_exceptionable, {
                                    path: _path + ".schemas",
                                    expected:
                                        'Array<(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)>',
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
                                                        '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)',
                                                    value: elem,
                                                })) &&
                                                $vu3(
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
                                                    '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)',
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".schemas",
                                    expected:
                                        'Array<(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)>',
                                    value: input.schemas,
                                }),
                            ((("object" === typeof input.components &&
                                null !== input.components) ||
                                $report(_exceptionable, {
                                    path: _path + ".components",
                                    expected: "Resolve<IJsonComponents>",
                                    value: input.components,
                                })) &&
                                $vo32(
                                    input.components,
                                    _path + ".components",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".components",
                                    expected: "Resolve<IJsonComponents>",
                                    value: input.components,
                                }),
                            "ajv" === input.purpose ||
                                "swagger" === input.purpose ||
                                $report(_exceptionable, {
                                    path: _path + ".purpose",
                                    expected: '("ajv" | "swagger")',
                                    value: input.purpose,
                                }),
                            "string" === typeof input.prefix ||
                                $report(_exceptionable, {
                                    path: _path + ".prefix",
                                    expected: "string",
                                    value: input.prefix,
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
                            "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "boolean",
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
                                ((Array.isArray(input["x-typia-metaTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    })) &&
                                    input["x-typia-metaTags"]
                                        .map(
                                            (elem: any, _index4: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index4 +
                                                            "]",
                                                        expected:
                                                            "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index4 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-metaTags"][' +
                                                        _index4 +
                                                        "]",
                                                    expected:
                                                        "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                    value: input["x-typia-metaTags"],
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<Resolve<IJsDocTagInfo>> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index5: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index5 +
                                                            "]",
                                                        expected:
                                                            "Resolve<IJsDocTagInfo>",
                                                        value: elem,
                                                    })) &&
                                                    $vo17(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index5 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index5 +
                                                        "]",
                                                    expected:
                                                        "Resolve<IJsDocTagInfo>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
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
                                            "(Array<Resolve<IJsDocTagInfo.IText>> | undefined)",
                                        value: input.text,
                                    })) &&
                                    input.text
                                        .map(
                                            (elem: any, _index6: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".text[" +
                                                            _index6 +
                                                            "]",
                                                        expected:
                                                            "Resolve<IJsDocTagInfo.IText>",
                                                        value: elem,
                                                    })) &&
                                                    $vo18(
                                                        elem,
                                                        _path +
                                                            ".text[" +
                                                            _index6 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".text[" +
                                                        _index6 +
                                                        "]",
                                                    expected:
                                                        "Resolve<IJsDocTagInfo.IText>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".text",
                                    expected:
                                        "(Array<Resolve<IJsDocTagInfo.IText>> | undefined)",
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
                            "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "boolean",
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
                                ((Array.isArray(input["x-typia-metaTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    })) &&
                                    input["x-typia-metaTags"]
                                        .map(
                                            (elem: any, _index8: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index8 +
                                                            "]",
                                                        expected:
                                                            "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index8 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-metaTags"][' +
                                                        _index8 +
                                                        "]",
                                                    expected:
                                                        "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                    value: input["x-typia-metaTags"],
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<Resolve<IJsDocTagInfo>> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index9: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index9 +
                                                            "]",
                                                        expected:
                                                            "Resolve<IJsDocTagInfo>",
                                                        value: elem,
                                                    })) &&
                                                    $vo17(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index9 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index9 +
                                                        "]",
                                                    expected:
                                                        "Resolve<IJsDocTagInfo>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
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
                            "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "boolean",
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
                                ((Array.isArray(input["x-typia-metaTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    })) &&
                                    input["x-typia-metaTags"]
                                        .map(
                                            (elem: any, _index11: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index11 +
                                                            "]",
                                                        expected:
                                                            "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index11 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-metaTags"][' +
                                                        _index11 +
                                                        "]",
                                                    expected:
                                                        "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                    value: input["x-typia-metaTags"],
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<Resolve<IJsDocTagInfo>> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index12: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index12 +
                                                            "]",
                                                        expected:
                                                            "Resolve<IJsDocTagInfo>",
                                                        value: elem,
                                                    })) &&
                                                    $vo17(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index12 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index12 +
                                                        "]",
                                                    expected:
                                                        "Resolve<IJsDocTagInfo>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
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
                            "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "boolean",
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
                                ((Array.isArray(input["x-typia-metaTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    })) &&
                                    input["x-typia-metaTags"]
                                        .map(
                                            (elem: any, _index13: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index13 +
                                                            "]",
                                                        expected:
                                                            "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index13 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-metaTags"][' +
                                                        _index13 +
                                                        "]",
                                                    expected:
                                                        "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                    value: input["x-typia-metaTags"],
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<Resolve<IJsDocTagInfo>> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index14: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index14 +
                                                            "]",
                                                        expected:
                                                            "Resolve<IJsDocTagInfo>",
                                                        value: elem,
                                                    })) &&
                                                    $vo17(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index14 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index14 +
                                                        "]",
                                                    expected:
                                                        "Resolve<IJsDocTagInfo>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
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
                                "boolean" === typeof input.exclusiveMinimum ||
                                $report(_exceptionable, {
                                    path: _path + ".exclusiveMinimum",
                                    expected: "(boolean | undefined)",
                                    value: input.exclusiveMinimum,
                                }),
                            undefined === input.exclusiveMaximum ||
                                "boolean" === typeof input.exclusiveMaximum ||
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
                            "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "boolean",
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
                                ((Array.isArray(input["x-typia-metaTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    })) &&
                                    input["x-typia-metaTags"]
                                        .map(
                                            (elem: any, _index15: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index15 +
                                                            "]",
                                                        expected:
                                                            "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index15 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-metaTags"][' +
                                                        _index15 +
                                                        "]",
                                                    expected:
                                                        "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                    value: input["x-typia-metaTags"],
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<Resolve<IJsDocTagInfo>> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index16: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index16 +
                                                            "]",
                                                        expected:
                                                            "Resolve<IJsDocTagInfo>",
                                                        value: elem,
                                                    })) &&
                                                    $vo17(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index16 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index16 +
                                                        "]",
                                                    expected:
                                                        "Resolve<IJsDocTagInfo>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
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
                                "boolean" === typeof input.exclusiveMinimum ||
                                $report(_exceptionable, {
                                    path: _path + ".exclusiveMinimum",
                                    expected: "(boolean | undefined)",
                                    value: input.exclusiveMinimum,
                                }),
                            undefined === input.exclusiveMaximum ||
                                "boolean" === typeof input.exclusiveMaximum ||
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
                            "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "boolean",
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
                                ((Array.isArray(input["x-typia-metaTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    })) &&
                                    input["x-typia-metaTags"]
                                        .map(
                                            (elem: any, _index17: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index17 +
                                                            "]",
                                                        expected:
                                                            "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index17 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-metaTags"][' +
                                                        _index17 +
                                                        "]",
                                                    expected:
                                                        "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                    value: input["x-typia-metaTags"],
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<Resolve<IJsDocTagInfo>> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index18: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index18 +
                                                            "]",
                                                        expected:
                                                            "Resolve<IJsDocTagInfo>",
                                                        value: elem,
                                                    })) &&
                                                    $vo17(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index18 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index18 +
                                                        "]",
                                                    expected:
                                                        "Resolve<IJsDocTagInfo>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
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
                            "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "boolean",
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
                                ((Array.isArray(input["x-typia-metaTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    })) &&
                                    input["x-typia-metaTags"]
                                        .map(
                                            (elem: any, _index19: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index19 +
                                                            "]",
                                                        expected:
                                                            "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index19 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-metaTags"][' +
                                                        _index19 +
                                                        "]",
                                                    expected:
                                                        "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                    value: input["x-typia-metaTags"],
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<Resolve<IJsDocTagInfo>> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index20: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index20 +
                                                            "]",
                                                        expected:
                                                            "Resolve<IJsDocTagInfo>",
                                                        value: elem,
                                                    })) &&
                                                    $vo17(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index20 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index20 +
                                                        "]",
                                                    expected:
                                                        "Resolve<IJsDocTagInfo>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
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
                                        '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)',
                                    value: input.items,
                                })) &&
                                $vu3(
                                    input.items,
                                    _path + ".items",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".items",
                                    expected:
                                        '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)',
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
                                ((("object" === typeof input["x-typia-tuple"] &&
                                    null !== input["x-typia-tuple"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-tuple"]',
                                        expected:
                                            "(Resolve<IJsonSchema.ITuple> | undefined)",
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
                                        "(Resolve<IJsonSchema.ITuple> | undefined)",
                                    value: input["x-typia-tuple"],
                                }),
                            "array" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"array"',
                                    value: input.type,
                                }),
                            "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "boolean",
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
                                ((Array.isArray(input["x-typia-metaTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    })) &&
                                    input["x-typia-metaTags"]
                                        .map(
                                            (elem: any, _index21: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index21 +
                                                            "]",
                                                        expected:
                                                            "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index21 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-metaTags"][' +
                                                        _index21 +
                                                        "]",
                                                    expected:
                                                        "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                    value: input["x-typia-metaTags"],
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<Resolve<IJsDocTagInfo>> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index22: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index22 +
                                                            "]",
                                                        expected:
                                                            "Resolve<IJsDocTagInfo>",
                                                        value: elem,
                                                    })) &&
                                                    $vo17(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index22 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index22 +
                                                        "]",
                                                    expected:
                                                        "Resolve<IJsDocTagInfo>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
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
                                    expected:
                                        'Array<(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)>',
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
                                                        '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)',
                                                    value: elem,
                                                })) &&
                                                $vu2(
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
                                                    '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)',
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".items",
                                    expected:
                                        'Array<(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)>',
                                    value: input.items,
                                }),
                            "array" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"array"',
                                    value: input.type,
                                }),
                            "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "boolean",
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
                                ((Array.isArray(input["x-typia-metaTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    })) &&
                                    input["x-typia-metaTags"]
                                        .map(
                                            (elem: any, _index24: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index24 +
                                                            "]",
                                                        expected:
                                                            "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index24 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-metaTags"][' +
                                                        _index24 +
                                                        "]",
                                                    expected:
                                                        "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                    value: input["x-typia-metaTags"],
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<Resolve<IJsDocTagInfo>> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index25: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index25 +
                                                            "]",
                                                        expected:
                                                            "Resolve<IJsDocTagInfo>",
                                                        value: elem,
                                                    })) &&
                                                    $vo17(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index25 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index25 +
                                                        "]",
                                                    expected:
                                                        "Resolve<IJsDocTagInfo>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
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
                                    expected:
                                        'Array<(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)>',
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
                                                        '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)',
                                                    value: elem,
                                                })) &&
                                                $vu1(
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
                                                    '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)',
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".oneOf",
                                    expected:
                                        'Array<(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)>',
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
                                ((Array.isArray(input["x-typia-metaTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    })) &&
                                    input["x-typia-metaTags"]
                                        .map(
                                            (elem: any, _index27: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index27 +
                                                            "]",
                                                        expected:
                                                            "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index27 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-metaTags"][' +
                                                        _index27 +
                                                        "]",
                                                    expected:
                                                        "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                    value: input["x-typia-metaTags"],
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<Resolve<IJsDocTagInfo>> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index28: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index28 +
                                                            "]",
                                                        expected:
                                                            "Resolve<IJsDocTagInfo>",
                                                        value: elem,
                                                    })) &&
                                                    $vo17(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index28 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index28 +
                                                        "]",
                                                    expected:
                                                        "Resolve<IJsDocTagInfo>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
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
                                ((Array.isArray(input["x-typia-metaTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    })) &&
                                    input["x-typia-metaTags"]
                                        .map(
                                            (elem: any, _index29: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index29 +
                                                            "]",
                                                        expected:
                                                            "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index29 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-metaTags"][' +
                                                        _index29 +
                                                        "]",
                                                    expected:
                                                        "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                    value: input["x-typia-metaTags"],
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<Resolve<IJsDocTagInfo>> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index30: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index30 +
                                                            "]",
                                                        expected:
                                                            "Resolve<IJsDocTagInfo>",
                                                        value: elem,
                                                    })) &&
                                                    $vo17(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index30 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index30 +
                                                        "]",
                                                    expected:
                                                        "Resolve<IJsDocTagInfo>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
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
                                ((Array.isArray(input["x-typia-metaTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    })) &&
                                    input["x-typia-metaTags"]
                                        .map(
                                            (elem: any, _index31: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index31 +
                                                            "]",
                                                        expected:
                                                            "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index31 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-metaTags"][' +
                                                        _index31 +
                                                        "]",
                                                    expected:
                                                        "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                    value: input["x-typia-metaTags"],
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<Resolve<IJsDocTagInfo>> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index32: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index32 +
                                                            "]",
                                                        expected:
                                                            "Resolve<IJsDocTagInfo>",
                                                        value: elem,
                                                    })) &&
                                                    $vo17(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index32 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index32 +
                                                        "]",
                                                    expected:
                                                        "Resolve<IJsDocTagInfo>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
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
                                ((Array.isArray(input["x-typia-metaTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-metaTags"]',
                                        expected:
                                            "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                        value: input["x-typia-metaTags"],
                                    })) &&
                                    input["x-typia-metaTags"]
                                        .map(
                                            (elem: any, _index33: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index33 +
                                                            "]",
                                                        expected:
                                                            "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            '["x-typia-metaTags"][' +
                                                            _index33 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-metaTags"][' +
                                                        _index33 +
                                                        "]",
                                                    expected:
                                                        "(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-metaTags"]',
                                    expected:
                                        "(Array<(Resolve<IMetadataTag.IExclusiveMaximum> | Resolve<IMetadataTag.IExclusiveMinimum> | Resolve<IMetadataTag.IFormat> | Resolve<IMetadataTag.IItems> | Resolve<IMetadataTag.ILength> | Resolve<IMetadataTag.IMaxItems> | Resolve<IMetadataTag.IMaxLength> | Resolve<IMetadataTag.IMaximum> | Resolve<IMetadataTag.IMinItems> | Resolve<IMetadataTag.IMinLength> | Resolve<IMetadataTag.IMinimum> | Resolve<IMetadataTag.IMultipleOf> | Resolve<IMetadataTag.IPattern> | Resolve<IMetadataTag.IStep> | Resolve<IMetadataTag.IType>)> | undefined)",
                                    value: input["x-typia-metaTags"],
                                }),
                            undefined === input["x-typia-jsDocTags"] ||
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<Resolve<IJsDocTagInfo>> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index34: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index34 +
                                                            "]",
                                                        expected:
                                                            "Resolve<IJsDocTagInfo>",
                                                        value: elem,
                                                    })) &&
                                                    $vo17(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index34 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index34 +
                                                        "]",
                                                    expected:
                                                        "Resolve<IJsDocTagInfo>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<Resolve<IJsDocTagInfo>> | undefined)",
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
                            undefined === input["x-typia-rest"] ||
                                "boolean" === typeof input["x-typia-rest"] ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-rest"]',
                                    expected: "(boolean | undefined)",
                                    value: input["x-typia-rest"],
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo31 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean => true;
                    const $vo32 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((("object" === typeof input.schemas &&
                                null !== input.schemas &&
                                false === Array.isArray(input.schemas)) ||
                                $report(_exceptionable, {
                                    path: _path + ".schemas",
                                    expected:
                                        "Resolve<Record<string, IJsonComponents.IObject>>",
                                    value: input.schemas,
                                })) &&
                                $vo33(
                                    input.schemas,
                                    _path + ".schemas",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".schemas",
                                    expected:
                                        "Resolve<Record<string, IJsonComponents.IObject>>",
                                    value: input.schemas,
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
                                    .map((key) => {
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        if (RegExp(/(.*)/).test(key))
                                            return (
                                                ((("object" === typeof value &&
                                                    null !== value) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected:
                                                            "Resolve<IJsonComponents.IObject>",
                                                        value: value,
                                                    })) &&
                                                    $vo34(
                                                        value,
                                                        _path + $join(key),
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected:
                                                        "Resolve<IJsonComponents.IObject>",
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
                                "boolean" === typeof input.$recursiveAnchor ||
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
                            "boolean" === typeof input.nullable ||
                                $report(_exceptionable, {
                                    path: _path + ".nullable",
                                    expected: "boolean",
                                    value: input.nullable,
                                }),
                            ((("object" === typeof input.properties &&
                                null !== input.properties &&
                                false === Array.isArray(input.properties)) ||
                                $report(_exceptionable, {
                                    path: _path + ".properties",
                                    expected:
                                        "Resolve<Record<string, IJsonSchema>>",
                                    value: input.properties,
                                })) &&
                                $vo35(
                                    input.properties,
                                    _path + ".properties",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".properties",
                                    expected:
                                        "Resolve<Record<string, IJsonSchema>>",
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
                                            "(Resolve<Record<string, IJsonSchema>> | undefined)",
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
                                        "(Resolve<Record<string, IJsonSchema>> | undefined)",
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
                                        path: _path + ".additionalProperties",
                                        expected:
                                            '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown> | undefined)',
                                        value: input.additionalProperties,
                                    })) &&
                                    $vu3(
                                        input.additionalProperties,
                                        _path + ".additionalProperties",
                                        true && _exceptionable,
                                    )) ||
                                $report(_exceptionable, {
                                    path: _path + ".additionalProperties",
                                    expected:
                                        '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown> | undefined)',
                                    value: input.additionalProperties,
                                }),
                            undefined === input.required ||
                                ((Array.isArray(input.required) ||
                                    $report(_exceptionable, {
                                        path: _path + ".required",
                                        expected: "(Array<string> | undefined)",
                                        value: input.required,
                                    })) &&
                                    input.required
                                        .map(
                                            (elem: any, _index35: number) =>
                                                "string" === typeof elem ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".required[" +
                                                        _index35 +
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
                                ((Array.isArray(input["x-typia-jsDocTags"]) ||
                                    $report(_exceptionable, {
                                        path: _path + '["x-typia-jsDocTags"]',
                                        expected:
                                            "(Array<Resolve<IJsDocTagInfo>> | undefined)",
                                        value: input["x-typia-jsDocTags"],
                                    })) &&
                                    input["x-typia-jsDocTags"]
                                        .map(
                                            (elem: any, _index36: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index36 +
                                                            "]",
                                                        expected:
                                                            "Resolve<IJsDocTagInfo>",
                                                        value: elem,
                                                    })) &&
                                                    $vo17(
                                                        elem,
                                                        _path +
                                                            '["x-typia-jsDocTags"][' +
                                                            _index36 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        '["x-typia-jsDocTags"][' +
                                                        _index36 +
                                                        "]",
                                                    expected:
                                                        "Resolve<IJsDocTagInfo>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + '["x-typia-jsDocTags"]',
                                    expected:
                                        "(Array<Resolve<IJsDocTagInfo>> | undefined)",
                                    value: input["x-typia-jsDocTags"],
                                }),
                            undefined === input["x-typia-patternProperties"] ||
                                ((("object" ===
                                    typeof input["x-typia-patternProperties"] &&
                                    null !==
                                        input["x-typia-patternProperties"] &&
                                    false ===
                                        Array.isArray(
                                            input["x-typia-patternProperties"],
                                        )) ||
                                    $report(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-patternProperties"]',
                                        expected:
                                            "(Resolve<Record<string, IJsonSchema>> | undefined)",
                                        value: input[
                                            "x-typia-patternProperties"
                                        ],
                                    })) &&
                                    $vo35(
                                        input["x-typia-patternProperties"],
                                        _path + '["x-typia-patternProperties"]',
                                        true && _exceptionable,
                                    )) ||
                                $report(_exceptionable, {
                                    path:
                                        _path + '["x-typia-patternProperties"]',
                                    expected:
                                        "(Resolve<Record<string, IJsonSchema>> | undefined)",
                                    value: input["x-typia-patternProperties"],
                                }),
                            undefined ===
                                input["x-typia-additionalProperties"] ||
                                ((("object" ===
                                    typeof input[
                                        "x-typia-additionalProperties"
                                    ] &&
                                    null !==
                                        input["x-typia-additionalProperties"] &&
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
                                            '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown> | undefined)',
                                        value: input[
                                            "x-typia-additionalProperties"
                                        ],
                                    })) &&
                                    $vu3(
                                        input["x-typia-additionalProperties"],
                                        _path +
                                            '["x-typia-additionalProperties"]',
                                        true && _exceptionable,
                                    )) ||
                                $report(_exceptionable, {
                                    path:
                                        _path +
                                        '["x-typia-additionalProperties"]',
                                    expected:
                                        '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown> | undefined)',
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
                                    .map((key) => {
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        if (RegExp(/(.*)/).test(key))
                                            return (
                                                ((("object" === typeof value &&
                                                    null !== value &&
                                                    false ===
                                                        Array.isArray(value)) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected:
                                                            '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)',
                                                        value: value,
                                                    })) &&
                                                    $vu3(
                                                        value,
                                                        _path + $join(key),
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected:
                                                        '(Resolve<IJsonSchema.IArray> | Resolve<IJsonSchema.IBoolean> | Resolve<IJsonSchema.IEnumeration<"boolean">> | Resolve<IJsonSchema.IEnumeration<"number">> | Resolve<IJsonSchema.IEnumeration<"string">> | Resolve<IJsonSchema.IInteger> | Resolve<IJsonSchema.INullOnly> | Resolve<IJsonSchema.INumber> | Resolve<IJsonSchema.IOneOf> | Resolve<IJsonSchema.IRecursiveReference> | Resolve<IJsonSchema.IReference> | Resolve<IJsonSchema.IString> | Resolve<IJsonSchema.ITuple> | Resolve<IJsonSchema.IUnknown>)',
                                                    value: value,
                                                })
                                            );
                                        return true;
                                    })
                                    .every((flag: boolean) => flag),
                        ].every((flag: boolean) => flag);
                    const $vu0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("type" === input.kind)
                                return $vo2(
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
                            if ("maximum" === input.kind)
                                return $vo4(
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
                            if ("exclusiveMaximum" === input.kind)
                                return $vo6(
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
                            if ("step" === input.kind)
                                return $vo8(
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
                            if ("pattern" === input.kind)
                                return $vo10(
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
                            if ("minLength" === input.kind)
                                return $vo12(
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
                            if ("items" === input.kind)
                                return $vo14(
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
                            if ("maxItems" === input.kind)
                                return $vo16(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return $report(_exceptionable, {
                                path: _path,
                                expected:
                                    "(IMetadataTag.IType | IMetadataTag.IMinimum | IMetadataTag.IMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IExclusiveMaximum | IMetadataTag.IMultipleOf | IMetadataTag.IStep | IMetadataTag.IFormat | IMetadataTag.IPattern | IMetadataTag.ILength | IMetadataTag.IMinLength | IMetadataTag.IMaxLength | IMetadataTag.IItems | IMetadataTag.IMinItems | IMetadataTag.IMaxItems)",
                                value: input,
                            });
                        })();
                    const $vu1 = (
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
                            if (undefined !== input.oneOf)
                                return $vo27(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (
                                Array.isArray(input.items) &&
                                input.items
                                    .map(
                                        (elem: any, _index37: number) =>
                                            "object" === typeof elem &&
                                            null !== elem &&
                                            false === Array.isArray(elem) &&
                                            $vu2(
                                                elem,
                                                _path +
                                                    ".items[" +
                                                    _index37 +
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
                            if (
                                "object" === typeof input.items &&
                                null !== input.items &&
                                false === Array.isArray(input.items) &&
                                $vu3(
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
                                $vo1(input, _path, false && _exceptionable) ||
                                $vo19(input, _path, false && _exceptionable) ||
                                $vo20(input, _path, false && _exceptionable) ||
                                $vo21(input, _path, false && _exceptionable) ||
                                $vo23(input, _path, false && _exceptionable) ||
                                $vo24(input, _path, false && _exceptionable) ||
                                $vo31(input, _path, false && _exceptionable)
                            );
                        })();
                    const $vu2 = (
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
                                Array.isArray(input.items) &&
                                input.items
                                    .map(
                                        (elem: any, _index38: number) =>
                                            "object" === typeof elem &&
                                            null !== elem &&
                                            false === Array.isArray(elem) &&
                                            $vu2(
                                                elem,
                                                _path +
                                                    ".items[" +
                                                    _index38 +
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
                            if (
                                "object" === typeof input.items &&
                                null !== input.items &&
                                false === Array.isArray(input.items) &&
                                $vu3(
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
                                $vo1(input, _path, false && _exceptionable) ||
                                $vo19(input, _path, false && _exceptionable) ||
                                $vo20(input, _path, false && _exceptionable) ||
                                $vo21(input, _path, false && _exceptionable) ||
                                $vo23(input, _path, false && _exceptionable) ||
                                $vo24(input, _path, false && _exceptionable) ||
                                $vo31(input, _path, false && _exceptionable)
                            );
                        })();
                    const $vu3 = (
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
                                $vu3(
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
                                        (elem: any, _index39: number) =>
                                            "object" === typeof elem &&
                                            null !== elem &&
                                            false === Array.isArray(elem) &&
                                            $vu2(
                                                elem,
                                                _path +
                                                    ".items[" +
                                                    _index39 +
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
                                $vo1(input, _path, false && _exceptionable) ||
                                $vo19(input, _path, false && _exceptionable) ||
                                $vo20(input, _path, false && _exceptionable) ||
                                $vo21(input, _path, false && _exceptionable) ||
                                $vo23(input, _path, false && _exceptionable) ||
                                $vo24(input, _path, false && _exceptionable) ||
                                $vo31(input, _path, false && _exceptionable)
                            );
                        })();
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Array<Resolve<IJsonApplication>>",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "Resolve<IJsonApplication>",
                                                value: elem,
                                            })) &&
                                            $vo0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "Resolve<IJsonApplication>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Array<Resolve<IJsonApplication>>",
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
            input = JSON.parse(input);
            const output = validate(input);
            return output;
        })(input),
    UltimateUnion.SPOILERS,
);
