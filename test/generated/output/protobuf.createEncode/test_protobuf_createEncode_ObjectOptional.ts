import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_protobuf_encode_ObjectOptional = _test_protobuf_encode(
    "ObjectOptional",
)<ObjectOptional>(ObjectOptional)({
    encode: (input: ObjectOptional): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "id";
                if (undefined != input.id && null != input.id) {
                    writer.uint32(10);
                    writer.string(input.id);
                }
                // property "name";
                if (undefined != input.name && null != input.name) {
                    writer.uint32(18);
                    writer.string(input.name);
                }
                // property "email";
                if (undefined != input.email && null != input.email) {
                    writer.uint32(26);
                    writer.string(input.email);
                }
                // property "sequence";
                if (undefined != input.sequence && null != input.sequence) {
                    writer.uint32(33);
                    writer.double(input.sequence);
                }
            };
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
    message:
        'syntax = "proto3";\n\nmessage ObjectOptional {\n    optional string id = 1;\n    optional string name = 2;\n    optional string email = 3;\n    optional double sequence = 4;\n}',
});
