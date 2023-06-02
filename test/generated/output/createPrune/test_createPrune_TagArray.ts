import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TagArray } from "../../../structures/TagArray";

export const test_createPrune_TagArray = _test_prune(
    "TagArray",
    TagArray.generate,
    (input: TagArray): void => {
        const $is_uuid: any = (typia.createPrune as any).is_uuid;
        const $po0: any = (input: any): any => {
            for (const key: any of Object.keys(input)) {
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
        if (Array.isArray(input))
            (() =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                }))();
    },
);
