import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TagRange } from "../../../structures/TagRange";
export const test_prune_TagRange = _test_prune("TagRange", TagRange.generate, (input) => ((input: Array<TagRange.Type>): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("greater" === key || "greater_equal" === key || "less" === key || "less_equal" === key || "greater_less" === key || "greater_equal_less" === key || "greater_less_equal" === key || "greater_equal_less_equal" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $po0(elem);
        });
})(input));
