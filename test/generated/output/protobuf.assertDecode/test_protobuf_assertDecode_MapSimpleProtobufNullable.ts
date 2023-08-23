import typia from "../../../../src";
import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobufNullable } from "../../../structures/MapSimpleProtobufNullable";

export const test_protobuf_assertDecode_MapSimpleProtobufNullable =
    _test_protobuf_assertDecode(
        "MapSimpleProtobufNullable",
    )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
        assertDecode: (input) =>
            ((input: Uint8Array): MapSimpleProtobufNullable => {
                const decode = (
                    input: Uint8Array,
                ): MapSimpleProtobufNullable => {
                    const $Reader = (typia.protobuf.assertDecode as any).Reader;
                    const $pdo0 = (reader: any, length: number = -1): any => {
                        length =
                            length < 0
                                ? reader.size()
                                : reader.index() + length;
                        const output = {
                            boolean: null as any,
                            int32: null as any,
                            bigint: null as any,
                            double: null as any,
                            string: null as any,
                            bytes: null as any,
                            objects: null as any,
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
                                                    // boolean;
                                                    entry.value = reader.bool();
                                                    break;
                                                default:
                                                    reader.skipType(kind & 7);
                                                    break;
                                            }
                                        }
                                        output.boolean.set(
                                            entry.key,
                                            entry.value,
                                        );
                                    })();
                                    break;
                                case 2:
                                    // type: Map<string, number>;
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
                                                    // number;
                                                    entry.value =
                                                        reader.int32();
                                                    break;
                                                default:
                                                    reader.skipType(kind & 7);
                                                    break;
                                            }
                                        }
                                        output.int32.set(
                                            entry.key,
                                            entry.value,
                                        );
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
                                                    // bigint;
                                                    entry.value =
                                                        reader.int64();
                                                    break;
                                                default:
                                                    reader.skipType(kind & 7);
                                                    break;
                                            }
                                        }
                                        output.bigint.set(
                                            entry.key,
                                            entry.value,
                                        );
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
                                                    // number;
                                                    entry.value =
                                                        reader.double();
                                                    break;
                                                default:
                                                    reader.skipType(kind & 7);
                                                    break;
                                            }
                                        }
                                        output.double.set(
                                            entry.key,
                                            entry.value,
                                        );
                                    })();
                                    break;
                                case 5:
                                    // type: Map<string, string>;
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
                                                    entry.value =
                                                        reader.string();
                                                    break;
                                                default:
                                                    reader.skipType(kind & 7);
                                                    break;
                                            }
                                        }
                                        output.string.set(
                                            entry.key,
                                            entry.value,
                                        );
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
                                                    entry.value =
                                                        reader.bytes();
                                                    break;
                                                default:
                                                    reader.skipType(kind & 7);
                                                    break;
                                            }
                                        }
                                        output.bytes.set(
                                            entry.key,
                                            entry.value,
                                        );
                                    })();
                                    break;
                                case 7:
                                    // type: Map<string, MapSimpleProtobufNullable>;
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
                                                    // MapSimpleProtobufNullable;
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
                                        output.objects.set(
                                            entry.key,
                                            entry.value,
                                        );
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
                const assert = (input: any): MapSimpleProtobufNullable => {
                    const __is = (
                        input: any,
                    ): input is MapSimpleProtobufNullable => {
                        const $io0 = (input: any): boolean =>
                            (null === input.boolean ||
                                (input.boolean instanceof Map &&
                                    (() =>
                                        [...input.boolean].every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.length === 2 &&
                                                "string" === typeof elem[0] &&
                                                "boolean" === typeof elem[1],
                                        ))())) &&
                            (null === input.int32 ||
                                (input.int32 instanceof Map &&
                                    (() =>
                                        [...input.int32].every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.length === 2 &&
                                                "string" === typeof elem[0] &&
                                                "number" === typeof elem[1] &&
                                                Number.isFinite(elem[1]) &&
                                                Math.floor(elem[1]) ===
                                                    elem[1] &&
                                                -2147483648 <= elem[1] &&
                                                elem[1] <= 2147483647,
                                        ))())) &&
                            (null === input.bigint ||
                                (input.bigint instanceof Map &&
                                    (() =>
                                        [...input.bigint].every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.length === 2 &&
                                                "string" === typeof elem[0] &&
                                                "bigint" === typeof elem[1],
                                        ))())) &&
                            (null === input.double ||
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
                            (null === input.string ||
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
                            (null === input.bytes ||
                                (input.bytes instanceof Map &&
                                    (() =>
                                        [...input.bytes].every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.length === 2 &&
                                                "string" === typeof elem[0] &&
                                                elem[1] instanceof Uint8Array,
                                        ))())) &&
                            (null === input.objects ||
                                (input.objects instanceof Map &&
                                    (() =>
                                        [...input.objects].every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.length === 2 &&
                                                "string" === typeof elem[0] &&
                                                "object" === typeof elem[1] &&
                                                null !== elem[1] &&
                                                $io0(elem[1]),
                                        ))()));
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is MapSimpleProtobufNullable => {
                            const $guard = (typia.protobuf.assertDecode as any)
                                .guard;
                            const $ao0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (null === input.boolean ||
                                    ((input.boolean instanceof Map ||
                                        $guard(_exceptionable, {
                                            path: _path + ".boolean",
                                            expected:
                                                "(Map<string, boolean> | null)",
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
                                                            expected:
                                                                "[string, boolean]",
                                                            value: elem,
                                                        })) &&
                                                        (elem.length === 2 ||
                                                            $guard(
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
                                                        ("string" ===
                                                            typeof elem[0] ||
                                                            $guard(
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
                                                            )) &&
                                                        ("boolean" ===
                                                            typeof elem[1] ||
                                                            $guard(
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
                                                            ))) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".boolean[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "[string, boolean]",
                                                        value: elem,
                                                    }),
                                            ))()) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".boolean",
                                        expected:
                                            "(Map<string, boolean> | null)",
                                        value: input.boolean,
                                    })) &&
                                (null === input.int32 ||
                                    ((input.int32 instanceof Map ||
                                        $guard(_exceptionable, {
                                            path: _path + ".int32",
                                            expected:
                                                "(Map<string, number> | null)",
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
                                                                "[string, number]",
                                                            value: elem,
                                                        })) &&
                                                        (elem.length === 2 ||
                                                            $guard(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".int32[" +
                                                                        _index2 +
                                                                        "]",
                                                                    expected:
                                                                        "[string, number]",
                                                                    value: elem,
                                                                },
                                                            )) &&
                                                        ("string" ===
                                                            typeof elem[0] ||
                                                            $guard(
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
                                                            )) &&
                                                        (("number" ===
                                                            typeof elem[1] &&
                                                            Number.isFinite(
                                                                elem[1],
                                                            ) &&
                                                            (Math.floor(
                                                                elem[1],
                                                            ) === elem[1] ||
                                                                $guard(
                                                                    _exceptionable,
                                                                    {
                                                                        path:
                                                                            _path +
                                                                            ".int32[" +
                                                                            _index2 +
                                                                            "][1]",
                                                                        expected:
                                                                            "number (@type int32)",
                                                                        value: elem[1],
                                                                    },
                                                                )) &&
                                                            ((-2147483648 <=
                                                                elem[1] &&
                                                                elem[1] <=
                                                                    2147483647) ||
                                                                $guard(
                                                                    _exceptionable,
                                                                    {
                                                                        path:
                                                                            _path +
                                                                            ".int32[" +
                                                                            _index2 +
                                                                            "][1]",
                                                                        expected:
                                                                            "number (@type int32)",
                                                                        value: elem[1],
                                                                    },
                                                                ))) ||
                                                            $guard(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".int32[" +
                                                                        _index2 +
                                                                        "][1]",
                                                                    expected:
                                                                        "number",
                                                                    value: elem[1],
                                                                },
                                                            ))) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".int32[" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "[string, number]",
                                                        value: elem,
                                                    }),
                                            ))()) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".int32",
                                        expected:
                                            "(Map<string, number> | null)",
                                        value: input.int32,
                                    })) &&
                                (null === input.bigint ||
                                    ((input.bigint instanceof Map ||
                                        $guard(_exceptionable, {
                                            path: _path + ".bigint",
                                            expected:
                                                "(Map<string, bigint> | null)",
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
                                                            expected:
                                                                "[string, bigint]",
                                                            value: elem,
                                                        })) &&
                                                        (elem.length === 2 ||
                                                            $guard(
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
                                                        ("string" ===
                                                            typeof elem[0] ||
                                                            $guard(
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
                                                            )) &&
                                                        ("bigint" ===
                                                            typeof elem[1] ||
                                                            $guard(
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
                                                            ))) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".bigint[" +
                                                            _index3 +
                                                            "]",
                                                        expected:
                                                            "[string, bigint]",
                                                        value: elem,
                                                    }),
                                            ))()) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".bigint",
                                        expected:
                                            "(Map<string, bigint> | null)",
                                        value: input.bigint,
                                    })) &&
                                (null === input.double ||
                                    ((input.double instanceof Map ||
                                        $guard(_exceptionable, {
                                            path: _path + ".double",
                                            expected:
                                                "(Map<string, number> | null)",
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
                                                            expected:
                                                                "[string, number]",
                                                            value: elem,
                                                        })) &&
                                                        (elem.length === 2 ||
                                                            $guard(
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
                                                        ("string" ===
                                                            typeof elem[0] ||
                                                            $guard(
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
                                                            )) &&
                                                        (("number" ===
                                                            typeof elem[1] &&
                                                            Number.isFinite(
                                                                elem[1],
                                                            )) ||
                                                            $guard(
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
                                                            ))) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".double[" +
                                                            _index4 +
                                                            "]",
                                                        expected:
                                                            "[string, number]",
                                                        value: elem,
                                                    }),
                                            ))()) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".double",
                                        expected:
                                            "(Map<string, number> | null)",
                                        value: input.double,
                                    })) &&
                                (null === input.string ||
                                    ((input.string instanceof Map ||
                                        $guard(_exceptionable, {
                                            path: _path + ".string",
                                            expected:
                                                "(Map<string, string> | null)",
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
                                                                "[string, string]",
                                                            value: elem,
                                                        })) &&
                                                        (elem.length === 2 ||
                                                            $guard(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".string[" +
                                                                        _index5 +
                                                                        "]",
                                                                    expected:
                                                                        "[string, string]",
                                                                    value: elem,
                                                                },
                                                            )) &&
                                                        ("string" ===
                                                            typeof elem[0] ||
                                                            $guard(
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
                                                            )) &&
                                                        (("string" ===
                                                            typeof elem[1] &&
                                                            (1 <=
                                                                elem[1]
                                                                    .length ||
                                                                $guard(
                                                                    _exceptionable,
                                                                    {
                                                                        path:
                                                                            _path +
                                                                            ".string[" +
                                                                            _index5 +
                                                                            "][1]",
                                                                        expected:
                                                                            "string (@minLength 1)",
                                                                        value: elem[1],
                                                                    },
                                                                ))) ||
                                                            $guard(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".string[" +
                                                                        _index5 +
                                                                        "][1]",
                                                                    expected:
                                                                        "string",
                                                                    value: elem[1],
                                                                },
                                                            ))) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".string[" +
                                                            _index5 +
                                                            "]",
                                                        expected:
                                                            "[string, string]",
                                                        value: elem,
                                                    }),
                                            ))()) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".string",
                                        expected:
                                            "(Map<string, string> | null)",
                                        value: input.string,
                                    })) &&
                                (null === input.bytes ||
                                    ((input.bytes instanceof Map ||
                                        $guard(_exceptionable, {
                                            path: _path + ".bytes",
                                            expected:
                                                "(Map<string, Uint8Array> | null)",
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
                                                            $guard(
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
                                                        ("string" ===
                                                            typeof elem[0] ||
                                                            $guard(
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
                                                            )) &&
                                                        (elem[1] instanceof
                                                            Uint8Array ||
                                                            $guard(
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
                                                            ))) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".bytes[" +
                                                            _index6 +
                                                            "]",
                                                        expected:
                                                            "[string, Uint8Array]",
                                                        value: elem,
                                                    }),
                                            ))()) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".bytes",
                                        expected:
                                            "(Map<string, Uint8Array> | null)",
                                        value: input.bytes,
                                    })) &&
                                (null === input.objects ||
                                    ((input.objects instanceof Map ||
                                        $guard(_exceptionable, {
                                            path: _path + ".objects",
                                            expected:
                                                "(Map<string, MapSimpleProtobufNullable> | null)",
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
                                                                "[string, MapSimpleProtobufNullable]",
                                                            value: elem,
                                                        })) &&
                                                        (elem.length === 2 ||
                                                            $guard(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".objects[" +
                                                                        _index7 +
                                                                        "]",
                                                                    expected:
                                                                        "[string, MapSimpleProtobufNullable]",
                                                                    value: elem,
                                                                },
                                                            )) &&
                                                        ("string" ===
                                                            typeof elem[0] ||
                                                            $guard(
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
                                                            )) &&
                                                        (((("object" ===
                                                            typeof elem[1] &&
                                                            null !== elem[1]) ||
                                                            $guard(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".objects[" +
                                                                        _index7 +
                                                                        "][1]",
                                                                    expected:
                                                                        "MapSimpleProtobufNullable",
                                                                    value: elem[1],
                                                                },
                                                            )) &&
                                                            $ao0(
                                                                elem[1],
                                                                _path +
                                                                    ".objects[" +
                                                                    _index7 +
                                                                    "][1]",
                                                                true &&
                                                                    _exceptionable,
                                                            )) ||
                                                            $guard(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".objects[" +
                                                                        _index7 +
                                                                        "][1]",
                                                                    expected:
                                                                        "MapSimpleProtobufNullable",
                                                                    value: elem[1],
                                                                },
                                                            ))) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".objects[" +
                                                            _index7 +
                                                            "]",
                                                        expected:
                                                            "[string, MapSimpleProtobufNullable]",
                                                        value: elem,
                                                    }),
                                            ))()) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".objects",
                                        expected:
                                            "(Map<string, MapSimpleProtobufNullable> | null)",
                                        value: input.objects,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "MapSimpleProtobufNullable",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "MapSimpleProtobufNullable",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const output = decode(input);
                return assert(output);
            })(input),
        encode: (input: MapSimpleProtobufNullable): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "boolean";
                    if (null != input.boolean) {
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
                    if (null != input.int32) {
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
                    if (null != input.bigint) {
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
                    if (null != input.double) {
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
                    if (null != input.string) {
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
                    if (null != input.bytes) {
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
                    if (null != input.objects) {
                        for (const [key, value] of input.objects) {
                            writer.uint32(58);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            // 2 -> MapSimpleProtobufNullable;
                            writer.uint32(18);
                            writer.fork();
                            $peo0(value);
                            writer.ldelim();
                            writer.ldelim();
                        }
                    }
                };
                const $io0 = (input: any): boolean =>
                    (null === input.boolean ||
                        (input.boolean instanceof Map &&
                            (() =>
                                [...input.boolean].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "boolean" === typeof elem[1],
                                ))())) &&
                    (null === input.int32 ||
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
                    (null === input.bigint ||
                        (input.bigint instanceof Map &&
                            (() =>
                                [...input.bigint].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "bigint" === typeof elem[1],
                                ))())) &&
                    (null === input.double ||
                        (input.double instanceof Map &&
                            (() =>
                                [...input.double].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "number" === typeof elem[1],
                                ))())) &&
                    (null === input.string ||
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
                    (null === input.bytes ||
                        (input.bytes instanceof Map &&
                            (() =>
                                [...input.bytes].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        elem[1] instanceof Uint8Array,
                                ))())) &&
                    (null === input.objects ||
                        (input.objects instanceof Map &&
                            (() =>
                                [...input.objects].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "object" === typeof elem[1] &&
                                        null !== elem[1] &&
                                        $io0(elem[1]),
                                ))()));
                //MapSimpleProtobufNullable;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
