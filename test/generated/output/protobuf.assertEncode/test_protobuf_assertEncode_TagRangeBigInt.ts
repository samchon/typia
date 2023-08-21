import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { TagRangeBigInt } from "../../../structures/TagRangeBigInt";

export const test_protobuf_assertEncode_TagRangeBigInt =
    _test_protobuf_assertEncode("TagRangeBigInt")<TagRangeBigInt>(
        TagRangeBigInt,
    )({
        assertEncode: (input) =>
            ((input: any): Uint8Array => {
                const assert = (input: any): TagRangeBigInt => {
                    const __is = (input: any): input is TagRangeBigInt => {
                        const $io0 = (input: any): boolean =>
                            Array.isArray(input.value) &&
                            input.value.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io1(elem),
                            );
                        const $io1 = (input: any): boolean =>
                            "bigint" === typeof input.greater &&
                            BigInt(3) < input.greater &&
                            "bigint" === typeof input.greater_equal &&
                            BigInt(3) <= input.greater_equal &&
                            "bigint" === typeof input.less &&
                            BigInt(7) > input.less &&
                            "bigint" === typeof input.less_equal &&
                            BigInt(7) >= input.less_equal &&
                            "bigint" === typeof input.greater_less &&
                            BigInt(3) < input.greater_less &&
                            BigInt(7) > input.greater_less &&
                            "bigint" === typeof input.greater_equal_less &&
                            BigInt(3) <= input.greater_equal_less &&
                            BigInt(7) > input.greater_equal_less &&
                            "bigint" === typeof input.greater_less_equal &&
                            BigInt(3) < input.greater_less_equal &&
                            BigInt(7) >= input.greater_less_equal &&
                            "bigint" ===
                                typeof input.greater_equal_less_equal &&
                            BigInt(3) <= input.greater_equal_less_equal &&
                            BigInt(7) >= input.greater_equal_less_equal &&
                            "bigint" === typeof input.equal &&
                            BigInt(10) <= input.equal &&
                            BigInt(10) >= input.equal;
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
                        ): input is TagRangeBigInt => {
                            const $guard = (typia.protobuf.assertEncode as any)
                                .guard;
                            const $ao0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                ((Array.isArray(input.value) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagRangeBigInt.Type>",
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
                                                    expected:
                                                        "TagRangeBigInt.Type",
                                                    value: elem,
                                                })) &&
                                                $ao1(
                                                    elem,
                                                    _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                expected: "TagRangeBigInt.Type",
                                                value: elem,
                                            }),
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Array<TagRangeBigInt.Type>",
                                    value: input.value,
                                });
                            const $ao1 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (("bigint" === typeof input.greater &&
                                    (BigInt(3) < input.greater ||
                                        $guard(_exceptionable, {
                                            path: _path + ".greater",
                                            expected:
                                                "bigint (@exclusiveMinimum 3)",
                                            value: input.greater,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".greater",
                                        expected: "bigint",
                                        value: input.greater,
                                    })) &&
                                (("bigint" === typeof input.greater_equal &&
                                    (BigInt(3) <= input.greater_equal ||
                                        $guard(_exceptionable, {
                                            path: _path + ".greater_equal",
                                            expected: "bigint (@minimum 3)",
                                            value: input.greater_equal,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".greater_equal",
                                        expected: "bigint",
                                        value: input.greater_equal,
                                    })) &&
                                (("bigint" === typeof input.less &&
                                    (BigInt(7) > input.less ||
                                        $guard(_exceptionable, {
                                            path: _path + ".less",
                                            expected:
                                                "bigint (@exclusiveMaximum 7)",
                                            value: input.less,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".less",
                                        expected: "bigint",
                                        value: input.less,
                                    })) &&
                                (("bigint" === typeof input.less_equal &&
                                    (BigInt(7) >= input.less_equal ||
                                        $guard(_exceptionable, {
                                            path: _path + ".less_equal",
                                            expected: "bigint (@maximum 7)",
                                            value: input.less_equal,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".less_equal",
                                        expected: "bigint",
                                        value: input.less_equal,
                                    })) &&
                                (("bigint" === typeof input.greater_less &&
                                    (BigInt(3) < input.greater_less ||
                                        $guard(_exceptionable, {
                                            path: _path + ".greater_less",
                                            expected:
                                                "bigint (@exclusiveMinimum 3)",
                                            value: input.greater_less,
                                        })) &&
                                    (BigInt(7) > input.greater_less ||
                                        $guard(_exceptionable, {
                                            path: _path + ".greater_less",
                                            expected:
                                                "bigint (@exclusiveMaximum 7)",
                                            value: input.greater_less,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".greater_less",
                                        expected: "bigint",
                                        value: input.greater_less,
                                    })) &&
                                (("bigint" ===
                                    typeof input.greater_equal_less &&
                                    (BigInt(3) <= input.greater_equal_less ||
                                        $guard(_exceptionable, {
                                            path: _path + ".greater_equal_less",
                                            expected: "bigint (@minimum 3)",
                                            value: input.greater_equal_less,
                                        })) &&
                                    (BigInt(7) > input.greater_equal_less ||
                                        $guard(_exceptionable, {
                                            path: _path + ".greater_equal_less",
                                            expected:
                                                "bigint (@exclusiveMaximum 7)",
                                            value: input.greater_equal_less,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".greater_equal_less",
                                        expected: "bigint",
                                        value: input.greater_equal_less,
                                    })) &&
                                (("bigint" ===
                                    typeof input.greater_less_equal &&
                                    (BigInt(3) < input.greater_less_equal ||
                                        $guard(_exceptionable, {
                                            path: _path + ".greater_less_equal",
                                            expected:
                                                "bigint (@exclusiveMinimum 3)",
                                            value: input.greater_less_equal,
                                        })) &&
                                    (BigInt(7) >= input.greater_less_equal ||
                                        $guard(_exceptionable, {
                                            path: _path + ".greater_less_equal",
                                            expected: "bigint (@maximum 7)",
                                            value: input.greater_less_equal,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".greater_less_equal",
                                        expected: "bigint",
                                        value: input.greater_less_equal,
                                    })) &&
                                (("bigint" ===
                                    typeof input.greater_equal_less_equal &&
                                    (BigInt(3) <=
                                        input.greater_equal_less_equal ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: "bigint (@minimum 3)",
                                            value: input.greater_equal_less_equal,
                                        })) &&
                                    (BigInt(7) >=
                                        input.greater_equal_less_equal ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: "bigint (@maximum 7)",
                                            value: input.greater_equal_less_equal,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".greater_equal_less_equal",
                                        expected: "bigint",
                                        value: input.greater_equal_less_equal,
                                    })) &&
                                (("bigint" === typeof input.equal &&
                                    (BigInt(10) <= input.equal ||
                                        $guard(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: "bigint (@minimum 10)",
                                            value: input.equal,
                                        })) &&
                                    (BigInt(10) >= input.equal ||
                                        $guard(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: "bigint (@maximum 10)",
                                            value: input.equal,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".equal",
                                        expected: "bigint",
                                        value: input.equal,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "TagRangeBigInt",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "TagRangeBigInt",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const encode = (input: TagRangeBigInt): Uint8Array => {
                    const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
                    const $Writer = (typia.protobuf.assertEncode as any).Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "value";
                            if (0 !== input.value.length) {
                                for (const elem of input.value) {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo1(elem);
                                    writer.ldelim();
                                }
                            }
                        };
                        const $peo1 = (input: any): any => {
                            // property "greater";
                            writer.uint32(8);
                            writer.int64(input.greater);
                            // property "greater_equal";
                            writer.uint32(16);
                            writer.int64(input.greater_equal);
                            // property "less";
                            writer.uint32(24);
                            writer.int64(input.less);
                            // property "less_equal";
                            writer.uint32(32);
                            writer.int64(input.less_equal);
                            // property "greater_less";
                            writer.uint32(40);
                            writer.int64(input.greater_less);
                            // property "greater_equal_less";
                            writer.uint32(48);
                            writer.int64(input.greater_equal_less);
                            // property "greater_less_equal";
                            writer.uint32(56);
                            writer.int64(input.greater_less_equal);
                            // property "greater_equal_less_equal";
                            writer.uint32(64);
                            writer.int64(input.greater_equal_less_equal);
                            // property "equal";
                            writer.uint32(72);
                            writer.int64(input.equal);
                        };
                        const $io1 = (input: any): boolean =>
                            "bigint" === typeof input.greater &&
                            BigInt(3) < input.greater &&
                            "bigint" === typeof input.greater_equal &&
                            BigInt(3) <= input.greater_equal &&
                            "bigint" === typeof input.less &&
                            BigInt(7) > input.less &&
                            "bigint" === typeof input.less_equal &&
                            BigInt(7) >= input.less_equal &&
                            "bigint" === typeof input.greater_less &&
                            BigInt(3) < input.greater_less &&
                            BigInt(7) > input.greater_less &&
                            "bigint" === typeof input.greater_equal_less &&
                            BigInt(3) <= input.greater_equal_less &&
                            BigInt(7) > input.greater_equal_less &&
                            "bigint" === typeof input.greater_less_equal &&
                            BigInt(3) < input.greater_less_equal &&
                            BigInt(7) >= input.greater_less_equal &&
                            "bigint" ===
                                typeof input.greater_equal_less_equal &&
                            BigInt(3) <= input.greater_equal_less_equal &&
                            BigInt(7) >= input.greater_equal_less_equal &&
                            "bigint" === typeof input.equal &&
                            BigInt(10) <= input.equal &&
                            BigInt(10) >= input.equal;
                        $peo0(input);
                        return writer;
                    };
                    const sizer = encoder(new $Sizer());
                    const writer = encoder(new $Writer(sizer));
                    return writer.buffer();
                };
                return encode(assert(input));
            })(input),
        message:
            'syntax = "proto3";\n\nmessage TagRangeBigInt {\n    repeated TagRangeBigInt.Type value = 1;\n    message Type {\n        required int64 greater = 1;\n        required int64 greater_equal = 2;\n        required int64 less = 3;\n        required int64 less_equal = 4;\n        required int64 greater_less = 5;\n        required int64 greater_equal_less = 6;\n        required int64 greater_less_equal = 7;\n        required int64 greater_equal_less_equal = 8;\n        required int64 equal = 9;\n    }\n}',
    });
