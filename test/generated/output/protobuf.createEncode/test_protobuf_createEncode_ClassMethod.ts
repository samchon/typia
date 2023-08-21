import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_protobuf_encode_ClassMethod = _test_protobuf_encode(
    "ClassMethod",
)<ClassMethod>(ClassMethod)({
    encode: (input: ClassMethod): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "name";
                writer.uint32(10);
                writer.string(input.name);
                // property "age";
                writer.uint32(17);
                writer.double(input.age);
            };
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
    message:
        'syntax = "proto3";\n\nmessage ClassMethod {\n    message Animal {\n        required string name = 1;\n        required double age = 2;\n    }\n}',
});
