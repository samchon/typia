import typia from "../../../../src";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobuf } from "../../../structures/MapSimpleProtobuf";

export const test_notation_validateSnake_MapSimpleProtobuf =
    _test_notation_validateGeneral("MapSimpleProtobuf")<MapSimpleProtobuf>(
        MapSimpleProtobuf,
    )<typia.SnakeCase<MapSimpleProtobuf>>({
        convert: (input) =>
            ((
                input: any,
            ): typia.IValidation<typia.SnakeCase<MapSimpleProtobuf>> => {
                const validate = (
                    input: any,
                ): typia.IValidation<MapSimpleProtobuf> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is MapSimpleProtobuf => {
                        const $io0 = (input: any): boolean =>
                            input.boolean instanceof Map &&
                            (() =>
                                [...input.boolean].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "boolean" === typeof elem[1],
                                ))() &&
                            input.int32 instanceof Map &&
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
                                ))() &&
                            input.bigint instanceof Map &&
                            (() =>
                                [...input.bigint].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "bigint" === typeof elem[1],
                                ))() &&
                            input.double instanceof Map &&
                            (() =>
                                [...input.double].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "number" === typeof elem[1] &&
                                        Number.isFinite(elem[1]),
                                ))() &&
                            input.string instanceof Map &&
                            (() =>
                                [...input.string].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "string" === typeof elem[1] &&
                                        1 <= elem[1].length,
                                ))() &&
                            input.bytes instanceof Map &&
                            (() =>
                                [...input.bytes].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        elem[1] instanceof Uint8Array,
                                ))() &&
                            input.objects instanceof Map &&
                            (() =>
                                [...input.objects].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "object" === typeof elem[1] &&
                                        null !== elem[1] &&
                                        $io0(elem[1]),
                                ))();
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (
                            typia.notations.validateSnake as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is MapSimpleProtobuf => {
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    ((input.boolean instanceof Map ||
                                        $report(_exceptionable, {
                                            path: _path + ".boolean",
                                            expected: "Map<string, boolean>",
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
                                            expected: "Map<string, boolean>",
                                            value: input.boolean,
                                        }),
                                    ((input.int32 instanceof Map ||
                                        $report(_exceptionable, {
                                            path: _path + ".int32",
                                            expected:
                                                'Map<string, (number & Type<"int32">)>',
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
                                                'Map<string, (number & Type<"int32">)>',
                                            value: input.int32,
                                        }),
                                    ((input.bigint instanceof Map ||
                                        $report(_exceptionable, {
                                            path: _path + ".bigint",
                                            expected: "Map<string, bigint>",
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
                                            expected: "Map<string, bigint>",
                                            value: input.bigint,
                                        }),
                                    ((input.double instanceof Map ||
                                        $report(_exceptionable, {
                                            path: _path + ".double",
                                            expected: "Map<string, number>",
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
                                            expected: "Map<string, number>",
                                            value: input.double,
                                        }),
                                    ((input.string instanceof Map ||
                                        $report(_exceptionable, {
                                            path: _path + ".string",
                                            expected:
                                                "Map<string, (string & MinLength<1>)>",
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
                                                "Map<string, (string & MinLength<1>)>",
                                            value: input.string,
                                        }),
                                    ((input.bytes instanceof Map ||
                                        $report(_exceptionable, {
                                            path: _path + ".bytes",
                                            expected: "Map<string, Uint8Array>",
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
                                            expected: "Map<string, Uint8Array>",
                                            value: input.bytes,
                                        }),
                                    ((input.objects instanceof Map ||
                                        $report(_exceptionable, {
                                            path: _path + ".objects",
                                            expected:
                                                "Map<string, MapSimpleProtobuf>",
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
                                                                        "[string, MapSimpleProtobuf]",
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
                                                                            "[string, MapSimpleProtobuf]",
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
                                                                        elem[1]) ||
                                                                    $report(
                                                                        _exceptionable,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                ".objects[" +
                                                                                _index7 +
                                                                                "][1]",
                                                                            expected:
                                                                                "MapSimpleProtobuf",
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
                                                                                "MapSimpleProtobuf",
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
                                                                    "[string, MapSimpleProtobuf]",
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
                                                "Map<string, MapSimpleProtobuf>",
                                            value: input.objects,
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "MapSimpleProtobuf",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "MapSimpleProtobuf",
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
                const general = (
                    input: MapSimpleProtobuf,
                ): typia.SnakeCase<MapSimpleProtobuf> => {
                    const $io0 = (input: any): boolean =>
                        input.boolean instanceof Map &&
                        (() =>
                            [...input.boolean].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "boolean" === typeof elem[1],
                            ))() &&
                        input.int32 instanceof Map &&
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
                            ))() &&
                        input.bigint instanceof Map &&
                        (() =>
                            [...input.bigint].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "bigint" === typeof elem[1],
                            ))() &&
                        input.double instanceof Map &&
                        (() =>
                            [...input.double].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "number" === typeof elem[1],
                            ))() &&
                        input.string instanceof Map &&
                        (() =>
                            [...input.string].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "string" === typeof elem[1] &&
                                    1 <= elem[1].length,
                            ))() &&
                        input.bytes instanceof Map &&
                        (() =>
                            [...input.bytes].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    elem[1] instanceof Uint8Array,
                            ))() &&
                        input.objects instanceof Map &&
                        (() =>
                            [...input.objects].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "object" === typeof elem[1] &&
                                    null !== elem[1] &&
                                    $io0(elem[1]),
                            ))();
                    const $co0 = (input: any): any => ({
                        boolean:
                            input.boolean instanceof Map
                                ? (() =>
                                      new Map<any, any>(
                                          [...input.boolean].map((elem: any) =>
                                              Array.isArray(elem) &&
                                              elem.length === 2 &&
                                              "string" === typeof elem[0] &&
                                              "boolean" === typeof elem[1]
                                                  ? ([
                                                        elem[0] as any,
                                                        elem[1] as any,
                                                    ] as any)
                                                  : (elem as any),
                                          ),
                                      ))()
                                : (input.boolean as any),
                        int32:
                            input.int32 instanceof Map
                                ? (() =>
                                      new Map<any, any>(
                                          [...input.int32].map((elem: any) =>
                                              Array.isArray(elem) &&
                                              elem.length === 2 &&
                                              "string" === typeof elem[0] &&
                                              "number" === typeof elem[1] &&
                                              Math.floor(elem[1]) === elem[1] &&
                                              -2147483648 <= elem[1] &&
                                              elem[1] <= 2147483647
                                                  ? ([
                                                        elem[0] as any,
                                                        elem[1] as any,
                                                    ] as any)
                                                  : (elem as any),
                                          ),
                                      ))()
                                : (input.int32 as any),
                        bigint:
                            input.bigint instanceof Map
                                ? (() =>
                                      new Map<any, any>(
                                          [...input.bigint].map((elem: any) =>
                                              Array.isArray(elem) &&
                                              elem.length === 2 &&
                                              "string" === typeof elem[0] &&
                                              "bigint" === typeof elem[1]
                                                  ? ([
                                                        elem[0] as any,
                                                        elem[1] as any,
                                                    ] as any)
                                                  : (elem as any),
                                          ),
                                      ))()
                                : (input.bigint as any),
                        double:
                            input.double instanceof Map
                                ? (() =>
                                      new Map<any, any>(
                                          [...input.double].map((elem: any) =>
                                              Array.isArray(elem) &&
                                              elem.length === 2 &&
                                              "string" === typeof elem[0] &&
                                              "number" === typeof elem[1]
                                                  ? ([
                                                        elem[0] as any,
                                                        elem[1] as any,
                                                    ] as any)
                                                  : (elem as any),
                                          ),
                                      ))()
                                : (input.double as any),
                        string:
                            input.string instanceof Map
                                ? (() =>
                                      new Map<any, any>(
                                          [...input.string].map((elem: any) =>
                                              Array.isArray(elem) &&
                                              elem.length === 2 &&
                                              "string" === typeof elem[0] &&
                                              "string" === typeof elem[1] &&
                                              1 <= elem[1].length
                                                  ? ([
                                                        elem[0] as any,
                                                        elem[1] as any,
                                                    ] as any)
                                                  : (elem as any),
                                          ),
                                      ))()
                                : (input.string as any),
                        bytes:
                            input.bytes instanceof Map
                                ? (() =>
                                      new Map<any, any>(
                                          [...input.bytes].map((elem: any) =>
                                              Array.isArray(elem) &&
                                              elem.length === 2 &&
                                              "string" === typeof elem[0] &&
                                              elem[1] instanceof Uint8Array
                                                  ? ([
                                                        elem[0] as any,
                                                        elem[1] instanceof
                                                        Uint8Array
                                                            ? elem[1]
                                                            : (elem[1] as any),
                                                    ] as any)
                                                  : (elem as any),
                                          ),
                                      ))()
                                : (input.bytes as any),
                        objects:
                            input.objects instanceof Map
                                ? (() =>
                                      new Map<any, any>(
                                          [...input.objects].map((elem: any) =>
                                              Array.isArray(elem) &&
                                              elem.length === 2 &&
                                              "string" === typeof elem[0] &&
                                              "object" === typeof elem[1] &&
                                              null !== elem[1] &&
                                              $io0(elem[1])
                                                  ? ([
                                                        elem[0] as any,
                                                        "object" ===
                                                            typeof elem[1] &&
                                                        null !== elem[1]
                                                            ? $co0(elem[1])
                                                            : (elem[1] as any),
                                                    ] as any)
                                                  : (elem as any),
                                          ),
                                      ))()
                                : (input.objects as any),
                    });
                    return "object" === typeof input && null !== input
                        ? $co0(input)
                        : (input as any);
                };
                const output = validate(input) as any;
                if (output.success) output.data = general(input);
                return output;
            })(input),
        assert: (input: any): typia.SnakeCase<MapSimpleProtobuf> => {
            const __is = (
                input: any,
            ): input is typia.SnakeCase<MapSimpleProtobuf> => {
                const $io0 = (input: any): boolean =>
                    input.boolean instanceof Map &&
                    (() =>
                        [...input.boolean].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "string" === typeof elem[0] &&
                                "boolean" === typeof elem[1],
                        ))() &&
                    input.int32 instanceof Map &&
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
                        ))() &&
                    input.bigint instanceof Map &&
                    (() =>
                        [...input.bigint].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "string" === typeof elem[0] &&
                                "bigint" === typeof elem[1],
                        ))() &&
                    input.double instanceof Map &&
                    (() =>
                        [...input.double].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "string" === typeof elem[0] &&
                                "number" === typeof elem[1] &&
                                Number.isFinite(elem[1]),
                        ))() &&
                    input.string instanceof Map &&
                    (() =>
                        [...input.string].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "string" === typeof elem[0] &&
                                "string" === typeof elem[1] &&
                                1 <= elem[1].length,
                        ))() &&
                    input.bytes instanceof Map &&
                    (() =>
                        [...input.bytes].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "string" === typeof elem[0] &&
                                elem[1] instanceof Uint8Array,
                        ))() &&
                    input.objects instanceof Map &&
                    (() =>
                        [...input.objects].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "string" === typeof elem[0] &&
                                "object" === typeof elem[1] &&
                                null !== elem[1] &&
                                $io0(elem[1]),
                        ))();
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is typia.SnakeCase<MapSimpleProtobuf> => {
                    const $guard = (typia.createAssert as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((input.boolean instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".boolean",
                                expected: "Map<string, boolean>",
                                value: input.boolean,
                            })) &&
                            (() =>
                                [...input.boolean].every(
                                    (elem: any, _index1: number) =>
                                        ((Array.isArray(elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".boolean[" +
                                                    _index1 +
                                                    "]",
                                                expected: "[string, boolean]",
                                                value: elem,
                                            })) &&
                                            (elem.length === 2 ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".boolean[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "[string, boolean]",
                                                    value: elem,
                                                })) &&
                                            ("string" === typeof elem[0] ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".boolean[" +
                                                        _index1 +
                                                        "][0]",
                                                    expected: "string",
                                                    value: elem[0],
                                                })) &&
                                            ("boolean" === typeof elem[1] ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".boolean[" +
                                                        _index1 +
                                                        "][1]",
                                                    expected: "boolean",
                                                    value: elem[1],
                                                }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".boolean[" +
                                                _index1 +
                                                "]",
                                            expected: "[string, boolean]",
                                            value: elem,
                                        }),
                                ))()) ||
                            $guard(_exceptionable, {
                                path: _path + ".boolean",
                                expected: "Map<string, boolean>",
                                value: input.boolean,
                            })) &&
                        (((input.int32 instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".int32",
                                expected:
                                    'Map<string, (number & Type<"int32">)>',
                                value: input.int32,
                            })) &&
                            (() =>
                                [...input.int32].every(
                                    (elem: any, _index2: number) =>
                                        ((Array.isArray(elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".int32[" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    '[string, (number & Type<"int32">)]',
                                                value: elem,
                                            })) &&
                                            (elem.length === 2 ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".int32[" +
                                                        _index2 +
                                                        "]",
                                                    expected:
                                                        '[string, (number & Type<"int32">)]',
                                                    value: elem,
                                                })) &&
                                            ("string" === typeof elem[0] ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".int32[" +
                                                        _index2 +
                                                        "][0]",
                                                    expected: "string",
                                                    value: elem[0],
                                                })) &&
                                            (("number" === typeof elem[1] &&
                                                ((Math.floor(elem[1]) ===
                                                    elem[1] &&
                                                    -2147483648 <= elem[1] &&
                                                    elem[1] <= 2147483647) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".int32[" +
                                                            _index2 +
                                                            "][1]",
                                                        expected:
                                                            'number & Type<"int32">',
                                                        value: elem[1],
                                                    }))) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".int32[" +
                                                        _index2 +
                                                        "][1]",
                                                    expected:
                                                        '(number & Type<"int32">)',
                                                    value: elem[1],
                                                }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".int32[" +
                                                _index2 +
                                                "]",
                                            expected:
                                                '[string, (number & Type<"int32">)]',
                                            value: elem,
                                        }),
                                ))()) ||
                            $guard(_exceptionable, {
                                path: _path + ".int32",
                                expected:
                                    'Map<string, (number & Type<"int32">)>',
                                value: input.int32,
                            })) &&
                        (((input.bigint instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".bigint",
                                expected: "Map<string, bigint>",
                                value: input.bigint,
                            })) &&
                            (() =>
                                [...input.bigint].every(
                                    (elem: any, _index3: number) =>
                                        ((Array.isArray(elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".bigint[" +
                                                    _index3 +
                                                    "]",
                                                expected: "[string, bigint]",
                                                value: elem,
                                            })) &&
                                            (elem.length === 2 ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".bigint[" +
                                                        _index3 +
                                                        "]",
                                                    expected:
                                                        "[string, bigint]",
                                                    value: elem,
                                                })) &&
                                            ("string" === typeof elem[0] ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".bigint[" +
                                                        _index3 +
                                                        "][0]",
                                                    expected: "string",
                                                    value: elem[0],
                                                })) &&
                                            ("bigint" === typeof elem[1] ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".bigint[" +
                                                        _index3 +
                                                        "][1]",
                                                    expected: "bigint",
                                                    value: elem[1],
                                                }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".bigint[" +
                                                _index3 +
                                                "]",
                                            expected: "[string, bigint]",
                                            value: elem,
                                        }),
                                ))()) ||
                            $guard(_exceptionable, {
                                path: _path + ".bigint",
                                expected: "Map<string, bigint>",
                                value: input.bigint,
                            })) &&
                        (((input.double instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".double",
                                expected: "Map<string, number>",
                                value: input.double,
                            })) &&
                            (() =>
                                [...input.double].every(
                                    (elem: any, _index4: number) =>
                                        ((Array.isArray(elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".double[" +
                                                    _index4 +
                                                    "]",
                                                expected: "[string, number]",
                                                value: elem,
                                            })) &&
                                            (elem.length === 2 ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".double[" +
                                                        _index4 +
                                                        "]",
                                                    expected:
                                                        "[string, number]",
                                                    value: elem,
                                                })) &&
                                            ("string" === typeof elem[0] ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".double[" +
                                                        _index4 +
                                                        "][0]",
                                                    expected: "string",
                                                    value: elem[0],
                                                })) &&
                                            (("number" === typeof elem[1] &&
                                                Number.isFinite(elem[1])) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".double[" +
                                                        _index4 +
                                                        "][1]",
                                                    expected: "number",
                                                    value: elem[1],
                                                }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".double[" +
                                                _index4 +
                                                "]",
                                            expected: "[string, number]",
                                            value: elem,
                                        }),
                                ))()) ||
                            $guard(_exceptionable, {
                                path: _path + ".double",
                                expected: "Map<string, number>",
                                value: input.double,
                            })) &&
                        (((input.string instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".string",
                                expected:
                                    "Map<string, (string & MinLength<1>)>",
                                value: input.string,
                            })) &&
                            (() =>
                                [...input.string].every(
                                    (elem: any, _index5: number) =>
                                        ((Array.isArray(elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".string[" +
                                                    _index5 +
                                                    "]",
                                                expected:
                                                    "[string, (string & MinLength<1>)]",
                                                value: elem,
                                            })) &&
                                            (elem.length === 2 ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".string[" +
                                                        _index5 +
                                                        "]",
                                                    expected:
                                                        "[string, (string & MinLength<1>)]",
                                                    value: elem,
                                                })) &&
                                            ("string" === typeof elem[0] ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".string[" +
                                                        _index5 +
                                                        "][0]",
                                                    expected: "string",
                                                    value: elem[0],
                                                })) &&
                                            (("string" === typeof elem[1] &&
                                                (1 <= elem[1].length ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".string[" +
                                                            _index5 +
                                                            "][1]",
                                                        expected:
                                                            "string & MinLength<1>",
                                                        value: elem[1],
                                                    }))) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".string[" +
                                                        _index5 +
                                                        "][1]",
                                                    expected:
                                                        "(string & MinLength<1>)",
                                                    value: elem[1],
                                                }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".string[" +
                                                _index5 +
                                                "]",
                                            expected:
                                                "[string, (string & MinLength<1>)]",
                                            value: elem,
                                        }),
                                ))()) ||
                            $guard(_exceptionable, {
                                path: _path + ".string",
                                expected:
                                    "Map<string, (string & MinLength<1>)>",
                                value: input.string,
                            })) &&
                        (((input.bytes instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".bytes",
                                expected: "Map<string, Uint8Array>",
                                value: input.bytes,
                            })) &&
                            (() =>
                                [...input.bytes].every(
                                    (elem: any, _index6: number) =>
                                        ((Array.isArray(elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".bytes[" +
                                                    _index6 +
                                                    "]",
                                                expected:
                                                    "[string, Uint8Array]",
                                                value: elem,
                                            })) &&
                                            (elem.length === 2 ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".bytes[" +
                                                        _index6 +
                                                        "]",
                                                    expected:
                                                        "[string, Uint8Array]",
                                                    value: elem,
                                                })) &&
                                            ("string" === typeof elem[0] ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".bytes[" +
                                                        _index6 +
                                                        "][0]",
                                                    expected: "string",
                                                    value: elem[0],
                                                })) &&
                                            (elem[1] instanceof Uint8Array ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".bytes[" +
                                                        _index6 +
                                                        "][1]",
                                                    expected: "Uint8Array",
                                                    value: elem[1],
                                                }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".bytes[" +
                                                _index6 +
                                                "]",
                                            expected: "[string, Uint8Array]",
                                            value: elem,
                                        }),
                                ))()) ||
                            $guard(_exceptionable, {
                                path: _path + ".bytes",
                                expected: "Map<string, Uint8Array>",
                                value: input.bytes,
                            })) &&
                        (((input.objects instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".objects",
                                expected: "Map<string, MapSimpleProtobuf>",
                                value: input.objects,
                            })) &&
                            (() =>
                                [...input.objects].every(
                                    (elem: any, _index7: number) =>
                                        ((Array.isArray(elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".objects[" +
                                                    _index7 +
                                                    "]",
                                                expected:
                                                    "[string, MapSimpleProtobuf]",
                                                value: elem,
                                            })) &&
                                            (elem.length === 2 ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".objects[" +
                                                        _index7 +
                                                        "]",
                                                    expected:
                                                        "[string, MapSimpleProtobuf]",
                                                    value: elem,
                                                })) &&
                                            ("string" === typeof elem[0] ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".objects[" +
                                                        _index7 +
                                                        "][0]",
                                                    expected: "string",
                                                    value: elem[0],
                                                })) &&
                                            (((("object" === typeof elem[1] &&
                                                null !== elem[1]) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".objects[" +
                                                        _index7 +
                                                        "][1]",
                                                    expected:
                                                        "MapSimpleProtobuf",
                                                    value: elem[1],
                                                })) &&
                                                $ao0(
                                                    elem[1],
                                                    _path +
                                                        ".objects[" +
                                                        _index7 +
                                                        "][1]",
                                                    true && _exceptionable,
                                                )) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".objects[" +
                                                        _index7 +
                                                        "][1]",
                                                    expected:
                                                        "MapSimpleProtobuf",
                                                    value: elem[1],
                                                }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".objects[" +
                                                _index7 +
                                                "]",
                                            expected:
                                                "[string, MapSimpleProtobuf]",
                                            value: elem,
                                        }),
                                ))()) ||
                            $guard(_exceptionable, {
                                path: _path + ".objects",
                                expected: "Map<string, MapSimpleProtobuf>",
                                value: input.objects,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "MapSimpleProtobuf",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "MapSimpleProtobuf",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        },
    });
