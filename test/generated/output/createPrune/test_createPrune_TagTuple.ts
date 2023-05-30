import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TagTuple } from "../../../structures/TagTuple";
export const test_createPrune_TagTuple = _test_prune("TagTuple", TagTuple.generate, (input: TagTuple): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("tuple" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
});
