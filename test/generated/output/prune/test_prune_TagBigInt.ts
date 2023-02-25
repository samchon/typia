import typia from "../../../src";
import { TagBigInt } from "../../structures/TagBigInt";
import { _test_prune } from "../internal/_test_prune";
export const test_prune_TagBigInt = _test_prune("TagBigInt", TagBigInt.generate, (input) => ((input: TagBigInt): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("value" === key || "ranged" === key || "minimum" === key || "maximum" === key || "multipleOf" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
})(input));
