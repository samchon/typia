import typia from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_prune } from "../internal/_test_prune";
export const test_createPrune_TagArray = _test_prune("TagArray", TagArray.generate, (input: TagArray): void => {
    const $is_uuid = (typia.createPrune as any).is_uuid;
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("items" === key || "minItems" === key || "maxItems" === key || "both" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $po0(elem);
        });
});
