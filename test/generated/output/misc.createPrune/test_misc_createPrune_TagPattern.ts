import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TagPattern } from "../../../structures/TagPattern";

export const test_misc_prune_TagPattern = _test_misc_prune(
    "TagPattern",
    TagPattern.generate,
    (input: TagPattern): void => {
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "uuid" === key ||
                    "email" === key ||
                    "ipv4" === key ||
                    "ipv6" === key
                )
                    continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    },
);
