import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TagDefault } from "../../../structures/TagDefault";

export const test_misc_prune_TagDefault = _test_misc_prune(
    "TagDefault",
)<TagDefault>(TagDefault)((input) =>
    ((input: TagDefault): void => {
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "boolean" === key ||
                    "number" === key ||
                    "string" === key ||
                    "text" === key ||
                    "template" === key ||
                    "boolean_and_number_and_string" === key ||
                    "union_but_boolean" === key ||
                    "union_but_number" === key ||
                    "union_but_string" === key ||
                    "vulnerable_range" === key ||
                    "vulnerable_template" === key ||
                    "boolean_and_number_and_template" === key
                )
                    continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    })(input),
);
