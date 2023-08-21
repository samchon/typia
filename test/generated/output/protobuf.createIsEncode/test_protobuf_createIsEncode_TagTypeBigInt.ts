import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { TagTypeBigInt } from "../../../structures/TagTypeBigInt";

export const test_protobuf_isEncode_TagTypeBigInt = _test_protobuf_isEncode(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)({
    isEncode: (input: TagTypeBigInt): Uint8Array | null => {
        const is = (input: any): input is TagTypeBigInt => {
            return (
                "object" === typeof input &&
                null !== input &&
                "bigint" === typeof (input as any).in64 &&
                "bigint" === typeof (input as any).uint64 &&
                BigInt(0) <= (input as any).uint64
            );
        };
        const encode = (input: TagTypeBigInt): Uint8Array => {
            const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
            const $Writer = (typia.protobuf.createIsEncode as any).Writer;
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
        };
        return is(input) ? encode(input) : null;
    },
    message:
        'syntax = "proto3";\n\nmessage TagTypeBigInt {\n    required int64 in64 = 1;\n    required uint64 uint64 = 2;\n}',
});
