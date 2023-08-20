import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ArraySimpleProtobuf } from "../../../structures/ArraySimpleProtobuf";

export const test_validate_ArraySimpleProtobuf =
    _test_validate<ArraySimpleProtobuf>(ArraySimpleProtobuf)((input) =>
        ((input: any): typia.IValidation<ArraySimpleProtobuf> => {
            const errors = [] as any[];
            const __is = (input: any): input is ArraySimpleProtobuf => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.boolean) &&
                    input.boolean.every(
                        (elem: any) => "boolean" === typeof elem,
                    ) &&
                    Array.isArray(input.int32) &&
                    input.int32.every(
                        (elem: any) =>
                            "number" === typeof elem &&
                            Number.isFinite(elem) &&
                            Math.floor(elem) === elem &&
                            -2147483648 <= elem &&
                            elem <= 2147483647,
                    ) &&
                    Array.isArray(input.uint32) &&
                    input.uint32.every(
                        (elem: any) =>
                            "number" === typeof elem &&
                            Number.isFinite(elem) &&
                            Math.floor(elem) === elem &&
                            0 <= elem &&
                            elem <= 4294967295,
                    ) &&
                    Array.isArray(input.int64) &&
                    input.int64.every(
                        (elem: any) => "bigint" === typeof elem,
                    ) &&
                    Array.isArray(input.uint64) &&
                    input.uint64.every(
                        (elem: any) =>
                            "bigint" === typeof elem && BigInt(0) <= elem,
                    ) &&
                    Array.isArray(input.float) &&
                    input.float.every(
                        (elem: any) =>
                            "number" === typeof elem &&
                            Number.isFinite(elem) &&
                            -1.175494351e38 <= elem &&
                            elem <= 3.4028235e38,
                    ) &&
                    Array.isArray(input.double) &&
                    input.double.every(
                        (elem: any) =>
                            "number" === typeof elem && Number.isFinite(elem),
                    ) &&
                    Array.isArray(input.string) &&
                    input.string.every(
                        (elem: any) => "string" === typeof elem,
                    ) &&
                    Array.isArray(input.bytes) &&
                    input.bytes.every(
                        (elem: any) => elem instanceof Uint8Array,
                    ) &&
                    Array.isArray(input.object) &&
                    input.object.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    );
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input)) {
                const $report = (typia.validate as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ArraySimpleProtobuf => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input.boolean) ||
                                $report(_exceptionable, {
                                    path: _path + ".boolean",
                                    expected: "Array<boolean>",
                                    value: input.boolean,
                                })) &&
                                input.boolean
                                    .map(
                                        (elem: any, _index1: number) =>
                                            "boolean" === typeof elem ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".boolean[" +
                                                    _index1 +
                                                    "]",
                                                expected: "boolean",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".boolean",
                                    expected: "Array<boolean>",
                                    value: input.boolean,
                                }),
                            ((Array.isArray(input.int32) ||
                                $report(_exceptionable, {
                                    path: _path + ".int32",
                                    expected: "Array<number>",
                                    value: input.int32,
                                })) &&
                                input.int32
                                    .map(
                                        (elem: any, _index2: number) =>
                                            ("number" === typeof elem &&
                                                Number.isFinite(elem) &&
                                                (Math.floor(elem) === elem ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".int32[" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "number (@type int32)",
                                                        value: elem,
                                                    })) &&
                                                ((-2147483648 <= elem &&
                                                    elem <= 2147483647) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".int32[" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "number (@type int32)",
                                                        value: elem,
                                                    }))) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".int32[" +
                                                    _index2 +
                                                    "]",
                                                expected: "number",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".int32",
                                    expected: "Array<number>",
                                    value: input.int32,
                                }),
                            ((Array.isArray(input.uint32) ||
                                $report(_exceptionable, {
                                    path: _path + ".uint32",
                                    expected: "Array<number>",
                                    value: input.uint32,
                                })) &&
                                input.uint32
                                    .map(
                                        (elem: any, _index3: number) =>
                                            ("number" === typeof elem &&
                                                Number.isFinite(elem) &&
                                                (Math.floor(elem) === elem ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".uint32[" +
                                                            _index3 +
                                                            "]",
                                                        expected:
                                                            "number (@type uint32)",
                                                        value: elem,
                                                    })) &&
                                                (0 <= elem ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".uint32[" +
                                                            _index3 +
                                                            "]",
                                                        expected:
                                                            "number (@type uint32)",
                                                        value: elem,
                                                    })) &&
                                                (elem <= 4294967295 ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".uint32[" +
                                                            _index3 +
                                                            "]",
                                                        expected:
                                                            "number (@type uint32)",
                                                        value: elem,
                                                    }))) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".uint32[" +
                                                    _index3 +
                                                    "]",
                                                expected: "number",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".uint32",
                                    expected: "Array<number>",
                                    value: input.uint32,
                                }),
                            ((Array.isArray(input.int64) ||
                                $report(_exceptionable, {
                                    path: _path + ".int64",
                                    expected: "Array<bigint>",
                                    value: input.int64,
                                })) &&
                                input.int64
                                    .map(
                                        (elem: any, _index4: number) =>
                                            "bigint" === typeof elem ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".int64[" +
                                                    _index4 +
                                                    "]",
                                                expected: "bigint",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".int64",
                                    expected: "Array<bigint>",
                                    value: input.int64,
                                }),
                            ((Array.isArray(input.uint64) ||
                                $report(_exceptionable, {
                                    path: _path + ".uint64",
                                    expected: "Array<bigint>",
                                    value: input.uint64,
                                })) &&
                                input.uint64
                                    .map(
                                        (elem: any, _index5: number) =>
                                            ("bigint" === typeof elem &&
                                                (BigInt(0) <= elem ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".uint64[" +
                                                            _index5 +
                                                            "]",
                                                        expected:
                                                            "bigint (@type uint64)",
                                                        value: elem,
                                                    }))) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".uint64[" +
                                                    _index5 +
                                                    "]",
                                                expected: "bigint",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".uint64",
                                    expected: "Array<bigint>",
                                    value: input.uint64,
                                }),
                            ((Array.isArray(input.float) ||
                                $report(_exceptionable, {
                                    path: _path + ".float",
                                    expected: "Array<number>",
                                    value: input.float,
                                })) &&
                                input.float
                                    .map(
                                        (elem: any, _index6: number) =>
                                            ("number" === typeof elem &&
                                                Number.isFinite(elem) &&
                                                ((-1.175494351e38 <= elem &&
                                                    elem <= 3.4028235e38) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".float[" +
                                                            _index6 +
                                                            "]",
                                                        expected:
                                                            "number (@type float)",
                                                        value: elem,
                                                    }))) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".float[" +
                                                    _index6 +
                                                    "]",
                                                expected: "number",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".float",
                                    expected: "Array<number>",
                                    value: input.float,
                                }),
                            ((Array.isArray(input.double) ||
                                $report(_exceptionable, {
                                    path: _path + ".double",
                                    expected: "Array<number>",
                                    value: input.double,
                                })) &&
                                input.double
                                    .map(
                                        (elem: any, _index7: number) =>
                                            ("number" === typeof elem &&
                                                Number.isFinite(elem)) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".double[" +
                                                    _index7 +
                                                    "]",
                                                expected: "number",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".double",
                                    expected: "Array<number>",
                                    value: input.double,
                                }),
                            ((Array.isArray(input.string) ||
                                $report(_exceptionable, {
                                    path: _path + ".string",
                                    expected: "Array<string>",
                                    value: input.string,
                                })) &&
                                input.string
                                    .map(
                                        (elem: any, _index8: number) =>
                                            "string" === typeof elem ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".string[" +
                                                    _index8 +
                                                    "]",
                                                expected: "string",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".string",
                                    expected: "Array<string>",
                                    value: input.string,
                                }),
                            ((Array.isArray(input.bytes) ||
                                $report(_exceptionable, {
                                    path: _path + ".bytes",
                                    expected: "Array<Uint8Array>",
                                    value: input.bytes,
                                })) &&
                                input.bytes
                                    .map(
                                        (elem: any, _index9: number) =>
                                            elem instanceof Uint8Array ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".bytes[" +
                                                    _index9 +
                                                    "]",
                                                expected: "Uint8Array",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".bytes",
                                    expected: "Array<Uint8Array>",
                                    value: input.bytes,
                                }),
                            ((Array.isArray(input.object) ||
                                $report(_exceptionable, {
                                    path: _path + ".object",
                                    expected: "Array<ArraySimpleProtobuf>",
                                    value: input.object,
                                })) &&
                                input.object
                                    .map(
                                        (elem: any, _index10: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".object[" +
                                                        _index10 +
                                                        "]",
                                                    expected:
                                                        "ArraySimpleProtobuf",
                                                    value: elem,
                                                })) &&
                                                $vo0(
                                                    elem,
                                                    _path +
                                                        ".object[" +
                                                        _index10 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".object[" +
                                                    _index10 +
                                                    "]",
                                                expected: "ArraySimpleProtobuf",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".object",
                                    expected: "Array<ArraySimpleProtobuf>",
                                    value: input.object,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ArraySimpleProtobuf",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ArraySimpleProtobuf",
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
        })(input),
    );
