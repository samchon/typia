import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_misc_createPrune_ClassGetter = _test_misc_prune(
    "ClassGetter",
)<ClassGetter>(ClassGetter)((input: ClassGetter): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "name" === key || "dead" === key) continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input) $po0(input);
});
