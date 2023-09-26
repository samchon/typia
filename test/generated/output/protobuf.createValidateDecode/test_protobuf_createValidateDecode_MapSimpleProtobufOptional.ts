import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { MapSimpleProtobufOptional } from "../../../structures/MapSimpleProtobufOptional";

export const test_protobuf_createValidateDecode_MapSimpleProtobufOptional =
    _test_protobuf_validateDecode(
        "MapSimpleProtobufOptional",
    )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
        validateDecode: (
            input: Uint8Array,
        ): typia.IValidation<typia.Resolved<MapSimpleProtobufOptional>> => {
            const validate = (
                input: any,
            ): typia.IValidation<MapSimpleProtobufOptional> => {
                const errors = [] as any[];
                const __is = (
                    input: any,
                ): input is MapSimpleProtobufOptional => {
                    const $io0 = (input: any): boolean =>
                        (undefined === input.boolean ||
                            (input.boolean instanceof Map &&
                                (() =>
                                    [...input.boolean].every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "string" === typeof elem[0] &&
                                            "boolean" === typeof elem[1],
                                    ))())) &&
                        (undefined === input.int32 ||
                            (input.int32 instanceof Map &&
                                (() =>
                                    [...input.int32].every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "string" === typeof elem[0] &&
                                            "number" === typeof elem[1] &&
                                            Math.floor(elem[1]) === elem[1] &&
                                            -2147483648 <= elem[1] &&
                                            elem[1] <= 2147483647,
                                    ))())) &&
                        (undefined === input.bigint ||
                            (input.bigint instanceof Map &&
                                (() =>
                                    [...input.bigint].every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "string" === typeof elem[0] &&
                                            "bigint" === typeof elem[1],
                                    ))())) &&
                        (undefined === input.double ||
                            (input.double instanceof Map &&
                                (() =>
                                    [...input.double].every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "string" === typeof elem[0] &&
                                            "number" === typeof elem[1] &&
                                            Number.isFinite(elem[1]),
                                    ))())) &&
                        (undefined === input.string ||
                            (input.string instanceof Map &&
                                (() =>
                                    [...input.string].every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "string" === typeof elem[0] &&
                                            "string" === typeof elem[1] &&
                                            1 <= elem[1].length,
                                    ))())) &&
                        (undefined === input.bytes ||
                            (input.bytes instanceof Map &&
                                (() =>
                                    [...input.bytes].every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "string" === typeof elem[0] &&
                                            elem[1] instanceof Uint8Array,
                                    ))())) &&
                        (undefined === input.objects ||
                            (input.objects instanceof Map &&
                                (() =>
                                    [...input.objects].every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "string" === typeof elem[0] &&
                                            "object" === typeof elem[1] &&
                                            null !== elem[1] &&
                                            false === Array.isArray(elem[1]) &&
                                            $io0(elem[1]),
                                    ))()));
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input) &&
                        $io0(input)
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.protobuf.createValidateDecode as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is MapSimpleProtobufOptional => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                undefined === input.boolean ||
                                    ((input.boolean instanceof Map ||
                                        $report(_exceptionable, {
                                            path: _path + ".boolean",
                                            expected:
                                                "(Map<string, boolean> | undefined)",
                                            value: input.boolean,
                                        })) &&
                                        (() =>
                                            [...input.boolean]
                                                .map(
                                                    (
                                                        elem: any,
                                                        _index1: number,
                                                    ) =>
                                                        ((Array.isArray(elem) ||
                                                            $report(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".boolean[" +
                                                                        _index1 +
                                                                        "]",
                                                                    expected:
                                                                        "[string, boolean]",
                                                                    value: elem,
                                                                },
                                                            )) &&
                                                            (elem.length ===
                                                                2 ||
                                                                $report(
                                                                    _exceptionable,
                                                                    {
                                                                        path:
                                                                            _path +
                                                                            ".boolean[" +
                                                                            _index1 +
                                                                            "]",
                                                                        expected:
                                                                            "[string, boolean]",
                                                                        value: elem,
                                                                    },
                                                                )) &&
                                                            [
                                                                "string" ===
                                                                    typeof elem[0] ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                ".boolean[" +
                                                                                _index1 +
                                                                                "][0]",
                                                                            expected:
                                                                                "string",
                                                                            value: elem[0],
                                                                        },
                                                                    ),
                                                                "boolean" ===
                                                                    typeof elem[1] ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                ".boolean[" +
                                                                                _index1 +
                                                                                "][1]",
                                                                            expected:
                                                                                "boolean",
                                                                            value: elem[1],
                                                                        },
                                                                    ),
                                                            ].every(
                                                                (
                                                                    flag: boolean,
                                                                ) => flag,
                                                            )) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".boolean[" +
                                                                    _index1 +
                                                                    "]",
                                                                expected:
                                                                    "[string, boolean]",
                                                                value: elem,
                                                            },
                                                        ),
                                                )
                                                .every(
                                                    (flag: boolean) => flag,
                                                ))()) ||
                                    $report(_exceptionable, {
                                        path: _path + ".boolean",
                                        expected:
                                            "(Map<string, boolean> | undefined)",
                                        value: input.boolean,
                                    }),
                                undefined === input.int32 ||
                                    ((input.int32 instanceof Map ||
                                        $report(_exceptionable, {
                                            path: _path + ".int32",
                                            expected:
                                                '(Map<string, (number & Type<"int32">)> | undefined)',
                                            value: input.int32,
                                        })) &&
                                        (() =>
                                            [...input.int32]
                                                .map(
                                                    (
                                                        elem: any,
                                                        _index2: number,
                                                    ) =>
                                                        ((Array.isArray(elem) ||
                                                            $report(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".int32[" +
                                                                        _index2 +
                                                                        "]",
                                                                    expected:
                                                                        '[string, (number & Type<"int32">)]',
                                                                    value: elem,
                                                                },
                                                            )) &&
                                                            (elem.length ===
                                                                2 ||
                                                                $report(
                                                                    _exceptionable,
                                                                    {
                                                                        path:
                                                                            _path +
                                                                            ".int32[" +
                                                                            _index2 +
                                                                            "]",
                                                                        expected:
                                                                            '[string, (number & Type<"int32">)]',
                                                                        value: elem,
                                                                    },
                                                                )) &&
                                                            [
                                                                "string" ===
                                                                    typeof elem[0] ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                ".int32[" +
                                                                                _index2 +
                                                                                "][0]",
                                                                            expected:
                                                                                "string",
                                                                            value: elem[0],
                                                                        },
                                                                    ),
                                                                ("number" ===
                                                                    typeof elem[1] &&
                                                                    ((Math.floor(
                                                                        elem[1],
                                                                    ) ===
                                                                        elem[1] &&
                                                                        -2147483648 <=
                                                                            elem[1] &&
                                                                        elem[1] <=
                                                                            2147483647) ||
                                                                        $report(
                                                                            _exceptionable,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    ".int32[" +
                                                                                    _index2 +
                                                                                    "][1]",
                                                                                expected:
                                                                                    'number & Type<"int32">',
                                                                                value: elem[1],
                                                                            },
                                                                        ))) ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                ".int32[" +
                                                                                _index2 +
                                                                                "][1]",
                                                                            expected:
                                                                                '(number & Type<"int32">)',
                                                                            value: elem[1],
                                                                        },
                                                                    ),
                                                            ].every(
                                                                (
                                                                    flag: boolean,
                                                                ) => flag,
                                                            )) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".int32[" +
                                                                    _index2 +
                                                                    "]",
                                                                expected:
                                                                    '[string, (number & Type<"int32">)]',
                                                                value: elem,
                                                            },
                                                        ),
                                                )
                                                .every(
                                                    (flag: boolean) => flag,
                                                ))()) ||
                                    $report(_exceptionable, {
                                        path: _path + ".int32",
                                        expected:
                                            '(Map<string, (number & Type<"int32">)> | undefined)',
                                        value: input.int32,
                                    }),
                                undefined === input.bigint ||
                                    ((input.bigint instanceof Map ||
                                        $report(_exceptionable, {
                                            path: _path + ".bigint",
                                            expected:
                                                "(Map<string, bigint> | undefined)",
                                            value: input.bigint,
                                        })) &&
                                        (() =>
                                            [...input.bigint]
                                                .map(
                                                    (
                                                        elem: any,
                                                        _index3: number,
                                                    ) =>
                                                        ((Array.isArray(elem) ||
                                                            $report(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".bigint[" +
                                                                        _index3 +
                                                                        "]",
                                                                    expected:
                                                                        "[string, bigint]",
                                                                    value: elem,
                                                                },
                                                            )) &&
                                                            (elem.length ===
                                                                2 ||
                                                                $report(
                                                                    _exceptionable,
                                                                    {
                                                                        path:
                                                                            _path +
                                                                            ".bigint[" +
                                                                            _index3 +
                                                                            "]",
                                                                        expected:
                                                                            "[string, bigint]",
                                                                        value: elem,
                                                                    },
                                                                )) &&
                                                            [
                                                                "string" ===
                                                                    typeof elem[0] ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                ".bigint[" +
                                                                                _index3 +
                                                                                "][0]",
                                                                            expected:
                                                                                "string",
                                                                            value: elem[0],
                                                                        },
                                                                    ),
                                                                "bigint" ===
                                                                    typeof elem[1] ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                ".bigint[" +
                                                                                _index3 +
                                                                                "][1]",
                                                                            expected:
                                                                                "bigint",
                                                                            value: elem[1],
                                                                        },
                                                                    ),
                                                            ].every(
                                                                (
                                                                    flag: boolean,
                                                                ) => flag,
                                                            )) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".bigint[" +
                                                                    _index3 +
                                                                    "]",
                                                                expected:
                                                                    "[string, bigint]",
                                                                value: elem,
                                                            },
                                                        ),
                                                )
                                                .every(
                                                    (flag: boolean) => flag,
                                                ))()) ||
                                    $report(_exceptionable, {
                                        path: _path + ".bigint",
                                        expected:
                                            "(Map<string, bigint> | undefined)",
                                        value: input.bigint,
                                    }),
                                undefined === input.double ||
                                    ((input.double instanceof Map ||
                                        $report(_exceptionable, {
                                            path: _path + ".double",
                                            expected:
                                                "(Map<string, number> | undefined)",
                                            value: input.double,
                                        })) &&
                                        (() =>
                                            [...input.double]
                                                .map(
                                                    (
                                                        elem: any,
                                                        _index4: number,
                                                    ) =>
                                                        ((Array.isArray(elem) ||
                                                            $report(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".double[" +
                                                                        _index4 +
                                                                        "]",
                                                                    expected:
                                                                        "[string, number]",
                                                                    value: elem,
                                                                },
                                                            )) &&
                                                            (elem.length ===
                                                                2 ||
                                                                $report(
                                                                    _exceptionable,
                                                                    {
                                                                        path:
                                                                            _path +
                                                                            ".double[" +
                                                                            _index4 +
                                                                            "]",
                                                                        expected:
                                                                            "[string, number]",
                                                                        value: elem,
                                                                    },
                                                                )) &&
                                                            [
                                                                "string" ===
                                                                    typeof elem[0] ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                ".double[" +
                                                                                _index4 +
                                                                                "][0]",
                                                                            expected:
                                                                                "string",
                                                                            value: elem[0],
                                                                        },
                                                                    ),
                                                                ("number" ===
                                                                    typeof elem[1] &&
                                                                    Number.isFinite(
                                                                        elem[1],
                                                                    )) ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                ".double[" +
                                                                                _index4 +
                                                                                "][1]",
                                                                            expected:
                                                                                "number",
                                                                            value: elem[1],
                                                                        },
                                                                    ),
                                                            ].every(
                                                                (
                                                                    flag: boolean,
                                                                ) => flag,
                                                            )) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".double[" +
                                                                    _index4 +
                                                                    "]",
                                                                expected:
                                                                    "[string, number]",
                                                                value: elem,
                                                            },
                                                        ),
                                                )
                                                .every(
                                                    (flag: boolean) => flag,
                                                ))()) ||
                                    $report(_exceptionable, {
                                        path: _path + ".double",
                                        expected:
                                            "(Map<string, number> | undefined)",
                                        value: input.double,
                                    }),
                                undefined === input.string ||
                                    ((input.string instanceof Map ||
                                        $report(_exceptionable, {
                                            path: _path + ".string",
                                            expected:
                                                "(Map<string, (string & MinLength<1>)> | undefined)",
                                            value: input.string,
                                        })) &&
                                        (() =>
                                            [...input.string]
                                                .map(
                                                    (
                                                        elem: any,
                                                        _index5: number,
                                                    ) =>
                                                        ((Array.isArray(elem) ||
                                                            $report(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".string[" +
                                                                        _index5 +
                                                                        "]",
                                                                    expected:
                                                                        "[string, (string & MinLength<1>)]",
                                                                    value: elem,
                                                                },
                                                            )) &&
                                                            (elem.length ===
                                                                2 ||
                                                                $report(
                                                                    _exceptionable,
                                                                    {
                                                                        path:
                                                                            _path +
                                                                            ".string[" +
                                                                            _index5 +
                                                                            "]",
                                                                        expected:
                                                                            "[string, (string & MinLength<1>)]",
                                                                        value: elem,
                                                                    },
                                                                )) &&
                                                            [
                                                                "string" ===
                                                                    typeof elem[0] ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                ".string[" +
                                                                                _index5 +
                                                                                "][0]",
                                                                            expected:
                                                                                "string",
                                                                            value: elem[0],
                                                                        },
                                                                    ),
                                                                ("string" ===
                                                                    typeof elem[1] &&
                                                                    (1 <=
                                                                        elem[1]
                                                                            .length ||
                                                                        $report(
                                                                            _exceptionable,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    ".string[" +
                                                                                    _index5 +
                                                                                    "][1]",
                                                                                expected:
                                                                                    "string & MinLength<1>",
                                                                                value: elem[1],
                                                                            },
                                                                        ))) ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                ".string[" +
                                                                                _index5 +
                                                                                "][1]",
                                                                            expected:
                                                                                "(string & MinLength<1>)",
                                                                            value: elem[1],
                                                                        },
                                                                    ),
                                                            ].every(
                                                                (
                                                                    flag: boolean,
                                                                ) => flag,
                                                            )) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".string[" +
                                                                    _index5 +
                                                                    "]",
                                                                expected:
                                                                    "[string, (string & MinLength<1>)]",
                                                                value: elem,
                                                            },
                                                        ),
                                                )
                                                .every(
                                                    (flag: boolean) => flag,
                                                ))()) ||
                                    $report(_exceptionable, {
                                        path: _path + ".string",
                                        expected:
                                            "(Map<string, (string & MinLength<1>)> | undefined)",
                                        value: input.string,
                                    }),
                                undefined === input.bytes ||
                                    ((input.bytes instanceof Map ||
                                        $report(_exceptionable, {
                                            path: _path + ".bytes",
                                            expected:
                                                "(Map<string, Uint8Array> | undefined)",
                                            value: input.bytes,
                                        })) &&
                                        (() =>
                                            [...input.bytes]
                                                .map(
                                                    (
                                                        elem: any,
                                                        _index6: number,
                                                    ) =>
                                                        ((Array.isArray(elem) ||
                                                            $report(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".bytes[" +
                                                                        _index6 +
                                                                        "]",
                                                                    expected:
                                                                        "[string, Uint8Array]",
                                                                    value: elem,
                                                                },
                                                            )) &&
                                                            (elem.length ===
                                                                2 ||
                                                                $report(
                                                                    _exceptionable,
                                                                    {
                                                                        path:
                                                                            _path +
                                                                            ".bytes[" +
                                                                            _index6 +
                                                                            "]",
                                                                        expected:
                                                                            "[string, Uint8Array]",
                                                                        value: elem,
                                                                    },
                                                                )) &&
                                                            [
                                                                "string" ===
                                                                    typeof elem[0] ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                ".bytes[" +
                                                                                _index6 +
                                                                                "][0]",
                                                                            expected:
                                                                                "string",
                                                                            value: elem[0],
                                                                        },
                                                                    ),
                                                                elem[1] instanceof
                                                                    Uint8Array ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                ".bytes[" +
                                                                                _index6 +
                                                                                "][1]",
                                                                            expected:
                                                                                "Uint8Array",
                                                                            value: elem[1],
                                                                        },
                                                                    ),
                                                            ].every(
                                                                (
                                                                    flag: boolean,
                                                                ) => flag,
                                                            )) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".bytes[" +
                                                                    _index6 +
                                                                    "]",
                                                                expected:
                                                                    "[string, Uint8Array]",
                                                                value: elem,
                                                            },
                                                        ),
                                                )
                                                .every(
                                                    (flag: boolean) => flag,
                                                ))()) ||
                                    $report(_exceptionable, {
                                        path: _path + ".bytes",
                                        expected:
                                            "(Map<string, Uint8Array> | undefined)",
                                        value: input.bytes,
                                    }),
                                undefined === input.objects ||
                                    ((input.objects instanceof Map ||
                                        $report(_exceptionable, {
                                            path: _path + ".objects",
                                            expected:
                                                "(Map<string, MapSimpleProtobufOptional> | undefined)",
                                            value: input.objects,
                                        })) &&
                                        (() =>
                                            [...input.objects]
                                                .map(
                                                    (
                                                        elem: any,
                                                        _index7: number,
                                                    ) =>
                                                        ((Array.isArray(elem) ||
                                                            $report(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".objects[" +
                                                                        _index7 +
                                                                        "]",
                                                                    expected:
                                                                        "[string, MapSimpleProtobufOptional]",
                                                                    value: elem,
                                                                },
                                                            )) &&
                                                            (elem.length ===
                                                                2 ||
                                                                $report(
                                                                    _exceptionable,
                                                                    {
                                                                        path:
                                                                            _path +
                                                                            ".objects[" +
                                                                            _index7 +
                                                                            "]",
                                                                        expected:
                                                                            "[string, MapSimpleProtobufOptional]",
                                                                        value: elem,
                                                                    },
                                                                )) &&
                                                            [
                                                                "string" ===
                                                                    typeof elem[0] ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                ".objects[" +
                                                                                _index7 +
                                                                                "][0]",
                                                                            expected:
                                                                                "string",
                                                                            value: elem[0],
                                                                        },
                                                                    ),
                                                                ((("object" ===
                                                                    typeof elem[1] &&
                                                                    null !==
                                                                        elem[1] &&
                                                                    false ===
                                                                        Array.isArray(
                                                                            elem[1],
                                                                        )) ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                ".objects[" +
                                                                                _index7 +
                                                                                "][1]",
                                                                            expected:
                                                                                "MapSimpleProtobufOptional",
                                                                            value: elem[1],
                                                                        },
                                                                    )) &&
                                                                    $vo0(
                                                                        elem[1],
                                                                        _path +
                                                                            ".objects[" +
                                                                            _index7 +
                                                                            "][1]",
                                                                        true &&
                                                                            _exceptionable,
                                                                    )) ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                ".objects[" +
                                                                                _index7 +
                                                                                "][1]",
                                                                            expected:
                                                                                "MapSimpleProtobufOptional",
                                                                            value: elem[1],
                                                                        },
                                                                    ),
                                                            ].every(
                                                                (
                                                                    flag: boolean,
                                                                ) => flag,
                                                            )) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".objects[" +
                                                                    _index7 +
                                                                    "]",
                                                                expected:
                                                                    "[string, MapSimpleProtobufOptional]",
                                                                value: elem,
                                                            },
                                                        ),
                                                )
                                                .every(
                                                    (flag: boolean) => flag,
                                                ))()) ||
                                    $report(_exceptionable, {
                                        path: _path + ".objects",
                                        expected:
                                            "(Map<string, MapSimpleProtobufOptional> | undefined)",
                                        value: input.objects,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input &&
                                null !== input &&
                                false === Array.isArray(input)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "MapSimpleProtobufOptional",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "MapSimpleProtobufOptional",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const decode = (
                input: Uint8Array,
            ): typia.Resolved<MapSimpleProtobufOptional> => {
                const $Reader = (typia.protobuf.createValidateDecode as any)
                    .Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        boolean: undefined as any,
                        int32: undefined as any,
                        bigint: undefined as any,
                        double: undefined as any,
                        string: undefined as any,
                        bytes: undefined as any,
                        objects: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                // type: Map<string, boolean>;
                                (() => {
                                    output.boolean ??= new Map<any, any>();
                                    const piece =
                                        reader.uint32() + reader.index();
                                    const entry = {
                                        key: "" as any,
                                        value: undefined as any,
                                    };
                                    while (reader.index() < piece) {
                                        const kind = reader.uint32();
                                        switch (kind >>> 3) {
                                            case 1:
                                                // string;
                                                entry.key = reader.string();
                                                break;
                                            case 2:
                                                // bool;
                                                entry.value = reader.bool();
                                                break;
                                            default:
                                                reader.skipType(kind & 7);
                                                break;
                                        }
                                    }
                                    output.boolean.set(entry.key, entry.value);
                                })();
                                break;
                            case 2:
                                // type: Map<string, (number & Type<"int32">)>;
                                (() => {
                                    output.int32 ??= new Map<any, any>();
                                    const piece =
                                        reader.uint32() + reader.index();
                                    const entry = {
                                        key: "" as any,
                                        value: undefined as any,
                                    };
                                    while (reader.index() < piece) {
                                        const kind = reader.uint32();
                                        switch (kind >>> 3) {
                                            case 1:
                                                // string;
                                                entry.key = reader.string();
                                                break;
                                            case 2:
                                                // int32;
                                                entry.value = reader.int32();
                                                break;
                                            default:
                                                reader.skipType(kind & 7);
                                                break;
                                        }
                                    }
                                    output.int32.set(entry.key, entry.value);
                                })();
                                break;
                            case 3:
                                // type: Map<string, bigint>;
                                (() => {
                                    output.bigint ??= new Map<any, any>();
                                    const piece =
                                        reader.uint32() + reader.index();
                                    const entry = {
                                        key: "" as any,
                                        value: undefined as any,
                                    };
                                    while (reader.index() < piece) {
                                        const kind = reader.uint32();
                                        switch (kind >>> 3) {
                                            case 1:
                                                // string;
                                                entry.key = reader.string();
                                                break;
                                            case 2:
                                                // int64;
                                                entry.value = reader.int64();
                                                break;
                                            default:
                                                reader.skipType(kind & 7);
                                                break;
                                        }
                                    }
                                    output.bigint.set(entry.key, entry.value);
                                })();
                                break;
                            case 4:
                                // type: Map<string, number>;
                                (() => {
                                    output.double ??= new Map<any, any>();
                                    const piece =
                                        reader.uint32() + reader.index();
                                    const entry = {
                                        key: "" as any,
                                        value: undefined as any,
                                    };
                                    while (reader.index() < piece) {
                                        const kind = reader.uint32();
                                        switch (kind >>> 3) {
                                            case 1:
                                                // string;
                                                entry.key = reader.string();
                                                break;
                                            case 2:
                                                // double;
                                                entry.value = reader.double();
                                                break;
                                            default:
                                                reader.skipType(kind & 7);
                                                break;
                                        }
                                    }
                                    output.double.set(entry.key, entry.value);
                                })();
                                break;
                            case 5:
                                // type: Map<string, (string & MinLength<1>)>;
                                (() => {
                                    output.string ??= new Map<any, any>();
                                    const piece =
                                        reader.uint32() + reader.index();
                                    const entry = {
                                        key: "" as any,
                                        value: "" as any,
                                    };
                                    while (reader.index() < piece) {
                                        const kind = reader.uint32();
                                        switch (kind >>> 3) {
                                            case 1:
                                                // string;
                                                entry.key = reader.string();
                                                break;
                                            case 2:
                                                // string;
                                                entry.value = reader.string();
                                                break;
                                            default:
                                                reader.skipType(kind & 7);
                                                break;
                                        }
                                    }
                                    output.string.set(entry.key, entry.value);
                                })();
                                break;
                            case 6:
                                // type: Map<string, Uint8Array>;
                                (() => {
                                    output.bytes ??= new Map<any, any>();
                                    const piece =
                                        reader.uint32() + reader.index();
                                    const entry = {
                                        key: "" as any,
                                        value: new Uint8Array() as any,
                                    };
                                    while (reader.index() < piece) {
                                        const kind = reader.uint32();
                                        switch (kind >>> 3) {
                                            case 1:
                                                // string;
                                                entry.key = reader.string();
                                                break;
                                            case 2:
                                                // bytes;
                                                entry.value = reader.bytes();
                                                break;
                                            default:
                                                reader.skipType(kind & 7);
                                                break;
                                        }
                                    }
                                    output.bytes.set(entry.key, entry.value);
                                })();
                                break;
                            case 7:
                                // type: Map<string, MapSimpleProtobufOptional>;
                                (() => {
                                    output.objects ??= new Map<any, any>();
                                    const piece =
                                        reader.uint32() + reader.index();
                                    const entry = {
                                        key: "" as any,
                                        value: undefined as any,
                                    };
                                    while (reader.index() < piece) {
                                        const kind = reader.uint32();
                                        switch (kind >>> 3) {
                                            case 1:
                                                // string;
                                                entry.key = reader.string();
                                                break;
                                            case 2:
                                                // MapSimpleProtobufOptional;
                                                entry.value = $pdo0(
                                                    reader,
                                                    reader.uint32(),
                                                );
                                                break;
                                            default:
                                                reader.skipType(kind & 7);
                                                break;
                                        }
                                    }
                                    output.objects.set(entry.key, entry.value);
                                })();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const reader = new $Reader(input);
                return $pdo0(reader);
            };
            const output = decode(input);
            return validate(output) as any;
        },
        encode: (input: MapSimpleProtobufOptional): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "boolean";
                    if (undefined !== input.boolean) {
                        for (const [key, value] of input.boolean) {
                            writer.uint32(10);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            writer.uint32(16);
                            writer.bool(value);
                            writer.ldelim();
                        }
                    }
                    // property "int32";
                    if (undefined !== input.int32) {
                        for (const [key, value] of input.int32) {
                            writer.uint32(18);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            writer.uint32(16);
                            writer.int32(value);
                            writer.ldelim();
                        }
                    }
                    // property "bigint";
                    if (undefined !== input.bigint) {
                        for (const [key, value] of input.bigint) {
                            writer.uint32(26);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            writer.uint32(16);
                            writer.int64(value);
                            writer.ldelim();
                        }
                    }
                    // property "double";
                    if (undefined !== input.double) {
                        for (const [key, value] of input.double) {
                            writer.uint32(34);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            writer.uint32(17);
                            writer.double(value);
                            writer.ldelim();
                        }
                    }
                    // property "string";
                    if (undefined !== input.string) {
                        for (const [key, value] of input.string) {
                            writer.uint32(42);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            writer.uint32(18);
                            writer.string(value);
                            writer.ldelim();
                        }
                    }
                    // property "bytes";
                    if (undefined !== input.bytes) {
                        for (const [key, value] of input.bytes) {
                            writer.uint32(50);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            writer.uint32(18);
                            writer.bytes(value);
                            writer.ldelim();
                        }
                    }
                    // property "objects";
                    if (undefined !== input.objects) {
                        for (const [key, value] of input.objects) {
                            writer.uint32(58);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            // 2 -> MapSimpleProtobufOptional;
                            writer.uint32(18);
                            writer.fork();
                            $peo0(value);
                            writer.ldelim();
                            writer.ldelim();
                        }
                    }
                };
                const $io0 = (input: any): boolean =>
                    (undefined === input.boolean ||
                        (input.boolean instanceof Map &&
                            (() =>
                                [...input.boolean].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "boolean" === typeof elem[1],
                                ))())) &&
                    (undefined === input.int32 ||
                        (input.int32 instanceof Map &&
                            (() =>
                                [...input.int32].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "number" === typeof elem[1] &&
                                        Math.floor(elem[1]) === elem[1] &&
                                        -2147483648 <= elem[1] &&
                                        elem[1] <= 2147483647,
                                ))())) &&
                    (undefined === input.bigint ||
                        (input.bigint instanceof Map &&
                            (() =>
                                [...input.bigint].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "bigint" === typeof elem[1],
                                ))())) &&
                    (undefined === input.double ||
                        (input.double instanceof Map &&
                            (() =>
                                [...input.double].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "number" === typeof elem[1],
                                ))())) &&
                    (undefined === input.string ||
                        (input.string instanceof Map &&
                            (() =>
                                [...input.string].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "string" === typeof elem[1] &&
                                        1 <= elem[1].length,
                                ))())) &&
                    (undefined === input.bytes ||
                        (input.bytes instanceof Map &&
                            (() =>
                                [...input.bytes].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        elem[1] instanceof Uint8Array,
                                ))())) &&
                    (undefined === input.objects ||
                        (input.objects instanceof Map &&
                            (() =>
                                [...input.objects].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "object" === typeof elem[1] &&
                                        null !== elem[1] &&
                                        false === Array.isArray(elem[1]) &&
                                        $io0(elem[1]),
                                ))()));
                //MapSimpleProtobufOptional;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
