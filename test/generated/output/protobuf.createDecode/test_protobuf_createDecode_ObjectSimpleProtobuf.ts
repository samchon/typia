import typia from "../../../../src";
import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { ObjectSimpleProtobuf } from "../../../structures/ObjectSimpleProtobuf";

export const test_protobuf_decode_ObjectSimpleProtobuf = _test_protobuf_decode(
    "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)({
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
    encode: (input: ObjectSimpleProtobuf): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
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
    },
});
