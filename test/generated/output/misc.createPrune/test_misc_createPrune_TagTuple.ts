import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TagTuple } from "../../../structures/TagTuple";

export const test_misc_prune_TagTuple = _test_misc_prune("TagTuple")<TagTuple>(
    TagTuple,
)((input: TagTuple): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("tuple" === key) continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input) $po0(input);
});
