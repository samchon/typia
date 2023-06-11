import typia from "../../../../src";
import { TagPattern } from "../../../structures/TagPattern";
import { _test_prune } from "../../../internal/_test_prune";
export const test_prune_TagPattern = _test_prune("TagPattern", TagPattern.generate, (input) => ((input: TagPattern): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("uuid" === key || "email" === key || "ipv4" === key || "ipv6" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
})(input));
