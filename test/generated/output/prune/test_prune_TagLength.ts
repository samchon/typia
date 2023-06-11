import typia from "../../../../src";
import { TagLength } from "../../../structures/TagLength";
import { _test_prune } from "../../../internal/_test_prune";
export const test_prune_TagLength = _test_prune("TagLength", TagLength.generate, (input) => ((input: Array<TagLength.Type>): void => {
    const $pp0 = (input: any) => input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem)
            $po0(elem);
    });
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("fixed" === key || "minimum" === key || "maximum" === key || "minimum_and_maximum" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        $pp0(input);
})(input));
