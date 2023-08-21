import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_misc_prune_ObjectJsonTag = _test_misc_prune(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)((input) =>
    ((input: ObjectJsonTag): void => {
        const $is_custom = (typia.misc.prune as any).is_custom;
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "vulnerable" === key ||
                    "description" === key ||
                    "title" === key ||
                    "complicate_title" === key
                )
                    continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    })(input),
);
