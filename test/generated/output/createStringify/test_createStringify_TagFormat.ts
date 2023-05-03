import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagFormat } from "../../../structures/TagFormat";

export const test_createStringify_TagFormat = _test_stringify(
    "TagFormat",
    TagFormat.generate,
    (input: TagFormat): string => {
        const $string = (typia.createStringify as any).string;
        const $is_uuid = (typia.createStringify as any).is_uuid;
        const $is_email = (typia.createStringify as any).is_email;
        const $is_url = (typia.createStringify as any).is_url;
        const $is_ipv4 = (typia.createStringify as any).is_ipv4;
        const $is_ipv6 = (typia.createStringify as any).is_ipv6;
        const $is_date = (typia.createStringify as any).is_date;
        const $is_datetime = (typia.createStringify as any).is_datetime;
        const $so0 = (input: any): any =>
            `{"uuid":${'"' + input.uuid + '"'},"email":${
                '"' + input.email + '"'
            },"url":${'"' + input.url + '"'},"ipv4":${
                '"' + input.ipv4 + '"'
            },"ipv6":${'"' + input.ipv6 + '"'},"date":${
                '"' + input.date + '"'
            },"date_time":${'"' + input.date_time + '"'},"datetime":${
                '"' + input.datetime + '"'
            },"dateTime":${'"' + input.dateTime + '"'},"custom":${$string(
                input.custom,
            )}}`;
        return $so0(input);
    },
);
