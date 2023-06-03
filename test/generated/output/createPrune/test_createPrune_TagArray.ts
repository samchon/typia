import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TagArray } from "../../../structures/TagArray";

export const test_createPrune_TagArray = _test_prune(
    "TagArray",
    TagArray.generate,
    (input: TagArray): void => {
        const $is_uuid = (typia.createPrune as any).is_uuid;
        const $pp0 = (input: any) =>
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $po0(elem);
            });
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "items" === key ||
                    "minItems" === key ||
                    "maxItems" === key ||
                    "both" === key
                )
                    continue;
                delete input[key];
            }
        };
        if (Array.isArray(input)) $pp0(input);
    },
);
