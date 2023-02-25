import typia from "../../../src";
import { TagInfinite } from "../../structures/TagInfinite";
import { _test_prune } from "../internal/_test_prune";
export const test_prune_TagInfinite = _test_prune("TagInfinite", TagInfinite.generate, (input) => ((input: TagInfinite): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("value" === key || "ranged" === key || "minimum" === key || "maximum" === key || "multipleOf" === key || "typed" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
})(input));
