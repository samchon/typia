import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_protobuf_isEncode_ObjectPrimitive = _test_protobuf_isEncode(
    "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)({
    isEncode: (input: ObjectPrimitive): Uint8Array | null => {
        const is = (input: any): input is ObjectPrimitive => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                ("txt" === input.extension ||
                    "md" === input.extension ||
                    "html" === input.extension) &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                ) &&
                "boolean" === typeof input.secret &&
                "string" === typeof input.created_at;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.extension &&
                "string" === typeof input.url &&
                "string" === typeof input.created_at;
            return "object" === typeof input && null !== input && $io0(input);
        };
        const encode = (input: ObjectPrimitive): Uint8Array => {
            const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
            const $Writer = (typia.protobuf.createIsEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "id";
                    writer.uint32(10);
                    writer.string(input.id);
                    // property "extension";
                    writer.uint32(18);
                    writer.string(input.extension);
                    // property "title";
                    writer.uint32(26);
                    writer.string(input.title);
                    // property "body";
                    writer.uint32(34);
                    writer.string(input.body);
                    // property "files";
                    if (0 !== input.files.length) {
                        for (const elem of input.files) {
                            writer.uint32(42);
                            writer.fork();
                            $peo1(elem);
                            writer.ldelim();
                        }
                    }
                    // property "secret";
                    writer.uint32(48);
                    writer.bool(input.secret);
                    // property "created_at";
                    writer.uint32(58);
                    writer.string(input.created_at);
                };
                const $peo1 = (input: any): any => {
                    // property "id";
                    writer.uint32(10);
                    writer.string(input.id);
                    // property "name";
                    writer.uint32(18);
                    writer.string(input.name);
                    // property "extension";
                    writer.uint32(26);
                    writer.string(input.extension);
                    // property "url";
                    writer.uint32(34);
                    writer.string(input.url);
                    // property "created_at";
                    writer.uint32(42);
                    writer.string(input.created_at);
                };
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.extension &&
                    "string" === typeof input.url &&
                    "string" === typeof input.created_at;
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
        'syntax = "proto3";\n\nmessage ObjectPrimitive {\n    message IArticle {\n        required string id = 1;\n        required string extension = 2;\n        required string title = 3;\n        required string body = 4;\n        repeated ObjectPrimitive.IFile files = 5;\n        required bool secret = 6;\n        required string created_at = 7;\n    }\n\n    message IFile {\n        required string id = 1;\n        required string name = 2;\n        required string extension = 3;\n        required string url = 4;\n        required string created_at = 5;\n    }\n}',
});
