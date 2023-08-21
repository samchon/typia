import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_protobuf_isEncode_ClassMethod = _test_protobuf_isEncode(
    "ClassMethod",
)<ClassMethod>(ClassMethod)({
    isEncode: (input) =>
        ((input: ClassMethod): Uint8Array | null => {
            const is = (input: any): input is ClassMethod => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).name &&
                    "number" === typeof (input as any).age &&
                    Number.isFinite((input as any).age)
                );
            };
            const encode = (input: ClassMethod): Uint8Array => {
                const $Sizer = (typia.protobuf.isEncode as any).Sizer;
                const $Writer = (typia.protobuf.isEncode as any).Writer;
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
            };
            return is(input) ? encode(input) : null;
        })(input),
    message:
        'syntax = "proto3";\n\nmessage ClassMethod {\n    message Animal {\n        required string name = 1;\n        required double age = 2;\n    }\n}',
});
