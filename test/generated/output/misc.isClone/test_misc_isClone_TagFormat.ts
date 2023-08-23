import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TagFormat } from "../../../structures/TagFormat";

export const test_misc_isClone_TagFormat = _test_misc_isClone(
    "TagFormat",
)<TagFormat>(TagFormat)((input) =>
    ((input: any): typia.Resolved<TagFormat> | null => {
        const is = (input: any): input is TagFormat => {
            const $is_uuid = (typia.misc.isClone as any).is_uuid;
            const $is_email = (typia.misc.isClone as any).is_email;
            const $is_url = (typia.misc.isClone as any).is_url;
            const $is_ipv4 = (typia.misc.isClone as any).is_ipv4;
            const $is_ipv6 = (typia.misc.isClone as any).is_ipv6;
            const $is_date = (typia.misc.isClone as any).is_date;
            const $is_datetime = (typia.misc.isClone as any).is_datetime;
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).uuid &&
                $is_uuid((input as any).uuid) &&
                "string" === typeof (input as any).email &&
                $is_email((input as any).email) &&
                "string" === typeof (input as any).url &&
                $is_url((input as any).url) &&
                "string" === typeof (input as any).ipv4 &&
                $is_ipv4((input as any).ipv4) &&
                "string" === typeof (input as any).ipv6 &&
                $is_ipv6((input as any).ipv6) &&
                "string" === typeof (input as any).date &&
                $is_date((input as any).date) &&
                "string" === typeof (input as any).date_time &&
                $is_datetime((input as any).date_time) &&
                "string" === typeof (input as any).custom
            );
        };
        const clone = (input: TagFormat): typia.Resolved<TagFormat> => {
            const $is_uuid = (typia.misc.isClone as any).is_uuid;
            const $is_email = (typia.misc.isClone as any).is_email;
            const $is_url = (typia.misc.isClone as any).is_url;
            const $is_ipv4 = (typia.misc.isClone as any).is_ipv4;
            const $is_ipv6 = (typia.misc.isClone as any).is_ipv6;
            const $is_date = (typia.misc.isClone as any).is_date;
            const $is_datetime = (typia.misc.isClone as any).is_datetime;
            const $co0 = (input: any): any => ({
                uuid: input.uuid as any,
                email: input.email as any,
                url: input.url as any,
                ipv4: input.ipv4 as any,
                ipv6: input.ipv6 as any,
                date: input.date as any,
                date_time: input.date_time as any,
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
);
