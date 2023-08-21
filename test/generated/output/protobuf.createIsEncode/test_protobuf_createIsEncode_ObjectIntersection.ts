import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_protobuf_isEncode_ObjectIntersection =
    _test_protobuf_isEncode("ObjectIntersection")<ObjectIntersection>(
        ObjectIntersection,
    )({
        isEncode: (input: ObjectIntersection): Uint8Array | null => {
            const is = (input: any): input is ObjectIntersection => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).email &&
                    "string" === typeof (input as any).name &&
                    "boolean" === typeof (input as any).vulnerable
                );
            };
            const encode = (input: ObjectIntersection): Uint8Array => {
                const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
                const $Writer = (typia.protobuf.createIsEncode as any).Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "email";
                        writer.uint32(10);
                        writer.string(input.email);
                        // property "name";
                        writer.uint32(18);
                        writer.string(input.name);
                        // property "vulnerable";
                        writer.uint32(24);
                        writer.bool(input.vulnerable);
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
            'syntax = "proto3";\n\nmessage ObjectIntersection {\n    required string email = 1;\n    required string name = 2;\n    required bool vulnerable = 3;\n}',
    });
