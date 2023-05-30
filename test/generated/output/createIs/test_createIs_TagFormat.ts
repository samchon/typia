import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagFormat } from "../../../structures/TagFormat";
export const test_createIs_TagFormat = _test_is("TagFormat", TagFormat.generate, (input: any): input is TagFormat => {
    const $is_uuid = (typia.createIs as any).is_uuid;
    const $is_email = (typia.createIs as any).is_email;
    const $is_url = (typia.createIs as any).is_url;
    const $is_ipv4 = (typia.createIs as any).is_ipv4;
    const $is_ipv6 = (typia.createIs as any).is_ipv6;
    const $is_date = (typia.createIs as any).is_date;
    const $is_datetime = (typia.createIs as any).is_datetime;
    const $io0 = (input: any): boolean => "string" === typeof input.uuid && $is_uuid(input.uuid) && ("string" === typeof input.email && $is_email(input.email)) && ("string" === typeof input.url && $is_url(input.url)) && ("string" === typeof input.ipv4 && $is_ipv4(input.ipv4)) && ("string" === typeof input.ipv6 && $is_ipv6(input.ipv6)) && ("string" === typeof input.date && $is_date(input.date)) && ("string" === typeof input.date_time && $is_datetime(input.date_time)) && ("string" === typeof input.datetime && $is_datetime(input.datetime)) && ("string" === typeof input.dateTime && $is_datetime(input.dateTime)) && "string" === typeof input.custom;
    return "object" === typeof input && null !== input && $io0(input);
}, TagFormat.SPOILERS);
