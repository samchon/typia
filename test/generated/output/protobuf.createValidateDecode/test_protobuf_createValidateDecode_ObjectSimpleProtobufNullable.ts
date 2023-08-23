import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ObjectSimpleProtobufNullable } from "../../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_validateDecode_ObjectSimpleProtobufNullable =
    _test_protobuf_validateDecode(
        "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
        validateDecode: (
            input: Uint8Array,
        ): typia.IValidation<typia.Resolved<ObjectSimpleProtobufNullable>> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectSimpleProtobufNullable> => {
                const errors = [] as any[];
                const __is = (
                    input: any,
                ): input is ObjectSimpleProtobufNullable => {
                    const $io0 = (input: any): boolean =>
                        (null === input.bool ||
                            "boolean" === typeof input.bool) &&
                        (null === input.int32 ||
                            ("number" === typeof input.int32 &&
                                Number.isFinite(input.int32) &&
                                Math.floor(input.int32) === input.int32 &&
                                -2147483648 <= input.int32 &&
                                input.int32 <= 2147483647)) &&
                        (null === input.uint32 ||
                            ("number" === typeof input.uint32 &&
                                Number.isFinite(input.uint32) &&
                                Math.floor(input.uint32) === input.uint32 &&
                                0 <= input.uint32 &&
                                input.uint32 <= 4294967295)) &&
                        (null === input.int64 ||
                            "bigint" === typeof input.int64) &&
                        (null === input.uint64 ||
                            ("bigint" === typeof input.uint64 &&
                                BigInt(0) <= input.uint64)) &&
                        (null === input.float ||
                            ("number" === typeof input.float &&
                                Number.isFinite(input.float) &&
                                -1.175494351e38 <= input.float &&
                                input.float <= 3.4028235e38)) &&
                        (null === input.double ||
                            ("number" === typeof input.double &&
                                Number.isFinite(input.double))) &&
                        (null === input.string ||
                            "string" === typeof input.string) &&
                        (null === input.bytes ||
                            input.bytes instanceof Uint8Array);
                    return (
                        "object" === typeof input &&
                        null !== input &&
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
                    ): input is ObjectSimpleProtobufNullable => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                null === input.bool ||
                                    "boolean" === typeof input.bool ||
                                    $report(_exceptionable, {
                                        path: _path + ".bool",
                                        expected: "(boolean | null)",
                                        value: input.bool,
                                    }),
                                null === input.int32 ||
                                    ("number" === typeof input.int32 &&
                                        Number.isFinite(input.int32) &&
                                        (Math.floor(input.int32) ===
                                            input.int32 ||
                                            $report(_exceptionable, {
                                                path: _path + ".int32",
                                                expected:
                                                    "number (@type int32)",
                                                value: input.int32,
                                            })) &&
                                        ((-2147483648 <= input.int32 &&
                                            input.int32 <= 2147483647) ||
                                            $report(_exceptionable, {
                                                path: _path + ".int32",
                                                expected:
                                                    "number (@type int32)",
                                                value: input.int32,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".int32",
                                        expected: "(null | number)",
                                        value: input.int32,
                                    }),
                                null === input.uint32 ||
                                    ("number" === typeof input.uint32 &&
                                        Number.isFinite(input.uint32) &&
                                        (Math.floor(input.uint32) ===
                                            input.uint32 ||
                                            $report(_exceptionable, {
                                                path: _path + ".uint32",
                                                expected:
                                                    "number (@type uint32)",
                                                value: input.uint32,
                                            })) &&
                                        (0 <= input.uint32 ||
                                            $report(_exceptionable, {
                                                path: _path + ".uint32",
                                                expected:
                                                    "number (@type uint32)",
                                                value: input.uint32,
                                            })) &&
                                        (input.uint32 <= 4294967295 ||
                                            $report(_exceptionable, {
                                                path: _path + ".uint32",
                                                expected:
                                                    "number (@type uint32)",
                                                value: input.uint32,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".uint32",
                                        expected: "(null | number)",
                                        value: input.uint32,
                                    }),
                                null === input.int64 ||
                                    "bigint" === typeof input.int64 ||
                                    $report(_exceptionable, {
                                        path: _path + ".int64",
                                        expected: "(bigint | null)",
                                        value: input.int64,
                                    }),
                                null === input.uint64 ||
                                    ("bigint" === typeof input.uint64 &&
                                        (BigInt(0) <= input.uint64 ||
                                            $report(_exceptionable, {
                                                path: _path + ".uint64",
                                                expected:
                                                    "bigint (@type uint64)",
                                                value: input.uint64,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".uint64",
                                        expected: "(bigint | null)",
                                        value: input.uint64,
                                    }),
                                null === input.float ||
                                    ("number" === typeof input.float &&
                                        Number.isFinite(input.float) &&
                                        ((-1.175494351e38 <= input.float &&
                                            input.float <= 3.4028235e38) ||
                                            $report(_exceptionable, {
                                                path: _path + ".float",
                                                expected:
                                                    "number (@type float)",
                                                value: input.float,
                                            }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".float",
                                        expected: "(null | number)",
                                        value: input.float,
                                    }),
                                null === input.double ||
                                    ("number" === typeof input.double &&
                                        Number.isFinite(input.double)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".double",
                                        expected: "(null | number)",
                                        value: input.double,
                                    }),
                                null === input.string ||
                                    "string" === typeof input.string ||
                                    $report(_exceptionable, {
                                        path: _path + ".string",
                                        expected: "(null | string)",
                                        value: input.string,
                                    }),
                                null === input.bytes ||
                                    input.bytes instanceof Uint8Array ||
                                    $report(_exceptionable, {
                                        path: _path + ".bytes",
                                        expected: "(Uint8Array | null)",
                                        value: input.bytes,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectSimpleProtobufNullable",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectSimpleProtobufNullable",
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
            ): typia.Resolved<ObjectSimpleProtobufNullable> => {
                const $Reader = (typia.protobuf.createValidateDecode as any)
                    .Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        bool: null as any,
                        int32: null as any,
                        uint32: null as any,
                        int64: null as any,
                        uint64: null as any,
                        float: null as any,
                        double: null as any,
                        string: null as any,
                        bytes: null as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                // boolean;
                                output.bool = reader.bool();
                                break;
                            case 2:
                                // number;
                                output.int32 = reader.int32();
                                break;
                            case 3:
                                // number;
                                output.uint32 = reader.uint32();
                                break;
                            case 4:
                                // bigint;
                                output.int64 = reader.int64();
                                break;
                            case 5:
                                // bigint;
                                output.uint64 = reader.uint64();
                                break;
                            case 6:
                                // number;
                                output.float = reader.float();
                                break;
                            case 7:
                                // number;
                                output.double = reader.double();
                                break;
                            case 8:
                                // string;
                                output.string = reader.string();
                                break;
                            case 9:
                                // bytes;
                                output.bytes = reader.bytes();
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
        encode: (input: ObjectSimpleProtobufNullable): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "bool";
                    if (null != input.bool) {
                        writer.uint32(8);
                        writer.bool(input.bool);
                    }
                    // property "int32";
                    if (null != input.int32) {
                        writer.uint32(16);
                        writer.int32(input.int32);
                    }
                    // property "uint32";
                    if (null != input.uint32) {
                        writer.uint32(24);
                        writer.uint32(input.uint32);
                    }
                    // property "int64";
                    if (null != input.int64) {
                        writer.uint32(32);
                        writer.int64(input.int64);
                    }
                    // property "uint64";
                    if (null != input.uint64) {
                        writer.uint32(40);
                        writer.uint64(input.uint64);
                    }
                    // property "float";
                    if (null != input.float) {
                        writer.uint32(53);
                        writer.float(input.float);
                    }
                    // property "double";
                    if (null != input.double) {
                        writer.uint32(57);
                        writer.double(input.double);
                    }
                    // property "string";
                    if (null != input.string) {
                        writer.uint32(66);
                        writer.string(input.string);
                    }
                    // property "bytes";
                    if (null != input.bytes) {
                        writer.uint32(74);
                        writer.bytes(input.bytes);
                    }
                };
                //ObjectSimpleProtobufNullable;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
