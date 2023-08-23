import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_protobuf_isEncode_ClassNonPublic = _test_protobuf_isEncode(
    "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)({
    isEncode: (input) =>
        ((input: ClassNonPublic): Uint8Array | null => {
            const is = (input: any): input is ClassNonPublic => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).implicit &&
                    "string" === typeof (input as any).shown
                );
            };
            const encode = (input: ClassNonPublic): Uint8Array => {
                const $Sizer = (typia.protobuf.isEncode as any).Sizer;
                const $Writer = (typia.protobuf.isEncode as any).Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "implicit";
                        writer.uint32(10);
                        writer.string(input.implicit);
                        // property "shown";
                        writer.uint32(18);
                        writer.string(input.shown);
                    };
                    //ClassNonPublic.Accessor;
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
        'syntax = "proto3";\n\nmessage ClassNonPublic {\n    message Accessor {\n        required string implicit = 1;\n        required string shown = 2;\n    }\n}',
    decode: (input: Uint8Array): ClassNonPublic => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                implicit: "" as any,
                shown: "" as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // string;
                        output.implicit = reader.string();
                        break;
                    case 2:
                        // string;
                        output.shown = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return output;
        };
        const reader = new $Reader(input);
        return $pdo0(reader);
    },
});
