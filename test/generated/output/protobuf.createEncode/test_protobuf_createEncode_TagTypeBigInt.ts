import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TagTypeBigInt } from "../../../structures/TagTypeBigInt";

export const test_protobuf_encode_TagTypeBigInt = _test_protobuf_encode(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)({
    encode: (input: TagTypeBigInt): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "in64";
                writer.uint32(8);
                writer.int64(input.in64);
                // property "uint64";
                writer.uint32(16);
                writer.uint64(input.uint64);
            };
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
    message:
        'syntax = "proto3";\n\nmessage TagTypeBigInt {\n    required int64 in64 = 1;\n    required uint64 uint64 = 2;\n}',
});
