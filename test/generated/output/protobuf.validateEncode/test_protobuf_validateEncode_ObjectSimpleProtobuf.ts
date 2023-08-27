import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { ObjectSimpleProtobuf } from "../../../structures/ObjectSimpleProtobuf";

export const test_protobuf_validateEncode_ObjectSimpleProtobuf =
    _test_protobuf_validateEncode("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
        ObjectSimpleProtobuf,
    )({
        validateEncode: (input) =>
            ((input: ObjectSimpleProtobuf): typia.IValidation<Uint8Array> => {
                const validate = (
                    input: any,
                ): typia.IValidation<ObjectSimpleProtobuf> => {
                    const errors = [] as any[];
                    const __is = (
                        input: any,
                    ): input is ObjectSimpleProtobuf => {
                        const $io0 = (input: any): boolean =>
                            "boolean" === typeof input.bool &&
                            "number" === typeof input.int32 &&
                            Math.floor(input.int32) === input.int32 &&
                            -2147483648 <= input.int32 &&
                            input.int32 <= 2147483647 &&
                            "number" === typeof input.uint32 &&
                            Math.floor(input.uint32) === input.uint32 &&
                            0 <= input.uint32 &&
                            input.uint32 <= 4294967295 &&
                            "bigint" === typeof input.int64 &&
                            "bigint" === typeof input.uint64 &&
                            BigInt(0) <= input.uint64 &&
                            "number" === typeof input.float &&
                            -1.175494351e38 <= input.float &&
                            input.float <= 3.4028235e38 &&
                            "number" === typeof input.double &&
                            Number.isFinite(input.double) &&
                            true &&
                            "string" === typeof input.string &&
                            input.bytes instanceof Uint8Array;
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (
                            typia.protobuf.validateEncode as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ObjectSimpleProtobuf => {
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    "boolean" === typeof input.bool ||
                                        $report(_exceptionable, {
                                            path: _path + ".bool",
                                            expected: "boolean",
                                            value: input.bool,
                                        }),
                                    ("number" === typeof input.int32 &&
                                        ((Math.floor(input.int32) ===
                                            input.int32 &&
                                            -2147483648 <= input.int32 &&
                                            input.int32 <= 2147483647) ||
                                            $report(_exceptionable, {
                                                path: _path + ".int32",
                                                expected:
                                                    'number & Type<"int32">',
                                                value: input.int32,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".int32",
                                            expected:
                                                '(number & Type<"int32">)',
                                            value: input.int32,
                                        }),
                                    ("number" === typeof input.uint32 &&
                                        ((Math.floor(input.uint32) ===
                                            input.uint32 &&
                                            0 <= input.uint32 &&
                                            input.uint32 <= 4294967295) ||
                                            $report(_exceptionable, {
                                                path: _path + ".uint32",
                                                expected:
                                                    'number & Type<"uint32">',
                                                value: input.uint32,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint32",
                                            expected:
                                                '(number & Type<"uint32">)',
                                            value: input.uint32,
                                        }),
                                    "bigint" === typeof input.int64 ||
                                        $report(_exceptionable, {
                                            path: _path + ".int64",
                                            expected: "bigint",
                                            value: input.int64,
                                        }),
                                    ("bigint" === typeof input.uint64 &&
                                        (BigInt(0) <= input.uint64 ||
                                            $report(_exceptionable, {
                                                path: _path + ".uint64",
                                                expected:
                                                    'bigint & Type<"uint64">',
                                                value: input.uint64,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint64",
                                            expected:
                                                '(bigint & Type<"uint64">)',
                                            value: input.uint64,
                                        }),
                                    ("number" === typeof input.float &&
                                        ((-1.175494351e38 <= input.float &&
                                            input.float <= 3.4028235e38) ||
                                            $report(_exceptionable, {
                                                path: _path + ".float",
                                                expected:
                                                    'number & Type<"float">',
                                                value: input.float,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".float",
                                            expected:
                                                '(number & Type<"float">)',
                                            value: input.float,
                                        }),
                                    ("number" === typeof input.double &&
                                        (Number.isFinite(input.double) ||
                                            $report(_exceptionable, {
                                                path: _path + ".double",
                                                expected: "number",
                                                value: input.double,
                                            })) &&
                                        (true ||
                                            $report(_exceptionable, {
                                                path: _path + ".double",
                                                expected:
                                                    'number & Type<"double">',
                                                value: input.double,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".double",
                                            expected:
                                                '(number & Type<"double">)',
                                            value: input.double,
                                        }),
                                    "string" === typeof input.string ||
                                        $report(_exceptionable, {
                                            path: _path + ".string",
                                            expected: "string",
                                            value: input.string,
                                        }),
                                    input.bytes instanceof Uint8Array ||
                                        $report(_exceptionable, {
                                            path: _path + ".bytes",
                                            expected: "Uint8Array",
                                            value: input.bytes,
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "ObjectSimpleProtobuf",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectSimpleProtobuf",
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
                const encode = (input: ObjectSimpleProtobuf): Uint8Array => {
                    const $Sizer = (typia.protobuf.validateEncode as any).Sizer;
                    const $Writer = (typia.protobuf.validateEncode as any)
                        .Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "bool";
                            writer.uint32(8);
                            writer.bool(input.bool);
                            // property "int32";
                            writer.uint32(16);
                            writer.int32(input.int32);
                            // property "uint32";
                            writer.uint32(24);
                            writer.uint32(input.uint32);
                            // property "int64";
                            writer.uint32(32);
                            writer.int64(input.int64);
                            // property "uint64";
                            writer.uint32(40);
                            writer.uint64(input.uint64);
                            // property "float";
                            writer.uint32(53);
                            writer.float(input.float);
                            // property "double";
                            writer.uint32(57);
                            writer.double(input.double);
                            // property "string";
                            writer.uint32(66);
                            writer.string(input.string);
                            // property "bytes";
                            writer.uint32(74);
                            writer.bytes(input.bytes);
                        };
                        //ObjectSimpleProtobuf;
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
            })(input),
        message:
            'syntax = "proto3";\n\nmessage ObjectSimpleProtobuf {\n    required bool bool = 1;\n    required int32 int32 = 2;\n    required uint32 uint32 = 3;\n    required int64 int64 = 4;\n    required uint64 uint64 = 5;\n    required float float = 6;\n    required double double = 7;\n    required string string = 8;\n    required bytes bytes = 9;\n}',
        decode: (input: Uint8Array): typia.Resolved<ObjectSimpleProtobuf> => {
            const $Reader = (typia.protobuf.createDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    bool: undefined as any,
                    int32: undefined as any,
                    uint32: undefined as any,
                    int64: undefined as any,
                    uint64: undefined as any,
                    float: undefined as any,
                    double: undefined as any,
                    string: "" as any,
                    bytes: new Uint8Array() as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // bool;
                            output.bool = reader.bool();
                            break;
                        case 2:
                            // int32;
                            output.int32 = reader.int32();
                            break;
                        case 3:
                            // uint32;
                            output.uint32 = reader.uint32();
                            break;
                        case 4:
                            // int64;
                            output.int64 = reader.int64();
                            break;
                        case 5:
                            // uint64;
                            output.uint64 = reader.uint64();
                            break;
                        case 6:
                            // float;
                            output.float = reader.float();
                            break;
                        case 7:
                            // double;
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
        },
    });
