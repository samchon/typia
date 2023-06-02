import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TagPattern } from "../../../structures/TagPattern";

export const test_createPrune_TagPattern = _test_prune(
    "TagPattern",
    TagPattern.generate,
    (input: TagPattern): void => {
        const $po0: any = (input: any): any => {
            for (const key: any of Object.keys(input)) {
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
