import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { TagRangeBigInt } from "../../../structures/TagRangeBigInt";

export const test_protobuf_validateEncode_TagRangeBigInt =
    _test_protobuf_validateEncode("TagRangeBigInt")<TagRangeBigInt>(
        TagRangeBigInt,
    )({
        validateEncode: (
            input: TagRangeBigInt,
        ): typia.IValidation<Uint8Array> => {
            const validate = (
                input: any,
            ): typia.IValidation<TagRangeBigInt> => {
                const errors = [] as any[];
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
                        "bigint" === typeof input.greater_equal_less_equal &&
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
                if (false === __is(input)) {
                    const $report = (
                        typia.protobuf.createValidateEncode as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagRangeBigInt => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagRangeBigInt.Type>",
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
                                                            "TagRangeBigInt.Type",
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
                                                    expected:
                                                        "TagRangeBigInt.Type",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagRangeBigInt.Type>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("bigint" === typeof input.greater &&
                                    (BigInt(3) < input.greater ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater",
                                            expected:
                                                "bigint (@exclusiveMinimum 3)",
                                            value: input.greater,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater",
                                        expected: "bigint",
                                        value: input.greater,
                                    }),
                                ("bigint" === typeof input.greater_equal &&
                                    (BigInt(3) <= input.greater_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal",
                                            expected: "bigint (@minimum 3)",
                                            value: input.greater_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_equal",
                                        expected: "bigint",
                                        value: input.greater_equal,
                                    }),
                                ("bigint" === typeof input.less &&
                                    (BigInt(7) > input.less ||
                                        $report(_exceptionable, {
                                            path: _path + ".less",
                                            expected:
                                                "bigint (@exclusiveMaximum 7)",
                                            value: input.less,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".less",
                                        expected: "bigint",
                                        value: input.less,
                                    }),
                                ("bigint" === typeof input.less_equal &&
                                    (BigInt(7) >= input.less_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".less_equal",
                                            expected: "bigint (@maximum 7)",
                                            value: input.less_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".less_equal",
                                        expected: "bigint",
                                        value: input.less_equal,
                                    }),
                                ("bigint" === typeof input.greater_less &&
                                    (BigInt(3) < input.greater_less ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less",
                                            expected:
                                                "bigint (@exclusiveMinimum 3)",
                                            value: input.greater_less,
                                        })) &&
                                    (BigInt(7) > input.greater_less ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less",
                                            expected:
                                                "bigint (@exclusiveMaximum 7)",
                                            value: input.greater_less,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_less",
                                        expected: "bigint",
                                        value: input.greater_less,
                                    }),
                                ("bigint" === typeof input.greater_equal_less &&
                                    (BigInt(3) <= input.greater_equal_less ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal_less",
                                            expected: "bigint (@minimum 3)",
                                            value: input.greater_equal_less,
                                        })) &&
                                    (BigInt(7) > input.greater_equal_less ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal_less",
                                            expected:
                                                "bigint (@exclusiveMaximum 7)",
                                            value: input.greater_equal_less,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_equal_less",
                                        expected: "bigint",
                                        value: input.greater_equal_less,
                                    }),
                                ("bigint" === typeof input.greater_less_equal &&
                                    (BigInt(3) < input.greater_less_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less_equal",
                                            expected:
                                                "bigint (@exclusiveMinimum 3)",
                                            value: input.greater_less_equal,
                                        })) &&
                                    (BigInt(7) >= input.greater_less_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less_equal",
                                            expected: "bigint (@maximum 7)",
                                            value: input.greater_less_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_less_equal",
                                        expected: "bigint",
                                        value: input.greater_less_equal,
                                    }),
                                ("bigint" ===
                                    typeof input.greater_equal_less_equal &&
                                    (BigInt(3) <=
                                        input.greater_equal_less_equal ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: "bigint (@minimum 3)",
                                            value: input.greater_equal_less_equal,
                                        })) &&
                                    (BigInt(7) >=
                                        input.greater_equal_less_equal ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: "bigint (@maximum 7)",
                                            value: input.greater_equal_less_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path:
                                            _path + ".greater_equal_less_equal",
                                        expected: "bigint",
                                        value: input.greater_equal_less_equal,
                                    }),
                                ("bigint" === typeof input.equal &&
                                    (BigInt(10) <= input.equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: "bigint (@minimum 10)",
                                            value: input.equal,
                                        })) &&
                                    (BigInt(10) >= input.equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: "bigint (@maximum 10)",
                                            value: input.equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".equal",
                                        expected: "bigint",
                                        value: input.equal,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TagRangeBigInt",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TagRangeBigInt",
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
            const encode = (input: TagRangeBigInt): Uint8Array => {
                const $Sizer = (typia.protobuf.createValidateEncode as any)
                    .Sizer;
                const $Writer = (typia.protobuf.createValidateEncode as any)
                    .Writer;
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
                        "bigint" === typeof input.greater_equal_less_equal &&
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
            const output = validate(input) as any;
            if (output.success) output.data = encode(input);
            return output;
        },
        message:
            'syntax = "proto3";\n\nmessage TagRangeBigInt {\n    repeated TagRangeBigInt.Type value = 1;\n    message Type {\n        required int64 greater = 1;\n        required int64 greater_equal = 2;\n        required int64 less = 3;\n        required int64 less_equal = 4;\n        required int64 greater_less = 5;\n        required int64 greater_equal_less = 6;\n        required int64 greater_less_equal = 7;\n        required int64 greater_equal_less_equal = 8;\n        required int64 equal = 9;\n    }\n}',
        decode: (input: Uint8Array): TagRangeBigInt => {
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
                            output.greater = reader.int64();
                            break;
                        case 2:
                            output.greater_equal = reader.int64();
                            break;
                        case 3:
                            output.less = reader.int64();
                            break;
                        case 4:
                            output.less_equal = reader.int64();
                            break;
                        case 5:
                            output.greater_less = reader.int64();
                            break;
                        case 6:
                            output.greater_equal_less = reader.int64();
                            break;
                        case 7:
                            output.greater_less_equal = reader.int64();
                            break;
                        case 8:
                            output.greater_equal_less_equal = reader.int64();
                            break;
                        case 9:
                            output.equal = reader.int64();
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
