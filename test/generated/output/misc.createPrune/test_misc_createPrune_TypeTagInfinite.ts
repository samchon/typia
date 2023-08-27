import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TypeTagInfinite } from "../../../structures/TypeTagInfinite";

export const test_misc_prune_TypeTagInfinite = _test_misc_prune(
    "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)((input: TypeTagInfinite): void => {
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
