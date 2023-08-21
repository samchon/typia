import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_protobuf_encode_TagBigInt = _test_protobuf_encode(
    "TagBigInt",
)<TagBigInt>(TagBigInt)({
    encode: (input) =>
        ((input: TagBigInt): Uint8Array => {
            const $Sizer = (typia.protobuf.encode as any).Sizer;
            const $Writer = (typia.protobuf.encode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "value";
                    writer.uint32(8);
                    writer.int64(input.value);
                    // property "ranged";
                    writer.uint32(16);
                    writer.int64(input.ranged);
                    // property "minimum";
                    writer.uint32(24);
                    writer.int64(input.minimum);
                    // property "maximum";
                    writer.uint32(32);
                    writer.int64(input.maximum);
                    // property "multipleOf";
                    writer.uint32(40);
                    writer.int64(input.multipleOf);
                };
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        })(input),
    message:
        'syntax = "proto3";\n\nmessage TagBigInt {\n    required int64 value = 1;\n    required int64 ranged = 2;\n    required int64 minimum = 3;\n    required int64 maximum = 4;\n    required int64 multipleOf = 5;\n}',
});
