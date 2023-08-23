import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_misc_isPrune_ClassGetter = _test_misc_isPrune(
    "ClassGetter",
)<ClassGetter>(ClassGetter)((input: any): input is ClassGetter => {
    const is = (input: any): input is ClassGetter => {
        const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            (null === input.dead || "boolean" === typeof input.dead);
        return "object" === typeof input && null !== input && $io0(input);
    };
    const prune = (input: ClassGetter): void => {
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if ("id" === key || "name" === key || "dead" === key) continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
});
