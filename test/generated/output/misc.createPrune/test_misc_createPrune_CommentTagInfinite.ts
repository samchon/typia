import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { CommentTagInfinite } from "../../../structures/CommentTagInfinite";

export const test_misc_prune_CommentTagInfinite = _test_misc_prune(
    "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)((input: CommentTagInfinite): void => {
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
