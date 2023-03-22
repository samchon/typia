import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { TagFormat } from "../../../structures/TagFormat";

export const test_isClone_TagFormat = _test_isClone(
    "TagFormat",
    TagFormat.generate,
    (input) =>
        ((input: any): typia.Primitive<TagFormat> | null => {
            const is = (input: any): input is TagFormat => {
                const $is_uuid = (typia.isClone as any).is_uuid;
                const $is_email = (typia.isClone as any).is_email;
                const $is_url = (typia.isClone as any).is_url;
                const $is_ipv4 = (typia.isClone as any).is_ipv4;
                const $is_ipv6 = (typia.isClone as any).is_ipv6;
                const $is_date = (typia.isClone as any).is_date;
                const $is_datetime = (typia.isClone as any).is_datetime;
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.uuid &&
                    true === $is_uuid(input.uuid) &&
                    "string" === typeof input.email &&
                    true === $is_email(input.email) &&
                    "string" === typeof input.url &&
                    true === $is_url(input.url) &&
                    "string" === typeof input.ipv4 &&
                    true === $is_ipv4(input.ipv4) &&
                    "string" === typeof input.ipv6 &&
                    true === $is_ipv6(input.ipv6) &&
                    "string" === typeof input.date &&
                    true === $is_date(input.date) &&
                    "string" === typeof input.date_time &&
                    true === $is_datetime(input.date_time) &&
                    "string" === typeof input.datetime &&
                    true === $is_datetime(input.datetime) &&
                    "string" === typeof input.dateTime &&
                    true === $is_datetime(input.dateTime) &&
                    "string" === typeof input.custom;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const clone = (input: TagFormat): typia.Primitive<TagFormat> => {
                const $is_uuid = (typia.isClone as any).is_uuid;
                const $is_email = (typia.isClone as any).is_email;
                const $is_url = (typia.isClone as any).is_url;
                const $is_ipv4 = (typia.isClone as any).is_ipv4;
                const $is_ipv6 = (typia.isClone as any).is_ipv6;
                const $is_date = (typia.isClone as any).is_date;
                const $is_datetime = (typia.isClone as any).is_datetime;
                const $co0 = (input: any): any => ({
                    uuid: input.uuid as any,
                    email: input.email as any,
                    url: input.url as any,
                    ipv4: input.ipv4 as any,
                    ipv6: input.ipv6 as any,
                    date: input.date as any,
                    date_time: input.date_time as any,
                    datetime: input.datetime as any,
                    dateTime: input.dateTime as any,
                    custom: input.custom as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    TagFormat.SPOILERS,
);
