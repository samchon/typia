import typia from "../../../../src";
import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { TagFormat } from "../../../structures/TagFormat";

export const test_protobuf_decode_TagFormat = _test_protobuf_decode(
    "TagFormat",
)<TagFormat>(TagFormat)({
    decode: (input) =>
        ((input: Uint8Array): typia.Resolved<TagFormat> => {
            const $Reader = (typia.protobuf.decode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    uuid: "" as any,
                    email: "" as any,
                    url: "" as any,
                    ipv4: "" as any,
                    ipv6: "" as any,
                    date: "" as any,
                    date_time: "" as any,
                    custom: "" as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // string;
                            output.uuid = reader.string();
                            break;
                        case 2:
                            // string;
                            output.email = reader.string();
                            break;
                        case 3:
                            // string;
                            output.url = reader.string();
                            break;
                        case 4:
                            // string;
                            output.ipv4 = reader.string();
                            break;
                        case 5:
                            // string;
                            output.ipv6 = reader.string();
                            break;
                        case 6:
                            // string;
                            output.date = reader.string();
                            break;
                        case 7:
                            // string;
                            output.date_time = reader.string();
                            break;
                        case 8:
                            // string;
                            output.custom = reader.string();
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
        })(input),
    encode: (input: TagFormat): Uint8Array => {
        const $is_uuid = (typia.protobuf.createEncode as any).is_uuid;
        const $is_email = (typia.protobuf.createEncode as any).is_email;
        const $is_url = (typia.protobuf.createEncode as any).is_url;
        const $is_ipv4 = (typia.protobuf.createEncode as any).is_ipv4;
        const $is_ipv6 = (typia.protobuf.createEncode as any).is_ipv6;
        const $is_date = (typia.protobuf.createEncode as any).is_date;
        const $is_datetime = (typia.protobuf.createEncode as any).is_datetime;
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "uuid";
                writer.uint32(10);
                writer.string(input.uuid);
                // property "email";
                writer.uint32(18);
                writer.string(input.email);
                // property "url";
                writer.uint32(26);
                writer.string(input.url);
                // property "ipv4";
                writer.uint32(34);
                writer.string(input.ipv4);
                // property "ipv6";
                writer.uint32(42);
                writer.string(input.ipv6);
                // property "date";
                writer.uint32(50);
                writer.string(input.date);
                // property "date_time";
                writer.uint32(58);
                writer.string(input.date_time);
                // property "custom";
                writer.uint32(66);
                writer.string(input.custom);
            };
            //TagFormat;
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
});
