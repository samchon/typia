import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_protobuf_isEncode_ClassPropertyAssignment =
    _test_protobuf_isEncode<ClassPropertyAssignment>(ClassPropertyAssignment)({
        isEncode: (input: ClassPropertyAssignment): Uint8Array | null => {
            const is = (input: any): input is ClassPropertyAssignment => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "assignment" === input.note &&
                    false === input.editable &&
                    "boolean" === typeof input.incremental;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const encode = (input: ClassPropertyAssignment): Uint8Array => {
                const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
                const $Writer = (typia.protobuf.createIsEncode as any).Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "id";
                        writer.uint32(9);
                        writer.double(input.id);
                        // property "name";
                        writer.uint32(18);
                        writer.string(input.name);
                        // property "note";
                        writer.uint32(26);
                        writer.string(input.note);
                        // property "editable";
                        writer.uint32(32);
                        writer.bool(input.editable);
                        // property "incremental";
                        writer.uint32(40);
                        writer.bool(input.incremental);
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
            'syntax = "proto3";\n\nmessage ClassPropertyAssignment {\n    required double id = 1;\n    required string name = 2;\n    required string note = 3;\n    required bool editable = 4;\n    required bool incremental = 5;\n}',
    });
