import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_validateEquals_CommentTagType = _test_validateEquals(
    "CommentTagType",
)<CommentTagType>(CommentTagType)((input) =>
    ((input: any): typia.IValidation<CommentTagType> => {
        const errors = [] as any[];
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is CommentTagType => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any, _index1: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $io1(elem, true && _exceptionable),
                ) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["value"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io1 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "number" === typeof input.int &&
                Math.floor(input.int) === input.int &&
                -2147483648 <= input.int &&
                input.int <= 2147483647 &&
                "number" === typeof input.uint &&
                Math.floor(input.uint) === input.uint &&
                0 <= input.uint &&
                input.uint <= 4294967295 &&
                "number" === typeof input.int32 &&
                Math.floor(input.int32) === input.int32 &&
                -2147483648 <= input.int32 &&
                input.int32 <= 2147483647 &&
                "number" === typeof input.uint32 &&
                Math.floor(input.uint32) === input.uint32 &&
                0 <= input.uint32 &&
                input.uint32 <= 4294967295 &&
                "number" === typeof input.int64 &&
                Math.floor(input.int64) === input.int64 &&
                -9223372036854776000 <= input.int64 &&
                input.int64 <= 9223372036854776000 &&
                "number" === typeof input.uint64 &&
                Math.floor(input.uint64) === input.uint64 &&
                0 <= input.uint64 &&
                input.uint64 <= 18446744073709552000 &&
                "number" === typeof input.float &&
                -1.175494351e38 <= input.float &&
                input.float <= 3.4028235e38 &&
                (7 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            [
                                "int",
                                "uint",
                                "int32",
                                "uint32",
                                "int64",
                                "uint64",
                                "float",
                            ].some((prop: any) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        };
        if (false === __is(input)) {
            const $report = (typia.validateEquals as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is CommentTagType => {
                const $join = (typia.validateEquals as any).join;
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ((Array.isArray(input.value) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<CommentTagType.Type>",
                                value: input.value,
                            })) &&
                            input.value
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                expected: "CommentTagType.Type",
                                                value: elem,
                                            })) &&
                                            $vo1(
                                                elem,
                                                _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".value[" +
                                                _index1 +
                                                "]",
                                            expected: "CommentTagType.Type",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<CommentTagType.Type>",
                                value: input.value,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        ["value"].some(
                                            (prop: any) => key === prop,
                                        )
                                    )
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vo1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.int &&
                            ((Math.floor(input.int) === input.int &&
                                -2147483648 <= input.int &&
                                input.int <= 2147483647) ||
                                $report(_exceptionable, {
                                    path: _path + ".int",
                                    expected: "number & Type<int32>",
                                    value: input.int,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".int",
                                expected: "(number & Type<int32>)",
                                value: input.int,
                            }),
                        ("number" === typeof input.uint &&
                            ((Math.floor(input.uint) === input.uint &&
                                0 <= input.uint &&
                                input.uint <= 4294967295) ||
                                $report(_exceptionable, {
                                    path: _path + ".uint",
                                    expected: "number & Type<uint32>",
                                    value: input.uint,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".uint",
                                expected: "(number & Type<uint32>)",
                                value: input.uint,
                            }),
                        ("number" === typeof input.int32 &&
                            ((Math.floor(input.int32) === input.int32 &&
                                -2147483648 <= input.int32 &&
                                input.int32 <= 2147483647) ||
                                $report(_exceptionable, {
                                    path: _path + ".int32",
                                    expected: "number & Type<int32>",
                                    value: input.int32,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".int32",
                                expected: "(number & Type<int32>)",
                                value: input.int32,
                            }),
                        ("number" === typeof input.uint32 &&
                            ((Math.floor(input.uint32) === input.uint32 &&
                                0 <= input.uint32 &&
                                input.uint32 <= 4294967295) ||
                                $report(_exceptionable, {
                                    path: _path + ".uint32",
                                    expected: "number & Type<uint32>",
                                    value: input.uint32,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".uint32",
                                expected: "(number & Type<uint32>)",
                                value: input.uint32,
                            }),
                        ("number" === typeof input.int64 &&
                            ((Math.floor(input.int64) === input.int64 &&
                                -9223372036854776000 <= input.int64 &&
                                input.int64 <= 9223372036854776000) ||
                                $report(_exceptionable, {
                                    path: _path + ".int64",
                                    expected: "number & Type<int64>",
                                    value: input.int64,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".int64",
                                expected: "(number & Type<int64>)",
                                value: input.int64,
                            }),
                        ("number" === typeof input.uint64 &&
                            ((Math.floor(input.uint64) === input.uint64 &&
                                0 <= input.uint64 &&
                                input.uint64 <= 18446744073709552000) ||
                                $report(_exceptionable, {
                                    path: _path + ".uint64",
                                    expected: "number & Type<uint64>",
                                    value: input.uint64,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".uint64",
                                expected: "(number & Type<uint64>)",
                                value: input.uint64,
                            }),
                        ("number" === typeof input.float &&
                            ((-1.175494351e38 <= input.float &&
                                input.float <= 3.4028235e38) ||
                                $report(_exceptionable, {
                                    path: _path + ".float",
                                    expected: "number & Type<float>",
                                    value: input.float,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".float",
                                expected: "(number & Type<float>)",
                                value: input.float,
                            }),
                        7 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        [
                                            "int",
                                            "uint",
                                            "int32",
                                            "uint32",
                                            "int64",
                                            "uint64",
                                            "float",
                                        ].some((prop: any) => key === prop)
                                    )
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "CommentTagType",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "CommentTagType",
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
