import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TagInfinite } from "../../../structures/TagInfinite";
export const test_createPrune_TagInfinite = _test_prune("TagInfinite", TagInfinite.generate, (input: TagInfinite): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("value" === key || "ranged" === key || "minimum" === key || "maximum" === key || "multipleOf" === key || "typed" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
});
