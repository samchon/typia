import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_protobuf_encode_ClassNonPublic = _test_protobuf_encode(
    "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)({
    encode: (input: ClassNonPublic): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "implicit";
                writer.uint32(10);
                writer.string(input.implicit);
                // property "shown";
                writer.uint32(18);
                writer.string(input.shown);
            };
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
    message:
        'syntax = "proto3";\n\nmessage ClassNonPublic {\n    message Accessor {\n        required string implicit = 1;\n        required string shown = 2;\n    }\n}',
});
