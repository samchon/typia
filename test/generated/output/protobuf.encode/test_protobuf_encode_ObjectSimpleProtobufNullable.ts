import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ObjectSimpleProtobufNullable } from "../../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_createEncode_ObjectSimpleProtobufNullable =
    _test_protobuf_encode(
        "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
        encode: (input) =>
            ((input: ObjectSimpleProtobufNullable): Uint8Array => {
                const $Sizer = (typia.protobuf.encode as any).Sizer;
                const $Writer = (typia.protobuf.encode as any).Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "bool";
                        if (null !== input.bool) {
                            writer.uint32(8);
                            writer.bool(input.bool);
                        }
                        // property "int32";
                        if (null !== input.int32) {
                            writer.uint32(16);
                            writer.int32(input.int32);
                        }
                        // property "uint32";
                        if (null !== input.uint32) {
                            writer.uint32(24);
                            writer.uint32(input.uint32);
                        }
                        // property "int64";
                        if (null !== input.int64) {
                            writer.uint32(32);
                            writer.int64(input.int64);
                        }
                        // property "uint64";
                        if (null !== input.uint64) {
                            writer.uint32(40);
                            writer.uint64(input.uint64);
                        }
                        // property "float";
                        if (null !== input.float) {
                            writer.uint32(53);
                            writer.float(input.float);
                        }
                        // property "double";
                        if (null !== input.double) {
                            writer.uint32(57);
                            writer.double(input.double);
                        }
                        // property "string";
                        if (null !== input.string) {
                            writer.uint32(66);
                            writer.string(input.string);
                        }
                        // property "bytes";
                        if (null !== input.bytes) {
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
            })(input),
        decode: (
            input: Uint8Array,
        ): typia.Resolved<ObjectSimpleProtobufNullable> => {
            const $Reader = (typia.protobuf.createDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
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
        message:
            'syntax = "proto3";\n\nmessage ObjectSimpleProtobufNullable {\n    optional bool bool = 1;\n    optional int32 int32 = 2;\n    optional uint32 uint32 = 3;\n    optional int64 int64 = 4;\n    optional uint64 uint64 = 5;\n    optional float float = 6;\n    optional double double = 7;\n    optional string string = 8;\n    optional bytes bytes = 9;\n}',
    });
