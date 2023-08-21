import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TagCustom } from "../../../structures/TagCustom";

export const test_misc_prune_TagCustom = _test_misc_prune(
    "TagCustom",
)<TagCustom>(TagCustom)((input) =>
    ((input: TagCustom): void => {
        const $is_uuid = (typia.misc.prune as any).is_uuid;
        const $is_custom = (typia.misc.prune as any).is_custom;
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "id" === key ||
                    "dollar" === key ||
                    "postfix" === key ||
                    "log" === key
                )
                    continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    })(input),
);
