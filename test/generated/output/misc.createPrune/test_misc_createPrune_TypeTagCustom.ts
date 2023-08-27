import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_misc_prune_TypeTagCustom = _test_misc_prune(
    "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input: TypeTagCustom): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "dollar" === key || "postfix" === key) continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input) $po0(input);
});
