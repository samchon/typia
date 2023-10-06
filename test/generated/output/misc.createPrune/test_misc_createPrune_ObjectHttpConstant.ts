import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_misc_createPrune_ObjectHttpConstant = _test_misc_prune(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input: ObjectHttpConstant): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if (
                "boolean" === key ||
                "bigint" === key ||
                "number" === key ||
                "string" === key ||
                "template" === key
            )
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input) $po0(input);
});
