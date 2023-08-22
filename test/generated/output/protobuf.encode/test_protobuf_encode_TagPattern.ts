import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TagPattern } from "../../../structures/TagPattern";

export const test_protobuf_encode_TagPattern = _test_protobuf_encode(
    "TagPattern",
)<TagPattern>(TagPattern)({
    encode: (input) =>
        ((input: TagPattern): Uint8Array => {
            const $Sizer = (typia.protobuf.encode as any).Sizer;
            const $Writer = (typia.protobuf.encode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "uuid";
                    writer.uint32(10);
                    writer.string(input.uuid);
                    // property "email";
                    writer.uint32(18);
                    writer.string(input.email);
                    // property "ipv4";
                    writer.uint32(26);
                    writer.string(input.ipv4);
                    // property "ipv6";
                    writer.uint32(34);
                    writer.string(input.ipv6);
                };
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        })(input),
    message:
        'syntax = "proto3";\n\nmessage TagPattern {\n    required string uuid = 1;\n    required string email = 2;\n    required string ipv4 = 3;\n    required string ipv6 = 4;\n}',
    decode: (input: Uint8Array): TagPattern => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                uuid: "" as any,
                email: "" as any,
                ipv4: "" as any,
                ipv6: "" as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        output.uuid = reader.string();
                        break;
                    case 2:
                        output.email = reader.string();
                        break;
                    case 3:
                        output.ipv4 = reader.string();
                        break;
                    case 4:
                        output.ipv6 = reader.string();
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
