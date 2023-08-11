import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TagFormat } from "../../../structures/TagFormat";

export const test_misc_prune_TagFormat = _test_misc_prune<TagFormat>(TagFormat)(
    (input: TagFormat): void => {
        const $is_uuid = (typia.misc.createPrune as any).is_uuid;
        const $is_email = (typia.misc.createPrune as any).is_email;
        const $is_url = (typia.misc.createPrune as any).is_url;
        const $is_ipv4 = (typia.misc.createPrune as any).is_ipv4;
        const $is_ipv6 = (typia.misc.createPrune as any).is_ipv6;
        const $is_date = (typia.misc.createPrune as any).is_date;
        const $is_datetime = (typia.misc.createPrune as any).is_datetime;
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
    },
);
