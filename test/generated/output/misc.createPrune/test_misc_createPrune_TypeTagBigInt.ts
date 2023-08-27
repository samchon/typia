import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TypeTagBigInt } from "../../../structures/TypeTagBigInt";

export const test_misc_prune_TypeTagBigInt = _test_misc_prune(
    "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)((input: TypeTagBigInt): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if (
                "value" === key ||
                "ranged" === key ||
                "minimum" === key ||
                "maximum" === key ||
                "multipleOf" === key
            )
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input) $po0(input);
});
