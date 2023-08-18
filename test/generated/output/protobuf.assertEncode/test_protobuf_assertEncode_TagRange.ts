import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { TagRange } from "../../../structures/TagRange";

export const test_protobuf_assertEncode_TagRange =
    _test_protobuf_assertEncode<TagRange>(TagRange)({
        assertEncode: (input) =>
            ((input: any): Uint8Array => {
                const assert = (input: any): TagRange => {
                    const __is = (input: any): input is TagRange => {
                        const $io0 = (input: any): boolean =>
                            Array.isArray(input.value) &&
                            input.value.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io1(elem),
                            );
                        const $io1 = (input: any): boolean =>
                            "number" === typeof input.greater &&
                            Number.isFinite(input.greater) &&
                            3 < input.greater &&
                            "number" === typeof input.greater_equal &&
                            Number.isFinite(input.greater_equal) &&
                            3 <= input.greater_equal &&
                            "number" === typeof input.less &&
                            Number.isFinite(input.less) &&
                            7 > input.less &&
                            "number" === typeof input.less_equal &&
                            Number.isFinite(input.less_equal) &&
                            7 >= input.less_equal &&
                            "number" === typeof input.greater_less &&
                            3 < input.greater_less &&
                            7 > input.greater_less &&
                            "number" === typeof input.greater_equal_less &&
                            3 <= input.greater_equal_less &&
                            7 > input.greater_equal_less &&
                            "number" === typeof input.greater_less_equal &&
                            3 < input.greater_less_equal &&
                            7 >= input.greater_less_equal &&
                            "number" ===
                                typeof input.greater_equal_less_equal &&
                            3 <= input.greater_equal_less_equal &&
                            7 >= input.greater_equal_less_equal &&
                            "number" === typeof input.equal &&
                            10 <= input.equal &&
                            10 >= input.equal;
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
                        ): input is TagRange => {
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
                                        expected: "Array<TagRange.Type>",
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
                                                    expected: "TagRange.Type",
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
                                                expected: "TagRange.Type",
                                                value: elem,
                                            }),
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Array<TagRange.Type>",
                                    value: input.value,
                                });
                            const $ao1 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (("number" === typeof input.greater &&
                                    Number.isFinite(input.greater) &&
                                    (3 < input.greater ||
                                        $guard(_exceptionable, {
                                            path: _path + ".greater",
                                            expected:
                                                "number (@exclusiveMinimum 3)",
                                            value: input.greater,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".greater",
                                        expected: "number",
                                        value: input.greater,
                                    })) &&
                                (("number" === typeof input.greater_equal &&
                                    Number.isFinite(input.greater_equal) &&
                                    (3 <= input.greater_equal ||
                                        $guard(_exceptionable, {
                                            path: _path + ".greater_equal",
                                            expected: "number (@minimum 3)",
                                            value: input.greater_equal,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".greater_equal",
                                        expected: "number",
                                        value: input.greater_equal,
                                    })) &&
                                (("number" === typeof input.less &&
                                    Number.isFinite(input.less) &&
                                    (7 > input.less ||
                                        $guard(_exceptionable, {
                                            path: _path + ".less",
                                            expected:
                                                "number (@exclusiveMaximum 7)",
                                            value: input.less,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".less",
                                        expected: "number",
                                        value: input.less,
                                    })) &&
                                (("number" === typeof input.less_equal &&
                                    Number.isFinite(input.less_equal) &&
                                    (7 >= input.less_equal ||
                                        $guard(_exceptionable, {
                                            path: _path + ".less_equal",
                                            expected: "number (@maximum 7)",
                                            value: input.less_equal,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".less_equal",
                                        expected: "number",
                                        value: input.less_equal,
                                    })) &&
                                (("number" === typeof input.greater_less &&
                                    (3 < input.greater_less ||
                                        $guard(_exceptionable, {
                                            path: _path + ".greater_less",
                                            expected:
                                                "number (@exclusiveMinimum 3)",
                                            value: input.greater_less,
                                        })) &&
                                    (7 > input.greater_less ||
                                        $guard(_exceptionable, {
                                            path: _path + ".greater_less",
                                            expected:
                                                "number (@exclusiveMaximum 7)",
                                            value: input.greater_less,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".greater_less",
                                        expected: "number",
                                        value: input.greater_less,
                                    })) &&
                                (("number" ===
                                    typeof input.greater_equal_less &&
                                    (3 <= input.greater_equal_less ||
                                        $guard(_exceptionable, {
                                            path: _path + ".greater_equal_less",
                                            expected: "number (@minimum 3)",
                                            value: input.greater_equal_less,
                                        })) &&
                                    (7 > input.greater_equal_less ||
                                        $guard(_exceptionable, {
                                            path: _path + ".greater_equal_less",
                                            expected:
                                                "number (@exclusiveMaximum 7)",
                                            value: input.greater_equal_less,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".greater_equal_less",
                                        expected: "number",
                                        value: input.greater_equal_less,
                                    })) &&
                                (("number" ===
                                    typeof input.greater_less_equal &&
                                    (3 < input.greater_less_equal ||
                                        $guard(_exceptionable, {
                                            path: _path + ".greater_less_equal",
                                            expected:
                                                "number (@exclusiveMinimum 3)",
                                            value: input.greater_less_equal,
                                        })) &&
                                    (7 >= input.greater_less_equal ||
                                        $guard(_exceptionable, {
                                            path: _path + ".greater_less_equal",
                                            expected: "number (@maximum 7)",
                                            value: input.greater_less_equal,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".greater_less_equal",
                                        expected: "number",
                                        value: input.greater_less_equal,
                                    })) &&
                                (("number" ===
                                    typeof input.greater_equal_less_equal &&
                                    (3 <= input.greater_equal_less_equal ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: "number (@minimum 3)",
                                            value: input.greater_equal_less_equal,
                                        })) &&
                                    (7 >= input.greater_equal_less_equal ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: "number (@maximum 7)",
                                            value: input.greater_equal_less_equal,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".greater_equal_less_equal",
                                        expected: "number",
                                        value: input.greater_equal_less_equal,
                                    })) &&
                                (("number" === typeof input.equal &&
                                    (10 <= input.equal ||
                                        $guard(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: "number (@minimum 10)",
                                            value: input.equal,
                                        })) &&
                                    (10 >= input.equal ||
                                        $guard(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: "number (@maximum 10)",
                                            value: input.equal,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".equal",
                                        expected: "number",
                                        value: input.equal,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "TagRange",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "TagRange",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const encode = (input: TagRange): Uint8Array => {
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
                            writer.uint32(9);
                            writer.double(input.greater);
                            // property "greater_equal";
                            writer.uint32(17);
                            writer.double(input.greater_equal);
                            // property "less";
                            writer.uint32(25);
                            writer.double(input.less);
                            // property "less_equal";
                            writer.uint32(33);
                            writer.double(input.less_equal);
                            // property "greater_less";
                            writer.uint32(41);
                            writer.double(input.greater_less);
                            // property "greater_equal_less";
                            writer.uint32(49);
                            writer.double(input.greater_equal_less);
                            // property "greater_less_equal";
                            writer.uint32(57);
                            writer.double(input.greater_less_equal);
                            // property "greater_equal_less_equal";
                            writer.uint32(65);
                            writer.double(input.greater_equal_less_equal);
                            // property "equal";
                            writer.uint32(73);
                            writer.double(input.equal);
                        };
                        const $io1 = (input: any): boolean =>
                            "number" === typeof input.greater &&
                            3 < input.greater &&
                            "number" === typeof input.greater_equal &&
                            3 <= input.greater_equal &&
                            "number" === typeof input.less &&
                            7 > input.less &&
                            "number" === typeof input.less_equal &&
                            7 >= input.less_equal &&
                            "number" === typeof input.greater_less &&
                            3 < input.greater_less &&
                            7 > input.greater_less &&
                            "number" === typeof input.greater_equal_less &&
                            3 <= input.greater_equal_less &&
                            7 > input.greater_equal_less &&
                            "number" === typeof input.greater_less_equal &&
                            3 < input.greater_less_equal &&
                            7 >= input.greater_less_equal &&
                            "number" ===
                                typeof input.greater_equal_less_equal &&
                            3 <= input.greater_equal_less_equal &&
                            7 >= input.greater_equal_less_equal &&
                            "number" === typeof input.equal &&
                            10 <= input.equal &&
                            10 >= input.equal;
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
            'syntax = "proto3";\n\nmessage TagRange {\n    repeated TagRange.Type value = 1;\n    message Type {\n        required double greater = 1;\n        required double greater_equal = 2;\n        required double less = 3;\n        required double less_equal = 4;\n        required double greater_less = 5;\n        required double greater_equal_less = 6;\n        required double greater_less_equal = 7;\n        required double greater_equal_less_equal = 8;\n        required double equal = 9;\n    }\n}',
    });
