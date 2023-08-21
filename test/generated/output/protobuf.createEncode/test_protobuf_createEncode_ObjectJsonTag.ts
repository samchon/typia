import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_protobuf_encode_ObjectJsonTag = _test_protobuf_encode(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)({
    encode: (input: ObjectJsonTag): Uint8Array => {
        const $is_custom = (typia.protobuf.createEncode as any).is_custom;
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "vulnerable";
                writer.uint32(10);
                writer.string(input.vulnerable);
                // property "description";
                writer.uint32(18);
                writer.string(input.description);
                // property "title";
                writer.uint32(26);
                writer.string(input.title);
                // property "complicate_title";
                writer.uint32(34);
                writer.string(input.complicate_title);
            };
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
    message:
        'syntax = "proto3";\n\nmessage ObjectJsonTag {\n    required string vulnerable = 1;\n    required string description = 2;\n    required string title = 3;\n    required string complicate_title = 4;\n}',
});
