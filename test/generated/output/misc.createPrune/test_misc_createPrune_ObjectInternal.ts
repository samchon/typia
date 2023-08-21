import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_misc_prune_ObjectInternal = _test_misc_prune(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)((input: ObjectInternal): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "name" === key) continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input) $po0(input);
});
