import typia from "../../../../src";
import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { ObjectSimpleProtobufOptional } from "../../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_decode_ObjectSimpleProtobufOptional =
    _test_protobuf_decode(
        "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
        decode: (input) =>
            ((input: Uint8Array): ObjectSimpleProtobufOptional => {
                const $Reader = (typia.protobuf.decode as any).Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        bool: undefined as any,
                        int32: undefined as any,
                        uint32: undefined as any,
                        int64: undefined as any,
                        uint64: undefined as any,
                        float: undefined as any,
                        double: undefined as any,
                        string: undefined as any,
                        bytes: undefined as any,
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
            })(input),
        encode: (input: ObjectSimpleProtobufOptional): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "bool";
                    if (undefined != input.bool && null != input.bool) {
                        writer.uint32(8);
                        writer.bool(input.bool);
                    }
                    // property "int32";
                    if (undefined != input.int32 && null != input.int32) {
                        writer.uint32(16);
                        writer.int32(input.int32);
                    }
                    // property "uint32";
                    if (undefined != input.uint32 && null != input.uint32) {
                        writer.uint32(24);
                        writer.uint32(input.uint32);
                    }
                    // property "int64";
                    if (undefined != input.int64 && null != input.int64) {
                        writer.uint32(32);
                        writer.int64(input.int64);
                    }
                    // property "uint64";
                    if (undefined != input.uint64 && null != input.uint64) {
                        writer.uint32(40);
                        writer.uint64(input.uint64);
                    }
                    // property "float";
                    if (undefined != input.float && null != input.float) {
                        writer.uint32(53);
                        writer.float(input.float);
                    }
                    // property "double";
                    if (undefined != input.double && null != input.double) {
                        writer.uint32(57);
                        writer.double(input.double);
                    }
                    // property "string";
                    if (undefined != input.string && null != input.string) {
                        writer.uint32(66);
                        writer.string(input.string);
                    }
                    // property "bytes";
                    if (undefined != input.bytes && null != input.bytes) {
                        writer.uint32(74);
                        writer.bytes(input.bytes);
                    }
                };
                //ObjectSimpleProtobufOptional;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
