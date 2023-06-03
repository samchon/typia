import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TagFormat } from "../../../structures/TagFormat";

export const test_createIsStringify_TagFormat = _test_isStringify(
    "TagFormat",
    TagFormat.generate,
    (input: TagFormat): string | null => {
        const is = (input: any): input is TagFormat => {
            const $is_uuid = (typia.createIsStringify as any).is_uuid;
            const $is_email = (typia.createIsStringify as any).is_email;
            const $is_url = (typia.createIsStringify as any).is_url;
            const $is_ipv4 = (typia.createIsStringify as any).is_ipv4;
            const $is_ipv6 = (typia.createIsStringify as any).is_ipv6;
            const $is_date = (typia.createIsStringify as any).is_date;
            const $is_datetime = (typia.createIsStringify as any).is_datetime;
            const $io0 = (input: any): boolean =>
                "string" === typeof input.uuid &&
                $is_uuid(input.uuid) &&
                "string" === typeof input.email &&
                $is_email(input.email) &&
                "string" === typeof input.url &&
                $is_url(input.url) &&
                "string" === typeof input.ipv4 &&
                $is_ipv4(input.ipv4) &&
                "string" === typeof input.ipv6 &&
                $is_ipv6(input.ipv6) &&
                "string" === typeof input.date &&
                $is_date(input.date) &&
                "string" === typeof input.date_time &&
                $is_datetime(input.date_time) &&
                "string" === typeof input.datetime &&
                $is_datetime(input.datetime) &&
                "string" === typeof input.dateTime &&
                $is_datetime(input.dateTime) &&
                "string" === typeof input.custom;
            return "object" === typeof input && null !== input && $io0(input);
        };
        const stringify = (input: TagFormat): string => {
            const $string = (typia.createIsStringify as any).string;
            const $is_uuid = (typia.createIsStringify as any).is_uuid;
            const $is_email = (typia.createIsStringify as any).is_email;
            const $is_url = (typia.createIsStringify as any).is_url;
            const $is_ipv4 = (typia.createIsStringify as any).is_ipv4;
            const $is_ipv6 = (typia.createIsStringify as any).is_ipv6;
            const $is_date = (typia.createIsStringify as any).is_date;
            const $is_datetime = (typia.createIsStringify as any).is_datetime;
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
        };
        return is(input) ? stringify(input) : null;
    },
    TagFormat.SPOILERS,
);
