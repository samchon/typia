import typia from "../../../../src";
import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { ObjectSimpleProtobufOptional } from "../../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_isDecode_ObjectSimpleProtobufOptional =
    _test_protobuf_isDecode(
        "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
        isDecode: (input) =>
            ((input: Uint8Array): ObjectSimpleProtobufOptional | null => {
                const is = (
                    input: any,
                ): input is ObjectSimpleProtobufOptional => {
                    const $io0 = (input: any): boolean =>
                        (undefined === input.bool ||
                            "boolean" === typeof input.bool) &&
                        (undefined === input.int32 ||
                            ("number" === typeof input.int32 &&
                                Number.isFinite(input.int32) &&
                                Math.floor(input.int32) === input.int32 &&
                                -2147483648 <= input.int32 &&
                                input.int32 <= 2147483647)) &&
                        (undefined === input.uint32 ||
                            ("number" === typeof input.uint32 &&
                                Number.isFinite(input.uint32) &&
                                Math.floor(input.uint32) === input.uint32 &&
                                0 <= input.uint32 &&
                                input.uint32 <= 4294967295)) &&
                        (undefined === input.int64 ||
                            "bigint" === typeof input.int64) &&
                        (undefined === input.uint64 ||
                            ("bigint" === typeof input.uint64 &&
                                BigInt(0) <= input.uint64)) &&
                        (undefined === input.float ||
                            ("number" === typeof input.float &&
                                Number.isFinite(input.float) &&
                                -1.175494351e38 <= input.float &&
                                input.float <= 3.4028235e38)) &&
                        (undefined === input.double ||
                            ("number" === typeof input.double &&
                                Number.isFinite(input.double))) &&
                        (undefined === input.string ||
                            "string" === typeof input.string) &&
                        (undefined === input.bytes ||
                            input.bytes instanceof Uint8Array);
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input) &&
                        $io0(input)
                    );
                };
                const decode = (
                    input: Uint8Array,
                ): ObjectSimpleProtobufOptional => {
                    const $Reader = (typia.protobuf.isDecode as any).Reader;
                    const $pdo0 = (reader: any, length: number = -1): any => {
                        length =
                            length < 0
                                ? reader.size()
                                : reader.index() + length;
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
                                    output.bool = reader.bool();
                                    break;
                                case 2:
                                    output.int32 = reader.int32();
                                    break;
                                case 3:
                                    output.uint32 = reader.uint32();
                                    break;
                                case 4:
                                    output.int64 = reader.int64();
                                    break;
                                case 5:
                                    output.uint64 = reader.uint64();
                                    break;
                                case 6:
                                    output.float = reader.float();
                                    break;
                                case 7:
                                    output.double = reader.double();
                                    break;
                                case 8:
                                    output.string = reader.string();
                                    break;
                                case 9:
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
                if (!is(output)) return null;
                return output;
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
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
