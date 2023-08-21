import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TagCustom } from "../../../structures/TagCustom";

export const test_protobuf_encode_TagCustom = _test_protobuf_encode(
    "TagCustom",
)<TagCustom>(TagCustom)({
    encode: (input: TagCustom): Uint8Array => {
        const $is_uuid = (typia.protobuf.createEncode as any).is_uuid;
        const $is_custom = (typia.protobuf.createEncode as any).is_custom;
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "id";
                writer.uint32(10);
                writer.string(input.id);
                // property "dollar";
                writer.uint32(18);
                writer.string(input.dollar);
                // property "postfix";
                writer.uint32(26);
                writer.string(input.postfix);
                // property "log";
                writer.uint32(33);
                writer.double(input.log);
            };
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
    message:
        'syntax = "proto3";\n\nmessage TagCustom {\n    required string id = 1;\n    required string dollar = 2;\n    required string postfix = 3;\n    required double log = 4;\n}',
});
