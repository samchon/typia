import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TagRange } from "../../../structures/TagRange";

export const test_misc_prune_TagRange = _test_misc_prune<TagRange>(TagRange)(
    (input) =>
        ((input: Array<TagRange.Type>): void => {
            const $pp0 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "greater" === key ||
                        "greater_equal" === key ||
                        "less" === key ||
                        "less_equal" === key ||
                        "greater_less" === key ||
                        "greater_equal_less" === key ||
                        "greater_less_equal" === key ||
                        "greater_equal_less_equal" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input)) $pp0(input);
        })(input),
);
