import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TagTypeBigInt } from "../../../structures/TagTypeBigInt";

export const test_protobuf_encode_TagTypeBigInt = _test_protobuf_encode(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)({
    encode: (input) =>
        ((input: TagTypeBigInt): Uint8Array => {
            const $Sizer = (typia.protobuf.encode as any).Sizer;
            const $Writer = (typia.protobuf.encode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "in64";
                    writer.uint32(8);
                    writer.int64(input.in64);
                    // property "uint64";
                    writer.uint32(16);
                    writer.uint64(input.uint64);
                };
                //TagTypeBigInt;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        })(input),
    message:
        'syntax = "proto3";\n\nmessage TagTypeBigInt {\n    required int64 in64 = 1;\n    required uint64 uint64 = 2;\n}',
    decode: (input: Uint8Array): typia.Resolved<TagTypeBigInt> => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                in64: undefined as any,
                uint64: undefined as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // bigint;
                        output.in64 = reader.int64();
                        break;
                    case 2:
                        // bigint;
                        output.uint64 = reader.uint64();
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
