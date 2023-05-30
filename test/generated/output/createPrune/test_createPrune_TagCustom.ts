import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TagCustom } from "../../../structures/TagCustom";
export const test_createPrune_TagCustom = _test_prune("TagCustom", TagCustom.generate, (input: TagCustom): void => {
    const $is_uuid = (typia.createPrune as any).is_uuid;
    const $is_custom = (typia.createPrune as any).is_custom;
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "dollar" === key || "postfix" === key || "log" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
});
