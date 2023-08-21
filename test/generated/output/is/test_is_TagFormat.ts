import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagFormat } from "../../../structures/TagFormat";

export const test_is_TagFormat = _test_is("TagFormat")<TagFormat>(TagFormat)(
    (input) =>
        ((input: any): input is TagFormat => {
            const $is_uuid = (typia.is as any).is_uuid;
            const $is_email = (typia.is as any).is_email;
            const $is_url = (typia.is as any).is_url;
            const $is_ipv4 = (typia.is as any).is_ipv4;
            const $is_ipv6 = (typia.is as any).is_ipv6;
            const $is_date = (typia.is as any).is_date;
            const $is_datetime = (typia.is as any).is_datetime;
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
        })(input),
);
