import typia from "../../../../src";
import { TagFormat } from "../../../structures/TagFormat";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_createStringify_TagFormat = _test_stringify("TagFormat", TagFormat.generate, (input: TagFormat): string => {
    const $string = (typia.createStringify as any).string;
    const $is_uuid = (typia.createStringify as any).is_uuid;
    const $is_email = (typia.createStringify as any).is_email;
    const $is_url = (typia.createStringify as any).is_url;
    const $is_ipv4 = (typia.createStringify as any).is_ipv4;
    const $is_ipv6 = (typia.createStringify as any).is_ipv6;
    const $is_date = (typia.createStringify as any).is_date;
    const $is_datetime = (typia.createStringify as any).is_datetime;
    const $so0 = (input: any): any => `{"uuid":${$string(input.uuid)},"email":${$string(input.email)},"url":${$string(input.url)},"ipv4":${$string(input.ipv4)},"ipv6":${$string(input.ipv6)},"date":${$string(input.date)},"date_time":${$string(input.date_time)},"datetime":${$string(input.datetime)},"dateTime":${$string(input.dateTime)},"custom":${$string(input.custom)}}`;
    return $so0(input);
});
