import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TagNaN } from "../../../structures/TagNaN";

export const test_misc_prune_TagNaN = _test_misc_prune("TagNaN")<TagNaN>(
    TagNaN,
)((input: TagNaN): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if (
                "value" === key ||
                "ranged" === key ||
                "minimum" === key ||
                "maximum" === key ||
                "multipleOf" === key ||
                "typed" === key
            )
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input) $po0(input);
});
