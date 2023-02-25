import typia from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_prune } from "../internal/_test_prune";
export const test_prune_TagLength = _test_prune("TagLength", TagLength.generate, (input) => ((input: Type[]): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("fixed" === key || "minimum" === key || "maximum" === key || "minimum_and_maximum" === key)
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
