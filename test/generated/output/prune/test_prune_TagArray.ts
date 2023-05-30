import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TagArray } from "../../../structures/TagArray";
export const test_prune_TagArray = _test_prune("TagArray", TagArray.generate, (input) => ((input: Array<TagArray.Type>): void => {
    const $is_uuid = (typia.prune as any).is_uuid;
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("items" === key || "minItems" === key || "maxItems" === key || "both" === key)
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
