import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TagRangeBigInt } from "../../../structures/TagRangeBigInt";

export const test_protobuf_encode_TagRangeBigInt = _test_protobuf_encode(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)({
    encode: (input: TagRangeBigInt): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
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
    },
    message:
        'syntax = "proto3";\n\nmessage TagRangeBigInt {\n    repeated TagRangeBigInt.Type value = 1;\n    message Type {\n        required int64 greater = 1;\n        required int64 greater_equal = 2;\n        required int64 less = 3;\n        required int64 less_equal = 4;\n        required int64 greater_less = 5;\n        required int64 greater_equal_less = 6;\n        required int64 greater_less_equal = 7;\n        required int64 greater_equal_less_equal = 8;\n        required int64 equal = 9;\n    }\n}',
});
