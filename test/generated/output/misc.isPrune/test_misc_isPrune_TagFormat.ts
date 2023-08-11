import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TagFormat } from "../../../structures/TagFormat";

export const test_misc_isPrune_TagFormat = _test_misc_isPrune<TagFormat>(
    TagFormat,
)((input) =>
    ((input: any): input is TagFormat => {
        const is = (input: any): input is TagFormat => {
            const $is_uuid = (typia.misc.isPrune as any).is_uuid;
            const $is_email = (typia.misc.isPrune as any).is_email;
            const $is_url = (typia.misc.isPrune as any).is_url;
            const $is_ipv4 = (typia.misc.isPrune as any).is_ipv4;
            const $is_ipv6 = (typia.misc.isPrune as any).is_ipv6;
            const $is_date = (typia.misc.isPrune as any).is_date;
            const $is_datetime = (typia.misc.isPrune as any).is_datetime;
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
        const prune = (input: TagFormat): void => {
            const $is_uuid = (typia.misc.isPrune as any).is_uuid;
            const $is_email = (typia.misc.isPrune as any).is_email;
            const $is_url = (typia.misc.isPrune as any).is_url;
            const $is_ipv4 = (typia.misc.isPrune as any).is_ipv4;
            const $is_ipv6 = (typia.misc.isPrune as any).is_ipv6;
            const $is_date = (typia.misc.isPrune as any).is_date;
            const $is_datetime = (typia.misc.isPrune as any).is_datetime;
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "uuid" === key ||
                        "email" === key ||
                        "url" === key ||
                        "ipv4" === key ||
                        "ipv6" === key ||
                        "date" === key ||
                        "date_time" === key ||
                        "custom" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    })(input),
);
