import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_misc_createPrune_ObjectHttpCommentTag = _test_misc_prune(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
    (input: ObjectHttpCommentTag): void => {
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "int" === key ||
                    "uint64" === key ||
                    "uuid" === key ||
                    "items" === key
                )
                    continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    },
);
