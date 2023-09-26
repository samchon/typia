import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_misc_createPrune_ObjectHttpAtomic = _test_misc_prune(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input: ObjectHttpAtomic): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if (
                "boolean" === key ||
                "bigint" === key ||
                "number" === key ||
                "string" === key
            )
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input) $po0(input);
});
