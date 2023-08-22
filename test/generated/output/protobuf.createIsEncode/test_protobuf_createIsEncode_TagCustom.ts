import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { TagCustom } from "../../../structures/TagCustom";

export const test_protobuf_isEncode_TagCustom = _test_protobuf_isEncode(
    "TagCustom",
)<TagCustom>(TagCustom)({
    isEncode: (input: TagCustom): Uint8Array | null => {
        const is = (input: any): input is TagCustom => {
            const $is_uuid = (typia.protobuf.createIsEncode as any).is_uuid;
            const $is_custom = (typia.protobuf.createIsEncode as any).is_custom;
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).id &&
                $is_uuid((input as any).id) &&
                "string" === typeof (input as any).dollar &&
                $is_custom("dollar", "string", "", (input as any).dollar) &&
                "string" === typeof (input as any).postfix &&
                $is_custom(
                    "postfix",
                    "string",
                    "abcd",
                    (input as any).postfix,
                ) &&
                "number" === typeof (input as any).log &&
                Number.isFinite((input as any).log) &&
                $is_custom("powerOf", "number", "10", (input as any).log)
            );
        };
        const encode = (input: TagCustom): Uint8Array => {
            const $is_uuid = (typia.protobuf.createIsEncode as any).is_uuid;
            const $is_custom = (typia.protobuf.createIsEncode as any).is_custom;
            const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
            const $Writer = (typia.protobuf.createIsEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "id";
                    writer.uint32(10);
                    writer.string(input.id);
                    // property "dollar";
                    writer.uint32(18);
                    writer.string(input.dollar);
                    // property "postfix";
                    writer.uint32(26);
                    writer.string(input.postfix);
                    // property "log";
                    writer.uint32(33);
                    writer.double(input.log);
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
        'syntax = "proto3";\n\nmessage TagCustom {\n    required string id = 1;\n    required string dollar = 2;\n    required string postfix = 3;\n    required double log = 4;\n}',
    decode: (input: Uint8Array): TagCustom => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                id: "" as any,
                dollar: "" as any,
                postfix: "" as any,
                log: undefined as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        output.id = reader.string();
                        break;
                    case 2:
                        output.dollar = reader.string();
                        break;
                    case 3:
                        output.postfix = reader.string();
                        break;
                    case 4:
                        output.log = reader.double();
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
