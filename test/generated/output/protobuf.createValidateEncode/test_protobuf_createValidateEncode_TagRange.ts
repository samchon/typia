import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { TagRange } from "../../../structures/TagRange";

export const test_protobuf_validateEncode_TagRange =
    _test_protobuf_validateEncode("TagRange")<TagRange>(TagRange)({
        validateEncode: (input: TagRange): typia.IValidation<Uint8Array> => {
            const validate = (input: any): typia.IValidation<TagRange> => {
                const errors = [] as any[];
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
                        Math.floor(input.greater) === input.greater &&
                        -2147483648 <= input.greater &&
                        input.greater <= 2147483647 &&
                        3 < input.greater &&
                        "number" === typeof input.greater_equal &&
                        Number.isFinite(input.greater_equal) &&
                        Math.floor(input.greater_equal) ===
                            input.greater_equal &&
                        -2147483648 <= input.greater_equal &&
                        input.greater_equal <= 2147483647 &&
                        3 <= input.greater_equal &&
                        "number" === typeof input.less &&
                        Number.isFinite(input.less) &&
                        Math.floor(input.less) === input.less &&
                        -2147483648 <= input.less &&
                        input.less <= 2147483647 &&
                        7 > input.less &&
                        "number" === typeof input.less_equal &&
                        Number.isFinite(input.less_equal) &&
                        Math.floor(input.less_equal) === input.less_equal &&
                        -2147483648 <= input.less_equal &&
                        input.less_equal <= 2147483647 &&
                        7 >= input.less_equal &&
                        "number" === typeof input.greater_less &&
                        Math.floor(input.greater_less) === input.greater_less &&
                        -2147483648 <= input.greater_less &&
                        input.greater_less <= 2147483647 &&
                        3 < input.greater_less &&
                        7 > input.greater_less &&
                        "number" === typeof input.greater_equal_less &&
                        Math.floor(input.greater_equal_less) ===
                            input.greater_equal_less &&
                        -2147483648 <= input.greater_equal_less &&
                        input.greater_equal_less <= 2147483647 &&
                        3 <= input.greater_equal_less &&
                        7 > input.greater_equal_less &&
                        "number" === typeof input.greater_less_equal &&
                        Math.floor(input.greater_less_equal) ===
                            input.greater_less_equal &&
                        -2147483648 <= input.greater_less_equal &&
                        input.greater_less_equal <= 2147483647 &&
                        3 < input.greater_less_equal &&
                        7 >= input.greater_less_equal &&
                        "number" === typeof input.greater_equal_less_equal &&
                        Math.floor(input.greater_equal_less_equal) ===
                            input.greater_equal_less_equal &&
                        -2147483648 <= input.greater_equal_less_equal &&
                        input.greater_equal_less_equal <= 2147483647 &&
                        3 <= input.greater_equal_less_equal &&
                        7 >= input.greater_equal_less_equal &&
                        "number" === typeof input.equal &&
                        Math.floor(input.equal) === input.equal &&
                        -2147483648 <= input.equal &&
                        input.equal <= 2147483647 &&
                        10 <= input.equal &&
                        10 >= input.equal;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.protobuf.createValidateEncode as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagRange => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagRange.Type>",
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
                                                        expected:
                                                            "TagRange.Type",
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
                                                    expected: "TagRange.Type",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagRange.Type>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.greater &&
                                    Number.isFinite(input.greater) &&
                                    (Math.floor(input.greater) ===
                                        input.greater ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater",
                                            expected: "number (@type int)",
                                            value: input.greater,
                                        })) &&
                                    ((-2147483648 <= input.greater &&
                                        input.greater <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater",
                                            expected: "number (@type int)",
                                            value: input.greater,
                                        })) &&
                                    (3 < input.greater ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater",
                                            expected:
                                                "number (@exclusiveMinimum 3)",
                                            value: input.greater,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater",
                                        expected: "number",
                                        value: input.greater,
                                    }),
                                ("number" === typeof input.greater_equal &&
                                    Number.isFinite(input.greater_equal) &&
                                    (Math.floor(input.greater_equal) ===
                                        input.greater_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal",
                                            expected: "number (@type int)",
                                            value: input.greater_equal,
                                        })) &&
                                    ((-2147483648 <= input.greater_equal &&
                                        input.greater_equal <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal",
                                            expected: "number (@type int)",
                                            value: input.greater_equal,
                                        })) &&
                                    (3 <= input.greater_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal",
                                            expected: "number (@minimum 3)",
                                            value: input.greater_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_equal",
                                        expected: "number",
                                        value: input.greater_equal,
                                    }),
                                ("number" === typeof input.less &&
                                    Number.isFinite(input.less) &&
                                    (Math.floor(input.less) === input.less ||
                                        $report(_exceptionable, {
                                            path: _path + ".less",
                                            expected: "number (@type int)",
                                            value: input.less,
                                        })) &&
                                    ((-2147483648 <= input.less &&
                                        input.less <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".less",
                                            expected: "number (@type int)",
                                            value: input.less,
                                        })) &&
                                    (7 > input.less ||
                                        $report(_exceptionable, {
                                            path: _path + ".less",
                                            expected:
                                                "number (@exclusiveMaximum 7)",
                                            value: input.less,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".less",
                                        expected: "number",
                                        value: input.less,
                                    }),
                                ("number" === typeof input.less_equal &&
                                    Number.isFinite(input.less_equal) &&
                                    (Math.floor(input.less_equal) ===
                                        input.less_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".less_equal",
                                            expected: "number (@type int)",
                                            value: input.less_equal,
                                        })) &&
                                    ((-2147483648 <= input.less_equal &&
                                        input.less_equal <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".less_equal",
                                            expected: "number (@type int)",
                                            value: input.less_equal,
                                        })) &&
                                    (7 >= input.less_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".less_equal",
                                            expected: "number (@maximum 7)",
                                            value: input.less_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".less_equal",
                                        expected: "number",
                                        value: input.less_equal,
                                    }),
                                ("number" === typeof input.greater_less &&
                                    (Math.floor(input.greater_less) ===
                                        input.greater_less ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less",
                                            expected: "number (@type int)",
                                            value: input.greater_less,
                                        })) &&
                                    ((-2147483648 <= input.greater_less &&
                                        input.greater_less <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less",
                                            expected: "number (@type int)",
                                            value: input.greater_less,
                                        })) &&
                                    (3 < input.greater_less ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less",
                                            expected:
                                                "number (@exclusiveMinimum 3)",
                                            value: input.greater_less,
                                        })) &&
                                    (7 > input.greater_less ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less",
                                            expected:
                                                "number (@exclusiveMaximum 7)",
                                            value: input.greater_less,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_less",
                                        expected: "number",
                                        value: input.greater_less,
                                    }),
                                ("number" === typeof input.greater_equal_less &&
                                    (Math.floor(input.greater_equal_less) ===
                                        input.greater_equal_less ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal_less",
                                            expected: "number (@type int)",
                                            value: input.greater_equal_less,
                                        })) &&
                                    ((-2147483648 <= input.greater_equal_less &&
                                        input.greater_equal_less <=
                                            2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal_less",
                                            expected: "number (@type int)",
                                            value: input.greater_equal_less,
                                        })) &&
                                    (3 <= input.greater_equal_less ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal_less",
                                            expected: "number (@minimum 3)",
                                            value: input.greater_equal_less,
                                        })) &&
                                    (7 > input.greater_equal_less ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal_less",
                                            expected:
                                                "number (@exclusiveMaximum 7)",
                                            value: input.greater_equal_less,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_equal_less",
                                        expected: "number",
                                        value: input.greater_equal_less,
                                    }),
                                ("number" === typeof input.greater_less_equal &&
                                    (Math.floor(input.greater_less_equal) ===
                                        input.greater_less_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less_equal",
                                            expected: "number (@type int)",
                                            value: input.greater_less_equal,
                                        })) &&
                                    ((-2147483648 <= input.greater_less_equal &&
                                        input.greater_less_equal <=
                                            2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less_equal",
                                            expected: "number (@type int)",
                                            value: input.greater_less_equal,
                                        })) &&
                                    (3 < input.greater_less_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less_equal",
                                            expected:
                                                "number (@exclusiveMinimum 3)",
                                            value: input.greater_less_equal,
                                        })) &&
                                    (7 >= input.greater_less_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less_equal",
                                            expected: "number (@maximum 7)",
                                            value: input.greater_less_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_less_equal",
                                        expected: "number",
                                        value: input.greater_less_equal,
                                    }),
                                ("number" ===
                                    typeof input.greater_equal_less_equal &&
                                    (Math.floor(
                                        input.greater_equal_less_equal,
                                    ) === input.greater_equal_less_equal ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: "number (@type int)",
                                            value: input.greater_equal_less_equal,
                                        })) &&
                                    ((-2147483648 <=
                                        input.greater_equal_less_equal &&
                                        input.greater_equal_less_equal <=
                                            2147483647) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: "number (@type int)",
                                            value: input.greater_equal_less_equal,
                                        })) &&
                                    (3 <= input.greater_equal_less_equal ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: "number (@minimum 3)",
                                            value: input.greater_equal_less_equal,
                                        })) &&
                                    (7 >= input.greater_equal_less_equal ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: "number (@maximum 7)",
                                            value: input.greater_equal_less_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path:
                                            _path + ".greater_equal_less_equal",
                                        expected: "number",
                                        value: input.greater_equal_less_equal,
                                    }),
                                ("number" === typeof input.equal &&
                                    (Math.floor(input.equal) === input.equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: "number (@type int)",
                                            value: input.equal,
                                        })) &&
                                    ((-2147483648 <= input.equal &&
                                        input.equal <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: "number (@type int)",
                                            value: input.equal,
                                        })) &&
                                    (10 <= input.equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: "number (@minimum 10)",
                                            value: input.equal,
                                        })) &&
                                    (10 >= input.equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: "number (@maximum 10)",
                                            value: input.equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".equal",
                                        expected: "number",
                                        value: input.equal,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TagRange",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TagRange",
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
            const encode = (input: TagRange): Uint8Array => {
                const $Sizer = (typia.protobuf.createValidateEncode as any)
                    .Sizer;
                const $Writer = (typia.protobuf.createValidateEncode as any)
                    .Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "value";
                        if (0 !== input.value.length) {
                            for (const elem of input.value) {
                                // 1 -> TagRange.Type;
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
                        writer.int32(input.greater);
                        // property "greater_equal";
                        writer.uint32(16);
                        writer.int32(input.greater_equal);
                        // property "less";
                        writer.uint32(24);
                        writer.int32(input.less);
                        // property "less_equal";
                        writer.uint32(32);
                        writer.int32(input.less_equal);
                        // property "greater_less";
                        writer.uint32(40);
                        writer.int32(input.greater_less);
                        // property "greater_equal_less";
                        writer.uint32(48);
                        writer.int32(input.greater_equal_less);
                        // property "greater_less_equal";
                        writer.uint32(56);
                        writer.int32(input.greater_less_equal);
                        // property "greater_equal_less_equal";
                        writer.uint32(64);
                        writer.int32(input.greater_equal_less_equal);
                        // property "equal";
                        writer.uint32(72);
                        writer.int32(input.equal);
                    };
                    const $io1 = (input: any): boolean =>
                        "number" === typeof input.greater &&
                        Math.floor(input.greater) === input.greater &&
                        -2147483648 <= input.greater &&
                        input.greater <= 2147483647 &&
                        3 < input.greater &&
                        "number" === typeof input.greater_equal &&
                        Math.floor(input.greater_equal) ===
                            input.greater_equal &&
                        -2147483648 <= input.greater_equal &&
                        input.greater_equal <= 2147483647 &&
                        3 <= input.greater_equal &&
                        "number" === typeof input.less &&
                        Math.floor(input.less) === input.less &&
                        -2147483648 <= input.less &&
                        input.less <= 2147483647 &&
                        7 > input.less &&
                        "number" === typeof input.less_equal &&
                        Math.floor(input.less_equal) === input.less_equal &&
                        -2147483648 <= input.less_equal &&
                        input.less_equal <= 2147483647 &&
                        7 >= input.less_equal &&
                        "number" === typeof input.greater_less &&
                        Math.floor(input.greater_less) === input.greater_less &&
                        -2147483648 <= input.greater_less &&
                        input.greater_less <= 2147483647 &&
                        3 < input.greater_less &&
                        7 > input.greater_less &&
                        "number" === typeof input.greater_equal_less &&
                        Math.floor(input.greater_equal_less) ===
                            input.greater_equal_less &&
                        -2147483648 <= input.greater_equal_less &&
                        input.greater_equal_less <= 2147483647 &&
                        3 <= input.greater_equal_less &&
                        7 > input.greater_equal_less &&
                        "number" === typeof input.greater_less_equal &&
                        Math.floor(input.greater_less_equal) ===
                            input.greater_less_equal &&
                        -2147483648 <= input.greater_less_equal &&
                        input.greater_less_equal <= 2147483647 &&
                        3 < input.greater_less_equal &&
                        7 >= input.greater_less_equal &&
                        "number" === typeof input.greater_equal_less_equal &&
                        Math.floor(input.greater_equal_less_equal) ===
                            input.greater_equal_less_equal &&
                        -2147483648 <= input.greater_equal_less_equal &&
                        input.greater_equal_less_equal <= 2147483647 &&
                        3 <= input.greater_equal_less_equal &&
                        7 >= input.greater_equal_less_equal &&
                        "number" === typeof input.equal &&
                        Math.floor(input.equal) === input.equal &&
                        -2147483648 <= input.equal &&
                        input.equal <= 2147483647 &&
                        10 <= input.equal &&
                        10 >= input.equal;
                    //TagRange;
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            };
            const output = validate(input) as any;
            if (output.success) output.data = encode(input);
            return output;
        },
        message:
            'syntax = "proto3";\n\nmessage TagRange {\n    repeated TagRange.Type value = 1;\n    message Type {\n        required int32 greater = 1;\n        required int32 greater_equal = 2;\n        required int32 less = 3;\n        required int32 less_equal = 4;\n        required int32 greater_less = 5;\n        required int32 greater_equal_less = 6;\n        required int32 greater_less_equal = 7;\n        required int32 greater_equal_less_equal = 8;\n        required int32 equal = 9;\n    }\n}',
        decode: (input: Uint8Array): typia.Resolved<TagRange> => {
            const $Reader = (typia.protobuf.createDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: [] as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // type: Array<TagRange.Type>;
                            output.value.push($pdo1(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo1 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    greater: undefined as any,
                    greater_equal: undefined as any,
                    less: undefined as any,
                    less_equal: undefined as any,
                    greater_less: undefined as any,
                    greater_equal_less: undefined as any,
                    greater_less_equal: undefined as any,
                    greater_equal_less_equal: undefined as any,
                    equal: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // number;
                            output.greater = reader.int32();
                            break;
                        case 2:
                            // number;
                            output.greater_equal = reader.int32();
                            break;
                        case 3:
                            // number;
                            output.less = reader.int32();
                            break;
                        case 4:
                            // number;
                            output.less_equal = reader.int32();
                            break;
                        case 5:
                            // number;
                            output.greater_less = reader.int32();
                            break;
                        case 6:
                            // number;
                            output.greater_equal_less = reader.int32();
                            break;
                        case 7:
                            // number;
                            output.greater_less_equal = reader.int32();
                            break;
                        case 8:
                            // number;
                            output.greater_equal_less_equal = reader.int32();
                            break;
                        case 9:
                            // number;
                            output.equal = reader.int32();
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
        },
    });
