import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagFormat } from "../../../structures/TagFormat";

export const test_json_stringify_TagFormat = _test_json_stringify<TagFormat>(
    TagFormat,
)((input) =>
    ((input: TagFormat): string => {
        const $string = (typia.json.stringify as any).string;
        const $is_uuid = (typia.json.stringify as any).is_uuid;
        const $is_email = (typia.json.stringify as any).is_email;
        const $is_url = (typia.json.stringify as any).is_url;
        const $is_ipv4 = (typia.json.stringify as any).is_ipv4;
        const $is_ipv6 = (typia.json.stringify as any).is_ipv6;
        const $is_date = (typia.json.stringify as any).is_date;
        const $is_datetime = (typia.json.stringify as any).is_datetime;
        const $so0 = (input: any): any =>
            `{"uuid":${$string(input.uuid)},"email":${$string(
                input.email,
            )},"url":${$string(input.url)},"ipv4":${$string(
                input.ipv4,
            )},"ipv6":${$string(input.ipv6)},"date":${$string(
                input.date,
            )},"date_time":${$string(input.date_time)},"datetime":${$string(
                input.datetime,
            )},"dateTime":${$string(input.dateTime)},"custom":${$string(
                input.custom,
            )}}`;
        return $so0(input);
    })(input),
);
