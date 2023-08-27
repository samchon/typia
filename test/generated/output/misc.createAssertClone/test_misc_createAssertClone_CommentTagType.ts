import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_misc_assertClone_CommentTagType = _test_misc_assertClone(
    "CommentTagType",
)<CommentTagType>(CommentTagType)(
    (input: any): typia.Resolved<CommentTagType> => {
        const assert = (input: any): CommentTagType => {
            const __is = (input: any): input is CommentTagType => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
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
                    input.float <= 3.4028235e38;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is CommentTagType => {
                    const $guard = (typia.misc.createAssertClone as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ((Array.isArray(input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<CommentTagType.Type>",
                                value: input.value,
                            })) &&
                            input.value.every(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".value[" +
                                                _index1 +
                                                "]",
                                            expected: "CommentTagType.Type",
                                            value: elem,
                                        })) &&
                                        $ao1(
                                            elem,
                                            _path + ".value[" + _index1 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "CommentTagType.Type",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<CommentTagType.Type>",
                            value: input.value,
                        });
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.int &&
                            ((Math.floor(input.int) === input.int &&
                                -2147483648 <= input.int &&
                                input.int <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".int",
                                    expected: "number & Type<int32>",
                                    value: input.int,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".int",
                                expected: "(number & Type<int32>)",
                                value: input.int,
                            })) &&
                        (("number" === typeof input.uint &&
                            ((Math.floor(input.uint) === input.uint &&
                                0 <= input.uint &&
                                input.uint <= 4294967295) ||
                                $guard(_exceptionable, {
                                    path: _path + ".uint",
                                    expected: "number & Type<uint32>",
                                    value: input.uint,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".uint",
                                expected: "(number & Type<uint32>)",
                                value: input.uint,
                            })) &&
                        (("number" === typeof input.int32 &&
                            ((Math.floor(input.int32) === input.int32 &&
                                -2147483648 <= input.int32 &&
                                input.int32 <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".int32",
                                    expected: "number & Type<int32>",
                                    value: input.int32,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".int32",
                                expected: "(number & Type<int32>)",
                                value: input.int32,
                            })) &&
                        (("number" === typeof input.uint32 &&
                            ((Math.floor(input.uint32) === input.uint32 &&
                                0 <= input.uint32 &&
                                input.uint32 <= 4294967295) ||
                                $guard(_exceptionable, {
                                    path: _path + ".uint32",
                                    expected: "number & Type<uint32>",
                                    value: input.uint32,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".uint32",
                                expected: "(number & Type<uint32>)",
                                value: input.uint32,
                            })) &&
                        (("number" === typeof input.int64 &&
                            ((Math.floor(input.int64) === input.int64 &&
                                -9223372036854776000 <= input.int64 &&
                                input.int64 <= 9223372036854776000) ||
                                $guard(_exceptionable, {
                                    path: _path + ".int64",
                                    expected: "number & Type<int64>",
                                    value: input.int64,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".int64",
                                expected: "(number & Type<int64>)",
                                value: input.int64,
                            })) &&
                        (("number" === typeof input.uint64 &&
                            ((Math.floor(input.uint64) === input.uint64 &&
                                0 <= input.uint64 &&
                                input.uint64 <= 18446744073709552000) ||
                                $guard(_exceptionable, {
                                    path: _path + ".uint64",
                                    expected: "number & Type<uint64>",
                                    value: input.uint64,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".uint64",
                                expected: "(number & Type<uint64>)",
                                value: input.uint64,
                            })) &&
                        (("number" === typeof input.float &&
                            ((-1.175494351e38 <= input.float &&
                                input.float <= 3.4028235e38) ||
                                $guard(_exceptionable, {
                                    path: _path + ".float",
                                    expected: "number & Type<float>",
                                    value: input.float,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".float",
                                expected: "(number & Type<float>)",
                                value: input.float,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "CommentTagType",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "CommentTagType",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const clone = (
            input: CommentTagType,
        ): typia.Resolved<CommentTagType> => {
            const $io1 = (input: any): boolean =>
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
                input.float <= 3.4028235e38;
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co1(elem)
                        : (elem as any),
                );
            const $co0 = (input: any): any => ({
                value: Array.isArray(input.value)
                    ? $cp0(input.value)
                    : (input.value as any),
            });
            const $co1 = (input: any): any => ({
                int: input.int as any,
                uint: input.uint as any,
                int32: input.int32 as any,
                uint32: input.uint32 as any,
                int64: input.int64 as any,
                uint64: input.uint64 as any,
                float: input.float as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
);
