import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_protobuf_isEncode_ObjectInternal = _test_protobuf_isEncode(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)({
    isEncode: (input: ObjectInternal): Uint8Array | null => {
        const is = (input: any): input is ObjectInternal => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).id &&
                "string" === typeof (input as any).name
            );
        };
        const encode = (input: ObjectInternal): Uint8Array => {
            const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
            const $Writer = (typia.protobuf.createIsEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "id";
                    writer.uint32(10);
                    writer.string(input.id);
                    // property "name";
                    writer.uint32(18);
                    writer.string(input.name);
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
        'syntax = "proto3";\n\nmessage ObjectInternal {\n    required string id = 1;\n    required string name = 2;\n}',
});
